import React, {useState} from "react";
import './agents.css'
import MaterialTable from "material-table";
import {db_contact} from "./firebase";
import Nav from "./Nav";
import bgvideo from './videos/video-2.mp4'
import {data } from './agentsdata'


export const Agents = () => {
    const columns = [
        {
            title: "Country",
            field: "country",
        },
        {
            title: "Agency Name",
            field: "name",
        },
        // {
        //     title: "Email",
        //     field: "email",
        // },
        {
            title: "Website Link",
            field: "website",
        },

    ];

    const [value, setValue] = React.useState(4.5);
    const [hover, setHover] = React.useState(-1);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        setLoader(true);

        db_contact.collection("Agents")
            .add({
                name: name,
                email: email,
                message: message,

            })
            .then(() => {
                setLoader(false);
                alert("Thanks for filling as an agent! We will verify and get back to you👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");


    };



    return(
        <div className="body-container">
            <Nav/>
            <video src={bgvideo} autoPlay loop muted/>
        <br/><br/><br/><br/><br/>
            <h1>Travel Agents/Platforms</h1><br/>
            <MaterialTable
                title="Travel Agents"
                data={data}
                columns={columns}
                options={{filtering: true}}
            />
            <br/><br/><br/><br/><br/>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Want to become an Agent?</h1>

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
                    placeholder=""
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Agents