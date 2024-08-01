import ProductButton from "./product"

async function productList(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;
}

export default async function Product() {
    let products = await productList();
  return (
    <div>
        <h1>product list</h1>{
            products.map((item)=>
                <div>
                <h1>{item.title}</h1>
                <ProductButton price={item.price}/>
                </div>
            )
        }
    </div>
  );
}