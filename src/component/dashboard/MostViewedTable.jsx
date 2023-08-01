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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const head_table = ["Product Name", "Price", "Stock", "External Link", "Action"]

const body_table = [
  {
    name: 'Verdant Bloom Box',
    price: 55000,
    stock: 192,
    external_link : 'http://tokopedia.com',
    photo: 'src/assets/product1.png'
  },
  {
    name: 'Greenery Gift Box',
    price: 48000,
    stock: 213,
    external_link : 'http://shopee.com',
    photo: 'src/assets/product2.png'
  },
  {
    name: 'Greenery Gift Box',
    price: 48000,
    stock: 213,
    external_link : 'http://shopee.com',
    photo: 'src/assets/product2.png'
  },
];

export default function MostViewedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 725 }} aria-label="simple table">
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
          {body_table.map(({ name, price, stock, external_link, photo }, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className='flex flex-row items-center'>
                  <img src={photo} className='w-12 mr-2'/>
                  {name}
                </div>
              </TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{stock}</TableCell>
              <TableCell>{external_link}</TableCell>
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
  );
}
