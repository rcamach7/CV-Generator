import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: this.props.schoolName,
            titleStudy: this.props.titleStudy,
            dateStudy: this.props.dateStudy,
        }
    }

    onChangeVal = (e) => {
        if (e.target.id === "schoolInput") {
            this.setState({
                schoolName: e.target.value,
            })
        } else if (e.target.id === "titleInput") {
            this.setState({
                titleStudy: e.target.value,
            })
        } else {
            this.setState({
                dateStudy: e.target.value,
            })
        }
    }

    submitEducation = (e) => {
        e.preventDefault();
        this.props.handleEducationChange(this.state.schoolName, this.state.titleStudy, this.state.dateStudy);
    }

    render() {
        return (
            <div className="Education">
                <form onSubmit={this.submitEducation}>
                    {/* onChange will update state on ANY character change in the form value, ensuring that once 'save' is clicked, the state values reflect what the user has entered.*/}
                    <label htmlFor="schoolInput">Enter School Name: </label><br/>
                    <input type="text" id="schoolInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="titleInput">Enter Your Major: </label><br/>
                    <input type="text" id="titleInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="phoneInput">Enter Date Attended: </label><br/>
                    <input type="text" id="dateInput" onChange={this.onChangeVal}/><br/>

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}
export default Education;