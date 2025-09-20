import { PraiseForm } from "@/components/praise-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Tabs defaultValue="praise" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="praise" className="text-lg">
              ほめちゃる
            </TabsTrigger>
          </TabsList>
          <TabsContent value="praise">
            <PraiseForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
