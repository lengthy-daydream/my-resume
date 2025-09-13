# GitHub Pages 自动化部署说明

本项目已配置自动化 GitHub Pages 部署。

## 部署配置

### 文件说明
- `.github/workflows/deploy.yml` - GitHub Actions 自动化部署工作流
- `vite.config.ts` - 已配置正确的 base 路径支持 GitHub Pages

### 自动部署触发条件
1. 当代码推送到 `main` 分支时自动触发部署
2. 支持手动触发部署（在 GitHub Actions 页面点击 "Run workflow"）

## 设置步骤

### 1. 启用 GitHub Pages
1. 在 GitHub 仓库页面，点击 **Settings** 选项卡
2. 在左侧菜单中点击 **Pages**
3. 在 **Source** 部分，选择 **GitHub Actions**

### 2. 推送代码
将代码推送到 `main` 分支：
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 3. 查看部署状态
1. 在 GitHub 仓库页面，点击 **Actions** 选项卡
2. 查看 "Deploy to GitHub Pages" 工作流的运行状态
3. 部署成功后，网站将在 `https://[username].github.io/my-resume/` 可访问

## 自定义配置

### 修改仓库名称
如果你的仓库名称不是 `my-resume`，请修改 `vite.config.ts` 中的 base 路径：

```typescript
// vite.config.ts
export default defineConfig({
  base: '/your-repository-name/', // 修改为你的仓库名称
  // ...
});
```

### 自定义域名
如果你有自定义域名，可以在仓库根目录下创建 `public/CNAME` 文件：
```
yourdomain.com
```

## 技术栈
- **构建工具**: Vite
- **包管理器**: pnpm
- **部署**: GitHub Actions + GitHub Pages
- **缓存优化**: 已配置 pnpm 缓存以加速构建

## 故障排除

### 部署失败
1. 检查 GitHub Actions 日志
2. 确保 GitHub Pages 已启用
3. 确认分支名称为 `main`

### 资源路径错误
1. 检查 `vite.config.ts` 中的 `base` 配置
2. 确保与仓库名称一致

### 权限问题
工作流已配置必要的权限：
- `contents: read` - 读取代码
- `pages: write` - 写入 GitHub Pages  
- `id-token: write` - 身份验证 