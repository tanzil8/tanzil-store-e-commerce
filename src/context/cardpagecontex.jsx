import React, { createContext, useEffect, useState,  } from 'react';
import { json } from 'react-router-dom';

// Create the context
export const Cardcontex = createContext();

const Cardcontexprovider = ({ children }) => {
const [Carditem, setCarditem] = useState([])
const [loading, setLoading] = useState(false)
useEffect(()=>{
  if (loading) {
    
    localStorage.setItem('Carditem',JSON.stringify(Carditem))
  }
},[Carditem])

useEffect(()=>{
  const stroageitem = localStorage.getItem('Carditem')
  if (stroageitem) {
    setCarditem([...JSON.parse(stroageitem)])
    setLoading(true)
  }
},[])

function addItemToCard(item) {
  const arr = Carditem

const itemIndex = Carditem.findIndex((data)=> data.id == item.id)

if (itemIndex == -1) {
  {
    arr.push({...item, quantity : 1})
  }
}else{
  arr[itemIndex].quantity++
}
setCarditem([...arr])

}
function lessthen(id) {
  const arr = Carditem

const itemIndex = Carditem.findIndex((data)=> data.id == id)


 

  arr[itemIndex].quantity--

setCarditem([...arr])

}


function removeItemCard(id) {
  const arr = Carditem

  const itemIndex = Carditem.findIndex((data)=> data.id == id)
  arr.splice(itemIndex, 1)
  setCarditem([...arr])
}

function isItemAdded(id) {
  const arr = Carditem

  const itemIndex = Carditem.findIndex((data)=> data.id == id)
  if (itemIndex == -1) {
    return null
  }else{
    return arr[itemIndex]
  }
}

  return (
    <Cardcontex.Provider value={{Carditem,lessthen,addItemToCard,removeItemCard,isItemAdded}}>
      {children}
    </Cardcontex.Provider>
  );
}

export default Cardcontexprovider;
