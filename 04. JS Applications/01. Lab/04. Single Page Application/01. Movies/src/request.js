export async function request(url, options) {

    try {
        const result = await fetch(url, options);
        if (!result.ok) {
            const error = await result.json();
            throw new Error(error.message);
        }

        const data = await result.json();
        return data;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}