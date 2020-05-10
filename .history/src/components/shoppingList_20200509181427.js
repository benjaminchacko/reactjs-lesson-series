import React, { useState, useReducer, useRef, Fragment } from "react";
import { Button, Modal } from 'react-bootstrap'

export const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case 'remove':
        return state.filter((_, index) => index != action.index);
      case 'clear':
        return [];
      default:
        return state;
    }
  }, []);

  const addValue = e => {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = "";


  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <h1>Shopping List</h1>
      <form>
        <input ref={inputRef} />
        <button onClick={addValue}>Submit</button>
      </form>
      <button onClick={
        () => dispatch({ type: 'clear' })
      }>Clear</button>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <Button variant="danger" onClick={() => dispatch({ type: 'remove', index })}>
              X
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
};