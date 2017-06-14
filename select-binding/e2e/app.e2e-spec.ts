import { SelectBindingPage } from './app.po';

describe('select-binding App', () => {
  let page: SelectBindingPage;

  beforeEach(() => {
    page = new SelectBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
