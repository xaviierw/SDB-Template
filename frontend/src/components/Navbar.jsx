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
    <aside className="sidebar text-white d-flex flex-column">
      <div className="sidebar-header">
        <Link className="d-block text-white text-decoration-none fw-bold" onClick={closeMobileMenu} to="/dashboard">
          {appConfig.appName}
        </Link>
        <button
          aria-controls="sidebarNav"
          aria-expanded={isMobileMenuOpen}
          className="btn btn-sm sidebar-menu-button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          Menu
        </button>
      </div>

      <div className={`sidebar-collapse ${isMobileMenuOpen ? 'open' : ''}`} id="sidebarNav">
        <nav className="nav nav-pills flex-column gap-1">
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

        <div className="sidebar-footer nav nav-pills flex-column gap-1">
          <NavLink className="nav-link" onClick={closeMobileMenu} to="/profile">
            Profile
          </NavLink>
          <Link className="nav-link" onClick={closeMobileMenu} to="/">
            Log out
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Navbar
