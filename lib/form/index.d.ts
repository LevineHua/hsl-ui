import type { SFCWithInstall } from '@hsl-ui/utils/types';
import Form from './src/index.vue';
declare const _Form: SFCWithInstall<typeof Form>;
export * from './src/types/form';
export { useForm } from './src/hooks/useForm';
export { default as ApiSelect } from './src/components/ApiSelect.vue';
export default _Form;
