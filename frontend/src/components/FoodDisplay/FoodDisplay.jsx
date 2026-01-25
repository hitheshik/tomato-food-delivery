import React from 'react'
import './FoodDisplay.css'
import { StoreContextProvider } from '../../Context/StoreContext'

const FoodDisplay = () => {

    const{food_list} = useContext(StoreContext)

  return (
    <div className= 'FoodDisplay' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All"|| category===item.category){
                  return <foodItem key={index} id={item._id} name={item.name} description={item.description}price={item.price}image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay