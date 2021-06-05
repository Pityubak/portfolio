export const query  = async (endpoint: string):Promise<any> => {
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return await res.json()
}

