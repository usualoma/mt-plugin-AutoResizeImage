import { Component, ComponentChild, ComponentChildren } from 'preact';
interface Props {
    children: ComponentChildren;
}
interface State {
    outgoingChildren: ComponentChild[];
}
export default class Expander extends Component<Props, State> {
    state: State;
    private lastElHeight;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUpdate(nextProps: Props): void;
    componentDidUpdate(previousProps: Props): Promise<void>;
    render(props: Props, { outgoingChildren }: State): JSX.Element;
}
export {};
