import React from 'react'
import Searchbar from "./Searchbar";
import Search from "./Search";
import Chats from "./Chats";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Searchbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar
