import type { FormSchema } from './types/form';
declare const _default: import("vue").DefineComponent<{
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labelPosition: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    schemas: {
        type: ArrayConstructor[];
        default: () => any[];
    };
    submitOnReset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transformDateFunc: {
        type: FunctionConstructor;
        default: (date: any) => any;
    };
    showActionButtonGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    actionColOptions: ObjectConstructor;
    showResetButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resetButtonOptions: ObjectConstructor;
    submitButtonOptions: ObjectConstructor;
    resetFunc: import("vue").PropType<() => Promise<void>>;
    submitFunc: import("vue").PropType<() => Promise<void>>;
    labelCol: ObjectConstructor;
    wrapperCol: ObjectConstructor;
    rowProps: ObjectConstructor;
    baseRowStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    baseColProps: {
        type: ObjectConstructor;
    };
}, {
    getProps: import("vue").ComputedRef<{
        labelPosition: string;
        labelWidth: string | number;
        size: string;
        disabled: boolean;
        onRegister: (...args: any[]) => any;
        onReset: (...args: any[]) => any;
        onSubmit: (...args: any[]) => any;
        schemas: unknown[];
        submitOnReset: boolean;
        transformDateFunc: Function;
        showActionButtonGroup: boolean;
        actionColOptions: Record<string, any>;
        showResetButton: boolean;
        resetButtonOptions: Record<string, any>;
        submitButtonOptions: Record<string, any>;
        resetFunc: () => Promise<void>;
        submitFunc: () => Promise<void>;
        labelCol: Record<string, any>;
        wrapperCol: Record<string, any>;
        rowProps: Record<string, any>;
        baseRowStyle: unknown;
        baseColProps: Record<string, any>;
    }>;
    getSchema: import("vue").ComputedRef<any>;
    formElRef: any;
    formModel: {};
    getBindValue: import("vue").ComputedRef<{
        labelPosition: string;
        labelWidth: string | number;
        size: string;
        disabled: boolean;
        onRegister: (...args: any[]) => any;
        onReset: (...args: any[]) => any;
        onSubmit: (...args: any[]) => any;
        schemas: unknown[];
        submitOnReset: boolean;
        transformDateFunc: Function;
        showActionButtonGroup: boolean;
        actionColOptions: Record<string, any>;
        showResetButton: boolean;
        resetButtonOptions: Record<string, any>;
        submitButtonOptions: Record<string, any>;
        resetFunc: () => Promise<void>;
        submitFunc: () => Promise<void>;
        labelCol: Record<string, any>;
        wrapperCol: Record<string, any>;
        rowProps: Record<string, any>;
        baseRowStyle: unknown;
        baseColProps: Record<string, any>;
    }>;
    setFormModel: (key: string, value: any) => void;
    defaultValueRef: import("vue").Ref<{}>;
    handleSubmit: (e?: any) => Promise<void>;
    getRow: import("vue").ComputedRef<{
        style: unknown;
    }>;
    formActionType: {
        setProps: (formProps: any) => Promise<void>;
        setFieldsValue: (values: any) => Promise<void>;
        validate: (nameList?: any) => Promise<any>;
        clearValidate: (name?: string | string[]) => Promise<void>;
        submit: (e?: any) => Promise<void>;
        getAllFieldsValue: () => any;
        resetSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
        resetFields: () => Promise<void>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("register" | "reset" | "submit")[], "register" | "reset" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labelWidth?: unknown;
    labelPosition?: unknown;
    size?: unknown;
    disabled?: unknown;
    schemas?: unknown;
    submitOnReset?: unknown;
    transformDateFunc?: unknown;
    showActionButtonGroup?: unknown;
    actionColOptions?: unknown;
    showResetButton?: unknown;
    resetButtonOptions?: unknown;
    submitButtonOptions?: unknown;
    resetFunc?: unknown;
    submitFunc?: unknown;
    labelCol?: unknown;
    wrapperCol?: unknown;
    rowProps?: unknown;
    baseRowStyle?: unknown;
    baseColProps?: unknown;
} & {
    labelPosition: string;
    labelWidth: string | number;
    size: string;
    disabled: boolean;
    schemas: unknown[];
    submitOnReset: boolean;
    transformDateFunc: Function;
    showActionButtonGroup: boolean;
    showResetButton: boolean;
} & {
    actionColOptions?: Record<string, any>;
    resetButtonOptions?: Record<string, any>;
    submitButtonOptions?: Record<string, any>;
    resetFunc?: () => Promise<void>;
    submitFunc?: () => Promise<void>;
    labelCol?: Record<string, any>;
    wrapperCol?: Record<string, any>;
    rowProps?: Record<string, any>;
    baseRowStyle?: unknown;
    baseColProps?: Record<string, any>;
}> & {
    onRegister?: (...args: any[]) => any;
    onReset?: (...args: any[]) => any;
    onSubmit?: (...args: any[]) => any;
}, {
    labelPosition: string;
    labelWidth: string | number;
    size: string;
    disabled: boolean;
    schemas: unknown[];
    submitOnReset: boolean;
    transformDateFunc: Function;
    showActionButtonGroup: boolean;
    showResetButton: boolean;
}>;
export default _default;
