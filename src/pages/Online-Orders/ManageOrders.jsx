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
} from "@mui/material";
import download_11 from "../../components/Img/download_11.png";
import download_12 from "../../components/Img/download_12.png";
import images_18 from "../../components/Img/images_18.png";
import { Start } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const OnlineOrder = () => {

    const [activeButton, setActiveButton] = useState("OrderIn");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName); // Set the clicked button as active
    };


    return (
        <Grid sx={{ padding: 4, backgroundColor: "#f8f9fa", height: "100vh" }}>
            <Grid container spacing={2}>
                {/* Sidebar */}
                <Grid item xs={4}>
                    <Paper elevation={3} sx={{ height: "100%", padding: 2 }}>
                        {/* <Grid
                            sx={{
                                display: "flex", justifyContent: "space-between", mb: 2, p: 1,
                                background: '#00000033',
                                borderRadius: "5px",
                            }}
                        >
                            <Button
                                style={{
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Order In
                            </Button>
                            <Button
                                style={{
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Prepared
                            </Button>
                            <Button
                                style={{
                                    borderColor: "#640505",
                                    color: "white",
                                    fontWeight: 'bold',
                                    textTransform: "none",
                                }}
                            >
                                Delivered
                            </Button>
                        </Grid> */}
                        <Grid
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                // mb: 2,
                                // p: 1,
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
                                Pannding
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

                {/* Order Details */}
                <Grid item xs={8}>
                    <Paper elevation={3} sx={{ height: "100%", padding: 3 }}>
                        <Grid item xs={12} md={8} textAlign="left">
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                Order Details
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid mt={2}>
                            <Grid container spacing={2}>
                                {/* Order Info */}
                                <Grid item xs={12} md={8} textAlign="left">
                                    <Typography variant="body1" fontWeight="bold">
                                        Order #1
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        June 1, 2020, 06:22 AM
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4} display='flex' justifyContent="space-around" alignItems="center">
                                    <Grid item>
                                        <img
                                            src={images_18} // Replace with your image URL or path
                                            alt="Roby Roban"
                                            style={{ width: 50, height: 50, borderRadius: "50%" }} // Adjust styling as needed
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" fontWeight="bold">
                                            Roby Roban
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            User since 2020
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* <Grid item xs={12} md={3}>
                  <Typography variant="body1" fontWeight="bold">
                    Roby Roban
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    User since 2020
                  </Typography>
                </Grid> */}
                            </Grid>

                            <Divider sx={{ my: 2 }} />
                            <Grid container spacing={2} justifyContent="space-evenly">
                                <Grid item xs={12} md={12} textAlign="left">
                                    <Typography variant="body2" mt={2}>
                                        Delivery Address:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} textAlign="left">
                                    <Typography
                                        variant="body2"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <LocationOnIcon sx={{ color: "#FB8019", marginRight: 1 }} />
                                        <strong>Elm Street, 23</strong>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" mt={1}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Typography>
                                </Grid>
                                {/* Customer Info */}
                                <Grid item xs={12} md={6}>
                                    <Grid container spacing={3}>
                                        {/* First Row */}
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Estimation Time
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                10 Min
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Payment
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                10 Min
                                            </Typography>
                                        </Grid>

                                        {/* Second Row */}
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Estimation Time
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                10 Min
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Payment
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                10 Min
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Divider sx={{ my: 2 }} />
                            <Grid container spacing={2}>
                                {/* Order Menu */}
                                <Grid item xs={12}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Order Menu
                                    </Typography>
                                    <Grid mt={1}>
                                        <Grid
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                mb: 1,
                                            }}
                                        >
                                            <Grid
                                                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                            >
                                                <img
                                                    src={download_11}
                                                    alt="Pepperoni Pizza"
                                                    style={{
                                                        borderRadius: "20%",
                                                        border: "2px solid #FB8019",
                                                    }}
                                                />
                                                <Typography variant="body2">Pepperoni Pizza</Typography>
                                            </Grid>
                                            <Typography
                                                variant="body2"
                                                style={{ color: "#FB8019", fontWeight: "bold" }}
                                            >
                                                +$5.59
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                mb: 1,
                                            }}
                                        >
                                            <Grid
                                                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                            >
                                                <img
                                                    src={download_12}
                                                    alt="Pepperoni Pizza"
                                                    style={{
                                                        borderRadius: "20%",
                                                        border: "2px solid #FB8019",
                                                    }}
                                                />
                                                <Typography variant="body2">Pepperoni Pizza</Typography>
                                            </Grid>
                                            <Typography
                                                variant="body2"
                                                style={{ color: "#FB8019", fontWeight: "bold" }}
                                            >
                                                +$5.59
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body2" textAlign="right" mt={2}>
                                        <strong>Total: $12.59</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid mt={4} display="flex" justifyContent="flex-end">
                            <Button
                                variant="outlined"
                                style={{
                                    marginRight: "20px",
                                    borderColor: "#640505",
                                    color: "#640505",
                                }}
                            >
                                Reject Order
                            </Button>

                            <Button variant="contained" color="success">
                                Accept Order
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OnlineOrder;
