export interface MatchInput{poQty:number;grnAcceptedQty:number;invoiceQty:number;poRate:number;invoiceRate:number}
export function threeWayMatch(x:MatchInput){
 const qtyMatch=x.invoiceQty<=x.grnAcceptedQty&&x.grnAcceptedQty<=x.poQty;
 const rateMatch=x.invoiceRate<=x.poRate;
 return {qtyMatch,rateMatch,paymentException:!(qtyMatch&&rateMatch),reasons:[!qtyMatch?'QUANTITY_MISMATCH':null,!rateMatch?'RATE_MISMATCH':null].filter(Boolean)};
}
