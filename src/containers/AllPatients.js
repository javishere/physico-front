import React from "react"
import "./AllPatients.css"
import PatientsList from "../components/PatientsList"
import getAllPatients from "../connections/patients"

class AllPatients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            patients: []
        }
    }

    componentDidMount() {
        getAllPatients().then(
            patients => {
                this.setState({
                    isLoaded: true,
                    patients: patients
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        return (<PatientsList patients = {this.state.patients}/>)
    }
} 


export default AllPatients