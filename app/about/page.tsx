import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "TypeORM",
  "MySQL",
  "C++",
  "Python",
  "HTML5 & CSS3",
  "Git & GitHub",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Shadcn UI",
  "REST APIs",
  "JWT Auth"
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A quick overview of my background, experience, and passions.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hello! I&apos;m Edgar Sayin Pamplona Jr., an Information Technology student and aspiring software developer based in San Fernando, Camarines Sur, Philippines. I&apos;m currently learning and building projects with backend technologies like NestJS, TypeScript, and MySQL, alongside modern frontend frameworks.
            </p>
            <p>
              Driven by a deep interest in human-computer interaction, data structures, and algorithm design, I focus on crafting clean digital experiences with simple navigation and uncluttered interfaces. Outside of coding and coursework, I regularly play outdoor volleyball, explore sandbox and strategy games, and prepare home-cooked meals for my family.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills &amp; Technologies</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}