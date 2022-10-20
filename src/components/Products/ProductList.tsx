import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'


type Props = {
}

const ProductList = (props: Props) => {
  return (
    <>
        <Typography 
        align='center' 
        variant='h4'
        sx={{
            margin: '25px 0',
            textTransform: 'uppercase',
        }}>
            ProductList
        </Typography>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
         spacing={4}
        >
            <Grid item xs={12} sm={6} md={4}>
                <ProductListItem 
                name='IPhone X' 
                description='Something about phone' 
                type='phone' 
                capacity={64} 
                price={500}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ProductListItem
                name='IPhone 11 Pro' 
                description='Something about phone' 
                type='phone' 
                capacity={128} 
                price={900}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ProductListItem
                name='IPhone 12 Pro' 
                description='Something about phone' 
                type='phone' 
                capacity={256} 
                price={1500}/>
            </Grid>

        </Grid>
    </>
  )
}

export default ProductList