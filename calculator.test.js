import { calculateLattePrice, ozToMl } from './calculator.js';

describe('Latte Price Calculator', () => {
    test('calculates price for basic latte', () => {
        // 2 shots espresso, 240ml milk (about 8oz)
        expect(calculateLattePrice(2, 240)).toBe(5.60);
    });

    test('handles zero values', () => {
        expect(calculateLattePrice(0, 0)).toBe(0);
    });

    test('handles decimal values', () => {
        // 1.5 shots espresso, 150ml milk
        expect(calculateLattePrice(1.5, 150)).toBe(3.875);
    });
});

describe('Unit Conversion', () => {
    test('converts ounces to milliliters', () => {
        expect(ozToMl(8)).toBeCloseTo(236.588, 3);
    });

    test('handles zero ounces', () => {
        expect(ozToMl(0)).toBe(0);
    });
}); 