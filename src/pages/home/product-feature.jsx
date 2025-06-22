import { ProductCard } from "../../components/product-card";
import { useEffect, useState } from "react";
import { getAllProductAPI } from "../../service/produc.service";


export function ProductFeature(){


    //---------------------------------
   const [listProduct, setListProduct] = useState([]);
   useEffect(()=>{
        getAllProductAPI().then((resp) =>{
            // console.log ("laydata danh sách phim",resp);
            setListProduct(resp.data.content);
        })
    })
    return (<>
            <div className="bg-[#272838]">
                <div className="ml-100 mr-100">
                    <div className="">
                        <ListProduct data={listProduct}/>
                    </div>
                </div>
            </div>

    </>
    );
}

function ListProduct({data}){
    return (
        <>
            <div className="grid grid-cols-4 gap-10 justify-center items-center pt-50">
            {data.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        img={{
                            alt: product.biDanh,
                            src: product.hinhAnh
                        }}
                        button={{
                            buyTickets: "Get Tickets",
                            trailer: product.trailer
                        }}
                    />
                )
            })}
            </div>
        </>
    )
}

