import { useParams } from "react-router-dom"

export const Product = () => {
  const params=useParams();
 
  const product=params.product;
  return(
    <div>
      <h1>{product}</h1>
    </div>
  )
}