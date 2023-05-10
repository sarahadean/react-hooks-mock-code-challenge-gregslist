import React,{ useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

/* 
Core Deliverables
As a user:

[X]When the app starts, I can see all listings.

[X]I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.

[ ]I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.

[X]I can search for listings by their name.

Endpoints for Core Deliverables
The base URL for your backend is: http://localhost:6001.

Hierarchy
App
 |
 |-Header
 |   |
 |  Search (search state)
 |
 ListingsContainer
       |
       ListingCard (favorite/unfav state)
*/


function App() {

  const [listingsState, setListings] = useState([])
  const [search, setSearch] = useState('')
  

  useEffect(() => {getListings()}, [])

  function getListings(){
  fetch('http://localhost:6001/listings')
  .then(r => r.json())
  .then(listingsState => setListings(listingsState))
  }

  // console.log(listingsState)

    function updateSearch(newSearch){
      setSearch(newSearch)
    }
 
    function deleteListing(id){
      setListings([...listingsState].filter(currList =>
        currList.id === id ? false : currList))
    }



  return (
    <div className="app">
      <Header search={search} updateSearch={updateSearch}/>
      <ListingsContainer 
      listingsState={listingsState}
      search={search}
      deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
