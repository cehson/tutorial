import { ReceptiAplicationPage } from './app.po';

describe('recepti-aplication App', function() {
  let page: ReceptiAplicationPage;

  beforeEach(() => {
    page = new ReceptiAplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
