import preloader from "../img/loading.gif"
import React from "react";

const Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
    <img src={preloader}/>
    </div>
}

export default Preloader;