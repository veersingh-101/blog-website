import React from "react";
import './posts.css'
import Post from '../post/Post'
import ig1 from './animal.jpg'
import ig2 from './digital.jpg'
import ig3 from './dig.jpg'
import ig4 from './map.jpg'
import ig5 from './n1.jpg'
import ig6 from './music.jpg'

const Posts = ()=>{
    const image=[
        {
            id:0,
            ig11:ig1,
        },
        {
            id:1,
            ig11: ig2,
        },
        {
            id:3,
            ig11: ig3,
        },
        {
            id:3,
            ig11:ig4
        },
        {
            id:4,
            ig11:ig5
        },
        {
            id:5,
            ig11:ig6
        }
    ]
    return(
        <div className="posts">
            {image.map((i)=>{
                console.log(i)
                return(
                    <Post key={i.id} ig={i.ig11}></Post>
                )
            })}
        </div>
    )
}
export default Posts