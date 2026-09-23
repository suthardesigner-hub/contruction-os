export type Eligibility='BLOCKED'|'ELIGIBLE';
export function paymentEligibility(x:{certifiedValue:number;retention?:number;advanceRecovery?:number;deduction?:number;certified:boolean}){
 if(!x.certified)return {status:'BLOCKED' as Eligibility,reason:'MEASUREMENT_NOT_CERTIFIED',net:0};
 const net=Math.max(x.certifiedValue-(x.retention||0)-(x.advanceRecovery||0)-(x.deduction||0),0);
 return {status:'ELIGIBLE' as Eligibility,net};
}
