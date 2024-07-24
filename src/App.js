import React, { useState } from "react";
import CheckinForm from "./Components/CheckinForm";
import Carousel from "./Components/Carousel";
import Cards from "./Components/Cards";
import ThingsCard from "./Components/ThingsCard";
import HotelCard from "./Components/HotelCard";
import HamburgerMenu from "./Components/Hamburger";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    // Example function to handle sign-in action
    // You may replace this with actual authentication logic
    setSignedIn(true);
  };

  return (
    <div className="App">
      {signedIn ? (
        <>
          <Carousel />
          <HotelCard />
          <Cards />
          <ThingsCard />
          <HamburgerMenu></HamburgerMenu>
        </>
      ) : (
        <>
          <Carousel />
          <HotelCard />
          <Cards />
          <ThingsCard />
          <CheckinForm onSignIn={handleSignIn} />
        </>
      )}
    </div>
  );
};

export default App;
