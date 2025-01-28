import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    MenuItem,
    Menu,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Payment = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedComplaint, setSelectedComplaint] = React.useState("Successfully");
    const [activeButton, setActiveButton] = React.useState("All"); // Track active button

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (status) => {
        setSelectedComplaint(status);
        setAnchorEl(null);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button); // Set the active button
    };
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Grid container spacing={2} sx={{ padding: '24px'}}>
            {/* Left Side */}
            <Grid item xs={4} sx={{ height: '570px' }}>
                <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, height:'100%' }}>
                    <Grid item display={"flex"} justifyContent={"space-between"} mb={2} >
                        <Button
                            //   variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: activeButton === "All" ? "#FB8019" : "#D9D9D9",
                                color: activeButton === "All" ? "#fff" : "inherit",
                                "&:hover": { backgroundColor: activeButton === "All" ? "#FB8019" : "#ffe0b2" },
                            }}
                            onClick={() => handleButtonClick("All")}
                        >
                            All
                        </Button>
                        <Button
                            //   variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: activeButton === "New" ? "#FB8019" : "#D9D9D9",
                                color: activeButton === "New" ? "#fff" : "inherit",
                                "&:hover": { backgroundColor: activeButton === "New" ? "#FB8019" : "#ffe0b2" },
                            }}
                            onClick={() => handleButtonClick("New")}
                        >
                            New
                        </Button>
                    </Grid>
                    <List>
                        {[1, 2, 3, 4].map((_, index) => (
                            <React.Fragment key={index}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="User Avatar" src="https://via.placeholder.com/40" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Michael"
                                        secondary="Late delivery"
                                        sx={{ fontSize: "14px" }}
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Grid>

            {/* Right Side */}
            <Grid item xs={8} sx={{ height: '100%' }}>
                <Card sx={{ border: "1px solid #ccc", borderRadius: 2, p: 4 }}>
                    <Typography
                        variant="h4"
                        mb={3}
                        sx={{ fontWeight: 600, textAlign: "center" }}
                    >
                        Payment Report
                    </Typography>
                    {/* Centered Internal Card */}
                    <Grid
                        container
                        xs={12}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ height: "100%" }}
                    >
                        <Grid item xs={10} md={10}>
                            <Card sx={{ border: "1px solid #ccc", borderRadius: 2 }}>
                                <CardContent>
                                    <Box textAlign="center">
                                        <Avatar
                                            alt="User Avatar"
                                            src="https://via.placeholder.com/100"
                                            sx={{ width: 80, height: 80, margin: "0 auto" }}
                                        />
                                        <Typography variant="h6" sx={{ mt: 2 }}>
                                            Price: 3000
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }} textAlign={"left"}>
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                            Complaint
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                                            placerat, himenaeos congue mattis scelerisque eleifend
                                            ullamcorper per in platea, elementum sed.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }} textAlign={"right"}>
                                        <Typography variant="body2" sx={{ color: "#888", mt: 2 }}>
                                            June 1, 2020 - 06:22 AM
                                        </Typography>
                                    </Box>
                                    <Button
                                        onClick={handleMenuOpen}
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            backgroundColor: "#FB8019",
                                            color: "#fff",
                                            "&:hover": { backgroundColor: "#FB8019" },
                                        }}
                                        endIcon={isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {selectedComplaint}
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={isMenuOpen}
                                        onClose={() => handleMenuClose(selectedComplaint)}
                                    >
                                        {["Successfully", "Pending", "Failed"].map((status) => (
                                            <MenuItem
                                                key={status}
                                                onClick={() => handleMenuClose(status)}
                                            >
                                                {status}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        backgroundColor="#fff"
                        sx={{ mt: 2, backgroundColor: "#FB8019" }}
                    >
                        Submit
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Payment;
