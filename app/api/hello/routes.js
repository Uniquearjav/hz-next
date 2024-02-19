export async function GET() {
    return NextResponse.json({ characters: characters.data })
  }