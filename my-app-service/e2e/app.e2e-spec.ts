import { MyAppServicePage } from './app.po';

describe('my-app-service App', () => {
  let page: MyAppServicePage;

  beforeEach(() => {
    page = new MyAppServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
