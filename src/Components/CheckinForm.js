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
    console.log("Form submitted", formData);
    setDrawerOpen(false);
    onSignIn(true);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="btnCheckIn">
        <Button
          sx={{
            backgroundColor: "#007bff",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
            borderRadius: 2,
            boxShadow: 2,
          }}
          variant="contained"
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
            width: 500,
            maxWidth: 600,
            mx: "auto",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "#f5f5f5",
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
          <div className="GenderNationality">
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                required
                labelId="gender-label"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                label="Gender"
                sx={{ bgcolor: "#ffffff" }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="preferNotToSay">Others </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="nationality-label">Nationality</InputLabel>
              <Select
                required
                labelId="nationality-label"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                label="Nationality"
                sx={{ bgcolor: "#ffffff" }}
              >
                <MenuItem value="Indian">Indian</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
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
              label="Select Date of Birth"
              value={formData.dob}
              onChange={(value) => handleDateChange(value, "dob")}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ bgcolor: "#ffffff" }} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Arrival Time"
              value={formData.arrival}
              onChange={(value) => handleDateChange(value, "arrival")}
              renderInput={(params) => (
                <TextField {...params} fullWidth sx={{ bgcolor: "#ffffff" }} />
              )}
            />
          </LocalizationProvider>
          <div className="buttonCeckIn">
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
              Submit
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default FormComponent;
