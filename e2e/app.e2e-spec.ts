import { DeliverykwikPage } from './app.po';

describe('deliverykwik App', () => {
  let page: DeliverykwikPage;

  beforeEach(() => {
    page = new DeliverykwikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
