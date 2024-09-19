import React, { useContext } from 'react'
import { Cardcontex } from '../context/cardpagecontex'
import Cardcom from '../componenets/cardcom';

const Cardpage = () => {
const {Carditem} = useContext(Cardcontex)
 console.log('Carditem', Carditem);
 
 const totalprice = Carditem.reduce((total , currentValue) =>total + currentValue.quantity *  currentValue.price ,0)
 const totalquantity = Carditem.reduce((total , currentValue) =>total + currentValue.quantity  ,0)

let totalpri =Math.floor( totalprice)

return (
  <>
    <div className="" >
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-extrabold text-center mt-4  mb-4">Shopping Cart</h1>
    <div className="flex flex-wrap justify-center items-center md:flex-row gap-8">
   


{Carditem.map((data)=><Cardcom data={data}/> )

}


    
      
      <div className="md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Total</h2>
        
          <div className="flex justify-between mb-2">
            <span>Quantity</span>
            <span>{totalquantity}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Price</span>
            <span>{totalpri}</span>
          </div>
          <hr className="my-2" />
        
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  )
}

export default Cardpage