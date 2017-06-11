import { ComponentsInComponentsPage } from './app.po';

describe('components-in-components App', () => {
  let page: ComponentsInComponentsPage;

  beforeEach(() => {
    page = new ComponentsInComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
