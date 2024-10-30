import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class ResultsPage extends AbstractPage {
    private readonly regionsDropdown: Locator

    constructor(page: Page) {
        super(page)
        this.regionsDropdown = page.locator('[data-testid="region-filter-label"]')
    }

    async openRegionsModal(){
        await this.regionsDropdown.click()
    }

    async getListOfRegions(): Promise<Locator[]> {
        let regionsSelector = 'div[data-testid="dropdown-options"] div.IrVYRCUvYQ98h_9Xp7aN div.M0ujmOhCHtsN1oLaSQki'
        await this.page.waitForSelector(regionsSelector)
        return await this.page.locator(regionsSelector).all()
    }

    async getListOfResultsTitle(): Promise<string[]> {
        let resultTitleSelector = '[data-testid="result-title-a"] span'
        await this.page.waitForSelector(resultTitleSelector)
        return await this.page.locator(resultTitleSelector).allInnerTexts()
    }
}