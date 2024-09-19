import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Card from "../componenets/productcard";
import Chip from "../componenets/chip";
import { AuthContext } from "../context/login";
import { CardContent } from "@mui/material";
import { Cardcontex } from "../context/cardpagecontex";


function Products() {

    


    const [product, Setproduct] = useState([])
    const [categories, setCategories] = useState([])
    const [loader, Setloader] = useState(true)
    const [chosen, setChosen] = useState('All')

    console.log(chosen);

  
    const {user, setUser } = useContext(AuthContext)
console.log('toots', user);

 





    useEffect(() => {
        const url = chosen === "All" ? "https://dummyjson.com/products" :
            `https://dummyjson.com/products/category/${chosen}`

        axios
            .get(url)
            .then((res) => {
                Setproduct(res.data.products)
                Setloader(false)
            })
            .catch((err) => {
                console.log(err);
                Setloader(false)
            })

    }, [chosen])



    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data);

                Setloader(false)
            })
            .catch((err) => {
                console.log(err);
                Setloader(false)
            })

    }, [])





    return (
        <>
            <div className=" container mx-auto">
                {loader ? (
                    <h1 className="text-center text-3xl font-bold">loading....</h1>
                ) : (<>
                    <div className="flex flex-wrap ">
                        <Chip
                            isChosen={chosen === 'All'}
                            onClick={() => setChosen('All')}
                            categories={{
                                slug: "All",
                                name: 'All'
                            }} />
                        {categories.map((categories) => <Chip
                            onClick={() => setChosen(categories.slug)
                            }
                            categories={categories}
                            isChosen={categories.slug === chosen}
                            key={categories.slug} />)}

                    </div>

                    <div className="bg-gray-900 py-16">
                        <h2 className="text-center text-3xl font-bold text-white mb-8">
                            Introducing Our Latest Product
                        </h2>
                        <div className="flex flex-wrap justify-center container mx-auto px-4">


                            {product.map((d) => <Card d={d} key={d.id} />)}

                        </div>
                    </div>


                </>
                )}
            </div>
        </>
    );

}

export default Products