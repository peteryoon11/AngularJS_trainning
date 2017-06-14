import { MyApp7Page } from './app.po';

describe('my-app7 App', () => {
  let page: MyApp7Page;

  beforeEach(() => {
    page = new MyApp7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
