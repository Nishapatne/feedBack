import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import history from './history';
import { connect } from 'react-redux';
import { fetchProductsSuccess } from '../Action/index';

function Employee_Details(props) {

  console.log("****************Calling API*********************");

  useEffect(() => {
    console.log("===Calling AP2===");
    fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then((result) => {
        props.dispatch(fetchProductsSuccess(result.data));
      }
      );
  })

  return (
    <Container>
      <h1>Employee Details</h1>
      <br/>
      {
        props.addListArray.length
          ?
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {
                props.addListArray.map((dataList, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{dataList.first_name}
                      {dataList.last_name}</td>
                    <td>{dataList.email}</td>
                    <td>{dataList.id}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>

          :
          null
      }
      <Button onClick={() => history.push('/')}>Back to Home</Button>
      {/* //create list of result.data */}
    </Container>
  )
}


const mapStateToProps = state => ({
  addListArray: state.LoginReducer.resultJSONArray
});

export default connect(mapStateToProps)(Employee_Details);
// export default  (Login);


// Phase 2
      //update this result in store result.data
      // how?
      // - create a new json array in store and name it result.data
      // - dispatch result.data to store and update result.data in result.data

      // {
      //   props.addListArray.length
      //     ?
      //     props.addListArray.map((dataList,index) => (
      //       <ul key={index}>
      //         <p>{dataList.id}</p>
      //       </ul>
      //     ))
      //     :
      //     null
      //  }

      // 'http://dummy.restapiexample.com/api/v1/employees'

      // {props.addListArray.length ? props.addListArray[1].employee_name : "I AM empty"}