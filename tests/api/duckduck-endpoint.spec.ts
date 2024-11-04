import { test, expect } from '@playwright/test';

test('Verify Icon URL data is present on get endpoint', async ({ request }) => {
    const endpointUrl = 'https://api.duckduckgo.com/?q=Android&format=json';
    const response =await request.get(endpointUrl);

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    printURLs(data)
});

function printURLs(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(item => printURLs(item));
    } else if (typeof obj === 'object' && obj !== null) {
        if ('URL' in obj && obj.URL) {
            console.log(obj.URL);
        }
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                printURLs(obj[key]);
            }
        }
    }
}


