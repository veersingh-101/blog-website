import React from "react";
import './post.css'
import profile from './tree.jpg'
// import imgg from 'https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2021/09/Lost-in-Random-Shadowman-screenshot.jpg'
import {Link} from 'react-router-dom'

const Post = (props)=>{
    return(
        <Link to='/post/:postid' style={{textDecoration:'none', color:'inherit', width:'40%', margin: '0 25px 40px 25px'}}>
            <div className="post">
            <img className="post-img" src={props.ig}></img>
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">
                    Lorem ipsum dolor sit amet
                </span>
                <hr></hr>
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-des">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum quae impedit veniam corporis quos minima iusto dolor nam praesentium sequi dolores quo, corrupti modi explicabo, fugiat vero vitae eos!
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, numquam. Nam nihil fugit recusandae voluptates at, nostrum excepturi consectetur ipsa quod quis nisi ex molestiae dignissimos, necessitatibus vel dolores numquam?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptatum molestias, illo deserunt qui optio. Sed, animi distinctio qui error deserunt doloribus dolore ullam nobis veniam quo? Expedita, ratione amet!
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptatibus culpa soluta quos harum quo, inventore quam. Sapiente corporis quo quaerat animi assumenda voluptas necessitatibus, earum expedita cum laborum ea?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis. Porro, aliquid. Tempora doloribus, similique reprehenderit provident delectus, assumenda rem nulla accusamus, doloremque quisquam quasi? Alias dolore ducimus laboriosam numquam?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor, nemo dolorem explicabo, error vel quasi perferendis quaerat est sequi repellat dignissimos quae! Pariatur quis eligendi illum, aut sunt nesciunt.
            </p>
        </div></Link>
        
    )
}

export default Post