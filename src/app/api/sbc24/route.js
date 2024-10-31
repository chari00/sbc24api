import data from '../sbc24/sbc24.json';

export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}