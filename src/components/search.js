import { useState } from "react";

const SearchBar = () =>{
    const [text, setSearchText] = useState("");
    return(
        <div className="search-bar">

            <input className="" type="text" value={text} onChange={
                (e) =>{
                    setSearchText(e.target.value)
                    console.log("Body Component rendered");
                }
            }>
            </input>
              
        </div>
    )
}

export default SearchBar