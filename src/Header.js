import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        <div className="header">
            <a href= '/profile'>
            <IconButton>
            <PersonIcon className="header_icon"
            fontSize="large" />
            </IconButton>
            </a>


            <a href= '/'>
            <img 
            className="header_logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a7fa563-b874-49fa-8af3-3f81aac7a2d7/df3zree-2fc86e77-0932-47db-981c-fad0c9f38c1d.png/v1/fill/w_1280,h_1593/pastel_crescent_moon_by_pixelartplanet_df3zree-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU5MyIsInBhdGgiOiJcL2ZcLzVhN2ZhNTYzLWI4NzQtNDlmYS04YWYzLTNmODFhYWM3YTJkN1wvZGYzenJlZS0yZmM4NmU3Ny0wOTMyLTQ3ZGItOTgxYy1mYWQwYzlmMzhjMWQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dF-9kIiNY2XgsIAN9swVJTCYMcnMZ3jU_zXA0DgF20c" 
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