'use client';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* 主体内容 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-2">
                <span className="text-2xl font-bold text-white">🌳</span>
              </div>
              <span className="text-2xl font-bold">从林科技</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              专业的企业信息化解决方案提供商，助力企业数字化转型，实现高效管理与可持续发展。
            </p>
            
            {/* 联系方式 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">公司地址</h4>
                  <p className="text-gray-400">上海市浦东新区张江高科技园区</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">联系电话</h4>
                  <p className="text-gray-400">400-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">邮箱地址</h4>
                  <p className="text-gray-400">info@conglink.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                首页
              </a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                关于我们
              </a></li>
              <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                产品服务
              </a></li>
              <li><a href="/cases" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                成功案例
              </a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                联系我们
              </a></li>
            </ul>
          </div>
          
          {/* 产品服务 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">产品服务</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                鼎捷T100
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                易飞ERP
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                易助ERP
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                sMES系统
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                定制开发
              </a></li>
            </ul>
          </div>
          
          {/* 社交媒体 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">关注我们</h3>
            <div className="space-y-4">
              <p className="text-gray-400">关注我们的社交媒体，获取最新资讯和行业动态。</p>
              
              {/* 社交媒体图标 */}
              <div className="flex gap-4">
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
                
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 8.5c.38 0 .7.32.7.7s-.32.7-.7.7h-1.4l1.3 1.3c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-1.3-1.3v1.4c0 .38-.32.7-.7.7s-.7-.32-.7-.7v-1.4l-1.3 1.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.3-1.3h-1.4c-.38 0-.7-.32-.7-.7s.32-.7.7-.7h1.4l-1.3-1.3c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.3 1.3v-1.4c0-.38.32-.7.7-.7s.7.32.7.7v1.4l1.3-1.3c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-1.3 1.3h1.4z" />
                  </svg>
                </a>
                
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:-translate-y-1">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6v-3h12v3zm0-5H6V9h12v4zm0-5H6V4h12v4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部信息 */}
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 从林科技有限公司. 保留所有权利
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
