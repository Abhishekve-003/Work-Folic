import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormLabel,
  Box,
  Stack
} from "@mui/material";
import { AccountBalanceWalletOutlined, PeopleOutlined } from '@mui/icons-material';

const SignUp = () => {
  const [merchantActive, setMerchantActive] = useState(false);
  const [agentActive, setAgentActive] = useState(false);

  const handleMerchantClick = () => {
    setMerchantActive(true);
    setAgentActive(false);
  };

  const handleAgentClick = () => {
    setMerchantActive(false);
    setAgentActive(true);
  };

  return (
    <Stack spacing={3} sx={{p:9}}>
      <Box sx={{padding:"1.6rem"}}>
      <Typography sx={{display:"flex", alignItems:"center", justifyContent:"center", fontWeight: "bold"}} variant="h4">Create an account</Typography>

      </Box>

      <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", marginRight: "auto" , padding:"4px"}}
          onClick={handleMerchantClick}
          style={{ backgroundColor: merchantActive ? "black" : "white", color: merchantActive ? "white" : "black" }}
        >
          <AccountBalanceWalletOutlined sx={{ marginRight: "10px" }} />
          <Typography variant="body2">Merchant</Typography>
        </Box>
        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", marginLeft: "4rem", padding:"4px" }}
          onClick={handleAgentClick}
          style={{ backgroundColor: agentActive ? "black" : "white", color: agentActive ? "white" : "black" }}
        >
          <PeopleOutlined sx={{ marginLeft: "10px" }} />
          <Typography variant="body2">Agent</Typography>
        </Box>
      </div>

      <TextField label="First Name" fullWidth />
      <TextField label="Where is your company based?" fullWidth select>
        
      </TextField>
      <TextField label="Business E-mail" id="email" type="email" fullWidth />
      <TextField label="Please select industry" fullWidth select>
       
      </TextField>
      <TextField label="Phone number" id="phone" type="phone" fullWidth />
      <TextField label="Password" id="password" type="password" fullWidth />
      <Box>
      <Checkbox id="privacy-policy" />
      <FormLabel>Accept the privacy policy</FormLabel>
      </Box>


      <Button variant="contained" color="primary" fullWidth sx={{backgroundColor:"rgb(255, 47, 0)"}}>
        Create an Account
      </Button>

      <Typography variant="body2">
        Already have an account? <a href="https://work-folic-abhishek.onrender.com/">Log In</a>
      </Typography>
    </Stack>
  );
};

export default SignUp;
