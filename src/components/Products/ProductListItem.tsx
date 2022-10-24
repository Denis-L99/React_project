import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import "./ProductListItem.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductListItem = ({name, description, type, capacity, price, image}: Props) => {
  return (
    <Card className='product'>
        <CardContent>
          <div className='product-image'>
            <img src={image} alt="name" />
          </div>
            <h4>{name}</h4>
            <p className='product-description'>{description}</p>
            <div className='product-features'><span>Type: {type}</span></div>
            <div className='product-features'><span>Capacity: {capacity} Gb</span></div>
            <div className='product-price'>Price: {price} $</div>
        </CardContent>
        <CardActions className="btn-wrap">
            <Button variant='outlined'>Add to cart</Button>
        </CardActions>
    </Card>
  )
}

export default ProductListItem