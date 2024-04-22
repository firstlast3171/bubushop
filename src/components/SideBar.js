import { Col, Row } from "react-bootstrap";

function SideBar({ className, items = [], title }) {
  return (
    <Row className={`py-4 ${className}`}>
      <Col className="p-1 mx-3">
        <h2 className="text-danger mb-4">{title ? title : "Categories"}</h2>
        <div className="bg-light border rounded p-3">
          {items.length > 0 ? (
            <ul className="list-unstyled">
              {items.map((item, index) => (
                <li key={index} className="border-bottom py-2">
                  <a href={`#${item}`} className="text-decoration-none text-danger">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No Categories</p>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default SideBar;
// <!-- Featured End -->