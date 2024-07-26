import React from "react";
import Stack from "@mui/material/Stack";
import CheckinForm from "./CheckinForm";

function Checkin() {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
      <CheckinForm></CheckinForm>
      {/* <HamburgerMenu></HamburgerMenu> */}
    </Stack>
  );
}

export default Checkin;
