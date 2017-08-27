import { PixabeyPage } from './app.po';

describe('pixabey App', () => {
  let page: PixabeyPage;

  beforeEach(() => {
    page = new PixabeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
