import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  //recordamos el uso del children, no es obligatorio que este

  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Precio: ${price}</p>
      <p>Descripcion{description}</p>
      {children}
    </article>
  );
};
