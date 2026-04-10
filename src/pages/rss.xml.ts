import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog', entry => entry.id.startsWith('pt/'));
  const sorted = posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return rss({
    title: 'Rabelus Lab Blog',
    description: 'Pesquisa e Desenvolvimento AI-Born/Driven/First',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      description: post.data.subtitle || post.data.title,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.data.postSlug}`,
    })),
  });
}
