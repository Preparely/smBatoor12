import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/features/Login/loginSlice";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "0 8px",
  width: "200px",
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      // Call the logout API
      await logout();
      // Clear any authentication data from session storage
      sessionStorage.removeItem("access");
      sessionStorage.removeItem("customer_id");
      sessionStorage.removeItem("user");
      // Optionally, dispatch a Redux logout action if you have one
      // dispatch(logoutAction());
      // Navigate to login page after successful logout
      navigate("/login");
      console.log('Logout successful' );
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error as needed, e.g., show notification
    }
  };

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
        <Avatar
          alt="User"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 30, height: 30, mr: 1 }}
        />
        <Typography variant="body1" sx={{ color: "black", fontWeight: 600 }}>
          Hi, Micheal
        </Typography>
        <ArrowDropDownIcon sx={{ color: "black" }} />

        {/* Notification Icon */}
        <IconButton
          component={Link}
          to="/stores/Notification"
          color="inherit"
          sx={{ flexGrow: 1, justifyContent: "flex-start" }}
        >
          <NotificationsNoneIcon />
        </IconButton>

        {/* Search Bar */}
        <Search
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            backgroundColor: "#fff",
            padding: "5px 10px",
          }}
        >
          <InputBase
            placeholder="Search"
            size="small"
            inputProps={{ "aria-label": "search" }}
            sx={{
              ml: 1,
              flex: 1,
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          />
          <SearchIcon sx={{ color: "black" }} />
        </Search>

        {/* Logout Button */}
        <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }} disabled={logoutLoading}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
