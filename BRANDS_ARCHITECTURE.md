# 🏎️ Brands 路由架构规划

**创建日期：** 2025-10-23
**状态：** 规划阶段
**参考：** `_reference/vanlife-patterns/` 中的 Vans.jsx 和 VanDetail.jsx

---

## 📋 路由结构

```
/brands                              → 品牌索引页（8 个品牌卡片 + 筛选）
/brands/:brandSlug                   → 品牌专题页（如 /brands/mercedes-maybach）
/brands/:brandSlug/:caseId           → 案例详情页（如 /brands/mercedes-maybach/case-study-08）
```

---

## 🎯 Phase 1: 品牌索引页 (`/brands`)

### **页面结构**

```jsx
// pages/Brands/BrandIndex.jsx
<BrandIndexPage>
  {/* Hero - Simple */}
  <section className="hero">
    <h1>Marques We Master</h1>
    <p>Specialist service for the world's finest automobiles</p>
  </section>

  {/* Filter Bar */}
  <nav className="filterBar">
    <button>All Brands (8)</button>
    <button>Ultra-Luxury (4)</button>
    <button>German (4)</button>
    <button>British (2)</button>
    <button>Italian (2)</button>
  </nav>

  {/* Brand Grid - 4 columns */}
  <section className="brandGrid">
    {brands.map(brand => (
      <BrandCard
        key={brand.slug}
        brand={brand}
        imageUrl={brand.heroImage}
        tier={brand.tier}
        caseCount={brand.caseStudies.length}
      />
    ))}
  </section>
</BrandIndexPage>
```

### **数据结构**

```javascript
// data/luxury/brands.js (扩展现有数据)
export const brandDetails = [
  {
    id: 'mercedes-maybach',
    slug: 'mercedes-maybach',
    name: 'Mercedes-Maybach',
    shortName: 'Maybach',
    tier: 'ultra-luxury', // ultra-luxury, german, british, italian

    // 索引页显示
    heroImage: '/images/brands/maybach-hero.jpg',
    tagline: 'The Ultimate in Luxury',
    servicesCount: 12,
    caseStudiesCount: 5,

    // 品牌专题页内容
    brandStory: {
      title: 'Mercedes-Maybach',
      subtitle: 'Ultra-Luxury Service Excellence',
      description: '从 1920 年代的 Maybach Zeppelin 到今天的 S680，迈巴赫代表着...',

      // 历史时间线
      timeline: [
        { year: '1909', event: 'Wilhelm Maybach founded the company' },
        { year: '2015', event: 'Mercedes-Maybach brand relaunch' },
        { year: '2021', event: 'S680 V12 flagship introduced' }
      ]
    },

    // 该品牌服务的车型
    models: [
      {
        id: 'maybach-s680',
        name: 'S680',
        fullName: 'Mercedes-Maybach S680',
        year: '2021-present',
        engine: 'V12 BiTurbo M279',
        horsepower: 621,
        imageUrl: '/images/models/maybach-s680.jpg',

        // 常见问题
        commonIssues: [
          {
            title: 'COMAND System Freeze',
            symptom: '仪表盘偶发性黑屏',
            cause: 'CAN 总线 Gateway 模块间歇性故障',
            typicalCost: '$2,800 - $4,200',
            difficulty: 'Complex'
          },
          {
            title: 'AIRMATIC Air Suspension',
            symptom: '车身一侧下沉',
            cause: '空气弹簧老化或漏气',
            typicalCost: '$2,500 - $3,500',
            difficulty: 'Moderate'
          }
        ]
      },
      {
        id: 'maybach-s-class',
        name: 'S-Class',
        fullName: 'Mercedes-Maybach S-Class (W223)',
        year: '2021-present',
        // ... 同上结构
      }
    ],

    // 修理案例（链接到 case studies）
    caseStudies: [
      'maybach-s680-electrical-2024-08',
      'maybach-s-class-suspension-2024-07',
      'maybach-s600-engine-2024-06'
    ],

    // SEO
    metaTitle: 'Mercedes-Maybach Specialist | Los Angeles',
    metaDescription: 'Factory-trained Mercedes-Maybach specialist in Los Angeles...',
    keywords: ['Maybach repair', 'S680 service', 'Maybach specialist Los Angeles']
  },

  // ... 其他 7 个品牌（Rolls-Royce, Bentley, Lamborghini, Mercedes-AMG, Porsche, Range Rover, Ferrari）
]
```

---

## 🎯 Phase 2: 品牌专题页 (`/brands/:brandSlug`)

### **页面结构（杂志风格）**

```jsx
// pages/Brands/BrandDetail.jsx
<BrandDetailPage>
  {/* Hero - Split Layout */}
  <section className="hero">
    <div className="heroImage">
      {/* Maybach S680 大图 */}
    </div>
    <div className="heroContent">
      <span className="eyebrow">Ultra-Luxury Specialist</span>
      <h1>Mercedes-Maybach</h1>
      <p>Factory-trained service for the world's finest sedan</p>

      {/* 统计数据 */}
      <div className="stats">
        <div className="stat">
          <span className="number">500+</span>
          <span className="label">Vehicles serviced</span>
        </div>
        <div className="stat">
          <span className="number">15+</span>
          <span className="label">Years experience</span>
        </div>
      </div>
    </div>
  </section>

  {/* Brand Story - Editorial */}
  <section className="brandStory">
    <div className="editorial">
      {/* 3 列杂志风格排版 */}
      <h2>The Legacy of Excellence</h2>
      <p className="lead">从 Stuttgart 到 Los Angeles...</p>
      {/* 长文本，分 3 列排版 */}
    </div>
  </section>

  {/* Models We Service - Grid */}
  <section className="models">
    <h2>Models We Service</h2>
    <div className="modelGrid">
      {brand.models.map(model => (
        <ModelCard
          key={model.id}
          model={model}
          commonIssues={model.commonIssues}
        />
      ))}
    </div>
  </section>

  {/* Case Studies - Carousel */}
  <section className="caseStudies">
    <h2>Restoration Stories</h2>
    <div className="casesCarousel">
      {brand.caseStudies.map(caseId => (
        <CaseStudyCard
          key={caseId}
          caseStudy={getCaseStudy(caseId)}
          brandSlug={brand.slug}
        />
      ))}
    </div>
  </section>

  {/* Brand-Specific FAQ */}
  <section className="faq">
    <h2>Common {brand.name} Issues</h2>
    {/* 折叠式 FAQ */}
  </section>

  {/* CTA */}
  <section className="cta">
    <h2>Service Your {brand.name}</h2>
    <Link to="/booking">Book Appointment</Link>
  </section>
</BrandDetailPage>
```

---

## 🎯 Phase 3: 案例详情页 (`/brands/:brandSlug/:caseId`)

### **页面结构（长文章风格）**

