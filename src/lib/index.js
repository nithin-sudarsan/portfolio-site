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
