import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

export default function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="{props.name}" />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <span
                        className={props.online ? "status-online" : "status-offline"}
                    ></span>
                    <span className="status-text">
                        {props.online ? "online" : "offline"}
                    </span>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};