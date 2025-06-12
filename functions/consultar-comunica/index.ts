// functions/consultar-comunica/index.ts

export async function handler(req: Request): Promise<Response> {
  return new Response("✅ Função consultar-comunica executada com sucesso!", {
    headers: { "Content-Type": "text/plain" },
    status: 200,
  });
}
