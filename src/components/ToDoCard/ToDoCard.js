import React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";

const ToDoCard = ({ item }) => {
  return (
    <Box sx={{ maxWidth: 120, margin: 2 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToDoCard;
