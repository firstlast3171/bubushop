import { Col } from "react-bootstrap";

function MainProduct({items = [],xs,sm,md,lg,xl}) {
     return ( 
          <>
               {items.length > 0 ? items.map((item,index)=>
               <Col key={index} xs={xs} sm={sm} md={md} lg={lg} xl={xl} className="text-center p-2">
               <div className="border p-2">
               <p className="text-right">{item.count} Products</p>
              <a href={item.link} className=""><img src={item.image} id="imagescale" width={300} height={350} /></a>
               <h3 className="text-left my-2">{item.title}</h3>
               </div>
               
               </Col>) : "No Item"}
          </>
      );
}

export default MainProduct;