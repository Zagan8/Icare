import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 5,
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface cardProps {
  name: string;
  phone: number;
  city: string;
  street: string;
  apartmentNumber: number;
  zipCode: number;
  discription: string;
  type: string;
  img: string;
}
const InNeedCard: React.FC<any> = ({ inNeedData }) => {
  const classes = useStyles();

  return (
    <Card onClick={() => console.log(inNeedData)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={inNeedData.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {inNeedData.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {inNeedData.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InNeedCard;
