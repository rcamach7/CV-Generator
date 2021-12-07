import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: this.props.companyName,
            companyPosition: this.props.companyPosition,
            companyResponsibilities: this.props.companyResponsibilities,
        }
    }

    onChangeVal = (e) => {
        if (e.target.id === "companyInput") {
            this.setState({
                companyName: e.target.value,
            })
        } else if (e.target.id === "positionInput") {
            this.setState({
                companyPosition: e.target.value,
            })
        } else {
            this.setState({
                companyResponsibilities: e.target.value,
            })
        }
    }

    submitFields = (e) => {
        e.preventDefault();
        this.props.handleExperienceChange(this.state.companyName, this.state.companyPosition, this.state.companyResponsibilities);
    }

    render() {
        return (
            <div className="Experience">
                <form onSubmit={this.submitFields}>
                    {/* onChange will update state on ANY character change in the form value, ensuring that once 'save' is clicked, the state values reflect what the user has entered.*/}
                    <label htmlFor="companyInput">Company Name: </label><br/>
                    <input type="text" id="companyInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="positionInput">Position: </label><br/>
                    <input type="text" id="positionInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="responsibilitiesInput">Responsibilities: </label><br/>
                    <input type="text" id="responsibilitiesInput" onChange={this.onChangeVal}/><br/>

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}
export default Experience;