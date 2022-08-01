import React from "react";
import "./App.css";
import { BrowserRouter as Reuter, Routes, Route } from "react-router-dom";
import {
  Form,
  Navbar,
  Homepage,
  Mainhome,
  Carddata,
  Cardwithlogodata,
} from "./components/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Mainhome />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="carddata" element={<Carddata />} />
        <Route path="cardwithlogodata" element={<Cardwithlogodata />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;

{
  /* <Carddata /> */
}
{
  /* <Cardwithlogodata /> */
}
{
  /* <Homepage /> */
}
{
  /* <Form /> */
}
