import React, { useState } from "react";
import { Grid2, Paper, Typography, TextField, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [newproduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleAdd = (e)=>{
    e.preventDefault()
    fetch("http://localhost:5000/products",{
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(newproduct)
    })
    .then(()=>{
        alert("Data Added Succesfully")
        setNewProduct({
            title: "",
            price: 500,
            description:
              "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
              rate: 0,
              count: 0,
            },
          })
    })

  }
 
  let handleChange = (e)=>{
    let {value,name}= e.target
    let fieldname = name.split('rating.')[1]

    if(name.includes("rating.")){
        setNewProduct({
            ...newproduct,
            rating:{
                ...newproduct.rating,
                [fieldname]:value
            }
        })

    }
    else{
        setNewProduct({...newproduct,[name]:value})

    }

  }
  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center">
        Create New Product
      </Typography>
      <Grid2 component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleAdd}>
        <TextField
          value={newproduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newproduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              value={newproduct.rating.rate}
              name="rating.rate"
              label="Rate"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              value={newproduct.rating.count}
              name="rating.count"
              label="Count"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
        <Button type="submit"  variant="contained" fullWidth>
          Add
        </Button>
      </Grid2>
    </Paper>
  );
};

export default NewProduct;
