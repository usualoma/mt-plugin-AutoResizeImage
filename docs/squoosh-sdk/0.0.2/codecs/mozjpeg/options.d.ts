import { Component } from 'preact';
import { EncodeOptions } from './encoder-meta';
interface Props {
    options: EncodeOptions;
    onChange(newOptions: EncodeOptions): void;
}
interface State {
    showAdvanced: boolean;
}
export default class MozJPEGEncoderOptions extends Component<Props, State> {
    state: State;
    onChange(event: Event): void;
    render({ options }: Props, { showAdvanced }: State): JSX.Element;
}
export {};
