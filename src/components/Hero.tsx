'use client';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
              <span className="text-6xl">🌳</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">从林科技</span>
            <span className="text-blue-200">数字化转型专家</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            专注为企业提供鼎捷T100、易飞、易助、sMES等全方位信息化解决方案，助力企业实现高效管理与数字化转型
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300">
              <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                了解更多 →
              </span>
            </button>
            <button className="group px-10 py-4 bg-transparent text-white border-2 border-white/30 font-semibold rounded-xl hover:bg-white/10 transition-all hover:border-white/50 transform hover:-translate-y-1 duration-300">
              联系我们
            </button>
          </div>
          
          {/* 客户统计 */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 text-sm">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-100 text-sm">行业经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-100 text-sm">企业客户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100 text-sm">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
