import { BluegrassClubPage } from './app.po';

describe('bluegrass-club App', function() {
  let page: BluegrassClubPage;

  beforeEach(() => {
    page = new BluegrassClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
