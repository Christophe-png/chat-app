import React,{component} from "react";
import "./Contact.css";
import PropTypes from "prop-types";

export default class Contact extends component {
    constructor (props) {
        super(props);
        this.state= {online : props.online,}
        
    }
    render () {
        
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="{props.name}" />
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status" 
                {onClick={event => {
                    this.state.online ? this.setState({online:false}) : this.setState({online:true});

                }}
                    <span
                        className={this.state.online ? "status-online" : "status-offline"}
                    ></span>
                    <span className="status-text">
                        {this.state.online ? "online" : "offline"}
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