import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip, Button, IconButton } from '@material-tailwind/react';
import { BsTrash } from 'react-icons/bs';
import { Typography, Card } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";


const head_table = ["Product Name", "Price", "Stock", "External Link", "Action"]

export default function MostViewedProduct() {
  const [products, setProducts] = useState([]);

  async function fetchMostViewedProducts() {
    try {
        const response = await axios.get('http://localhost:5000/api/products/most-viewed');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchMostViewedProducts();
    console.log(products);
  }, []);

  return (
    <>
      <Card className="p-5 bg-white rounded-xl drop-shadow-DashboardShadow w-[715px] 3xl:w-[970px]">
        <Typography className="font-normal mb-2" variant='h6'>Most Viewed Products</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 675 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {head_table.map((head) => (
                    <TableCell key={head} padding='normal'>
                      {head}
                    </TableCell>
                  
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(({ name, price, stock, shopee_link, image }, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className='flex flex-row items-center'>
                      {image.length > 0 && (
                        <img src={image[0]} alt={name} className='w-12 mr-2' />
                      )}
                      {name}
                    </div>
                  </TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{stock}</TableCell>
                  <TableCell>{shopee_link}</TableCell>
                  <TableCell>
                    <Tooltip content="Edit Product" className="bg-green-600 text-white drop-shadow-DashboardShadow">
                      <Button className='pl-2 pr-2 pt-1 pb-1' color='green'>Edit</Button>
                    </Tooltip>
                    <Tooltip content="Delete Product" className="bg-red-600 text-white drop-shadow-DashboardShadow">
                      <IconButton className='h-6 w-6 ml-1 bg-red-500'><BsTrash/></IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
