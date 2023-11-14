export function errorMessage(message = "Something went wrong") {
    console.log(message);
    return `<div class="error">${message}</div>`;
}

