import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header_icon"
            fontSize="large" />
            </IconButton>

            
            <img 
            className="header_logo"
            src="https://static-00.iconduck.com/assets.00/moon-icon-1868x2048-ifpp8fum.png" 
            alt="app-logo"/>
            
            <IconButton>
            <ChatIcon className="header_icon"
            fontSize="large"/>
            </IconButton>

        </div>
    )
}

export default Header