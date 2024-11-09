import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;