import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

function Navbar({ filterItem, menuList }) {
  return (
    <>
      <div>
        {menuList.map((index) => {
          return (
            <Button className="btn" onClick={() => filterItem(index)}>
              {index}
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
