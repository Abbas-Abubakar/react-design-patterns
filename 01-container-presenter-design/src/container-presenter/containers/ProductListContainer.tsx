import { useEffect, useState } from "react";
import type {
  CartItem,
  Product,
  ProductFilter,
  ProductSort,
} from "../../types/product";
import { getProducts } from "../../api/apis";
import ProductListPresenter from "../components/presenter/ProductListPresenter";

const ProductListContainer = () => {
  // The container owns the application's state.
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Filter and sorting state is kept in the container because
  // it determines what data should be requested from the API.
  const [sort, setSort] = useState<ProductSort | "">("");
  const [filter, setFilter] = useState<ProductFilter>("all");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  // The container handles the side effect of fetching products.
  // The presenter does not need to know where the data comes from.
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

  // Business logic for adding products to the cart stays in the container.
  // The presenter only receives this function as a callback.
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

  // Container handles the behavior of resetting the filters.
  const handleClearFilter = () => {
    setFilter("all");
    setSort("");
  };

  // These are derived values calculated from the cart state.
  // They don't need their own state because they can be calculated
  // whenever the component renders.
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // The presenter receives the data it needs to render the UI
  // and callbacks for actions the user can perform.
  return (
    <ProductListPresenter
      products={products}
      loading={loading}
      error={error}
      sort={sort}
      filter={filter}
      onSortChange={setSort}
      onFilterChange={setFilter}
      onClearFilter={handleClearFilter}
      totalItems={totalItems}
      totalPrice={totalPrice}
      onAddToCart={handleAddToCart}
    />
  );
};

export default ProductListContainer;