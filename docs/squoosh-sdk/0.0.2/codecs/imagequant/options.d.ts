import { Component } from 'preact';
import { QuantizeOptions } from './processor-meta';
interface Props {
    options: QuantizeOptions;
    onChange(newOptions: QuantizeOptions): void;
}
interface State {
    extendedSettings: boolean;
}
export default class QuantizerOptions extends Component<Props, State> {
    state: State;
    componentDidMount(): void;
    onChange(event: Event): void;
    render({ options }: Props, { extendedSettings }: State): JSX.Element;
}
export {};
