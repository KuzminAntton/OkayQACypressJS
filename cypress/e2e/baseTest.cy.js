class BaseTest {
    constructor() {
        this.baseURL = Cypress.config('baseUrl');
    }

    setup() {
        // Cypress automatically launches browser and creates context
        // No need to explicitly launch browser or create context in Cypress
    }

    teardown() {
        // Cypress automatically handles cleanup
        // No need to explicitly close context or browser in Cypress
    }
}

module.exports = BaseTest;
