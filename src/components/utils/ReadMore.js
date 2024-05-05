import { useState } from "react";

export const ReadMore = ({moreText}) =>{
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <>
        <p>{isExpanded ? moreText : moreText.slice(0, 100)}</p>
        <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Read More"}
        </button>
        </>
    )
}