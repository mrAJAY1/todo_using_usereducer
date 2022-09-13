import { useReducer, useState } from "react";
import "./index.scss";
import reducer from "../reducers";

const defaultState = {
  items: [],
  isModalOpen: false,
  modalContent: "hellow",
};

function Index() {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: value });
  };
  return (
    <div className='todo-container'>
      <div className='title'>
        <h2>TODO APP</h2>
      </div>
      <form className='input-form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='display-todo'>
        {state.items.map((item) => {
          return (
            <div key={item.id} className='card'>
              <p>{item.value}</p>
              <button
                type='button'
                onClick={(e) =>
                  dispatch({
                    type: "COMPLETED",
                    payload: {
                      value: e.target.value,
                      id: item.id,
                    },
                  })
                }
                className='checkBox'
              >
                completed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
