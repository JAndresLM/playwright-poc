import { test, expect } from '@playwright/test';

test('Verify Icon URL data is present on get endpoint', async ({ request }) => {
    const endpointUrl = 'https://api.duckduckgo.com/?q=simpsons&format=json';
    const response =await request.get(endpointUrl);

    expect(response.ok()).toBeTruthy();
    const data = await response.json();

    const iconURL = data.Icon?.URL;
    if (iconURL) {
        console.log(`Icon URL: ${iconURL}`);
    } else {
        console.log('Icon URL is null or does not exist.');
    }
});
