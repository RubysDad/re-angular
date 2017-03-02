import { ReFePage } from './app.po';

describe('re-fe App', () => {
  let page: ReFePage;

  beforeEach(() => {
    page = new ReFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
