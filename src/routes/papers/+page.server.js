import { ENV_SUPABASE_KEY, ENV_SUPABASE_URL } from "$env/static/private";
import { fetchPapersFromDB } from "$lib";

export async function load() {
    try {
        // Call fetchPapersFromDB and pass the Supabase credentials
        const papersByYear = await fetchPapersFromDB({
            groupByYear: true,
            supabaseURL: ENV_SUPABASE_URL,
            supabaseKey: ENV_SUPABASE_KEY
        });

        return {
            papersByYear,
            loading: false
        };
    } catch (error) {
        console.error("Error fetching papers:", error);
        return {
            papersByYear: [],
            loading: false
        };
    }
}