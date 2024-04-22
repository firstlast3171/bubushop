import { useState } from "react";
import { Button, Col, Container, InputGroup, Nav, Navbar, Row, Form } from "react-bootstrap";
import { FaBars, FaFacebook, FaFacebookMessenger, FaHeart, FaSearch, FaShoppingCart, FaTelegram, FaUser, FaUserPlus, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Header({title}) {
     const location = useLocation();
     const path = location.pathname;
     const [toggle,setToggle] = useState(false);
     const [search,setSearch] = useState('');

     

     const style = {
          toggle : {
               transform : toggle ? "rotate(90deg)" : "rotate(0deg)",
               transition: "0.5s all"
          }
     }
     const handleToggle = () => {
       if(toggle === false){
          setToggle(true);
       }
       if(toggle === true){
          setToggle(false);
       }
     }

     const onSearch = (e) => {
          e.preventDefault();

          console.log(search);
     }
     return ( 
          <>
               <div className="container-fluid">
          
                    <Row>
                         <Col sm={12} className="text-center border-bottom p-2">
                              <a href="#" className="text-dark mx-2"><FaFacebook size={23} /></a>
                              <a href="#" className="text-dark mx-2"><FaFacebookMessenger size={23} /></a>
                              <a href="#" className="text-dark mx-2"><FaTelegram size={23} /></a>
                              <a href="#" className="text-dark mx-2"><FaYoutube size={23} /></a>
                         </Col>
                         <Col sm={12}>
       
               <Container>
                              <Row>
                                   <Col className="d-none d-md-inline-block">
                                        <Navbar.Brand href="/" className="text-light"><h3 className="border py-1 px-3 rounded bg-dark">B B</h3></Navbar.Brand>
                                   </Col>

                                   <Col className="text-center mt-2">
                                   <Form onSubmit={onSearch}>
                                   <InputGroup className="">
                                   <input
                                        id="searchbox"
                                        className="form-control"
                                        placeholder="Search For Products"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                   />
                                   <button type="submit" id="searchbtn">
                                        <FaSearch size={20} />
                                   </button>
                                   </InputGroup>
                                   </Form>
                                   </Col>

                                   <Col className="mt-2">
                                   <div className="float-right mx-2 ">
                                   <a href="#" className="text-dark"><FaShoppingCart size={25} /></a> 
                                   <span className="position-absolute top-0 start-100 translate-middle badge" style={{ marginLeft: '-3px'}}>1</span>
                                   </div>
                                   <div className="float-right mx-2 ">
                                   <a href="#" className="text-dark"> <FaHeart size={25} /></a> 
                                   <span className="position-absolute top-0 start-100 translate-middle badge" style={{ marginLeft: '-3px' }}>2</span>
                                   </div>
                                 
                                   </Col>
                              </Row>
                              <Row>
                              <Col sm={12}>
                         <Navbar expand="lg" className=''>
               
                         <Navbar.Brand href='/' className='d-md-none text-light'><h3 className="border py-1 px-3 rounded bg-dark">B B</h3></Navbar.Brand>

                         <Navbar.Toggle id='toggle' style={style.toggle} aria-controls='toggleControl' onClick={handleToggle}><FaBars /></Navbar.Toggle>

                         <Navbar.Collapse id='toggleControl'>
                           

                              <Nav className='m-auto'>
                                   <Nav.Link href='/' className={path == "/" ? 'text-danger m-2 rounded px-3' : 'text-dark m-2 rounded px-3'}>Home</Nav.Link>
                                   <Nav.Link href='/about' className={path == "/about" ? 'text-danger m-2 rounded px-3' : 'text-dark m-2 rounded px-3'}>About</Nav.Link>
                                   <Nav.Link href='/login' className='text-dark ms-2 my-2 rounded'>Sign in</Nav.Link>
                                   <Nav.Link href='/register' className='text-dark my-2 rounded'>Sign up</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
            
                      
                  


                         </Navbar>
                              </Col>

                              </Row>
               </Container>
                         </Col>
                    </Row>
               </div>
          </>
      );
}

export default Header;