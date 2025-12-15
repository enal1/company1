'use client';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center mb-20">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            关于我们
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从林科技，您值得信赖的数字化转型合作伙伴
          </p>
        </div>
        
        {/* 内容部分 */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* 左侧文字内容 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">公司简介</h3>
              <p className="text-gray-600 leading-relaxed">
                从林科技有限公司专注于为企业提供专业的信息化解决方案，助力企业数字化转型。我们拥有一支经验丰富的技术团队，致力于为客户提供优质的产品和服务。
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">
                  🎯
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">我们的使命</h4>
                  <p className="text-gray-600">帮助企业实现高效管理，提升核心竞争力</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl">
                  🌟
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">我们的愿景</h4>
                  <p className="text-gray-600">成为行业领先的企业信息化解决方案提供商</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                  🤝
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">我们的价值观</h4>
                  <p className="text-gray-600">专业、创新、诚信、共赢</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右侧数据卡片 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 主数据卡片 */}
            <div className="col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-4">💼</div>
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-blue-100">年行业经验</p>
              </div>
            </div>
            
            {/* 子数据卡片 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
                <p className="text-gray-600">企业客户</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-600">技术专家</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">客户满意度</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 核心优势 */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">
            我们的核心优势
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                🔧
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">专业技术团队</h4>
              <p className="text-gray-600">
                拥有多年行业经验的技术专家团队，为您提供专业的信息化解决方案
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mb-6">
                📈
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">量身定制方案</h4>
              <p className="text-gray-600">
                根据企业实际需求，量身定制最适合的信息化解决方案
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤝
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">全程贴心服务</h4>
              <p className="text-gray-600">
                从需求分析到系统上线，提供全程贴心服务和技术支持
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
