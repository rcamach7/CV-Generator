import React from "react";
import "./styling/CVHeader.css";

class CVHeader extends React.Component {
    render() {
        return(
            <div className="CVHeader">
                <h1>Ultimate CV Generator</h1>
                <h2>
                    Create professional resumes, CV and bio-data online for free, in minutes. Simply fill in your details and generate beautiful PDF and HTML resumes!
                </h2>
            </div>
        )
    }
}
export default CVHeader;