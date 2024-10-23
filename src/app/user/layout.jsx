import Navbar from "../../components/ui/dashboard/navbar/navbar";
import Sidebar from "../../components/ui/dashboard/sidebar/sidebar";
import styles from "../../components/ui/dashboard/dashboard.module.css";
import Footer from "../../components/ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
     
      <div className={styles.content}>
        
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        
      </div>
    </div>
  );
};

export default Layout;