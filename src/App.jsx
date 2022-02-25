import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClubLogin from "./pages/clubs/ClubsLogin";
import ClubRegister from "./pages/clubs/ClubsRegister";
import UserRegister from "./pages/user/UserRegister";
import ClubsPage from "./pages/display/ClubsPage";
import UserLogin from "./pages/user/UserLogin";
import ContactPage from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import MilanState from "./context/MilanState";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <MilanState>

        <Router>
          <Routes>
            {/* //* Home routes */}

            <Route exact path="/" element={<Home isLoggedIn={isLoggedIn}/>} />

            {/* //* Auth routes - USER*/}

            <Route exact path="/user/register" element={<UserRegister />} />
            <Route exact path="/user/login" element={<UserLogin setIsLoggedIn={setIsLoggedIn}/>} />

            {/* //* Auth routes - CLUBS*/}

            <Route exact path="/clubs/login" element={<ClubLogin />} />
            <Route exact path="/clubs/register" element={<ClubRegister setIsLoggedIn={setIsLoggedIn}/>} />

            {/* //* Display Routes */}
            <Route exact path="/display/clubs" element={<ClubsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/about-us" element={<AboutUs />} />

            {/* //* Donations */}
            {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}


          </Routes>
        </Router>
      </MilanState>

    </>
  );
};

export default App;
