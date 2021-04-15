import React from "react";
import "./Banner.css"
import BannerVideo from './videos/video-2.mp4'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
// import axios from './axios'
// import requests from "./Request";

function Banner(){
    const history = useHistory()

//     const [movie, setMovie] = useState([]);
//     useEffect(() => {
//         async function fetchData(){
//             const request = await axios.get(requests.fetchNetflixOriginals);
//             setMovie(
//                 request.data.results[
//                     Math.floor(Math.random() * request.data.results.length - 1)
//                     ]
//             );
//             return request;
//         }
//
//         fetchData()
//     }, []);
//
//     console.log(movie)
//
//
//
// /*... after too long text*/
// function truncate(string,n){
//     return string?.length > n ? string.substr(0, n - 1) + '...' : string;
//
// }

    return(
        // <header
        //     className="banner"
        //     style={{
        //         backgroundSize: "cover",
        //         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //         backgroundPosition: "center center",
        //     }}>
        //
        //     {/*<div className="banner-contents">*/}
        //     {/*    <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>*/}
        //     {/*    <div className="banner-buttons">*/}
        //     {/*        <br/><br/><button className="banner-button">Visit</button>*/}
        //     {/*        <button className="banner-button">My Places</button>*/}
        //     {/*    </div>*/}
        //     {/*    <h1 className="banner-description">{truncate(movie?.overview,150)}</h1>*/}
        //     {/*</div>*/}
        //
        //     {/*<div className="banner-fadeBottom"/>*/}
        //
        // </header>

        <div className="banner-container">
            <video src={BannerVideo} autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="banner-buttons">
                <a href="https://tf-covid-tracker.web.app/"
                   target="_self"><br/><br/><Button  className="covid"><span>COVID-19 Status</span></Button></a>

            </div>

        </div>

    );

}

export default Banner
