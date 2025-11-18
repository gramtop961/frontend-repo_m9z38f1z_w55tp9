const Footer = () => {
  return (
    <footer className="py-10" style={{background:'#1E2A38', color:'#FAFAFA'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg" style={{background:'#00B0B5'}}></div>
            <span className="font-semibold">TNtrendz</span>
          </div>
          <p className="text-sm text-gray-300">Minimal silhouettes, maximal impact. Fashion-forward essentials designed in India.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Stay in the loop</h4>
          <div className="flex gap-2">
            <input placeholder="Email" className="flex-1 rounded-lg px-3 py-2 text-sm text-black" />
            <button className="px-4 py-2 rounded-lg text-white text-sm" style={{background:'#FF6F61'}}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">© {new Date().getFullYear()} TNtrendz. All rights reserved.</div>
    </footer>
  )
}

export default Footer