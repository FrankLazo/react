import { getImage } from "../../base/11-async-await";

describe('11-async-await', () => {
    test('should return url', async () => {
        const url = await getImage();

        expect(url.includes('https://')).toBe(true);
    });
});
