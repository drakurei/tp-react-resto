import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import FilterBlock from '../FilterBlock/FilterBlock'
import { categories } from '../../data/filters'
import products from '../../data/products'

const itemClasses = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-3'

// Category list. Each line shows how many products belong to the category.
function CategoryBlock() {
  const { category, toggleCategory } = useContext(FilterContext)

  return (
    <FilterBlock title="Catégories">
      <div className="list-group list-group-flush">
        <button
          type="button"
          className={category === '' ? `${itemClasses} active` : itemClasses}
          aria-pressed={category === ''}
          onClick={() => toggleCategory('')}
        >
          Tous les plats
          <span className="badge bg-light text-dark rounded-pill">{products.length}</span>
        </button>

        {categories.map((name) => {
          const count = products.filter((product) => product.category === name).length
          const isActive = category === name

          return (
            <button
              key={name}
              type="button"
              className={isActive ? `${itemClasses} active` : itemClasses}
              aria-pressed={isActive}
              onClick={() => toggleCategory(name)}
            >
              {name}
              <span className="badge bg-light text-dark rounded-pill">{count}</span>
            </button>
          )
        })}
      </div>
    </FilterBlock>
  )
}

export default CategoryBlock
