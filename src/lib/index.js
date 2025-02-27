// place files you want to import through the `$lib` alias in this folder.
export function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}