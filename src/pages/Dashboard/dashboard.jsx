import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Button,
    CardMedia,
    CardActionArea,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Link,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import BarChart from "../../components/BarChart";
import shopIcon from '../../components/Img/shop.png';
import layer from '../../components/Img/layer.png';
import gallery_favorite from '../../components/Img/gallery_favorite.png';
import gallery_tick from '../../components/Img/gallery_tick.png';
import coffee from '../../components/Img/coffee.png';
import images_14 from '../../components/Img/images_14.png';
import download_6 from '../../components/Img/download_6.png';
import download_8 from '../../components/Img/download_8.png';
import images_13 from '../../components/Img/images_13.png';
import download_7 from '../../components/Img/download_7.png';
import download_9 from '../../components/Img/download_9.png';
import download_10 from '../../components/Img/download_10.png';
import images_17 from '../../components/Img/images_17.png';
import images_15 from '../../components/Img/images_15.png';
import images_16 from '../../components/Img/images_16.png';

const Dashboard = () => {
    const metrics = [
        { title: "Order received", value: 1520, color: "error.main", icon: shopIcon },
        { title: "Order served", value: 1428, color: "success.main", icon: layer },
        { title: "Pending order", value: 30, color: "info.main", icon: gallery_favorite },
        { title: "Refund Payment", value: "$105", color: "warning.main", icon: gallery_tick },
        { title: "New customers", value: 36, color: "secondary.main", icon: coffee },
    ];

    const complaints = [
        { name: "Wilder Scott", time: "1 min ago", avatar: images_14 },
        { name: "Wilder Scott", time: "2 min ago", avatar: download_10 },
        { name: "Wilder Scott", time: "3 min ago", avatar: images_15 },
    ];
    const complaints2 = [
        { name: "Wilder Scott", time: "1 min ago", avatar: download_9 },
        { name: "Wilder Scott", time: "2 min ago", avatar: images_17 },
        { name: "Wilder Scott", time: "3 min ago", avatar: images_16 },
    ];
    // Cards In Row
    const cardDetails = [
        {
            image: download_8,
            title: "Chiilly Paner Footlong",
            price: 996
        },
        {
            image: images_13,
            title: "Chiilly Garlic Bread",
            price: 997
        },
        {
            image: download_7,
            title: "Mutton King Burger",
            price: 994
        },
        {
            image: download_6,
            title: "kabab Mutton Spicy",
            price: 869
        },
    ];


    // Table
    const orders = [
        {
            id: 25896,
            customer: "Jefferson Clay",
            food: "Chicken Burger",
            foodImage: images_14, // Replace with actual image URL
            phone: "+99 256 896 8856",
            price: "$11.00",
            status: "Accepted",
        },
        {
            id: 27856,
            customer: "Langston Lee",
            food: "Pizza Chicken Bake",
            foodImage: images_14, // Replace with actual image URL
            phone: "+99 963 852 7744",
            price: "$50.00",
            status: "Pending",
        },
        {
            id: 23698,
            customer: "Bronson Jo",
            food: "Eoa Chowmen",
            foodImage: images_14, // Replace with actual image URL
            phone: "+99 125 965 8544",
            price: "$68.00",
            status: "Pending",
        },
    ];

    return (
        <>
            {/* Metrics Section */}
            <Grid container spacing={2}>
                {metrics.map((metric, index) => (
                    <Grid item xs={12} sm={6} md={2.4} key={index}>
                        <Card sx={{ textAlign: "center" }}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography style={{ fontSize: '20px', fontWeight: '700' }}>
                                            {metric.value}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography >
                                            <img
                                                src={metric.icon}
                                                alt={metric.name}
                                                style={{ width: '24px', height: '24px' }} // Adjust size as needed
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignContent: 'space-around',
                                                alignItems: 'center',
                                                backgroundColor: (theme) => theme.palette[metric.color.split('.')[0]][metric.color.split('.')[1]],
                                                borderRadius: 1,
                                                // padding: 1,
                                                width: 130,
                                            }}
                                        >
                                            <Typography >
                                                {metric.title}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: 4 }}>
                {/* Bar Chart Section */}
                <Grid item xs={12} md={7}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Recent Complaints
                            </Typography>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Complaints List Section */}
                <Grid item xs={12} md={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Recent Complaints
                            </Typography>
                            <Grid container display={"flex"}>
                                {/* Recent Complaints 1 */}
                                <Grid item xs={12} sm={6} md={6}>
                                    {complaints.map((complaint, index) => (
                                        <Grid
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                // alignItems: "flex-start",
                                                marginBottom: 2,
                                                paddingBottom: 2,
                                                borderBottom: index !== complaints.length - 1 ? "1px solid #ddd" : "none",
                                            }}
                                        >
                                            {/* Avatar Section */}
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                                <img
                                                    src={complaint.avatar}
                                                    alt={complaint.name}
                                                    style={{ width: 50, height: 50, marginRight: 8 }}
                                                />
                                            </div> */}
                                            <Grid item xs={4}
                                                sx={{
                                                    flexShrink: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <img
                                                    src={complaint.avatar}
                                                    alt={complaint.name}
                                                    style={{
                                                        width: '80%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Grid>
                                            {/* Content Section */}
                                            <Grid
                                                item
                                                xs={8}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    justifyContent: "flex-start",
                                                    padding: "8px",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: "bold",
                                                        color: "#555",
                                                    }}
                                                >
                                                    {complaint.time}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: "600",
                                                        color: "#333",
                                                    }}
                                                >
                                                    {complaint.name}
                                                </Typography>
                                                <Link
                                                    variant="text"
                                                    size="small"
                                                    color="#FF0000"
                                                    sx={{ textTransform: "uppercase" }}
                                                >
                                                    View Message
                                                </Link>
                                            </Grid>

                                        </Grid>
                                    ))}
                                </Grid>
                                {/* Recent Complaints 2 */}
                                <Grid item xs={12} sm={6} md={6}>
                                    {complaints2.map((complaint, index) => (
                                        <Grid
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                // alignItems: "flex-start",
                                                marginBottom: 2,
                                                paddingBottom: 2,
                                                borderBottom: index !== complaints.length - 1 ? "1px solid #ddd" : "none",
                                            }}
                                        >
                                            {/* Avatar Section */}
                                            <Grid item xs={4}
                                                sx={{
                                                    flexShrink: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <img
                                                    src={complaint.avatar}
                                                    alt={complaint.name}
                                                    style={{
                                                        width: '80%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Grid>
                                            {/* Content Section */}
                                            <Grid
                                                item
                                                xs={8}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    justifyContent: "flex-start",
                                                    padding: "8px",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.9rem",
                                                        fontWeight: "bold",
                                                        color: "#555",
                                                    }}
                                                >
                                                    {complaint.time}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: "600",
                                                        color: "#333",
                                                    }}
                                                >
                                                    {complaint.name}
                                                </Typography>
                                                <Link
                                                    variant="text"
                                                    size="small"
                                                    color="#FF0000"
                                                    sx={{ textTransform: "uppercase" }}
                                                >
                                                    View Message
                                                </Link>
                                            </Grid>

                                        </Grid>
                                    ))}
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Card In Row */}
                <Grid container spacing={2} mt={2} justifyContent="center">
                    {cardDetails.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.image}
                                        alt={card.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" noWrap>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ${card.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Table */}
                <Grid
                    item
                    xs={12}
                    mt={3}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "8px",
                        background: '#FFFFFF',
                    }}
                >
                    <Typography variant="h6" style={{ padding: "16px", fontWeight: 'bolder' }}>
                        Recent Online Order
                    </Typography>
                </Grid>
                <Grid item xs={8} md={12}>
                    <TableContainer component={Paper}>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Order Id</strong></TableCell>
                                    <TableCell><strong>Customer</strong></TableCell>
                                    <TableCell><strong>Food</strong></TableCell>
                                    <TableCell><strong>Phone</strong></TableCell>
                                    <TableCell><strong>Price</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell><strong>Action</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.customer}</TableCell>
                                        <TableCell>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <img
                                                    src={order.foodImage}
                                                    alt={order.food}
                                                    style={{ width: 50, height: 50, marginRight: 8 }}
                                                />
                                                {order.food}
                                            </div>
                                        </TableCell>
                                        <TableCell>{order.phone}</TableCell>
                                        <TableCell>{order.price}</TableCell>
                                        <TableCell>{order.status}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                size="small"
                                                style={{ marginRight: 8 }}
                                            >
                                                Accept
                                            </Button>
                                            <Button variant="contained" color="error" size="small">
                                                Decline
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
