/// <reference types="vite/client" />

declare module '*.svg?component' {
  import {DefineComponent} from 'vue';
  const component:DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
