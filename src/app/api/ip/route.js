const porta = "http://ip-api.com/json";

export async function GET(request) {
  try {
    const ipDigitado = request.nextUrl.searchParams.get("ip");
    const ipReal = request.headers.get("x-forwarded-for")?.split(",")[0];
    const ipParaBuscar = ipDigitado || ipReal || ""
    const url = ipParaBuscar ? `${porta}/${ipDigitado}`: porta
    const resposta = await fetch(url);
    const dados = await resposta.json();
      return new Response(JSON.stringify(dados))
  } catch {
    return new Response(null, { status: 500 });
  }
}
