import { Container } from "react-bootstrap";

function Nopage() {
     return ( 
          <>
               <Container className="" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"}}>
                    <h1 className="text-muted text-center">404 No Found</h1>
               </Container>
          </>
      );
}

export default Nopage;