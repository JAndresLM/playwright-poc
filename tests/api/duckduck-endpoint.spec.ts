import { test, expect } from '@playwright/test';

test('Verify Icon URL data is present on get endpoint', async ({ request }) => {
    const endpointUrl = 'https://api.duckduckgo.com/?q=Android&format=json';
    const response =await request.get(endpointUrl);

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    let topics = data.RelatedTopics
    topics.forEach((topic) => {
        const iconURL = topic.Icon?.URL;
        if (iconURL) {
            console.log(`Icon URL: ${iconURL}`);
        } else {
            if ('Icon' in topic.Topics && 'URL' in topic.Topics.Icon){
                console.log(`New Icon URL: ${topic.Topics.Icon.URL}`);
            }
        }
    });
});


