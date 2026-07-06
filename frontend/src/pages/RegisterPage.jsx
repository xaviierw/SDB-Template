import { Link } from 'react-router-dom'
import { appConfig } from '../data/mockData'

function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-brand text-center">
        <h1 className="fw-bold mb-1">{appConfig.appName}</h1>
        <p className="text-secondary mb-0">Create a demo account</p>
      </div>

      <section className="auth-card">
        <form className="auth-form">
          <div className="auth-field">
            <input aria-label="Full name" className="form-control" placeholder="Full name" type="text" />
          </div>

          <div className="auth-field">
            <input aria-label="Email" className="form-control" placeholder="Email" type="email" />
          </div>

          <div className="auth-field">
            <input aria-label="Password" className="form-control" placeholder="Password" type="password" />
          </div>

          <button className="btn btn-primary w-100 auth-submit" disabled type="button">
            Create account
          </button>

          <p className="text-secondary small text-center mt-3 mb-0">
            Registration is a placeholder for this frontend template.
          </p>
        </form>
      </section>

      <p className="text-center mt-3 mb-0">
        Already have an account? <Link className="auth-link" to="/">Log in</Link>
      </p>
    </main>
  )
}

export default RegisterPage
