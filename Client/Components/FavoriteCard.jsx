import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

const FavoriteCard = () => {
  // const business = useSelector((store) => store.favsList[props.index]);
  // const formatedPhone = `(${business.phone.slice(1, 4)}) ${business.phone.slice(
  //   4,
  //   7
  // )}-${business.phone.slice(7, 11)}`;
  // const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;

  return (
    <Grid container spacing={2} align="center" justifyContent="center">
      <Grid item>
        <Card sx={{ maxWidth: 420 }} align="left">
          <CardActionArea>
            <CardMedia
              className="food"
              component="img"
              height="340"
              image="https://s3-media0.fl.yelpcdn.com/bphoto/eyYUz3Xl7NtcJeN7x7SQwg/258s.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" id="red">
                Johnny's
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Avg review: 4 stars
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                # of reviews: 4,187
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                $$
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Hours: 2:00 pm - 11:00 pm
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Locaation: New York, NY
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Reviews:
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 420 }} align="left">
          <CardActionArea>
            <CardMedia
              className="food"
              component="img"
              height="340"
              image="https://s3-media0.fl.yelpcdn.com/bphoto/eyYUz3Xl7NtcJeN7x7SQwg/258s.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Johnny's
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Avg review: 4 stars
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                # of reviews: 4,187
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                $$
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Hours: 2:00 pm - 11:00 pm
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Locaation: New York, NY
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Reviews:
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 420 }} align="left">
          <CardActionArea>
            <CardMedia
              className="food"
              component="img"
              height="340"
              image="https://s3-media0.fl.yelpcdn.com/bphoto/eyYUz3Xl7NtcJeN7x7SQwg/258s.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Johnny's
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Avg review: 4 stars
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                # of reviews: 4,187
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                $$
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Hours: 2:00 pm - 11:00 pm
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Locaation: New York, NY
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Reviews:
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

// const FavoriteCard = () => {
//   const business = useSelector(store => store.favsList[props.index]);
//   const formatedPhone = `(${business.phone.slice(1,4)}) ${business.phone.slice(4,7)}-${business.phone.slice(7,11)}`;
//   const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
//   return(
//     <article className="favorite-card">
//       <img href={business.image_url} alt="restaurant's main photo"></img>
//       <section className="favorites-business-info">
//         <title>{business.name}</title>
//         <address>
//           <p>{formattedAddress}</p>
//           {/* <br></br> */}
//           <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
//         </address>
//       </section>
//     </article>
//   );
// }
export default FavoriteCard;
