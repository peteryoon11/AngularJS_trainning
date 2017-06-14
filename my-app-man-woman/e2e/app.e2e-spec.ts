import { MyAppManWomanPage } from './app.po';

describe('my-app-man-woman App', () => {
  let page: MyAppManWomanPage;

  beforeEach(() => {
    page = new MyAppManWomanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
