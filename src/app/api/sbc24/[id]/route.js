import data from '../sbc24.json';

export async function GET(req, { params }) {
  const { id } = params;
  const item = data.find((entry) => entry.id === parseInt(id));

  if (item) {
    return new Response(JSON.stringify(item), {
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response('Not Found', { status: 404 });
  }
}