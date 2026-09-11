import type { Product } from "../../../types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <article className="product-card">
      <div className="product-card__img-container">
        <img
          className="product-card__img"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="product-card__body">
        <h2 className="product-card__name">{product.name}</h2>

        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__meta">
          <p className="product-card__price">${product.price.toLocaleString()}</p>

          <p className="product-card__rating">
            {product.rating} <span className="product-card__reviews">({product.reviewCount})</span>
          </p>
        </div>

        <button
          className="product-card__cta"
          onClick={() => onAddToCart && onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard