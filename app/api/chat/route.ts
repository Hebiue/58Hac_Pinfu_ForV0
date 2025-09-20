import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    // シンプルなレスポンス生成（実際のAI APIに置き換え可能）
    const lastMessage = messages[messages.length - 1]

    // 基本的な応答パターン
    let response = ""

    if (lastMessage.content.includes("こんにちは") || lastMessage.content.includes("はじめまして")) {
      response = "こんにちは！お元気ですか？何かお手伝いできることがあれば、お気軽にお聞きください。"
    } else if (lastMessage.content.includes("ありがとう")) {
      response = "どういたしまして！他にも何かご質問があれば、いつでもお聞きください。"
    } else if (lastMessage.content.includes("天気")) {
      response =
        "申し訳ございませんが、リアルタイムの天気情報は提供できません。天気予報アプリや気象庁のウェブサイトをご確認ください。"
    } else if (lastMessage.content.includes("時間")) {
      const now = new Date()
      response = `現在の時刻は ${now.toLocaleTimeString("ja-JP")} です。`
    } else if (lastMessage.content.includes("名前")) {
      response = "私はAIアシスタントです。様々な質問にお答えしたり、お手伝いをすることができます。"
    } else {
      response = `「${lastMessage.content}」についてですね。興味深いご質問ありがとうございます。もう少し詳しく教えていただけますか？`
    }

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
