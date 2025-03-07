import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { removeItem } from '../store/cartSlice';

const WishList = () => {
    let cartProducts = useSelector((state)=>{return state.cart})

    console.log(cartProducts)

    const dispatch = useDispatch()
    let handleDelete= (reduxItemId) =>{
        dispatch(removeItem(reduxItemId))
    }

  return (
    <div>
   
    {cartProducts.length !==0 ? (

    <section className='products'>
      {cartProducts.map( (product) => (
        <Card style={{ width: '18rem' ,height:"26rem"}} key={product.id} className='product'>
        <center>

        <Card.Img variant="top" src={product.image} style={{width:'9rem',height:"12rem"}}/>
        <Card.Body className='body'>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          ${product.price}
          </Card.Text>

        </Card.Body>
        <Card.Footer style={{display:"flex", justifyContent:"space-evenly", allignitems:"center"}} className='footer'>
          <Button variant="danger" onClick={()=> handleDelete(product.id)}><MdDelete /></Button>
        </Card.Footer>
        </center>
      </Card>
      ))
      }
    </section>
    ): 
    <div>
      <h2>Please purchase something</h2>
    </div>
}
   
  </div>
  )
}

export default WishList