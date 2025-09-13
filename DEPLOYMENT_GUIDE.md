# 部署指南 - 解决GitHub Pages访问问题

由于GitHub Pages在中国大陆访问存在困难，本项目提供了多个部署平台的解决方案。

## 🚀 推荐方案：Vercel 部署

### 优势
- ✅ 中国大陆访问速度极佳
- ✅ 免费额度充足（100GB/月）
- ✅ 自动HTTPS和CDN
- ✅ 支持自定义域名
- ✅ 部署速度快

### 快速开始

#### 方法一：直接导入（推荐新手）

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择 `my-resume` 仓库
5. 点击 "Deploy" - Vercel会自动识别配置

#### 方法二：自动化部署

如果您希望推送代码时自动部署到Vercel：

1. **获取Vercel令牌**
   - 访问 [Vercel Settings - Tokens](https://vercel.com/account/tokens)
   - 创建新的Token

2. **获取项目ID**
   - 在Vercel项目设置页面找到 "Project ID"
   - 在同一页面找到 "Team ID"（组织ID）

3. **配置GitHub Secrets**
   在GitHub仓库 Settings → Secrets → Actions 中添加：
   - `VERCEL_TOKEN`: 您的Vercel令牌
   - `VERCEL_ORG_ID`: 您的团队/组织ID
   - `VERCEL_PROJECT_ID`: 项目ID

4. **启用自动部署**
   ```bash
   # 推送代码即可触发自动部署
   git push origin main
   ```

## 🌐 备选方案：Netlify 部署

### 使用步骤
1. 访问 [netlify.com](https://netlify.com)
2. 使用GitHub账号登录
3. 点击 "New site from Git"
4. 选择 `my-resume` 仓库
5. Netlify会自动使用 `netlify.toml` 配置

## 📊 各平台对比

| 平台 | 中国访问速度 | 免费额度 | 配置难度 | 推荐指数 |
|------|-------------|----------|----------|----------|
| Vercel | ⭐⭐⭐⭐⭐ | 100GB/月 | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐⭐⭐ | 100GB/月 | ⭐⭐ | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐ | 100GB/月 | ⭐ | ⭐⭐ |

## 🔧 技术说明

### 路径配置
项目已配置动态base路径：
- GitHub Pages: `/my-resume/`
- Vercel/Netlify: `/`

### 环境变量
- `DEPLOY_PLATFORM=github`: GitHub Pages部署
- `DEPLOY_PLATFORM=vercel`: Vercel部署
- 不设置: 默认为根路径部署

## 🚦 部署状态检查

部署完成后，您可以通过以下方式验证：

1. **检查构建日志** - 查看是否有错误
2. **测试网站功能** - 确保所有功能正常
3. **检查访问速度** - 在不同网络环境下测试

## 📝 故障排除

### 常见问题

1. **构建失败**
   - 检查 `package.json` 中的依赖版本
   - 确保 `pnpm-lock.yaml` 文件存在

2. **样式或资源加载失败**
   - 检查 `base` 路径配置是否正确
   - 确认环境变量设置

3. **路由问题**
   - 确保平台配置了SPA重定向规则
   - 检查 `vercel.json` 或 `netlify.toml` 配置

### 获取帮助

如果遇到问题，可以：
- 查看构建日志
- 检查平台官方文档
- 在GitHub Issues中提问

## 🎉 推荐操作

1. **立即尝试Vercel** - 最简单快速的解决方案
2. **保留GitHub Pages** - 作为备用部署
3. **配置自定义域名** - 获得最佳访问体验 