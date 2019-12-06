const lib = require('../lib');

describe('absolute', () => {

    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});
describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('mohsen');
        expect(result).toMatch(/mohsen/);// 'Welcome mohsen');
    });

});
describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = lib.getCurrencies();
        //too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        //too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result[2]).toBe('EUR');
    });

});
