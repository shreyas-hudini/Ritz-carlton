import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Drawer,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setField } from "../redux/formSlice";
import { styled } from "@mui/system";

const nameRegex = /^[a-zA-Z\s]*$/;
// const currentDate = new Date();
const firstName = document.getElementById("firstname");

const CustomTextField = styled(TextField)({
  "& input[type=number]": {
    "-moz-appearance": "textfield",
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

const FormComponent = ({ onSignIn }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setField({ field: name, value }));
  };

  const handleDateChange = (date, field) => {
    dispatch(setField({ field, value: date }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameRegex.test(firstName)) {
      alert("Name should contain only alphabetic characters");
    } else {
      // try {
      alert("You've successfully checked-in", formData);
      setDrawerOpen(false);
      onSignIn(true);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="btnCheckIn">
        <Button
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
            backgroundColor: "transparent",
            "&:hover": {
              color: "#45b7d1",
              borderColor: "#45b7d1",
              backgroundColor: "transparent",
              transform: "scale(1.1)",
            },
            borderRadius: 1,
            boxShadow: 1,
          }}
          variant="outlined"
          onClick={toggleDrawer}
        >
          Checkin
        </Button>
      </div>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          ".MuiDrawer-paper": {
            height: "auto",
            maxHeight: "80vh",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "90%",
            maxWidth: 600,
            mx: "auto",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "rgba(245, 245, 245, 0.9)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">Checkin Form</Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: "#007bff" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            variant="outlined"
            value={formData.firstname}
            onChange={handleInputChange}
            fullWidth
            sx={{ bgcolor: "#ffffff" }}
          />
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last Name"
            variant="outlined"
            value={formData.lastname}
            onChange={handleInputChange}
            fullWidth
            sx={{ bgcolor: "#ffffff" }}
          />
          <FormControl fullWidth sx={{ bgcolor: "#ffffff" }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              fullWidth
              required
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="preferNotToSay">Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ bgcolor: "#ffffff" }}>
            <InputLabel id="nationality-label">Nationality</InputLabel>
            <Select
              fullWidth
              required
              labelId="nationality-label"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              label="Nationality"
            >
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </FormControl>
          <CustomTextField
            required
            id="number"
            name="number"
            label="Phone Number"
            type="number"
            variant="outlined"
            value={formData.number}
            onChange={handleInputChange}
            fullWidth
            sx={{ bgcolor: "#ffffff" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              // minDate={new Date(1947, 12 - 1, 1)}
              label="Date of Birth"
              value={formData.dob}
              onChange={(value) => handleDateChange(value, "dob")}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ bgcolor: "#ffffff" }} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              fullWidth
              label="Arrival Time"
              value={formData.arrival}
              onChange={(value) => handleDateChange(value, "arrival")}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ bgcolor: "#ffffff" }} />
              )}
            />
          </LocalizationProvider>
          <div className="buttonCheckIn">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: "#007bff",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              Check-In
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default FormComponent;
