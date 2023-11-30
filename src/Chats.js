import React from "react";
import Chat from "./Chat";

function Chats(){
    return <div className="chats">
        <Chat
        name="Jennie"
        message="Hows it going?"
        timestamp="40 seconds ago"
        profilePic="https://images.ctfassets.net/awpxl2koull4/y657MYHdReGAqQ4QymQiW/b146300bf6c24d8612435ce85d952784/emotional_resilience.jpg?fit=fill&w=1920&h=1440"
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