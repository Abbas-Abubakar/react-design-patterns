
interface CardComponentProps {
  title: string;

  icon?: React.ReactNode;
  image?: string;

  description?: string;
  price?: number;
  rating?: number;

  ctaText?: string;

  showAddToCart?: boolean;
  showFavorite?: boolean;
  showBadge?: boolean;

  variant?: "product" | "feature" | "course" | "profile";

  onClick?: () => void;
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

const CardComponent = ({ title,
  icon,
  image,
  description,
  price,
  rating,
  ctaText,
  showAddToCart,
  showFavorite,
  showBadge,
  variant,
  onClick,
  onAddToCart,
  onFavorite, }: CardComponentProps) => {
  return (
    <div className={`card card--${variant}`}>
      {showFavorite && (
        <button
          className="card__favorite"
          onClick={onFavorite}
          aria-label="Favorite"
          type="button"
        >
          ♥
        </button>
      )}

      {image && (
        <div className="card__media">
          <img className="card__img" src={image} alt={title} />
        </div>
      )}

      {icon && !image && (
        <div className="card__icon">{icon}</div>
      )}

      {showBadge && <span className="card__badge">Featured</span>}

      <div className="card__body">
        <h2 className="card__title">{title}</h2>

        {description && <p className="card__description">{description}</p>}

        {(rating || price) && (
          <div className="card__meta">
            {rating && (
              <span className="card__rating">
                <span className="card__star" aria-hidden="true">★</span>
                {rating}
              </span>
            )}

            {price && <strong className="card__price">₦{price.toLocaleString()}</strong>}
          </div>
        )}
      </div>
      <div className="card_footer">
        {(ctaText || showAddToCart) && (
          <div className="card__footer">
            {ctaText && (
              <button className="card__cta" onClick={onClick} type="button">
                {ctaText}
              </button>
            )}

            {showAddToCart && (
              <button className="card__add-to-cart" onClick={onAddToCart} type="button">
                Add to cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardComponent