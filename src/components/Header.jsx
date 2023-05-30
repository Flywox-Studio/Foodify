import { AppBar, Toolbar, Box, Typography, Button, Stack } from '@mui/material'
import './header.css'
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} bgColor="waring">
      <AppBar position="static" style={{ backgroundColor: '#010317' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Food<span style={{ color: ' #F5761A' }}>ify</span>
            </Typography>
          </Box>
          <Stack direction="row">
            <Button
              color="inherit"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#01796F',
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              color="inherit"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#01796F',
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
