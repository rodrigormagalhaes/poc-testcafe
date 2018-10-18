HTML_REPORT_PATH: "./"

import { Selector } from 'testcafe';

fixture `Busca nas lojas americanas`
    .page `https://www.americanas.com.br`;

test('Busca iphone', async t => {
    await t
        .typeText('#h_search-input', 'iphone')
        .click('#h_search-btn')
        .takeScreenshot('lojas_americanas/busca.png')

        .click('#sidebar-middle > div:nth-child(2) > div > div > div > div > section:nth-child(2) > div > ul > li:nth-child(1) > a > svg')
        .takeScreenshot('lojas_americanas/filtro.png')
        
        .expect(Selector('#content-middle > div:nth-child(2) > div > div > div > a.btn.btn-xs.btn-input.btn-thin.btn-dismissible.btn-list-item > span').innerText).eql('preto');
});

