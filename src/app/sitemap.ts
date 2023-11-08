import { createClient } from '@/prismicio';
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const client = createClient();
    const blogs = await client.getAllByType("blog_post");
    const blogObjects = blogs.map((blog) => {
        const publishDate = blog.data.publish_date ? new Date(blog.data.publish_date) : new Date();
    
        return {
            url: `https://3lawsrobotics.com/blogs/${blog.data.route_name}`,
            lastModified: publishDate,
            changeFrequency: 'monthly' as "monthly",
            priority: 0.8,
        };
    });
    
    return [
        {
            url: 'https://3lawsrobotics.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://3lawsrobotics.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://3lawsrobotics.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.4,
        },
        {
            url: 'https://3lawsrobotics.com/product',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.1,
        },
        {
            url: 'https://3lawsrobotics.com/case-studies',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://3lawsrobotics.com/privacy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        {
            url: 'https://3lawsrobotics.com/security',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        ...blogObjects
    ]
}