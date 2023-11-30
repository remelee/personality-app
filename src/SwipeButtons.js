import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

import "./SwipeButtons.css";


const SwipeButtons=() =>{
    return(
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize="large" color="primary"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons