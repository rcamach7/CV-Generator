import React from "react";
import "./styling/CVSection.css";

class General extends React.Component {
    constructor(props) {
        super(props);
        // We use the current values of parent state for consistency.
        this.state = {
            name: this.props.name,
            email: this.props.email,
            phone: this.props.phone,
        }
    }
    // This will update the correct state based on the ID of the input form, making sure the correct state is updated.
    onChangeVal = (e) => {
        if (e.target.id === "nameInput") {
            this.setState({
                name: e.target.value,
            })
        } else if (e.target.id === "emailInput") {
            this.setState({
                email: e.target.value,
            })
        } else {
            this.setState({
                phone: e.target.value,
            })
        }
    }
    // This will invoke our parent function, and pass UP values of our current state the user requested to save.
    submitNewName = (e) => {
        e.preventDefault();
        this.props.handleGeneralChange(this.state.name, this.state.email, this.state.phone);
    }

    render() {
        return(
            <div className="CVSection">
                <form onSubmit={this.submitNewName}>
                    {/* onChange will update state on ANY character change in the form value, ensuring that once 'save' is clicked, the state values reflect what the user has entered.*/}
                    <label htmlFor="nameInput">Enter Name: </label>
                    <input type="text" id="nameInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="emailInput">Enter Email: </label>
                    <input type="text" id="emailInput" onChange={this.onChangeVal}/><br/>

                    <label htmlFor="phoneInput">Enter Phone: </label>
                    <input type="text" id="phoneInput" onChange={this.onChangeVal}/><br/><br/>

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}
export default General;