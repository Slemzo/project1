import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ReactPlayer from "react-player"
import './my-gallery.css'

const TEXT = "Morbi cursus a risus nec accumsan. Curabitur hendrerit lobortis sem vel viverra. Aliquam tincidunt turpis ultricies pellentesque auctor."
const MyGallery = () => {
    return (
        <div style={{ backgroundColor: '#F4B5CD', paddingTop: 80 }}>

            <Grid style={{height: 275}} justifyContent='center' container spacing={2}>
                <Grid item xs={10} md={7}>
                    <Typography color='#DB2463' variant="h2" component="h2">
                        My gallery
                    </Typography>
                    <Typography marginTop={4} color='#424242' variant="subtitle1" component="h2">
                        {TEXT}
                    </Typography>
                </Grid>
                <Grid item xs={10} md={3} />
            </Grid>

            <Box style={{backgroundColor: '#F2F2F2', paddingLeft: 8, paddingRight: 8, paddingBottom: 22}} component="main" marginBottom={2}>
                <Grid container spacing={2}>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <ReactPlayer width='100%' height='100%' url={'videos/vid3.mp4'} controls />
                    </Grid>

                    <Grid className="grid-item" item xs={12} sm={2}>
                        <img alt="img2" width='100%' height='100%' style={{ objectFit: 'cover' }} src={'images/img2.jpg'} />
                    </Grid>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <img alt="img3" width='100%' height='100%' style={{ objectFit: 'cover' }} src={'images/img3.jpg'} />
                    </Grid>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <img alt="img4" width='100%' height='100%' style={{ objectFit: 'cover' }} src={'images/img4.jpg'} />
                    </Grid>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <img alt="img1" width='100%' height='100%' style={{ objectFit: 'cover' }} src={'images/img1.jpg'} />
                    </Grid>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <ReactPlayer width='100%' height='100%' url={'videos/vid1.mp4'} controls />
                    </Grid>
                    <Grid className="grid-item" item xs={12} sm={2}>
                        <ReactPlayer width='100%' height='100%' url={'videos/vid2.mp4'} controls />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MyGallery