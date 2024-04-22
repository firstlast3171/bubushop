import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import Carousel_Custom from "../components/Carousel_Custom";
import Featured from "../components/Featured";
import { FaCar, FaCheck, FaExchangeAlt, FaPhone } from "react-icons/fa";
import MainProduct from "../components/MainProduct";

function Home() {
     const carousel_item = [
          {
               image : 'bags.jpg',
               title : 'Bags',
               link : '#'
          },
          {
               image : 'cosmetics.jpg',
               title : 'Cosmetics',
               link : '#'         
          },
          {
               image : 'clothes.jpg',
               title : 'Clothes',
               link : '#'
          }
     ]
     const categories = ['Nike','Adidas','Tommy Hilfiger','CoverGirl','NARS','Chanel','Gucci'];

     const featured_item = [
          {
               label : "Quality Product",
               icon : <FaCheck />
          },
          {
               label : "Free Shipping",
               icon : <FaCar />
          },
          {
               label : "14-Day Return",
               icon : <FaExchangeAlt />
          },
          {
               label : "24/7 Support",
               icon : <FaPhone />
          },
     ]
     const main_product_items = [
          {
               count : 8,
               image : 'bags.jpg',
               link : '#',
               title : 'Bags'
          },
          {
               count : 12,
               image : 'clothes.jpg',
               link : '#',
               title : 'Clothes'
          },
          {
               count : 8,
               image : 'cosmetics.jpg',
               link : '#',
               title : 'Cosmetics'
          }
     ]
     return ( 
          <>
               <Row>
                    <Col xs={4} className="d-none d-sm-inline-block">
                         <SideBar className='' items={categories} title={'Brand'} />
                    </Col>
                    <Col xs={12} sm={8}>
                         <Carousel_Custom items={carousel_item} />
                    </Col>
               </Row>
               <Row className="my-3">
                    <Featured items={featured_item} />
               </Row>
               <Row className="my-3">
                    <MainProduct md={12} lg={4} items={main_product_items} />
               </Row>
          </>
      );
}

export default Home;