```jsx
// pages/Brands/CaseStudyDetail.jsx
<CaseStudyDetailPage>
  {/* Hero - Full-width Image */}
  <section className="hero">
    <img src={caseStudy.heroImage} alt="..." />
    <div className="heroOverlay">
      <span className="eyebrow">Case Study #{caseStudy.number}</span>
      <h1>{caseStudy.title}</h1>
      <div className="meta">
        <span>{caseStudy.vehicle}</span>
        <span>·</span>
        <span>{caseStudy.duration}</span>
        <span>·</span>
        <span>{caseStudy.completedDate}</span>
      </div>
    </div>
  </section>

  {/* Article Layout */}
  <article className="caseArticle">
    {/* Sidebar - Tech Specs */}
    <aside className="sidebar">
      <h3>Vehicle Specs</h3>
      <dl>
        <dt>Engine</dt>
        <dd>{caseStudy.techSpecs.engine}</dd>
        <dt>Horsepower</dt>
        <dd>{caseStudy.techSpecs.horsepower}</dd>
        {/* ... */}
      </dl>

      <h3>Problem Codes</h3>
      <ul>
        {caseStudy.problemCodes.map(code => (
          <li key={code}><code>{code}</code></li>
        ))}
      </ul>

      <h3>Duration</h3>
      <p>{caseStudy.duration}</p>

      <h3>Investment</h3>
      <p className="price">${caseStudy.totalCost.toLocaleString()}</p>
    </aside>

    {/* Main Content */}
    <div className="content">
      <h2>The Challenge</h2>
      <p>{caseStudy.challenge}</p>

      {/* Before/After Gallery */}
      <div className="beforeAfter">
        {caseStudy.beforeAfter.map(image => (
          <figure key={image.url}>
            <img src={image.url} alt={image.type} />
            <figcaption>{image.type.toUpperCase()}</figcaption>
          </figure>
        ))}
      </div>

      <h2>Our Approach</h2>
      <ol>
        {caseStudy.approach.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      {/* Detailed Photo Gallery - 8-12 张 */}
      <div className="photoGrid">
        {caseStudy.gallery.map(photo => (
          <figure key={photo}>
            <img src={photo} alt="..." />
          </figure>
        ))}
      </div>

      <h2>Results</h2>
      <ul>
        {caseStudy.results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>

      {/* Parts Used */}
      <h3>Parts & Components</h3>
      <table className="partsTable">
        <thead>
          <tr>
            <th>Part</th>
            <th>Part Number</th>
            <th>OEM</th>
          </tr>
        </thead>
        <tbody>
          {caseStudy.partsUsed.map(part => (
            <tr key={part.partNumber}>
              <td>{part.name}</td>
              <td><code>{part.partNumber}</code></td>
              <td>{part.oem ? '✓' : '×'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>

  {/* Related Cases */}
  <section className="relatedCases">
    <h2>More {brand.name} Cases</h2>
    {/* 3 个相关案例卡片 */}
  </section>
</CaseStudyDetailPage>
```

---

## 📊 可重用的架构模式（来自 _reference/）

### **从 Vans.jsx 学到的：**

✅ **URL 筛选逻辑** - 用于品牌索引页
```javascript
const [searchParams, setSearchParams] = useSearchParams();
const tierFilter = searchParams.get("tier"); // ultra-luxury, german, etc.

const displayedBrands = tierFilter
  ? brands.filter(brand => brand.tier === tierFilter)
  : brands;

function handleFilterChange(key, value) {
  setSearchParams(prevParams => {
    if (value === null) {
      prevParams.delete(key);
    } else {
      prevParams.set(key, value);
    }
    return prevParams;
  });
}
```

✅ **网格布局 + 卡片组件**
```jsx
<div className="brand-grid">
  {displayedBrands.map(brand => (
    <BrandCard key={brand.id} brand={brand} />
  ))}
</div>
```

✅ **筛选按钮交互**
```jsx
<button
  onClick={() => handleFilterChange("tier", "ultra-luxury")}
  className={tierFilter === "ultra-luxury" ? "active" : ""}
>
  Ultra-Luxury
</button>
```

### **从 VanDetail.jsx 学到的：**

✅ **动态路由参数**
```javascript
const { brandSlug, caseId } = useParams();
```

✅ **面包屑导航 + 保留筛选状态**
```jsx
const location = useLocation();
const search = location.state?.search || "";
const tier = location.state?.tier || "all";

<Link
  to={`..${search}`}
  relative="path"
  className="back-button"
>
  ← Back to {tier} brands
</Link>
```

✅ **Link 时传递状态**
```jsx
<Link
  to={`/brands/${brand.slug}`}
  state={{
    search: `?${searchParams.toString()}`,
    tier: tierFilter
  }}
>
```

---

## 🎨 设计规范（杂志风格）

### **品牌专题页设计参考：**

