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
    TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const RiderComplaints = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedComplaint, setSelectedComplaint] = React.useState("Replay To Complain");
    const [activeButton, setActiveButton] = React.useState("All"); // Track active button
    const [selectedComplaintDetails, setSelectedComplaintDetails] = React.useState(null); // State for selected complaint
    const [reply, setReply] = React.useState(""); // State to track reply input

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (status) => {
        setSelectedComplaint(status);
        setAnchorEl(null);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button); // Set the active button to either "All" or "New"

        // Reset selected complaint details when "New" button is clicked
        if (button === "New") {
            setSelectedComplaintDetails(null);
        }
    };

    const handleListItemClick = (complaint) => {
        setSelectedComplaintDetails(complaint); // Set the selected complaint details
        setReply(""); // Reset the reply field
    };

    const isMenuOpen = Boolean(anchorEl);

    // Sample complaints data
    const complaints = [
        { id: 1, user: "Michael", complaint: "Late delivery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, user: "Sarah", complaint: "Damaged product", description: "Praesent sit amet lacus vitae nisl dictum fringilla." },
        { id: 3, user: "John", complaint: "Wrong item received", description: "Curabitur sit amet eros vitae urna hendrerit aliquet." },
        { id: 4, user: "Emma", complaint: "Poor customer service", description: "Vivamus sit amet est tincidunt, varius nisi nec, sodales urna." },
    ];

    // Filtering complaints based on the active button
    const filteredComplaints = activeButton === "New" ? complaints.slice(0, 2) : complaints;

    return (
        <Grid container spacing={2} sx={{ padding: '24px' }}>
            {/* Left Side */}
            <Grid item xs={4} sx={{ height: '570px' }}>
                <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, height: '100%' }}>
                    <Grid item display={"flex"} justifyContent={"space-between"} mb={2} >
                        <Button
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
                    {/* Only show the list if activeButton is "All" or if there are new complaints */}
                    {activeButton === "All" || filteredComplaints.length > 0 ? (
                        <List>
                            {filteredComplaints.map((complaint, index) => (
                                <React.Fragment key={index}>
                                    <ListItem Button onClick={() => handleListItemClick(complaint)}>
                                        <ListItemAvatar>
                                            <Avatar alt="User Avatar" src="https://via.placeholder.com/40" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={complaint.user}
                                            secondary={complaint.complaint}
                                            sx={{ fontSize: "14px" }}
                                        />
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            No complaints to display.
                        </Typography>
                    )}
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
                        Complaint details
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

                                    {/* Conditionally render complaint description and reply */}
                                    {selectedComplaintDetails && (
                                        <Box sx={{ mt: 4 }}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                label="Type your reply here..."
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)}
                                                sx={{ mt: 2 }}
                                            />
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
                <Button
                    variant="contained"
                    // backgroundColor="#FB8019"
                    sx={{ mt: 2, backgroundColor: "#FB8019" ,
                        "&:hover": { backgroundColor: activeButton === "All" ? "#FB8019" : "#ffe0b2" },

                    }}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

export default RiderComplaints;
