export async function httpGet<T> (url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await (response.json() as Promise <{data: T}>)
    return data.data
}
