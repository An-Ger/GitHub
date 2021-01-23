import React, { useState, useReducer, useLayoutEffect, useEffect } from "react";
class MyCount extends React.Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    return <span>{this.state.count}</span>;
  }
}
function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}
function MyCountFunc() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("fucker");
  //   const [count, setCount] = useState(0); //返回数组，[a,b]
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // setCount(c => c + 1 );
  //       dispatchCount({ type: "minus" });
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  useEffect(() => {
    console.log("efffcecasd");
    return () => console.log("efffr detached");
  }, [count]);
//   useLayoutEffect(() => {
//     console.log("efffcecasd");
//     return () => console.log("efffr detached");
//   }, [count]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatchCount({ type: "add" })}>{count}</button>
    </div>
  );
}
export default MyCountFunc;
