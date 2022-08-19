import React from 'react';

import Girl from '../../assets/girl.png';
import Boy from '../../assets/boy.png';
import Cap from '../../assets/cap.png';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https:/images/xslide-03.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const IndexHome = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box
            sx={{
                width: '100%',
                mt: '5%',
            }}
        >
            <Box
                sx={{
                    maxWidth: '100%',
                    flexGrow: 1
                }}
            >
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 450,
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    mt: '5%'
                }}
            >
                <Container>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${Girl})`,
                                        border: '1px solid #E6E6E6',
                                        height: 242.5,
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${Boy})`,
                                        border: '1px solid #E6E6E6',
                                        height: 242.5,
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${Cap})`,
                                        border: '1px solid #E6E6E6',
                                        height: 242.5,
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Typography sx={{ fontSize: "200%", fontWeight: 700, mt: '5%' }}>
                        PRODUCT OVERVIEW
                    </Typography>
                    <Box sx={{ display: 'flex', mt: '3%' }}>
                        <Typography
                            sx={{
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}
                        >All Products</Typography>
                        <Typography
                            sx={{
                                ml: '5%',
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}>Women</Typography>
                        <Typography
                            sx={{
                                ml: '5%',
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}>Man</Typography>
                        <Typography
                            sx={{
                                ml: '5%',
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}>Bag</Typography>
                        <Typography
                            sx={{
                                ml: '5%',
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}>Shoes</Typography>
                        <Typography
                            sx={{
                                ml: '5%',
                                color: '#888A88',
                                '&:hover': {
                                    color: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                    borderBottom: '1px solid black',
                                },
                            }}>Watches</Typography>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    mt: '5%'
                }}
            >
                <Container>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '40%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '45%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '35%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '30%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-05.jpg.pagespeed.ic.GHcB3Nc9zp.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '40%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-06.jpg.pagespeed.ic.mU9c3gp9yp.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '45%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-07.jpg.pagespeed.ic.wXz93SW1CF.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '35%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-08.jpg.pagespeed.ic.zcR_ZfXlFq.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '30%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-09.jpg.pagespeed.ic._ex9y9IVR9.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '40%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-10.jpg.pagespeed.ic.JKjq4oUn3E.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '45%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '35%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-12.jpg.pagespeed.ic.Ft0-TDvq7W.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '30%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-13.jpg.pagespeed.ic.jIjGx2QblE.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '40%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-14.jpg.pagespeed.ic.rUWpWgkkYK.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '45%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-15.jpg.pagespeed.ic.LNG1pmoqOY.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '35%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="325"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-16.jpg.pagespeed.ic.AbLwZITYaU.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '30%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    p: '5%',
                }}
            >
                <Button variant="contained"
                    sx={{
                        p: '1.2%',
                        backgroundColor: '#E6E6E6',
                        color: '#000',
                        fontWeight: 700,
                        borderRadius: '50px',
                        width: '15%',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff',
                        },
                    }}
                >
                    LOAD MORE
                </Button>
            </Box>
        </Box>
    );
};

export default IndexHome;