import React from "react";
import { TextField, Card, Typography, Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const LoginForm = () => {
  return (
    <Card className="m-auto p-5 shadow border" style={{ maxWidth: "400px" }}>
      <Typography className="m-2" variant="h4">
        Admin Login
      </Typography>
      <TextField
        id="outlined-basic"
        className="m-2 w-100"
        label="Email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        type="password"
        className="m-2 w-100"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained" className="w-100 m-2" size="large" color="primary">
        Login
      </Button>
    </Card>
  );
};

export default LoginForm;
