declare const _default: import("vue").DefineComponent<{
    schema: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    allDefaultValues: {
        type: ObjectConstructor;
        default: () => {};
    };
    formModel: {
        type: ObjectConstructor;
        default: () => {};
    };
    setFormModel: {
        type: FunctionConstructor;
        default: any;
    };
    formActionType: {
        type: ObjectConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    schema?: unknown;
    formProps?: unknown;
    allDefaultValues?: unknown;
    formModel?: unknown;
    setFormModel?: unknown;
    formActionType?: unknown;
} & {
    schema: Record<string, any>;
    formProps: Record<string, any>;
    allDefaultValues: Record<string, any>;
    formModel: Record<string, any>;
} & {
    setFormModel?: Function;
    formActionType?: Record<string, any>;
}>, {
    schema: Record<string, any>;
    formProps: Record<string, any>;
    allDefaultValues: Record<string, any>;
    formModel: Record<string, any>;
    setFormModel: Function;
}>;
export default _default;
