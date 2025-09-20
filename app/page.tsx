import { PraiseForm } from "@/components/praise-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
          <PraiseForm />
      </div>
    </main>
  )
}
