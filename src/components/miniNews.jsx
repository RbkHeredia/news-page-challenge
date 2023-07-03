import { Col, Row } from "react-bootstrap";

export default function MiniNews({photo, num, title, text}){
  return(
    <>
      <Col  sm={12} lg={4}>
        <Row >
        <Col xs={4} lg={4} >
          <img src={photo} style={{maxWidth:'100%'}} alt=''/>
        </Col>
        <Col sm={9} lg={6} style={{width:'60%'}}>
          <h4 style={{fontSize:'2rem', fontWeight:700, color:'grey'}}>{num}</h4>
          <h5 style={{fontWeight:700, color:'black'}} >{title}</h5>
          <p style={{fontSize:'0.8rem', color:'grey'}}>{text}</p>
          <br/>
          <br/>
        </Col>
        </Row>
      </Col>
    </>
  )
}