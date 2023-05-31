import { Box, Stack, Typography } from '@mui/material'
import './about.css'
function About() {
  return (
    <Stack component="div" className="about">
      <Box>
        <Typography
          sx={{ color: '#01796F', fontSize: '36px', lineHeight: '49px' }}
        >
          About Foodify <span>&#129312;</span>
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          commodi aliquam. Officia quidem corporis, obcaecati explicabo odio
          minima blanditiis quia suscipit eius non totam, repudiandae aut harum
          voluptas. Ratione perferendis accusamus quidem impedit eius libero
          ipsa reprehenderit veniam totam consectetur qui dolores quaerat sunt
          quam vero corrupti, molestias, nostrum eligendi neque atque est
          facere. Quae iste velit vero. Voluptatum, alias?
        </Typography>
      </Box>

      <Box></Box>
    </Stack>
  )
}

export default About
