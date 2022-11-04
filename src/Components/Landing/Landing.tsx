import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import './landing.css'
import { useNavigate } from "react-router-dom"

const Landing = () => {

    const navigate = useNavigate();
    const navigateToGallery = () => navigate('/my-gallery')
    return (
        <Box component="main" style={{ paddingTop: 80, paddingLeft: 8, paddingRight: 8 }}>
            <Typography color='#DB2463' align="center" variant="h2" component="h2">
                Hey my name is Anjchybir
            </Typography>
            <Typography marginTop={4} color='#424242' align="center" variant="subtitle1" component="h2">
                Nunc efficitur pretium mi, quis elementum enim vulputate sit amet. Nunc lacinia elit at lacus dictum faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sit amet faucibus lectus. Quisque velit tellus, faucibus sed erat ac, gravida feugiat ipsum. Maecenas ullamcorper nunc sit amet quam bibendum porta. In consequat cursus malesuada. Mauris varius ullamcorper efficitur. Ut ullamcorper non ligula consequat venenatis. Maecenas cursus dolor sit amet libero mollis, sed molestie neque elementum. In hac habitasse platea dictumst.
            </Typography>

            <Grid marginTop={10} marginBottom={8} justifyContent='center' container spacing={2}>
                <Grid  item xs={10} md={5}>
                    <Card className="grid-item" style={{ borderRadius: 16 }}>
                        <CardContent style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ACACAC' }}>
                            <img alt="allmylinks" width={75} height={75} src={'images/allmylinks.svg'} />

                            <Typography marginTop={3} marginBottom={1} color='#DB2463' align="center" variant="h4" component="h2">
                                My 🌶 content is here!
                            </Typography>
                            
                            <Typography marginBottom={3} color='#F2F2F2' align="center" variant="subtitle2" component="h2">
                                Want to see more of my pictures? I can send you custom pictures and videos. Cum here and see me playing with my toys.
                            </Typography>

                            <Button>
                                <a style={{ textDecoration: 'none' }} href='https://allmylinks.com/anjchybir' rel="noreferrer" target='_blank'>
                                    <Button sx={{ color: '#DB2463', backgroundColor: '#F4B5CD' }}>
                                        GO!
                                    </Button>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={5}>
                    <Card className="grid-item" style={{ borderRadius: 16 }}>
                        <CardContent style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ACACAC' }}>
                            <img alt="gallery" width={75} height={75} src={'images/gallery.svg'} />

                            <Typography marginTop={3} marginBottom={1} color='#DB2463' align="center" variant="h4" component="h2">
                                Check my gallery
                            </Typography>

                            <Typography marginBottom={3} color='#F2F2F2' align="center" variant="subtitle2" component="h2">
                                Here you can tease yourself with my free content. I hope you enjoy it.
                            </Typography>

                            <Button>
                                <Button onClick={navigateToGallery} sx={{ color: '#DB2463', backgroundColor: '#F4B5CD' }}>
                                    To gallery!
                                </Button>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={5}>
                    <Card className="grid-item" style={{ borderRadius: 16 }}>
                        <CardContent style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ACACAC' }}>
                        <img alt="snapchat" width={75} height={75} src={'images/snapchat.svg'} />

                            <Typography marginTop={3} marginBottom={1} color='#DB2463' align="center" variant="h4" component="h2">
                                Add me on Snapchat
                            </Typography>
                            
                            <Typography marginBottom={3} color='#F2F2F2' align="center" variant="subtitle2" component="h2">
                                This is my premium snapchat where we can exchange messages, images and much more.
                            </Typography>

                            <Button>
                                <a style={{ textDecoration: 'none' }} href='https://t.snapchat.com/3ExrLwiX' rel="noreferrer" target='_blank'>
                                    <Button sx={{ color: '#DB2463', backgroundColor: '#F4B5CD' }}>
                                        Open
                                    </Button>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={10} md={5}>
                    <Card className="grid-item" style={{ borderRadius: 16 }}>
                        <CardContent style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ACACAC' }}>
                        <img alt="instagram" width={75} height={75} src={'images/instagram.svg'} />

                            <Typography marginTop={3} marginBottom={1} color='#DB2463' align="center" variant="h4" component="h2">
                                Add me on Instagram
                            </Typography>
                            
                            <Typography marginBottom={3} color='#F2F2F2' align="center" variant="subtitle2" component="h2">
                                This is my instagram where we can exchange messages, images and much more.
                            </Typography>

                            <Button>
                                <a style={{ textDecoration: 'none' }} href='https://instagram.com/anjchybir' rel="noreferrer" target='_blank'>
                                    <Button sx={{ color: '#DB2463', backgroundColor: '#F4B5CD' }}>
                                        Open
                                    </Button>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Landing