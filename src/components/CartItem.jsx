import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

export const CartItem = ({item, itemIndex}) => {
  const cart = useSelector((state) => state.cart)
  let style;
  if (cart.length-1 > itemIndex) {
    style = "border-b-[3px] border-gray-400"
  }

  const dispatch = useDispatch();
  const removeFromCart = ()=> {
    dispatch(remove(item.id))
    toast.error("Item Removed")
  }
  return (
    <div className={`flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 ${style}` }>
        <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
            <div className='w-[30%]'><img className='object-cover' src={item.image} alt="" /></div>

            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1 className="text-xl text-slate-700 font-semibold">{item.title} </h1>
                <h1 className="text-base text-slate-700 font-medium">{item.description} </h1>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg text-green-600">${item.price}</p>
                    <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}><MdDelete/> </div>
                </div>
            </div>
        </div>
    </div>
  )
}
