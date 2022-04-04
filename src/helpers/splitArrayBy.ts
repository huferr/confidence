export const splitArrayBy = (size: number, list: Array<any>) => {
	if (!list) return 'Invalid array';
	if (!size) return 'Invalid size';
	return list.reduce((acc, _curr, i, self) => (i % size) ? acc : [...acc, self.slice(i, i + size)], []);
}