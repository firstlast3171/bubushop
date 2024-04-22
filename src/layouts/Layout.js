import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
     return ( 
          <>
          <Header />
          <div className="container-fluid" style={{minHeight:"80vh"}}>
               <Outlet />
          </div>
          <Footer />
          </>
      );
}

export default Layout;