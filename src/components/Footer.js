import { Col, Navbar, Row } from "react-bootstrap";
import { FaBars, FaFacebook, FaFacebookMessenger, FaHeart, FaSearch, FaShoppingCart, FaTelegram, FaUser, FaUserPlus, FaYoutube } from "react-icons/fa";

function Footer() {
     const date = new Date();
     const year = date.getFullYear();
     return ( 
          <div className="container-fluid">
               <Row style={{backgroundColor:"whitesmoke"}} className="p-4">
                    <Col lg={4} md={12} sm={12} className="">
                    <div className="border shadow-lg p-3 m-3" style={{minHeight:'130px'}}>
                    <Navbar.Brand href="/" className="text-light"><h3 className="border py-1 px-3 rounded bg-dark">B B</h3></Navbar.Brand>
                    <p>© {year} Copyright: BhoneThit </p>
                    </div>
              
                    </Col>
                    <Col lg={4} md={6} sm={12} className="">
                         <div className="border shadow-lg p-3 m-3" style={{minHeight:'130px'}}>
                         <span className="text-muted">Contact us</span>
                         <div className="d-flex mt-3">
                         <a href="#" className="text-dark mx-2 h2"><FaFacebook size={27} /></a>
                         <a href="#" className="text-dark mx-2 h2"><FaFacebookMessenger size={27} /></a>
                         <a href="#" className="text-dark mx-2 h2"><FaTelegram size={27} /></a>
                         <a href="#" className="text-dark mx-2 h2"><FaYoutube size={27} /></a>
                         </div>

                         </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="">
                         <div className="border shadow-lg p-3 m-3" style={{minHeight:'130px'}}>
                         <span className="text-muted">Usefull Link</span>
                         <div className="d-flex mt-3">
                         <a href="/" className="text-dark mx-2 h5">Home</a>
                         <a href="/about" className="text-dark mx-2 h5">About</a>
                         </div>
                         </div>
                    </Col>
               </Row>
          </div>
      );
}

export default Footer;