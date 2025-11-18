import { ShoppingCart, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg" style={{background:'#00B0B5'}}></div>
            <span className="font-semibold text-lg" style={{color:'#1E2A38'}}>TNtrendz</span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-1/2">
            <Search className="w-4 h-4 text-gray-400" />
            <input placeholder="Search for styles, brands..." className="bg-transparent w-full outline-none text-sm" />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <ShoppingCart className="w-6 h-6" style={{color:'#1E2A38'}} />
              <span className="absolute -top-2 -right-2 bg-[#FF6F61] text-white text-xs rounded-full px-1">2</span>
            </button>
            <button>
              <User className="w-6 h-6" style={{color:'#1E2A38'}} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;