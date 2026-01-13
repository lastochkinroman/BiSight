// src/db.js

/**
 * Этот файл теперь использует синтаксис module.exports,
 * чтобы быть совместимым с server.js (который использует require).
 * На стороне клиента (React) он по-прежнему будет работать с import.
 */

// Current period data
const clients_current = [
    {
        id: 1, name: "TechProm LLC", inn: "1234567890", priority: "High", segment: "Enterprise", industry: "Manufacturing", trust: "High",
        details: { revenue: 1000000, revenueGrowth: 15, customerSatisfaction: 85, }
    },
    {
        id: 2, name: "Smirnov Individual", inn: "0987654321", priority: "Medium", segment: "Small Business", industry: "Retail", trust: "Medium",
        details: { revenue: 500000, revenueGrowth: 8, customerSatisfaction: 78, }
    },
    {
        id: 3, name: "FinTrust Corp", inn: "1357924680", priority: "High", segment: "Enterprise", industry: "Consulting", trust: "High",
        details: { revenue: 2000000, revenueGrowth: 22, customerSatisfaction: 92, }
    },
    {
        id: 4, name: "BuildSecure LLC", inn: "2468135790", priority: "High", segment: "Enterprise", industry: "Construction", trust: "Medium",
        details: { revenue: 1500000, revenueGrowth: 12, customerSatisfaction: 80, }
    },
    {
        id: 5, name: "Kozlova Services", inn: "9876543210", priority: "Low", segment: "Micro Business", industry: "Services", trust: "Low",
        details: { revenue: 200000, revenueGrowth: 3, customerSatisfaction: 65, }
    },
    {
        id: 6, name: "MedTech Corp", inn: "1122334455", priority: "High", segment: "Enterprise", industry: "Healthcare", trust: "High",
        details: { revenue: 1800000, revenueGrowth: 18, customerSatisfaction: 88, }
    },
    {
        id: 7, name: "AgroProduct LLC", inn: "5566778899", priority: "Medium", segment: "Medium Business", industry: "Agriculture", trust: "High",
        details: { revenue: 1200000, revenueGrowth: 10, customerSatisfaction: 82, }
    },
    {
        id: 8, name: "TechService Individual", inn: "9988776655", priority: "Medium", segment: "Small Business", industry: "IT", trust: "Medium",
        details: { revenue: 800000, revenueGrowth: 14, customerSatisfaction: 79, }
    },
    {
        id: 9, name: "TransLogistics Corp", inn: "4455667788", priority: "High", segment: "Enterprise", industry: "Logistics", trust: "High",
        details: { revenue: 2500000, revenueGrowth: 20, customerSatisfaction: 90, }
    },
    {
        id: 10, name: "EcoTech LLC", inn: "3322114455", priority: "Medium", segment: "Medium Business", industry: "Environmental", trust: "Medium",
        details: { revenue: 900000, revenueGrowth: 9, customerSatisfaction: 76, }
    }
];

// Future period data
const clients_future = [
    { id: 1, inn: "1234567890", name: "TechProm LLC", details: { revenue: 1200000, revenueGrowth: 20, customerSatisfaction: 87 } },
    { id: 2, inn: "0987654321", name: "Smirnov Individual", details: { revenue: 450000, revenueGrowth: 12, customerSatisfaction: 80 } },
    { id: 3, inn: "1357924680", name: "FinTrust Corp", details: { revenue: 2200000, revenueGrowth: 25, customerSatisfaction: 94 } },
    { id: 4, inn: "2468135790", name: "BuildSecure LLC", details: { revenue: 1600000, revenueGrowth: 18, customerSatisfaction: 85 } },
    { id: 5, inn: "9876543210", name: "Kozlova Services", details: { revenue: 200000, revenueGrowth: 5, customerSatisfaction: 68 } },
    { id: 6, inn: "1122334455", name: "MedTech Corp", details: { revenue: 2100000, revenueGrowth: 22, customerSatisfaction: 91 } },
    { id: 7, inn: "5566778899", name: "AgroProduct LLC", details: { revenue: 1100000, revenueGrowth: 15, customerSatisfaction: 84 } },
    { id: 8, inn: "9988776655", name: "TechService Individual", details: { revenue: 750000, revenueGrowth: 8, customerSatisfaction: 75 } },
    { id: 9, inn: "4455667788", name: "TransLogistics Corp", details: { revenue: 2600000, revenueGrowth: 24, customerSatisfaction: 92 } },
    { id: 10, inn: "3322114455", name: "EcoTech LLC", details: { revenue: 1500000, revenueGrowth: 16, customerSatisfaction: 81 } }
];


// Экспортируем данные для использования в других файлах
module.exports = {
  clients_current,
  clients_future
};
