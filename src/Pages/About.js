import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      <NavBar />

      <Box
        sx={{
          backgroundColor: "#0B1D3A",
          color: "#fff",
          minHeight: "100vh",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ color: "#FF6B35" }}
            >
              About Learn4Dream
            </Typography>

            <Divider sx={{ borderColor: "#FF6B35", mb: 4 }} />

            <Typography variant="body1" paragraph>
              At <strong>Learn4Dream</strong>, we believe education is the foundation for lifelong success.
              Our mission is to empower students, support parents, and collaborate with educators to create
              a dynamic and accessible learning environment for all.
            </Typography>

            <Typography variant="body1" paragraph>
              Whether you're preparing for academic exams, exploring new skills, or supporting a child’s learning journey,
              Learn4Dream offers tailored resources and expert guidance every step of the way.
            </Typography>

            <Typography variant="body1" paragraph>
              With a team of passionate educators, modern teaching tools, and a vision to inspire dreams,
              we are committed to helping every learner unlock their full potential.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, color: "#FF6B35" }}>
              Together, let's learn, grow, and dream big.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default AboutPage;
