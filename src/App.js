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
import Login from "./component/login/Index";
import Registation from "./component/registation";
import { AuthProvider, RequireAuth } from "react-auth-kit";

const pages = ["Home", "ItemList", "BillPage", "TextNav"];

function App() {
  return (
    <div>
      <AuthProvider authType={"localstorage"} authName={"_auth"}>
        <Router>
          <div>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Registation />} />
            </Routes>

            <AppBar navItem={pages} renderInRoutes={[]} />
            <Routes>
              <Route
                path={"/Home"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Home />
                  </RequireAuth>
                }
              />
              {/* <Route path="/" element={<Home />} /> */}

              <Route
                path={"/"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path={"/ItemList"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <ItemList />
                  </RequireAuth>
                }
              />

              {/* <Route path="/Home" element={<Home />} /> */}

              {/* <Route path="/ItemList" element={<ItemList />} /> */}
            </Routes>
            {/* <Footer/> */}
          </div>
        </Router>
      </AuthProvider>
      {/* {component === 'Home' ? <Home /> : <ItemList/>} */}
    </div>
  );
}
export default App;
