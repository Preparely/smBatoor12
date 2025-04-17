import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  Button,
  Card,
  CardContent,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import images_18 from "../../components/Img/images_18.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  useGetOrderHistoryQuery,
  useUpdateOrderStatusMutation,
  useCancelOrderMutation,
} from "../../redux/features/OnlineOrders/manageorderSlice";

const OnlineOrder = () => {
  const { data, isLoading } = useGetOrderHistoryQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [cancelOrder] = useCancelOrderMutation();
  
  const [rejectionReason, setRejectionReason] = useState("");
  const [errorText, setErrorText] = useState("");

  const [activeButton, setActiveButton] = useState("OrderIn");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(""); // "accept" | "reject"

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setSelectedOrder(null);
  };

  const handleDialogOpen = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogType("");
    setRejectionReason("");
    setErrorText("");
  };
  

  const handleDialogConfirm = async () => {
    if (!selectedOrder?._id) return;
  
    try {
      if (dialogType === "accept") {
        await updateOrderStatus({ id: selectedOrder._id, body: { status: "Confirmed" } });
        alert("Order confirmed!");
      } else if (dialogType === "reject") {
        if (!rejectionReason.trim()) {
          setErrorText("Rejection reason is required.");
          return;
        }
        await cancelOrder({ id: selectedOrder._id, body: { reason: rejectionReason } });
        alert("Order cancelled!");
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    } finally {
      handleDialogClose();
    }
  };
  

  
//  Order In Pannding Orders
const cancelledOrders = data?.orders?.filter((order) => order.status === "Cancelled") || [];
  // Prepared Cancelled Orders
  const pendingOrders = data?.orders?.filter((order) => order.status === "Pending") || [];
  // Deliverd Confirmed Order
  const deliveredOrders = data?.orders?.filter((order) => order.status === "Confirmed") || [];

  let ordersToShow = [];
  if (activeButton === "OrderIn") {
    ordersToShow = pendingOrders;
  } else if (activeButton === "Prepared") {
    ordersToShow = cancelledOrders;
  } else if (activeButton === "Delivered") {
    ordersToShow = deliveredOrders;
  }
  useEffect(() => {
    if (!selectedOrder && ordersToShow.length > 0) {
      setSelectedOrder(ordersToShow[0]);
    }
  }, [ordersToShow, selectedOrder]);


  // Button Logics
  const isRejectDisabled = selectedOrder?.status === "Cancelled";
  const isAcceptDisabled = selectedOrder?.status === "Confirmed";
  
  
  return (
    <Grid sx={{ padding: 4, backgroundColor: "#f8f9fa", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} sx={{ height: "100%", padding: 2 }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background: "#00000033",
                borderRadius: "5px",
              }}
            >
              {["OrderIn", "Prepared", "Delivered"].map((label) => (
                <Button
                  key={label}
                  onClick={() => handleClick(label)}
                  style={{
                    backgroundColor: activeButton === label ? "#FB8019" : "transparent",
                    borderColor: "#640505",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  {label === "OrderIn" ? "Order In" : label}
                </Button>
              ))}
            </Grid>

            <List>
              {isLoading ? (
                <Typography>Loading...</Typography>
              ) : ordersToShow.length === 0 ? (
                <Typography>No orders found.</Typography>
              ) : (
                ordersToShow.map((order) => (
                  <Card
                    key={order._id}
                    onClick={() => setSelectedOrder(order)}
                    sx={{
                      marginBottom: 2,
                      cursor: "pointer",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                      border:
                        selectedOrder?._id === order._id
                          ? "2px solid #FB8019"
                          : "1px solid transparent",
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
                          Order #{order.trackingId}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {new Date(order.createdAt).toLocaleString()}
                        </Typography>
                      </Grid>
                      {order.status}
                      <Typography
                        variant="body2"
                        sx={{ color: "#FB8019", fontWeight: "bold" }}
                      >
                        PKR {order.totalDue}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              )}
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
            {selectedOrder ? (
              <>
                <Grid mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8} textAlign="left">
                      <Typography variant="body1" fontWeight="bold">
                        Order #{selectedOrder.trackingId || "1"}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        createdAt // {new Date(selectedOrder.createdAt).toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="space-around" alignItems="center">
                      <Grid item>
                        <Typography variant="body1" fontWeight="bold">
                          Ordar Name
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Data//User since 2020
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 2 }} />
                  <Grid container spacing={2} justifyContent="space-evenly">
                    <Grid item xs={12} md={12} textAlign="left">
                      <Typography variant="body2" mt={2}>
                        Delivery Address: pickup address
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign="left">
                      <Typography variant="body2" display="flex" alignItems="center">
                        <LocationOnIcon sx={{ color: "#FB8019", marginRight: 1 }} />
                        <strong>{selectedOrder.address || "Elm Street, 23"}</strong>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mt={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Grid container spacing={3}>
                        {[1, 2].map((_, i) => (
                          <React.Fragment key={i}>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="subtitle2" color="textSecondary">
                                Estimation Time
                              </Typography>
                              <Typography variant="h6" fontWeight="bold">
                                {selectedOrder.estimatedTime || "10 Min"}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Typography variant="subtitle2" color="textSecondary">
                                Payment
                              </Typography>
                              <Typography variant="h6" fontWeight="bold">
                                {selectedOrder.paymentStatus || "10 Min"}
                              </Typography>
                            </Grid>
                          </React.Fragment>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 2 }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body2" fontWeight="bold">
                        Order Menu
                      </Typography>
                      <Grid mt={1}>
                        {selectedOrder.items?.map((item, index) => (
                          <Grid
                            key={index}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1,
                            }}
                          >
                            <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <img
                                src={item.image || images_18}
                                alt={item.name}
                                style={{
                                  borderRadius: "20%",
                                  border: "2px solid #FB8019",
                                  width: 40,
                                  height: 40,
                                }}
                              />
                              <Typography variant="body2">{item.name}</Typography>
                            </Grid>
                            <Typography
                              variant="body2"
                              style={{ color: "#FB8019", fontWeight: "bold" }}
                            >
                              +${item.price}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                      <Typography variant="body2" textAlign="right" mt={2}>
                        <strong>Total: ${selectedOrder.totalDue || "0.00"}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid mt={4} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDialogOpen("reject")}
                  disabled={isRejectDisabled} 
                  style={{
                    marginRight: "20px",
                    borderColor: "#640505",
                    // color: "#640505",
                  }}
                >
                  Reject Order
                </Button>

                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleDialogOpen("accept")}
                  disabled={isAcceptDisabled}
                >
                  Accept Order
                </Button>
                </Grid>
              </>
            ) : (
              <Typography mt={3} color="gray">
                Select an order from the left to see details here.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>
          {dialogType === "accept" ? "Confirm Accept Order" : "Confirm Cancel Order"}
        </DialogTitle>
        <DialogContent>
  <Typography mb={2}>
    Are you sure you want to{" "}
    <strong>{dialogType === "accept" ? "accept" : "cancel"}</strong> this order?
  </Typography>

  {dialogType === "reject" && (
    <TextField
      label="Rejection Reason"
      fullWidth
      required
      multiline
      minRows={3}
      value={rejectionReason}
      onChange={(e) => {
        setRejectionReason(e.target.value);
        if (e.target.value) setErrorText("");
      }}
      error={!!errorText}
      helperText={errorText}
    />
  )}
</DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose} color="inherit">
            No
          </Button>
          <Button
            onClick={handleDialogConfirm}
            color={dialogType === "accept" ? "success" : "error"}
            variant="contained"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default OnlineOrder;




// import React, { useState } from "react";
// import {
//     Grid,
//     Paper,
//     Typography,
//     List,
//     ListItem,
//     Button,
//     Divider,
//     Card,
//     CardContent,
// } from "@mui/material";
// import download_11 from "../../components/Img/download_11.png";
// import download_12 from "../../components/Img/download_12.png";
// import images_18 from "../../components/Img/images_18.png";
// import { Start } from "@mui/icons-material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useGetOrderHistoryQuery } from "../../redux/features/OnlineOrders/manageorderSlice";

// const OnlineOrder = () => {
//     const { data, isLoading, isSuccess } = useGetOrderHistoryQuery();

//     console.log("data", data); // 👈 Yeh karo instead of abc
    
//     const [activeButton, setActiveButton] = useState("OrderIn");

//     const handleClick = (buttonName) => {
//         setActiveButton(buttonName); // Set the clicked button as active
//     };


//     return (
//         <Grid sx={{ padding: 4, backgroundColor: "#f8f9fa", height: "100vh" }}>
//             <Grid container spacing={2}>
//                 {/* Sidebar */}
//                 <Grid item xs={4}>
//                     <Paper elevation={3} sx={{ height: "100%", padding: 2 }}>
//                         {/* <Grid
//                             sx={{
//                                 display: "flex", justifyContent: "space-between", mb: 2, p: 1,
//                                 background: '#00000033',
//                                 borderRadius: "5px",
//                             }}
//                         >
//                             <Button
//                                 style={{
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Order In
//                             </Button>
//                             <Button
//                                 style={{
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Prepared
//                             </Button>
//                             <Button
//                                 style={{
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Delivered
//                             </Button>
//                         </Grid> */}
//                         <Grid
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 // mb: 2,
//                                 // p: 1,
//                                 background: '#00000033',
//                                 borderRadius: "5px",
//                             }}
//                         >
//                             <Button
//                                 onClick={() => handleClick("OrderIn")}
//                                 style={{
//                                     backgroundColor: activeButton === "OrderIn" ? "#FB8019" : "transparent",
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Order In
//                             </Button>
//                             <Button
//                                 onClick={() => handleClick("Prepared")}
//                                 style={{
//                                     backgroundColor: activeButton === "Prepared" ? "#FB8019" : "transparent",
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Pannding
//                             </Button>
//                             <Button
//                                 onClick={() => handleClick("Delivered")}
//                                 style={{
//                                     backgroundColor: activeButton === "Delivered" ? "#FB8019" : "transparent",
//                                     borderColor: "#640505",
//                                     color: "white",
//                                     fontWeight: 'bold',
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Delivered
//                             </Button>
//                         </Grid>
//                         <List>
//                             {Array.from({ length: 6 }, (_, i) => (
//                                <Card
//                                key={i}
//                                sx={{
//                                    marginBottom: 2,
//                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                                    borderRadius: "8px",
//                                }}
//                            >
//                                <CardContent
//                                    sx={{
//                                        display: "flex",
//                                        justifyContent: "space-between",
//                                        alignItems: "center",
//                                    }}
//                                >
//                                    <Grid textAlign="left">
//                                        <Typography variant="subtitle2" fontWeight="bolder">
//                                            Order #{i + 1}
//                                        </Typography>
//                                        <Typography variant="caption" color="textSecondary">
//                                            June 1, 2020, 06:22 AM
//                                        </Typography>
//                                    </Grid>
//                                    <Typography variant="body2" sx={{ color: "#FB8019", fontWeight: "bold" }}>
//                                        $202.00
//                                    </Typography>
//                                </CardContent>
//                            </Card>
//                             ))}
//                         </List>
//                     </Paper>
//                 </Grid>

//                 {/* Order Details */}
//                 <Grid item xs={8}>
//                     <Paper elevation={3} sx={{ height: "100%", padding: 3 }}>
//                         <Grid item xs={12} md={8} textAlign="left">
//                             <Typography variant="h5" fontWeight="bold" mb={2}>
//                                 Order Details
//                             </Typography>
//                         </Grid>
//                         <Divider />
//                         <Grid mt={2}>
//                             <Grid container spacing={2}>
//                                 {/* Order Info */}
//                                 <Grid item xs={12} md={8} textAlign="left">
//                                     <Typography variant="body1" fontWeight="bold">
//                                         Order #1
//                                     </Typography>
//                                     <Typography variant="caption" color="textSecondary">
//                                       createdAt //  June 1, 2020, 06:22 AM
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={4} display='flex' justifyContent="space-around" alignItems="center">
//                                     {/* <Grid item>
//                                         <img
//                                             src={images_18} // Replace with your image URL or path
//                                             alt="Roby Roban"
//                                             style={{ width: 50, height: 50, borderRadius: "50%" }} // Adjust styling as needed
//                                         />
//                                     </Grid> */}
//                                     <Grid item>
//                                         <Typography variant="body1" fontWeight="bold">
//                                             Ordar Name
//                                         </Typography>
//                                         <Typography variant="caption" color="textSecondary">
//                                             Data//User since 2020
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>

//                                 {/* <Grid item xs={12} md={3}>
//                   <Typography variant="body1" fontWeight="bold">
//                     Roby Roban
//                   </Typography>
//                   <Typography variant="caption" color="textSecondary">
//                     User since 2020
//                   </Typography>
//                 </Grid> */}
//                             </Grid>

//                             <Divider sx={{ my: 2 }} />
//                             <Grid container spacing={2} justifyContent="space-evenly">
//                                 <Grid item xs={12} md={12} textAlign="left">
//                                     <Typography variant="body2" mt={2}>
//                                         Delivery Address: pickup address
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={6} textAlign="left">
//                                     <Typography
//                                         variant="body2"
//                                         display="flex"
//                                         alignItems="center"
//                                     >
//                                         <LocationOnIcon sx={{ color: "#FB8019", marginRight: 1 }} />
//                                         <strong>Elm Street, 23</strong>
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" mt={1}>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                     </Typography>
//                                 </Grid>
//                                 {/* Customer Info */}
//                                 <Grid item xs={12} md={6}>
//                                     <Grid container spacing={3}>
//                                         {/* First Row */}
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="subtitle2" color="textSecondary">
//                                                 Estimation Time
//                                             </Typography>
//                                             <Typography variant="h6" fontWeight="bold">
//                                                 10 Min
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="subtitle2" color="textSecondary">
//                                                 Payment
//                                             </Typography>
//                                             <Typography variant="h6" fontWeight="bold">
//                                                 10 Min
//                                             </Typography>
//                                         </Grid>

//                                         {/* Second Row */}
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="subtitle2" color="textSecondary">
//                                                 Estimation Time
//                                             </Typography>
//                                             <Typography variant="h6" fontWeight="bold">
//                                                 10 Min
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={6}>
//                                             <Typography variant="subtitle2" color="textSecondary">
//                                                 Payment
//                                             </Typography>
//                                             <Typography variant="h6" fontWeight="bold">
//                                                 10 Min
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>

//                             <Divider sx={{ my: 2 }} />
//                             <Grid container spacing={2}>
//                                 {/* Order Menu */}
//                                 <Grid item xs={12}>
//                                     <Typography variant="body2" fontWeight="bold">
//                                         Order Menu
//                                     </Typography>
//                                     <Grid mt={1}>
//                                         <Grid
//                                             sx={{
//                                                 display: "flex",
//                                                 justifyContent: "space-between",
//                                                 mb: 1,
//                                             }}
//                                         >
//                                             <Grid
//                                                 sx={{ display: "flex", alignItems: "center", gap: 1 }}
//                                             >
//                                                 <img
//                                                     src={download_11}
//                                                     alt="Pepperoni Pizza"
//                                                     style={{
//                                                         borderRadius: "20%",
//                                                         border: "2px solid #FB8019",
//                                                     }}
//                                                 />
//                                                 <Typography variant="body2">Pepperoni Pizza</Typography>
//                                             </Grid>
//                                             <Typography
//                                                 variant="body2"
//                                                 style={{ color: "#FB8019", fontWeight: "bold" }}
//                                             >
//                                                 +$5.59
//                                             </Typography>
//                                         </Grid>
//                                         <Grid
//                                             sx={{
//                                                 display: "flex",
//                                                 justifyContent: "space-between",
//                                                 mb: 1,
//                                             }}
//                                         >
//                                             <Grid
//                                                 sx={{ display: "flex", alignItems: "center", gap: 1 }}
//                                             >
//                                                 <img
//                                                     src={download_12}
//                                                     alt="Pepperoni Pizza"
//                                                     style={{
//                                                         borderRadius: "20%",
//                                                         border: "2px solid #FB8019",
//                                                     }}
//                                                 />
//                                                 <Typography variant="body2">Pepperoni Pizza</Typography>
//                                             </Grid>
//                                             <Typography
//                                                 variant="body2"
//                                                 style={{ color: "#FB8019", fontWeight: "bold" }}
//                                             >
//                                                 +$5.59
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                     <Typography variant="body2" textAlign="right" mt={2}>
//                                         <strong>Total: $12.59</strong>
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid mt={4} display="flex" justifyContent="flex-end">
//                             <Button
//                                 variant="outlined"
//                                 style={{
//                                     marginRight: "20px",
//                                     borderColor: "#640505",
//                                     color: "#640505",
//                                 }}
//                             >
//                                 Reject Order
//                             </Button>

//                             <Button variant="contained" color="success">
//                                 Accept Order
//                             </Button>
//                         </Grid>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// };

// export default OnlineOrder;
