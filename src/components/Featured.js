import { Col } from "react-bootstrap";

function Featured({items = []}) {
     return ( 
          <>
               {items.length > 0 ? 
               items.map((item)=>
               <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
               <div className="d-flex align-items-center border mb-4">
               <div className="m-auto">
               <h1 className="text-primary text-center text-dark">{item.icon}</h1>
               <h5 className="font-weight-semi-boldtext-center">{item.label}</h5>
               </div>

               </div>

               </div>) 
               : 'No Featured'}
          </>
      );
}

export default Featured;