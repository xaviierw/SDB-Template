import { Link, useNavigate } from 'react-router-dom'
import { appConfig } from '../data/mockData'

function LoginPage() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <main className="auth-page">
      <div className="auth-brand text-center">
        <h1 className="fw-bold mb-1">{appConfig.appName}</h1>
        <p className="text-secondary mb-0">{appConfig.bankName}</p>
      </div>

      <section className="auth-card">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <input aria-label="Email" className="form-control" placeholder="Email" type="email" />
          </div>

          <div className="auth-field">
            <input aria-label="Password" className="form-control" placeholder="Password" type="password" />
          </div>

          <button className="btn btn-primary w-100 auth-submit" type="submit">
            Log in
          </button>

          <Link className="auth-link" to="/">
            Forgot password?
          </Link>

          <div className="text-center my-4">
            <p className="text-secondary mb-3">or log in with</p>
            <button className="auth-provider paypal-provider w-100" onClick={() => navigate('/dashboard')} type="button">
              Login with PayPal
            </button>
          </div>

          <div className="form-check d-flex justify-content-center gap-2 mb-4">
            <input className="form-check-input" defaultChecked id="keepLoggedIn" type="checkbox" />
            <label className="form-check-label" htmlFor="keepLoggedIn">
              Keep me logged in
            </label>
          </div>
        </form>
      </section>

      <p className="text-center mt-3 mb-0">
        Don't have an account? <Link className="auth-link" to="/register">Create one now!</Link>
      </p>
    </main>
  )
}

export default LoginPage
