import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const portfolios = [1, 2, 3, 4, 5, 6]

const Portfolio = () => {
  return (
    <Box
      id="Portfolio"
      mt={10}
      p={4}
      sx={{ 
        backgroundColor: 'rgba(9, 20, 39, 0.6)',
        borderRadius: '1rem'
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Grid container alignItems="center">
            <Grid item md={10}>
              <Typography variant="h3" color="primary" >My Portfolio</Typography>
            </Grid>
            <Grid item md={2}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: "flex-end"}}>
                <Typography variant="subtitle1" color="secondary.second">See all</Typography>
                <ArrowForwardIcon sx={{color:"secondary.second"}}/>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            {portfolios.map((port) => {
              return (
                <Grid item md={4} xs={12}>
                  <Card sx={{ maxHeight: 345 }} >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      width="50"
                      sx={{height:150}}
                    />
                    <CardContent>
                      <Typography variant="h6" color="initial">Creative Digital Agency</Typography>
                      <Typography variant="subtitle1" color="secondary">Landing Page</Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{color:"darkblue"}}>view demo</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio