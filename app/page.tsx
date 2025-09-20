import { PraiseForm } from "@/components/praise-form"; //Ctrlキーを押しながらクリックでとぶ(テキストモード)
import { ChatInterface } from "@/components/chat-interface"; //こっちも同様にしてクリック(画像モード)
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Tabs defaultValue="praise" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="praise" className="text-lg">
              テキストモード
            </TabsTrigger>
            <TabsTrigger value="chat" className="text-lg">
              画像モード
            </TabsTrigger>
          </TabsList>

          <TabsContent value="praise">
            <PraiseForm />
          </TabsContent>

          <TabsContent value="chat">
            <ChatInterface />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
