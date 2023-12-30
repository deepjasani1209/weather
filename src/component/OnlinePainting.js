import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import menu from "./MenuApi.js";
import "./style.css";

// import MenuCard from './MenuCard'
const uniqueList = [
  ...new Set(
    menu.map((index) => {
      return index.category;
    })
  ),
  "ALL",
];
console.log(uniqueList);

function OnlinePainting() {
  const [menuData, setMenuData] = useState(menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "ALL") {
      setMenuData(menu);
      return;
    }

    const updateList = menu.filter((index) => {
      return index.category === category;
    });

    setMenuData(updateList);
  };
  return (
    <>
      <div>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
}

export default OnlinePainting;
