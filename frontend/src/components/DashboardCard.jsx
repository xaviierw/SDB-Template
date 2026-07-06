function DashboardCard({ title, value, note }) {
  return (
    <div className="card border-0 rounded-3 h-100">
      <div className="card-body">
        <p className="text-secondary small mb-1">{title}</p>
        <p className="h4 fw-bold mb-1">{value}</p>
        {note && <p className="text-secondary small mb-0">{note}</p>}
      </div>
    </div>
  )
}

export default DashboardCard
