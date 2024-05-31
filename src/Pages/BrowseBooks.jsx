import { useState, useContext, useEffect } from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AuthContext } from '../authContext'
import axios from 'axios'
import { fetchBooks } from '../api'


// function filterDisplay({ display }) {
//   setDisplay()
// }

const Body = () => {
  const { auth } = useContext(AuthContext)
  const [display, setDisplay] = useState('')
  const [bookItems, setBookItems] = useState([])

  useEffect(() => {getBooks()},[])


  function getBooks(){
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/books/',
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }).then(response => {
      console.log("bookList: ", response.data)
      setBookItems(response.data)
      console.log('BOOKITEMS:, ', bookItems)
  }).catch(error => console.log('ERROR: ', error))
  }

  const InitialDisplay = ({ setDisplay, bookItems }) => {
    return(
      <div>
        <Row className="justify-content-around g-4">
          setDisplay = {bookItems}
        </Row>
      </div>
    )
  }

  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    minBreakpoint="xs"
    >
      <Container>
        <Row className="justify-content-center m-3">
          <Col xs={12} md={8} className="d-flex flex-column justify-content-between text-center MainBody">
            <div className="overflow-scroll" style={{height: "50vh"}}>
              <h1>Browse Books:</h1>
              <div>
              <div>Search:</div>
              {/* <input 
                onChange={(e) => filterDisplay(e.target.value)}
                value={}
              /> */}
              </div>
              <div style={{ marginTop: 20 }}>
                {/* <button onClick={() => filterDisplay()}>Submit</button> */}
               {display === <InitialDisplay />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}



function BrowseBooks() {
    return (
      <div className="p-5">
        <Body />
      </div>
    )
  }
  
  
  export default BrowseBooks