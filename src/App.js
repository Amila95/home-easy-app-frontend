// import logo from './logo.svg';
// import './App.css';
// import Home from "./component/home";
// import AppBar from './component/appBar/Index';

// function App() {
//   return (
//     <div>
//       <AppBar/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Index";
import ItemList from "./component/itemList";
import BillPage from "./component/billPage";
import AppBar from "./component/appBar";

const pages = ["Home", "ItemList", "BillPage", "TextNav"];

function App() {
  return (
    <div>
      <Router>
        <div>
          <AppBar navItem={pages} />
          <Routes>
            <Route path="/" element={<ItemList />} />

            <Route path="/Home" element={<Home />} />

            <Route path="/ItemList" element={<ItemList />} />
          </Routes>
          {/* <Footer/> */}
        </div>
      </Router>
      {/* {component === 'Home' ? <Home /> : <ItemList/>} */}
    </div>
  );
}
export default App;
