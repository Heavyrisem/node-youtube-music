import { test, expect } from 'vitest';
import { searchMusics } from '../searchMusics.js';

test('Search human readable queries should return a list of results', async () => {
  const queries = [
    'never gonna give you up',
    'liem if only',
    'madonna',
    'david guetta',
  ];

  const results = await Promise.all(
    queries.map((query) =>
      searchMusics(query, {
        headers: {
          Authorization: `SAPISIDHASH 1701271219_2ef6dd80283a34859dedcfde2d91209fab65cfa6`,
          Cookie: `VISITOR_INFO1_LIVE=r8HgQR4PmEc; VISITOR_PRIVACY_METADATA=CgJLUhICGgA%3D; HSID=AFfdaqWsyKpcfdlPk; SSID=A_Qr17VmNLi_vkOo1; APISID=gOB0gwj9WUK7CX8n/A4gEilEVbID9c_3yq; SAPISID=T8MmHIjROm-AHKpy/Ao1HQP-ArCzFWXAy6; __Secure-1PAPISID=T8MmHIjROm-AHKpy/Ao1HQP-ArCzFWXAy6; __Secure-3PAPISID=T8MmHIjROm-AHKpy/Ao1HQP-ArCzFWXAy6; NID=511=VkJ3W5PNcIxyZjcrVw6uW0DJbWwi8to8jDkAnixoGRhKufRU8ofSFYzvFM07bL48y-1Bgpa-Url9hbz7hnspqkYUrhvvQJFlnDQF8FvLVNfHi4KNt3fJ-6vlVbfvYK4lxjSuYbwTHbwok5fegFj9KMKZmC0bXRLemvIAt1U4Ke9npx9jPf4IH541wYRYw_bp; _gcl_au=1.1.1581192440.1698841671; PREF=f6=40000080&tz=Asia.Seoul&f7=100&autoplay=true&volume=19&f4=4000000; LOGIN_INFO=AFmmF2swRQIhANQIH6TSeIny1nw4WXZVotn4Ept3P8ZVJkopMH1MiS2qAiB1-CTMPYPAbU-Xyp99pJ5aYDgozwgHYtv9x6XNp-8b7g:QUQ3MjNmeTNJbTFHWkNEbnVTNWJpbXE1a1lLbHAxcUp4RjZaOWlFTHY0SVJ5cUJVNXBpV0MxQUdNNjlzSS01enV5YzVlSEt4Mi01YXpTZ29fdGx0elFya3FuVEtWcVd5NjZ4b2xuUUtIeXI0QWczVEdXMklVQjZNRnRLTGdVWjhnd2RodUpJU1RKZ0YxMEw1elZrR191N1lZbXJzYlIyakt3; SID=dQjjhAQzDD4FKEVUjiVSf2ulXiK-HAH3-0_eMUPURrVqwgIiedpo-6VdvTZS9cXZSk_JUQ.; __Secure-1PSID=dQjjhAQzDD4FKEVUjiVSf2ulXiK-HAH3-0_eMUPURrVqwgIiMcQLxu0Gcah0XYxkoHzVYg.; __Secure-3PSID=dQjjhAQzDD4FKEVUjiVSf2ulXiK-HAH3-0_eMUPURrVqwgIiUp3GZzwYNDT0J72Bqm6mnQ.; YSC=KExx8Q4uFtM; __Secure-1PSIDTS=sidts-CjEBNiGH7vnBmyBWrf3eawq3g9Dtw3NMkEjqgfjww8zhHmaaBeZ8XpjXnONDJFPMiE4XEAA; __Secure-3PSIDTS=sidts-CjEBNiGH7vnBmyBWrf3eawq3g9Dtw3NMkEjqgfjww8zhHmaaBeZ8XpjXnONDJFPMiE4XEAA; wide=1; SIDCC=ACA-OxN7oqNZi3BRZk7AcD1lO60SjBQm2hLVJyj0yIHdElZqOPysyPZlH4yhvz-OkHSiJSvmQNI; __Secure-1PSIDCC=ACA-OxPYB1IE9yDX8Exg18OZgpMWzPy871pDdB1YLbEP39lMqGlKCBfndDgaPK1-DRciJulhGqI; __Secure-3PSIDCC=ACA-OxOWYjeqp60VjYpOIf0zuMA7wvirDkZLrZzg1VMB3sUw1r3XUKIxf7u8vV3cbXjzz9dEHEN-`,
        },
      })
    )
  );
  results.forEach((result) => {
    expect(result.length).toBeGreaterThan(1);
  });
});
