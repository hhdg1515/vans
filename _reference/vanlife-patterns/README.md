# VanLife 架构模式参考

> **⚠️ 这些文件仅作为架构参考，不在生产环境中使用！**

## 📚 用途

这两个文件保留下来是为了在未来创建**品牌案例页面**（Brand Case Studies）时提供架构参考。

## 🎯 可重用的模式

### 1. **Vans.jsx** - 列表页架构
- ✅ URL 筛选逻辑 (`useSearchParams`)
- ✅ 网格布局 + 卡片组件
- ✅ 异步数据加载 (loading/error/data states)
- ✅ 筛选按钮交互

**未来应用场景：**
```
/brands                  → 品牌列表页
/brands/mercedes-maybach → 案例列表页（筛选：S-Class, Maybach, AMG）
```

### 2. **VanDetail.jsx** - 详情页架构
- ✅ 动态路由参数 (`useParams`)
- ✅ 面包屑导航 + 返回按钮
- ✅ 保留筛选状态 (`location.state`)

**未来应用场景：**
```
/brands/mercedes-maybach/case-study-08 → 案例详情页
```

## 🛠️ 如何使用

1. **不要直接复制代码** - 数据结构和 UI 完全不同
2. **参考架构逻辑** - 筛选、路由状态管理等模式
3. **使用 Luxury 设计系统** - 替换所有样式为 tokens.css

## 📅 归档日期

2025-10-23

---

**原始项目：** VanLife (React Router 练习项目)
**新项目：** Luxury Auto Care (奔驰风格豪车维修网站)
