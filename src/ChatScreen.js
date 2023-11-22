import React, {useState} from "react";
import './ChatScreen.css';
import { Avatar } from "@mui/material";

function ChatScreen(){
    const [input, setInput]=useState('');
    const [messages, setMessages]=useState([
        {
            name: 'Ellen',
            image: 'https://sumo.app/works/cute-frog-pfp-2jpg/thumb',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://sumo.app/works/cute-frog-pfp-2jpg/thumb',
            message: 'Hows it going?'
        },
        {
            message: 'hi'
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
                YOU MATCHED ON 11/22/23
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