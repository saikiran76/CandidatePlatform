/**
 * This is where card layout is designed for listings
 */

import { Card, Typography } from "@mui/material";
import React from "react";

const CardLayout = () =>{
    return(
        <Card className="card">
            <div className="time">
                <img src="https://cdn-icons-png.flaticon.com/512/3579/3579913.png" className="timer-icon" alt="timer" />
                <Typography sx={{ fontSize: '0.70em', width: '10em' }}>Posted 5 days ago</Typography>
            </div>


        </Card>
        

    )
}

export default CardLayout;