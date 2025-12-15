'use client';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">关于我们</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            从林科技，您值得信赖的数字化转型合作伙伴
          </p>
        </div>
      </section>
      
      {/* 公司简介 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公司简介</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                从林科技有限公司成立于2015年，专注于为企业提供专业的信息化解决方案，助力企业数字化转型。我们拥有一支经验丰富的技术团队，致力于为客户提供优质的产品和服务。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                多年来，我们始终坚持以客户为中心，不断创新和完善产品服务，已成功为500+企业提供了信息化解决方案，涵盖制造业、贸易业、服务业等多个行业。
              </p>
              
              {/* 核心价值观 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-600 mb-2">专业</h3>
                  <p className="text-sm text-gray-600">专业的技术团队，提供专业的解决方案</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-indigo-600 mb-2">创新</h3>
                  <p className="text-sm text-gray-600">不断创新，引领行业发展趋势</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-purple-600 mb-2">诚信</h3>
                  <p className="text-sm text-gray-600">诚信经营，赢得客户信赖</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-pink-600 mb-2">共赢</h3>
                  <p className="text-sm text-gray-600">与客户共同成长，实现互利共赢</p>
                </div>
              </div>
            </div>
            
            {/* 公司形象 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 text-center">
              <div className="text-8xl mb-6">🏢</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">从林科技</h3>
              <p className="text-gray-600 mb-8">数字化转型专家</p>
              
              {/* 公司数据 */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-sm text-gray-600">年经验</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <p className="text-sm text-gray-600">客户</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <p className="text-sm text-gray-600">成功案例</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 发展历程 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">发展历程</h2>
          
          {/* 时间线 */}
          <div className="relative">
            {/* 时间线轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {/* 时间线节点 */}
            <div className="space-y-16">
              {/* 2025 */}
              <div className="flex justify-between items-center">
                <div className="md:w-5/12 pr-12 text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2025年</h3>
                    <p className="text-gray-600">公司规模扩大，成立研发中心，推出新一代智能化解决方案</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  25
                </div>
                <div className="md:w-5/12 pl-12"></div>
              </div>
              
              {/* 2023 */}
              <div className="flex justify-between items-center">
                <div className="md:w-5/12 pr-12"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  23
                </div>
                <div className="md:w-5/12 pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2023年</h3>
                    <p className="text-gray-600">成为鼎捷软件核心合作伙伴，拓展ERP市场份额</p>
                  </div>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="flex justify-between items-center">
                <div className="md:w-5/12 pr-12 text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2020年</h3>
                    <p className="text-gray-600">推出sMES系统，进军智能制造领域</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  20
                </div>
                <div className="md:w-5/12 pl-12"></div>
              </div>
              
              {/* 2018 */}
              <div className="flex justify-between items-center">
                <div className="md:w-5/12 pr-12"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  18
                </div>
                <div className="md:w-5/12 pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2018年</h3>
                    <p className="text-gray-600">公司获得ISO9001质量体系认证，服务体系更加完善</p>
                  </div>
                </div>
              </div>
              
              {/* 2015 */}
              <div className="flex justify-between items-center">
                <div className="md:w-5/12 pr-12 text-right">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2015年</h3>
                    <p className="text-gray-600">从林科技正式成立，专注于企业信息化解决方案</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  15
                </div>
                <div className="md:w-5/12 pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 团队介绍 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">核心团队</h2>
          <p className="text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            我们拥有一支经验丰富、技术精湛的核心团队，致力于为客户提供优质的产品和服务
          </p>
          
          {/* 团队成员 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* 团队成员1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-6xl">👨💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">张明</h3>
                <p className="text-blue-600 mb-4">创始人 & CEO</p>
                <p className="text-gray-600 text-sm">
                  15年企业信息化行业经验，曾任职于多家知名IT企业，拥有丰富的管理和技术经验
                </p>
              </div>
            </div>
            
            {/* 团队成员2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <div className="text-6xl">👩💻</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">李娜</h3>
                <p className="text-indigo-600 mb-4">技术总监</p>
                <p className="text-gray-600 text-sm">
                  12年软件开发经验，专注于企业级应用架构设计，擅长大数据和人工智能技术
                </p>
              </div>
            </div>
            
            {/* 团队成员3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                <div className="text-6xl">👨🎓</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">王强</h3>
                <p className="text-purple-600 mb-4">实施总监</p>
                <p className="text-gray-600 text-sm">
                  10年ERP实施经验，成功实施过200+企业信息化项目，熟悉制造业和贸易业业务流程
                </p>
              </div>
            </div>
            
            {/* 团队成员4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center">
                <div className="text-6xl">👩🎨</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">刘芳</h3>
                <p className="text-pink-600 mb-4">产品总监</p>
                <p className="text-gray-600 text-sm">
                  8年产品设计经验，专注于用户体验和产品创新，擅长将复杂业务需求转化为简洁易用的产品
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 企业文化 */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">企业文化</h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* 使命 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                帮助企业实现高效管理，提升核心竞争力，助力企业数字化转型和可持续发展
              </p>
            </div>
            
            {/* 愿景 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mb-6">
                🌟
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为行业领先的企业信息化解决方案提供商，打造百年企业
              </p>
            </div>
            
            {/* 价值观 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤝
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">核心价值观</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  以客户为中心
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  专业、创新、诚信、共赢
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  追求卓越，持续改进
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系我们 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">联系我们</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  无论您有任何疑问或需求，欢迎随时联系我们，我们将竭诚为您服务
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">公司地址</h3>
                      <p className="text-blue-100">上海市浦东新区张江高科技园区</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">联系电话</h3>
                      <p className="text-blue-100">400-123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">邮箱地址</h3>
                      <p className="text-blue-100">info@conglink.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 联系表单 */}
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="text-xl font-semibold mb-6">发送消息</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">电话</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                        placeholder="请输入您的电话"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">留言内容</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                      placeholder="请输入您的留言内容"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
