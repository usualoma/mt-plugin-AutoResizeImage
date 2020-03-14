import { Component } from 'preact';
import { ResizeOptions } from './processor-meta';
interface Props {
    isVector: Boolean;
    inputWidth: number;
    inputHeight: number;
    options: ResizeOptions;
    onChange(newOptions: ResizeOptions): void;
}
interface State {
    maintainAspect: boolean;
}
export default class ResizerOptions extends Component<Props, State> {
    state: State;
    private form?;
    private presetWidths;
    private presetHeights;
    constructor(props: Props);
    private reportOptions;
    private onChange;
    private getAspect;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillReceiveProps(nextProps: Props): void;
    private onWidthInput;
    private onHeightInput;
    private generatePresetValues;
    private getPreset;
    private onPresetChange;
    render({ options, isVector }: Props, { maintainAspect }: State): JSX.Element;
}
export {};
