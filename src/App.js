import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AnotherForm from "./components/AnotherForm";

function App() {
  const [count, setCount] = useState(0);
  return <AnotherForm />;
  // return (
  //   <div className="App">
  //     <h1>This is useState demo</h1>
  //     <div className="calculator-board">
  //       <CommonButton data={{ count, isPlus: false, number: 10, setCount }} />
  //       <CommonButton data={{ count, isPlus: false, number: 1, setCount }} />
  //       <Result count={count} />
  //       <CommonButton data={{ count, isPlus: true, number: 1, setCount }} />
  //       <CommonButton data={{ count, isPlus: true, number: 10, setCount }} />
  //     </div>
  //     <CommonButton data={{ count, isClear: true, setCount }} />

  //     <Form />
  //   </div>
  // );
}

export default App;
