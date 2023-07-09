import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useSubmit } from "react-router-dom";
import UpdateIcon from "@mui/icons-material/Update";
import "./index.css"; // Import your CSS file
import { useSignIn } from "react-auth-kit";
import HandleClickComponent from "../HandleClickComponent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Index() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [itemNameError, setItemNameError] = useState(false);
  const [itemName, setItemName] = useState(null);

  const [status, setStatus] = useState("Normal");
  const [itemQuentity, setItemQuentity] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setItemNameError(false);
  };

  //   const HandleClick = () => {
  //     // console.log("click : " + itemName + itemQuentity + status);
  //     // if (itemName === null || itemName.trim() === "") {
  //     //   setItemNameError(true);
  //     //   return;
  //     // }
  //     const signIn = useSignIn();
  //     console.log("email : " + email);
  //     console.log("password : " + password);

  //     const handleSignIn = (data) => {
  //       if (
  //         signIn({
  //           token: data.token,
  //           expiresIn: "30000",
  //           tokenType: "Bearer",
  //         })
  //       );
  //       //();
  //     };

  //     fetch("/api/v1/auth/authenticate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle the response data
  //         console.log(data);
  //         handleSignIn(data);

  //         //();
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error("Error:" + error);
  //       })
  //       .finally(() => {
  //         setFirstName(null);
  //         setLastName(null);
  //         setEmail(null);
  //         setPassword(null);
  //       });
  //   };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const Priorities = [
    {
      value: "Normal",
      label: "Normal",
    },
    {
      value: "Urgent",
      label: "Urgent",
    },
    {
      value: "Low",
      label: "Low",
    },
  ];
  return (
    <div>
      <Box sx={style} style={{ maxWidth: "80%", margin: "0 auto" }}>
        <TextField
          value={email}
          fullWidth
          label="Email"
          id="email"
          margin="normal"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        <TextField
          value={password}
          fullWidth
          label="Password"
          id="password"
          margin="normal"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br></br>

        {/* <TextField
          id="outlined-select-currency"
          select
          label="Priority"
          defaultValue="Normal"
          onChange={handleStatusChange}
        >
          {Priorities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br> */}
        <br></br>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ marginRight: "10px" }}
          >
            Back To Registation
          </Button>
          <HandleClickComponent email={email} password={password} />

          {/* <Button variant="contained" onClick={HandleClick}>
            Login
          </Button> */}
        </Box>
      </Box>
    </div>
  );
}

export default Index;
