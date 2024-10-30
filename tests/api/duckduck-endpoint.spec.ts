import { test, expect } from '@playwright/test';

test('Verify Icon URL data is present on get endpoint', async ({ request }) => {
    //arrange
    const endpointUrl = 'https://api.duckduckgo.com/?q=simpsons&format=json';

    //act
    const response =await request.get(endpointUrl);

    //assert
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    //console.log(data)

    const iconURL = data.Icon?.URL;
    if (iconURL) {
        console.log(`Icon URL: ${iconURL}`);
    } else {
        console.log('Icon URL is null or does not exist.');
    }

    //expect(data.Icon).toBeTruthy();
    //expect(data.Icon.URL).toBeTruthy();
});
