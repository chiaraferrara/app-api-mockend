interface Product{
  id: number,
  title: string

}

export const getServerSideProps = async () => {
  try{
  const res = await fetch("https://nodejs-api-production-0c7a.up.railway.app/");
  const products : Product[] = await res.json();
console.log(products);
  return {
    props: { products },
  };}catch(error){
    return {
      props: { products: [] },
    };
  }
}

interface Props {
  products: Product[]

}


export default function Home({ products }: Props) {
  return (
    <>
      <div>
        <h1>Products</h1>
        {products.length > 0 && products.map((product: { id: any, title: string }) => (
          <div key={product.id}><h2>{product.title}</h2></div>
        ))}
      </div>
    </>
  );
}
