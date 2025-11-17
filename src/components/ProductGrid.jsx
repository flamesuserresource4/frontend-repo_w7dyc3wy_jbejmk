import { useEffect, useMemo, useState } from "react"
import ProductCard from "./ProductCard"

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [category, setCategory] = useState("all")
  const [categories, setCategories] = useState(["all"]) 

  const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  useEffect(() => {
    const load = async () => {
      try {
        const catsRes = await fetch(`${backend}/api/categories`)
        if (catsRes.ok) {
          const cats = await catsRes.json()
          setCategories(["all", ...cats])
        }
      } catch (e) {
        // ignore
      }
      try {
        setLoading(true)
        const url = category === "all" ? `${backend}/api/products` : `${backend}/api/products?category=${encodeURIComponent(category)}`
        const res = await fetch(url)
        if (!res.ok) throw new Error("Failed to load products")
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category])

  const title = useMemo(() => (category === "all" ? "All products" : category.charAt(0).toUpperCase() + category.slice(1)), [category])

  if (loading) return <div className="py-20 text-center text-gray-500">Loading products…</div>
  if (error) return <div className="py-20 text-center text-red-600">{error}</div>

  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h2>
          <p className="mt-2 text-gray-600">Carefully selected cosmetics you’ll love</p>
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border px-3 py-2 text-sm">
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {products.length === 0 ? (
        <div className="rounded-lg border bg-white p-10 text-center text-gray-600">No products yet. Click “Seed demo products” to add samples.</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}
