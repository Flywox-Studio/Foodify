import './header.css'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material'
function Header() {
  return (
    <Box className="headerContainer">
      <div className="headerContent">
        <div className="card">
          <Card sx={{ color: 'white', backgroundColor: '#010317' }}>
            <CardContent>
              <Typography variant="h3">Get FoodStuffs.</Typography>
              <Typography variant="h3" mt={5}>
                Pay For Them Later.
              </Typography>
              <Typography variant="h6" mt={5}>
                Get Fresh, Healthy and nutritionally safe foodstuffs at the
                cheapest price ever, and pay later with ease.
              </Typography>
              <Typography sx={{ backgroundColor: '#EBF6F52B' }} mt={3}>
                Never to worry about finished foodstuff <span>&#10084;</span>
              </Typography>
            </CardContent>
            <CardActions mr={20}>
              <Button
                sx={{ backgroundColor: '#01796F', width: '180px' }}
                variant="contained"
              >
                Get started for free
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="grid">
          <Grid container columnSpacing={2}>
            <Grid item xl={6} lg={6} md={6}>
              <div className="img1">
                <img src="../assets/food.jpeg " alt="" />
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6}>
              <div className="img2">
                <img src="../assets/food2.jpg" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  )
}

export default Header
