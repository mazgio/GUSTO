import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Services from "./components/pages/Services.js";
import Contact from "./components/pages/Contact/Contact.js";
import Signin from "./components/pages/Signin/Signin.js";
import Signup from "./components/pages/Signup/Signup.js";
import CustomerSignup from "./components/pages/Signup/CustomerSignup.js";
import BusinessSignup from "./components/pages/Signup/BusinessSignup.js";
import Footer from "./components/Footer/Footer.js";
import './App.css';
import { Dashboard } from "./components/pages/Dashboard/HomeUser.jsx";
import { AuthContext, AuthProvider } from "./context/AuthProvider.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Logout from "./components/Logout.jsx";
import { Dashboard1 } from "./components/pages/Dashboard/AboutUser.jsx";
import { Dashboard2 } from "./components/pages/Dashboard/ServicesUser.jsx";
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ContainerSearch from "./SearchPage.js";
import Success from "./components/pages/Contact/success.js";
import Team from "./components/pages/About/Team.js";


function App() {

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={currentUser._id ? <Dashboard /> : <Home />} />
          <Route path="/posts" element={<ContainerSearch />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" exact component={() => (!currentUser ? <AuthProvider /> : <Navigate to="/home" />)} />
          <Route path="/about" element={currentUser._id ? <Dashboard1 /> : <About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={currentUser._id ? <Dashboard2 /> : <Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/team" element={<Team />} />
          <Route path="/customer" element={<CustomerSignup setCurrentUser={setCurrentUser} />} />
          <Route path="/business" element={<BusinessSignup setCurrentUser={setCurrentUser} />} />
          <Route path="/profile" element={<ProtectedRoute auth={(currentUser._id != null)}>
            <Dashboard />
          </ProtectedRoute>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
