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

            <a href= '/'>
            <img 
            className="header_logo"
            src="https://static-00.iconduck.com/assets.00/moon-icon-1868x2048-ifpp8fum.png" 
            alt="app-logo"/>
            </a>

            <a href='/chat'>
            <IconButton>
            <ChatIcon className="header_icon"
            fontSize="large"/>
            </IconButton>
            </a>

        </div>
    )
}

export default Header