import React from 'react'
import { Form, Button, Card, Container, FormLabel } from 'react-bootstrap';
import history from './history';
import { connect } from 'react-redux';
import { employeeList } from '../Action/index';
import validator from 'validator';
import {v1 as uuid} from "uuid"; 


function Create_Profile(props) {
    return (
        <>
            <Container>
                <Card className="w-100">
                    <Card.Body>
                        <h2 className="text-center mb-4">Create New Profile</h2>

                        <Form onSubmit={(e) => {
                            console.log("test");
                            e.preventDefault();
                            const employee_name = e.target.username.value;
                            const employee_salary = e.target.salary.value;
                            const employee_age = e.target.age.value;
                            const id = e.target.age.value;
                            if (validator.isEmpty(employee_name) && validator.isEmpty(employee_salary) && validator.isEmpty(employee_age)) {
                                alert("Please fill the fields");
                            }
                            else {

                                fetch('http://localhost:5001/employee-eddb0/us-central1/app/api/create', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                                    },
                                    body: JSON.stringify({
                                        id: uuid(),
                                        employee_name: e.target.username.value,
                                        employee_salary: e.target.salary.value,
                                        employee_age: e.target.age.value,
                                    })
                                }).then(
                                    res => res.json()
                                ).then((result) => {
                                    props.dispatch(employeeList({ id, employee_name, employee_salary, employee_age }))
                                })
                                e.target.username.value=""
                                e.target.salary.value=""
                                e.target.age.value=""
                                {history.push('/Employee_Details')}
                            }
                        }}>
                            <Form.Group>
                                <FormLabel>USERNAME</FormLabel>
                                <Form.Control type="text" name="username" />
                            </Form.Group>

                            <Form.Group>
                                <FormLabel>SALARY</FormLabel>
                                <Form.Control type="number" name="salary" />
                            </Form.Group>

                            <Form.Group>
                                <FormLabel>AGE</FormLabel>
                                <Form.Control type="number" name="age" />
                            </Form.Group>
                            <Button className="w-100" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Button className="buttons" onClick={() => history.push('/')}>Back to Home</Button>

            </Container>
        </>
    )
}


const mapStateToProps = state => ({
    newListArray: state.LoginReducer.newListArray
});

export default connect(mapStateToProps)(Create_Profile);


// 'http://dummy.restapiexample.com/api/v1/create'