describe('Google-Wikipedia', () => {
    beforeAll('Open browser',()=>{
        return browser.url('https://www.google.com/');
    });
    it('Test for Wikipedia',()=>{
        let inputSelector = $('//input[@class="gLFyf gsfi"]');
        let wikiLink = $('//h3[@class="LC20lb DKV0Md"]');
        inputSelector.setValue('wikipedia');
        inputSelector.keys('Enter');
        wikiLink.click();
        browser.pause(3000);
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(browser.getTitle()).toMatch('Wikipedia, la enciclopedia libre');
    });
});