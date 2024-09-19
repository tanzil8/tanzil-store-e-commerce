import {Link} from "react-router-dom"
import { Cardcontex } from "../context/cardpagecontex";
import { useContext } from "react";

function Card({d}) {

  const {Carditem,addItemToCard,isItemAdded } = useContext(Cardcontex)
  console.log('Carditem',Carditem);

    
    return (

        <>
          <div  className="flex flex-wrap w-96 h-5/6 m-7">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={d.thumbnail}
                  alt="Product"
                />
        <Link to={`/Productinfo/${d.id}`}  >
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    View Product
                  </button>
                </div>
              </Link>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">{d.category}</h3>
              <p className="text-gray-500 text-sm mt-2">
              {d.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">{d.price}</span>
                <button onClick={()=> addItemToCard(d)}   className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
              {isItemAdded(d.id) ? `Added (${isItemAdded(d.id).quantity})`: 'Add To Card'}
                </button>
              </div>
            </div>
          </div>
         
        </>
      );
      
}

export default Card