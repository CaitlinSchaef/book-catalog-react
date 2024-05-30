import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { TaskContext } from "./main"
// import { useContext } from "react"

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
            <div className="overflow-scroll" style={{height: "50vh"}}>
              <h1>Login</h1>
              <div>
              <div>Username:</div>
              <input 
                // onChange={(e) => setUsername(e.target.value)}
                // value={username}
              />
              </div>
              <div>
                <div>Password:</div>
                <input 
                  // onChange={(e) => setPassword(e.target.value)}
                  // value={password}
                />
              </div>
             <br />
                <button>New User? Create Account</button>
            </div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}




function App() {

  return (
    <>
      <Body />
    </>
  )
}

export default App
