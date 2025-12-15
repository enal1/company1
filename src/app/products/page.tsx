'use client';
import { useState, useEffect } from 'react';

// 解决方案表单组件
const SolutionForm = () => {
  // 状态管理
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    industry: '',
    requirement: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // 表单变化处理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    let value: string | boolean;
    
    if (target.type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    } else {
      value = target.value;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // 表单验证
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // 姓名验证
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    // 电话验证
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入您的电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }
    
    // 公司名称验证
    if (!formData.company.trim()) {
      newErrors.company = '请输入您的公司名称';
    }
    
    // 行业验证
    if (!formData.industry) {
      newErrors.industry = '请选择您的行业';
    }
    
    // 隐私政策验证
    if (!formData.privacy) {
      newErrors.privacy = '请阅读并同意隐私政策';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 表单提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    if (!validateForm()) {
      return;
    }
    
    // 模拟提交
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // 重置表单
      setFormData({
        name: '',
        phone: '',
        company: '',
        industry: '',
        requirement: '',
        privacy: false
      });
      
      // 3秒后隐藏成功消息
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // 成功消息
  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-12 text-center">
        <div className="text-8xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">提交成功！</h3>
        <p className="text-green-600">
          您的申请已经成功提交，我们的顾问将在24小时内与您联系
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="请输入您的姓名"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">电话 *</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="请输入您的电话"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">公司名称 *</label>
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
              errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="请输入您的公司名称"
          />
          {errors.company && (
            <p className="mt-2 text-sm text-red-500">{errors.company}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">行业 *</label>
          <select 
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
              errors.industry ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            <option value="">请选择行业</option>
            <option value="制造业">制造业</option>
            <option value="贸易业">贸易业</option>
            <option value="服务业">服务业</option>
            <option value="批发零售">批发零售</option>
            <option value="其他">其他</option>
          </select>
          {errors.industry && (
            <p className="mt-2 text-sm text-red-500">{errors.industry}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
        <textarea 
          rows={4} 
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
          placeholder="请描述您的需求"
        ></textarea>
      </div>
      
      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          name="privacy"
          id="privacy_agreement" 
          checked={formData.privacy}
          onChange={handleChange}
          className={`mt-1 h-5 w-5 focus:ring-2 focus:border-transparent transition-all ${
            errors.privacy ? 'text-red-500 focus:ring-red-500' : 'text-blue-600 focus:ring-blue-500'
          } border-gray-300 rounded`}
        />
        <label htmlFor="privacy_agreement" className="text-sm text-gray-600">
          我已阅读并同意 <a href="#" className="text-blue-600 hover:underline">隐私政策</a>
        </label>
      </div>
      {errors.privacy && (
        <p className="mt-2 text-sm text-red-500">{errors.privacy}</p>
      )}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-4 font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg ${
          isSubmitting 
            ? 'bg-gray-500 text-white cursor-not-allowed opacity-80'
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
        }`}
      >
        {isSubmitting ? '提交中...' : '提交表单'}
      </button>
    </form>
  );
};

const ProductsPage = () => {
  // 产品数据
  const products = [
    {
      id: 1,
      name: '鼎捷T100',
      description: '大型企业ERP系统，支持多组织、多工厂、多语言',
      icon: '🏭',
      color: 'from-blue-600 to-indigo-700',
      features: [
        '支持多组织、多工厂、多语言',
        '全面的财务、供应链、生产管理功能',
        '强大的数据分析和决策支持',
        '灵活的自定义配置能力'
      ],
      industries: ['制造业', '贸易业', '服务业'],
      details: '鼎捷T100是专为大型企业设计的ERP系统，具备强大的多组织、多工厂、多语言支持，能够满足复杂企业的管理需求。系统涵盖财务、供应链、生产、人力资源等各个领域，提供全面的管理功能和数据分析能力，帮助企业实现高效管理和数字化转型。'
    },
    {
      id: 2,
      name: '易飞ERP',
      description: '中型企业ERP系统，功能全面，易于实施',
      icon: '📊',
      color: 'from-indigo-600 to-purple-700',
      features: [
        '功能全面，覆盖企业核心业务',
        '实施周期短，投资回报率高',
        '友好的用户界面，易于操作',
        '完善的售后服务体系'
      ],
      industries: ['制造业', '贸易业', '批发零售'],
      details: '易飞ERP是专为中型企业设计的ERP系统，功能全面且易于实施。系统涵盖了企业核心业务流程，包括采购、销售、库存、生产、财务等，能够帮助企业实现一体化管理，提高运营效率，降低管理成本。'
    },
    {
      id: 3,
      name: '易助ERP',
      description: '小型企业ERP系统，性价比高，快速上线',
      icon: '🚀',
      color: 'from-purple-600 to-pink-700',
      features: [
        '性价比高，适合小型企业',
        '快速上线，部署简单',
        '核心功能齐全，满足基本需求',
        '支持移动端访问'
      ],
      industries: ['小型制造', '贸易', '服务行业'],
      details: '易助ERP是专为小型企业设计的ERP系统，具有性价比高、快速上线等特点。系统包含了小型企业所需的核心功能，如采购、销售、库存、财务等，能够帮助小型企业实现规范化管理，提高运营效率。'
    },
    {
      id: 4,
      name: 'sMES系统',
      description: '制造执行系统，实现生产过程可视化管理',
      icon: '⚙️',
      color: 'from-pink-600 to-rose-700',
      features: [
        '生产过程实时监控',
        '质量管理和追溯',
        '设备管理和维护',
        '数据采集和分析'
      ],
      industries: ['制造业', '汽车零部件', '电子制造'],
      details: 'sMES系统是一套制造执行系统，能够实现生产过程的实时监控和可视化管理。系统通过数据采集、生产调度、质量管理、设备管理等功能，帮助企业提高生产效率，降低生产成本，提升产品质量。'
    }
  ];

  // 状态管理
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 平滑滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // 平滑滚动到指定位置
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 过滤产品
  const filteredProducts = selectedIndustry 
    ? products.filter(product => product.industries.includes(selectedIndustry))
    : products;

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">产品服务</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            为不同规模企业提供专业的信息化解决方案
          </p>
        </div>
      </section>
      
      {/* 行业过滤 */}
      <section id="products" className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">按行业筛选</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedIndustry(null)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!selectedIndustry ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                全部
              </button>
              <button
                onClick={() => setSelectedIndustry('制造业')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === '制造业' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                制造业
              </button>
              <button
                onClick={() => setSelectedIndustry('贸易业')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === '贸易业' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                贸易业
              </button>
              <button
                onClick={() => setSelectedIndustry('服务业')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === '服务业' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                服务业
              </button>
              <button
                onClick={() => setSelectedIndustry('批发零售')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === '批发零售' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                批发零售
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 产品列表 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 产品头部 */}
                <div className={`bg-gradient-to-r ${product.color} p-8 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white text-6xl hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                        <p className="text-blue-100">{product.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
                      className="text-white hover:text-blue-200 transition-colors hover:scale-110"
                    >
                      <svg className={`w-6 h-6 transition-transform duration-300 ${activeProduct === product.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* 产品内容 */}
                <div className="p-8">
                  {/* 适用行业 */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">适用行业</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.industries.map((industry, index) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                          style={{ animationDelay: `${(index + 1) * 50}ms` }}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 产品特性 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">核心特性</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 opacity-0 animate-fade-in" 
                          style={{ animationDelay: `${(index + 1) * 50}ms` }}
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center text-white text-xs hover:scale-110 transition-transform duration-300`}>
                            ✅
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 产品详情（可展开） */}
                  {activeProduct === product.id && (
                    <div className="mt-8 pt-8 border-t border-gray-200 animate-slide-up">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">产品详情</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {product.details}
                      </p>
                      
                      {/* 产品优势 */}
                      <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                        <h4 className="font-semibold text-gray-900 mb-3">产品优势</h4>
                        <ul className="space-y-2">
                          {[
                            '提升企业管理效率，降低运营成本',
                            '支持企业数字化转型，增强竞争力',
                            '安全可靠，数据保护有保障',
                            '专业团队提供全程服务支持'
                          ].map((advantage, index) => (
                            <li 
                              key={index} 
                              className="flex items-center gap-3 text-sm text-gray-700 hover:translate-x-2 transition-transform duration-300"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <span className="text-blue-600">💡</span>
                              {advantage}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {/* 操作按钮 */}
                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      了解详情
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                      咨询报价
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 空状态 */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">暂无相关产品</h3>
              <p className="text-gray-600">请尝试其他行业筛选条件</p>
            </div>
          )}
        </div>
      </section>
      
      {/* 解决方案 */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">解决方案</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              针对不同行业和企业规模，提供定制化的解决方案
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* 解决方案1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                🏭
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">制造业解决方案</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                为制造业企业提供从订单到交付的全流程管理解决方案，实现生产过程可视化和数字化管理
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  生产计划与排程
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  车间现场管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  质量管理体系
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✅</span>
                  设备维护管理
                </li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors">
                查看详情 →
              </button>
            </div>
            
            {/* 解决方案2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mb-6">
                📦
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">贸易业解决方案</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                为贸易企业提供采购、销售、库存、财务一体化管理解决方案，提升供应链效率
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✅</span>
                  多渠道销售管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✅</span>
                  智能库存管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✅</span>
                  供应商管理系统
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✅</span>
                  实时数据分析
                </li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-colors">
                查看详情 →
              </button>
            </div>
            
            {/* 解决方案3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-6">
                💼
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">服务业解决方案</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                为服务业企业提供客户管理、项目管理、财务管理一体化解决方案，提升服务质量和效率
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✅</span>
                  客户关系管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✅</span>
                  项目进度跟踪
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✅</span>
                  服务工单管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✅</span>
                  业绩报表分析
                </li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 transition-colors">
                查看详情 →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 客户评价 */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              听听我们客户的真实反馈
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 评价1 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "从林科技的ERP系统帮助我们实现了全面的信息化管理，提高了生产效率，降低了运营成本。他们的技术团队非常专业，服务也很到位。"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                  👨💼
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">张经理</h4>
                  <p className="text-gray-500 text-sm">上海汽车零部件有限公司</p>
                </div>
              </div>
            </div>
            
            {/* 评价2 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "易飞ERP系统功能全面，实施周期短，投资回报率高。从林科技的实施团队非常专业，帮助我们快速上线系统，培训也很到位。"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl">
                  👩💼
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">李总</h4>
                  <p className="text-gray-500 text-sm">北京贸易有限公司</p>
                </div>
              </div>
            </div>
            
            {/* 评价3 */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "sMES系统帮助我们实现了生产过程的可视化管理，提高了产品质量，降低了生产成本。从林科技的技术支持非常及时，服务态度也很好。"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl">
                  👨🔧
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">王厂长</h4>
                  <p className="text-gray-500 text-sm">深圳科技有限公司</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 技术优势 */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">技术优势</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们拥有先进的技术架构和开发能力，为客户提供稳定可靠的产品和服务
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* 技术优势1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mx-auto mb-6 shadow-lg">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">先进架构</h3>
              <p className="text-gray-600 text-center">
                采用微服务架构，支持高并发、高可用，易于扩展和维护
              </p>
            </div>
            
            {/* 技术优势2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl mx-auto mb-6 shadow-lg">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">安全可靠</h3>
              <p className="text-gray-600 text-center">
                多层次安全防护，确保数据安全和系统稳定运行
              </p>
            </div>
            
            {/* 技术优势3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl mx-auto mb-6 shadow-lg">
                📱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">移动支持</h3>
              <p className="text-gray-600 text-center">
                支持移动端访问，随时随地管理企业业务
              </p>
            </div>
            
            {/* 技术优势4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-3xl mx-auto mb-6 shadow-lg">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">数据分析</h3>
              <p className="text-gray-600 text-center">
                强大的数据分析能力，为企业决策提供数据支持
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系表单 */}
      <section id="contact-form" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">获取解决方案</h2>
            <p className="text-xl text-blue-100">
              填写表单，我们的顾问将在24小时内与您联系
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            {/* 解决方案表单 */}
            <SolutionForm />
          </div>
        </div>
      </section>
      
      {/* 返回顶部按钮 */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-3xl ${
          showScrollTop 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 opacity-100 translate-y-0'
            : 'bg-gray-600 opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="返回顶部"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ProductsPage;