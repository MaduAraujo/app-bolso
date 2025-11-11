import { Card } from "@/components/ui/card";
import { BarChart3, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Relatorios = () => {
  const monthlyData = [
    { month: "Jan", income: 5200, expenses: 3800 },
    { month: "Fev", income: 5200, expenses: 4100 },
    { month: "Mar", income: 5500, expenses: 3900 },
    { month: "Abr", income: 5200, expenses: 4300 },
    { month: "Mai", income: 5200, expenses: 3700 },
    { month: "Jun", income: 5200, expenses: 1750 },
  ];

  const maxValue = Math.max(...monthlyData.map(d => Math.max(d.income, d.expenses)));

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 pt-8 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Relatórios</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Visualize suas finanças de forma clara</p>
      </header>

      <div className="container mx-auto px-4 -mt-8">
        {/* Period Selector */}
        <Card className="p-4 mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Últimos 6 meses</span>
            </div>
            <Button variant="ghost" size="sm">
              Alterar
            </Button>
          </div>
        </Card>

        {/* Chart */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold mb-6 text-foreground">Receitas vs Despesas</h3>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="space-y-2">
                <span className="text-sm font-medium text-foreground">{data.month}</span>
                <div className="flex gap-2">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-success">Receitas</span>
                      <span className="font-medium text-foreground">R$ {data.income.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-success rounded-lg transition-all"
                        style={{ width: `${(data.income / maxValue) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-destructive">Despesas</span>
                      <span className="font-medium text-foreground">R$ {data.expenses.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-destructive rounded-lg transition-all"
                        style={{ width: `${(data.expenses / maxValue) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Média Mensal</p>
            <p className="text-lg font-bold text-foreground">R$ 5.250</p>
            <p className="text-xs text-success">+5% vs período anterior</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Economia Total</p>
            <p className="text-lg font-bold text-foreground">R$ 17.550</p>
            <p className="text-xs text-success">+22% este semestre</p>
          </Card>
        </div>

        {/* Categories Breakdown */}
        <Card className="p-5 mb-6">
          <h3 className="font-semibold mb-4 text-foreground">Gastos por Categoria</h3>
          <div className="space-y-3">
            {[
              { name: "Alimentação", percent: 39, value: 680, color: "bg-chart-1" },
              { name: "Transporte", percent: 26, value: 450, color: "bg-chart-2" },
              { name: "Lazer", percent: 18, value: 320, color: "bg-chart-3" },
              { name: "Saúde", percent: 10, value: 175, color: "bg-chart-4" },
              { name: "Outros", percent: 7, value: 125, color: "bg-chart-5" },
            ].map((cat) => (
              <div key={cat.name} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{cat.name}</span>
                    <span className="text-sm text-muted-foreground">R$ {cat.value}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${cat.color} rounded-full transition-all`}
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground w-10 text-right">{cat.percent}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Export Button */}
        <Button variant="outline" className="w-full h-12 text-base font-medium">
          <Download className="h-5 w-5 mr-2" />
          Exportar Relatório
        </Button>
      </div>
    </div>
  );
};

export default Relatorios;
