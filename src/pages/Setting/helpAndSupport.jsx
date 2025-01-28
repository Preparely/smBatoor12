import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const HelpAndSupport = () => {
  return (
    <Card
      sx={{
        mx: 'auto',
        p: { xs: 2, md: 4 },
        border: '1px solid #f1f1f1',
        borderRadius: 2,
        boxShadow: 'none',
        backgroundColor: '#fff',
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            mb: { xs: 1.5, md: 2 },
            color: '#333',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          Help and support
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#666',
            fontSize: { xs: '0.875rem', md: '1rem' },
            lineHeight: { xs: 1.5, md: 1.75 }, 
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque placerat, himenaeos congue
          mattis scelerisque eleifend ullamcorper in platea, elementum sed.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HelpAndSupport;
