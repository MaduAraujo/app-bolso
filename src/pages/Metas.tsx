import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Target, TrendingUp, Calendar } from "lucide-react";

const Metas = () => {
  const goals = [
    {
      id: 1,
      title: "Economizar para Viagem",
      target: 5000,
      current: 3200,
      deadline: "Dezembro 2025",
      category: "Lazer",
    },
    {
      id: 2,
      title: "Fundo de Emergência",
      target: 10000,
      current: 4500,
      deadline: "Junho 2026",
      category: "Economia",
    },
    {
      id: 3,
      title: "Reduzir Gastos com Alimentação",
      target: 500,
      current: 320,
      deadline: "Este Mês",
      category: "Despesas",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 pt-8 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Target className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Minhas Metas</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Acompanhe seu progresso financeiro</p>
      </header>

      <div className="container mx-auto px-4 -mt-8">
        {/* Stats Card */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Progresso Geral</p>
              <h2 className="text-2xl font-bold text-foreground">52%</h2>
            </div>
            <div className="p-3 bg-success/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
          </div>
        </Card>

        {/* Goals List */}
        <div className="space-y-4 mb-6">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <Card key={goal.id} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{goal.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{goal.deadline}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                    {goal.category}
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-semibold text-foreground">
                      R$ {goal.current.toLocaleString('pt-BR')} / R$ {goal.target.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{progress.toFixed(0)}% concluído</span>
                  {progress >= 100 ? (
                    <span className="text-xs text-success font-medium">✓ Meta alcançada!</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Faltam R$ {(goal.target - goal.current).toLocaleString('pt-BR')}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Add Goal Button */}
        <Button className="w-full h-12 text-base font-medium" size="lg">
          <Plus className="h-5 w-5 mr-2" />
          Nova Meta
        </Button>

        {/* Tips Card */}
        <Card className="p-5 mt-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
            <span>💡</span> Dica
          </h3>
          <p className="text-sm text-muted-foreground">
            Você está no caminho certo! Continue economizando R$ 200 por mês para atingir sua meta de viagem no prazo.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Metas;
