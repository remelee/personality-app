import React from "react";
import Chat from "./Chat";

function Chats(){
    return <div className="chats">
        <Chat
        name="Jennie"
        message="Hows it going?"
        timestamp="20 seconds ago"
        profilePic="https://www.vmcdn.ca/f/files/via/images/arts/soft-girl-thumb.jpg;w=1080;h=885;mode=crop"
        />
        <Chat
        name="Rachel"
        message="Omg fellow libra"
        timestamp="40 seconds ago"
        profilePic="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F10%2Ffrench-curl-braids-tiktok-trend-FI.jpg?w=960&cbr=1&q=90&fit=max"
        />
    </div>;
}

export default Chats;