import { MyAppPipePage } from './app.po';

describe('my-app-pipe App', () => {
  let page: MyAppPipePage;

  beforeEach(() => {
    page = new MyAppPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
