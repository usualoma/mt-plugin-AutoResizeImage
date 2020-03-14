import { Component } from 'preact';
interface Props extends JSX.HTMLAttributes {
    large?: boolean;
}
interface State {
}
export default class Select extends Component<Props, State> {
    render(props: Props): JSX.Element;
}
export {};
