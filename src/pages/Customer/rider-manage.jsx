import React from 'react';
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
    TextField,
    IconButton,
    Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';

const RiderManage = () => {
    const customers = [
        { name: 'Hamza Sher', id: '3242', email: 'hamza.sher020@gmail.com', image: 'https://via.placeholder.com/40' },
        { name: 'Hamza Sher', id: '123d', email: 'hamza.sher020@gmail.com', image: 'https://via.placeholder.com/40' },
        { name: 'Hamza Sher', id: 'x113', email: 'hamza.sher020@gmail.com', image: 'https://via.placeholder.com/40' },
        { name: 'Hamza Sher', id: 'v231', email: 'hamza.sher020@gmail.com', image: 'https://via.placeholder.com/40' },
        { name: 'Lorem', id: 'l242', email: 'lorem@example.com', image: 'https://via.placeholder.com/40' },
        { name: 'Lorem', id: '6445', email: 'lorem@example.com', image: 'https://via.placeholder.com/40' },
        { name: 'Lorem', id: 'h655', email: 'lorem@example.com', image: 'https://via.placeholder.com/40' },
    ];

    return (
        <Card sx={{ maxWidth: '100%', mx: 'auto', mt: 5, p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Box>
                    <Typography variant="h6" fontWeight="bold" textAlign={'left'} sx={{color:'#FB8019'}}>
                        Customers
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                        size="small"
                        placeholder="Search"
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                        }}
                        // sx={{ width: 200 }}
                    />
                    <Button
                        variant="contained"
                        size='small'
                        startIcon={<FilterListIcon />}
                        sx={{ backgroundColor: 'orange', color: 'white' }}
                    >
                        Filters
                    </Button>
                    <Button variant="outlined" size='small'>Download all</Button>
                </Box>
            </Box>

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
                        {customers.map((customer, index) => (
                            <TableRow key={index}>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.id}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>
                                    <Avatar
                                        src={customer.image}
                                        alt={customer.name}
                                        sx={{ width: 40, height: 40 }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'orange',
                                            color: 'white',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Blacklist
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default RiderManage;
