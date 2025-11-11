import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 pt-8 pb-12">
        <h1 className="text-2xl font-bold mb-2">Olá, Usuário!</h1>
        <p className="text-primary-foreground/80 text-sm">Aqui está um resumo das suas finanças</p>
      </header>

      <div className="container mx-auto px-4 -mt-8">
        {/* Balance Card */}
        <Card className="p-6 mb-6 shadow-lg">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Saldo Atual</p>
              <h2 className="text-3xl font-bold text-foreground">R$ 3.450,00</h2>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-success text-sm">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">+12% este mês</span>
          </div>
        </Card>

        {/* Income/Expense Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-success/10 rounded-lg">
                <ArrowDownRight className="h-4 w-4 text-success" />
              </div>
              <span className="text-xs text-muted-foreground">Receitas</span>
            </div>
            <p className="text-xl font-bold text-foreground">R$ 5.200,00</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <ArrowUpRight className="h-4 w-4 text-destructive" />
              </div>
              <span className="text-xs text-muted-foreground">Despesas</span>
            </div>
            <p className="text-xl font-bold text-foreground">R$ 1.750,00</p>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Gastos por Categoria</h3>
          <div className="space-y-3">
            {[
              { name: "Alimentação", amount: 680, percent: 39, color: "bg-chart-1" },
              { name: "Transporte", amount: 450, percent: 26, color: "bg-chart-2" },
              { name: "Lazer", amount: 320, percent: 18, color: "bg-chart-3" },
              { name: "Outros", amount: 300, percent: 17, color: "bg-chart-4" },
            ].map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{category.name}</span>
                  <span className="text-muted-foreground">R$ {category.amount.toLocaleString('pt-BR')}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${category.color} rounded-full transition-all`}
                    style={{ width: `${category.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h3 className="font-semibold mb-2 text-foreground">💡 Dica do Assistente</h3>
          <p className="text-sm text-muted-foreground">
            Seus gastos com alimentação aumentaram 15% este mês. Que tal definir uma meta para economizar?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
