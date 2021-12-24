import type { ComputedRef, Ref } from 'vue';
import type { FormSchema } from '../types/form';
interface UseFormActionContext {
    emit: any;
    getProps: ComputedRef<any>;
    getSchema: ComputedRef<any>;
    formModel: any;
    defaultValueRef: Ref;
    formElRef: Ref;
    handleFormValues: Function;
    schemaRef: Ref<FormSchema[]>;
}
export declare function useFormEvents({ emit, getProps, formModel, getSchema, defaultValueRef, formElRef, handleFormValues, schemaRef, }: UseFormActionContext): {
    setFieldsValue: (values: any) => Promise<void>;
    validateFields: (nameList?: string[] | undefined) => Promise<any>;
    handleSubmit: (e?: any) => Promise<void>;
    resetFields: () => Promise<void>;
    clearValidate: (name?: string | string[]) => Promise<void>;
    validate: (nameList?: any) => Promise<any>;
    getAllFieldsValue: () => any;
    resetSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
};
export {};
