import React,{ Fragment } from "react";
import './Footer.css';

const Footer = (props) =>{
    return(
        <Fragment>
            <center>
                <div className="foot">&copy; 2022 {props.developed} Its Ankit Singh</div>
            </center>
            <hr/>
        </Fragment>
    )
}

export default Footer;
