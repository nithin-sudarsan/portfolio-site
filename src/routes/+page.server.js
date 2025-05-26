import { ENV_SUPABASE_KEY, ENV_SUPABASE_URL } from "$env/static/private";
import { fetchBlogsFromDB, fetchPapersFromDB} from "$lib";

export async function load() {
    try {
        // Call fetchBlogsFromDB and pass the Supabase credentials
        const latestBlogs = await fetchBlogsFromDB({
            limit: 5,
            supabaseURL: ENV_SUPABASE_URL,
            supabaseKey: ENV_SUPABASE_KEY
        });

        const latestPapers = await fetchPapersFromDB({
            limit: 5,
            supabaseURL: ENV_SUPABASE_URL,
            supabaseKey: ENV_SUPABASE_KEY
        });

        return {
            latestBlogs,latestPapers,
            loading: false
        };
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {
            latestBlogs: [], latestPapers: [],
            loading: false
        };
    }
}