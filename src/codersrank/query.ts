export const query = async (endpoint: string): Promise<any> => {
  if (typeof fetch !== "undefined") {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  }
}
