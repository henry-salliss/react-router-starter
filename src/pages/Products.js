import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  navigate(-1);

  return (
    <section>
      <h1>Here are our products</h1>
      <ul>
        <li>
          <Link to={"/products/video-game"}>Video game</Link>
        </li>
        <li>
          <Link to={"/products/tv"}>TV</Link>
        </li>
        <li>
          <Link to={"products/book"}>Book</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
