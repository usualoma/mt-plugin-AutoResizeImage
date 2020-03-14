export declare const DownloadIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const ToggleBackgroundIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const ToggleBackgroundActiveIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const RotateIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const AddIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const RemoveIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const UncheckedIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const CheckedIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const ExpandIcon: (props: JSX.HTMLAttributes) => JSX.Element;
export declare const BackIcon: (props: JSX.HTMLAttributes) => JSX.Element;
declare const copyAcrossRotations: {
    up: number;
    right: number;
    down: number;
    left: number;
};
export interface CopyAcrossIconProps extends JSX.HTMLAttributes {
    copyDirection: keyof typeof copyAcrossRotations;
}
export declare const CopyAcrossIcon: (props: CopyAcrossIconProps) => JSX.Element;
export {};
