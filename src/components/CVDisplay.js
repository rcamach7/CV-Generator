import React from "react";
import "./styling/CVDisplay.css";

class CVDisplay extends React.Component {
    render() {
        return(
            <div className="CVDisplay" >
                <h2>Name: {this.props.name} </h2>
                <h2>Email: {this.props.email} </h2>
                <h2>Phone: {this.props.phone} </h2>
                <h2>School Name: {this.props.schoolName} </h2>
                <h2>Title Study: {this.props.titleStudy} </h2>
                <h2>Date Of Study: {this.props.dateStudy} </h2>
                <h2>Company Name: {this.props.companyName} </h2>
                <h2>Company Position: {this.props.companyPosition} </h2>
                <h2>Company Responsibilities: {this.props.companyResponsibilities} </h2>
            </div>
        )
    }
}
export default CVDisplay;