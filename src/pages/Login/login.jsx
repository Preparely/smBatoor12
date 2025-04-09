import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useLoginHandlerMutation } from "../../redux/features/Login/loginSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginHandler, { isLoading, error, data: loginData }] = useLoginHandlerMutation();

  const onSubmit = async (formData) => {
    try {
      const response = await loginHandler(formData).unwrap();
      console.log("Login successful:", response);

      // Ensure response is valid and contains necessary data (e.g., token)
      if (response && response.token) {
        localStorage.setItem('user', JSON.stringify(response));
        sessionStorage.setItem('access', JSON.stringify(response.token));
        navigate('/dashboard');  // Redirect only if response is valid
      }
    } catch (err) {
      console.error("Login error:", err);
      // Show SweetAlert2 error when login fails
      Swal.fire({
        icon: 'error',
        title: 'Invalid username or password',
        text: 'Please check your username and password and try again.',
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
