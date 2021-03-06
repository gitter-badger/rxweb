export interface PatternConfig{
    pattern: { [key: string]:  RegExp }
    message?: string;
    conditionalExpressions?: string | Function;
}
