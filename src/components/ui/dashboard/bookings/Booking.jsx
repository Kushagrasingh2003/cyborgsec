import { fetchBookings} from "@/lib/data";
// import Search from "@/components/ui/dashboard/search/search";
import styles from "../transactions/transactions.module.css";
import Pagination from "@/components/ui/dashboard/pagination/pagination";

const Booking = async({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, bookings } = await fetchBookings(q, page);
  // const user = await fetchUserById(orders)
 
  
  return (
    <div className={styles.container}>
     {/* <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        
      </div> */}
      <h1 className={styles.title}>Request For Demo Class</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>phone no.</td>
            <td>course</td>
            <td>Date</td>
            
          </tr>
        </thead>
        <tbody>
        {bookings.map(async(booking)=>{
          
          return(
          <tr key={booking.id}>
            <td>
              <div className={styles.user}>
                
              {booking.name}
              </div>
            </td>
            <td>
              <div >
                
               {booking.email }
              </div>
            </td>
            <td>
              <div >
                
                {booking.phone}
              </div>
            </td>
            <td>
              <div >
                
                {booking.course}
              </div>
            </td>
            
            <td>{booking.createdAt?.toString().slice(4, 16)}</td>
          </tr>
          )
        })}
         
         
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};
export default Booking;