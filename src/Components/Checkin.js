import React from "react";
import Stack from "@mui/material/Stack";
// import HamburgerMenu from "./Hamburger";
import FormComponent from "./CheckinForm";

function Checkin() {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
      <FormComponent></FormComponent>
      {/* <HamburgerMenu></HamburgerMenu> */}
    </Stack>
  );
}

export default Checkin;
