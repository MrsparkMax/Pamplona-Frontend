import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
  import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] max-w-2xl mx-auto space-y-6">
      <div className="space-y-3">
        <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
          BSIT Student &amp; Developer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I&apos;m Edgar Sayin Pamplona Jr.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Based in San Fernando, Camarines Sur, Philippines. I build clean, uncluttered web applications and reliable backend services.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/about" className={buttonVariants({ size: "lg" })}>
          About Me <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}