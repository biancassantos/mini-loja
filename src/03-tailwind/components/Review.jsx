import Rating from "./Rating"

function Review({ review }) {
  return (
    <section className="flex flex-col gap-4 border-b-1 border-b-zinc-200 dark:border-b-zinc-800 py-8">
      <Rating rating={review.rating} />
      <p className="mt-2">{review.review}</p>
      <span className="text-neutral-500 dark:text-zinc-100 text-sm">{review.date}</span>
    </section>
  )
}

export default Review
