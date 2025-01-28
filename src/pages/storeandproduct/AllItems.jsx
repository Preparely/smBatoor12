import React from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  InputBase,
  Pagination,
  Stack,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import download_11 from "../../components/Img/download_11.png";
import download_12 from "../../components/Img/download_12.png";
import { Link } from "react-router-dom";
const mockData = [
  {
    productName: "Stationery Item",
    productID: "3242",
    quantity: "43 Items",
    image: download_11,
    availability: "In stock",
    detailsLink: "#",
  },
  {
    productName: "Furniture",
    productID: "1242",
    quantity: "12 Items",
    image: download_12,
    availability: "Out of stock",
    detailsLink: "#",
  },
  // Add more mock items as needed
];

const AllItems = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Grid textAlign="left">
          <Typography variant="h6" fontWeight="bold" style={{ color: '#F6AC57' }}>
            All Items
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              padding: "4px 8px",
              boxShadow: "none",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* Add Item Button */}
          <Button
            variant="contained"
            // startIcon={<AddIcon />}
            component={Link}
            to="/stores/AddItem"
            sx={{
              backgroundColor: "#ff6600",
              color: "white",
              textTransform: "none",
              '&:hover': { backgroundColor: "#e65c00" },
            }}
          >
            {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "#FB8019",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#E06C17" },
            }}
          > */}
            Add Item
          </Button>
          <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
            Download All
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: "12px", border: "1px solid #ddd" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Product ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Availability</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.productID}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <img src={item.image} alt={item.productName} width="50" height="50" />
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: item.availability === "In stock" ? "green" : "red",
                      // fontWeight: "bold",
                    }}
                  >
                    {item.availability}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{
                      // color: "#FB8019",
                      textTransform: "capitalize",
                      // fontWeight: "bold",
                    }}
                    href={item.detailsLink}
                  >
                    View Details
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{
                      color: "red",
                      textTransform: "capitalize",
                      // fontWeight: "bold",
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "16px" }}>
        <Typography variant="body2">Showing 1 to 10 of 40 records</Typography>
        <Pagination count={4} color="primary" />
      </Stack>
    </Box>
  );
};

export default AllItems;
