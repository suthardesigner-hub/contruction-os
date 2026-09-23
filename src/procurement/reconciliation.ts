export function reconcile(x:{opening:number;received:number;issued:number;returned:number;closing:number;theoreticalConsumption:number}){
 const actualConsumption=x.opening+x.received-x.closing+x.returned;
 const variance=actualConsumption-x.theoreticalConsumption;
 return {actualConsumption,variance,abnormal:Math.abs(variance)>Math.max(x.theoreticalConsumption*0.05,1)};
}
