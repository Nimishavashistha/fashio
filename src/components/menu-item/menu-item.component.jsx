import React from "react";
import './menu-item.style.scss'
import { useLocation, useNavigate } from 'react-router';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    let { pathname } = useLocation();
    return (<div className={`${size} menu-item`} onClick={() => navigate(`${pathname}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
};

export default MenuItem;