import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Tabs,
  Tab,
  Collapse,
} from "@mui/material";
import { Add as AddIcon, HelpOutline as ExpandLess, Edit as EditIcon, ContentCopy as DuplicateIcon, ExpandMore, } from "@mui/icons-material";
import images_25 from "../../components/Img/images_25.png";
import Help_Bulb from "../../components/Img/Help_Bulb.png";
import { Link } from "react-router-dom";


const ManageandAdd_Store = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openRow, setOpenRow] = useState(null);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const rows = [
    {
      product: "RadRealm.",
      id: "ID:1729442304395956470",
      type: "Variants",
      quantity: 439,
      updated: "07/01/2025 05:47",
      status: "Live",
      commission: false,
    },
    {
      product: "UrbanFusion Finds.",
      id: "ID:1729428711089278966",
      type: "Variants",
      quantity: 443,
      updated: "10/12/2024 06:15",
      status: "Live",
      commission: true,
    },
  ];
  const handleRowClick = (index) => {
    setOpenRow(openRow === index ? null : index); // Toggle open/close for the row
  };
  const [menuRowIndex, setMenuRowIndex] = useState(null);

  const handleMenuToggle = (index) => {
    setMenuRowIndex(menuRowIndex === index ? null : index);
  };

  const TableContent = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Subject-Quantity</TableCell>
            <TableCell>Updated</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow onClick={() => handleRowClick(index)} sx={{ cursor: "pointer" }}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {row.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.updated}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      backgroundColor: "#d4edda",
                      color: "#155724",
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: 1,
                      fontSize: "0.875rem",
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <Select
                  value=""
                  displayEmpty
                  size="small"
                  renderValue={() => (
                    <IconButton size="small" onClick={() => handleMenuToggle(index)}>
                      Duplicate
                      {menuRowIndex === index ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  )}
                  sx={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <MenuItem onClick={() => handleMenuToggle(null)}>Edit</MenuItem>
                  <MenuItem onClick={() => handleMenuToggle(null)}>Delete</MenuItem>
                  <MenuItem onClick={() => handleMenuToggle(null)}>Deactivate</MenuItem>
                  <MenuItem onClick={() => handleMenuToggle(null)}>Activate</MenuItem>
                </Select>
                {/* <TableCell>
                  <Box display="flex" flexDirection={'column'} alignItems="center" gap={1}>
                    <Button
                      variant="text"
                      startIcon={<EditIcon />}
                      size="small"
                      sx={{ color: "#007bff" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="text"
                      startIcon={<DuplicateIcon />}
                      size="small"
                      sx={{ color: "#007bff" }}
                    >
                      Duplicate
                    </Button>
                    <IconButton size="small">
                      {openRow === index ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Box>
                </TableCell> */}
              </TableRow>

              {/* Collapsible Row */}
              <TableRow>
                <TableCell colSpan={7} style={{ paddingBottom: 0, paddingTop: 0 }}>
                  <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        More Details
                      </Typography>
                      <Typography variant="body2">
                        This is where more information about the product can go,
                        such as history or additional settings.
                      </Typography>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return (
    <>
      <Box p={3}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h4" fontWeight='bold' sx={{ color: "#ff6600" }}>
              Manage stores
            </Typography>
            <IconButton size="small" sx={{ color: "#33c3f0" }}>
              {/* <HelpIcon /> */}
              <img src={Help_Bulb} alt="Help" />
              <Typography variant="h5" fontWeight='bold'>
                Help
              </Typography>
            </IconButton>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={Link}
            to="/stores/Add-Store"
            sx={{
              backgroundColor: "#ff6600",
              color: "white",
              textTransform: "none",
              '&:hover': { backgroundColor: "#e65c00" },
            }}
          >
            Add new store
          </Button>
        </Box>

        {/* Action Cards */}
        <Paper elevation={1} sx={{ padding: '10px 20px 60px 20px', borderRadius: 2 }}>
          <Grid mb={1} sx={{ display: 'flex' }}>
            <Box
              style={{
                // border: '1px solid red',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Centers the image within the box
                width: 50, // Set a fixed width (you can adjust this as needed)
                height: 50, // Set a fixed height (same as width for a perfect circle)
                borderRadius: '50%', // Makes the box circular
                overflow: 'hidden', // Ensures that the image is clipped into a circle
              }}
            >
              <img
                src={images_25}
                alt="Bulb"
                style={{
                  width: '70%', // Ensures the image fits within the circle
                  height: '70%', // Ensures the image fits within the circle
                  objectFit: 'cover', // Ensures the image covers the circle while maintaining aspect ratio
                  borderRadius: '50%', // Optional: makes sure the image itself has rounded corners (if needed)
                }}
              />
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Take action to drive more sales
            </Typography>
          </Grid>
          <Grid container spacing={2} textAlign='left'>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  flexDirection: "column", // Stack items vertically
                  justifyContent: "space-between", // Space out the content
                  alignItems: "flex-start", // Align text to the left
                  borderRadius: 2,
                  position: "relative", // Position context for absolute elements
                  height: '100%', // Ensure the Paper takes up full height of the Grid item
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ color: "#000", fontSize: "0.9rem" }}
                  >
                    See what's trending
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem", mt: 1 }} // Add margin-top for spacing
                  >
                    Add this week’s popular keywords and products to your shop.
                  </Typography>
                </Box>

                {/* Button in the Bottom Corner */}
                <Button
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontSize: "0.8rem",
                    position: "absolute", // Position the button absolutely
                    bottom: 8, // Adjust the bottom distance as needed
                    right: 8, // Adjust the right distance as needed
                  }}
                >
                  Go &gt;
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  flexDirection: "column", // Stack items vertically
                  justifyContent: "space-between", // Space out the content
                  alignItems: "flex-start", // Align text to the left
                  borderRadius: 2,
                  position: "relative", // Position context for absolute elements
                  height: '100%', // Ensure the Paper takes up full height of the Grid item
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ color: "#000", fontSize: "0.9rem" }}
                  >
                    Grow your sales
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem", mt: 1 }} // Add margin-top for spacing
                  >
                    Get useful tips to increase orders.
                  </Typography>
                </Box>

                {/* Button in the Bottom Corner */}
                <Button
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontSize: "0.8rem",
                    position: "absolute", // Position the button absolutely
                    bottom: 8, // Adjust the bottom distance as needed
                    right: 8, // Adjust the right distance as needed
                  }}
                >
                  Go &gt;
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box p={3}>
        {/* Tabs Section */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ mb: 2 }}
        >
          <Tab label="All" />
          <Tab label="Live 2" />
          <Tab label="Deactivated 0" />
        </Tabs>

        {/* Filter Section */}
        <Grid container display="flex" gap={1} mb={2} justifyContent='space-between'>
          <Grid item xs={12} sm={5} md={6.5}>
            <TextField
              label="Search a product name, ID or seller SKU"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Select defaultValue="Category" size="small" fullWidth>
              <MenuItem value="Category">Category</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={2} md={1}>
            <Button variant="contained" fullWidth sx={{ backgroundColor: "#ff6600", color: "white" }}>
              Reset
            </Button>
          </Grid>
        </Grid>
        {/* Conditional Table Content */}
        <TableContent />
        {/* {tabValue === 0 && <TableContent />}
        {tabValue === 1 && <TableContent />}
        {tabValue === 2 && <TableContent />} */}

        {/* Footer Section */}
        {/* <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">2 items in total</Typography>
          <Button
            variant="text"
            endIcon={<ExpandMore />}
            size="small"
            sx={{ color: "#007bff", textTransform: "none" }}
          >
            Expand
          </Button>
        </Box> */}
      </Box>
    </>
  );
};

export default ManageandAdd_Store;
