
export function getID() {
    const placeholderQS = document.location.search;
    const parameter = new URLSearchParams(placeholderQS);
    const id = parameter.get("id");
    return id;
};