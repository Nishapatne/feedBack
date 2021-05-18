import React from 'react'
import { Card, Button } from 'react-bootstrap';
import history from './history';

function HomePage() {
    return (
        <>
            <Card>
                <Card.Body className="w-100 text-center mt-2">
                    <img className="emloyee_logo" src="https://crewapps.crewpl.com/employeePortal/resources/images/logo.png;jsessionid=VmYHg3eqbez83IfWAT6i4bG2.cplempapp01-prd"></img>

                    <div className="box_Layout">
                        <Button className="buttons" onClick={() => { history.push('/Employee_Details') }}>Employee List</Button>
                        <Button className="buttons" onClick={() => { history.push('/Create_Profile') }}>Create Profile</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default HomePage;
