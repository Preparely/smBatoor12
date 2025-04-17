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
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";
import { useDeleteCompliantsMutation, useGetAllComplaintsQuery, useReplyToComplaintMutation } from "../../redux/features/Complaints/userComplaintsSlice";
import moment from "moment";
import DeleteIcon from '@mui/icons-material/Delete';

const UserComplaints = () => {
    const { data = [], isLoading, isError } = useGetAllComplaintsQuery();
    const complaints = Array.isArray(data.complaints) ? data.complaints : [];

    const [activeButton, setActiveButton] = React.useState("All");
    const [selectedComplaintDetails, setSelectedComplaintDetails] = React.useState(null);
    const [reply, setReply] = React.useState("");
    const [showReplyField, setShowReplyField] = React.useState(false); // 👈 NEW

    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [complaintToDelete, setComplaintToDelete] = React.useState(null);
    const [deleteCompliant] = useDeleteCompliantsMutation();
    const [replyToComplaint] = useReplyToComplaintMutation();

    const handleDeleteClick = (complaint) => {
        setComplaintToDelete(complaint);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await deleteCompliant(complaintToDelete._id);
            setDeleteDialogOpen(false);
            setComplaintToDelete(null);
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setComplaintToDelete(null);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setSelectedComplaintDetails(null);
        setShowReplyField(false);
    };

    const handleListItemClick = (complaint) => {
        setSelectedComplaintDetails(complaint);
        setReply("");
        setShowReplyField(false); // 👈 Reset reply field when selecting new complaint
    };

    const filteredComplaints =
        activeButton === "New"
            ? complaints.filter((item) => item.status === "Pending")
            : complaints;

    return (
        <>
            <Grid container spacing={2} sx={{ padding: "24px" }}>
                {/* Left Side */}
                <Grid item xs={4} sx={{ height: "570px" }}>
                    <Box
                        sx={{
                            border: "1px solid #ccc",
                            borderRadius: 2,
                            p: 2,
                            height: '100%',
                            maxHeight: '570px',
                            overflowY: 'auto'
                        }}
                    >
                        <Grid item display={"flex"} justifyContent={"space-between"} mb={2}>
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

                        {isLoading ? (
                            <Typography variant="body2">Loading complaints...</Typography>
                        ) : isError ? (
                            <Typography variant="body2" color="error">Error loading complaints.</Typography>
                        ) : filteredComplaints.length > 0 ? (
                            <List>
                                {filteredComplaints.map((complaint) => (
                                    <React.Fragment key={complaint._id}>
                                        <ListItem
                                            button
                                            onClick={() => handleListItemClick(complaint)}
                                            secondaryAction={
                                                <DeleteIcon
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteClick(complaint);
                                                    }}
                                                    style={{ color: "red", cursor: "pointer" }}
                                                />
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar alt="User Avatar" src="https://via.placeholder.com/40" />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={complaint.user?.name || "User"}
                                                secondary={complaint.title || complaint.status}
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
                <Grid item xs={8} sx={{ height: "100%" }}>
                    <Card sx={{ border: "1px solid #ccc", borderRadius: 2, p: 4 }}>
                        <Typography variant="h4" mb={3} sx={{ fontWeight: 600, textAlign: "center" }}>
                            Complaint details
                        </Typography>
                        <Grid container xs={12} display="flex" alignItems="center" justifyContent="center">
                            <Grid item xs={10} md={10}>
                                <Card sx={{ border: "1px solid #ccc", borderRadius: 2 }}>
                                    <CardContent>
                                        <Box textAlign="center">
                                            <Avatar
                                                alt="User Avatar"
                                                src="https://via.placeholder.com/100"
                                                sx={{ width: 80, height: 80, margin: "0 auto" }}
                                            />
                                        </Box>

                                        {selectedComplaintDetails ? (
                                            <>
                                                <Box sx={{ mt: 4 }} textAlign={"left"}>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                        {selectedComplaintDetails?.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                                                        {selectedComplaintDetails?.description}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ mt: 4 }} textAlign={"right"}>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                        Admin Replay
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                        {selectedComplaintDetails?.adminReply}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: "#888", mt: 2 }}>
                                                        {moment(selectedComplaintDetails?.createdAt).format("LLL")}
                                                    </Typography>
                                                </Box>

                                                {/* Reply Button */}
                                                <Button
                                                    onClick={() => setShowReplyField(true)}
                                                    variant="contained"
                                                    sx={{
                                                        mt: 3,
                                                        backgroundColor: "#FB8019",
                                                        color: "#fff",
                                                        "&:hover": { backgroundColor: "#FB8019" },
                                                    }}
                                                >
                                                    Reply To Complaint
                                                </Button>

                                                {/* Conditional Reply Field */}
                                                {showReplyField && (
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
                                                {showReplyField && (
                                                    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                                                        <Button
                                                            variant="contained"
                                                            disabled={!reply}
                                                            onClick={async () => {
                                                                try {
                                                                    await replyToComplaint({
                                                                        id: selectedComplaintDetails._id,
                                                                        reply: reply,
                                                                    });
                                                                    setReply("");
                                                                    setSelectedComplaintDetails(null);
                                                                } catch (err) {
                                                                    console.error("Failed to send reply:", err);
                                                                }
                                                            }}
                                                            sx={{
                                                                backgroundColor: "#FB8019",
                                                                "&:hover": { backgroundColor: "#FB8019" },
                                                            }}
                                                        >
                                                            Submit
                                                        </Button>
                                                    </Box>
                                                )}

                                            </>
                                        ) : (
                                            <Typography textAlign="center" mt={4}>
                                                Select a complaint to view details.
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Submit Button */}

                </Grid>
            </Grid>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this complaint?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UserComplaints;
