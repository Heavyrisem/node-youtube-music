import got from 'got';
import { MusicVideo } from './models.js';
import { parseMusicItem } from './parsers.js';
import context from './context.js';

export const parseSearchMusicsBody = (body: {
  contents: any;
}): MusicVideo[] => {
  const {
    contents,
  } = body.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop().musicShelfRenderer;

  const results: MusicVideo[] = [];

  contents.forEach((content: any) => {
    try {
      const song = parseMusicItem(content);
      if (song) {
        results.push(song);
      }
    } catch (e) {
      console.error(e);
    }
  });
  return results;
};

export async function searchMusics(
  query: string,
  options?: {
    lang?: string;
    headers?: Record<string, string>;
  }
): Promise<MusicVideo[]> {
  const response = await got.post(
    'https://music.youtube.com/youtubei/v1/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30',
    {
      json: {
        ...context.body(options?.lang),
        params: 'EgWKAQIIAWoKEAoQCRADEAQQBQ%3D%3D',
        query,
      },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        origin: 'https://music.youtube.com',
        ...options?.headers,
      },
    }
  );
  try {
    return parseSearchMusicsBody(JSON.parse(response.body));
  } catch {
    return [];
  }
}
