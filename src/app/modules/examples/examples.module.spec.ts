import { ExamplesModule } from './examples.module';

describe('ExampleModule', () => {
  let exampleModule: ExamplesModule;

  beforeEach(() => {
    exampleModule = new ExamplesModule();
  });

  it('should create an instance', () => {
    expect(exampleModule).toBeTruthy();
  });
});
