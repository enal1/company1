'use client';

const Products = () => {
  // 产品数据
  const products = [
    {
      id: 1,
      name: '鼎捷T100',
      description: '大型企业ERP系统，支持多组织、多工厂、多语言',
      icon: '🏭',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      name: '易飞ERP',
      description: '中型企业ERP系统，功能全面，易于实施',
      icon: '📊',
      color: 'from-indigo-600 to-purple-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 3,
      name: '易助ERP',
      description: '小型企业ERP系统，性价比高，快速上线',
      icon: '🚀',
      color: 'from-purple-600 to-pink-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      name: 'sMES系统',
      description: '制造执行系统，实现生产过程可视化管理',
      icon: '⚙️',
      color: 'from-pink-600 to-rose-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center mb-20">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            产品服务
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们提供全方位的企业信息化解决方案，满足不同企业的需求
          </p>
        </div>
        
        {/* 产品卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* 产品头部 */}
              <div className={`bg-gradient-to-r ${product.color} text-white p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                </div>
              </div>
              
              {/* 产品内容 */}
              <div className="p-8 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                {/* 产品特性 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`${product.textColor} text-sm font-semibold`}>✅</span>
                    <span className="text-sm text-gray-600">专业实施团队</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`${product.textColor} text-sm font-semibold`}>✅</span>
                    <span className="text-sm text-gray-600">全程技术支持</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`${product.textColor} text-sm font-semibold`}>✅</span>
                    <span className="text-sm text-gray-600">定制化开发</span>
                  </div>
                </div>
                
                {/* 了解详情按钮 */}
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={`/products/${product.id}`} 
                    className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3 ${product.textColor}`}
                  >
                    <span>了解详情</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 更多产品按钮 */}
        <div className="text-center mt-16">
          <button className="group px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
              查看更多产品 →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
