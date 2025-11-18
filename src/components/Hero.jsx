import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{background:'#FAFAFA', color:'#333333'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{color:'#1E2A38'}}>
            <span className="w-2 h-2 rounded-full" style={{background:'#00B0B5'}}></span>
            New Season • Minimal + Fashion-Forward
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{color:'#1E2A38'}}>
            Elevate Your Everyday with TNtrendz
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Streamlined silhouettes, ocean hues, and coral accents. Built for speed, designed for style.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#products" className="px-6 py-3 rounded-full text-white" style={{background:'#00B0B5'}}>Shop New Arrivals</a>
            <a href="#trending" className="px-6 py-3 rounded-full border" style={{borderColor:'#1E2A38', color:'#1E2A38'}}>Explore Trending</a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;