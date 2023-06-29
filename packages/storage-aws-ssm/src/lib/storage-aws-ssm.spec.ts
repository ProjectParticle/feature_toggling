import { storageAwsSsm } from './storage-aws-ssm';

describe('storageAwsSsm', () => {
  it('should work', () => {
    expect(storageAwsSsm()).toEqual('storage-aws-ssm');
  });
});
