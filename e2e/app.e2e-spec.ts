import { A2KoulutusPage } from './app.po';

describe('a2-koulutus App', function() {
  let page: A2KoulutusPage;

  beforeEach(() => {
    page = new A2KoulutusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
