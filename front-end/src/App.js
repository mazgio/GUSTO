import React, { useState, useContext } from "react";
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
import { Dashboard2 } from "./components/pages/Dashboard/ServicesUser";
import PostDetails from './components/PostDetails/PostDetails.jsx';
// import HomeSearch from './components/Home/HomeSearch.js';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import ContainerSearch from "./SearchPage.js";
import Success from "./components/pages/Contact/success.js";
import Team from "./components/pages/About/Team.js";


function App() {
  //const [currentUserId, setCurrentUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);


  const { currentUser, setCurrentUser } = useContext(AuthContext);

  // logout button
  const logout = () => {
    localStorage.removeItem("data");
    // setToken(false);
    setCurrentUser("");
    setIsLoggedIn(false);
    setShowLogin(true);

  };
  return (
    <div className="home">


      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Navigate to='/' />} /> */}
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={currentUser._id ? <Dashboard /> : <Home />} />
          <Route path="/posts" element={<ContainerSearch />} />
          {/* <Route path="/posts/search" component={<HomeSearch />} /> */}
          <Route path="/posts/:id" element={<PostDetails />} />
          {/* <Route path={['/creators/:name', '/tags/:name']} component={<CreatorOrTag />} /> */}
          <Route path="/auth" exact component={() => (!currentUser ? <AuthProvider /> : <Navigate to="/home" />)} />
          <Route path="/about" element={currentUser._id ? <Dashboard1 /> : <About />} />
          <Route path="/team" element={<Team />} />

          <Route path="/services" element={currentUser._id ? <Dashboard2 /> : <Services />} />
          {/* <Route path="/rating" element={<Rating />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/team" element={<Team />} />
          <Route path="/customer-signup" element={<CustomerSignup setCurrentUser={setCurrentUser} />} />
          <Route path="/business-signup" element={<BusinessSignup setCurrentUser={setCurrentUser} />} />
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
