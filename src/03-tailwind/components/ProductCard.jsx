import AddButton from "./AddButton"
import Rating from "./Rating"
import Review from "./Review"
import Skeleton from "./Skeleton"

function ProductCard({ product, loading = false  }) {
  if (loading) { // Verifica se deve renderizar o skeleton
    return <Skeleton />
  }

  return (
    <article 
    aria-label={product.name}
    className="w-full bg-white dark:bg-neutral-700 rounded-lg p-6 flex flex-col gap-15"
    >
      <section className="flex flex-col justify-between gap-8 sm:gap-10 md:gap-15 md:flex-row">
        <div className="bg-green-50 max-w-full w-full rounded-sm flex justify-center items-end relative md:max-w-[400px]">
          {product.tag && 
            <span  
            aria-label={`Tag: ${product.tag}`}
            className={`absolute top-2 left-2 w-fit py-[1px] px-[6px] font-[.9rem] font-medium rounded-sm text-green-50 ${product.tag === "Novo" ? "bg-emerald-700" : "bg-red-300"}`}
            >
              {product.tag}
            </span>
          }
          <img src={product.img} alt={`Imagem de ${product.name}`} loading="lazy" />
        </div>

        <section className="w-full flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-3xl sm:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-2 text-neutral-500 dark:text-zinc-100 text-sm h-[22px]">
              <Rating rating={product.rating} ratingAmount={product.ratingAmount} /> {product.rating} ({product.ratingAmount})
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold text-emerald-700 dark:text-green-50">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <p className="font-medium">
              Ou até 3x de {(product.price / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>

          <AddButton id={product.id} />
        </section>
      </section>
      
      <section>
        <div className="flex items-center gap-4 mb-3">
          <h2 className="font-medium text-2xl">Descrição</h2>
          <hr className="text-zinc-200 dark:text-zinc-800 border-1 w-full" />
        </div>
        <p>{product.description}</p>
        <p>Tamanho: {product.size}</p>
      </section>

      <section>
        <div className="flex items-center gap-4">
          <h2 className="font-medium text-2xl">Avaliações</h2>
          <hr className="text-zinc-200 dark:text-zinc-800 border-1 w-full" />
        </div>
        
        <section className="flex flex-col">
          {product.reviews.length > 0
          ? product.reviews.map(review => {
              return <Review key={review.id} review={review} />
            })
          : <p className="text-neutral-500 dark:text-zinc-100 text-center py-8">
              Ainda não há avaliações para este produto.
            </p>
          }

        {product.reviews.length > 0 
        && <button className="border-2 text-medium border-transparent rounded-sm bg-emerald-700 text-white py-1 px-8 cursor-pointer hover:not-[:active]:border-emerald-700 dark:hover:not-[:active]:border-green-50 hover:text-emerald-700 dark:hover:text-green-50 hover:not-[:active]:bg-transparent active:bg-transparent active:text-emerald-700 active:scale-90 transition-all duration-250 mt-6 self-center">Ver mais avaliações</button>}
        </section>
      </section>
    </article>
  )
}

export default ProductCard
