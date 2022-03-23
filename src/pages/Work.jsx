import { Box, Container, Grid, Stack } from "@mui/material"
import {ImBehance2} from 'react-icons/im'
import {FaDribbbleSquare} from 'react-icons/fa'
import {SiUpwork, SiFiverr} from 'react-icons/si'

const icons = [<ImBehance2 size="2rem"/>, <FaDribbbleSquare size="2.5rem"/>, <SiUpwork size="3rem"/>, <SiFiverr size="4rem"/>]

const Work = () => {
  return (
    <Container width={1440}>
      <Grid container spacing={4} >
        <Box
          component="div"
          height={100}
          mt={6}
          width="100%"
          sx={{ 
            backgroundColor: "black",
            zIndex: 2,
            position: 'absolute',
            left: 0,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {icons.map((icon) => {
            return (
              <Grid item md={3} xs={3}  sx={{ textAlign:'center', paddingLeft: 0, paddingTop: 0 }} >
                <Box
                  component="div"
                  sx={{ 
                    position: 'relative'
                  }}
                >
                  {icon}  
                </Box>
              </Grid>
            )
          })}
        </Box>
      </Grid>
    </Container>
  )
}

export default Work