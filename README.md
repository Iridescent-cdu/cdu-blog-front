# cdu-blog-front

1. 安装依赖

   ```shell
   npm install 
   
   ```

2. 文件夹目录结构

     ```markdown
   |-- blog
    |-- .cz-config.js
    |-- .env.development
    |-- .env.production
    |-- .eslintrc
    |-- .gitignore
    |-- .prettierrc
    |-- auto-imports.d.ts
    |-- commitlint.config.js
    |-- components.d.ts
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
    |-- .idea
    |   |-- .gitignore
    |   |-- cdu-blog-front.iml
    |   |-- modules.xml
    |   |-- vcs.xml
    |   |-- workspace.xml
    |   |-- codeStyles
    |   |   |-- codeStyleConfig.xml
    |   |   |-- Project.xml
    |   |-- inspectionProfiles
    |       |-- Project_Default.xml
    |-- .vscode
    |   |-- extensions.json
    |-- public
    |   |-- Logo Admin.png
    |   |-- Logo.png
    |   |-- Profile Picture Big.png
    |   |-- vite.svg
    |-- src
        |-- App.vue
        |-- main.js
        |-- permission.js
        |-- api
        |   |-- article.js
        |   |-- home.js
        |   |-- user.js
        |-- assets
        |   |-- vue.svg
        |   |-- icons
        |       |-- book-open.svg
        |       |-- change-header-image.svg
        |       |-- check.svg
        |       |-- edit.svg
        |       |-- error.svg
        |       |-- eye.svg
        |       |-- grid.svg
        |       |-- key.svg
        |       |-- search.svg
        |       |-- success.svg
        |       |-- trash.svg
        |       |-- user.svg
        |       |-- vector.svg
        |       |-- warn.svg
        |       |-- x-circle.svg
        |-- components
        |   |-- index.js
        |   |-- article
        |   |   |-- index.vue
        |   |-- button
        |   |   |-- index.vue
        |   |-- dialog
        |   |   |-- index.vue
        |   |-- search
        |   |   |-- index.vue
        |   |-- svg-icon
        |       |-- index.vue
        |-- constants
        |   |-- index.js
        |-- directives
        |   |-- index.js
        |   |-- modules
        |       |-- lazy.js
        |-- layout
        |   |-- admin
        |   |   |-- index.vue
        |   |   |-- components
        |   |       |-- menu.vue
        |   |-- front
        |       |-- index.vue
        |       |-- header
        |           |-- index.vue
        |           |-- components
        |               |-- profile.vue
        |-- router
        |   |-- index.js
        |-- store
        |   |-- index.js
        |   |-- search.js
        |   |-- user.js
        |-- utils
        |   |-- format.js
        |   |-- request.js
        |   |-- sts.js
        |-- views
            |-- admin
            |   |-- all
            |   |   |-- index.vue
            |   |-- dashboard
            |   |   |-- index.vue
            |   |   |-- components
            |   |       |-- pin.vue
            |   |       |-- total.vue
            |   |-- profile
            |   |   |-- index.vue
            |   |   |-- components
            |   |       |-- avatar.vue
            |   |       |-- change-avatar.vue
            |   |       |-- form.vue
            |   |-- write
            |       |-- index.vue
            |-- front
                |-- article
                |   |-- index.vue
                |   |-- components
                |       |-- author.vue
                |       |-- footer.vue
                |       |-- main.vue
                |-- home
                |   |-- index.vue
                |   |-- components
                |       |-- banner.vue
                |       |-- footer.vue
                |       |-- main.vue
                |-- login
                |   |-- index.vue
                |   |-- validate.js
                |-- profile
                |   |-- index.vue
                |   |-- components
                |       |-- pins.vue
                |-- sign
                |   |-- index.vue
                |-- tags
                    |-- index.vue
                    |-- components
                        |-- result.vue
                        |-- search.vue
                        |-- tags.vue
