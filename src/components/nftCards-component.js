

import React, {useState} from 'react'

function NftCardComponent(props) {

    const [ dropdownShowing, setDropdownShowing ] = useState(false);
    const [image2, setImage2] = useState("./images/IMG_4916.jpeg");

    const cardEvt = evt => {
        setDropdownShowing(!dropdownShowing);
    }

    const hrefEvt = evt => {
        evt.preventDefault();
    }

    return (
        <div className="cards">
            <div className={"card" + (dropdownShowing ? " show" : "")} onClick={cardEvt}>
                <div className="card__image-holder" style={{
                        backgroundImage: "url(" + props.src +")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                        }}  alt="wave">
                </div>
                <div className="card-title">
                    <a className="toggle-info btn" href="#" onClick={hrefEvt}>
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                        {props.title}
                        <small>{props.subTitle}</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                    <div className="card-description">
                        {props.description}
                    </div>
                    <div className="card-offerLink">
                        <a className="btn" target="_blank" rel="noreferrer" href={props.Href}>Book Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NftCardComponent;
