import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist in this frontend template."
      />

      <section className="card border-0 rounded-3">
        <div className="card-body">
          <p className="text-secondary">
            Use the navigation menu or return to the dashboard to continue.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <Link className="btn btn-primary" to="/dashboard">
              Back to dashboard
            </Link>
            <Link className="btn btn-outline-primary" to="/market">
              View markets
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
