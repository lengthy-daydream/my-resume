# 简历网站 - Netlify 部署 🚀

最简单的部署方案，推送代码即可自动部署。

## ✨ 为什么选择 Netlify

- ✅ 中国大陆访问稳定
- ✅ 推送代码自动部署
- ✅ 免费额度充足（100GB/月）
- ✅ 零配置，开箱即用

## 🚀 一次性设置（5分钟完成）

1. 访问 [netlify.com](https://netlify.com) 使用GitHub登录
2. 点击 "New site from Git" → "GitHub"
3. 选择 `my-resume` 仓库
4. 点击 "Deploy site"（设置会自动检测）

**完成！** 🎉 您会得到一个 `.netlify.app` 网址

## 🔄 日常使用

以后只需要：
```bash
git add .
git commit -m "更新简历"
git push origin main
```

推送代码后，网站会自动更新！

## 🛠️ 方案二：GitHub Actions自动部署

如果您需要更多控制权或想要自定义构建流程。

### 配置步骤：

1. **获取Netlify认证令牌**
   - 登录Netlify
   - 访问 [Personal Access Tokens](https://app.netlify.com/user/applications#personal-access-tokens)
   - 点击 "New access token"
   - 输入描述（如："GitHub Actions"）
   - 复制生成的令牌

2. **获取Site ID**
   - 在Netlify中选择您的站点
   - 进入 "Site settings"
   - 在 "General" 标签页找到 "Site ID"
   - 复制Site ID

3. **配置GitHub Secrets**
   - 在GitHub仓库中，进入 Settings → Secrets and variables → Actions
   - 添加以下Secrets：
     ```
     NETLIFY_AUTH_TOKEN: 您的Netlify访问令牌
     NETLIFY_SITE_ID: 您的Site ID
     ```

4. **启用自动部署**
   - 推送代码到main分支
   - GitHub Actions会自动运行部署脚本
   - 查看 Actions 标签页监控部署进度

## 📁 项目配置文件说明

### `netlify.toml` 配置解析

```toml
[build]
  command = "pnpm build"          # 构建命令
  publish = "dist"                # 发布目录

[build.environment]
  NODE_VERSION = "18"             # Node.js版本
  PNPM_VERSION = "8"              # pnpm版本

# 不同环境的变量设置
[context.production.environment]
  DEPLOY_PLATFORM = "netlify"     # 生产环境

[[redirects]]
  from = "/*"                     # SPA路由支持
  to = "/index.html"
  status = 200

# 性能优化 - 静态资源缓存
[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔧 自定义域名配置

### 使用自定义域名：

1. **在Netlify中配置**
   - Site settings → Domain management
   - 点击 "Add custom domain"
   - 输入您的域名（如：`resume.yourdomain.com`）

2. **配置DNS**
   - 在您的域名注册商处添加CNAME记录：
     ```
     resume CNAME your-site-name.netlify.app
     ```
   - 或者使用Netlify DNS（推荐）

3. **启用HTTPS**
   - Netlify会自动为自定义域名申请SSL证书
   - 通常在几分钟内生效

## 🚦 部署状态监控

### 检查部署状态：

1. **Netlify Dashboard**
   - 登录Netlify查看部署历史
   - 查看构建日志和错误信息

2. **GitHub Actions**
   - 在GitHub仓库的Actions标签页查看工作流状态

3. **部署通知**
   - 可以设置Slack、Email等通知方式

## 📊 性能优化

### 已配置的优化项：

- ✅ **静态资源缓存** - JS/CSS文件缓存1年
- ✅ **Gzip压缩** - Netlify自动启用
- ✅ **CDN分发** - 全球CDN网络
- ✅ **安全头设置** - XSS保护、内容类型检查等

## 🔍 故障排除

### 常见问题及解决方案：

1. **构建失败**
   ```bash
   # 检查package.json中的脚本
   "scripts": {
     "build": "tsc --noEmitOnError false && vite build"
   }
   ```

2. **路径问题**
   - 确保 `vite.config.ts` 中的base路径设置正确
   - Netlify使用根路径 `/`

3. **依赖问题**
   ```bash
   # 清除缓存重新安装
   rm pnpm-lock.yaml
   rm -rf node_modules
   pnpm install
   ```

4. **环境变量问题**
   - 检查 `netlify.toml` 中的环境变量设置
   - 确保 `DEPLOY_PLATFORM=netlify`

## 🎯 推荐工作流

1. **开发阶段**
   ```bash
   git checkout -b feature/new-feature
   # 进行开发...
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

2. **预览部署**
   - 创建Pull Request
   - Netlify自动生成预览链接
   - 在预览环境中测试

3. **生产部署**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   # 自动触发生产部署
   ```

## 📈 高级功能

### 可选配置：

1. **表单处理**
   - Netlify提供免费的表单处理服务
   - 可用于简历网站的联系表单

2. **函数部署**
   - 支持Serverless函数
   - 可用于API接口

3. **A/B测试**
   - 分流测试不同版本
   - 优化用户体验

## ✅ 部署检查清单

部署前请确认：

- [ ] `netlify.toml` 配置文件存在
- [ ] `package.json` 中包含构建脚本
- [ ] `pnpm-lock.yaml` 文件存在
- [ ] 所有依赖都已安装
- [ ] 本地构建成功 (`pnpm build`)
- [ ] GitHub Secrets配置正确（如使用Actions）

## 🎉 成功部署后

1. **测试网站功能**
   - 检查所有页面是否正常加载
   - 测试响应式设计
   - 验证PDF下载功能

2. **性能检查**
   - 使用Google PageSpeed Insights测试
   - 检查加载速度

3. **SEO优化**
   - 添加合适的meta标签
   - 配置sitemap.xml（如需要）

4. **分享您的简历**
   - 您现在拥有一个在中国大陆访问良好的简历网站！

---

🎯 **推荐**: 如果您是第一次使用Netlify，建议先尝试**方案一**（直接Git集成），这是最简单且可靠的方式。 