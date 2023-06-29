import { deployAws } from './deploy-aws';

describe('deployAws', () => {
  it('should work', () => {
    expect(deployAws()).toEqual('deploy-aws');
  });
});
