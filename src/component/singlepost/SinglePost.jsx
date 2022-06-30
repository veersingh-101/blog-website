import React from "react";
import './singlepost.css'
import profile from './2.jpg'

const SinglePost = () =>(
    <div className="singlepost">
        <div className="singlepost-wrapper">
            <img className="singlepost-img" src={profile} alt='single'></img>
            <h1 className="singlepost-title">
                Lorem ipsum solar sit amet
                <div className="singlepost-edit">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlepost-info">
                <span className="singlepost-author">Author: <b>Veer</b></span>
                <span className="singlepost-date">1 hour ago</span>
            </div>
            <p className="singlepost-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempore. Velit error tenetur sit provident at voluptas sunt magni tempore! Totam deleniti porro officiis nemo asperiores repudiandae dignissimos quibusdam quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto commodi laboriosam aut dolorem distinctio praesentium corrupti, ad nostrum maiores porro quia ducimus, similique est, enim fuga magnam provident debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum in incidunt qui quidem doloribus quos reprehenderit velit doloremque, quis vel sint inventore quia? Ipsum error hic expedita blanditiis atque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint possimus tempore quisquam ea ipsa distinctio magni optio vitae nulla autem nostrum, nisi sed magnam fuga iste velit nemo ratione.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus reiciendis beatae non rerum quo sunt adipisci, numquam voluptatibus libero mollitia maiores velit voluptate in repudiandae enim! Eveniet non ea laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione dolore quasi consequatur repellat ducimus error, nam suscipit, adipisci, autem fugit omnis. Minima facilis tenetur inventore officia. Quo, voluptate amet!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum expedita provident excepturi, aut error blanditiis laudantium optio velit laboriosam et at natus iure quae vitae repudiandae tenetur aliquid quas fugiat.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis quae dignissimos deserunt dolore magnam similique maiores accusantium, fugit odit explicabo, illum tempore quam asperiores inventore earum eveniet culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores fugit fuga, impedit obcaecati tempora, voluptatibus deleniti, ipsum ullam iusto iste! Deserunt fugiat corporis doloremque est eos vero exercitationem quasi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, itaque perspiciatis! Tempora, quibusdam omnis dolor placeat itaque minima ea mollitia perspiciatis, accusantium sed consequuntur animi nam molestiae recusandae. Commodi, eius?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis iusto similique placeat quidem non tempora minus magni error! Odit minima molestias nulla sunt ab cumque, facilis nam ducimus exercitationem!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus cupiditate rem animi asperiores blanditiis obcaecati, similique placeat quis eaque rerum sequi voluptas vitae tenetur unde sint suscipit libero. Maxime.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem velit mollitia similique? Explicabo modi minima, praesentium in eligendi aliquam odit et delectus optio. Reiciendis magnam excepturi eum optio dolores?
            </p>
        </div>
    </div>
)

export default SinglePost