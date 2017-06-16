import { MyAppValidatePage } from './app.po';

describe('my-app-validate App', () => {
  let page: MyAppValidatePage;

  beforeEach(() => {
    page = new MyAppValidatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
