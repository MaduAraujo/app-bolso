import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { ProtectedRoute } from "@/components/Auth/ProtectedRoute";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Navigation />
      </div>
    </ProtectedRoute>
  );
};
