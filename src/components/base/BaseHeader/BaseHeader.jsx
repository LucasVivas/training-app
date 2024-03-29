import React from 'react';
import './BaseHeader.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function BaseHeader() {
  return (
    <Box sx={{ flexGrow: 1 }} className="BaseHeader" data-testid="BaseHeader">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Training App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};

export default BaseHeader;
