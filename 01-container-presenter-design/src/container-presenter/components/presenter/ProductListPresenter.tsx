import type { Product, ProductFilter, ProductSort } from "../../../types/product";
import ErrorPage from "../common/ErrorPage";
import Loading from "../common/Loading";
import CartSummary from "./CartSummary";
import ProductList from "./ProductList";
import SortFilterControls from "./SortFilterControls";

interface ProductListPresenterProps {
  products: Product[];
  loading: boolean;
  error: Error | null;
  sort: ProductSort | "";
  filter: ProductFilter;
  onSortChange: (sort: ProductSort | "") => void;
  onFilterChange: (filter: ProductFilter) => void;
  onClearFilter: () => void;
  totalItems: number;
  totalPrice: number;
  onAddToCart?: (product: Product) => void;
}

const ProductListPresenter = ({ products, loading, error, sort, filter, onSortChange, onFilterChange, onClearFilter, totalItems, totalPrice, onAddToCart }: ProductListPresenterProps) => {

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorPage message={error.message} />
  }

  return (
     <div className="store">
      <h2 className="store_heading">Product list</h2>

      <SortFilterControls
        sort={sort}
        filter={filter}
        onSortChange={onSortChange}
        onFilterChange={onFilterChange}
        onClearFilter={onClearFilter}
      />

      <ProductList products={products} onAddToCart={onAddToCart} />

      <CartSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </div>
  )
}

export default ProductListPresenter