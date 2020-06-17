import React, { useState } from "react";


const Main = (props) => {
  const [user, setUser] = useState({ name: '' });

  //const [count, setCount] = useState(0);
  //let nameSend = '';
  const clickme = (a) => {
    setUser({ name: a });
  }

  return (
    <div>
      <input type='text' onChange={(e) => clickme(e.target.value)}></input>
      <p>main</p>
      <button onClick={() => { props.changeName(user.name) }}>click me!</button>
      <button onClick={() => clickme('casa')}>click me 2!</button>

      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
};
export default Main;
