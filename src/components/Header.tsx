'use client';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-2">
            <span className="text-2xl font-bold text-white">🌳</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            从林科技
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="/" className="group relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
            <span>首页</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/about" className="group relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
            <span>关于我们</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/products" className="group relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
            <span>产品服务</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/contact" className="group relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
            <span>联系我们</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            立即咨询
          </button>
          
          <button className="md:hidden text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
