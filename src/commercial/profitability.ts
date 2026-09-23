export function projectProfitability(x:{contractValue:number;approvedVariations:number;budget:number;committedCost:number;actualCost:number;forecastToComplete:number}){
 const revisedRevenue=x.contractValue+x.approvedVariations;
 const estimatedFinalCost=x.actualCost+x.forecastToComplete;
 const estimatedProfit=revisedRevenue-estimatedFinalCost;
 return {revisedRevenue,estimatedFinalCost,estimatedProfit,estimatedMarginPct:revisedRevenue?estimatedProfit/revisedRevenue*100:0,budgetVariance:estimatedFinalCost-x.budget,committedCost:x.committedCost};
}
