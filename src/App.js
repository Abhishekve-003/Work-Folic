import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import TestimonialSlider from './components/TestimonialSlider';
import SignUp from './components/SignUp';
import image from './img/logoo.png'
import {Avatar } from '@mui/material';

function App() {
  return (
    <Container>
      <Grid container spacing={0} sx={{ paddingTop: '2rem' }}>
        <Grid
          xs={12}
          md={6}
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(180deg, rgb(26, 25, 25),rgb(32, 31, 31), rgb(32, 31, 31), rgb(32, 31, 31) )",
            borderRadius: '18px 18px 18px 18px',
            color:"white",
            padding: '2rem',
          }}
        >  
           <Avatar
                src={image}
                sx={{
                  width: 50,
                  height: 50,
                  marginRight: "1rem",
                }}
              />

          <Stack style={{ marginLeft: '1rem', marginTop: '6rem' }}>
             <Stack sx={{  textAlign:"center" }}>
            <h1>Manage your Money <br/> Anywhere</h1>

             </Stack>
            <Stack sx={{ color: "gray", fontSize: "small", textAlign:"center"}}>
            <p>View all the analytics and grow your business <br/> from anywhere!</p>

            </Stack>
          </Stack>

          <Stack style={{ marginTop: '4rem' }}>
            <TestimonialSlider />
          </Stack>
        </Grid>
        <Grid
          borderRadius={18}
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '0 18px 18px 0',
            position:"relative"
          }}
        >
          <SignUp />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

