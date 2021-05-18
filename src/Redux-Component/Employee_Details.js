import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import history from './history';
import { fetchProductsSuccess } from '../Action/index';
import { Button } from 'react-bootstrap';

function Employee_Details(props) {
  useEffect(() => {
    fetch('http://localhost:5001/employee-eddb0/us-central1/app/api/read')
      .then(
        res => res.json())
      .then((result) => {
        console.log("test");
        props.dispatch(fetchProductsSuccess(result));
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
      <Button className="buttons" onClick={() => history.push('/')}>Back to Home</Button>
      </div>
  )
}

const mapStateToProps = state => ({
  employeeList: state.LoginReducer.resultArray
});

export default connect(mapStateToProps)(Employee_Details);


// 'http://dummy.restapiexample.com/api/v1/employees'

//  'https://reqres.in/api/users?page=2'


// 'https://dummy.restapiexample.com/api/v1/employees'

// function Employee_Details() {
//   return (
//     <div>
//       <h1>Hello employee</h1>
//     </div>
//   )
// }

// export default Employee_Details
