import React from "react";
import Chat from "./Chat";

function Chats(){
    return <div className="chats">
        <Chat
        name="Jennie"
        message="Hows it going?"
        timestamp="40 seconds ago"
        profilePic="https://www.vmcdn.ca/f/files/via/images/arts/soft-girl-thumb.jpg;w=1080;h=885;mode=crop"
        />
        <Chat
        name="Maryam"
        message="Hehehe"
        timestamp="2 days ago"
        profilePic="https://scontent.xx.fbcdn.net/v/t1.15752-9/404223062_743506864493121_8748276069595439443_n.jpg?stp=dst-jpg_s403x403&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=_3HCAPacau4AX9aAwjt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQZFbPWVx6wqabJn3fFGzhsKeqCVghx00ZhPxBUtOGHVQ&oe=6591E235"
        />
    </div>;
}

export default Chats;