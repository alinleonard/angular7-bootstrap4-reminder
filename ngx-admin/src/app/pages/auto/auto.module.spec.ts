import { AutoModule } from './auto.module';

describe('AutoModule', () => {
  let autoModule: AutoModule;

  beforeEach(() => {
    autoModule = new AutoModule();
  });

  it('should create an instance', () => {
    expect(autoModule).toBeTruthy();
  });
});
