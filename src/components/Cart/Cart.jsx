import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import Modal from '../Modal/Modal'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import IconCart from '../Icons/IconCart'
import formatPrice from '../../utils/formatPrice'

// Content of the cart, displayed inside the Modal
function Cart({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, clearCart } = useContext(CartContext)

  const title = totalItems === 0 ? 'Votre panier' : `Votre panier (${totalItems} article${totalItems > 1 ? 's' : ''})`

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {items.length === 0 ? (
        <div className="text-center py-4">
          <div className="text-secondary mb-3">
            <IconCart size={48} />
          </div>
          <p className="fs-5 fw-semibold mb-1">Votre panier est vide.</p>
          <p className="text-secondary mb-4">Ajoutez un plat depuis le menu pour commencer votre commande.</p>
          <a href="#menu" className="btn btn-primary fw-semibold" onClick={onClose}>
            Voir le menu
          </a>
        </div>
      ) : (
        <>
          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <span className="fs-5 fw-bold">Total</span>
            <span className="fs-4 fw-bold text-danger">{formatPrice(totalPrice)}</span>
          </div>

          <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
            <Button variant="outline-danger" onClick={clearCart}>
              Vider le panier
            </Button>
            <Button variant="primary" className="fw-semibold" onClick={onClose}>
              Continuer mes achats
            </Button>
          </div>
        </>
      )}
    </Modal>
  )
}

export default Cart
