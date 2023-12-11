import { useContext, useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import Loader from "../../components/loader/Loader";
import { ProductsContext } from "../../context/productsContext";
import ButtonSave from "../../components/buttonSave/ButtonSave";
import ButtonDelete from "../../components/buttonDelete/ButtonDelete";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delet, setDelet] = useState(false);

  const navigate = useNavigate();
  const { helpers } = useContext(ProductsContext);

  useEffect(() => {
    setLoading(true);
    helpers
      .getCart()
      .then((response) => {
        setCart(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (delet) helpers.deleteAll();
    setDelet(false);
  }, [delet]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          {cart.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cart={cartItem} />
          ))}
          <div>
            {`Total: $${cart.total}`}
            <ButtonSave
              onClick={() => {
                navigate("/tienda/cart/checkout");
              }}
            />
            <ButtonDelete onClick={() => setDelet(true)} />
          </div>
        </>
      )}
    </div>
  );
}
