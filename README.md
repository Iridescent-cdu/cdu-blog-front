# cdu-blog-front

## 1.搭建项目环境

1. 安装依赖

   ```shell
   npm install eslint prettier @antfu/eslint-config eslint-config-prettier eslint-plugin-prettier  commitizen   cz-customizable  @commitlint/config-conventional @commitlint/cli husky lint-staged vite-plugin-windicss windicss  -D 
   npm install axios pinia vue-router --save
   
   ```

2. 搭建文件夹目录结构，配置环境变量和axios

   ```js
   |-- undefined
       |-- .cz-config.js
       |-- .eslintrc
       |-- .gitignore
       |-- .prettierrc
       |-- commitlint.config.js
       |-- index.html
       |-- lint-staged.config.js
       |-- package-lock.json
       |-- package.json
       |-- README.md
       |-- vite.config.js
       |-- windi.config.js
       |-- .husky
       |   |-- commit-msg
       |   |-- pre-commit
       |   |-- _
       |       |-- .gitignore
       |       |-- husky.sh
       |-- .vscode
       |   |-- extensions.json
       |-- public
       |-- src
           |-- App.vue
           |-- main.js
           |-- permission.js
           |-- api
           |-- assets
           |-- components
           |-- constants
           |-- directives
           |-- layout
           |-- router
           |   |-- index.js
           |-- store
           |-- utils
           |-- view
   ```

