import React, { useState } from "react";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import "./Style.css";
import MenuIcon from "@mui/icons-material/Menu";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import SpaIcon from "@mui/icons-material/Spa";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MapIcon from "@mui/icons-material/Map";
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
        <List className="List">
          <ListItem onClick={toggleMenu}>
            <LocalOfferIcon />
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem onClick={toggleMenu}>
            <DinnerDiningIcon />
            <ListItemText primary="Dining" />
          </ListItem>
          <ListItem onClick={toggleMenu}>
            <SpaIcon />
            <ListItemText primary="Spa" />
          </ListItem>
          <ListItem onClick={toggleMenu}>
            <EventNoteIcon />
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem onClick={toggleMenu}>
            <MapIcon />
            <ListItemText primary="To-do"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
