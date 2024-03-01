interface Product{
  id: number,
  title: string

}


//la chiamata avviene in runtime, quindi non è possibile fare il fetch in fase di build
//se invece fosse stato getStaticProps, sarebbe stato possibile, i dati sono aggiornati nel momento in cui la pagina viene buildata
//(quando si fa run build, i dati vengono fetchati e se il server è giù, la pagina non viene visualizzata)
//SSG significa Server Side Generation

//su vercel potremmo avere problemi, il server non si trova l'api attiva. 
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

//VANTAGGI STATIC PROPS: quando carico sul server la pagina già con i dati, la pagina viene visualizzata molto più velocemente
//VANTAGGI SERVER SIDE PROPS: i dati sono sempre aggiornati, non importa se il server è giù, i dati vengono sempre fetchati


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
