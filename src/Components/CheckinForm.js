import React, { useState} from "react";
import { Drawer, Button, FormControl, Select, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";
import { useSelector, useDispatch } from "react-redux";
import { formSubmit } from "../reducers/submitSlice";
import dayjs from "dayjs"

const CheckinForm = ({ onSignIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  
  console.log(formData);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      formSubmit({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleDateChange = (value, field) => {
    dispatch(
      formSubmit({
        ...formData,
        [field]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.firstname &&
      formData.lastname &&
      formData.gender &&
      formData.number &&
      formData.dob &&
      formData.arrival &&
      formData.nationality
    ) {
      onSignIn();
    } else {
      alert("Please fill in all field");
    }
  };
  return (
    <>
    {!isOpen && (
      <div className="buttons">
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
          onClick={toggleMenu}
          variant="contained"
          color="primary"
        >
          Checkin
        </Button>
      </div>
    )}
      <Drawer
        className="Hamburger"
        anchor="bottom"
        open={isOpen}
        onClose={toggleMenu}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ mt: 2,

            }}
            className="textfield"
            required
            id="firstname"
            name="firstname"
            label="FirstName"
            variant="outlined"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ mt: 2 }}
            className="textfield"
            required
            id="lastname"
            name="lastname"
            label="LastName"
            variant="outlined"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <FormControl fullWidth>
            <InputLabel sx={{ mt: 1 }} id="gender-label">
              Gender
            </InputLabel>
            <Select
              required
              sx={{ mt: 2 }}
              className="textfield"
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              helpertext="Please Select your Gender"
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"preferNotToSay"}>Prefer Not to say</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel sx={{ mt: 1 }} id="nationality-label">
              Nationality
            </InputLabel>
            <Select
              required
              className="textfield"
              sx={{ mt: 2 }}
              labelId="nationality-label"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              helpertext="Please Select your Nationality"
            >
              <MenuItem value={"Indian"}>Indian</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"French"}>French</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            sx={{ mt: 2 }}
            className="textfield"
            type="number"
            id="number"
            name="number"
            label="PhoneNumber"
            variant="outlined"
            value={formData.number}
            onChange={handleInputChange}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select Date of Birth"
                value={formData.dob ? dayjs(formData.dob) : null}
                onChange={(value) => handleDateChange(value, "dob")}
              />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                label="Select Arrival Time"
                value={formData.arrival ? dayjs(formData.arrival) : null}
                onChange={(value) => handleDateChange(value, "arrival")}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button
            sx={{ mt: 2, mb: 2, justifyContent: "center" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Drawer>
    </>
  );
};

export default CheckinForm;
