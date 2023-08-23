import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
// import ProductTable from "./ProductTable";
import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";


export default function EditProduct({ productId }) {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [open, setOpen] = useState(false);
    const [dropdownitem, setItem] = useState('New');
    const [product, setProduct] = useState();

    async function fetchProducts() {
        try {
            const response = await axios.get(`http://localhost:5000/products/id/${productId}`);
            setProduct(response.data)
            console.log(productId);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
        console.log(product);

    }, []);



    const createProductImage = (e) => {
        const files = Array.from(e.target.files);
        setImages([]);
        setImagesPreview([]);
        files.forEach((file) => {
            const imgread = new FileReader();
            imgread.onload = () => {
                if (imgread.readyState === 2) {
                    setImagesPreview([...imagesPreview, imgread.result]);
                    setImages([...images, imgread.result])
                }
            };
            imgread.readAsDataURL(file);
        });
    }

    return (
        <>
            <div className="flex flex-col h-[100%] bg-white rounded-lg shadow-xl outline-none z-10 pt-5 pl-6 pr-3 pb-2">
                {/** TITLE */}
                <head className="flex justify-between mb-2">
                    <div className="mt-1 font-bold text-lg font-lato text-black">Edit Product</div>
                </head>

                {/** MAIN FORM */}
                <main className="flex flex-row mt-1 gap-10 mr-2">
                    <div className="flex flex-col">

                        {/** INPUT FORM IMAGE */}
                        <section id="input-image-div">
                            <p className="mb-1 ">Image</p>
                            <div id="select-picture" className="flex w-[170px]">
                                <input type="file" className="text-xs font-lato font-bold"
                                    onChange={createProductImage} />
                            </div>
                            <div id="createProductFormImage" className={`flex flex-row w-[200px]  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pb-1 gap-2
                            ${images.length > 0 ? 'h-[60px] mt-2 mb-2 overflow-y-auto' : 'h-0'}`}>
                                {imagesPreview.map((image, index) => (
                                    <img key={index} src={image} className="h-[100%]" />
                                ))}
                            </div>
                        </section>


                        {/** INPUT FORM GROUP 1 */}
                        <section id="input-field-details-1" className="flex flex-col gap-2">

                            {/** NAME */}
                            <div id="product-name">
                                <p className="text-gray-500 font-lato font-bold">Product Name : </p>
                                <input value={product.name} placeholder="Enter Name Here" className="placeholder-black"
                                    rounded-4 style={{ width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                            </div>

                            {/** TYPE */}
                            <div id="type" className="flex flex-col">
                                <p className="text-gray-500 font-lato font-bold">Product Type</p>
                                {/** Drop Down Menu Item */}
                                {open && <div className="absolute mt-[50px] bg-[#f6f6f6] rounded-md divide-y-2 drop-shadow-DashboardShadow">
                                    <div className="flex flex-col font-lato h-16 w-auto pr-3 items-start overflow-y-auto scrollbar-thumb-gray-600 scrollbar-track-gray-100 scrollbar-thin">
                                        <button onClick={() => { setItem('Other'); setOpen(false); console.log(images) }}>New Type</button>
                                        <button onClick={() => { setItem('Menu1'); setOpen(false) }}>Gift Box</button>
                                        <button onClick={() => { setItem('Menu2'); setOpen(false) }}>Ribbon</button>
                                    </div>
                                </div>}
                                {/** If selected other on drop down it will make an text field to type a 'New Product Type' */}
                                <div className="flex flex-row items-center">
                                    {dropdownitem === 'New' && <Typography variant="h6" className="text-black font-lato">Select Type</Typography>}
                                    {dropdownitem === 'Menu1' && <Typography variant="h6" className="text-black font-lato">Gift Box</Typography>}
                                    {dropdownitem === 'Menu2' && <Typography variant="h6" className="text-black font-lato">Ribbon</Typography>}
                                    {dropdownitem === 'Other' && <input placeholder="Enter Type" className="placeholder-black"
                                        rounded-4 style={{ width: "80px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />}
                                    {/** Drop Down Menu Button */}
                                    <AiFillCaretDown onClick={() => setOpen(!open)} className="self-center ml-1" />
                                </div>
                            </div>
                        </section>
                        {/** DESKRIPSI
                     * notes: [ INI UNTUK POSITIONING APABILA IMAGE BELUM DI INPUT ] */}
                        {images.length > 0 ? null :
                            <section id="input-deskripsi">
                                <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                                <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]"
                                    rounded-4 style={{ width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                            </section>
                        }
                    </div>


                    {/** INPUT FORM GROUP 2 */}
                    <div id="input-field-details-2" className="flex flex-col font-lato gap-2">

                        {/** PRICE */}
                        <form id="price" className="flex flex-col">
                            <p className="text-gray-500 font-lato font-bold ">Product Price</p>
                            <form className="flex flex-row">
                                <p className="text-black font-lato font-bold mr-1">Rp.</p>
                                <input placeholder="0" type="number" className="placeholder-black"
                                    rounded-4 style={{ width: "80px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                            </form>
                        </form>
                        {/** STOCK */}
                        <form id="stock" className="flex flex-col">
                            <p className="text-gray-500 font-lato font-bold mr-[20px]">Product Stock</p>
                            <input placeholder="Enter Total Stock" type="number" className="placeholder-black"
                                rounded-4 style={{ width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                        </form>
                        {/** LINK SHOPEE */}
                        <form id="shopee-link">
                            <p className="text-gray-500 font-lato font-bold">Shopee link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black"
                                rounded-4 style={{ width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                        </form>
                        {/** LINK TOKOPEDIA */}
                        <form id="tokopedia-link">
                            <p className="text-gray-500 font-lato font-bold mt-[2px]">Tokopedia Link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black"
                                rounded-4 style={{ width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                        </form>
                    </div>
                </main>

                {/** DESKRIPSI
             * notes: [ INI UNTUK POSITIONING APABILA IMAGE SUDAH DI INPUT ] */}
                {images.length > 0 ?
                    <section id="input-deskripsi">
                        <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                        <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]"
                            rounded-4 style={{ width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black" }} />
                    </section> : null}
                <div className="grow"></div>

                {/** BUTTON ADD PRODUCT */}
                <footer id="input-deskripsi" className={`grid place-content-center content-end mr-5 ${images.length > 0 ? 'mb-3' : 'mb-10'}`}>
                    <Button className="pt-2 pb-2 pr-5 pl-5 rounded-xl">Add Product</Button>
                </footer>
            </div>
        </>
    );
}