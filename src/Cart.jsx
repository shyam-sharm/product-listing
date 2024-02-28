import React, { useContext } from 'react';
import { MainContext } from './Context/Index';

const Cart = () => {
    const {products,cart} = useContext(MainContext);
    let cartProducts = [];
    let total =0;
     if(cart.length != 0){
        cartProducts = products.filter(
            (product) => {
                if(cart.indexOf(product.id) == -1) return false;
                else{
                    total += Number(product.price); 
                return true;
                }
            }
        )
       
     }

    return (
 <div className='max-w-[1200px]  mx-auto'>
    <div className="container mx-auto mt-8">
  <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
  <hr  className='my-3'/>
  {
    cartProducts.map(
        (prod) => {
            return <div key={prod.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={prod.image}
              alt="Product 1"
              className="w-[100px] h-[100px] object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{prod.title}</h2>
            <p className="text-gray-600 mb-2">{prod.price}</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
              Remove
            </button>
          </div>
        }
    )
  }
         <div className='mt-4'>
         <p className='text-2xl font-blod'>Total:${total}</p>
         </div>
 </div>

</div>
    );
}

export default Cart;
