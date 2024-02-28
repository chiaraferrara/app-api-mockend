import { useEffect, useState } from "react";

export default function Home() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/products")
        .then((response) => response.json())
        .then((data: any) => {
          if (data.data) {
            setMyData(data.data);
            console.log(data);
          } else {
            setMyData([]);
          }
        });
    } catch (error) {
      setMyData([]);
    }
  }, []);

  console.log(myData);
  return (
    <>
      <div>
        {myData.map((product: { id: any, title: string }) => (
          <div key={product.id}><h2>{product.title}</h2></div>
        ))}
      </div>
    </>
  );
}
