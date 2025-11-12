# Squarespace Scheduling 集成指南

## 🎉 完成的修改

### 1. ✅ 删除了不必要的登录功能

**修改的文件：**
- `components/luxury/layout/LuxuryHeader.jsx`
- `components/luxury/layout/LuxuryHeader.module.css`

**改动内容：**
- ❌ 删除了左上角的用户图标登录按钮
- ❌ 删除了移动端菜单中的 "Login" 链接
- ✅ 替换为 "Book Appointment" 预约按钮
- ✅ 桌面端：右上角蓝色 CTA 按钮
- ✅ 移动端：菜单中的预约链接

---

## 📍 新增的预约区域

### 2. ✅ 创建了 BookingSection 组件

**位置：** `components/luxury/booking/BookingSection.jsx`

**设计特点：**
- 🎨 遵循奔驰 Stage Design（24px 黑条 + 1px 白线）
- 📱 完全响应式设计（桌面/平板/手机）
- 🎯 两个主要按钮：
  - "Schedule Online" - 用于 Squarespace 链接
  - "Call (310) 555-1234" - 电话预约
- ℹ️ 右侧边栏显示：
  - 营业时间
  - 服务承诺（pickup、report、warranty 等）

**在首页的位置：**
Gallery（案例展示）和 FAQ 之间

---

## 🔧 如何集成 Squarespace Scheduling

### 选项 1：按钮链接（最简单）⭐ 推荐

1. **登录你的 Squarespace Scheduling 账户**
2. **获取你的预约页面 URL**
   - 通常是：`https://your-shop-name.squarespace.com/schedule`
3. **打开文件：** `components/luxury/booking/BookingSection.jsx`
4. **找到第 55-61 行的按钮代码：**

```jsx
<a
  href="https://your-shop.squarespace.com/schedule"  // 👈 修改这里
  target="_blank"
  rel="noopener noreferrer"
  className={styles.bookButton}
>
```

5. **替换 URL：**
   - 把 `https://your-shop.squarespace.com/schedule`
   - 改成你的真实 Squarespace 预约链接

6. **保存文件** ✅

**优点：**
- ✅ 最简单，只需改一个 URL
- ✅ 用户点击后跳转到 Squarespace 页面
- ✅ 不需要担心 iframe 兼容性

**缺点：**
- ❌ 用户离开你的网站
- ❌ 视觉体验不连贯

---

### 选项 2：Iframe 嵌入（无缝体验）

1. **登录 Squarespace Scheduling**
2. **找到嵌入代码设置**
   - 通常在：Settings → Embed Code
   - 复制 iframe 代码（类似下面这样）：

```html
<iframe
  src="https://your-shop.squarespace.com/schedule/widget"
  width="100%"
  height="800"
  frameBorder="0"
></iframe>
```

3. **打开文件：** `components/luxury/booking/BookingSection.jsx`

4. **找到第 48-61 行的注释区域：**

```jsx
{/*
  INTEGRATION POINT: Squarespace Scheduling
  ...
*/}
```

5. **替换整个按钮区域（第 63-88 行）为：**

```jsx
{/* Squarespace Scheduling Embed */}
<div className={styles.schedulingEmbed}>
  <iframe
    src="https://your-shop.squarespace.com/schedule/widget"
    width="100%"
    height="800"
    frameBorder="0"
    title="Book Appointment"
  />
</div>
```

6. **在 CSS 文件中取消注释嵌入样式：**
   - 打开：`components/luxury/booking/BookingSection.module.css`
   - 找到第 167-178 行
   - 取消注释（删除 `/*` 和 `*/`）：

```css
.schedulingEmbed {
  margin-top: var(--space-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: var(--space-md);
}

.schedulingEmbed iframe {
  width: 100%;
  min-height: 600px;
  border: none;
}
```

**优点：**
- ✅ 用户不离开网站
- ✅ 视觉体验连贯
- ✅ 更专业

**缺点：**
- ❌ 需要 Squarespace 支持 iframe 嵌入
- ❌ 可能需要调整高度以适配内容

---

## 📞 更新联系电话

### 在以下文件中替换电话号码：

**1. Header 按钮：** `components/luxury/layout/LuxuryHeader.jsx`
```jsx
// 第 44 行
<a href="#book-appointment" className={styles.bookButton}>
```
这个是锚点链接，不需要改。

**2. BookingSection 电话按钮：** `components/luxury/booking/BookingSection.jsx`
```jsx
// 第 77-78 行
<a href="tel:+13105551234" className={styles.callButton}>
  Call (310) 555-1234
</a>
```
改成：
```jsx
<a href="tel:+1你的电话号码" className={styles.callButton}>
  Call (你的电话号码)
</a>
```

