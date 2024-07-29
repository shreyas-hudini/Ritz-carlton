import React, { useState } from "react";
import {
  Button,
  Drawer,
  BottomNavigation,
  Box,
  BottomNavigationAction,
} from "@mui/material";
import "./Style.css";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import HotTubOutlinedIcon from "@mui/icons-material/HotTubOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="buttons">
        <Button
          sx={{ backgroundColor: "white", color: "black" }}
          onClick={toggleMenu}
          variant="contained"
          size="small"
        >
          <MenuIcon />
        </Button>
      </div>
      <Drawer
        className="Hamburger"
        anchor="bottom"
        open={isOpen}
        onClose={toggleMenu}
      >
        <Box sx={{ width: 500, height: 150 }}>
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="DINING"
              icon={<RestaurantOutlinedIcon />}
            />
            <BottomNavigationAction
              label="SPA & WELLNESS"
              icon={<HotTubOutlinedIcon />}
            />
            <BottomNavigationAction
              label="EVENTS"
              icon={<EventAvailableOutlinedIcon />}
            />
            <BottomNavigationAction
              label="THINGS TO-DO"
              icon={<NaturePeopleOutlinedIcon />}
            />
            <BottomNavigationAction
              label="ABOUT"
              icon={<ImportContactsOutlinedIcon />}
            />
          </BottomNavigation>
        </Box>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
