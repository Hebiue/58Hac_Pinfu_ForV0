import { type NextRequest, NextResponse } from "next/server"
import { Chat } from "../gemini-api-v2/src/geminiChat"

const globalChat = new Chat()

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const lastMessage = messages[messages.length - 1]

    const response = await globalChat.ask(lastMessage.content)

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "チャット中にエラーが発生しました" }, { status: 500 })
  }
}
