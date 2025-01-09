import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://wakatime.com/api/v1/users/Nozus/stats');
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch WakaTime stats' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
