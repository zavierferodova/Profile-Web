import React from "react";
import '../css/Header.css';
import riverImage from "../../images/river-image.webp";

class Header extends React.Component {
    render() {
        const bgImage = {
            backgroundImage: `url(${riverImage})`
        };

        return(
            <div id="about" className="header" style={bgImage}>
                <div className="content">
                    <div className="info">
                        <div className="dev-name">ZAVIER FERODOVA AL FITROH</div>
                        <div className="dev-detail">Web Developer | Android Developer</div>
                    </div>
                    {/*<div className="info">
                        <div className="short-bio">
                            Hello I am Zavier, 17 yo Vocational High School student from Indonesia. I like much of technology especially about Artificial Intelligent.
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Header;