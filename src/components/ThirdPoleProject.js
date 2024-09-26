import React, { useState, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Tabs,
  Tab,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Link,
  Grid
} from '@mui/material';

import IndiaTemperatureChart from './charts/IndiaTemperatureChart';
import PrecipitationChart from './charts/PrecipitationChart';
import LandslideChart from './charts/LandslideChart';
import GlacierChart from './charts/GlacierChart'; // Import the chart components

const ThirdPoleProject = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = useMemo(() => {
    const blogs = [
      {
        title: "Tackling Climate and Water Challenges in the Himalayas using AI",
        link: "https://www.himalayanwaterproject.org/post/tackling-climate-and-water-challenges-in-the-himalayas-using-ai?fbclid=PAAaYk42lbCAwvs7NAlLl5tlILoeEEMovhuIRWmo2vMEQ_SAjkvU59c_c5N3g_aem_AUUgE-tuc5yK5O631x1-3Q7zOoMlneCuDTH2uRJHXjU-y7wdNfTwqlPw0oN2RBTUWPc"
      },
      // Add more blogs as needed
    ];
    return blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const renderContent = () => {
    switch (activeTab) {
      case 0: // Home
        return (
          <Box>
            <Typography variant="h4" gutterBottom>About Third Pole Project</Typography>
            <Typography variant="body1">
              Third Pole Project is an AI-powered weather forecasting and early disaster warning system for the Himalayan region, also known as the Third Pole. Our mission is to leverage cutting-edge technology to protect communities and ecosystems in this vital area.
            </Typography>
          </Box>
        );
      case 1: // Research
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Research Themes</Typography>
            <List>
              <ListItem><ListItemText primary="Extreme Weather Events and Climate Change Impacts" /></ListItem>
              <ListItem><ListItemText primary="Climate Modeling and Predictions for High-Altitude Regions" /></ListItem>
              <ListItem><ListItemText primary="Glacier Dynamics and Water Resource Management" /></ListItem>
              <ListItem><ListItemText primary="Vegetation Changes and Land Use in Mountain Ecosystems" /></ListItem>
              <ListItem><ListItemText primary="Humanitarian Response and Disaster Risk Reduction" /></ListItem>
            </List>
          </Box>
        );
      case 2: // Visualizations
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Data Visualizations</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}><IndiaTemperatureChart /></Grid>
              <Grid item xs={12} md={6}><PrecipitationChart /></Grid>
              <Grid item xs={12} md={6}><LandslideChart /></Grid>
              <Grid item xs={12} md={6}><GlacierChart /></Grid>
            </Grid>
          </Box>
        );
      case 3: // Blogs
        return (
          <Box>
            <Typography variant="h4" gutterBottom>Blogs</Typography>
            <List>
              {filteredBlogs.map((blog, index) => (
                <ListItem key={index}>
                  <Link href={blog.link} color="secondary" target="_blank" rel="noopener noreferrer">
                    <ListItemText primary={blog.title} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      default:
        return null;
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Third Pole Project
            </Typography>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              onChange={handleSearch}
              sx={{ input: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
            />
          </Toolbar>
        </AppBar>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} centered sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Home" />
          <Tab label="Research" />
          <Tab label="Visualizations" />
          <Tab label="Blogs" />
        </Tabs>
        <Container sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          {renderContent()}
        </Container>
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              © 2024 Third Pole Project. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ThirdPoleProject;

