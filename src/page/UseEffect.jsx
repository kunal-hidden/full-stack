import React, { useState } from "react";

function UseEffect() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }
  React.useEffect(() => {
    document.title = toggle ? "Welcome" : "Useeffect";
  }, [toggle]);
  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={clickHandler}>Toggle</button>
      {toggle && <h2>Logged in</h2>}
    </div>
  );
}
export default UseEffect;