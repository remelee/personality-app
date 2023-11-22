import React from "react";
import Chat from "./Chat";

function Chats(){
    return <div className="chats">
        <Chat
        name="Bob"
        message="YO whats up!"
        timestamp="40 seconds ago"
        profilePic="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d0a4481f-e801-4cb7-9daa-17cdae32cc89/icon-design-21-opt.png"
        />
        <Chat
        name="Maryam"
        message="Hehehe"
        timestamp="2 days ago"
        profilePic="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/06/30211551/libra-1.png"
        />
    </div>;
}

export default Chats;