export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        {product.image_url ? (
          <img src={product.image_url} alt={product.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">No image</div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">${product.price?.toFixed(2)}</span>
          {product.shopify_url ? (
            <a href={product.shopify_url} target="_blank" rel="noreferrer" className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white hover:bg-gray-800">View</a>
          ) : (
            <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">In stock</span>
          )}
        </div>
      </div>
    </div>
  )
}
