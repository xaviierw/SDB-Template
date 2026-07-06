import { Link } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { appConfig, customerProfile, formatCurrency, recentActivity, summaryItems } from '../data/mockData'

function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow={appConfig.bankName}
        title={`Hello, ${customerProfile.name}!`}
        description="Template dashboard"
        action={
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-primary btn-sm" to="/market">
              View Products
            </Link>
          </div>
        }
      />

      <div className="row g-3 mb-4">
        {summaryItems.map((item) => (
          <div className="col-md-4" key={item.label}>
            <DashboardCard title={item.label} value={formatCurrency(item.value)} note={item.note} />
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-12">
          <section className="card border-0 rounded-3 mb-4">
            <div className="card-body">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                <div>
                  <p className="eyebrow mb-2">Customer profile</p>
                  <h2 className="h5 fw-bold mb-1">{customerProfile.accountType}</h2>
                  <p className="text-secondary mb-0">Customer ID {customerProfile.customerId}</p>
                </div>
                <div className="text-md-end">
                  <p className="text-secondary small mb-1">Available balance</p>
                  <p className="h4 fw-bold mb-0">{formatCurrency(customerProfile.availableBalance)}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="card border-0 rounded-3">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h2 className="h6 fw-bold mb-0">Recent activity</h2>
              <span className="text-secondary small">Mock data</span>
            </div>
            <div className="list-group list-group-flush">
              {recentActivity.map((activity) => (
                <div className="list-group-item d-flex justify-content-between gap-3" key={`${activity.date}-${activity.description}`}>
                  <div>
                    <p className="fw-semibold mb-1">{activity.description}</p>
                    <p className="text-secondary small mb-0">{activity.date}</p>
                  </div>
                  <div className="text-end">
                    <StatusBadge status={activity.status} type="neutral" />
                    <p className="fw-semibold mb-0 mt-2">{activity.amount ? formatCurrency(activity.amount) : '-'}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default DashboardPage
