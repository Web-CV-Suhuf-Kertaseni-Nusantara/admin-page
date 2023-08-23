import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import AddProduct from "../dashboard/AddProducts";
import EditProducts from "../dashboard/EditProducts";
import axios from "axios";

const head_table = ["Name", "Image", "Description", "Category", "Price", "Stock", "Shopee Link", "Tokopedia Link", "Action"]

const body_table = [
    {
        product_id: 'G00001',
        type: 'Gift Box',
        name: 'Verdant Bloom Box',
        price: 55000,
        stock: 192,
        external_link: 'http://tokopedia.com',
        photo: 'src/assets/product1.png'
    },
    {
        type: 'Gift Box',
        product_id: 'G00002',
        name: 'Greenery Gift Box',
        price: 48000,
        stock: 213,
        external_link: 'http://shopee.com',
        photo: 'src/assets/product2.png'
    },
    {
        product_id: 'G00003',
        type: 'Gift Box',
        name: 'Verdant Bloom Box',
        price: 55000,
        stock: 192,
        external_link: 'http://tokopedia.com',
        photo: 'src/assets/product1.png'
    },
    {
        product_id: 'G00004',
        type: 'Gift Box',
        name: 'Greenery Gift Box',
        price: 48000,
        stock: 213,
        external_link: 'http://shopee.com',
        photo: 'src/assets/product2.png'
    },
    {
        product_id: 'G00005',
        type: 'Gift Box',
        name: 'Verdant Bloom Box',
        price: 55000,
        stock: 192,
        external_link: 'http://tokopedia.com',
        photo: 'src/assets/product1.png'
    },
    {
        type: 'Gift Box',
        product_id: 'G00006',
        name: 'Greenery Gift Box',
        price: 48000,
        stock: 213,
        external_link: 'http://shopee.com',
        photo: 'src/assets/product2.png'
    },
    {
        product_id: 'G00007',
        type: 'Gift Box',
        name: 'Verdant Bloom Box',
        price: 55000,
        stock: 192,
        external_link: 'http://tokopedia.com',
        photo: 'src/assets/product1.png'
    },
    {
        product_id: 'G00008',
        type: 'Gift Box',
        name: 'Greenery Gift Box',
        price: 48000,
        stock: 213,
        external_link: 'http://shopee.com',
        photo: 'src/assets/product2.png'
    },
    {
        product_id: 'G00009',
        type: 'Gift Box',
        name: 'Verdant Bloom Box',
        price: 55000,
        stock: 192,
        external_link: 'http://tokopedia.com',
        photo: 'src/assets/product1.png'
    },
    {
        product_id: 'G00010',
        type: 'Gift Box',
        name: 'Greenery Gift Box',
        price: 48000,
        stock: 213,
        external_link: 'http://shopee.com',
        photo: 'src/assets/product2.png'
    },
];


export default function ProductTable() {
    const [open, setOpenState] = useState(false);
    const [products, setProducts] = useState([]);
    const [idEdit, setIdEdit] = useState();

    async function fetchProducts() {
        try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleOpenEdit = async (productId) => {
        setOpenState(!open)
        setIdEdit(productId);
    }

    useEffect(() => {
        fetchProducts();
        console.log(products);
    }, []);

    // console.log(products);

    return (
        <>
            {open == true ? <div className="absolute flex h-auto w-auto z-10"><AddProduct /></div> : null}
            {open == true ? <div className="absolute flex h-auto w-auto z-10"><EditProducts productId={idEdit} /></div> : null}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 725 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className="bg-green-500 items-center self-center">
                            <TableCell><div className="h-4 w-4 bg-[#ffffff] rounded-sm ml-3 mb-2 mt-2" /></TableCell>
                            {head_table.map((head) => (
                                <TableCell key={head} padding='normal'>
                                    <Typography className="font-lato font-bold text-base text-white ml-3 mb-2 mt-2">{head}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(({ uuid, category, description, image, name, price, stock, shopee_link, tokopedia_link }, index) => (
                            <TableRow key={index}>
                                <TableCell><div className="h-4 w-4 bg-[#232323] bg-opacity-20 rounded-sm ml-3" /></TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <div>{name}</div>
                                        {/* <div className="font-lato text-xs text-gray-400 font-bold pl-[1px]">{uuid}</div> */}
                                    </div></TableCell>
                                <TableCell>
                                    <img src={image} className='w-12 ml-2' />
                                </TableCell>
                                <TableCell>
                                    <div className='flex flex-row items-center'>
                                        {description}
                                    </div>
                                </TableCell>
                                <TableCell><div className="ml-2">{category}</div></TableCell>
                                <TableCell><div className="ml-2">{price}</div></TableCell>
                                <TableCell><div className="ml-4">{stock}</div></TableCell>
                                <TableCell>{shopee_link}</TableCell>
                                <TableCell>{tokopedia_link}</TableCell>
                                <TableCell>
                                    <div className="flex gap-5">
                                        <Tooltip content="Edit Product" className="bg-green-600 text-white drop-shadow-DashboardShadow">
                                            <Button className='pl-2 pr-2 pt-1 pb-1' onClick={() => handleOpenEdit(uuid)} color='green'>Edit</Button>
                                        </Tooltip>
                                        <button onClick={() => handleDelete(uuid)}>
                                            <Tooltip content="Delete Product" className="bg-red-600 text-white drop-shadow-DashboardShadow">
                                                <IconButton className='h-6 w-6 ml-1 bg-red-500'><BsTrash /></IconButton>
                                            </Tooltip>
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}