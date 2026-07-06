import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { appConfig, formatCurrency, getMarketById, markets, products } from '../data/mockData'

function MarketPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const marketId = searchParams.get('market')
  const selectedMarket = marketId ? getMarketById(marketId) : null
  const visibleProducts = selectedMarket
    ? products.filter((product) => product.marketId === selectedMarket.id)
    : products
  const [selectedProductCode, setSelectedProductCode] = useState('')
  const selectedProduct = visibleProducts.find((product) => product.code === selectedProductCode)

  function handleMarketChange(event) {
    const nextMarketId = event.target.value
    setSelectedProductCode('')

    if (nextMarketId === 'all') {
      setSearchParams({})
      return
    }

    setSearchParams({ market: nextMarketId })
  }

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={selectedMarket ? selectedMarket.label : appConfig.productType}
        description={selectedMarket ? selectedMarket.description : 'Choose a market to view the products for each project topic.'}
      />

      <div className="card border-0 rounded-3 mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            <div className="col-md-5 col-lg-4">
              <label className="form-label" htmlFor="marketFilter">
                Market
              </label>
              <select
                className="form-select"
                id="marketFilter"
                onChange={handleMarketChange}
                value={selectedMarket?.id || 'all'}
              >
                <option value="all">All Markets</option>
                {markets.map((market) => (
                  <option key={market.id} value={market.id}>
                    {market.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md">
              <p className="text-secondary mb-0">
                Showing {visibleProducts.length} mock product{visibleProducts.length === 1 ? '' : 's'}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="card border-0 rounded-3">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Code</th>
                <th>Product name</th>
                <th>Category</th>
                <th>Unit price</th>
                <th>Change</th>
                <th>Last updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleProducts.map((product) => {
                const isPositive = product.changePercent >= 0

                return (
                  <tr key={product.code}>
                    <td>
                      <button className="text-action fw-bold" onClick={() => setSelectedProductCode(product.code)} type="button">
                        {product.code}
                      </button>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{formatCurrency(product.unitPrice)}</td>
                    <td className={isPositive ? 'text-success fw-semibold' : 'text-danger fw-semibold'}>
                      {isPositive ? '+' : ''}
                      {product.changePercent}%
                    </td>
                    <td>{product.lastUpdated}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => setSelectedProductCode(product.code)} type="button">
                        Details
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {selectedProduct ? (
        <section className="card border-0 rounded-3 mt-4">
          <div className="card-body">
            <div className="row g-4 align-items-start">
              <div className="col-lg-4">
                <p className="eyebrow mb-1">{selectedProduct.code}</p>
                <h2 className="h5 fw-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-secondary mb-0">{selectedProduct.description}</p>
              </div>

              <div className="col-lg-4">
                <div className="price-bars d-flex align-items-end gap-2 mb-4">
                  {selectedProduct.mockTrend.map((height, index) => (
                    <span key={`${selectedProduct.code}-${index}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <dl className="row small mb-0">
                  <dt className="col-5 text-secondary fw-normal">Unit price</dt>
                  <dd className="col-7 text-end fw-semibold">{formatCurrency(selectedProduct.unitPrice)}</dd>
                  <dt className="col-5 text-secondary fw-normal">Category</dt>
                  <dd className="col-7 text-end fw-semibold">{selectedProduct.category}</dd>
                  <dt className="col-5 text-secondary fw-normal">Updated</dt>
                  <dd className="col-7 text-end fw-semibold">{selectedProduct.lastUpdated}</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="card border-0 rounded-3 mt-4">
          <div className="card-body">
            <p className="eyebrow mb-2">Detail panel</p>
            <h2 className="h5 fw-bold mb-2">Select a product</h2>
            <p className="text-secondary mb-0">
              Click a product code in the table to show details.
            </p>
          </div>
        </section>
      )}
    </>
  )
}

export default MarketPage
