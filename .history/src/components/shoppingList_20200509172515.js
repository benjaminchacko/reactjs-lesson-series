import React, { useReducer, useRef, Fragment } from "react";
import { Button } from 'react-bootstrap'

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

  return (
    <Fragment>
      <h1>Shopping List</h1>
      <form>
        <input ref={inputRef} />
        <button onClick={addValue}>Submit</button>
      </form>
      <button onClick={
        () => dispatch({type: 'clear'})
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
    </Fragment>
  );
};