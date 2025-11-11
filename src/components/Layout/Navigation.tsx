import { Home, Target, BarChart3, MessageSquare } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Início", to: "/" },
  { icon: MessageSquare, label: "Chat", to: "/chat" },
  { icon: Target, label: "Metas", to: "/metas" },
  { icon: BarChart3, label: "Relatórios", to: "/relatorios" },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:relative md:border-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around md:justify-center md:gap-8 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              activeClassName="text-primary bg-primary/10"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
