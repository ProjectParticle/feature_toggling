import { storageFs } from './storage-fs';

describe('storageFs', () => {
  it('should work', () => {
    expect(storageFs()).toEqual('storage-fs');
  });
});
