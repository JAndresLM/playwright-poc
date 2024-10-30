import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class StartPage extends AbstractPage{
  private readonly searchBox: Locator
  private readonly searchButton: Locator

  constructor(page: Page) {
    super(page)
    this.searchBox = page.locator('input[name="q"]')
    this.searchButton = page.locator('button[aria-label="Search"]')
  }

  async visit() {
    await this.page.goto('https://start.duckduckgo.com/')
  }

  async typeSearchCriteria(text: string) {
    await this.searchBox.fill(text)
  }

  async search() {
    await this.searchButton.click()
  }
}