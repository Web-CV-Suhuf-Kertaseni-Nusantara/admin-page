import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
// import ProductTable from "./ProductTable";
import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export default function EditProduct({ productId }) {
    const [editProductData, setEditProductData] = useState({
        name: "",
        image: [],
        imagesPreview: [],
        category: "New",
        price: "",
        description: "",
        stock: "",
        shopee_link: "",
        tokopedia_link: "",
    });

    const [ open, setOpen ] = useState(false);
    const [ dropdownitem, setItem ] = useState('New');

    const createProductImage = (e) => {
        const files = Array.from(e.target.files);
        // Create new arrays to avoid mutating state directly
        const newImages = [];
        const newImagesPreview = [];
        
        files.forEach((file) => {
          newImagesPreview.push(URL.createObjectURL(file));
          newImages.push(file);
        });
        
        // Update state with the new arrays
        setEditProductData({
          ...editProductData,
          image: newImages,
          imagesPreview: newImagesPreview,
        });
    };
      
    const fetchProductDataForEdit = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/products/info/?productId=${productId}`
          );
      
          // Create a new object that preserves the existing state and only updates necessary properties
          const updatedData = {
            ...editProductData,
            ...response.data,
            imagesPreview: response.data.image,
          };
          console.log(response.data.image);
          setItem(response.data.category);
          setEditProductData(updatedData);
      
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
    };
      

    const handleUpdateProduct = async () => {
        try {
          await axios.patch(
            `http://localhost:5000/api/products/?productId=${productId}`,
            editProductData
          );
          console.log("Product updated successfully!");
        } catch (error) {
          console.error("Error updating product:", error);
        }
    };
      

    useEffect(() => {
        fetchProductDataForEdit();
    
    }, []);

    
