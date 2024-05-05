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
                {isReadMore ? "View Job" : " show less"}
            </span>
        </p>
  
  );
};
