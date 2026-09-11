import type {
  ProductFilter,
  ProductSort,
} from "../../../types/product";

interface SortFilterControlsProps {
  sort: ProductSort | "";
  filter: ProductFilter;
  onSortChange: (sort: ProductSort | "") => void;
  onFilterChange: (filter: ProductFilter) => void;
  onClearFilter: () => void
}

export default function SortFilterControls({
  sort,
  filter,
  onSortChange,
  onFilterChange,
  onClearFilter
}: SortFilterControlsProps) {
  return (
     <div className="sort-filter">
      <label className="sort-filter__field">
        <span className="sort-filter__label">Sort</span>

        <select
          className="sort-filter__select"
          value={sort}
          onChange={(event) =>
            onSortChange(
              event.target.value as ProductSort | ""
            )
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
            onFilterChange(
              event.target.value as ProductFilter
            )
          }
        >
          <option value="all">All</option>
          <option value="in-stock">In stock</option>
        </select>
      </label>

      <button className="sort-filter__clear" onClick={onClearFilter}>
        Clear filter
      </button>
    </div>
  );
}