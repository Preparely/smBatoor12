import React, { useState } from 'react';
import {
    Box,
    Card,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteUserMutation, useGetUserQuery, useToggleBlockUserMutation } from '../../redux/features/users/userSlice';

const RiderManage = () => {
    const { data, isLoading, isSuccess } = useGetUserQuery();
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
    const [toggleBlock, { isLoading: isBlocking }] = useToggleBlockUserMutation();

    // State for dialog visibility and selected user
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [action, setAction] = useState(''); // Store block/unblock action

    // State for confirmation dialog for block/unblock
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Filtered users state
    const [roleFilter, setRoleFilter] = useState("rider");
    const [searchQuery, setSearchQuery] = useState("");

    // Handle Delete Confirmation Dialog
    const handleOpenDialog = (userId) => {
        setSelectedUserId(userId);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedUserId(null);
    };

    const handleDeleteUser = () => {
        if (selectedUserId) {
            deleteUser(selectedUserId)
                .unwrap()
                .then(() => {
                    console.log(`User ${selectedUserId} deleted successfully`);
                    setOpenDialog(false); // Close the dialog after deletion
                })
                .catch((error) => {
                    console.log('Error deleting user:', error);
                });
        }
    };

    // Handle Block/Unblock action (opens the confirmation dialog)
    const handleBlockUnblockClick = (user, action) => {
        setSelectedUser(user);
        setAction(action);
        setConfirmDialogOpen(true); // Open confirmation dialog
    };

    const handleConfirmAction = () => {
        if (selectedUser) {
            toggleBlock(selectedUser._id) // Call the block/unblock API
                .unwrap()
                .then(() => {
                    console.log(`${action} user:`, selectedUser);
                    setConfirmDialogOpen(false); // Close the confirmation dialog
                })
                .catch((error) => {
                    console.log(`Error ${action.toLowerCase()} user:`, error);
                    setConfirmDialogOpen(false); // Close the confirmation dialog
                });
        }
    };

    // Fetch user data
    const users = isSuccess && data?.data ? data?.data : [];

    // Filter users based on role and search query (name or email)
    const filteredUsers = users
        .filter(user => user.role === roleFilter)
        .filter(user => {
            const query = searchQuery.toLowerCase();
            return (
                user?.name?.toLowerCase().includes(query) ||
                user?.email?.toLowerCase().includes(query)
            );
        });

    return (
        <Card sx={{ maxWidth: '100%', mx: 'auto', mt: 5, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" textAlign={'left'} sx={{ color: '#FB8019' }}>
                        Riders
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                        size="small"
                        placeholder="Search by Name or Email"
                        value={searchQuery} // Bind the input field value to the state
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state on input change
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                        }}
                    />
                    <Button variant="contained" size="small" startIcon={<FilterListIcon />} sx={{ backgroundColor: 'orange', color: 'white' }}>
                        Filters
                    </Button>
                    <Button variant="outlined" size="small">
                        Download all
                    </Button>
                </Box>
            </Box>

            {/* Show loading spinner when data is being fetched */}
            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <CircularProgress />
                </Box>
            ) : filteredUsers?.length === 0 ? (
                // If no users match the filter or search, show a "No records found" message
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <Typography variant="h6" color="textSecondary">
                        No records found
                    </Typography>
                </Box>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Blacklist User</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user._id}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Avatar
                                            src="https://via.placeholder.com/40"
                                            alt={user.name}
                                            sx={{ width: 40, height: 40 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: 'orange', color: 'white', textTransform: 'none' }}
                                            onClick={() => handleBlockUnblockClick(user, user.isBlocked ? 'Unblock' : 'Block')}
                                        >
                                            {user.isBlocked ? 'Unblock' : 'Block'}
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleOpenDialog(user._id)}>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Block/Unblock Confirmation Dialog */}
            <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
                <DialogTitle>Confirm {action} User</DialogTitle>
                <DialogContent>
                    <Typography>
                        {`Are you sure you want to ${action.toLowerCase()} this user?`}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmAction} color="primary" disabled={isBlocking}>
                        {isBlocking ? 'Processing...' : action}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this user?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteUser} color="error" disabled={isDeleting}>
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default RiderManage;
