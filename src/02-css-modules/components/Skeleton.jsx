import styles from "./Skeleton.module.css"

function Skeleton() {
  return (
    <article className={styles.item} aria-busy="true" aria-label="Produto carregando"> {/* Elemento semântico article para o card */}
      <div className={`${styles.itemDetails}`}>
        <div className={`${styles.imgContainer} ${styles.skeleton} ${styles.media}`} />

        <section className={`${styles.section}`}>
          <div>
            <div className={`${styles.name} ${styles.skeleton}`} />
            <div className={`${styles.unityPrice} ${styles.skeleton}`} />
          </div>
          <div className={`${styles.totalPrice} ${styles.skeleton}`} />
        </section>
      </div>

      <section className={`${styles.section} ${styles.controlSection}`}>
        <div className={`${styles.quantityControl} ${styles.skeleton}`} />

        <div className={`${styles.remove} ${styles.skeleton}`} />
      </section>
    </article>
  )
}

export default Skeleton
