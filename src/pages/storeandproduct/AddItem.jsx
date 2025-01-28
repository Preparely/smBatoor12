import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid, Box } from "@mui/material";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data to the console
    if (data.image[0]) {
        console.log("Uploaded file:", data.image[0]);
      }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Name"
              variant="outlined"
              {...register("productName")}
            />
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              {...register("description")}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              {...register("price")}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Stock"
              variant="outlined"
              {...register("stock")}
              sx={{ mt: 2 }}
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
          <Box sx={{ mb: 2 }}>
              <label htmlFor="imageUpload" style={{ display: "block", marginBottom: "8px" }}>
                Upload Image
              </label>
              <input
                type="file"
                id="imageUpload"
                {...register("image")}
                accept="image/*"
              />
            </Box>
            {/* <TextField
              fullWidth
              label="Image URL"
              variant="outlined"
              {...register("imageUrl")}
              sx={{ mb: 2 }}
            /> */}
            <TextField
              fullWidth
              label="Size"
              variant="outlined"
              {...register("size")}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Variation"
              variant="outlined"
              {...register("variation")}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Color"
              variant="outlined"
              {...register("color")}
              sx={{ mt: 2 }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#ff6f00",
                color: "white",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddItem;
