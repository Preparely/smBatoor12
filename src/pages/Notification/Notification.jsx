import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const notifications = [
  {
    title: "Delete item request",
    description: "@Eco has applied for item deletion",
    time: "Just Now",
    icon: "HA",
  },
  {
    title: "Lorem ipsum",
    description: "@Ira requested to delete options in inventory",
    time: "11:16 AM",
    icon: "RU",
  },
  {
    title: "Lorem ipsum",
    description: "Your profile has been updated",
    time: "09:00 AM",
    icon: "",
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "09:00 AM",
    icon: "SH",
  },
  {
    title: "Lorem ipsum",
    description: "Your password has been updated successfully",
    time: "09:00 AM",
    icon: "",
  },
];

const yesterdayNotifications = [
  {
    title: "Lorem ipsum",
    description: "@Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "09:00 AM",
    icon: "SH",
  },
  {
    title: "Check In Issue",
    description: "Lorem ipsum",
    time: "09:00 AM",
    icon: "",
  },
];

const Notification = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Notifications</Typography>
        <Box display="flex" gap={1}>
          <Button variant="outlined" startIcon={<NotificationsIcon />}>
            Create
          </Button>
          <Button variant="contained" startIcon={<FilterAltIcon />} style={{backgroundColor: '#6D4E8A'}}>
  Filters
</Button>
        </Box>
      </Box>

      {/* Subheading */}
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mt: 1, mb: 2 }}
        textAlign={'left'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      {/* Today Section */}
      <Typography variant="subtitle1" fontWeight={'bold'} sx={{ mb: 1 }}textAlign={'left'}>
        Today
      </Typography>
      <List>
        {notifications.map((notif, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{notif.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notif.title}
                secondary={
                  <React.Fragment>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item sx={6}>
                        <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {notif.description}
                    </Typography>
                        </Grid>
                        <Grid item sx={6}>
                        {notif.time}

                        </Grid>
                    </Grid>                   
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      {/* Yesterday Section */}
      <Typography variant="body1" fontWeight={'bold'}  sx={{ mt: 2 }} textAlign={'left'}>
        Yesterday
      </Typography>
      <List>
        {yesterdayNotifications.map((notif, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{notif.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notif.title}
                secondary={
                <React.Fragment>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item sx={6}>
                        <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {notif.description}
                    </Typography>
                        </Grid>
                        <Grid item sx={6}>
                        {notif.time}

                        </Grid>
                    </Grid>                   
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < yesterdayNotifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Notification;