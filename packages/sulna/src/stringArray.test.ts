import { explode, join } from './stringArray';

describe('stringArray', () => {
  describe('join', () => {
    it('correctly joins one item', () => {
      expect(join(['abc'])).toEqual('abc');
    });

    it('correctly joins multiple items', () => {
      expect(join(['abc', 'def'])).toEqual(`* abc
* def`);
    });

    it('correctly behaves on empty array', () => {
      expect(join([])).toEqual('');
    });
  });

  describe('explode', () => {
    it('correctly explodes single item', () => {
      expect(explode('abc')).toEqual(['abc']);
    });

    it('correctly explodes multiple items', () => {
      expect(
        explode(`* abc
* def


*jh*ij
*   klmpop*


*`)
      ).toEqual(['abc', 'def', 'jh*ij', 'klmpop*']);
    });
  });
});
