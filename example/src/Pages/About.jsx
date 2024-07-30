import React from 'react';
import { Container, Heading, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW='2xl' className="about-container">
      <Heading as="h1" size="2xl" className="about-title">About Me</Heading>
      <Text fontSize="xl" className="about-description">
        Hi, I'm shrikant verma, a passionate web developer with experience in creating dynamic web applications using modern technologies like React, Node.js, and MongoDB. I love solving complex problems and building user-friendly applications.
      </Text>
      <Box className="about-details">
        <Heading as="h2" size="lg" className="about-subtitle">Background</Heading>
        <Text fontSize="lg" className="about-text">
          I started my journey in web development X years ago. Over the years, I have honed my skills in front-end and back-end development, working on various projects that have helped me grow as a developer.
        </Text>
        <Heading as="h2" size="lg" className="about-subtitle">Skills</Heading>
        <UnorderedList className="about-skills">
          <ListItem>HTML, CSS, JavaScript</ListItem>
          <ListItem>React, Redux</ListItem>
          <ListItem>Node.js, Express</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>Git, GitHub</ListItem>
        </UnorderedList>
        <Heading as="h2" size="lg" className="about-subtitle">Hobbies</Heading>
        <Text fontSize="lg" className="about-text">
          In my free time, I enjoy reading tech blogs, contributing to open-source projects, and exploring new technologies. I also love hiking and photography.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
