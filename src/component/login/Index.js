import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import HandleClickComponent from "../HandleClickComponent";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
        <Stack spacing={2} direction="row">
          <HandleClickComponent email={email} password={password} />
          <Link to="/Register">Back To Registration</Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Index;
