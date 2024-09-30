// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import useLogout from '../../hooks/useLogout'
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//   let options = [
//     {
//       value: 'Home',
//       path: '/',
//       role: ["admin", "user"]
//     },
//     {
//       value: 'Trainers',
//       path: '/',
//       role: ["admin", "user"]
//     },
//   ]

//   const role = sessionStorage.getItem("role")

//   const logout = useLogout()

//   return <div className='header'>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Navbar.Brand className='p-10'><Link to='/recipes' className='non-link'>DASHBOARD</Link></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         {
//           options.filter((option) => option.role.includes(role)).map((e) => {
//             return <Nav.Item key={e.path} className='mr-10'><Link to={e.path} className='non-link'>{e.value}</Link></Nav.Item>
//           })
//         }
//         <Nav className="me-auto">
//           <NavDropdown title="Classes" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Manage Class</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Timeslot</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.4">Reviews & Ratings</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.5">Payments</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Button variant="dark" className='mr-10' onClick={() => logout()}>Logout</Button>
//       </Navbar.Collapse>
//     </Navbar>
//   </div>
// }

// export default Header