import React, { useState, useEffect } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  // function component
  const [count, setCount] = useState(0);
  setCount(2);
  setCount(3);

  // class Component
  // this.state = {
  //    count: 0
  //}
  //   this.setState({
  //       count: 2
  //   })

  // class
  //   componentDidMount(){
  // abcxyz
  //   }

  // function
  //   useEffect(() => {
  //        abcxyz
  //   }, [])

  // TH2: luôn chạy sau render
  //    useEffect(() => {
  //         abcxyz
  //    })

  // TH3: có dependency và khác rỗng
  //    useEffect(() => {
  //         abcxyz
  //    }, [product])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
