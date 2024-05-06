/**
 * This is where card layout is designed for listings
 * Lazy loaded the logos images
 */
import '../App.css';
import { Button, Card, Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { ReadMore } from './utils/ReadMore';
import {Grid} from "@mui/material";
import LazyLoad from 'react-lazyload';


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

const CardLayout = ({role, Location, description, company, logoUrl, 
    minJdSalary, maxJdSalary, minExp
}) =>{
    return(
        <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className="card" sx={{ width: '80%', padding: '0.7em', borderRadius: '1em' }}>
                <div className="Time">
                    <img src="https://cdn-icons-png.flaticon.com/512/3579/3579913.png" className="timer-icon"  alt="timer" />
                    <Typography sx={{ fontSize: '0.70em', width: '20em' }}>Posted 5 days ago</Typography>
                </div>
                <div className="company">
                    {/* <LazyLoad height={100} offset={10}> */}
                        <img className="logo" src={logoUrl} alt="logo" />
                    {/* </LazyLoad> */}
                    <div className="main-info">
                        <Typography className="title" variant="h6" sx={{ fontSize: 'medium', fontWeight: '600', letterSpacing: '2px', marginBottom: '1px' }}>{company}</Typography>
                        <Typography sx={{ fontSize: 'medium', marginBottom: '2px' }}>{role}</Typography>
                        <Typography variant="h6" sx={{ fontSize: 'small' }}>{Location}</Typography>
                    </div>
                </div>
                <Typography sx={{ margin: '1em', color: 'Gray', width: '75%' }}>Estimated Salary: ₹{minJdSalary} - {maxJdSalary} LPA ✅</Typography>

                <div className="about">
                    <Typography variant="h6" sx={{ fontSize: 'medium', fontWeight: '500' }}>About Company:</Typography>
                    <Typography variant="h7" sx={{ fontWeight: '600' }}>About us</Typography>
                    <ReadMore>
                        {description.substr(0, 150)}
                    </ReadMore>
                </div>

                
                <div>
                <Typography sx={{ marginLeft: '1.3em', color: 'Gray', width: '75%', fontSize: '0.7em', letterSpacing: '1.5px' }}>Minimum Experience</Typography>
                <Typography sx={{ marginLeft: '1.3em', width: '75%', fontSize: '0.8em', letterSpacing: '1.5px' }}>{!minExp ? 0 : minExp} years</Typography>
                </div>
                <div className="buttons">
                    <Button
                        variant='contained'
                        sx={{
                        width: 330,
                        background: '#54efc3',
                        color: 'black',
                        textTransform: 'capitalize',
                        marginTop: '1em',
                        marginLeft: '1em',
                        marginBottom: '0.5em',
                        borderRadius: '0.55em',
                        }}
                        className="b1"
                    >
                        ⚡Easy Apply
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                        width: 330,
                        background: '#0B57D0',
                        color: 'white',
                        textTransform: 'capitalize',
                        marginLeft: '1em',
                        borderRadius: '0.55em',
                        }}
                        className="b1"
                    >
                        👤 Unlock Referral Asks
                    </Button>
                </div>
        </Card>
        </Grid>
      </ThemeProvider>
        

    )
}

export default React.memo(CardLayout);