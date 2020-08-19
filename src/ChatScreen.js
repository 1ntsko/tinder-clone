import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([
        {
            name: "Joey",
            image: "https://i.pinimg.com/736x/23/cb/cd/23cbcd24af6982e6e9e78bcb79de0b7e--joey-friends-friends-season.jpg",
            message: "Heyy"
        },
        {
            name: "Joey",
            image: "https://i.pinimg.com/736x/23/cb/cd/23cbcd24af6982e6e9e78bcb79de0b7e--joey-friends-friends-season.jpg",
            message: "How you doin'?"
        },
        {
            message: "Hi Joey! How are you?"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessage([...message, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            {/* <h2>Chat screen</h2> */}
            <p className="chatScreen__timestamp">YOU MATCHED WITH JOEY ON 10/08/20</p>
            {message.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen__input">
                    <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message..." />
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
