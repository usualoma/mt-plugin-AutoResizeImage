import { Component } from 'preact';
import RangeInputElement from '../../custom-els/RangeInput';
import '../../custom-els/RangeInput';
interface Props extends JSX.HTMLAttributes {
}
interface State {
}
export default class Range extends Component<Props, State> {
    rangeWc?: RangeInputElement;
    private onTextInput;
    render(props: Props): JSX.Element;
}
export {};
