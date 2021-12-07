import React from "react";
import "./styling/CVDisplay.css";

class CVDisplay extends React.Component {
    render() {
        return(
            <div className="CVDisplay" >
                <h3>Name: {this.props.name} </h3>
                <h3>Email: {this.props.email} </h3>
                <h3>Phone: {this.props.phone} </h3>
                <h3>School Name: {this.props.schoolName} </h3>
                <h3>Title Study: {this.props.titleStudy} </h3>
                <h3>Date Of Study: {this.props.dateStudy} </h3>
                <h3>Company Name: {this.props.companyName} </h3>
                <h3>Company Position: {this.props.companyPosition} </h3>
                <h3>Company Responsibilities: {this.props.companyResponsibilities} </h3>
            </div>
        )
    }
}
export default CVDisplay;