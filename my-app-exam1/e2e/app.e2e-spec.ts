import { MyAppExam1Page } from './app.po';

describe('my-app-exam1 App', () => {
  let page: MyAppExam1Page;

  beforeEach(() => {
    page = new MyAppExam1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
