import { fetchOrders,fetchUserById } from "@/lib/data";
// import Search from "@/components/ui/dashboard/search/search";
import styles from "./transactions.module.css";
import Pagination from "@/components/ui/dashboard/pagination/pagination";

const Transactions = async({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, orders } = await fetchOrders(q, page);
  // const user = await fetchUserById(orders)
  let user={};
  
  return (
    <div className={styles.container}>
     {/* <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        
      </div> */}
      <h1 className={styles.title}>Latest Transactions</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>phone no.</td>
            <td>transactionId</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
        {orders.map(async(order)=>{
          
           user = await fetchUserById(order.userId);
          return(
          <tr key={order.id}>
            <td>
              <div className={styles.user}>
                
              {user.name}
              </div>
            </td>
            <td>
              <div >
                
               {user.email }
              </div>
            </td>
            <td>
              <div >
                
                {user.phone}
              </div>
            </td>
            <td>
              <div >
                
                {order._id.toString()}
              </div>
            </td>
            <td>
            {order.paymentStatus === "Paid" ?
              <span className={styles.statusdone} >
                {order.paymentStatus}
              </span>
              :
              <span className={styles.statuspending} >
                {order.paymentStatus}
              </span>}
              
            </td>
            <td>{order.createdAt?.toString().slice(4, 16)}</td>
            <td>{order.amount}</td>
          </tr>
          )
        })}
         
         
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Transactions;
