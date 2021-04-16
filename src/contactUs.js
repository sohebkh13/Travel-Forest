import React, { useState, useEffect } from "react";
import "./contactUs.css";
import { db_contact } from "./firebase";
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import bgvideo from './videos/video-2.mp4'
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        width: 500,
        display: 'flex',
        alignItems: 'center',
    },
});
 export default function Contact(){
     const [value, setValue] = React.useState(4.5);
     const [hover, setHover] = React.useState(-1);
     const classes = useStyles();

     const [name, setName] = useState("");
            const [email, setEmail] = useState("");
            const [message, setMessage] = useState("");

            const [loader, setLoader] = useState(false);

            function handleSubmit(e){
                e.preventDefault();

                setLoader(true);

                db_contact.collection("contacts")
                    .add({
                        name: name,
                        email: email,
                        message: message,
                        rating: value
                    })
                    .then(() => {
                        setLoader(false);
                        alert("Your message has been submitted👍");
                    })
                    .catch((error) => {
                        alert(error.message);
                        setLoader(false);
                    });

                setName("");
                setEmail("");
                setMessage("");
                setValue("")

                emailjs.sendForm('gmail', 'template_travel_forest', e.target, 'user_Cf8mU3zDTMFtbTfFufsvA')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });

            };



            return (

            <div className="form-container">
                <video src={bgvideo} autoPlay loop muted/>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact Us or Give us your valuable feedback 🤳</h1>

                    <label>Name</label>
                    <input
                        //placeholder="Name"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        //placeholder="Email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Message</label>
                    <textarea
                        placeholder="Feel free to ask us anything or help us making Travel Forest better by providing your valuable suggestions."
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea><br/>
                    <label>Rate Us</label>
                    <Rating
                        name="rating"
                        value={value}
                        defaultValue={0}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                    />
                    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                    <button type="submit">Submit</button>
                </form>

            </div>
        );

}
