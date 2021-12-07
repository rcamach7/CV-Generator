import React from "react";
import "./styling/App.css";
import CVHeader from "./CVHeader";
import CVDisplay from "./CVDisplay";
import CVFormInput from "./CVFormInput";

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
    }

    updateCVDisplay = (name, email, phone, schoolName, titleStudy, dateStudy, companyName, companyPosition, companyResponsibilities) => {
        this.setState({
            name: name,
            email: email,
            phone: phone,
            schoolName: schoolName,
            titleStudy: titleStudy,
            dateStudy: dateStudy,
            companyName: companyName,
            companyPosition: companyPosition,
            companyResponsibilities: companyResponsibilities,
        })
    }

    render() {
        const {
            name, email, phone, schoolName, titleStudy, dateStudy, companyName,
            companyPosition, companyResponsibilities
        } = this.state;
        return (
            <div className="App">
                {/* Basic Website Header with appropriate styling*/}
                <CVHeader>
                </CVHeader>

                <div className="container">
                    <div className="cvInput">
                        <CVFormInput updateParent = {this.updateCVDisplay} name={name} email={email} phone={phone}
                                     schoolName={schoolName}
                                     titleStudy={titleStudy} dateStudy={dateStudy}
                                     companyName={companyName}
                                     companyPosition={companyPosition} companyResponsibilities={companyResponsibilities}>
                        </CVFormInput>
                    </div>

                    {/*Here we pass on the state to be displayed. Anytime our state variables are updated, React will take care of displaying those changes*/}
                    <CVDisplay name={name} email={email} phone={phone}
                               schoolName={schoolName} titleStudy={titleStudy} dateStudy={dateStudy}
                               companyName={companyName}
                               companyPosition={companyPosition} companyResponsibilities={companyResponsibilities}>
                    </CVDisplay>
                </div>
            </div>
        );
    }
}

export default App;