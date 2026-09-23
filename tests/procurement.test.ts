import {createGRN,issueStock} from '../src/procurement/stock-service';
import {threeWayMatch} from '../src/procurement/three-way-match';
const g=createGRN(100,90,85);if(g.shortage!==10||g.rejected!==5)throw Error('GRN math');
let blocked=false;try{issueStock(10,11)}catch{blocked=true}if(!blocked)throw Error('negative stock');
const m=threeWayMatch({poQty:100,grnAcceptedQty:85,invoiceQty:90,poRate:50,invoiceRate:50});if(!m.paymentException)throw Error('3-way mismatch missed');