return (
    <>
        <form onSubmit={handleUpdateProduct}>
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
                                    onChange={createProductImage}/>
                            </div>
                            <div id="createProductFormImage" className={`flex flex-row w-[200px]  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pb-1 gap-2
                                ${editProductData.image.length > 0 ? 'h-[60px] mt-2 mb-2 overflow-y-auto' : 'h-0'}`}>
                                {editProductData.imagesPreview.map((image, index) => (
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
                                    name="name"
                                    className="input placeholder-black"
                                    onChange={(e) =>
                                        setEditProductData({
                                            ...editProductData,
                                            name: e.target.value,
                                        })
                                    }
                                    value={editProductData.name}
                                    placeholder="Enter Name Here"
                                    rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}/>
                            </div>

                            {/** TYPE */}
                            <div id="type" className="flex flex-col">
                                <p className="text-gray-500 font-lato font-bold">Product Type</p>
                                {/** Drop Down Menu Item */}
                                {open && <div className="absolute mt-[50px] bg-[#f6f6f6] rounded-md divide-y-2 drop-shadow-DashboardShadow">
                                    <div className="flex flex-col font-lato h-16 w-auto pr-3 items-start overflow-y-auto scrollbar-thumb-gray-600 scrollbar-track-gray-100 scrollbar-thin">
                                        <button
                                            onClick={() => {
                                                setEditProductData({
                                                ...editProductData,
                                                category: "Other",
                                                });
                                                setItem("Other");
                                                setOpen(false);
                                            }}
                                            >
                                            New Type
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditProductData({
                                                ...editProductData,
                                                category: "Gift Box",
                                                });
                                                setItem("Gift Box");
                                                setOpen(false);
                                            }}
                                            >
                                            Gift Box
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditProductData({
                                                ...editProductData,
                                                category: "Ribbon",
                                                });
                                                setItem("Ribbon");
                                                setOpen(false);
                                            }}
                                            >
                                            Ribbon
                                        </button>
                                    </div>
                                </div>}
                                {/** If selected other on drop down it will make an text field to type a 'New Product Type' */}
                                <div className="flex flex-row items-center">
                                    {dropdownitem === 'New' && <Typography variant="h6" className="text-black font-lato">Select Type</Typography>}
                                    {dropdownitem === 'Gift Box' && <Typography variant="h6" className="text-black font-lato">Gift Box</Typography>}
                                    {dropdownitem === 'Ribbon' && <Typography variant="h6" className="text-black font-lato">Ribbon</Typography>}
                                    {dropdownitem === 'Other' && <input placeholder="Enter Type" className="placeholder-black" 
                                        rounded-4 style={{width: "80px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                        onChange={(e) =>
                                            setEditProductData({
                                                ...editProductData,
                                                category: e.target.value,
                                            })
                                            }
                                        value={editProductData.category}/>}
                                    {/** Drop Down Menu Button */}
                                    <AiFillCaretDown onClick={() => setOpen(!open)} className="self-center ml-1"/>
                                </div>
                            </div>
                        </section>
                        {/** DESKRIPSI
                        * notes: [ INI UNTUK POSITIONING APABILA IMAGE BELUM DI INPUT ] */}
                        {editProductData.image.length > 0 ? null : 
                            <section id="input-deskripsi">
                                <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                                <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]" 
                                    rounded-4 style={{width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                    onChange={(e) =>
                                        setEditProductData({
                                            ...editProductData,
                                            description: e.target.value,
                                        })
                                    }
                                    value={editProductData.description}/>
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
                                    onChange={(e) =>
                                        setEditProductData({
                                            ...editProductData,
                                            price: e.target.value,
                                        })
                                    }
                                    value={editProductData.price}/>
                            </form>
                        </form>
                        {/** STOCK */}
                        <form id="stock" className="flex flex-col">
                                <p className="text-gray-500 font-lato font-bold mr-[20px]">Product Stock</p>
                                <input placeholder="Enter Total Stock" type="number" className="placeholder-black" 
                                    rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                    onChange={(e) =>
                                        setEditProductData({
                                        ...editProductData,
                                        stock: e.target.value,
                                        })
                                    }
                                    value={editProductData.stock}/>
                        </form>
                        {/** LINK SHOPEE */}
                        <form id="shopee-link">
                            <p className="text-gray-500 font-lato font-bold">Shopee link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black" 
                                rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                onChange={(e) =>
                                    setEditProductData({
                                    ...editProductData,
                                    shopeeLink: e.target.value,
                                    })
                                }
                                value={editProductData.shopee_link}/>
                        </form>
                        {/** LINK TOKOPEDIA */}
                        <form id="tokopedia-link">
                            <p className="text-gray-500 font-lato font-bold mt-[2px]">Tokopedia Link</p>
                            <input placeholder="Enter Link Here" className="placeholder-black" 
                                rounded-4 style={{width: "150px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                                onChange={(e) =>
                                    setEditProductData({
                                    ...editProductData,
                                    tokopediaLink: e.target.value,
                                    })
                                }
                                value={editProductData.tokopedia_link}/>
                        </form>
                    </div>
                </main>

                {/** DESKRIPSI
                * notes: [ INI UNTUK POSITIONING APABILA IMAGE SUDAH DI INPUT ] */}
                {editProductData.image.length > 0 ? 
                    <section id="input-deskripsi">
                        <div className="text-gray-500 font-lato font-bold mt-2">Product Description</div>
                        <textarea placeholder="Enter Link Here" className="placeholder-black resize-none scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-gray-100 pr-[1px]" 
                            rounded-4 style={{width: "95%", height: "50px", outline: "none", fontFamily: "lato", fontWeight: "bold", color: "black"}}
                            onChange={(e) =>
                                setEditProductData({
                                    ...editProductData,
                                    description: e.target.value,
                                })
                            }
                            value={editProductData.description}/>
                    </section> : null }
                <div className="grow"></div>

                {/** BUTTON ADD PRODUCT */}
                <footer id="input-deskripsi" className={`grid place-content-center content-end mr-5 ${editProductData.image.length > 0 ? 'mb-3' : 'mb-10'}`}>
                    <Button type="submit" className="pt-2 pb-2 pr-5 pl-5 rounded-xl">Edit Product</Button>
                </footer>
            </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
);
}