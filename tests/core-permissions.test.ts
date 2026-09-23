import {hasPermission} from '../src/core/permissions';
const ok=(v:boolean,m:string)=>{if(!v)throw new Error(m)};
ok(hasPermission(['OWNER'],'INTERNAL_MARGIN_VIEW'),'owner margin');
ok(!hasPermission(['CLIENT'],'INTERNAL_MARGIN_VIEW'),'client margin leak');
ok(!hasPermission(['VENDOR'],'BOQ_VIEW'),'vendor BOQ leak');
ok(hasPermission(['AGENCY'],'PAYMENT_STATUS_VIEW_OWN'),'agency own payment');
