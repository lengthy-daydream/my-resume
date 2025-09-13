# 个人简历项目

一个基于React的个人简历展示项目，使用现代前端技术栈构建。

## 技术栈

- **React 18** - 现代React框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速的前端构建工具
- **UnoCSS** - 原子化CSS框架
- **Ant Design** - 企业级UI设计语言
- **Redux Toolkit** - 状态管理工具
- **html2canvas** - HTML转Canvas，用于生成图片
- **jsPDF** - PDF文件生成
- **react-to-print** - React打印组件

## 特性

- 🎨 **现代化设计** - 使用Ant Design组件库，界面美观
- 📱 **响应式布局** - 适配各种屏幕尺寸
- ⚡ **高性能** - Vite构建，快速开发和部署
- 🔧 **可配置** - 通过Redux轻松管理简历数据
- 🎯 **TypeScript** - 完整的类型支持
- 🎨 **UnoCSS** - 原子化CSS，样式更灵活
- 📥 **导出功能** - 支持PDF、PNG格式下载和打印

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── Header.tsx      # 页面头部
│   ├── PersonalInfo.tsx # 个人信息
│   ├── Education.tsx   # 教育经历
│   ├── Skills.tsx      # 技能展示
│   ├── WorkExperience.tsx # 工作经验
│   └── Projects.tsx    # 项目经历
├── pages/              # 页面目录
│   └── Resume.tsx      # 简历主页
├── store/              # 状态管理
│   ├── index.ts        # Store配置
│   └── resumeSlice.ts  # 简历数据切片
├── App.tsx             # 主应用组件
└── main.tsx           # 应用入口
```

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:5173` 查看应用

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 自定义简历内容

简历数据存储在 `src/store/resumeSlice.ts` 文件中的 `initialState` 对象里。你可以修改以下内容：

1. **个人信息** (`personalInfo`): 姓名、职位、联系方式等
2. **教育经历** (`education`): 学校、专业、时间等
3. **工作经验** (`workExperience`): 公司、职位、工作描述等
4. **项目经历** (`projects`): 项目名称、描述、技术栈等
5. **技能** (`skills`): 前端、后端、数据库、工具等技能

## 下载功能

项目内置了完整的导出功能，位于页面右上角：

- **📥 下载 PNG**: 将简历导出为高清PNG图片
- **📄 下载 PDF**: 将简历导出为PDF文件，支持多页自动分页
- **🖨️ 打印**: 调用浏览器打印功能

### 插件说明

1. **html2canvas**: 将HTML元素转换为Canvas画布，支持高分辨率导出
2. **jsPDF**: 生成PDF文件，自动处理分页和样式
3. **react-to-print**: 提供React友好的打印功能

### 自定义下载设置

可以在 `DownloadActions` 组件中调整以下参数：
- 导出图片质量 (scale: 1-3)
- PDF页面尺寸 (A4, A3等)
- 文件命名格式
- 背景颜色设置

## 开发指南

### 添加新的简历模块

1. 在 `src/components/` 目录下创建新组件
2. 在 `src/store/resumeSlice.ts` 中添加对应的数据结构
3. 在 `src/pages/Resume.tsx` 中引入和使用新组件

### 样式自定义

项目使用UnoCSS，你可以：
- 直接在组件中使用原子化CSS类
- 在 `uno.config.ts` 中自定义主题和快捷方式
- 使用Ant Design的主题定制功能

### 状态管理

使用Redux Toolkit进行状态管理：
- 数据修改通过dispatching actions
- 组件通过`useSelector`获取数据
- 支持异步操作和中间件

## 许可证

MIT License

## 作者

严斌 - 前端工程师 