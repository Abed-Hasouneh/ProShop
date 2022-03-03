import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'

import products from '../assets/data/products'



const HomeScreen = () => {
  return (
    <>
    <h1>latest products</h1>
    <Row>
        {products.map((product)=>(
            <Col sm={12} md={6} lg={4} xlg={3} key={product._id}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen