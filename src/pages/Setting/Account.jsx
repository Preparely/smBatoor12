import React from "react";
import { Box, Card, CardContent, Typography, Grid, TextField, Button } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const sections = [
    { title: "Account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Security", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Help", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];
const sections2 = [
    { title: "Notification", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Privacy Policy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const AccountPage = () => {
    return (
        <>
            <Grid container spacing={2}>
                {/* Left Section */}
                <Grid item xs={12} md={5}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container spacing={2}>
                                {/* First Column */}
                                <Grid item xs={5}>
                                    {sections.map((section, index) => (
                                        <Card variant="outlined" key={index} style={{height:'150px'}}>
                                            <CardContent>
                                                <Typography variant="h6" color="primary" gutterBottom>
                                                    {section.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {section.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Grid>

                                {/* Second Column */}
                                <Grid item xs={7}>
                                    {sections2.map((section, index) => (
                                        <Card variant="outlined" key={index} style={{height:'150px'}}>
                                            <CardContent>
                                                <Typography variant="h6" color="primary" gutterBottom>
                                                    {section.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {section.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>


                {/* Right Section */}
                <Grid item xs={12} md={7}>
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Account
                        </Typography>
                        <Box component="form" display="flex" flexDirection="column" gap={2}>
                            <TextField label="Photo Profile" variant="outlined" fullWidth disabled />
                            <TextField label="Username" variant="outlined" fullWidth />
                            <TextField label="Email Address" variant="outlined" fullWidth />
                            <TextField label="Phone" variant="outlined" fullWidth />
                            <TextField label="Password" type="password" variant="outlined" fullWidth />
                            <Button variant="contained" color="primary" fullWidth>
                                Save Changes
                            </Button>
                        </Box>
                    </Box>

                    {/* Map Section */}
                    <Box mt={4}>
                        <MapContainer
                            center={[41.3275, 19.8189]} // Coordinates for Tirana
                            zoom={13}
                            style={{ height: 300, width: "100%" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                        </MapContainer>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AccountPage;