import { Carousel, Container } from 'react-bootstrap';

function Carousel_Custom({items = []}) {

     return ( 
          <Container className='p-5'>

                <Carousel interval={3000} indicators={false}>
                {items.length > 0 ? items.map((item,index)=>
                  <Carousel.Item key={index}>
      
      <div style={{ backgroundImage: `url('${item.image}')`, height: "500px", backgroundSize: "cover" }} className='d-flex flex-column align-items-center justify-content-center'>
        <h2 className='text-light'>{item.title}</h2>
        <a href={item.link} className='btn btn-light'>Explore Now</a>
      </div>
    </Carousel.Item>
                ) :
              <Carousel.Item>
      
      <div style={{ backgroundImage: "url('bags.jpg')", height: "500px", backgroundSize: "cover" }} className='d-flex flex-column align-items-center justify-content-center'>
        <h2 className='text-light'>Bags</h2>
        <a href='#' className='btn btn-light'>Explore Now</a>
      </div>
    </Carousel.Item>}
   
      {/* <Carousel.Item>
      <div style={{ backgroundImage: "url('clothes.jpg')", height: "500px", backgroundSize: "cover" }} className='d-flex flex-column align-items-center justify-content-center'>
      <h2 className='text-light'>Clothes</h2>
      <a href='#' className='btn btn-light'>Explore Now</a>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ backgroundImage: "url('cosmetics.jpg')", height: "500px", backgroundSize: "cover" }} className='d-flex flex-column align-items-center justify-content-center'>
      <h2 className='text-light'>Cosmetics</h2>
      <a href='#' className='btn btn-light'>Explore Now</a>
      </div>
      </Carousel.Item> */}
   
    </Carousel>
          </Container>
      );
}

export default Carousel_Custom;