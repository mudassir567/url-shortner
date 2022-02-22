// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// import React from 'react'
// import {Button,Table,Form} from 'react-bootstrap';
// import {useState} from 'react'
// import axios from 'axios'

// const Urlshort=()=> {

//   const [full, setFull] = useState("");
//   const addUrls=()=>{
//       console.log("hello "+full)
//       axios.post("http://localhost:7000/url",{
//         full:full
//       }
//       )
      
//   }


//   return (
//   <>
//     <div className='container'>
//       <Form>
        
//             <Form.Control 
//              type="text" 
//              onChange={(event)=>{
//               setFull(event.target.value) }
//              }
//              placeholder="enter your URL " />
//           <br /> 
//           <Button   variant="outline-light"
//           onClick={addUrls}
          
//           >click it</Button>{' '}
//       </Form>
//     </div>

//   <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Username</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td colSpan={2}>Larry the Bird</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </Table>

// </>
//   )
// }

// export default Urlshort