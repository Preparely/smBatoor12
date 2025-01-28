import React, { useState } from 'react'
import { Avatar, Box, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, IconButton, Typography } from '@mui/material'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import images_20 from '../../components/Img/images_20.png';
import images_22 from '../../components/Img/images_22.png';
import download_16 from '../../components/Img/download_16.png';
import download_11 from '../../components/Img/download_11.png';
import download_23 from '../../components/Img/download_23.png';
import images_23 from '../../components/Img/images_23.png';
import RemoveIcon from '@mui/icons-material/Remove';

const MenuCard = () => {


    // Right Side
    const [items, setItems] = useState([
        {
            name: 'Pepperoni Pizza',
            price: 55.59,
            quantity: 1,
            image: download_11,
        },
        {
            name: 'Japan Ramen',
            price: 55.59,
            quantity: 1,
            image: download_23,
        },
        {
            name: 'Fried Rice',
            price: 55.59,
            quantity: 1,
            image: images_23,
        },
    ]);

    const handleQuantityChange = (index, change) => {
        const newItems = [...items];
        newItems[index].quantity += change;
        if (newItems[index].quantity < 1) newItems[index].quantity = 1;
        setItems(newItems);
    };

    const balance = 12000;
    const serviceFee = 1;
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0) + serviceFee;

    return (
        <>
            <Grid container p={4} justifyContent={'space-between'}>
                {/* Left Side */}
                <Grid item xs={7} sx={{ display: 'flex' }}>
                    <Grid container>
                        {/* Images */}
                        <Grid item xs={12}>
                            <img
                                src={download_16}
                                alt="Main Images"
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </Grid>
                        {/* Category || Cards */}
                        <Grid item xs={12}>
                        <Typography
                                variant="h5"
                                mt={3}
                                sx={{ fontWeight: 600, textAlign: "left" }}
                            >
                                Caregory
                            </Typography>
                            <Grid container display={'flex'} spacing={2}>
                                {/* Card 1 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "16px",
                                            boxShadow: 3
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sizes='small'
                                            image={images_20}
                                            alt="Burger"
                                            sx={{
                                                width: "50%",
                                                height: "auto",
                                                marginBottom: "16px"
                                            }}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{ textAlign: "center" }}
                                            >
                                                Burger
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* Card 2 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "16px",
                                            boxShadow: 3
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={images_22}
                                            alt="Burger"
                                            sx={{
                                                width: "50%",
                                                height: "auto",
                                                marginBottom: "16px"
                                            }}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{ textAlign: "center" }}
                                            >
                                                Bakery
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* Card 3 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "16px",
                                            boxShadow: 3
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={images_20}
                                            alt="Burger"
                                            sx={{
                                                width: "50%",
                                                height: "auto",
                                                marginBottom: "16px"
                                            }}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{ textAlign: "center" }}
                                            >
                                                Burger
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Best Seller || Last Card */}
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                mt={3}
                                sx={{ fontWeight: 600, textAlign: "left" }}
                            >
                                Best Seller
                            </Typography>
                            <Grid container display={'flex'} spacing={2} justifyContent={'space-between'}>
                                {/* Card 1 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            width: '90%',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                            position: "relative",
                                            padding: 1,
                                        }}
                                    >
                                        {/* Discount Badge */}
                                        <Chip
                                            label="15% Off"
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                left: 8,
                                                backgroundColor: "#FF5A5F",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "0.8rem",
                                            }}
                                        />

                                        {/* Favorite Icon */}
                                        <IconButton
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                color: "black",
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>

                                        {/* Product Image */}
                                        <CardMedia
                                            component="img"
                                            image={images_20}
                                            alt="Cheese Burger"
                                            sx={{ height: 100, objectFit: "contain", marginBottom: 1 }}
                                        />

                                        <CardContent sx={{ textAlign: "center", padding: 1 }}>
                                            {/* Stars */}
                                            <Box sx={{ display: "flex", justifyContent: "left", marginBottom: 1 }}>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            color: index < 3 ? "#FF9800" : "#E0E0E0",
                                                            fontSize: "1.2rem",
                                                        }}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </Box>

                                            {/* Product Name */}
                                            <Grid container display={'flex'} justifyContent={'space-between'}>
                                                <Typography variant="body1" fontWeight="bold" textAlign={'left'}>
                                                    Cheese Burger
                                                </Typography>
                                                {/* Add to Cart Button */}
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    sx={{
                                                        minWidth: 22,
                                                        minHeight: 22,
                                                        borderRadius: "20%",
                                                        padding: 0,
                                                    }}
                                                >
                                                    <AddIcon />
                                                </Button>
                                            </Grid>
                                            {/* Product Price */}
                                            <Typography variant="body2" fontWeight='bold' color="text.secondary" mb={1} textAlign={'left'}>
                                                $5.59
                                            </Typography>


                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* Card 2 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            width: '90%',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                            position: "relative",
                                            padding: 1,
                                        }}
                                    >
                                        {/* Discount Badge */}
                                        <Chip
                                            label="15% Off"
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                left: 8,
                                                backgroundColor: "#FF5A5F",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "0.8rem",
                                            }}
                                        />

                                        {/* Favorite Icon */}
                                        <IconButton
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                color: "black",
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>

                                        {/* Product Image */}
                                        <CardMedia
                                            component="img"
                                            image={images_20}
                                            alt="Cheese Burger"
                                            sx={{ height: 100, objectFit: "contain", marginBottom: 1 }}
                                        />

                                        <CardContent sx={{ textAlign: "center", padding: 1 }}>
                                            {/* Stars */}
                                            <Box sx={{ display: "flex", justifyContent: "left", marginBottom: 1 }}>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            color: index < 3 ? "#FF9800" : "#E0E0E0",
                                                            fontSize: "1.2rem",
                                                        }}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </Box>

                                            {/* Product Name */}
                                            <Grid container display={'flex'} justifyContent={'space-between'}>
                                                <Typography variant="body1" fontWeight="bold" textAlign={'left'}>
                                                    Cheese Burger
                                                </Typography>
                                                {/* Add to Cart Button */}
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    sx={{
                                                        minWidth: 22,
                                                        minHeight: 22,
                                                        borderRadius: "20%",
                                                        padding: 0,
                                                    }}
                                                >
                                                    <AddIcon />
                                                </Button>
                                            </Grid>
                                            {/* Product Price */}
                                            <Typography variant="body2" fontWeight='bold' color="text.secondary" mb={1} textAlign={'left'}>
                                                $5.59
                                            </Typography>


                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* Card 3 */}
                                <Grid item xs={4}>
                                    <Card
                                        sx={{
                                            width: '90%',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                            position: "relative",
                                            padding: 1,
                                        }}
                                    >
                                        {/* Discount Badge */}
                                        <Chip
                                            label="15% Off"
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                left: 8,
                                                backgroundColor: "#FF5A5F",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "0.8rem",
                                            }}
                                        />

                                        {/* Favorite Icon */}
                                        <IconButton
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                color: "black",
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>

                                        {/* Product Image */}
                                        <CardMedia
                                            component="img"
                                            image={images_20}
                                            alt="Cheese Burger"
                                            sx={{ height: 100, objectFit: "contain", marginBottom: 1 }}
                                        />

                                        <CardContent sx={{ textAlign: "center", padding: 1 }}>
                                            {/* Stars */}
                                            <Box sx={{ display: "flex", justifyContent: "left", marginBottom: 1 }}>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <span
                                                        key={index}
                                                        style={{
                                                            color: index < 3 ? "#FF9800" : "#E0E0E0",
                                                            fontSize: "1.2rem",
                                                        }}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </Box>

                                            {/* Product Name */}
                                            <Grid container display={'flex'} justifyContent={'space-between'}>
                                                <Typography variant="body1" fontWeight="bold" textAlign={'left'}>
                                                    Cheese Burger
                                                </Typography>
                                                {/* Add to Cart Button */}
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    sx={{
                                                        minWidth: 22,
                                                        minHeight: 22,
                                                        borderRadius: "20%",
                                                        padding: 0,
                                                    }}
                                                >
                                                    <AddIcon />
                                                </Button>
                                            </Grid>
                                            {/* Product Price */}
                                            <Typography variant="body2" fontWeight='bold' color="text.secondary" mb={1} textAlign={'left'}>
                                                $5.59
                                            </Typography>


                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                {/* Right Side */}
                <Grid item xs={4.8}  >
                    <Card sx={{background:'#fff9c4', borderRadius:'20px'}}>
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold" textAlign={'left'} mb={1}>
                                Your Balance
                            </Typography>
                            {/* FB8019 */}
                            <Grid item p={1} sx={{ background: '#FB8019', }}>
                                <Typography variant="h5" color="white" textAlign={'left'}>
                                    Balance
                                </Typography>
                                <Typography variant="h5" fontWeight={'bold'} color="white" textAlign={'left'}>
                                    ${balance.toFixed(2)}
                                </Typography>
                                <Grid sx={{ display: 'flex', gap: 1, }}>
                                    <Button variant="outlined" sx={{ background: 'white' }}>
                                        <BrowserUpdatedIcon sx={{ mr: 1 }} />
                                        Top up
                                    </Button>
                                    <Button variant="outlined" sx={{ background: 'white' }}>
                                        <TransferWithinAStationIcon sx={{ mr: 1 }} />
                                        Transfer
                                    </Button>
                                </Grid>
                            </Grid>
                            <Divider sx={{ border: "1px solid #FB8019", mt:'9px' }} />

                            <Typography variant="h6" mt={2} color={'#FB8019'} fontWeight="bold" textAlign={'left'}>
                                Your Address
                            </Typography>
                            <Grid container display={'flex'} justifyContent="space-between" alignItems="center">
                                <Typography variant="body1" textAlign="left">
                                    <Grid display="inline-flex" alignItems="center">
                                        <LightbulbCircleIcon sx={{ mr: 1 }} />
                                        Elm Street, 23
                                    </Grid>
                                </Typography>
                                <Button variant="outlined" size="small" sx={{ borderColor: '#FB8019', color: '#FB8019' }}>
                                    Change
                                </Button>
                            </Grid>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: "#FB8019",
                                        '&:hover': {
                                            backgroundColor: "#FB8019",
                                            boxShadow: 'none'
                                        }
                                    }}
                                >
                                    Add Details
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: "#FB8019",
                                        '&:hover': {
                                            backgroundColor: "#FB8019",
                                            boxShadow: 'none'
                                        }
                                    }}
                                >
                                    Add Note
                                </Button>
                            </Box>

                            <Divider sx={{ border: "1px solid #FB8019", mt:'9px'}} />

                            {items.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    {/* Image */}
                                    <Avatar
                                        src={item.image}
                                        alt={item.name}
                                        variant="square"
                                        sx={{ width: 50, height: 50, mr: 1 }}
                                    />
                                    {/* Name and Price */}
                                    <Box sx={{ flexGrow: 1 }} textAlign={'left'}>
                                        <Typography fontWeight="bold">{item.name}</Typography>
                                    </Box>
                                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography fontWeight="bold" color="orange" sx={{ mr: 2, textAlign: 'right' }}>
                                            +${item.price.toFixed(2)}
                                        </Typography>
                                        {/* Quantity Controls */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: '1px solid orange',
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <IconButton
                                                size="small"
                                                sx={{ color: 'orange' }}
                                                onClick={() => handleQuantityChange(index, -1)}
                                            >
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography sx={{ px: 1, minWidth: 30, textAlign: 'center' }}>
                                                {item.quantity}
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                sx={{ color: 'orange' }}
                                                onClick={() => handleQuantityChange(index, 1)}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                            <Divider sx={{ border: "1px solid #FB8019", }} />

                            <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Service</span> <span>${serviceFee.toFixed(2)}</span>
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                <span>Total</span> <span style={{ color: '#FB8019', fontWeight: 'bold' }}>${total.toFixed(2)}</span>
                            </Typography>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#FB8019",
                                    '&:hover': {
                                        backgroundColor: "#FB8019",
                                        boxShadow: 'none'
                                    }
                                }}
                            >                                Checkout
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default MenuCard