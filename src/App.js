import React, {useState} from "react";
import './styles/index.scss';
import RouterLinks from "./component/Routers/RouterLinks";

function App() {

  return (
    <div className="App">
      {/* <TableCraete /> */}
      {/* {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      } */}
      {
      <RouterLinks/>
      }
    </div>
  );
}

export default App;
