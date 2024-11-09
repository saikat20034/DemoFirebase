import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>

      </div>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default Root;