import { createClient } from '@supabase/supabase-js';
import { marked } from 'marked';

// place files you want to import through the `$lib` alias in this folder.
export function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}


export function calculateReadTime(content) {
    const WORDS_PER_MINUTE = 100;
    let totalWords = 0;
    

    // Split by whitespace and count non-empty strings
    const words = content.split(/\s+/).filter(word => word.length > 0);
    totalWords += words.length;
    
    // Calculate minutes
    const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
    
    // Return formatted string
    return minutes === 1 ? '1 min' : `${minutes} mins`;
}


/**
 * Fetch blogs from the Supabase database.
 * @param {Object} options - Options for fetching blogs.
 * @param {number} [options.limit] - Limit the number of blogs fetched.
 * @param {boolean} [options.groupByYear] - Whether to group blogs by year.
 * @returns {Promise<Array>} - A promise that resolves to the fetched blogs.
 */
export async function fetchBlogsFromDB({ limit = null, groupByYear = false, supabaseURL, supabaseKey } = {}) {
    try {
        const supabase = createClient(supabaseURL, supabaseKey);
        const query = supabase
            .from('blogs') // Replace with your table name
            .select('title, description, date, link') // Fetch only the required fields
            .order('date', { ascending: false }); // Sort by date in descending order

        if (limit) {
            query.limit(limit); // Apply limit if specified
        }

        const { data: blogs, error } = await query;

        if (error) {
            console.error('Error fetching blogs:', error);
            return [];
        }

        if (groupByYear) {
            // Group blogs by year
            const grouped = {};
            blogs.forEach(blog => {
                const year = blog.date.split('-')[0]; // Extract year from date
                if (!grouped[year]) {
                    grouped[year] = [];
                }
                grouped[year].push(blog);
            });

            return Object.keys(grouped)
                .sort((a, b) => b - a) // Sort years in descending order
                .map(year => ({
                    year,
                    posts: grouped[year]
                }));
        }

        return blogs;
    } catch (err) {
        console.error('Error:', err);
        return [];
    }
}

/**
 * Fetch blogs from the Supabase database.
 * @param {Object} options - Options for fetching blogs.
 * @param {number} [options.limit] - Limit the number of blogs fetched.
 * @param {boolean} [options.groupByYear] - Whether to group blogs by year.
 * @returns {Promise<Array>} - A promise that resolves to the fetched blogs.
 */
export async function fetchPapersFromDB({ limit = null, groupByYear = false, supabaseURL, supabaseKey } = {}) {
    try {
        const supabase = createClient(supabaseURL, supabaseKey);
        const query = supabase
            .from('paper_reviews') // Replace with your table name
            .select('title, description, date, link') // Fetch only the required fields
            .order('date', { ascending: false }); // Sort by date in descending order

        if (limit) {
            query.limit(limit); // Apply limit if specified
        }

        const { data: papers, error } = await query;

        if (error) {
            console.error('Error fetching papers:', error);
            return [];
        }

        if (groupByYear) {
            // Group blogs by year
            const grouped = {};
            papers.forEach(paper => {
                const year = paper.date.split('-')[0]; // Extract year from date
                if (!grouped[year]) {
                    grouped[year] = [];
                }
                grouped[year].push(paper);
            });

            return Object.keys(grouped)
                .sort((a, b) => b - a) // Sort years in descending order
                .map(year => ({
                    year,
                    posts: grouped[year]
                }));
        }

        return papers;
    } catch (err) {
        console.error('Error:', err);
        return [];
    }
}

/**
 * Fetch blog data, chapters, and markdown content from Supabase.
 * @param {string} link - The unique link identifier for the blog.
 * @returns {Promise<{ blogPost: object, chapters: Array, blogContent: string }>} - The fetched data.
 */
export async function fetchBlogData(link, supabaseKey, supabaseURL) {
    try {
        const supabase = createClient(supabaseURL, supabaseKey);
        // Fetch blog metadata
        const { data: blogData, error: blogError } = await supabase
            .from('blogs') // Replace with your table name
            .select('*')
            .eq('link', link)
            .single();

        if (blogError) {
            console.error('Error fetching blog metadata:', blogError);
            throw new Error('Failed to fetch blog metadata');
        }

        // Fetch chapters for the blog using blog_id
        const { data: chapterData, error: chapterError } = await supabase
            .from('chapters') // Replace with your table name
            .select('chapter_title, chapter_id')
            .eq('blog_id', blogData.id); // Use the blog's ID to fetch related chapters

        if (chapterError) {
            console.error('Error fetching chapters:', chapterError);
            throw new Error('Failed to fetch chapters');
        }

        // Map the chapters into the desired format
        const chapters = chapterData.map(chapter => ({
            chapterTitle: chapter.chapter_title,
            chapterId: chapter.chapter_id
        }));
        // Fetch blog content (Markdown file)
        const { data: fileData, error: fileError } = await supabase
            .storage
            .from('markdown-files') // Replace with your storage bucket name
            .download(`${link}.md`);

        if (fileError) {
            console.error('Error fetching markdown file:', fileError);
            throw new Error('Failed to fetch markdown content');
        }

        const blogContent = marked.parse(await fileData.text());

        return { blogPost: blogData, chapters, blogContent };
    } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error;
    }
}


/**
 * Fetch blog data, chapters, and markdown content from Supabase.
 * @param {string} link - The unique link identifier for the blog.
 * @returns {Promise<{ paperPost: object, chapters: Array, paperContent: string }>} - The fetched data.
 */
export async function fetchPaperData(link, supabaseKey, supabaseURL) {
    try {
        const supabase = createClient(supabaseURL, supabaseKey);
        // Fetch blog metadata
        const { data: paperData, error: paperError } = await supabase
            .from('paper_reviews') // Replace with your table name
            .select('*')
            .eq('link', link)
            .single();

        if (paperError) {
            console.error('Error fetching paper metadata:', paperError);
            throw new Error('Failed to fetch paper metadata');
        }

        // Fetch chapters for the blog using blog_id
        const { data: chapterData, error: chapterError } = await supabase
            .from('paper_chapters') // Replace with your table name
            .select('chapter_title, chapter_id')
            .eq('blog_id', paperData.id); // Use the blog's ID to fetch related chapters

        if (chapterError) {
            console.error('Error fetching chapters:', chapterError);
            throw new Error('Failed to fetch chapters');
        }

        // Map the chapters into the desired format
        const chapters = chapterData.map(chapter => ({
            chapterTitle: chapter.chapter_title,
            chapterId: chapter.chapter_id
        }));
        // Fetch blog content (Markdown file)
        const { data: fileData, error: fileError } = await supabase
            .storage
            .from('markdown-files') // Replace with your storage bucket name
            .download(`${link}.md`);

        if (fileError) {
            console.error('Error fetching markdown file:', fileError);
            throw new Error('Failed to fetch markdown content');
        }

        const paperContent = marked.parse(await fileData.text());

        return { paperPost: paperData, chapters, paperContent };
    } catch (error) {
        console.error('Error fetching paper data:', error);
        throw error;
    }
}
