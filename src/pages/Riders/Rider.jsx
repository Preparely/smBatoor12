import React, { useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    Button,
    Divider,
    Card,
    CardContent,
    Box,
    Avatar,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import download_11 from "../../components/Img/download_11.png";
import PerformanceChart from "./Chart";

const Rider = () => {

    const [activeButton, setActiveButton] = useState("OrderIn");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName); // Set the clicked button as active
    };


    return (
        <Grid sx={{ padding: 4, backgroundColor: "#f8f9fa", height: "100vh" }}>
            <Grid container spacing={2}>
                {/* Sidebar */}
                {/* Left side */}
                <Grid item xs={3.5}>
                    <Paper elevation={3} sx={{ height: "100%", padding: 2 }}>
                        <Grid
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                background: '#00000033',
                                borderRadius: "5px",
                            }}
                        >
                            <Button
                                onClick={() => handleClick("OrderIn")}
                                style={{
                                    backgroundColor: activeButton === "OrderIn" ? "#FB8019" : "transparent",
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Order In
                            </Button>
                            <Button
                                onClick={() => handleClick("Prepared")}
                                style={{
                                    backgroundColor: activeButton === "Prepared" ? "#FB8019" : "transparent",
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Prepared
                            </Button>
                            <Button
                                onClick={() => handleClick("Delivered")}
                                style={{
                                    backgroundColor: activeButton === "Delivered" ? "#FB8019" : "transparent",
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Delivered
                            </Button>
                        </Grid>
                        <List>
                            {Array.from({ length: 6 }, (_, i) => (
                                <Card
                                    key={i}
                                    sx={{
                                        marginBottom: 2,
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Grid textAlign="left">
                                            <Typography variant="subtitle2" fontWeight="bolder">
                                                Order #{i + 1}
                                            </Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                June 1, 2020, 06:22 AM
                                            </Typography>
                                        </Grid>
                                        <Typography variant="body2" sx={{ color: "#FB8019", fontWeight: "bold" }}>
                                            $202.00
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                {/* Mid */}
                <Grid item xs={3}>
                    <Card
                        sx={{
                            // maxWidth: 300,
                            // mx: 'auto',
                            // mt: 5,
                            height: '100%',
                            p: 2,
                            border: '1px solid #f1f1f1',
                            borderRadius: 3,
                        }}
                    >
                        {/* Header Section */}
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <Avatar
                                src="https://via.placeholder.com/80"
                                alt="Profile Picture"
                                sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
                            />
                            <Typography variant="h6" fontWeight="bold">
                                Jordan Nico
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                ⭐ 5.0 · 1k+Reviews
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Join June 2020
                            </Typography>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ textTransform: 'none', mt: 1, color: "#FB8019" }}
                            >
                                Edit Profile
                            </Button>
                        </Box>
                        <Divider sx={{ my: 2 }} />

                        {/* Performance Stats */}
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent>
                                        <Typography color="green" fontWeight="bold">
                                            <CheckCircleIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                                            932
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Finished
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card >
                                    <CardContent>
                                        <Typography fontWeight="bold" color="primary">
                                            1,032
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Delivered
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography color="error" fontWeight="bold">
                                            <CancelIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                                            102
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Canceled
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />

                        {/* Stats Summary */}
                        <Grid container spacing={2}>
                            <Card sx={{ boxShadow: 1 }}>
                                <CardContent>
                                    <Grid container justifyContent={'space-between'}>
                                        {/* First Column */}
                                        <Grid item xs={6}>
                                            <Typography fontWeight="bold" sx={{ fontSize: '9px', display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src={download_11} // Replace with your actual image path
                                                    alt="Earnings Icon"
                                                    style={{ width: 15, height: 15, marginRight: '0.5rem', verticalAlign: 'middle' }}
                                                />
                                                Today Earnings
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
                                                $11,240
                                            </Typography>
                                        </Grid>

                                        {/* Second Column */}
                                        <Grid item xs={6}>
                                            <Typography fontWeight="bold" sx={{ fontSize: '9px', display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src={download_11} // Replace with your actual image path
                                                    alt="Earnings Icon"
                                                    style={{ width: 15, height: 15, marginRight: '0.5rem', verticalAlign: 'middle' }}
                                                />
                                                Today Earnings
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
                                                $11,240
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    {/* Additional Info */}
                                    <Grid container justifyContent="space-between" mt={2}>
                                        <Grid item xs={3.5} textAlign="center">
                                            <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                Total Trip
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                15
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5} textAlign="center">
                                            <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                Total Distance
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                15 Km
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5} textAlign="center">
                                            <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                Total Time
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '10px' }}>
                                                90 Min
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Divider sx={{ my: 2 }} />

                        {/* Points Section */}
                        <Grid container spacing={2} >
                            {/* <Grid item xs={12} md={12}> */}
                            <Card sx={{ boxShadow: 1 }}>
                                <CardContent style={{ display: 'flex' }}>
                                    {/* <Grid container justifyContent="space-between" style={{ border: '2px solid red' }}> */}
                                    {/* Image Section */}
                                    <Grid item xs={2}>
                                        <img src={download_11} alt="points" style={{ maxWidth: '90%' }} />
                                    </Grid>

                                    {/* Points Section */}
                                    <Grid item xs={6}>
                                        <Typography fontWeight="bold" color="primary">
                                            My Points
                                        </Typography>
                                        <Typography fontWeight="bold" variant="h6" color="orange">
                                            3456
                                        </Typography>
                                    </Grid>

                                    {/* Button Section */}
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                textTransform: 'none',
                                                backgroundColor: 'orange',
                                                color: '#fff',
                                                padding: '2px 8px',
                                                fontSize: '0.50rem',
                                                minWidth: '120%',
                                            }}
                                        >
                                            See Reward
                                        </Button>
                                    </Grid>
                                    {/* </Grid> */}
                                </CardContent>
                            </Card>
                            {/* </Grid> */}
                        </Grid>

                    </Card>
                </Grid>
                {/* Right side */}
                <Grid item xs={5} >
                    <Grid container display={'flex'} justifyContent={'space-between'}>
                        <Card>
                            <CardContent>
                                <img
                                    src={download_11}
                                    alt="Performance icon"
                                    style={{ width: 28, height: 28, verticalAlign: 'middle', marginRight: 8 }}
                                />
                                <Typography variant="h6" fontWeight="bold">
                                    50%
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Performance
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <img
                                    src={download_11}
                                    alt="Performance icon"
                                    style={{ width: 28, height: 28, verticalAlign: 'middle', marginRight: 8 }}
                                />
                                <Typography variant="h6" fontWeight="bold">
                                    80%
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Min.Performance
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <img
                                    src={download_11}
                                    alt="Performance icon"
                                    style={{ width: 28, height: 28, verticalAlign: 'middle', marginRight: 8 }}
                                />
                                <Typography variant="h6" fontWeight="bold">
                                    75%
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Avg.Performance
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container>
                        <PerformanceChart />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Rider;