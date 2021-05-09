import React from 'react'
import { Container, Button } from 'react-bootstrap';
import history from './history';

function HomePage() {
    return (
        <>
            <Container>
                <div className="logo">
                    <img src="https://crewapps.crewpl.com/employeePortal/resources/images/logo.png;jsessionid=VmYHg3eqbez83IfWAT6i4bG2.cplempapp01-prd"></img>
                </div>
                <div className="box_Layout">
                    <div className="buttons">
                        <Button onClick={() => history.push('/Employee_Details')}>Employee List</Button>
                        <Button onClick={() => history.push('/Create_Profile')}>Create Profile</Button>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default HomePage;
