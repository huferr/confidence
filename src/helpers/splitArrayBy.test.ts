import { splitArrayBy } from './splitArrayBy';

const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const splited3MockArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const splited4MockArray = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];

describe('splitArray Fn Test Suites', () => {
  it('Should return a array of splited arrays, when given the size (3) of values as first arg and the base array as second arg', () => {
    const output = splitArrayBy(3, mockArray);
		expect(output).toEqual(splited3MockArray);
	});
	it('Should return a array of splited arrays, when given the size (4) of values as first arg and the base array as second arg', () => {
    const output = splitArrayBy(4, mockArray);
		expect(output).toEqual(splited4MockArray);
	});
	it('Should return an empty array, When given [] as second arg', () => {
		const output = splitArrayBy(3, []);
		expect(output).toEqual([])
	});

	describe('Should return "Invalid Array"', () => {
		it('When given null as second arg', () => {
			//@ts-ignore
      const output = splitArrayBy(3, null);
			expect(output).toEqual('Invalid array')
		});
		it('When given undefined as second arg', () => {
			//@ts-ignore
      const output = splitArrayBy(3, undefined);
			expect(output).toEqual('Invalid array')
		});
	});

	describe('Should return "Invalid size"', () => {
		it('When given null as first arg', () => {
			//@ts-ignore
      const output = splitArrayBy(null, mockArray);
			expect(output).toEqual('Invalid size')
		});
		it('When given undefined as first arg', () => {
			//@ts-ignore
      const output = splitArrayBy(undefined, mockArray);
			expect(output).toEqual('Invalid size')
		});
	});
});