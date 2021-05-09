import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import history from './history';
import { fetchProductsSuccess } from '../Action/index';
import { Button } from 'react-bootstrap';



function Employee_Details(props) {
  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then((result) => {
        props.dispatch(fetchProductsSuccess(result.data));
      })
  }, []);

    return (
      <div>
        {
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              props.employeeList.map((dataList, index) => (
                <tr key={index}>
                  <td>{dataList.id}</td>
                  <td>{dataList.employee_name}</td>
                  <td>{dataList.employee_salary}</td>
                  <td>{dataList.employee_age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        }
      <Button onClick={() => history.push('/')}>Back to Home</Button>
      </div>
  )
}

const mapStateToProps = state => ({
  employeeList: state.LoginReducer.resultArray
});

export default connect(mapStateToProps)(Employee_Details);


// 'http://dummy.restapiexample.com/api/v1/employees'

//  'https://reqres.in/api/users?page=2'


