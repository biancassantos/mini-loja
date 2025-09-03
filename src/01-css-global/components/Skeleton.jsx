function Skeleton() {
  return (
    <article className="card" aria-busy="true" aria-label="Produto carregando"> {/* Elemento semântico article para o card */}
      <div className="card-img-container media skeleton" />
      <div className="card-info">
        <div className="skeleton" />
        <div className="rating skeleton" />
        <div className="price skeleton" />
      </div>
      <div className="add-to-cart-btn skeleton" />
    </article>
  )
}

export default Skeleton
