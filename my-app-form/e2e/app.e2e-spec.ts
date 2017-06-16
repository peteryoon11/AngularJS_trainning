import { MyAppFormPage } from './app.po';

describe('my-app-form App', () => {
  let page: MyAppFormPage;

  beforeEach(() => {
    page = new MyAppFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
