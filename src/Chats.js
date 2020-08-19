import React from 'react';
import './Chats.css';
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Joey"
                message="How you doin'?"
                timestamp="40 minutes ago"
                profilePic="https://i.pinimg.com/736x/23/cb/cd/23cbcd24af6982e6e9e78bcb79de0b7e--joey-friends-friends-season.jpg"
            />
            <Chat 
                name="Ross"
                message="Will you marry me?"
                timestamp="1 hour ago"
                profilePic="http://images2.fanpop.com/image/photos/9700000/Ross-Geller-TOW-Ross-Grant-10-06-ross-geller-9731827-720-480.jpg"
            />
            <Chat 
                name="Chandler"
                message="I knew it!!!"
                timestamp="25 minutes ago"
                profilePic="https://i.pinimg.com/736x/49/ed/f1/49edf1bdc5096c4ca2df1a3b87d98212.jpg"
            />
        </div>
    )
}

export default Chats
