import { Component } from 'preact';
import { EncodeOptions } from './encoder-meta';
interface Props {
    options: EncodeOptions;
    onChange(newOptions: EncodeOptions): void;
}
interface State {
    showAdvanced: boolean;
}
export default class WebPEncoderOptions extends Component<Props, State> {
    state: State;
    onChange(event: Event): void;
    private _losslessSpecificOptions;
    private _lossySpecificOptions;
    render({ options }: Props): JSX.Element;
}
export {};
