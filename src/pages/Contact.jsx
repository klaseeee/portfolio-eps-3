import { Button, CardMedia, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Contact = () => {
  return (
    <Grid id="Contact" container pt= {10} pr={4} pl={4}spacing={4} alignItems="center" justifyContent="space-evenly">
      <Grid item md={7}>
        <Grid container p={4} spacing={2}>
          <Grid item>
            <Typography variant="h3" color="primary">
                Want to make awesome and impactful Product?
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="subtitle1" color="primary">Contact</Typography>
              </Grid>
              <Grid item>
                <Button><ArrowForwardIcon/></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5}>
        <CardMedia
          component="img"
          image='https://source.unsplash.com/random'
          sx={{ 
            width: 400,
            height: 500
           }}
        />
      </Grid>
    </Grid>
  )
}

export default Contact