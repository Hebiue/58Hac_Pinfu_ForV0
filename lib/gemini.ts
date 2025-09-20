import {GoogleGenerativeAI} from "@google/generative-ai";
import {getEnvConfig} from "@/utils/envConfig";

export interface Target {
    age: string;
    gender: string;
    relationship: string;
    motivation: string;
    hobby: string;
    distance: string;
    character: string;
    worksornot: string;
    position: string;
    other: string;
}

const genAI = new GoogleGenerativeAI(getEnvConfig().geminiApiKey);
const model = genAI.getGenerativeModel({model: getEnvConfig().model});

export async function ask(formData: Target, files: File[]): Promise<string> {
    const imageParts = await Promise.all(
        files.map(async (file) => {
            const buffer = await file.arrayBuffer()
            const base64 = Buffer.from(buffer).toString("base64")
            return {
                inlineData: {
                    mimeType: file.type,
                    data: base64,
                },
            }
        })
    )

    const prompt = `あなたは人を褒めることに特化したAIアシスタントです。以下の情報と画像の両方をもとに、心のこもった自然な褒め言葉を日本語で生成してください。
    
        - 年齢: ${formData.age || "不明"}
        - 性別: ${formData.gender || "不明"}
        - 関係性: ${formData.relationship || "不明"}
        - 褒めたい理由: ${formData.motivation || "不明"}
        - 趣味: ${formData.hobby || "不明"}
        - その人との距離感: ${formData.distance || "不明"}
        - 性格: ${formData.character || "不明"}
        - 得意なこと、または苦手なこと: ${formData.worksornot || "不明"}
        - 職業/学年: ${formData.position || "不明"}
        - その他の特徴: ${formData.other || "特になし"}

        以下の点を考慮して褒め言葉を作成してください:
        1. 具体的で心に響く表現を使用
        2. 相手との関係性に適した敬語レベルを使用
        3. 相手の特徴を活かし、外見や雰囲気に基づいた具体的な褒め言葉
        4. 300文字程度で表現
        
        褒め言葉のみを返答し、架空の出来事に関して言及しないでください。
        すべての情報は与えられない可能性がありますが、それについて言及しないでください。`

    const result = await model.generateContent([prompt, ...imageParts]);
    return result.response.text();
}
