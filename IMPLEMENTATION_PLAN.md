# 🚀 实施计划 - 豪华车专修网站

**项目：** European Luxury Auto Repair Website
**开始日期：** 2025-10-22
**状态：** ✅ 设计已确认，开始开发

---

## 📋 项目概览

### 当前项目状态
- ✅ 设计方案文档已完成（DESIGN_PROPOSAL.md）
- ✅ Design Tokens已定义（design-tokens.json）
- ✅ 现有VanLife项目基础架构可复用
- 🚧 开始创建新的豪华车专修网站

### 开发策略
**保留旧代码 + 新增豪华车专修内容**
- 不删除任何现有VanLife代码
- 所有新代码放在独立文件夹
- 通过路由切换新旧网站

---

## 📂 文件结构规划

### 新增文件夹结构
```
vans/
├── components/
│   └── luxury/              ← 新建：所有豪华车组件
│       ├── layout/
│       ├── hero/
│       ├── brands/
│       ├── services/
│       ├── credentials/
│       ├── testimonials/
│       ├── cta/
│       └── ui/
│
├── pages/
│   └── Luxury/              ← 新建：豪华车页面
│       ├── Home.jsx
│       ├── Services.jsx
│       ├── Gallery.jsx
│       ├── About.jsx
│       └── Contact.jsx
│
├── styles/
│   └── luxury/              ← 新建：豪华车样式
│       ├── tokens.css
│       ├── global.css
│       └── components/
│
├── data/
│   └── luxury/              ← 新建：豪华车数据
│       ├── services.js
│       ├── brands.js
│       ├── slides.js
│       └── testimonials.js
│
├── DESIGN_PROPOSAL.md       ← 已完成
├── design-tokens.json       ← 已完成
└── IMPLEMENTATION_PLAN.md   ← 当前文件
```

---

## 🎯 开发阶段

### Phase 1: 样式系统（30分钟）
**创建文件：**
1. `styles/luxury/tokens.css` - 从design-tokens.json转换来的CSS变量
2. `styles/luxury/global.css` - 全局样式重置
3. `styles/luxury/mb-stage.css` - 奔驰舞台设计样式

**任务清单：**
- [x] 定义所有CSS变量
- [x] 设置全局字体导入
- [x] 定义通用按钮样式
- [x] 定义响应式断点

---

### Phase 2: 数据文件（20分钟）
**创建文件：**
1. `data/luxury/slides.js` - 5个Hero轮播数据
2. `data/luxury/brands.js` - 8个品牌数据
3. `data/luxury/services.js` - 6个服务数据
4. `data/luxury/testimonials.js` - 3个客户评价

**数据结构示例：**
```javascript
// slides.js
export const heroSlides = [
  {
    id: 1,
    image: '/images/hero/maybach-forest.jpg',
    title: 'Maybach S-Class Specialist',
    subtitle: 'Ultra-luxury service for the world\'s finest sedan',
    ctaText: 'Book Maybach Service',
    ctaLink: '/services/maybach',
    overlay: 'forest'
  },
  // ...more slides
]
```

---

### Phase 3: Hero轮播组件（1小时）
**创建文件：**
1. `components/luxury/hero/HeroCarousel.jsx` - 轮播容器
2. `components/luxury/hero/HeroSlide.jsx` - 单个slide
3. `components/luxury/hero/HeroCarousel.module.css` - 样式

**功能要求：**
- [x] 5个slides自动轮播（5秒间隔）
- [x] 左右箭头手动切换
- [x] 底部数字指示器（01-05）
- [x] Hover暂停自动轮播
- [x] 淡入淡出过渡动画
- [x] 响应式设计（桌面/手机）

**关键交互：**
```jsx
const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
}, []);
```

---

### Phase 4: 品牌网格组件（30分钟）
**创建文件：**
1. `components/luxury/brands/BrandGrid.jsx` - 网格容器
2. `components/luxury/brands/BrandCard.jsx` - 单个品牌卡片
3. `components/luxury/brands/BrandGrid.module.css` - 样式

**布局要求：**
- [x] 4列×2行网格（桌面）
- [x] 2列网格（平板）
- [x] 1列网格（手机）
- [x] Hover放大效果（scale 1.05）
- [x] 底部渐变遮罩 + 品牌名称

---

### Phase 5: 互动服务网格（45分钟）
**创建文件：**
1. `components/luxury/services/InteractiveServiceGrid.jsx` - 非对称网格
2. `components/luxury/services/ServiceCard.jsx` - 服务卡片
3. `components/luxury/services/DataCard.jsx` - 数据统计卡片
4. `components/luxury/services/ServiceGrid.module.css` - 样式

