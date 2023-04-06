import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../components/TShirt";
import Cart from "../components/Cart";
import toast from "react-hot-toast";

const Home = () => {
  const [cart, setCart] = useState([]);
  const tshirts = useLoaderData();

  const handleAddToCart = (tshirt) => {
    const exist = cart.find((t) => t._id === tshirt._id);

    if (exist) {
      toast.error("You have already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      toast.success("Item is added!");
    }
  };

  const handleDeleteCartItem = (id) => {
    const rest = cart.filter((item) => item._id !== id);
    setCart(rest);
    toast.success('item has been deleted')
  };

  return (
    <div className="grid grid-cols-[3fr,_1fr]">
      <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))]">
        {tshirts.map((tshirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            key={tshirt._id}
            {...tshirt}
          />
        ))}
      </div>
      {/* ========== Cart ========== */}
      <div>
        <Cart cart={cart} handleDeleteCartItem={handleDeleteCartItem} />
      </div>
    </div>
  );
};

export default Home;
