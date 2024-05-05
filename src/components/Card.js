/**
 * This is where card layout is designed for listings
 */
import '../App.css';
import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { ReadMore } from './utils/ReadMore';

const CardLayout = () =>{
    return(
        <Card className="card" sx={{ width: '90%', padding: '0.7em', borderRadius: '1em' }}>
            <div className="Time">
                <img src="https://cdn-icons-png.flaticon.com/512/3579/3579913.png" className="timer-icon"  alt="timer" />
                <Typography sx={{ fontSize: '0.70em', width: '20em' }}>Posted 5 days ago</Typography>
            </div>
            <div className="company">
                <img className="logo" src="https://media.licdn.com/dms/image/D4E0BAQEHqg62-J-PLQ/company-logo_200_200/0/1709336754236/ema_unlimited_logo?e=2147483647&v=beta&t=Wo9F-C8UufpFFdd_vptBvDykrcp7kcepVX7NdGon2wg" alt="logo" />
                <div className="main-info">
                    <Typography className="title" variant="h6" sx={{ fontSize: 'medium', fontWeight: '600', letterSpacing: '2px', marginBottom: '1px' }}>Emu</Typography>
                    <Typography sx={{ fontSize: 'medium', marginBottom: '2px' }}>SWE</Typography>
                    <Typography variant="h6" sx={{ fontSize: 'small' }}>Bengaluru, India</Typography>
                </div>
            </div>
            <Typography sx={{ margin: '1em', color: 'Gray', width: '75%' }}>Estimated Salary: 30 - 50 LPA ✅</Typography>

            <div className="about">
                <Typography variant="h6" sx={{ fontSize: 'medium', fontWeight: '500' }}>About Company:</Typography>
                <Typography variant="h7" sx={{ fontWeight: '600' }}>About us</Typography>
                <ReadMore>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </ReadMore>
            </div>

            
            <div>
            <Typography sx={{ marginLeft: '1.3em', color: 'Gray', width: '75%', fontSize: '0.7em', letterSpacing: '1.5px' }}>Minimum Experience</Typography>
            <Typography sx={{ marginLeft: '1.3em', width: '75%', fontSize: '0.8em', letterSpacing: '1.5px' }}>8 years</Typography>
            </div>
            <div className="buttons">
            <Button
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
                Unlock Referral Asks
            </Button>
            </div>
      </Card>
        

    )
}

export default CardLayout;