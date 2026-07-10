import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { appConfig, markets } from '../data/mockData'

function Navbar() {
  const [isMarketsOpen, setIsMarketsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const selectedMarketId = new URLSearchParams(location.search).get('market')

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="top-navbar text-white">
      <div className="top-navbar-inner">
        <Link className="top-navbar-brand text-white text-decoration-none fw-bold" onClick={closeMobileMenu} to="/dashboard">
          <img alt={appConfig.bankName} className="top-navbar-logo" src="/SDB.png" />
        </Link>
        <button
          aria-controls="topNav"
          aria-expanded={isMobileMenuOpen}
          className="btn btn-sm top-navbar-menu-button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          Menu
        </button>

        <div className={`top-navbar-collapse ${isMobileMenuOpen ? 'open' : ''}`} id="topNav">
          <nav className="top-navbar-main nav nav-pills">
            <NavLink className="nav-link" onClick={closeMobileMenu} to="/dashboard">
              Home
            </NavLink>
            <div className="market-menu">
              <button
                className={`nav-link market-menu-toggle ${isMarketsOpen ? 'open' : ''}`}
                onClick={() => setIsMarketsOpen((current) => !current)}
                type="button"
              >
                Markets
              </button>
              {isMarketsOpen && (
                <div className="market-menu-panel">
                  {markets.map((market) => (
                    <Link
                      className={`market-menu-item ${selectedMarketId === market.id ? 'active' : ''}`}
                      key={market.id}
                      onClick={() => {
                        setIsMarketsOpen(false)
                        closeMobileMenu()
                      }}
                      to={`/market?market=${market.id}`}
                    >
                      {market.shortLabel}
                    </Link>
                  ))}
                  <Link
                    className={`market-menu-item ${location.pathname === '/market' && !selectedMarketId ? 'active' : ''}`}
                    onClick={() => {
                      setIsMarketsOpen(false)
                      closeMobileMenu()
                    }}
                    to="/market"
                  >
                    All Markets
                  </Link>
                </div>
              )}
            </div>
            <NavLink className="nav-link" onClick={closeMobileMenu} to="/trade">
              Trade
            </NavLink>
          </nav>

          <div className="top-navbar-actions nav nav-pills">
            <NavLink className="nav-link" onClick={closeMobileMenu} to="/profile">
              Profile
            </NavLink>
            <Link className="nav-link" onClick={closeMobileMenu} to="/">
              Log out
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
