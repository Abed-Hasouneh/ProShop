import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link, useParams } from 'react-router-dom'
import products from '../assets/data/products'

const ProductScreen = () => {
    const { id }= useParams()
    const product = products.find(p=>id===p._id)
  return (
    <>
        <Link className='btn btn-light my-3' to="/">Go Back</Link>
        <Row>
            <Col md={6}>
            
            </Col>
            <Col md={3}>
            
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen