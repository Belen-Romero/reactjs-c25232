import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {
  return (
    <Item {...detail}>
      <button>Enviar al carrito</button>
    </Item>
  );
};
