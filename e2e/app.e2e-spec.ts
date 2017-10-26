import { AngularPourFirePage } from './app.po';

describe('angular-pour-fire App', () => {
  let page: AngularPourFirePage;

  beforeEach(() => {
    page = new AngularPourFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
