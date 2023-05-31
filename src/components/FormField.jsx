import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import './form.css'
export default function FormField() {
  return (
    <section>
      <div className="formContainer">
        <div className="formText">
          <Typography variant="h4" mt={10}>
            Join <span className="food">Foodify</span> WaitList
          </Typography>
          <Typography variant="subtitle1" mb={5}>
            We are coming at Ekiti and Ibadan, be the first to know when we
            touch down
          </Typography>
          <form className="mainForm">
            <div>
              <label htmlFor="name" className="block">
                Full Name
              </label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email Address
              </label>
              <input id="email" type="email" />
            </div>

            <div>
              <label htmlFor="number" className="block">
                Phone Number
              </label>
              <input type="tel" id="number" />
            </div>

            <Button
              sx={{
                margin: '60px auto',
                justifyContent: 'center',
                display: 'block',
                background: '#01796F',
                boxSizing: 'border-box',
                width: '100%',
              }}
              variant="contained"
            >
              Get Started on Foodify Today
            </Button>
          </form>
        </div>
        <div className="list">
          <Typography variant="h4">
            What Are You Waiting For ? <span>&#129312;</span>
          </Typography>
          <Typography variant="body1">
            Let get you on board in few clicks
          </Typography>

          <List>
            <ListItem>
              <ListItemAvatar variant="rounded">
                <ListItemIcon>
                  <Brightness1Icon style={{ color: '#F5761A' }} />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText
                primary="Sign up on Foodify"
                secondary="Sign up on Foodify to create your foodify in few minutes"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <ListItemIcon>
                  <Brightness1Icon style={{ color: '#F5761A' }} />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText
                primary="Sign up on Foodify"
                secondary="Sign up on Foodify to create your foodify in few minutes"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <ListItemIcon>
                  <Brightness1Icon style={{ color: '#F5761A' }} />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText
                primary="Sign up on Foodify"
                secondary="Sign up on Foodify to create your foodify in few minutes"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <ListItemIcon>
                  <Brightness1Icon style={{ color: '#F5761A' }} />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText
                primary="Sign up on Foodify"
                secondary="Sign up on Foodify to create your foodify in few minutes"
              />
            </ListItem>
          </List>
        </div>
      </div>
    </section>
  )
}
