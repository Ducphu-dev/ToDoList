import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: "10px",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Todo
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
