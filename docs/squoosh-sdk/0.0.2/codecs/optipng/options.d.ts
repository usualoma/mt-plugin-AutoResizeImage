import { Component } from 'preact';
import { EncodeOptions } from './encoder-meta';
declare type Props = {
    options: EncodeOptions;
    onChange(newOptions: EncodeOptions): void;
};
export default class OptiPNGEncoderOptions extends Component<Props, {}> {
    onChange(event: Event): void;
    render({ options }: Props): JSX.Element;
}
export {};
