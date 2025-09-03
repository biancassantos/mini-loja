function Skeleton() {
  const skeleton = "relative bg-[#e9e9ee] dark:bg-[#1c1d24] overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-linear-to-r after:from-transparent after:to-[#ffffffa6] dark:after:to-[#2a2c34] after:animate-shimmer"
  const media = "w-full aspect-square object-cover bg-[#e9e9ee] dark:bg-[#1c1d24] block transition-opacity duration-200 ease-linear"

  return (
    <article 
    aria-busy="true" 
    aria-label="Produto carregando" 
    className="w-full bg-white dark:bg-neutral-700 rounded-lg p-6 flex flex-col gap-15"
    > {/* Elemento semântico article para o card */}
      <div className="flex flex-col justify-between gap-8 sm:gap-10 md:gap-15 md:flex-row">
        <div className={`${skeleton} ${media} max-w-full w-full rounded-sm md:max-w-[400px]`} />

        <div className="w-full flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-2">
            <div className={`${skeleton} h-9 w-[220px] md:w-[150px] `} />
            <div className={`${skeleton} h-6 w-[120px] self-start`} />
          </div>
          
          <div className={`${skeleton} h-7 w-[100px]`} />

          <div className={`${skeleton} rounded-sm h-10 w-[200px]`} />
        </div>
      </div>
      
      <section>
        <div className={`${skeleton} h-8 w-[150px]`} />
        <div className={`${skeleton}`} />
        <div className={`${skeleton}`} />
      </section>

      <section>
        <div className={`${skeleton} h-8 w-[150px]`} />
        <div className={`${skeleton}`} />
        <div className={`${skeleton}`} />
      </section>
    </article>
  )
}

export default Skeleton
