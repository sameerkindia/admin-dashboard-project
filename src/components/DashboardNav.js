import { HiSearch } from "react-icons/hi";

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <p>
        Hello <span>Shahrukh </span>👋
      </p>
      <label>
        <span>
          <HiSearch />
        </span>
        <input type="text" placeholder="Search" />
      </label>
    </nav>
  );
}

export default DashboardNav;
