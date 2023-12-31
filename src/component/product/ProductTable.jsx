import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddProduct from "../dashboard/AddProducts";
import EditProduct from "../dashboard/EditProducts";
import axios from "axios";
import SideBar from "../sidebar";

const head_table = ["Name", "Image", "Description", "Category", "Price", "Stock", "Shopee Link", "Tokopedia Link", "Action"]

export default function ProductTable() {
    const [setOpen, setOpenState] = useState(false);
    const [products, setProducts] = useState([]);
    const [productIdToEdit, setProductIdToEdit] = useState(null); 
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    async function fetchProducts() {
        try {
            const response = await axios.get('http://localhost:5000/api/products/all');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    async function togglePushProduct(productId, isHot_deal) {
        try {
            const response = await axios.patch(`http://localhost:5000/api/products/edit-hot-deal?productId=${productId}`);
            const updatedProducts = products.map((product) => {
                if (product.uuid === productId) {
                    return { ...product, isHot_deal: !isHot_deal };
                }
                return product;
            });
            setProducts(updatedProducts);
            console.log(response.data);
        } catch (error) {
            console.error('Error toggle push:', error);
        }
    }

    const handleDelete = async (productId) => {
        setProductToDelete(productId);
        setDeleteConfirmationOpen(true);
    };

    const confirmDelete = async () => {
        if (productToDelete) {
            try {
                await axios.delete(`http://localhost:5000/api/products/?productId=${productToDelete}`);
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
        setDeleteConfirmationOpen(false);
        setProductToDelete(null);
    };

    const cancelDelete = () => {
        setDeleteConfirmationOpen(false);
        setProductToDelete(null);
    };

    const handleOpenEdit = async (productId) => {
        setOpenState(!setOpen);
        setProductIdToEdit(productId);
        console.log('edit product')
    }

    useEffect(() => {
        fetchProducts();
        console.log(products);
    }, []);

    // console.log(products);

    return (
        <>
            <div className="flex gap-5">
                {/* <SideBar /> */}
                {setOpen == true ? <div className="absolute flex h-auto w-auto z-10"><EditProduct productId={productIdToEdit} /></div> : null}
                <div className="my-5">

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
                                {products.map(({ uuid, category, description, image, name, isHot_deal, price, stock, shopee_link, tokopedia_link }, index) => (
                                    <TableRow key={index}>
                                        <TableCell><div className="h-4 w-4 bg-[#232323] bg-opacity-20 rounded-sm ml-3" /></TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <div>{name}</div>
                                                {/* <div className="font-lato text-xs text-gray-400 font-bold pl-[1px]">{uuid}</div> */}
                                            </div></TableCell>
                                        <TableCell>
                                            {image.length > 0 && (
                                                <img src={image[0]} alt={name} className='w-40 ml-2 mb-2' />
                                                )}
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
                                            <div className="flex flex-col gap-1">
                                                <div className="flex flex-row">
                                                    <Tooltip content="Edit Product" className="bg-green-600 text-white drop-shadow-DashboardShadow">
                                                    <Button className='pl-2 pr-2 pt-1 pb-1' color='green' onClick={() => handleOpenEdit(uuid)}>Edit</Button>
                                                    </Tooltip>
                                                    <Tooltip content="Delete Product" className="bg-red-600 text-white drop-shadow-DashboardShadow">
                                                    <IconButton className='h-6 w-6 ml-1 bg-red-500' onClick={() => handleDelete(uuid)}><BsTrash/></IconButton>
                                                    </Tooltip>
                                                </div>
                                                <div>
                                                    <Tooltip content="Push Product" className="bg-cyan-500 text-white drop-shadow-DashboardShadow">
                                                    <Button
                                                        className={`px-[21px] pt-1 pb-1`}
                                                        onClick={() => togglePushProduct(uuid, isHot_deal)}
                                                        color={isHot_deal ? 'red' : 'cyan'}
                                                        >
                                                        {isHot_deal ? 'Unpush' : 'Push'}
                                                    </Button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteConfirmationOpen}
                onClose={cancelDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        No
                    </Button>
                    <Button onClick={confirmDelete} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}