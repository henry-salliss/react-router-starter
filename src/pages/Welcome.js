import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to the website</h1>
      <Route path={"/welcome/newuser"}>
        <p>Welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
