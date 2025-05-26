import { ENV_SUPABASE_KEY, ENV_SUPABASE_URL } from "$env/static/private";
import { fetchPaperData } from "$lib";

export const load = async ({ params }) => {
    let paperPost = null;
    let chapters = [];
    let paperContent = '';
    try {
        let loading = true;
        // Fetch blog data using the provided blog link and Supabase credentials
        let { paperPost, chapters, paperContent } = await fetchPaperData(
            params.paperLink,
            ENV_SUPABASE_KEY,
            ENV_SUPABASE_URL
        );

        // Return the fetched data to the +page.svelte file
        return {
            paperPost,
            chapters,
            paperContent,
        };
    } catch (error) {
        console.error("Error loading data:", error);
    } 
};