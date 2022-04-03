export const splitArrayBy = (size: number, list: Array<any>) => 
    list.reduce((acc, _curr, i, self) => (i % size) ? acc : [...acc, self.slice(i, i + size)], []);