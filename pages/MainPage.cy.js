require('cypress-xpath');
class MainPage {
    constructor() {
        this.homePageLogo = '[data-elem-id="1629928459671"]';
        this.emailNameFieldId = 'input_1495810359387';
        this.emailFieldID = 'input_1495810354468';
        this.companyFieldID = 'input_1630046654981';
        this.projectFieldID = 'input_1630046758679';
        this.shortTermTab = '#tab1_606316498';
        this.longTermTab = '#tab2_606316498';

        this.shortTimeAutomationPrice = '//*[contains(text(),"from $28*")]';
        this.longTimeAutomationPrice = '//*[contains(text(),"from $26*")]';

        this.qualityIsPricelessText = './/div[@field="tn_text_1629928459533"]//em'

        this.contactUsButton = '//*[contains(text(),"сontact us")]'

        this.contactUsFormId = 'form350263668'

        this.quickChoiceSentence = './/*[contains(text(), "Quick choice - quick win")]'
        this.longTermSentence = './/*[contains(text(), "Careful selection - partnership collaboration")]'
            // **Full cycle Quality Assurance. From a set-up to automation and continuous integration & delivery** to have text
            // **Full cycle Quality Assurance. From a set-up to automation and continuous integration & delivery**
    }

    isHomePageVisible() {
        cy.get(this.homePageLogo).should('be.visible');
    }

    clickContactUsButton() {
        cy.xpath(this.contactUsButton).click()
    }

    fillContactUsForm(user) {
        this.fillEmailForm(user, this.contactUsFormId)
    }

    fillEmailForm(user, formID) {
        cy.xpath(`.//*[@id="${formID}"]//*[@id="${this.emailNameFieldId}"]`).type(user.name);
        cy.xpath(`.//*[@id="${formID}"]//*[@id="${this.emailFieldID}"]`).type(user.email);
        cy.xpath(`.//*[@id="${formID}"]//*[@id="${this.companyFieldID}"]`).type(user.company);
        cy.xpath(`.//*[@id="${formID}"]//*[@id="${this.projectFieldID}"]`).type(user.project);
    }

    clickContactUsAgreementCheckBox() {
        this.clickAgreementCheckbox(this.contactUsFormId)
    }

    clickAgreementCheckbox(formID) {
        cy.xpath(`.//*[@id="${formID}"]//*[@class="t-checkbox__indicator"]`).click();
    }

    clickShortTermTab() {
        cy.get(this.shortTermTab).click();
    }

    clickLongTermTab() {
        cy.get(this.longTermTab).click();
    }

    verifyQuickChoiceSentenceIsVisible() {
        cy.xpath(this.quickChoiceSentence).should('be.visible')
    }

    verifyLongTermSentenceIsVisible() {
        cy.xpath(this.longTermSentence).should('be.visible')
    }

    verifyQualityIsPricelessText(text) {
        cy.xpath(this.qualityIsPricelessText).should('contain.text', text)
    }

}

export default new MainPage();
