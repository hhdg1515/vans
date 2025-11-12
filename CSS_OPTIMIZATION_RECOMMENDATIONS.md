# CSS 优化建议

## 已实施的优化

### 1. CSS 模块化 ✅
所有样式已使用 CSS 模块进行作用域限定：
- `components/**/*.module.css` - 组件级样式隔离
- `pages/**/*.module.css` - 页面级样式隔离
- 防止样式冲突，提高 CSS 加载效率

### 2. 构建配置优化 ✅
在 `vite.config.js` 中实施的优化：

```javascript
// 代码压缩和优化
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,  // 生产环境移除 console.log
      drop_debugger: true  // 移除 debugger 语句
    }
  },

  // 自动分割vendor代码 - 改进浏览器缓存
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor': ['react', 'react-dom', 'react-router-dom']
      }
    }
  }
}
```

### 3. CSS 特异性优化 ✅
使用 CSS 模块和 CSS 变量优化特异性：

```css
/* 使用 CSS 变量代替硬编码颜色值 */
:root {
  --mb-gold: #D4AF37;
  --mb-blue: #003D7A;
  --mb-silver: #C0C0C0;
}

/* 低特异性，易于覆盖 */
.button {
  color: var(--primary-color);
}
```

## 推荐的进一步优化

### 4. 关键 CSS 内联
对于首屏内容的关键 CSS，考虑在 HTML head 中内联最小样式：

```html
<style>
  /* 首屏关键样式 (< 14KB) */
  .hero-carousel { /* ... */ }
  .navbar { /* ... */ }
</style>
```

**预期改进**: 减少首次绘制延迟 10-20%

### 5. CSS 网格和 Flexbox 优化
当前使用：
- 现代 CSS Grid 和 Flexbox
- 支持所有现代浏览器

**优化检查清单**:
- ✅ 避免不必要的 calc()
- ✅ 使用 gap 替代 margin
- ✅ 优先使用 transform 而非 left/top 改变位置

### 6. 动画性能优化
**已实施**:
```css
.slide {
  transition: background-image 0.3s ease-in-out;
  /* 使用 transform 代替 left */
  transform: translateX(var(--slide-offset));
  will-change: transform; /* 提示浏览器优化 */
}
```

**预期改进**: 减少重排/重绘 40-60%

### 7. 字体加载优化
**建议**:
```css
/* 使用 font-display: swap 防止不可见文本 */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
}
```

### 8. 响应式设计优化
**当前**: 使用 CSS 模块进行响应式设计

**建议改进**:
```css
/* Mobile-first approach */
.card { /* 移动样式 */ }

@media (min-width: 640px) { /* 平板 */ }
@media (min-width: 1024px) { /* 桌面 */ }
```

### 9. PurgeCSS/TreeShaking
**推荐配置** (用于 tailwind 或大型 CSS 库):
```javascript
// 在 vite.config.js 中
export default {
  build: {
    rollupOptions: {
      output: {
        // 自动移除未使用的 CSS
      }
    }
  }
}
```

## 性能指标对标

| 指标 | 当前 | 目标 | 优化方案 |
|------|------|------|---------|
| 首屏时间 (FCP) | 待测 | < 1.8s | 关键 CSS 内联 |
| 最大内容绘制 (LCP) | 待测 | < 2.5s | 图片优化 + 懒加载 |
| 累积布局偏移 (CLS) | 待测 | < 0.1 | 预留尺寸，避免动态内容 |
| 总 CSS 大小 | 待测 | < 50KB | 代码分割，移除冗余 |

## 实施优先级

### 高优先级 (立即执行)
1. ✅ CSS 模块化和作用域隔离
2. ✅ 构建优化（Terser + 代码分割）
3. ⏳ 关键 CSS 内线化

### 中优先级 (1-2 周)
4. ⏳ 字体加载优化
5. ⏳ 动画性能微调
6. ⏳ 响应式设计审计

### 低优先级 (持续改进)
7. ⏳ PurgeCSS 集成
8. ⏳ 高级缓存策略
9. ⏳ CSS-in-JS 评估

## 测试方法

```bash
# 构建并测试
npm run build

# 分析包大小
npm run build -- --analyze

# 运行性能审计
npm run preview  # 打开 http://localhost:4173

# 在 Chrome DevTools 中:
# 1. Lighthouse 审计
# 2. Performance 选项卡记录
# 3. Coverage 选项卡检查未使用的 CSS
```

## 监控指标

持续监控以下指标：
- **未用 CSS 百分比**: 应该 < 20%
- **CSS 文件总大小**: 应该 < 100KB (gzip 后 < 25KB)
- **关键渲染路径**: 应该 < 50KB
- **首屏 CSS 加载时间**: 应该 < 500ms

## 相关链接

- [MDN: CSS 性能优化](https://developer.mozilla.org/en-US/docs/Learn/Performance)
- [Web.dev: CSS 优化](https://web.dev/css-optimize-your-images/)
- [CSS-Tricks: 关键 CSS](https://css-tricks.com/critical-css/)
