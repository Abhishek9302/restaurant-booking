export const fetcher = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};