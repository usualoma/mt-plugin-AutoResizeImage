declare class RangeInputElement extends HTMLElement {
    private _input;
    private _valueDisplay?;
    private _ignoreChange;
    static readonly observedAttributes: string[];
    constructor();
    connectedCallback(): void;
    labelPrecision: string;
    attributeChangedCallback(name: string, oldValue: string, newValue: string | null): void;
    private _retargetEvent;
    private _update;
    private _reflectAttributes;
}
interface RangeInputElement {
    name: string;
    min: string;
    max: string;
    step: string;
    value: string;
    disabled: boolean;
}
export default RangeInputElement;
