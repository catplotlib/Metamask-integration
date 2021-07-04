import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Metamask from './Metamask';

 const allCategories=[...new Set(items.map((item)=>item.category))];


function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    const newItems=items.filter((item)=>item.category==category)
    setMenuItems(newItems)
  }
  return <main>
    <section className="menu-section">
    <div className="container">
      <div className="title">
        <wired-image elevation={5}  src="./lendNFT.png"  alt="lenNFT" />
      </div>
      <Metamask />
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
      </div>
    </section>
  </main>
}

export default App;
