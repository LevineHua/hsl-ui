import type { ComponentType } from './types';
export declare function createPlaceholderMessage(component: ComponentType): "请输入" | "请选择" | "";
export declare function setComponentRuleType(rule: any, component: ComponentType, valueFormat: string): void;
export declare function handleFormItemValue(schema?: any, val?: any): any;
export declare const dateItemType: string[];
