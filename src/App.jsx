import { useRef } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CTA from './components/CTA'

function App() {
  const shopRef = useRef(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const scrollToShop = () => {
    const el = document.getElementById('shop')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const seedProducts = async () => {
    try {
      const res = await fetch(`${backend}/api/seed`, { method: 'POST' })
      if (!res.ok) throw new Error('Failed to seed')
      // After seed, refresh product list by navigating to #shop (triggers grid effect)
      window.location.hash = '#shop'
      // Soft reload products by dispatching a hashchange (ProductGrid uses effect on category)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero onShopNow={scrollToShop} />
      <ProductGrid ref={shopRef} />
      <CTA onSeed={seedProducts} />
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Your Cosmetics Shop. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
