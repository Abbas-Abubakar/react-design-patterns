interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export default function CartSummary({
  totalItems,
  totalPrice,
}: CartSummaryProps) {
  return (
    <aside className="cart-summary">
      <h2 className="cart-summary__title">Cart summary</h2>

      <div className="cart-summary__row">
        <span className="cart-summary__label">Items</span>
        <span className="cart-summary__value">{totalItems}</span>
      </div>

      <div className="cart-summary__row cart-summary__row--total">
        <span className="cart-summary__label">Total</span>
        <span className="cart-summary__total">${totalPrice.toLocaleString()}</span>
      </div>
    </aside>
  );
}