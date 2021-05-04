import React from 'react'
import { Container, Button } from 'react-bootstrap';
import history from './history';

function Header() {
    return (
        <>
            <Container>
                <div className="logo">
                    <img src="https://crewapps.crewpl.com/employeePortal/resources/images/logo.png;jsessionid=VmYHg3eqbez83IfWAT6i4bG2.cplempapp01-prd"></img>
                </div>
                <div className="box_Layout">
                    <div className="buttons">
                        <Button onClick={() => history.push('/Login')}>Create Profile</Button>
                        <Button onClick={() => history.push('/Updateprofile')}>Update Profile</Button>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default Header;
