import PageHeader from '../components/PageHeader'
import { appConfig, customerProfile, formatCurrency } from '../data/mockData'

function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title={customerProfile.name}
        description="Basic customer profile section for the shared frontend template."
      />

      <section className="card border-0 rounded-3">
        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-6">
              <p className="text-secondary small mb-1">Customer ID</p>
              <p className="fw-semibold mb-0">{customerProfile.customerId}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary small mb-1">Account type</p>
              <p className="fw-semibold mb-0">{customerProfile.accountType}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary small mb-1">PayPal email</p>
              <p className="fw-semibold mb-0">{customerProfile.paypalEmail}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary small mb-1">Product template</p>
              <p className="fw-semibold mb-0">{appConfig.productType}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary small mb-1">Available balance</p>
              <p className="fw-semibold mb-0">{formatCurrency(customerProfile.availableBalance)}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary small mb-1">Portfolio value</p>
              <p className="fw-semibold mb-0">{formatCurrency(customerProfile.portfolioValue)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfilePage
