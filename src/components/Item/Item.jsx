export const Item = ({ nombre, precio, descripcion, children }) => {
  //recordamos el uso del children, no es obligatorio que este

  return (
    <article>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Descripcion{descripcion}</p>
      {children}
    </article>
  );
};
