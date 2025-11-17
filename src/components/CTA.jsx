export default function CTA({ onSeed }) {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Just getting started?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">Populate your store with a few sample products to preview the experience.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={onSeed} className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">Seed demo products</button>
            <a href="#shop" className="rounded-md bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-700">Browse products</a>
          </div>
        </div>
      </div>
    </section>
  )
}
