import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./page/Login";
import Conditional from "./page/Conditional";
import Contact from "./page/Contact";
import Testing from "./page/Testing";
import Dessert from "./page/Dessert";
import Pizzas from "./page/Pizzas";
import Form from "./page/Form";
import FormComponents from "./page/FormComponents";
import ControlFormComponents from "./page/ControlFormComponents";
import  State from "./page/State"
import Goal from "./page/Goal";
import UseEffect from "./page/UseEffect";
import Counting from "./page/maths/Counting";
import Table from "./page/maths/Table";
import StarCounting from "./page/maths/StarCounting";

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/conditional-rendering" element={<Conditional />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/pizza" element={<Pizzas />} />
          <Route path="/desserts" element={<Dessert />} />
          <Route path="/form" element={<Form/>}/>
           <Route path="/form-component" element={<FormComponents/>}/>
           <Route path="/control-form-component" element={<ControlFormComponents/>}/>
           <Route path="state" element={<State/>}/>
           <Route path ="goal" element={<Goal/>}/>
           <Route path ="useEffect" element={<UseEffect/>}/>
           <Route path="/counting" element={<Counting/>}/> 
           <Route path="/table" element={<Table/>}/>
           <Route path="/star-counting" element={<StarCounting/>}/>
        </Routes>
        <hr />
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </>
  )
}
export default App;