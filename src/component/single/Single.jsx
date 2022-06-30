import React from "react";
import './single.css'
import Sidebar from '../sidebar/Sidebar'
import SinglePost from '../singlepost/SinglePost'

const Single =()=>{
    return(
        <div className="single">
            <SinglePost></SinglePost>
            <Sidebar/>
        </div>
    )
}

export default Single