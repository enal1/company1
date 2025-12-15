'use client';
import { useState } from 'react';

// 在线咨询表单组件
const ConsultForm = () => {
  // 状态管理
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
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
    
    // 邮箱验证
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    // 咨询内容验证
    if (!formData.message.trim()) {
      newErrors.message = '请输入您的咨询内容';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '咨询内容至少需要10个字符';
    }
    
    // 隐私政策验证
    if (!formData.privacy) {
      newErrors.privacy = '请阅读并同意隐私政策和服务条款';
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
        email: '',
        company: '',
        message: '',
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
          您的咨询已经成功提交，我们的顾问将在24小时内与您联系
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
            className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
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
            className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`} 
            placeholder="请输入您的电话"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">邮箱 *</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          }`} 
          placeholder="请输入您的邮箱"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">公司名称</label>
        <input 
          type="text" 
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md" 
          placeholder="请输入您的公司名称"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">咨询内容 *</label>
        <textarea 
          rows={5} 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          }`} 
          placeholder="请输入您的咨询内容"
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          name="privacy"
          id="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className={`mt-1 h-5 w-5 focus:ring-2 focus:border-transparent transition-all ${
            errors.privacy ? 'text-red-500 focus:ring-red-500' : 'text-blue-600 focus:ring-blue-500'
          } border-gray-300 rounded`}
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          我已阅读并同意 <a href="#" className="text-blue-600 hover:underline">隐私政策</a> 和 <a href="#" className="text-blue-600 hover:underline">服务条款</a>
        </label>
      </div>
      {errors.privacy && (
        <p className="mt-2 text-sm text-red-500">{errors.privacy}</p>
      )}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-4 font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg ${
          isSubmitting 
            ? 'bg-gray-500 text-white cursor-not-allowed opacity-80'
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
        }`}
      >
        {isSubmitting ? '提交中...' : '发送咨询'}
      </button>
    </form>
  );
};

// FAQ手风琴组件
const FAQAccordion = () => {
  // 状态管理
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // FAQ数据
  const faqs = [
    {
      id: 1,
      question: '如何选择适合的ERP系统？',
      answer: '选择ERP系统需要考虑企业规模、行业特性、业务需求和预算等因素。我们的顾问会根据您的具体情况，为您推荐最适合的解决方案。'
    },
    {
      id: 2,
      question: 'ERP系统的实施周期是多久？',
      answer: '实施周期根据系统规模和复杂度而定，一般来说，小型ERP系统实施周期为1-3个月，中型ERP系统为3-6个月，大型ERP系统为6-12个月。'
    },
    {
      id: 3,
      question: '是否提供培训和售后服务？',
      answer: '是的，我们提供全面的培训服务，包括系统操作培训、管理员培训和业务流程培训。同时，我们还提供7x24小时的技术支持和定期的系统维护服务。'
    },
    {
      id: 4,
      question: '是否支持系统定制开发？',
      answer: '是的，我们支持根据企业的特殊需求进行系统定制开发，确保系统完全符合企业的业务流程和管理需求。'
    },
    {
      id: 5,
      question: 'ERP系统的价格是多少？',
      answer: 'ERP系统的价格根据系统版本、功能模块、用户数量、实施服务等因素而定。我们会根据您的具体需求，提供详细的报价方案。'
    },
    {
      id: 6,
      question: '系统上线后如何进行维护？',
      answer: '系统上线后，我们提供定期的系统维护和升级服务，包括数据备份、系统优化、功能升级等。同时，我们的技术支持团队会7x24小时为您提供技术支持。'
    }
  ];
  
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div 
          key={faq.id} 
          className="bg-gray-50 rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          {/* 问题标题 */}
          <button
            onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            className="w-full px-8 py-6 text-left flex items-center justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
            <svg 
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                expandedId === faq.id ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* 回答内容 */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactPage = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState('contact');
  
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">联系我们</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            无论您有任何疑问或需求，欢迎随时联系我们
          </p>
        </div>
      </section>
      
      {/* 标签导航 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 md:gap-6 overflow-x-auto pb-4">
              {/* 联系方式标签 */}
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 md:flex-none px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'contact' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                联系方式
              </button>
              
              {/* 在线咨询标签 */}
              <button
                onClick={() => setActiveTab('consult')}
                className={`flex-1 md:flex-none px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'consult' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                在线咨询
              </button>
              
              {/* 常见问题标签 */}
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 md:flex-none px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'faq' 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                常见问题
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 标签内容 */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 联系方式标签内容 */}
        {activeTab === 'contact' && (
          <section className="py-20 bg-white animate-fade-in">
            <div className="grid md:grid-cols-2 gap-16">
              {/* 左侧联系信息 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">联系方式</h2>
                
                <div className="space-y-8">
                  {/* 地址 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl shadow-lg">
                      📍
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">公司地址</h3>
                      <p className="text-gray-600 leading-relaxed">
                        上海市浦东新区张江高科技园区博云路2号浦软大厦
                      </p>
                    </div>
                  </div>
                  
                  {/* 电话 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-2xl shadow-lg">
                      📞
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">联系电话</h3>
                      <p className="text-gray-600 mb-2">400-123-4567</p>
                      <p className="text-gray-600">021-58888888</p>
                    </div>
                  </div>
                  
                  {/* 邮箱 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl shadow-lg">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">邮箱地址</h3>
                      <p className="text-gray-600 mb-2">info@conglink.com</p>
                      <p className="text-gray-600">sales@conglink.com</p>
                    </div>
                  </div>
                  
                  {/* 工作时间 */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 text-2xl shadow-lg">
                      ⏰
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">工作时间</h3>
                      <p className="text-gray-600 mb-2">周一至周五: 9:00 - 18:00</p>
                      <p className="text-gray-600">周六至周日: 休息</p>
                    </div>
                  </div>
                </div>
                
                {/* 社交媒体 */}
                <div className="mt-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">关注我们</h3>
                  <div className="flex gap-6">
                    <a href="#" className="group w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </a>
                    
                    <a href="#" className="group w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 8.5c.38 0 .7.32.7.7s-.32.7-.7.7h-1.4l1.3 1.3c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-1.3-1.3v1.4c0 .38-.32.7-.7.7s-.7-.32-.7-.7v-1.4l-1.3 1.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.3-1.3h-1.4c-.38 0-.7-.32-.7-.7s.32-.7.7-.7h1.4l-1.3-1.3c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.3 1.3v-1.4c0-.38.32-.7.7-.7s.7.32.7.7v1.4l1.3-1.3c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-1.3 1.3h1.4z" />
                      </svg>
                    </a>
                    
                    <a href="#" className="group w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                    
                    <a href="#" className="group w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6v-3h12v3zm0-5H6V9h12v4zm0-5H6V4h12v4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 地图 */}
              <div>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
                  <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🗺️</div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">公司位置</h3>
                      <p className="text-gray-600">上海市浦东新区张江高科技园区</p>
                      <p className="text-sm text-gray-500 mt-2">地图加载中...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* 在线咨询标签内容 */}
        {activeTab === 'consult' && (
          <section className="py-20 bg-white animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">在线咨询</h2>
                
                {/* 表单组件 */}
                <ConsultForm />
              </div>
            </div>
          </section>
        )}
        
        {/* 常见问题标签内容 */}
        {activeTab === 'faq' && (
          <section className="py-20 bg-white animate-fade-in">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">常见问题</h2>
              
              <FAQAccordion />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ContactPage;