import React from "react";
import ListingCard from "./ListingCard";


/* 
description: "heater"
id: 1
image: "./images/heater.jpg"
location: "BROOKLYN"
*/


function ListingsContainer({ listingsState, search, deleteListing }) {

const filteredListings = [...listingsState].filter(el =>
    el.description.toLowerCase().includes(search.toLowerCase()))

    console.log(listingsState.id)
    //DELETE - LET US PRAY

  return (
    <main>
      <ul className="cards">
        {filteredListings.map(el => 
          <ListingCard 
          listing={el}
          key={el.id}
          deleteListing={deleteListing}
          />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
