import { ShoppingBag, Star } from "lucide-react";

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium mb-4">
            <Star className="w-3.5 h-3.5" /> New season drops are live
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Elevate your glow with curated cosmetic essentials
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Clean, cruelty-free formulas. Thoughtfully crafted. Loved by thousands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onShopClick} className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-lg font-semibold shadow-sm transition">
              <ShoppingBag className="w-4 h-4" /> Shop bestsellers
            </button>
            <a href="#about" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-5 py-3 rounded-lg font-semibold transition">
              Learn more
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-500" /><span>4.8/5 average rating</span></div>
            <div>Free shipping over $50</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-white/70 backdrop-blur border border-white shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1561719205-2f720fe7a7f3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3NtZXRpY3MlMjBoZXJvfGVufDB8MHx8fDE3NjM0MDE2MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cosmetics hero" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
            <p className="text-xs text-gray-500">Cruelty-free • Vegan • Dermatologist tested</p>
          </div>
        </div>
      </div>
    </section>
  );
}
