import React from 'react'
import "./topbar.css"
import { NotificationsNone, LanguageIcon, Settings, Language } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Board</span>
                </div>                    
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src='https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4602_A.jpg' alt="" className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
