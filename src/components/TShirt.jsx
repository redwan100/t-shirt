import React from 'react'

const TShirt = (tshirt) => {
  const { _id, name, picture, price, handleAddToCart } = tshirt;

  return (
    <div className="p-3 border grid place-content-center shadow-sm rounded-md text-center space-y-3">
      <img className="h-56 w-full" src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className='mx-auto bg-slate-200 py-2 px-3 rounded-sm font-semibold duration-200 hover:bg-slate-300' onClick={()=>handleAddToCart(tshirt)}>
        Buy Now
      </button>
    </div>
  );
}

export default TShirt