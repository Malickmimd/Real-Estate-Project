/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OffreCard({location, picture, description, price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="red">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">En savoir plus</Button>
      </CardActions>
    </Card>
  );
}
