function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom pb-3 mb-4">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="h3 fw-bold mb-2">{title}</h1>
        {description && <p className="text-secondary mb-0">{description}</p>}
      </div>
      {action && <div className="align-self-md-start">{action}</div>}
    </div>
  )
}

export default PageHeader
