const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${API_URL}${url}`, options);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};
