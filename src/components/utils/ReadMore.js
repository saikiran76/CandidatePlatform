/**
 * Utility function for expanding job description out
 */

import { Typography } from "@mui/material";
import { useState } from "react";

export const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text" style={{fontFamily:"Inter", fontSize:"small"}}>
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                {isReadMore ? <Typography sx={{fontWeight:'800'}}>View Job</Typography> : " show less"}
            </span>
        </p>
  
  );
};
