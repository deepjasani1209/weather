import React, { useState } from "react";
import menu from "./MenuApi";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./style.css";

function MenuCard({ menuData }) {
  return (
    <div>
      {menuData.map((index) => {
        const { id, name, category, image, description, price } = index;
        return (
          <>
            <CardGroup className="main-card" key={id}>
              <Card>
                <h1 className="card-name">{name}</h1>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <h2 className="card-category">{category}</h2>
                  <Card.Footer>
                    <Card.Text className="card-des">{description}</Card.Text>
                  </Card.Footer>
                  <Card.Text className="card-des">Price : {price}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </>
        );
      })}
    </div>
  );
}

export default MenuCard;
