import { MyAppDirectivePage } from './app.po';

describe('my-app-directive App', () => {
  let page: MyAppDirectivePage;

  beforeEach(() => {
    page = new MyAppDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
