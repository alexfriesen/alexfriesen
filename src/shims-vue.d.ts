declare module '*.svg?component' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
