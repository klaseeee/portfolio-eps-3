import { Avatar, Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Testimonials = () => {
  return (
    <Grid container pt= {10} pr={4} pl={4}spacing={4} alignItems="center" justifyContent="space-evenly">
      <Grid item md={5}>
        <Avatar
          alt="gambar"
          src="https://source.unsplash.com/random"
          sx={{ 
            width: 250,
            height: 250
           }}
        />
      </Grid>
      <Grid item md={7}>
        <Grid container p={4} spacing={2}>
          <Grid item>
            <Typography variant="h5" color="secondary.second">""</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" color="primary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, consectetur.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="subtitle1" color="primary">John Doe</Typography>
                <Typography variant="subtitle2" color="primary">Bussinessman</Typography>
              </Grid>
              <Grid item>
                <Button><ArrowBackIcon/></Button>
              </Grid>
              <Grid item>
                <Button><ArrowForwardIcon/></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Testimonials