import { useEffect, useState } from "react";
import type {
  CartItem,
  Product,
  ProductFilter,
  ProductSort,
} from "../types/product";
import { getProducts } from "../api/apis";

const MessyComponent = () => {
  // Product data, cart state, loading, and error state are all managed
  // inside the same component.
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Filter and sorting state is also managed by this component.
  const [sort, setSort] = useState<ProductSort | "">("");
  const [filter, setFilter] = useState<ProductFilter>("all");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  // Fetch products whenever the filtering/sorting criteria change.
  // This component is responsible for both the data-fetching logic
  // and rendering the UI.
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts({
          category: category || undefined,
          sort: sort || undefined,
          filter,
          search: search || undefined,
        });

        setProducts(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category, sort, filter, search]);

  // Handles adding a product to the cart.
  // If the product already exists, increase its quantity.
  // Otherwise, add it as a new cart item.
  const handleAddToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Resets the sorting and filtering options.
  const handleClearFilter = () => {
    setFilter("all");
    setSort("");
  };

  // Derived values calculated directly from the cart state.
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Loading and error UI are handled by the same component that
  // handles data fetching, state management, and the main UI.
  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return (
      <div className="error-page">
        <h2 className="error-page__title">Whoops!</h2>
        <h3 className="error-page__subtitle">Something went wrong.</h3>
        <p className="error-page__message">{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="store">
        <h2 className="store_heading">Product list</h2>

        {/* Sorting and filtering controls are rendered and managed here. */}
        <div className="sort-filter">
          <label className="sort-filter__field">
            <span className="sort-filter__label">Sort</span>

            <select
              className="sort-filter__select"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as ProductSort | "")
              }
            >
              <option value="">Default</option>
              <option value="name">Name</option>
              <option value="price-low">
                Price: low to high
              </option>
              <option value="price-high">
                Price: high to low
              </option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </label>

          <label className="sort-filter__field">
            <span className="sort-filter__label">Filter</span>

            <select
              className="sort-filter__select"
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value as ProductFilter)
              }
            >
              <option value="all">All</option>
              <option value="in-stock">In stock</option>
            </select>
          </label>

          <button
            className="sort-filter__clear"
            onClick={handleClearFilter}
          >
            Clear filter
          </button>
        </div>

        {/* Product list rendering is also handled directly in this component. */}
        {products.length === 0 ? (
          <p className="store__empty">
            No products match your filters.
          </p>
        ) : (
          <div className="store__grid">
            {products.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >
                <div className="product-card__img-container">
                  <img
                    className="product-card__img"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>

                <div className="product-card__body">
                  <h2 className="product-card__name">
                    {product.name}
                  </h2>

                  <p className="product-card__desc">
                    {product.description}
                  </p>

                  <div className="product-card__meta">
                    <p className="product-card__price">
                      ${product.price.toLocaleString()}
                    </p>

                    <p className="product-card__rating">
                      {product.rating}{" "}
                      <span className="product-card__reviews">
                        ({product.reviewCount})
                      </span>
                    </p>
                  </div>

                  <button
                    className="product-card__cta"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Cart calculations and presentation are also part of this component. */}
        <aside className="cart-summary">
          <h2 className="cart-summary__title">Cart summary</h2>

          <div className="cart-summary__row">
            <span className="cart-summary__label">Items</span>
            <span className="cart-summary__value">
              {totalItems}
            </span>
          </div>

          <div className="cart-summary__row cart-summary__row--total">
            <span className="cart-summary__label">Total</span>
            <span className="cart-summary__total">
              ${totalPrice.toLocaleString()}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MessyComponent;