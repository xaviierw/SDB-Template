function StatusBadge({ status = 'Active', type = 'neutral' }) {
  const badgeClass = {
    success: 'text-bg-success',
    warning: 'text-bg-warning',
    danger: 'text-bg-danger',
    neutral: 'text-bg-light border text-secondary',
  }

  return <span className={`badge rounded-pill ${badgeClass[type] || badgeClass.neutral}`}>{status}</span>
}

export default StatusBadge
