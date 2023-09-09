import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
// import ProductTable from "./ProductTable";
import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"; 

export default function AddProduct() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("New");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [shopeeLink, setShopeeLink] = useState("");
    const [tokopediaLink, setTokopediaLink] = useState("");
    const [ images, setImages ] = useState([]);
    const [ imagesPreview, setImagesPreview ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ dropdownitem, setItem ] = useState('New');

    const createProductImage = (e) => {
        const files = Array.from(e.target.files);
        setImages([]);
        setImagesPreview([]);
        files.forEach((file) => {
            setImagesPreview([...imagesPreview, URL.createObjectURL(file)]);
            setImages([...images, file]);
        });
    };

    const handleAddProductClick = async (e) => {
        e.preventDefault(); 
        
        const formData = new FormData();
        images.forEach((image) => {
            formData.append("images", image);
        });
        formData.append("name", name);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("stock", stock);
        formData.append("shopee_link", shopeeLink);
        formData.append("tokopedia_link", tokopediaLink);

        const formDataName = formData.get("name");
        const formDataCategory = formData.get("category");
        const formDataImages = formData.getAll("images");
        const formDataPrice = formData.get("price");
        const formDataDescription = formData.get("description");
        const formDataStock = formData.get("stock");
        const formDataShopeeLink = formData.get("shopee_link");
        const formDataTokopediaLink = formData.get("tokopedia_link");

        console.log("Form Data - Name:", formDataName);
        console.log("Form Data - Category:", formDataCategory);
        console.log("Form Data - Images:", formDataImages);
        console.log("Form Data - Price:", formDataPrice);
        console.log("Form Data - Description:", formDataDescription);
        console.log("Form Data - Stock:", formDataStock);
        console.log("Form Data - Shopee Link:", formDataShopeeLink);
        console.log("Form Data - Tokopedia Link:", formDataTokopediaLink);
        
        try {
            const response = await axios.post("http://localhost:5000/api/products", formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
            },
            });
            if (response.status === 200) {
                toast.success("Product added successfully!", { autoClose: 3000 });
                console.log(response.data);

                // Reset form fields after success
                setName("");
                setCategory("New");
                setPrice("");
                setDescription("");
                setStock("");
                setShopeeLink("");
                setTokopediaLink("");
                setImages([]);
                setImagesPreview([]);
            } else {
                toast.error("Failed to add product. Please try again.");
                console.error("Error response:", response.data);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

return (
    <>
        <form onSubmit={handleAddProductClick}>
            <div className="flex flex-col h-[100%] bg-white rounded-lg shadow-xl outline-none z-10 pt-5 pl-6 pr-3 pb-2">
                
                {/** TITLE */}
                <head className="flex justify-between mb-2">
                    <div className="mt-1 font-bold text-lg font-lato text-black">Add Product</div>
                </head>

                {/** MAIN FORM */}
                <main className="flex flex-row mt-1 gap-10 mr-2">
                    <div className="flex flex-col">
                        
                        {/** INPUT FORM IMAGE */}
                        <section id="input-image-div">
                            <p className="mb-1 ">Image</p>
                            <div id="select-picture" className="flex w-[170px]">
                                <input type="file" className="text-xs font-lato font-bold"
                                    onChange={createProductImage}/>
                            </div>
                            <div id="createProductFormImage" className={`flex flex-row w-[200px]  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pb-1 gap-2
                                ${images.length > 0 ? 'h-[60px] mt-2 mb-2 overflow-y-auto' : 'h-0'}`}>
                                {imagesPreview.map((image, index) => (
                                    <img key={index} src={image} className="h-[100%]"/>
                                    ))}
                            </div>
                        </section>

                        {/** INPUT FORM GROUP 1 */}
                        <section id="input-field-details-1" className="flex flex-col gap-2">

                            {/** NAME */}
                            <div id="product-name">
                                <p className="text-gray-500 font-lato font-bold">Product Name</p>
                                <input 
                                    type="text"
                                    className="input placeholder-black"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Name Here"
                                    rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}/>
                            </div>

                            {/** TYPE */}
                            <div id="type" className="flex flex-col">
                                <p className="text-gray-500 font-lato font-bold">Product Type</p>
                                {/** Drop Down Menu Item */}
                                {open && <div className="absolute mt-[50px] bg-[#f6f6f6] rounded-md divide-y-2 drop-shadow-DashboardShadow">
                                    <div className="flex flex-col font-lato h-16 w-auto pr-3 items-start overflow-y-auto scrollbar-thumb-gray-600 scrollbar-track-gray-100 scrollbar-thin">
                                        <button onClick={() => {setCategory('Other'); setItem('Other'); setOpen(false); console.log(images)}}>New Type</button>
                                        <button onClick={() => {setCategory('Gift Box'); setItem('Menu1'); setOpen(false)}}>Gift Box</button>
                                        <button onClick={() => {setCategory('Ribbon'); setItem('Menu2'); setOpen(false)}}>Ribbon</button>
                                    </div>
                                </div>}
                                {/** If selected other on drop down it will make an text field to type a 'New Product Type' */}
                                <div className="flex flex-row items-center">
                                    {dropdownitem === 'New' && <Typography variant="h6" className="text-black font-lato">Select Type</Typography>}
                                    {dropdownitem === 'Menu1' && <Typography variant="h6" className="text-black font-lato">Gift Box</Typography>}
                                    {dropdownitem === 'Menu2' && <Typography variant="h6" className="text-black font-lato">Ribbon</Typography>}
                                    {dropdownitem === 'Other' && <input placeholder="Enter Type" className="placeholder-black" 
                                        rounded-4 style={{width: "80px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                        onChange={(e) => setCategory(e.target.value)} value={category}/>}
                                    {/** Drop Down Menu Button */}
                                    <AiFillCaretDown onClick={() => setOpen(!open)} className="self-center ml-1"/>
                                </div>
                            </div>
                        </section>
                        {/** DESKRIPSI
                        * notes: [ INI UNTUK POSITIONING APABILA IMAGE BELUM DI INPUT ] */}
                        {images.length > 0 ? null : 
                            <section id="input-deskripsi">
                                <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                                <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]" 
                                    rounded-4 style={{width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                    onChange={(e) => setDescription(e.target.value)} value={description}/>
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
                                    rounded-4 style={{width: "80px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                    onChange={(e) => setPrice(e.target.value)} value={price}/>
                            </form>
                        </form>
                        {/** STOCK */}
                        <form id="stock" className="flex flex-col">
                                <p className="text-gray-500 font-lato font-bold mr-[20px]">Product Stock</p>
                                <input placeholder="Enter Total Stock" type="number" className="placeholder-black" 
                                    rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                    onChange={(e) => setStock(e.target.value)} value={stock}
                                    />
                        </form>
                        {/** LINK SHOPEE */}
                        <form id="shopee-link">
                            <p className="text-gray-500 font-lato font-bold">Shopee link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black" 
                                rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                onChange={(e) => setShopeeLink(e.target.value)} value={shopeeLink}
                                />
                        </form>
                        {/** LINK TOKOPEDIA */}
                        <form id="tokopedia-link">
                            <p className="text-gray-500 font-lato font-bold mt-[2px]">Tokopedia Link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black" 
                                rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                onChange={(e) => setTokopediaLink(e.target.value)} value={tokopediaLink}
                                />
                        </form>
                    </div>
                </main>

                {/** DESKRIPSI
                * notes: [ INI UNTUK POSITIONING APABILA IMAGE SUDAH DI INPUT ] */}
                {images.length > 0 ? 
                    <section id="input-deskripsi">
                        <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                        <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]" 
                            rounded-4 style={{width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                            onChange={(e) => setDescription(e.target.value)} value={description}
                            />
                    </section> : null }
                <div className="grow"></div>

                {/** BUTTON ADD PRODUCT */}
                <footer id="input-deskripsi" className={`grid place-content-center content-end mr-5 ${images.length > 0 ? 'mb-3' : 'mb-10'}`}>
                    <Button type="submit" className="pt-2 pb-2 pr-5 pl-5 rounded-xl">Add Product</Button>
                </footer>
            </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
);
}