import React, { useContext, useState } from 'react';
import { Cardcontex } from '../context/cardpagecontex';

const Cardcom = ({ data, onQuantityChange }) => {

  const {Carditem,removeItemCard,addItemToCard,lessthen} = useContext(Cardcontex)
  console.log('Carditem', Carditem);


 function less() {
    if (data.quantity > 1) {
        lessthen(data.id)
    }
 }
  

  return (
    <>
      <div className="md:w-96">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-center font-semibold">{data.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="flex justify-evenly items-center flex-wrap">
                  <div className="py-4">
                    <div className="flex items-center">
                      <img
                        className="h-34 w-34 mr-4"
                        src={data.thumbnail}
                        alt="Product image"
                      />
                    </div>
                  </div>

                  <div className="py-4">
                    <div className="flex items-center">
                      <button
                       onClick={less}
                        className="border rounded-md py-2 px-4 mr-2"
                      >
                        -
                      </button>
                      <span className="text-center w-8">{data.quantity}</span>
                      <button
                       onClick={()=>addItemToCard(data)}
                        className="border rounded-md py-2 px-4 ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="py-4">{data.price}</div>
                </div>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center items-center'>
         
          <button  onClick={()=> removeItemCard(data.id)} type="button" class= " mt-5 ml-7 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Remove item</button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcom;
