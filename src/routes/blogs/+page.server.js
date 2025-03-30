import { ENV_SUPABASE_KEY, ENV_SUPABASE_URL } from "$env/static/private";
import { fetchBlogsFromDB } from "$lib";

export async function load() {
    try {
        // Call fetchBlogsFromDB and pass the Supabase credentials
        const blogsByYear = await fetchBlogsFromDB({
            groupByYear: true,
            supabaseURL: ENV_SUPABASE_URL,
            supabaseKey: ENV_SUPABASE_KEY
        });

        return {
            blogsByYear,
            loading: false
        };
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {
            blogsByYear: [],
            loading: false
        };
    }
}