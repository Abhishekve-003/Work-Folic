import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Paper, Typography, Avatar } from '@mui/material';
import image from '../img/image.jpg';

const testimonials = [
  {
    text: "This analytics platform is a game-changer! It's easy to use and provides valuable insights and has helped me make smarter business decisions. I highly recommend it.",
    author: "Casey Bachmeyer",
    position: "Founder, Sisphus Ventures",
  },
  {
    text: "This analytics platform is a game-changer! It's easy to use and provides valuable insights and has helped me make smarter business decisions. I highly recommend it.",
    author: "Casey Bachmeyer",
    position: "Founder, Sisphus Ventures",
  },
  {
    text: "This analytics platform is a game-changer! It's easy to use and provides valuable insights and has helped me make smarter business decisions. I highly recommend it.",
    author: "Casey Bachmeyer",
    position: "Founder, Sisphus Ventures",
  },
  {
    text: "This analytics platform is a game-changer! It's easy to use and provides valuable insights and has helped me make smarter business decisions. I highly recommend it.",
    author: "Casey Bachmeyer",
    position: "Founder, Sisphus Ventures",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {testimonials.map((testimonial, index) => (
        <Paper
          key={index}
          sx={{
            backgroundColor: "black",
            color: "white",
            margin: "4rem",
            borderRadius: "17px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: "12px", textAlign: "center" }}>
            <p>{testimonial.text}</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={image}
                alt={testimonial.author}
                sx={{
                  width: 35,
                  height: 35,
                  marginRight: "1rem",
                }}
              />
              <Typography variant="body1">{testimonial.author}</Typography>
            </div>
            <Typography
              sx={{ color: "gray", fontSize: "x-small" , marginRight:"-2rem"}}
              variant="body1"
              color="textSecondary"
            >
              {testimonial.position}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
}

export default TestimonialSlider;

