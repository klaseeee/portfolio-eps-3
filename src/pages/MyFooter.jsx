import { Box, Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

const socmed = [<FacebookIcon/>, <InstagramIcon/>, <LinkedInIcon/>, <MailIcon/>]

const MyFooter = () => {
  return (
    <Box
        mt={10}
        pt={5}
        pb={5}
        component="footer"
        sx={{ 
          backgroundColor: 'rgba(9, 20, 39, 1)',
          
         }}
      >
        <Grid container spacing={2} textAlign="center">
          <Grid item md={12} xs={12}>
            <Typography variant="h5" color="primary">Muklas Nur Ardiansyah</Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="subtitle1" color="primary">Follow Me</Typography>
          </Grid>
          <Grid item md={12} xs={12} direction="row">
            <Box
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: 2
              }}
            >
              {socmed.map((soc) => {
                return (
                  <Box>
                    {soc}
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}

export default MyFooter