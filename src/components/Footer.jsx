import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 flex flex-col items-center space-y-4">
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp />
      </a>
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} DominickWinningham.co. All rights reserved.
      </p>
    </footer>
  );
};
