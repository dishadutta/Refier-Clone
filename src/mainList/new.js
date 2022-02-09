import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Jobs from "./jobs";
import Filter from "./filter";

function New() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div >
    <div className="row gx-5">
    <div className="col-4" >
      <h4>Search</h4>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        <Filter/>
      </div>
      </div>
      {/* <div className="col-1" style={{backgroundColor:'#e1eded'}}></div> */}
      <div className="col-8">
          <div className="row"><div className="col-1">
        <div style={{width:'20px', height:'100%', backgroundColor:'#e1eded'}}></div></div>
        <div className="col-11"><Jobs input={inputText} /></div>
        </div>
      </div>
    </div></div>
  );
}

export default New;