import { ENV_SUPABASE_KEY, ENV_SUPABASE_URL } from "$env/static/private";
import { fetchBlogData } from "$lib";

export const load = async ({ params }) => {
    let blogPost = null;
    let chapters = [];
    let blogContent = '';
    try {
        let loading = true;
        // Fetch blog data using the provided blog link and Supabase credentials
        let { blogPost, chapters, blogContent } = await fetchBlogData(
            params.blogLink,
            ENV_SUPABASE_KEY,
            ENV_SUPABASE_URL
        );

        // Return the fetched data to the +page.svelte file
        return {
            blogPost,
            chapters,
            blogContent,
        };
    } catch (error) {
        console.error("Error loading data:", error);
    } 
};