import React, {useState} from "react";
import './ChatScreen.css';
import { Avatar } from "@mui/material";

function ChatScreen(){
    const [input, setInput]=useState('');
    const [messages, setMessages]=useState([
        {
            name: 'Jennie',
            image: 'https://www.vmcdn.ca/f/files/via/images/arts/soft-girl-thumb.jpg;w=1080;h=885;mode=crop',
            message: 'Whats up'
        },
        {
            name: 'Jennie',
            image: 'https://www.vmcdn.ca/f/files/via/images/arts/soft-girl-thumb.jpg;w=1080;h=885;mode=crop',
            message: 'Hows it going?'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">
                YOU MATCHED ON 12/3/23
                </p>
                {messages.map((message) => 
                    message.name ?(
                        <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                            />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                    ) : (
                        <div className="chatScreen_message">
                            <p className="chatScreen_textUser">{message.message}</p>
                        </div>
                    )
                )}
                
                    <form className="chatScreen_input"> 
                        <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen_inputField"
                        placeholder="Type a message..."
                        type="text" />
                        <button onClick ={handleSend}className="chatScreen_inputButton">SEND</button>
                    </form>
    
            </div>
    );
    }

export default ChatScreen;