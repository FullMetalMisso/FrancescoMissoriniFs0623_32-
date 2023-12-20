import React from "react";
import book from '../data/books.json'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap"

function SingleBook (props) {
    return(
        <Col key={props.asin} xs={12} sm={6} md={3}>
                            <Card>
                                <Card.Img variant="top" className="dimensioni" src={props.img}/>
                                <Card.Body>
                                    <Card.Title>{props.title}</Card.Title>
                                    <Card.Text>{props.price}</Card.Text>
                                    <Card.Text>Categoria: {props.category}</Card.Text>
                                    <Card.Text>Prezzo: {props.price}</Card.Text>   
                                </Card.Body>
                            </Card>
                        </Col>
    )
}
export default SingleBook