import FilterBlock from '../FilterBlock/FilterBlock'
import { categories } from '../../data/filters'
import products from '../../data/products'

// Category list. Each line shows how many products belong to the category.
function CategoryBlock() {
  return (
    <FilterBlock title="Catégories">
      <div className="list-group list-group-flush">
        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-3 active">
          Tous les plats
          <span className="badge bg-white text-dark rounded-pill">{products.length}</span>
        </button>
        {categories.map((category) => {
          const count = products.filter((product) => product.category === category).length

          return (
            <button
              key={category}
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-3"
            >
              {category}
              <span className="badge bg-light text-dark rounded-pill">{count}</span>
            </button>
          )
        })}
      </div>
    </FilterBlock>
  )
}

export default CategoryBlock
