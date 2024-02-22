export async function GET() {
  const data = { name: 'name_1' };
  return new Response(JSON.stringify(data));
}
