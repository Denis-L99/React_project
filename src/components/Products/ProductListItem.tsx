import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import "./ProductListItem.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = (props: Props) => {
  return (
    <Card className='product'>
        <CardContent>
            <h4>{props.name}</h4>
            <p className='product-description'>{props.description}</p>
            <div className='product-features'><span>Type: {props.type}</span></div>
            <div className='product-features'><span>Capacity: {props.capacity} Gb</span></div>
            <div className='product-price'>Price: {props.price} $</div>
        </CardContent>
        <CardActions className="btn-wrap">
            <Button variant='outlined'>Add to cart</Button>
        </CardActions>
    </Card>
  )
}

export default ProductListItem