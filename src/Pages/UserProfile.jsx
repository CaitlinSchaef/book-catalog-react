import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// make a body const

const Body = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
      <Container>
        <Row className="justify-content-center m-3">
          <Col xs={12} md={8} className="d-flex flex-column justify-content-between text-center MainBody">
            <div className="overflow-scroll" style={{height: "75vh"}}>
              <h1>Dashboard</h1>
              <h3>User Data</h3>
              <button>Favorites List</button>
              <button>To Be Read List</button>
            </div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}


function UserProfile() {
    return (
      <div className="p-5">
        <Body />
      </div>
    )
  }
  
  
  export default UserProfile