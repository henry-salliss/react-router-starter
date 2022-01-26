import { Outlet, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to the website</h1>
      <Link to={"newuser"}>New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
