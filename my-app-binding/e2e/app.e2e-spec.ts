import { MyAppBindingPage } from './app.po';

describe('my-app-binding App', () => {
  let page: MyAppBindingPage;

  beforeEach(() => {
    page = new MyAppBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
