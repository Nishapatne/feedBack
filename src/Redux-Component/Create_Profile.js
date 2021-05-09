import React from 'react'
import { Button, Container } from 'react-bootstrap';
import history from './history';
import { connect } from 'react-redux';
import { employeeList } from '../Action/index';
import validator from 'validator';

function Create_Profile(props) {
    return (
        <Container>
            <h1>Create New Profile</h1>
            <form onSubmit={(e) => {
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

                    //Temp Code should be on suceess but as bcoz of cors its not getting success hence storing only in local
                    props.dispatch(employeeList({ employee_name, employee_salary, employee_age }))

                    fetch('http://dummy.restapiexample.com/api/v1/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                        },
                        body: JSON.stringify({
                            id: '12345',
                            employee_name: e.target.username.value,
                            employee_salary: e.target.salary.value,
                            employee_age: e.target.age.value,
                        })
                    }).then(
                        res => res.json()
                    ).then((result) => {
                        props.dispatch(employeeList({ id,employee_name, employee_salary, employee_age }))
                    })
                    // e.target.username.value = '';
                    // e.target.salary.value = '';
                    // e.target.age.value = '';

                    // {"id":15,"employee_name":"Tatyana Fitzpatrick","employee_salary":385750,"employee_age":19}
                }

            }}>
                <p>
                    <label>USERNAME:</label>
                    <input type="text"
                        name="username" />
                    <br /><br />
                    <label>SALARY:</label>
                    <input type="number"
                        name="salary" />
                    <br /><br />
                    <label>Age</label>
                    <input type="number"
                        name="age" />
                </p>
                <button>Submit</button>
            </form>
            <Button onClick={() => history.push('/')}>Back to Home</Button>
        </Container>

    )
}


const mapStateToProps = state => ({
    newListArray: state.LoginReducer.newListArray
});

export default connect(mapStateToProps)(Create_Profile);




