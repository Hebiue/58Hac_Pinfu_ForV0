import { type NextRequest, NextResponse } from "next/server"
import { Chat } from "../gemini-api-v2/src/geminiChat"

export async function POST(request: NextRequest) {
  try {
    const { age, gender, relationship, other } = await request.json()

    const chat = new Chat()

    // Create prompt for praise generation
    const prompt = `あなたは人を褒めることに特化したAIアシスタントです。以下の情報を基に、心のこもった自然な褒め言葉を日本語で生成してください。

対象者の情報:
- 年齢: ${age || "不明"}
- 性別: ${gender || "不明"}
- 関係性: ${relationship || "不明"}
- その他の特徴: ${other || "特になし"}

以下の点を考慮して褒め言葉を作成してください:
1. 相手との関係性に適した敬語レベルを使用
2. 具体的で心に響く表現を使用
3. 相手の特徴を活かした個人的な褒め言葉
4. 自然で温かみのある文章
5. 200文字程度で簡潔に

褒め言葉のみを返答してください。`

    const praise = await chat.ask(prompt)

    return NextResponse.json({ praise })
  } catch (error) {
    console.error("Error generating praise:", error)
    return NextResponse.json({ error: "褒め言葉の生成中にエラーが発生しました" }, { status: 500 })
  }
}
