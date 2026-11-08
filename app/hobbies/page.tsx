import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Trophy, Utensils, BookOpen } from "lucide-react";

const hobbiesList = [
  {
    title: "Outdoor Volleyball",
    icon: Trophy,
    description: "Participating in outdoor volleyball regularly as a primary physical sport and recreational hobby.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Playing sandbox, strategy, and action video games like Minecraft Java Edition.",
  },
  {
    title: "Home Cooking",
    icon: Utensils,
    description: "Preparing home-cooked meals and spending quality leisure time with family members.",
  },
  {
    title: "Manga & Reading",
    icon: BookOpen,
    description: "Exploring manga series, narrative structures, and expanding technical knowledge.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding and academics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbiesList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}