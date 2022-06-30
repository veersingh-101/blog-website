import React from "react";
import './sidebar.css'
import profile from './f1.jpg'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-items">
                <span className="sidebar-title">About Me</span>
                <img src={profile}></img>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, reprehenderit. Voluptas adipisci aliquid, libero laudantium tempora quae sint hic quod, in et, aut</p>
            </div>
            <div className="sidebar-items">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Sports</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Style</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Festiv</li>
                </ul>
            </div>
            <div className="sidebar-items">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-social">
                <i className="sidebar-icons fa-brands fa-facebook"></i>
                <i className="sidebar-icons fa-brands fa-instagram"></i>
                <i className="sidebar-icons fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}
export default Sidebar