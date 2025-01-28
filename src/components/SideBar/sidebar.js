import React, { useState, useEffect } from "react";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";  // useLocation to track active route
// import HomeIcon from "@mui/icons-material/Home";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PeopleIcon from "@mui/icons-material/People";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import UpdateIcon from "@mui/icons-material/Update";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import {
  HomeOutlined as HomeIcon,
  StoreOutlined as StoreIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
  PeopleOutlined as PeopleIcon,
  MenuBookOutlined as MenuBookIcon,
  ReportOutlined as ReportProblemIcon,
  ReceiptLongOutlined as AssessmentIcon,
  SettingsOutlined as SettingsIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Stores & Products",
      icon: <StoreIcon />,
      subItems: [
        { text: "All Items", path: "/stores/all-items" },
        { text: "Manage & Add Store", path: "/stores/Manage-&-Add-Store" },
        { text: "Manage Products", path: "/stores/Manage-Product" },
      ],
    },
    {
      text: "Riders",
      icon: <StoreIcon />,
      subItems: [
        { text: "Riders", path: "/stores/Riders" },
      ],
    },
    {
      text: "Online Order",
      icon: <ShoppingCartIcon />,
      subItems: [
        { text: "Return", path: "/orders/return" },
        { text: "Manage Order", path: "/online-order" },
      ],
    },
    {
      text: "Customer",
      icon: <PeopleIcon />,
      subItems: [
        { text: "Rider Manage", path: "/customer/rider-manage" },
        { text: "User Manage", path: "/customer/user-manage" },
        { text: "Rider Performance", path: "/customer/rider-performance" },
      ],
    },
    {
      text: "Complaints",
      icon: <ReportProblemIcon />,
      subItems: [
        { text: "User Complaints", path: "/stores/user_Complaints" },
        { text: "Rider Complains", path: "/stores/rider_Complaints" },
      ],
    },
    {
      text: "Menu",
      icon: <ReportProblemIcon />,
      subItems: [
        { text: "Menu Card", path: "/stores/Menu_Card" },
        // { text: "Rider Complains", path: "/complaints/rider" },
      ],
    },
    {
      text: "Payment History",
      icon: <AssessmentIcon />,
      path: "/stores/Payment",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      subItems: [
        { text: "Help and Support", path: "/settings/help_and_Support" },
        { text: "Chat", path: "/settings/chat" },
        { text: "Account", path: "/settings/AccountPage" },
      ],
    },
  ];


   // Automatically expand the menu containing the active link on page load
   useEffect(() => {
      menuItems.forEach((item, index) => {
        if (item.subItems) {
          const isActiveSubItem = item.subItems.some(
            (subItem) => location.pathname === subItem.path
          );
          if (isActiveSubItem) {
            setExpandedIndex(index); // Expand the parent menu if a sub-item is active
          }
        } else if (location.pathname === item.path) {
          setExpandedIndex(null); // Collapse all menus for single-level items
        }
      });
    }, [location.pathname]);

  const handleItemClick = (index, path) => {
    if (menuItems[index].subItems) {
      // Toggle collapse for items with sub-items
      setExpandedIndex(expandedIndex === index ? null : index);
    } else {
      // Collapse all for single-level items
      setExpandedIndex(null);
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: '241',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          marginTop: "64px",
        },
      }}
    >
      {/* <List>
        {menuItems.map((item, index) => {
          const isSelected = location.pathname === item.path || selectedIndex === index;

          return (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path} // Link to the route
              onClick={() => handleItemClick(index, item.path)} // Set selected index on click
              sx={{
                backgroundColor: isSelected ? "#FB8019" : "transparent", // Change background color on selection
                "&:hover": {
                  backgroundColor: "#FB8019",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: "bold",
                }}
              />
              <ChevronRightIcon />
            </ListItem>
          );
        })}
      </List> */}

      <List>
        {menuItems.map((item, index) => {
          const isActive = location.pathname.startsWith(item.path);
          const hasSubItems = item.subItems && item.subItems.length > 0;
          
          return (
            <div key={index}>
              <ListItem
                button
                component={Link}
                to={item.path}
                onClick={() => handleItemClick(index, item.path)}
                sx={{
                  backgroundColor: location.pathname === item.path ? "#FB8019" : "transparent",
                  "&:hover": { backgroundColor: "#FB8019" },
                  padding: "10px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "#333333",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </div>
                {hasSubItems &&
                  (expandedIndex === index ? (
                    <ExpandLessIcon sx={{ color: "#333333" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "#333333" }} />
                  ))}
              </ListItem>

              {/* Submenu */}
              {hasSubItems && (
                <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        component={Link}
                        to={subItem.path}
                        sx={{
                          paddingLeft: "56px",
                          backgroundColor:
                            location.pathname === subItem.path ? "#FB8019" : "transparent",
                          "&:hover": { backgroundColor: "#FB8019" },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                color:
                                  location.pathname === subItem.path
                                    ? "#FFFFF"
                                    : "#333333",
                                fontSize: "13px",
                              }}
                            >
                              {subItem.text}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
