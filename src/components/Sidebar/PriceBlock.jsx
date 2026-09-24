import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import FilterBlock from '../FilterBlock/FilterBlock'
import { priceRanges } from '../../data/filters'

// Price ranges as radio buttons (only one range at a time)
function PriceBlock() {
  const { price, setPrice } = useContext(FilterContext)

  return (
    <FilterBlock title="Prix">
      {priceRanges.map((range) => (
        <div key={range.id} className="form-check mb-2">
          <input
            id={`price-${range.id}`}
            type="radio"
            name="price"
            className="form-check-input"
            value={range.id}
            checked={price === range.id}
            onChange={() => setPrice(range.id)}
          />
          <label htmlFor={`price-${range.id}`} className="form-check-label">
            {range.label}
          </label>
        </div>
      ))}
    </FilterBlock>
  )
}

export default PriceBlock
