# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

3. install extension 'volar'
4. install packages by pnpm or yarn (must be install package, or else when step 5 check 'use workspace version' will info 'not valid version')
5. type 'command+shift+p', input 'typescript', check 'Volar: Select Volar version' & check 'use workspace version'

ps: https://github.com/vitejs/vite/issues/965#issuecomment-717248892

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## Features

- ant-design 按需引入




## Problems
1. Could not find a declaration file for module '@/views/main/index.vue'. '/Users/hsm/github/vthree-admin/src/views/main/index.vue.js' implicitly has an 'any' type.ts(7016)
  
  添加env.d.ts文件解决
