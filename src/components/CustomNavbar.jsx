import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbar,  NavDropdown, Nav, Container} from 'react-bootstrap'
import { users_api } from '../api/api'
import { Link } from 'react-router-dom';
function CustomNavbar() {
  const [users,setUsers ] = useState([]);
  useEffect(()=>{
    axios.get(`${users_api}`).then((res)=>{
      if(res.status === 200){
        setUsers(res.data)
      }
    })
  })
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
              <NavDropdown title="Users" id="basic-nav-dropdown">
                {users.map((item)=>(
                  <NavDropdown.Item key={item.phone}> <Link to={`/userposts/${item.id}`}>{item.name}</Link> </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar