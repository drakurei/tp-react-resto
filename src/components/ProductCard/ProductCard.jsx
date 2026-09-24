import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import CartContext from '../../contexts/CartContext'
import Button from '../Button/Button'
import pokemonTypes from '../../data/pokemonTypes'
import formatPrice from '../../utils/formatPrice'
import { handleImageError } from '../../utils/imageFallback'

// One product, as a Bootstrap card
function ProductCard({ product }) {
  const { tag: activeTag, toggleTag } = useContext(FilterContext)
  const { addToCart, decrementQuantity, getQuantity } = useContext(CartContext)

  const typeStyle = pokemonTypes[product.type]
  // How many times this product is already in the cart (0 = not in the cart)
  const quantity = getQuantity(product.id)

  return (
    <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
      <div className="position-relative bg-light">
        <div className="ratio ratio-4x3">
          <img
            src={product.image}
            alt={product.name}
            className="object-fit-contain p-4"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
        <span
          className="badge position-absolute top-0 start-0 m-3 shadow-sm"
          style={{ backgroundColor: typeStyle.background, color: typeStyle.color }}
        >
          {product.type}
        </span>
        {quantity > 0 && (
          <span key={quantity} className="badge position-absolute top-0 end-0 m-3 bg-warning text-dark shadow-sm badge-pop">
            {quantity} dans le panier
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h3 className="h5 card-title mb-0">{product.name}</h3>
          <span className="fw-bold text-danger text-nowrap fs-5">{formatPrice(product.price)}</span>
        </div>
        <p className="small text-secondary mb-2">{product.category}</p>
        <p className="card-text small mb-3">{product.description}</p>

        {/* Clicking a tag filters the grid on this tag (same as the sidebar) */}
        {product.tags.length > 0 && (
          <ul className="list-unstyled d-flex flex-wrap gap-2 mb-3">
            {product.tags.map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  className={`btn btn-sm rounded-pill text-capitalize ${tag === activeTag ? 'btn-warning' : 'btn-light'}`}
                  aria-pressed={tag === activeTag}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto d-flex gap-2">
          <Button variant="primary" className="flex-grow-1 fw-semibold" onClick={() => addToCart(product)}>
            + Ajouter
          </Button>
          {/* Removes one unit; the line disappears when the last unit is removed */}
          <Button
            variant="outline-danger"
            onClick={() => decrementQuantity(product.id)}
            disabled={quantity === 0}
            aria-label={`Retirer ${product.name} du panier`}
          >
            − Retirer
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