- **《Octane》杂志** - 经典车修复故事
- **保时捷 Classic 官网** - 案例研究页面
- **Singer Vehicle Design** - 定制项目展示

### **核心设计元素：**

```css
/* Editorial Typography */
.editorial-headline {
  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* 3-column Magazine Layout */
.editorial-content {
  column-count: 3;
  column-gap: 32px;
  column-rule: 1px solid rgba(255, 255, 255, 0.1);
}

/* Technical Specs Sidebar */
.tech-specs {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  border-left: 2px solid var(--mb-blue);
  padding-left: 16px;
}

/* Photo Grid - Masonry */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
```

---

## 📁 文件结构

```
pages/
  └── Brands/
      ├── BrandIndex.jsx           # 品牌索引页 (/brands)
      ├── BrandIndex.module.css
      ├── BrandDetail.jsx          # 品牌专题页 (/brands/:brandSlug)
      ├── BrandDetail.module.css
      ├── CaseStudyDetail.jsx      # 案例详情页 (/brands/:brandSlug/:caseId)
      └── CaseStudyDetail.module.css

components/brands/
  ├── BrandCard.jsx                # 品牌卡片（索引页）
  ├── BrandCard.module.css
  ├── ModelCard.jsx                # 车型卡片（专题页）
  ├── ModelCard.module.css
  ├── CaseStudyCard.jsx            # 案例卡片
  ├── CaseStudyCard.module.css
  ├── TechSpecs.jsx                # 技术规格侧边栏
  └── TechSpecs.module.css

data/luxury/
  ├── brands.js                    # 品牌基础数据（已存在，需扩展）
  ├── brand-details.js             # 品牌详细信息（新建）
  └── case-studies.js              # 案例研究数据（新建）

utils/
  └── brandHelpers.js              # 辅助函数（筛选、排序等）
```

---

## 🚀 实施计划

### **第一步：数据结构（1-2 天）**
1. 扩展 `data/luxury/brands.js`
2. 创建 `data/luxury/brand-details.js`
3. 创建 `data/luxury/case-studies.js`（先添加 1-2 个真实案例）

### **第二步：品牌索引页（2-3 天）**
1. 创建 `BrandIndex.jsx`（参考 Vans.jsx 架构）
2. 实现筛选逻辑
3. 创建 `BrandCard` 组件
4. 响应式适配

### **第三步：品牌专题页（3-4 天）**
1. 创建 `BrandDetail.jsx`
2. 杂志风格排版
3. 车型卡片 + 常见问题展示
4. 案例轮播

### **第四步：案例详情页（3-4 天）**
1. 创建 `CaseStudyDetail.jsx`
2. 长文章布局 + 侧边栏
3. Before/After 画廊
4. 详细照片网格

### **第五步：首批内容（1-2 天）**
1. 完成 **Mercedes-Maybach** 品牌页（作为模板）
2. 添加 2-3 个真实案例
3. 拍摄必要的照片

---

## 📝 SEO 考虑

### **URL 结构：**
```
/brands                                    # 品牌总览
/brands/mercedes-maybach                   # 品牌专题
/brands/mercedes-maybach/s680-electrical   # 案例详情
```

### **Meta 标签：**
- 每个页面独立的 title 和 description
- 案例详情页添加 schema.org/Article 结构化数据
- 品牌页添加 FAQ schema

### **内链策略：**
- 首页 Brand Grid → 品牌索引页
- 品牌索引页 → 品牌专题页
- 品牌专题页 → 案例详情页
- 案例详情页 → 相关案例（同品牌）

---

## ✅ 成功指标

- [ ] 品牌索引页筛选流畅（<100ms）
- [ ] 案例详情页加载速度 <2s
- [ ] 移动端响应式完美适配
- [ ] 杂志风格排版美观专业
- [ ] SEO 优化到位（meta + schema）

---

**下一步：** 开始创建数据结构和品牌索引页

**预计总时间：** 10-15 天（含内容创作）
