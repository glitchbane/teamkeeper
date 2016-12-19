import { TeamkeeperPage } from './app.po';

describe('teamkeeper App', function() {
  let page: TeamkeeperPage;

  beforeEach(() => {
    page = new TeamkeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
