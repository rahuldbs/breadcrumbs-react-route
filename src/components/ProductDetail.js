import { useParams } from "react-router-dom";

export const ProductDetail = (props) => {
  console.log("props---", props);

  const { productId } = useParams();

  return (
    <div>
      <h2>Product Detail Page</h2>
      <div>Description for {productId} 6.1-inch size...</div>
    </div>
  );
};
