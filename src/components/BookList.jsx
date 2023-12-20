import React from 'react'
import book from '../data/books.json'
import { Row, Col, Container, Form } from "react-bootstrap"
import SingleBook from './SingleBook'


class BookList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {search: ''}

     }
    

    handleInputSearch = (valore) => {
       this.setState({search:valore}) 
    } 
        render() {
            return(
                <Container>
                    <Row>
                {book.fantasy.map((libro) => {
                    return (
                    <SingleBook oggettoProp={book} />
                    )
                })}
            </Row>
        </Container>
                
            )

        }
    
}

export default BookList