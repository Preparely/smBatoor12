import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Grid, Typography, LinearProgres, LinearProgress } from "@mui/material";

const data = [
  { day: "Mon", thisWeek: 60, lastWeek: 50 },
  { day: "Tue", thisWeek: 70, lastWeek: 55 },
  { day: "Wed", thisWeek: 80, lastWeek: 60 },
  { day: "Thu", thisWeek: 50, lastWeek: 65 },
  { day: "Fri", thisWeek: 90, lastWeek: 70 },
  { day: "Sat", thisWeek: 100, lastWeek: 80 },
];

const PerformanceChart = () => {
  return (
    <Grid
      sx={{
        marginTop: 4,
        width:'100%' ,
        padding: 2,
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Performance Statistic
      </Typography>
      <Grid display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Grid>
          <Typography sx={{ fontSize: 14, display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", fontWeight: "bold", marginRight: 5 }}>●</span>This Week: 75%
          </Typography>
          <Typography sx={{ fontSize: 14, display: "flex", alignItems: "center" }}>
            <span style={{ color: "red", fontWeight: "bold", marginRight: 5 }}>●</span>Last Week: 69%
          </Typography>
        </Grid>
        <Grid textAlign="right">
          <Typography variant="body2">This Month</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Avg Performance: 77%
          </Typography>
          <LinearProgress variant="determinate"  value={77} sx={{ height: 8, borderRadius: 5, }} />
        </Grid>
      </Grid>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="thisWeek" stroke="green" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="lastWeek" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default PerformanceChart;