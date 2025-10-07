import { Link } from "react-router-dom";

export const Nav = () => {
  //Dejamos los Link preparados para cuando hagamos filtrado por categoria
  //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
  //en la barra de busqueda
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/salado"}>Salado</Link>
        </li>
        <li>
          <Link to={"/category/dulce"}>Dulce</Link>
        </li>
      </ul>
    </nav>
  );
};
