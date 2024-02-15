// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchTxt, restaurants){
  const filterData = restaurantList.filter((restaurant) => restaurant.data.name.includes(searchTxt));
  return filterData;
}

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
        />
        <button className="search-btn" 
        onClick = {()=> {
          
          const data = filterData(searchTxt, restaurants);
          setRestaurants(data);
        }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
