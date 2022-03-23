import { Box, CardMedia, Container, Grid, ThemeProvider, Typography } from '@mui/material'
import MyTheme from '../components/MyTheme'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const items = [
  {
    title: "Years of experience",
    number: '3+'
  },
  {
    title: "Complete Project",
    number: '220+'
  },
  {
    title: "Client",
    number: "60+"
  }
]

const About = () => {
  return (
    <Grid id="About" pt={2} container spacing={2}
      sx={{ 
        xs : 'none'
      }}
    >
      <Grid item md={4}>
        <Box pt={4}>
          <Typography variant="h5" color="secondary">Frontend Developer</Typography>
          <Typography mt={2} mb={2} variant="h3" color="primary">Muklas Nur Ardiansyah</Typography>
          <Box
            component="div"
            width="183px"
            pt={1}
            sx={{ 
              backgroundColor: "secondary.second",
              borderRadius: "1rem"
            }}
          />
        </Box>
        <Box>
          <Typography pt={2} variant="subtitle1" color="secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit totam quas nulla aliquam aspernatur unde a exercitationem laudantium voluptates fugit.
          </Typography>
        </Box>
        <Box 
          pt={4}
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}>
          <span>Let's talk</span>
          <ArrowForwardIcon color="secondary.second"/>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box 
          component="div"
          min-height="60vh"
          sx={{ 
            backgroundColor: "secondary.second",
            borderRadius: '1rem',
            alignItems:"center"
            }}
        >
          <CardMedia
            component="img"
            alt="muklas"
            image="img/pict3.png"
            sx={{width:"70"}}
            
          />
        </Box>
      </Grid>
      <Grid item md={4}>
        {items.map((item) => {
          return (
            <Box 
              pt={4} 
              pb={4} 
              sx={{ 
                textAlign: "right", 
                xs : {
                  display: 'non'
                }
              }}
            >
              <Typography variant="h5" color="secondary">{item.title}</Typography>
              <Typography variant="h3" color="primary">{item.number}</Typography>
            </Box>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default About