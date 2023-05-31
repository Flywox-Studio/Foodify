import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import './about.css'
function About() {
  return (
    <Stack component="div" className="about">
      <div className="aboutContent">
        <Box className="mainText">
          <Typography
            sx={{ color: '#01796F', lineHeight: '49px' }}
            mb={5}
            variant="h3"
          >
            About Foodify <span>&#129312;</span>
          </Typography>
          <Typography variant="subtitle1" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, commodi aliquam. Officia quidem corporis, obcaecati
            explicabo odio minima blanditiis quia suscipit eius non totam, s
            libero ipsa reprehenderit veniam totam consectetur qui uptatum
          </Typography>
          <Typography>
            dolores quaerat sunt quam vero corrupti, molestias, nostrum eligendi
            neque atque est facere. Quae iste velit vero. Voluptatum, alias? \
            est facere. Quae iste velit vero. Volalias?
          </Typography>
        </Box>

        <div className="card">
          <Card className="cardItem">
            <CardMedia></CardMedia>
            <CardContent>
              <Typography variant="h5">Ease of Use</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                mollitia pariatur doloremque ipsum dolorum ducimus laudantium
                alias quos distinctio veniam. Lorem ipsum dolor sit amet
              </Typography>
            </CardContent>
          </Card>
          <Card className="cardItem">
            <CardMedia></CardMedia>
            <CardContent>
              <Typography variant="h5">Cheapest Price</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                mollitia pariatur doloremque ipsum dolorum ducimus laudantium
                alias quos distinctio veniam. Lorem ipsum dolor sit amet
              </Typography>
            </CardContent>
          </Card>
          <Card className="cardItem">
            <CardMedia></CardMedia>
            <CardContent>
              <Typography variant="h5">Different Payment Plan</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                mollitia pariatur doloremque ipsum dolorum ducimus laudantium
                alias quos distinctio veniam. Lorem ipsum dolor sit amet
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Stack>
  )
}

export default About
