import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { io } from 'socket.io-client';
import { useAuth } from '../context/auth';

const socket = io.connect("http://localhost:3001");

export default function Chat() {
    const [auth] = useAuth();
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]); // Maintain a list of messages
    const userName = auth.user.name;
    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };

    const sendMessage = () => {
        if (message !== "") {
            const newMessage = { message, room, userName };
            setMessages(prevMessages => [...prevMessages, newMessage]); // Append the message to the list
            socket.emit("send_message", newMessage);
            setMessage(""); // Clear input after sending message
        }
    };


    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessages(prevMessages => [...prevMessages, data]); // Update messages list
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className='container mt-5'>
                <input
                    type="text"
                    value={room}
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder="Room Number..."
                />
                <button onClick={joinRoom}>Join Room</button>
                <div className='my-5' style={{ border: "solid black 2px" }}>
                    <div className='mt-3'>
                        {/* Display all messages */}
                        {messages.map((msg, index) => (
                            <p key={index}><strong>{msg.userName}:</strong> {msg.message}</p>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message"
                    />
                    <button onClick={sendMessage}>Send</button><br></br><br></br>

                </div>


            </div>
            <Footer />
        </div>
    );
}
