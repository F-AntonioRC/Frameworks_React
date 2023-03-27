import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: '40%', maxHeight: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://placeimg.com/700/900/animals"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PAPELERIA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los utiles con los que puedes empezar a estudiar los podras encontrar en la mejor
            papeleria de toda la ciudad.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}