import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Button from '../Button/Button'
import IconTrash from '../Icons/IconTrash'
import formatPrice from '../../utils/formatPrice'
import { handleImageError } from '../../utils/imageFallback'

// One line of the cart: product, unit price, quantity controls, subtotal, delete
function CartItem({ item }) {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext)

  const subtotal = item.price * item.quantity

  return (
    <li className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-3 p-3 bg-light rounded-4">
      <img
        src={item.image}
        alt=""
        width="64"
        height="64"
        className="bg-white rounded-3 object-fit-contain p-1 flex-shrink-0"
        onError={handleImageError}
      />

      <div className="flex-grow-1">
        <p className="fw-bold mb-1">{item.name}</p>
        <p className="small text-secondary mb-2">{formatPrice(item.price)} l'unité</p>
        <div className="d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            size="sm"
            className="fw-bold px-3"
            onClick={() => decrementQuantity(item.id)}
            aria-label={`Diminuer la quantité de ${item.name}`}
          >
            −
          </Button>
          <span className="small fw-semibold">Quantité : {item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            className="fw-bold px-3"
            onClick={() => incrementQuantity(item.id)}
            aria-label={`Augmenter la quantité de ${item.name}`}
          >
            +
          </Button>
        </div>
      </div>

      <div className="text-sm-end ms-auto">
        <p className="mb-2 text-nowrap">
          <span className="small text-secondary">Sous-total : </span>
          <span className="fw-bold">{formatPrice(subtotal)}</span>
        </p>
        <button
          type="button"
          className="btn btn-sm btn-link text-danger p-0 d-inline-flex align-items-center gap-1 text-decoration-none"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Supprimer ${item.name} du panier`}
        >
          <IconTrash size={16} />
          Supprimer
        </button>
      </div>
    </li>
  )
}

export default CartItem
