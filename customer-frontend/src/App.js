import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import NavBar from "./component/common/NavBar.js";
import CustomersView from './component/customer/CustomersView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddCustomer from "./component/customer/AddCustomer.js";
import EditCustomer from "./component/customer/EditCustomer.js";


function App() {
  return (
    <main className="container mt-5" >
      <Router>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}> </Route>
          <Route
            exact
            path="/view-customers"
            element={<CustomersView />}> </Route>
          <Route
            exact
            path="/add-customers"
            element={<AddCustomer />}> </Route>
          <Route
            exact
            path="/edit-customer/:id"
            element={<EditCustomer />}> </Route>
        </Routes>
      </Router>


    </main>
  );
}

export default App;
