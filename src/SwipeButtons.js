import React from 'react';
import IconButton from '@mui/material/IconButton';

import "./SwipeButtons.css";


const SwipeButtons=() =>{
    return(
        <div className="swipeButtons">
            <IconButton>
                <img className="ghost" src="https://64.media.tumblr.com/536ff61c1beb4b95a8125dd3d9b61b2f/tumblr_mqq8rk5J7s1rfjowdo1_500.gif" alt="ghost"></img>
            </IconButton>
            <IconButton>
                <img className="heart" src="https://img1.picmix.com/output/stamp/normal/8/2/7/4/1754728_6d35b.gif" alt="like"></img>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons