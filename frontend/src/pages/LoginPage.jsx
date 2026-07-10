import { useNavigate } from 'react-router-dom'
import { appConfig } from '../data/mockData'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="auth-page">
      <div className="auth-brand text-center">
        <h1 className="fw-bold mb-1">{appConfig.appName}</h1>
        <p className="text-secondary mb-0">{appConfig.bankName}</p>
      </div>

      <section className="auth-card">
        <div className="auth-form">
          <button className="auth-provider paypal-button w-100" onClick={() => navigate('/dashboard')} type="button">
            Login with PayPal
          </button>

          <div className="form-check d-flex justify-content-center gap-2 mt-4 mb-0">
            <input className="form-check-input" defaultChecked id="keepLoggedIn" type="checkbox" />
            <label className="form-check-label" htmlFor="keepLoggedIn">
              Keep me logged in
            </label>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
