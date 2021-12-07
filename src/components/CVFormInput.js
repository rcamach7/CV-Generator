import {useState} from "react";

const CVFormInput = (props) => {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [schoolName, setSchoolName] = useState(props.schoolName);
    const [titleStudy, setTitleStudy] = useState(props.titleStudy);
    const [dateStudy, setDateStudy] = useState(props.dateStudy);
    const [companyName, setCompanyName] = useState(props.companyName);
    const [companyPosition, setCompanyPosition] = useState(props.companyPosition);
    const [companyResponsibilities, setCompanyResponsibilities] = useState(props.companyResponsibilities);

    const submitToParent = () => {
        props.updateParent(name, email, phone, schoolName, titleStudy, dateStudy, companyName, companyPosition, companyResponsibilities);
    }

    const generalOnChange = (e) => {
        if (e.target.id === "nameInput") {
            setName(e.target.value);
        } else if (e.target.id === "emailInput") {
            setEmail(e.target.value);
        } else {
            setPhone(e.target.value);
        }
    }

    const educationOnChange = (e) => {
        if (e.target.id === "schoolInput") {
            setSchoolName(e.target.value);
        } else if (e.target.id === "titleInput") {
            setTitleStudy(e.target.value);
        } else {
            setDateStudy(e.target.value);
        }
    }

    const experienceOnChange = (e) => {
        if (e.target.id === "companyInput") {
            setCompanyName(e.target.value);
        } else if (e.target.id === "positionInput") {
            setCompanyPosition(e.target.value);
        } else {
            setCompanyResponsibilities(e.target.value);
        }
    }

    return (
        <div>
            <GeneralInfo onChangeGeneral={generalOnChange}>
            </GeneralInfo>

            <EducationInfo onChangeEducation={educationOnChange}>
            </EducationInfo>

            <ExperienceInfo onChangeExperience={experienceOnChange}>
            </ExperienceInfo>

            <button onClick={submitToParent}>Save</button>

        </div>
    );
}

const GeneralInfo = (props) => {
    return (
        <div className="General">
            <label htmlFor="nameInput">Enter Name: </label><br/>
            <input type="text" id="nameInput" onChange={props.onChangeGeneral}/><br/>

            <label htmlFor="emailInput">Enter Email: </label><br/>
            <input type="text" id="emailInput" onChange={props.onChangeGeneral}/><br/>

            <label htmlFor="phoneInput">Enter Phone: </label><br/>
            <input type="text" id="phoneInput" onChange={props.onChangeGeneral}/><br/>
        </div>
    )
}

const EducationInfo = (props) => {
    return (
        <div className="Education">
            <label htmlFor="schoolInput">Enter School Name: </label><br/>
            <input type="text" id="schoolInput" onChange={props.onChangeEducation}/><br/>

            <label htmlFor="titleInput">Enter Your Major: </label><br/>
            <input type="text" id="titleInput" onChange={props.onChangeEducation}/><br/>

            <label htmlFor="phoneInput">Enter Date Attended: </label><br/>
            <input type="text" id="dateInput" onChange={props.onChangeEducation}/><br/>
        </div>
    )
}

const ExperienceInfo = (props) => {
    return (
        <div className="Experience">
            <label htmlFor="companyInput">Company Name: </label><br/>
            <input type="text" id="companyInput" onChange={props.onChangeExperience}/><br/>

            <label htmlFor="positionInput">Position: </label><br/>
            <input type="text" id="positionInput" onChange={props.onChangeExperience}/><br/>

            <label htmlFor="responsibilitiesInput">Responsibilities: </label><br/>
            <input type="text" id="responsibilitiesInput" onChange={props.onChangeExperience}/><br/>
        </div>
    )
}
export default CVFormInput;