import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputBase } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: "0 8px",
    width: "200px",
}));

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#f4a261" }}>
            <Toolbar>
                {/* Title */}
                <Typography variant="h6" sx={{ flexGrow: 0.1, fontWeight: 600 }}>
                    Feedma
                </Typography>
                {/* Left Menu Icon */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 3 }}>
                    <MenuIcon />
                </IconButton>


                {/* User Info Section */}
                <Avatar alt="User" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30, mr: 1 }} />
                <Typography variant="body1" sx={{ color: 'black', fontWeight: 600 }}>Hi, Micheal</Typography>
                <ArrowDropDownIcon sx={{ color: 'black' }} />

                {/* Notification and Refresh Icons */}
                <IconButton
                    component={Link}
                     to="/stores/Notification"
                    color="inherit"
                    sx={{ flexGrow: 1, justifyContent: 'flex-start' }}
                >
                    <NotificationsNoneIcon />
                </IconButton>

                {/* Search Bar */}
                <Search sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#fff', padding: '5px 10px' }}>
                    <InputBase
                        placeholder="Search"
                        size="small"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            ml: 1,
                            flex: 1,
                            borderRadius: '10px', // Curved border for the input box
                            backgroundColor: '#fff', // White background for the input box
                            // padding: '8px', // Add padding inside the input
                        }}
                    />
                    <SearchIcon sx={{ color: 'black' }} />
                </Search>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;