HTML_REPORT_PATH: "./"

import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Rodrigo Magalhães')
        .click('#submit-button')
        .takeScreenshot('teste1/teste.png')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Rodrigo Magalhães!');
});