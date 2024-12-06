# AI 鸡尾酒配方生成器

这是一个基于 Astro 框架开发的 AI 鸡尾酒配方生成网站。通过 OpenRouter API 调用 GPT 模型，为用户生成专业的鸡尾酒配方。

## 功能特点

- 🍸 AI 生成专业鸡尾酒配方
- 📝 包含详细的配料表和制作步骤
- 🔢 自动计算酒精度数(ABV)、卡路里和碳水化合物
- 💫 优雅的界面设计
- 🚀 基于 Astro 的快速性能

## 快速开始

### 1. 克隆项目

### 2. 环境配置

在项目根目录创建 `.env` 文件，配置以下环境变量：

tip:注意，apikey不要泄漏，在你本地测试的时候，可以在项目根目录创建`.env`文件，但是不要提交到github，否则别人就可以看到你的apikey了。
但是不用担心，我已经设置了git提交规则，你大可以放心在本地创建此文件，而不需要担心会提交到github。在你`git add .`的时候，会自动忽略`.env`文件。

~~~ shell
OPENAI_API_KEY=your_openai_api_key
~~~


### 3. 安装依赖并启动

~~~ shell
# 安装依赖
npm install
# 启动本地开发服务器（本地测试）
npm run dev
~~~


## 项目结构说明

### 核心文件

- `src/pages/api/prompt.ts`: 配置文件，包含API配置和系统提示词
- `src/pages/api/getChat.ts`: API路由处理文件，负责与OpenRouter API交互
- `src/components/cocktail.astro`: 鸡尾酒生成器组件

### 关键配置说明

#### prompt.ts 配置项

- `SYSTEM_PROMPT`: 系统提示词，定义了AI生成鸡尾酒配方的规则和要求
- `baseUrl`: OpenRouter API的基URL
- `model`: 使用的AI模型
- `temperature`: 生成文本的温度参数(0-1) 不知道如何添加，那就问Cursor吧！
- `maxTokens`: 生成文本的最大Token数


#### 系统提示词配置

你可以在 `prompt.ts` 中自定义系统提示词，当前配置生成的鸡尾酒配方包含：
- 鸡尾酒风味描述
- 详细配料表
- 制作步骤
- 酒精度数(ABV)
- 卡路里和碳水化合物含量
- 装饰建议

## 使用说明

### 如何生成鸡尾酒配方

1. 访问网站首页
2. 在输入框中描述你想要的鸡尾酒类型或特点
3. 点击生成按钮
4. 等待AI生成专业的鸡尾酒配方

### 自定义提示词

如果你想修改生成的配方格式或内容，可以编辑 `src/pages/api/prompt.ts` 中的 `SYSTEM_PROMPT`：

~~~ typescript
// 系统提示词 在这里自定义你的prompt
export const SYSTEM_PROMPT: Message = {
role: "system",
content: "自定义你的提示词..."
}
~~~


## 部署说明

### 部署准备

1. 确保你有可用的 OpenRouter API 密钥
2. 在部署平台配置环境变量 `OPENAI_API_KEY`

### 推荐部署平台

- Vercel
- Cloudflare Pages

### 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在部署平台连接你的仓库
3. 配置环境变量
4. 部署项目

## 注意事项

- API密钥请妥善保管，不要泄露
- 建议设置合理的 `maxTokens` 以控制API使用成本
- 可以通过调整 `temperature` 参数来控制生成结果的创造性

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License