**布局要求：**
- [x] CSS Grid非对称布局
- [x] 1个大卡片 + 4个小卡片 + 1个文字卡片
- [x] 圆形箭头按钮（Hover显示）
- [x] Hover上浮效果（translateY -8px）

---

### Phase 6: 其他首页组件（1小时）
**创建文件：**
1. `components/luxury/credentials/Credentials.jsx` - 技师资质
2. `components/luxury/testimonials/Testimonials.jsx` - 客户评价
3. `components/luxury/cta/CTASection.jsx` - 行动号召
4. 各自的CSS Module文件

**设计要点：**
- Credentials: 奔驰舞台设计，50/50分屏
- Testimonials: 白底黑字卡片（对比黑背景）
- CTA: 深蓝渐变背景，两个按钮

---

### Phase 7: Header和Footer（30分钟）
**创建文件：**
1. `components/luxury/layout/LuxuryHeader.jsx`
2. `components/luxury/layout/LuxuryFooter.jsx`
3. `components/luxury/layout/LuxuryLayout.jsx`
4. `components/luxury/layout/Layout.module.css`

**Header要求：**
- [x] 左上角：Logo + 店名
- [x] 右上角：导航菜单（Services / Gallery / About / Contact）
- [x] 黑色背景 + 白色文字
- [x] 固定顶部（sticky）
- [x] 手机端：汉堡菜单

**Footer要求：**
- [x] 联系信息（地址、电话、邮箱、营业时间）
- [x] 社交媒体图标
- [x] 版权信息
- [x] 黑色背景

---

### Phase 8: 首页主组件（15分钟）
**创建文件：**
1. `pages/Luxury/Home.jsx` - 组装所有section

**结构：**
```jsx
export default function LuxuryHome() {
  return (
    <>
      <HeroCarousel />
      <BrandGrid />
      <InteractiveServiceGrid />
      <Credentials />
      <Testimonials />
      <CTASection />
    </>
  );
}
```

---

### Phase 9: 路由配置（10分钟）
**修改文件：**
1. `App.jsx` 或 `index.jsx` - 添加新路由

**路由结构：**
```jsx
<Routes>
  {/* 新的豪华车专修路由 */}
  <Route path="/" element={<LuxuryLayout />}>
    <Route index element={<LuxuryHome />} />
    <Route path="services" element={<Services />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>

  {/* 保留旧的VanLife路由 */}
  <Route path="/vans" element={<Layout />}>
    <Route index element={<Vans />} />
    <Route path=":id" element={<VanDetail />} />
    {/* ...其他旧路由 */}
  </Route>
</Routes>
```

---

## 🎨 CSS架构

### CSS组织策略
**使用CSS Modules + CSS变量**

#### 全局样式（luxury-tokens.css）
```css
:root {
  /* 从design-tokens.json导入所有变量 */
  --mb-black: #000000;
  --mb-white: #FFFFFF;
  --mb-blue: #00ADEF;
  /* ...更多变量 */
}
```

#### 组件样式（HeroCarousel.module.css）
```css
.carousel {
  background: var(--mb-black);
  /* 使用CSS变量 */
}
```

#### 命名规范
- 使用BEM命名：`.hero-carousel`, `.hero-carousel__slide`
- CSS Module自动生成唯一类名
- 避免全局污染

---

## 📸 图片策略

### 占位符方案
**使用图片路径注释 + 占位符**

```jsx
<img
  src="/images/placeholder-car.jpg"
  // TODO: 替换为真实图片: /images/hero/maybach-forest.jpg
  alt="Maybach S680"
/>
```

### 图片清单（需要准备）
**Hero轮播（5张）：**
- [ ] maybach-forest.jpg (1920×1080)
- [ ] s-class-city.jpg (1920×1080)
- [ ] amg-track.jpg (1920×1080)
- [ ] rolls-mansion.jpg (1920×1080)
- [ ] porsche-canyon.jpg (1920×1080)

**品牌卡片（8张）：**
- [ ] maybach.jpg (1200×1600)
- [ ] rolls-royce.jpg (1200×1600)
- [ ] bentley.jpg (1200×1600)
- [ ] lamborghini.jpg (1200×1600)
- [ ] mercedes-amg.jpg (1200×1600)
- [ ] porsche.jpg (1200×1600)
- [ ] range-rover.jpg (1200×1600)
- [ ] ferrari.jpg (1200×1600)

**服务卡片（6张）：**
- [ ] diagnostics.jpg
- [ ] engine.jpg
- [ ] performance.jpg
- [ ] electrical.jpg
- [ ] interior.jpg
- [ ] data-card（无图）

