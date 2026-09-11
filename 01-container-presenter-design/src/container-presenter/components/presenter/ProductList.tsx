import type { Product } from "../../../types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <div>
      {products.length === 0 ? (
        <p className="store__empty">No products match your filters.</p>
      ) : (
        <div className="store__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList