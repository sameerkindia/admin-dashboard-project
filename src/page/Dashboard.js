import DashboardInfo from "../components/DashboardInfo";
import DashboardNav from "../components/DashboardNav";
import Overview from "../components/Overview";
import ProductSection from "../components/ProductSection";

function Dashboard() {
  return (
    <>
      <section className="main">
        <DashboardNav />
        <div className="dashborad-content">
          <DashboardInfo />
          <Overview />
        </div>
        <ProductSection />
      </section>
    </>
  );
}

export default Dashboard;
