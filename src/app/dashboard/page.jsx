// import { cards } from "../lib/data";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { redirect } from "next/navigation";
import Card from "../../components/ui/dashboard/card/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import styles from "../../components/ui/dashboard/dashboard.module.css";
import Transactions from "../../components/ui/dashboard/transactions/transactions";
import Bookings from "../../components/ui/dashboard/bookings/Booking";

const Dashboard = async () => {
  const { getPermission } = getKindeServerSession();
  // const {isLoggedIn} = await isAuthenticated();

  const requestAccess = await getPermission("admin-dashboard");

  if (!requestAccess?.isGranted) {
    redirect("/");
  }
  return (
    <MaxWidthWrapper className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}></div>
        <Transactions />
        <Bookings />
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
