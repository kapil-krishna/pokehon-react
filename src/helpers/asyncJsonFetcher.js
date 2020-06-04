export async function asyncJsonFetch(url) {
    const baseUrl = "http://localhost:8080/pokemon/";
    const response = await fetch(baseUrl + url);
    return await response.json();
}