**其他：**
- [ ] credentials-photo.jpg（老板或车间）
- [ ] shop-logo.svg

---

## 🧪 测试计划

### 功能测试
- [ ] Hero轮播自动播放
- [ ] 左右箭头切换
- [ ] 指示器点击跳转
- [ ] 卡片Hover效果
- [ ] 所有链接可点击

### 响应式测试
- [ ] 桌面端（1920px）
- [ ] 笔记本（1280px）
- [ ] 平板（768px）
- [ ] 手机（375px）

### 浏览器测试
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

---

## 🚀 部署准备

### 本地运行
```bash
cd vans
npm install  # 安装依赖（如有新增）
npm run dev  # 启动开发服务器
# 访问 http://localhost:5173/
```

### 演示方式选择

#### 选项1：本地演示
```bash
npm run dev
# 带笔记本去现场
# 打开浏览器演示
```

#### 选项2：Netlify部署
```bash
npm run build
# 将dist文件夹拖到netlify.app
# 获得公开URL
```

#### 选项3：Scrimba
```
# 将关键文件复制到Scrimba
# 现场可在线编辑演示
```

#### 选项4：录屏
```
# 录制轮播交互视频
# 导出GIF或MP4
# 现场播放
```

---

## 📝 交付清单

### 代码文件
- [x] DESIGN_PROPOSAL.md
- [x] design-tokens.json
- [x] IMPLEMENTATION_PLAN.md
- [ ] 所有组件文件（~20个文件）
- [ ] 所有样式文件（~10个CSS文件）
- [ ] 数据文件（4个JS文件）
- [ ] 路由配置

### 文档
- [x] 设计方案说明
- [x] Design System定义
- [x] 实施计划
- [ ] README_LUXURY.md（如何运行）

### 演示材料
- [ ] 可运行的网站（npm run dev）
- [ ] 或部署的URL（Netlify）
- [ ] 或截图/视频

---

## ⏱️ 预计时间

### 已完成
- ✅ 设计方案文档（1小时）
- ✅ Design Tokens（30分钟）
- ✅ 实施计划（30分钟）

### 待完成（预计4-5小时）
- [ ] 样式系统（30分钟）
- [ ] 数据文件（20分钟）
- [ ] Hero轮播（1小时）
- [ ] 品牌网格（30分钟）
- [ ] 服务网格（45分钟）
- [ ] 其他组件（1小时）
- [ ] Header/Footer（30分钟）
- [ ] 主页组装（15分钟）
- [ ] 路由配置（10分钟）

**总计：** ~7小时（包括已完成部分）

---

## 🎯 成功标准

### 最小可演示版本（MVP）
- ✅ Hero轮播可交互（左右切换、自动播放）
- ✅ 品牌网格展示8个品牌
- ✅ 服务网格展示核心服务
- ✅ 响应式设计（手机端可用）
- ✅ 可本地运行或部署查看

### 理想版本
- ✅ MVP所有功能
- ✅ 完整的Header和Footer
- ✅ 所有动画和过渡效果
- ✅ 真实图片（非占位符）
- ✅ 完美的响应式设计

---

## 📞 现场演示脚本

### 开场（30秒）
"这是我为您设计的网站首页，基于奔驰官方设计规范，体现超豪华车专修的定位。"

### Hero轮播演示（1分钟）
- 展示自动轮播
- 点击左右箭头
- 点击指示器切换
- 说明：5个核心车型（Maybach, S-Class, AMG, Rolls-Royce, Porsche）

### 品牌墙演示（30秒）
- 滚动到品牌网格
- Hover展示放大效果
- 说明：8个豪华品牌，清晰传达"我们修什么车"

### 服务展示（30秒）
- 展示非对称网格布局
- Hover显示箭头按钮
- 说明：核心服务 + 数据统计

### 手机端演示（30秒）
- 切换到手机视图（F12开发者工具）
- 展示响应式设计
- 说明：50%+客户用手机访问

### 技术优势（30秒）
"相比您朋友的Wix网站，这个加载更快（1-2秒 vs 3-4秒），完全自主控制，后续扩展更灵活。"

### 结尾（30秒）
"这是首页效果，其他页面（服务、案例、联系）会保持同样的设计风格。如果您满意，我们可以签约开始完整开发。"

---

## ✅ 下一步

1. **立即开始：** 创建样式系统和数据文件
2. **然后：** 开发Hero轮播组件（核心展示）
3. **接着：** 完成其他首页组件
4. **最后：** 测试并准备演示

---

**状态：** 🚀 准备开始编码
**预计完成时间：** 4-5小时（分多轮对话完成）
