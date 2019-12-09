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
        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR',]));
    });
});

describe('getPcoduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({ id: 1, price: 10 });
        expect(result).toMatchObject({ id: 1, price: 10 });
        // expect(result).toHaveProperty({ id: '1', price: 10 });
    });
});

describe('registerUser', () =>{
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false] ;
        args.forEach(a =>{
            expect(() => { lib.registerUser(a)}).toThrow();
        });
    });
    it('should return a use object if valid username is passed', () => {
        const result =lib.registerUser('mohsen');
        expect(result).toMatchObject({username: 'mohsen'});
        expect(result.id).toBeGreaterThan(0);
    });
});