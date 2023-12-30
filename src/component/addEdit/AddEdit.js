import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import  "./addStyle.css"



function AddEdit() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getDataLocalStorage);
  const [editData, setEditData] = useState("");
  const [toggle, setToggle] = useState(false);

  function getDataLocalStorage() {
    const lists = localStorage.getItem("ADD-DELETE-EDIT-ITEMS");
    if (lists) {
      return JSON.parse(lists);
    }else {
      return [];
    }
  }

  function addItems() {
    if (!input) {
      alert("Plzz Fill The Data.");
    }else if(input && toggle){
        setItems(
          items.map((index)=>{
              if(index.id=== editData){
                  return {...index,name:input};
              }
                  return index;      
          })
        );
        setInput("");
      setEditData("");
      setToggle(false);
      }
      else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, myNewData]);
      setInput("");
    }
  }

  function deleteItem(i) {
    const updatedList = items.filter((index) => {
      return index.id !== i;
    });
    setItems(updatedList);
  }

  function removeAll() {
    setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("ADD-DELETE-EDIT-ITEMS", JSON.stringify(items));
  }, [items]);

  function editItem(i) {
    const editItem = items.find((index) => {
      return index.id === i;
    });
    setInput(editItem.name);
    setEditData(i);
    setToggle(true);
  }

  return (
    <>
      <div>
        <div>
          <figure>
            <img src="./images/file.svg" alt="addedit" className="img-div"/>
            <figcaption className="mt-3 title">ADD YOUR LIST HERE ✌️</figcaption>
          </figure>
          <div>
            {/* <input
              type="text"
              placeholder="✍️ Add Item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            /> */}
            <Form>
      <Row className="main-input-div">
        <Col className="child-input-div">
          <Form.Control className="w-75 child-input-div-1" placeholder="✍️ Add Item" value={input}
              onChange={(e) => setInput(e.target.value)}/>
              </Col>
              <Col className="icone">{toggle ? (
              <i
                className="fa-solid fa-pen-to-square"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            ) : (
              <i
                className="fa-solid fa-plus"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            )}</Col>
              
        
      </Row>
    </Form>
          </div>
          <br />
          <div className="main-show-data">
            
            {items.map((index, i) => {
              return (
                <div className="set-show-data">
                <div key={i} className="show-data">
                  <h3 className="data-name">{index.name}</h3>
                  <div className="icon-data">
                    <i
                      className="fa-solid fa-pen-to-square"
                      aria-hidden="true"
                      onClick={() => editItem(index.id)}
                    ></i>
                    <span> </span>
                    <i
                      className="fa-solid fa-trash"
                      aria-hidden="true"
                      onClick={() => deleteItem(index.id)}
                    ></i>
                  </div>
                </div>
                </div>
              );
            })}
            
          </div>
          <div className="mt-4">
            <Button variant="dark" onClick={removeAll}>REMOVE ALL</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEdit;


