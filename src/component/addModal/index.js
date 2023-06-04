import React, { createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useSubmit } from "react-router-dom";

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

function Index({ fetchData }) {
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = useState(null);
  const [itemQuentity, setItemQuentity] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    console.log("click : " + itemName + itemQuentity);
    fetch("http://localhost:8080/api/v1/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        quantity: itemQuentity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        fetchData();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      })
      .finally(() => {
        setItemName(null);
        setItemQuentity(null);
      });
  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        onClick={handleOpen}
      >
        <AddIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            label="itemName"
            id="itemName"
            margin="normal"
            onChange={(event) => setItemName(event.target.value)}
          />
          <br></br>
          <TextField
            fullWidth
            label="itemQuentity"
            id="itemQuentity"
            margin="normal"
            onChange={(event) => setItemQuentity(event.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Contained
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Index;
