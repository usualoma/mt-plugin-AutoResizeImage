interface QualityOptionArg {
    min?: number;
    max?: number;
    step?: number;
}
export default function qualityOption(opts?: QualityOptionArg): typeof QualityOptions;
export {};