**3. Footer 联系电话：** `components/luxury/layout/LuxuryFooter.jsx`
```jsx
// 第 88 行
<a href="tel:+13105551234">(310) 555-1234</a>
```

---

## 🎯 Header "Book Appointment" 按钮的工作原理

**桌面端：**
- 点击 "Book Appointment" 按钮
- 页面平滑滚动到 `id="book-appointment"` 的预约区域
- 使用锚点链接：`href="#book-appointment"`

**移动端：**
- 汉堡菜单中也有 "Book Appointment" 链接
- 同样滚动到预约区域

**如果你想让 Header 按钮直接跳转到 Squarespace：**
在 `LuxuryHeader.jsx` 第 44 行改为：
```jsx
<a
  href="https://your-shop.squarespace.com/schedule"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.bookButton}
>
  Book Appointment
</a>
```

---

## 📋 完整的文件清单

### 修改的文件：
1. ✅ `components/luxury/layout/LuxuryHeader.jsx` - 删除登录，添加预约按钮
2. ✅ `components/luxury/layout/LuxuryHeader.module.css` - 更新按钮样式
3. ✅ `pages/Luxury/Home.jsx` - 添加 BookingSection 组件

### 新增的文件：
4. ✅ `components/luxury/booking/BookingSection.jsx` - 预约区域组件
5. ✅ `components/luxury/booking/BookingSection.module.css` - 预约区域样式

---

## 🚀 测试步骤

1. **启动开发服务器：**
```bash
npm run dev
```

2. **访问：** `http://localhost:5174/luxury`

3. **检查 Header：**
   - ✅ 左上角只有 "WSC" 店名
   - ✅ 右上角有蓝色 "Book Appointment" 按钮
   - ✅ 点击后滚动到预约区域

4. **检查预约区域：**
   - ✅ 在 Gallery 和 FAQ 之间
   - ✅ 有两个按钮："Schedule Online" 和 "Call..."
   - ✅ 右侧显示营业时间和服务承诺
   - ✅ 移动端侧边栏在下方显示

5. **检查移动端：**
   - ✅ 打开 DevTools (F12)
   - ✅ 切换到手机视图
   - ✅ 点击汉堡菜单
   - ✅ 确认有 "Book Appointment" 链接

---

## ❓ 常见问题

### Q1: Squarespace Scheduling 需要付费吗？
**A:** 是的，Squarespace Scheduling 是独立的订阅服务：
- **基础版：** $14-18/月
- **专业版：** $27-40/月
- 包含在线预约、日历同步、自动提醒等功能

### Q2: 可以用其他预约系统吗？
**A:** 当然可以！任何支持链接或 iframe 的预约系统都行：
- Calendly
- Acuity Scheduling
- Square Appointments
- Google Calendar Appointment Slots

只需替换 URL 或 iframe 代码即可。

### Q3: 预约区域可以自定义内容吗？
**A:** 完全可以！打开 `BookingSection.jsx` 修改：
- 标题（第 34 行）
- 副标题（第 39 行）
- 营业时间（第 111-125 行）
- 服务承诺列表（第 130-158 行）

### Q4: 可以移除侧边栏吗？
**A:** 可以。在 `BookingSection.jsx` 删除第 95-160 行的 `bookingSidebar` 部分，并在 CSS 中将网格改为单列：
```css
.bookingContainer {
  grid-template-columns: 1fr;  /* 删除 "1fr 380px" */
}
```

---

## 📧 需要帮助？

如果在集成过程中遇到问题：
1. 检查浏览器控制台（F12）是否有报错
2. 确认 Squarespace URL 是否正确
3. 检查 iframe 是否被浏览器拦截（某些浏览器会阻止第三方 iframe）

---

## 🎊 总结

你现在有：
- ✅ 干净的 Header（无登录按钮）
- ✅ 预约 CTA 按钮（桌面端右上角）
- ✅ 完整的预约区域（在首页中间）
- ✅ 预留了 Squarespace 集成位置
- ✅ 两种集成方式可选（链接或 iframe）

**下一步：**
1. 购买 Squarespace Scheduling 订阅
2. 设置你的预约日历和服务项目
3. 获取 URL 或 iframe 代码
4. 按照上面的指南集成到网站

**预计时间：** 10-15 分钟完成集成 ⏱️

---

*文档创建日期：2025-10-23*
*最后更新：2025-10-23*
