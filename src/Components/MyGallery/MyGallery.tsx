import { Card, CardContent } from "@mui/material"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ReactPlayer from "react-player"

const TEXT = "Morbi cursus a risus nec accumsan. Curabitur hendrerit lobortis sem vel viverra. Aliquam tincidunt turpis ultricies pellentesque auctor. Sed facilisis consequat odio. Nullam ex erat, elementum id auctor et, placerat non est. Maecenas non cursus lacus. In ut placerat ex. Nulla convallis pellentesque orci ut facilisis. Sed volutpat accumsan erat, a aliquet eros euismod vel. Donec in lacinia nunc. Maecenas eu tellus quis dui posuere eleifend. Integer in tortor risus. Maecenas interdum massa est, tempus accumsan nisi dictum sit amet. Nam ultrices, orci vel lacinia bibendum, arcu libero rutrum tortor, et porta massa tortor sed ex."
const MyGallery = () => {
    return (
        <div style={{ paddingTop: 80, backgroundColor: '#F2F2F2', paddingLeft: 8, paddingRight: 8 }}>
            <Typography color='#DB2463' align="center" variant="h1" component="h2">
                My gallery
            </Typography>;
            <Typography color='#777' align="center" variant="subtitle1" component="h2">
                {TEXT}
            </Typography>;
            <Box component="main">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <ReactPlayer width='100%' height='100%' url={'videos/vid3.mp4'} controls />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <img width='100%' height='100%' src={'images/img2.jpg'} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <img width='100%' height='100%' src={'images/img3.jpg'} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <img width='100%' height='100%' src={'images/img4.jpg'} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <img width='100%' height='100%' src={'images/img1.jpg'} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <ReactPlayer width='100%' height='100%' url={'videos/vid1.mp4'} controls />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card style={{borderRadius: 16}}>
                            <CardContent style={{borderRadius: 16}}>
                                <ReactPlayer width='100%' height='100%' url={'videos/vid2.mp4'} controls />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MyGallery