import { useEffect, useState } from 'react'

const inr = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

const ProductCard = ({ p, addToCart }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full" style={{background:'#00B0B5', color:'white'}}>New</div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-1" style={{color:'#1E2A38'}}>{p.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-3">{p.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold" style={{color:'#1E2A38'}}>{inr(p.price)}</span>
        <button onClick={() => addToCart(p)} className="px-4 py-2 rounded-full text-white text-sm" style={{background:'#FF6F61'}}>Add</button>
      </div>
    </div>
  </div>
)

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/products`).then(r => r.json()).then(setProducts).catch(()=>{})
  }, [base])

  const addToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.title === p.title)
      if (exists) return prev.map(i => i.title === p.title ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...p, quantity: 1 }]
    })
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const shipping = subtotal >= 999 ? 0 : (cart.length ? 99 : 0)
  const total = subtotal + shipping

  const checkout = async () => {
    const items = cart.map(({ _id, ...rest }) => rest)
    const res = await fetch(`${base}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
    const data = await res.json()
    alert(`Order placed! Total: ${inr(data.total)}`)
    setCart([])
  }

  return (
    <section id="products" className="py-14" style={{background:'#FAFAFA'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{color:'#1E2A38'}}>New Arrivals</h2>
            <p className="text-gray-600 text-sm">Curated essentials in ocean teal and coral accents</p>
          </div>
          <div className="hidden md:flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-white">
            <div className="text-sm">Subtotal</div>
            <div className="font-semibold" style={{color:'#1E2A38'}}>{inr(subtotal)}</div>
            <div className="text-sm text-gray-500">• Shipping {inr(shipping)}</div>
            <div className="font-bold" style={{color:'#00B0B5'}}>{inr(total)}</div>
            <button disabled={!cart.length} onClick={checkout} className="ml-2 px-4 py-2 rounded-full text-white disabled:opacity-50" style={{background:'#00B0B5'}}>Checkout</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, idx) => (
            <ProductCard key={idx} p={p} addToCart={addToCart} />
          ))}
        </div>

        {/* Mobile sticky cart summary */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 p-3 rounded-2xl shadow-lg border bg-white">
          <div className="flex items-center justify-between">
            <div className="text-sm">Total</div>
            <div className="font-bold" style={{color:'#00B0B5'}}>{inr(total)}</div>
            <button disabled={!cart.length} onClick={checkout} className="px-4 py-2 rounded-full text-white disabled:opacity-50" style={{background:'#00B0B5'}}>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid