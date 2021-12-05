import React from "react";
import "./styling/App.css";
import CVHeader from "./CVHeader";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import CVDisplay from "./CVDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);
        // Here is the default state values to be changed by any function calls we have below by our children.
        this.state = {
            name: "-",
            email: "-",
            phone: "-",
            schoolName: "-",
            titleStudy: "-",
            dateStudy: "-",
            companyName: "-",
            companyPosition: "-",
            companyResponsibilities: "-",
        }
        this.handleGeneralChange = this.handleGeneralChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
    }
    // This function is passed down to its child, general. It will be triggered when user saves changes to its state properties, which in turn updates our state values.
    handleGeneralChange(name, email, phone) {
        this.setState({
            name: name,
            email: email,
            phone: phone,
        })
    }

    handleEducationChange(schoolName, titleStudy, dateStudy) {
        this.setState({
            schoolName: schoolName,
            titleStudy: titleStudy,
            dateStudy: dateStudy,
        })
    }

    handleExperienceChange(companyName, companyPosition, companyResponsibilities) {
        this.setState({
            companyName: companyName,
            companyPosition: companyPosition,
            companyResponsibilities: companyResponsibilities,
        })
    }

    render() {
        const {name, email, phone, schoolName, titleStudy, dateStudy, companyName,
            companyPosition, companyResponsibilities} = this.state;
        return (
            <div className="App">
                {/* Basic Website Header with appropriate styling*/}
                <CVHeader>
                </CVHeader>

                <div className="container">
                    {/*This component will send us any saved general info via a function call*/}
                    <General handleGeneralChange = {this.handleGeneralChange} name = {name} email = {email} phone = {phone}>
                    </General>

                    {/*This component will send us any saved education info via a function call*/}
                    <Education handleEducationChange = {this.handleEducationChange} schoolName = {schoolName} titleStudy = {titleStudy} dateStudy = {dateStudy}>
                    </Education>

                    {/*This component will send us any saved education info via a function call*/}
                    <Experience handleExperienceChange = {this.handleExperienceChange} companyName = {companyName} companyPosition = {companyPosition} companyResponsibilities = {companyResponsibilities}>
                    </Experience>

                    {/*Here we pass on the state to be displayed. Anytime our state variables are updated, React will take care of displaying those changes*/}
                    <CVDisplay name={name} email = {email} phone = {phone}
                        schoolName = {schoolName} titleStudy = {titleStudy} dateStudy = {dateStudy} companyName = {companyName}
                        companyPosition = {companyPosition} companyResponsibilities = {companyResponsibilities} >
                    </CVDisplay>
                </div>

            </div>
        );
    }
}

export default App;