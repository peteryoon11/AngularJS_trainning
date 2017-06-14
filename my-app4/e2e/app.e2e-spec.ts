import { MyApp4Page } from './app.po';

describe('my-app4 App', () => {
  let page: MyApp4Page;

  beforeEach(() => {
    page = new MyApp4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
