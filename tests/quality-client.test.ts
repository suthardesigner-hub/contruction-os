import {closeHoldPoint} from '../src/quality/hold-point';
import {createComplaint,resolveComplaint} from '../src/quality/client-complaint';
let blocked=false;try{closeHoldPoint({status:'OPEN',evidenceIds:[]},true,[])}catch{blocked=true}if(!blocked)throw Error('hold evidence gate');
const c=createComplaint('c','2026-09-23T00:00:00Z');if(!c.dueAt.startsWith('2026-09-26'))throw Error('SLA date');
let ev=false;try{resolveComplaint(c,[])}catch{ev=true}if(!ev)throw Error('resolution evidence gate');
