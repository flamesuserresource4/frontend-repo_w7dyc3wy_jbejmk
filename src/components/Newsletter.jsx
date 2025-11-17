export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Join our glow club</h3>
              <p className="mt-2 text-rose-50">Be first to know about drops, deals, and skincare tips.</p>
            </div>
            <form className="flex gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="Enter your email" className="w-full rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500" />
              <button className="shrink-0 rounded-lg bg-gray-900 hover:bg-black px-5 py-3 font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
