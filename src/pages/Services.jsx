import { Box, CardMedia, Grid, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [1,2,3]

const Services = () => {
  return (
    <div id="Services">
      <Grid container pt={25} spacing={5} alignItems="center">
        <Grid item md={5}>
          <Typography variant="h3" color="primary">My Awesome Services</Typography>
          <Typography mt={3} variant="subtitle1" color="secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum assumenda, accusantium sed natus ratione optio repellendus iure perspiciatis neque itaque?</Typography>
        </Grid>
        <Grid item md={7}>
          <Grid container spacing={2}>
            {services.map((service) => {
              return (
                <Grid item direction="column" md={12} xs={12}>
                  <Box
                    component="div"
                    maxWidth="692px"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      borderRadius: '.5rem',
                      // padding: '1rem'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      sx={{ 
                        maxWidth: "100px",
                        flexGrow: 1,
                        padding: '1rem'
                      }}
                    />
                    <Box sx={{ flexGrow: 2 }}>
                      <Typography variant="h6" color="primary" >Website Design</Typography>
                      <Typography variant="caption" color="secondary">80+ project</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }} width="50px">
                      <ArrowForwardIcon/> 
                    </Box>

                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Services