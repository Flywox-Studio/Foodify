import { Typography } from '@mui/material'
import './footer.css'
import Brightness1Icon from '@mui/icons-material/Brightness1'

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <Typography variant="h5">
          Food<span style={{ color: '#f5761a' }}>ify</span>
        </Typography>
        <div>
          <div>
            <Brightness1Icon />
            <Brightness1Icon />
            <Brightness1Icon />
          </div>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus
            cupiditate maiores expedita.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Footer
