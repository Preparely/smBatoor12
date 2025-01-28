// import { Search } from '@mui/icons-material'
// import { Button, Grid, Input, InputBase, styled, Typography } from '@mui/material'
// import React from 'react'
// import SearchIcon from "@mui/icons-material/Search";
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';

// const StyledSearch = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "white",
//     borderRadius: theme.shape.borderRadius,
//     padding: "0 8px",
//     width: "200px",
// }));


// const AddStore = () => {
//     const { register, handleSubmit, watch, reset } = useForm();

//     const onSubmit = (data) => {
//         console.log("Form Data:", data); // Values will be logged in the console
//         reset(); // Reset form after submission
//     };
//     return (
//         <>
//             <Grid container >
//                 <Grid item sx={12} display={'flex'} justifyContent={'space-between'} style={{ width: '100%' }}>
//                     <Grid item display={'flex'} gap={3} sx={6}>
//                         <Typography variant="h6" fontWeight={'bold'} gutterBottom >
//                             Batoor
//                         </Typography>
//                         <StyledSearch sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#fff', padding: '5px 10px' }}>
//                             {/* Add the SearchIcon before the InputBase */}
//                             <SearchIcon sx={{ color: 'black', marginLeft: '8px' }} />
//                             <InputBase
//                                 placeholder="Search"
//                                 size="small"
//                                 inputProps={{ 'aria-label': 'search' }}
//                                 sx={{
//                                     ml: 1,
//                                     flex: 1,
//                                     borderRadius: '10px',
//                                     backgroundColor: '#fff',
//                                     paddingLeft: '8px',
//                                 }}
//                             />
//                         </StyledSearch>
//                     </Grid>
//                     <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                         <Button
//                             variant="contained"
//                             sx={{
//                                 backgroundColor: "#FF9900",
//                                 borderRadius: '130px',
//                                 textTransform: "capitalize",
//                                 "&:hover": { backgroundColor: "#FF9900" },
//                             }}
//                         >
//                             Add a store
//                         </Button>
//                     </Grid>

//                 </Grid>
//             </Grid>
//             <Grid container >
//                 <Grid item sx={12} alignItems={'center'} style={{ width: '100%' }}>
//                     <Typography
//                         variant="h5"
//                         fontWeight="bold"
//                         sx={{ color: "#000", }}
//                     >
//                         Add a Store
//                     </Typography>
//                     <Typography
//                         variant="subtitle2"
//                         color="text.secondary"
//                         sx={{ fontSize: "0.8rem", mt: 1 }} // Add margin-top for spacing
//                     >
//                         Type the name of the store you want to add.
//                     </Typography>
//                 </Grid>
//                 <Grid item sx={6} display={'flex'} flexDirection={'column'} style={{ width: '100%' }}>
//                     <form onSubmit={handleSubmit(onSubmit)} style={{ justifyContent: 'start' }}>
//                         <Grid item sx={6} p={3} gap={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '50%' }}>
//                             <Input
//                                 type="text"
//                                 placeholder="Large retailer"
//                                 {...register("Large_Retailer", { required: "Large retailer is required" })}
//                                 style={{
//                                     width: "100%",
//                                     padding: "10px",
//                                     marginBottom: "10px",
//                                     border: "1px solid #ccc",
//                                     borderRadius: '30px'

//                                 }}
//                             />
//                             <Input
//                                 type="text"
//                                 placeholder="Small or loacl business"
//                                 {...register("Small_Or_Loacl_Bussiness", { required: "Small or loacl business  is required" })}
//                                 style={{
//                                     width: "100%",
//                                     padding: "10px",
//                                     marginBottom: "10px",
//                                     border: "1px solid #ccc",
//                                     borderRadius: '30px'

//                                 }}
//                             />
//                             <Input
//                                 type="text"
//                                 placeholder="Whole Sale provider"
//                                 {...register("Whole_Sale_provider", { required: "Whole Sale provider  is required" })}
//                                 style={{
//                                     width: "100%",
//                                     padding: "10px",
//                                     marginBottom: "10px",
//                                     border: "1px solid #ccc",
//                                     borderRadius: '30px'

//                                 }}
//                             />
//                         </Grid>
//                         <Grid item sx={12} style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}  >
//                             {/* <Button
//                                 type="button"
//                                 onClick={() => reset()}
//                                 style={{
//                                     padding: "10px 20px",
//                                     marginRight: "10px",

//                                     border: "1px solid #ccc",
//                                     borderRadius: "30px",
//                                 }}
//                             > */}
//                             <Button
//                                 variant="contained"
//                                 type="button"
//                                 component={Link}
//                                 to="/stores/Manage-&-Add-Store"
//                                 onClick={() => reset()}
//                                 sx={{
//                                     background: "#f5f5f5",
//                                     padding: "10px 20px",
//                                     marginRight: "10px",
//                                     color:'black',
//                                     border: "1px solid #ccc",
//                                     borderRadius: "30px",
//                                 }}
//                             >
//                                 Cancel
//                             </Button>
//                             <Button
//                                 type="submit"
//                                 style={{
//                                     padding: "10px 20px",
//                                     background: "#FF9900",
//                                     border: "none",
//                                     color: "white",
//                                     borderRadius: "30px",
//                                 }}
//                             >
//                                 Add store
//                             </Button>
//                         </Grid>
//                     </form>
//                 </Grid >
//             </Grid>

//         </>
//     )
// }

// export default AddStore 

import React from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddStore = () => {
    const { control, handleSubmit, setValue, watch, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Uploaded Image:', file); // File ko console mein dikhayen
            setValue('imageFile', file); // React Hook Form ke andar image file set karein
        }
    };

    return (
        <Box sx={{ padding: '20px' }}>
            {/* <Typography variant="h5" align="center" gutterBottom> */}
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#000", }}
            >
                Add Store
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Left Side Fields */}
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Controller
                                name="storeName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Store Name"
                                        placeholder="Nike"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                            <Controller
                                name="storeCategory"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Store Category"
                                        placeholder="AirMax270"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                            <Controller
                                name="storeAddress"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Store Address/Location"
                                        placeholder="Store Address/Location"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                        </Box>
                    </Grid>

                    {/* Right Side Fields */}
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            {/* Image Upload Field */}
                            <Box>
                                <Typography variant="body1" gutterBottom>
                                    Upload Image
                                </Typography>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload} // Handle file upload
                                />
                            </Box>
                            <Controller
                                name="storeContact"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Store Contact Details"
                                        placeholder="Store Contact Details"
                                        variant="outlined"
                                        fullWidth
                                    />
                                )}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        type="button"
                        component={Link}
                        to="/stores/Manage-&-Add-Store"
                        onClick={() => reset()}
                        sx={{
                            background: "#f5f5f5",
                            padding: "10px 20px",
                            marginRight: "10px",
                            color: 'black',
                            border: "1px solid #ccc",
                            borderRadius: "30px",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ padding: '10px 40px', borderRadius: '20px' }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default AddStore;
