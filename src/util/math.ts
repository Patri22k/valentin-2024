function gMult(base: number, mult: number, pos: number): number {
    return base * Math.pow(mult, pos-1);
}

export { gMult }