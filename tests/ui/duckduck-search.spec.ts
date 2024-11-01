import { test, expect } from '@playwright/test';
import { StartPage } from '../../pages/StartPage'
import { ResultsPage } from '../../pages/ResultsPage'

test.describe('Search Functionality', () => {
    let startPage: StartPage
    let resultsPage: ResultsPage

    test.beforeEach(async ({ page }) => {
        startPage = new StartPage(page)
        resultsPage = new ResultsPage(page)
        await startPage.visit()
    })

    test('Verify search results contains keyword entered in searchbox', async ({ page }) => {
        let searchTerm: string = 'Android'
        await startPage.typeSearchCriteria(searchTerm)
        await startPage.search()
        expect(page.url()).toContain(searchTerm)

        let textContents = await resultsPage.getListOfResultsTitle()
        textContents.forEach((text) => {
            expect(text).toContain(searchTerm);
        });
    })

    test('Verify regions options are greater than 10', async ({ page }) => {
        await startPage.typeSearchCriteria('Windows')
        await startPage.search()
        await resultsPage.openRegionsModal()

        let regions = await resultsPage.getListOfRegions()
        expect(regions.length-1).toBeGreaterThan(10)
    })
})

