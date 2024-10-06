export async function fetchAvailableMeals() {
    const endpoint = "http://localhost:3000/meals";
    const res = await fetch(endpoint);
    const resJson = await res.json();

    if(!res.ok) {
        throw new Error(res.message || 'Data fetching error');
    }

    return resJson;
}