import ProductCard from '../ProductCard/ProductCard'
import products from '../../data/products'

// Grid of product cards (Bootstrap row / cols)
function ProductGrid() {
  return (
    <div>
      <p className="text-secondary mb-3">
        <strong>{products.length}</strong> plats disponibles
      </p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
