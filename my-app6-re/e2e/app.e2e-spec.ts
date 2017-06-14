import { MyApp6RePage } from './app.po';

describe('my-app6-re App', () => {
  let page: MyApp6RePage;

  beforeEach(() => {
    page = new MyApp6RePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
