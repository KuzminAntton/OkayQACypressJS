import mainPage from '../../../pages/MainPage.cy';
import baseTest from '../baseTest.cy';
const pathToUserData = '../testData/users.json';
const qualityIsPricelessText = 'Quality is priceless. Time is priceless.'



describe('Tests for DEMO', () => {

    beforeEach(() => {
        cy.visit('https://okay.qa/');
    });

    it('Logo is visible @logo', () => {
        mainPage.isHomePageVisible();
    });

    it('Verify main text', () => {
        mainPage.verifyQualityIsPricelessText(qualityIsPricelessText)
    });

    it('Fill form for email', () => {
        mainPage.clickContactUsButton();
        cy.fixture('users').then((userData) => {
            mainPage.fillContactUsForm(userData.user_default);
            mainPage.clickContactUsAgreementCheckBox();
        });
    });

    it('Click on tabs', () => {
        mainPage.clickLongTermTab();
        mainPage.verifyLongTermSentenceIsVisible()
        mainPage.clickShortTermTab();
        mainPage.verifyQuickChoiceSentenceIsVisible()
    });
});
