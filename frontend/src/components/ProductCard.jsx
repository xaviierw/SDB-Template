import { formatCurrency } from '../data/mockData'

function ProductCard({ product }) {
  return (
    <div className="card border-0 rounded-3 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <p className="eyebrow mb-1">{product.code}</p>
            <h2 className="h6 fw-bold mb-0">{product.name}</h2>
          </div>
        </div>
        <p className="text-secondary small mb-3">{product.category}</p>
        <div className="d-flex justify-content-between align-items-end gap-3">
          <div>
            <p className="text-secondary small mb-1">Unit price</p>
            <p className="h5 fw-bold mb-0">{formatCurrency(product.unitPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
