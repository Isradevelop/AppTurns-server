(self.webpackChunkapp_turns=self.webpackChunkapp_turns||[]).push([[865],{3865:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ShiftsModule:()=>H});var c=i(8583),n=i(665),s=i(8663),r=i(8248),o=i(639),a=i(9364);function u(e,t){if(1&e&&(o.TgZ(0,"td"),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e)}}function d(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.YNc(3,u,2,1,"td",7),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.AsE("",e.dates[0]," - ",e.dates[6],""),o.xp6(1),o.Q6J("ngForOf",e.shifts)}}let l=(()=>{class e{constructor(e){this.ScheduleService=e,this.employeeName="",this.schedulesOfEmployee=[],this.timerSubscription=this.ScheduleService.getSchedules().subscribe(e=>{const t=(0,r.Z)(localStorage.getItem("token"));this.employeeName=t.name,this.schedulesOfEmployee=e.filter(e=>e.employeeName==this.employeeName)})}ngOnInit(){}ngOnDestroy(){this.timerSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.u))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-all-my-shifts"]],decls:28,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[1,"table","table-secondary","table-bordered","text-center","m-auto","mb-3","mt-4"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Historial de turnos"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"table",6),o.TgZ(8,"thead"),o.TgZ(9,"tr"),o.TgZ(10,"th"),o._uU(11,"Fecha"),o.qZA(),o.TgZ(12,"th"),o._uU(13,"L"),o.qZA(),o.TgZ(14,"th"),o._uU(15,"M"),o.qZA(),o.TgZ(16,"th"),o._uU(17,"X"),o.qZA(),o.TgZ(18,"th"),o._uU(19,"J"),o.qZA(),o.TgZ(20,"th"),o._uU(21,"V"),o.qZA(),o.TgZ(22,"th"),o._uU(23,"S"),o.qZA(),o.TgZ(24,"th"),o._uU(25,"D"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"tbody"),o.YNc(27,d,4,3,"tr",7),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(27),o.Q6J("ngForOf",t.schedulesOfEmployee))},directives:[c.sg],styles:[""]}),e})();function h(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",14),o.NdJ("click",function(){return o.CHM(e),o.oxw().getWeek("next")}),o.TgZ(1,"a",15),o._uU(2,"Pr\xf3xima semana"),o.qZA(),o.qZA()}}function g(e,t){1&e&&(o.TgZ(0,"div",16),o.TgZ(1,"h4",3),o._uU(2,"Semana anterior"),o.qZA(),o.qZA())}function Z(e,t){1&e&&(o.TgZ(0,"div",16),o.TgZ(1,"h4",3),o._uU(2,"Semana actual"),o.qZA(),o.qZA())}function p(e,t){1&e&&(o.TgZ(0,"div",16),o.TgZ(1,"h4",3),o._uU(2,"Pr\xf3xima semana"),o.qZA(),o.qZA())}function m(e,t){if(1&e&&(o.TgZ(0,"td"),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e)}}function f(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.YNc(3,m,2,1,"td",17),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e.employeeName),o.xp6(1),o.Q6J("ngForOf",e.shifts)}}function b(e,t){if(1&e&&(o.TgZ(0,"tbody"),o.YNc(1,f,4,2,"tr",17),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.previusSchedules)}}function q(e,t){if(1&e&&(o.TgZ(0,"td"),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e)}}function A(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.YNc(3,q,2,1,"td",17),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e.employeeName),o.xp6(1),o.Q6J("ngForOf",e.shifts)}}function T(e,t){if(1&e&&(o.TgZ(0,"tbody"),o.YNc(1,A,4,2,"tr",17),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.currSchedules)}}function y(e,t){if(1&e&&(o.TgZ(0,"td"),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e)}}function v(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.YNc(3,y,2,1,"td",17),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e.employeeName),o.xp6(1),o.Q6J("ngForOf",e.shifts)}}function S(e,t){if(1&e&&(o.TgZ(0,"tbody"),o.YNc(1,v,4,2,"tr",17),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.nextSchedules)}}let x=(()=>{class e{constructor(e){this.ScheduleService=e,this.schedules=[],this.currSchedules=[],this.previusSchedules=[],this.nextSchedules=[],this.currentWeekNumber=0,this.week="current",this.thereAreNextWeek=!1;let t=new Date,i=t.getUTCMonth()+1,c=t.getUTCDate().toString()+"/"+i.toString();this.timerSubscription=this.ScheduleService.getSchedules().subscribe(e=>{this.schedules=e;for(let t of this.schedules)for(let e of t.dates)e===c&&(this.currSchedules.push(t),this.currentWeekNumber=t.weekNumber);for(let t of this.schedules)t.weekNumber===this.currentWeekNumber-1&&this.previusSchedules.push(t);for(let t of this.schedules)t.weekNumber===this.currentWeekNumber+1&&(this.nextSchedules.push(t),this.thereAreNextWeek=!0)})}ngOnInit(){}ngOnDestroy(){this.timerSubscription.unsubscribe()}getWeek(e){this.week=e}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.u))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-all-shifts"]],decls:41,vars:7,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[1,"row","mb-5"],[1,"col-4","text-center"],[1,"btn","btn-secondary",3,"click"],["class","col-4 text-center",3,"click",4,"ngIf"],["class","row my-3",4,"ngIf"],["id","containerTable",1,"col-12"],[1,"table","table-secondary","table-striped","table-bordered","w-50","text-center","m-auto","mb-3"],[4,"ngIf"],[1,"col-4","text-center",3,"click"],[1,"btn","btn-secondary"],[1,"row","my-3"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Todos los turnos"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"div",6),o.TgZ(8,"div",7),o.TgZ(9,"a",8),o.NdJ("click",function(){return t.getWeek("previus")}),o._uU(10,"Semana anterior"),o.qZA(),o.qZA(),o.TgZ(11,"div",7),o.TgZ(12,"a",8),o.NdJ("click",function(){return t.getWeek("current")}),o._uU(13,"Semana actual"),o.qZA(),o.qZA(),o.YNc(14,h,3,0,"div",9),o.qZA(),o.YNc(15,g,3,0,"div",10),o.YNc(16,Z,3,0,"div",10),o.YNc(17,p,3,0,"div",10),o.TgZ(18,"div",11),o.TgZ(19,"table",12),o.TgZ(20,"thead"),o.TgZ(21,"tr"),o.TgZ(22,"th"),o._uU(23,"Name"),o.qZA(),o.TgZ(24,"th"),o._uU(25,"L"),o.qZA(),o.TgZ(26,"th"),o._uU(27,"M"),o.qZA(),o.TgZ(28,"th"),o._uU(29,"X"),o.qZA(),o.TgZ(30,"th"),o._uU(31,"J"),o.qZA(),o.TgZ(32,"th"),o._uU(33,"V"),o.qZA(),o.TgZ(34,"th"),o._uU(35,"S"),o.qZA(),o.TgZ(36,"th"),o._uU(37,"D"),o.qZA(),o.qZA(),o.qZA(),o.YNc(38,b,2,1,"tbody",13),o.YNc(39,T,2,1,"tbody",13),o.YNc(40,S,2,1,"tbody",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(14),o.Q6J("ngIf",t.thereAreNextWeek),o.xp6(1),o.Q6J("ngIf","previus"===t.week),o.xp6(1),o.Q6J("ngIf","current"===t.week),o.xp6(1),o.Q6J("ngIf","next"===t.week),o.xp6(21),o.Q6J("ngIf","previus"===t.week),o.xp6(1),o.Q6J("ngIf","current"===t.week),o.xp6(1),o.Q6J("ngIf","next"===t.week))},directives:[c.O5,c.sg],styles:["@media(max-with:769px){table[_ngcontent-%COMP%]{overflow:scroll}}"]}),e})();var N=i(8259),U=i.n(N),_=i(4640),w=i(6363);function O(e,t){if(1&e&&(o.TgZ(0,"option",15),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.s9C("value",e),o.xp6(1),o.hij(" ",e," ")}}let E=(()=>{class e{constructor(e,t,i){this.employeesService=e,this.scheduleService=t,this.changeService=i,this.employees=[],this.employeesNames=[],this.applicantSchedule={},this.affectedSchedule={},this.status="pending",this.myForm=new n.cw({affectedEmployee:new n.NI,changeDate:new n.NI});const c=(0,r.Z)(localStorage.getItem("token"));this.applicantEmployeeName=c.name}ngOnInit(){this.employeesService.getEmployees().subscribe(e=>{e.forEach(e=>this.employeesNames.push(e.name))})}createChange(){const e=this.myForm.value.changeDate.split("-"),t=`${e[2]}/${e[1]}`;this.scheduleService.getSchedules().subscribe(e=>{let i=[],c=[];e.forEach(e=>{e.employeeName==this.applicantEmployeeName&&i.push(e),i&&i.forEach(e=>{e.dates.forEach(i=>{i===t&&(this.applicantSchedule=e)})})}),e.forEach(e=>{e.employeeName==this.myForm.value.affectedEmployee&&c.push(e),c&&c.forEach(e=>{e.dates.forEach(i=>{i===t&&(this.affectedSchedule=e)})})}),this.changeService.createChange(this.applicantEmployeeName,this.myForm.value.affectedEmployee,this.applicantSchedule,this.affectedSchedule,t,this.status).subscribe(),U().fire({icon:"success",title:"Cambio creado con \xe9xito. \n                      Recuerde que el cambio no ser\xe1 efectivo \n                      hasta que el usuario afectado y en encargado lo aprueben ",timer:3e3})})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(_.M),o.Y36(a.u),o.Y36(w.p))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-change-shift"]],decls:22,vars:2,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[3,"formGroup"],[1,"row","mb-4"],["formControlName","affectedEmployee",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mb-5"],["type","date","formControlName","changeDate",1,"form-control"],[1,"row","text-center"],[1,"btn","btn-warning",3,"click"],[1,"card-footer","text-danger"],[3,"value"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Solicitar cambio de turno"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"form",6),o.TgZ(8,"div",7),o.TgZ(9,"p"),o._uU(10,"\xbfCon que compa\xf1ero quieres cambiar el turno?"),o.qZA(),o.TgZ(11,"select",8),o.YNc(12,O,2,2,"option",9),o.qZA(),o.qZA(),o.TgZ(13,"div",10),o.TgZ(14,"p"),o._uU(15,"\xbfQue d\xeda quieres cambiar?"),o.qZA(),o._UZ(16,"input",11),o.qZA(),o.TgZ(17,"div",12),o.TgZ(18,"button",13),o.NdJ("click",function(){return t.createChange()}),o._uU(19,"Solicitar cambio"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(20,"div",14),o._uU(21," Recuerda que el cambio no ser\xe1 efectivo hasta que un responsable lo autorice. "),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(7),o.Q6J("formGroup",t.myForm),o.xp6(5),o.Q6J("ngForOf",t.employeesNames))},directives:[n._Y,n.JL,n.sg,n.EJ,n.JJ,n.u,c.sg,n.Fj,n.YN,n.Kr],styles:[""]}),e})();function k(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.qZA()),2&e){const e=t.index,i=o.oxw(2);o.xp6(2),o.Oqu(i.days[e]),o.xp6(2),o.Oqu(i.employeeSchedule.dates[e]),o.xp6(2),o.Oqu(i.employeeSchedule.shifts[e])}}function J(e,t){if(1&e&&(o.TgZ(0,"table",7),o.TgZ(1,"thead"),o.TgZ(2,"tr"),o.TgZ(3,"th"),o._uU(4,"D\xeda de la semana"),o.qZA(),o.TgZ(5,"th"),o._uU(6,"Fecha"),o.qZA(),o.TgZ(7,"th"),o._uU(8,"Turno"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"tbody"),o.YNc(10,k,7,3,"tr",8),o.qZA(),o.qZA()),2&e){const e=o.oxw();o.xp6(10),o.Q6J("ngForOf",e.days)}}let F=(()=>{class e{constructor(e){this.ScheduleService=e,this.days=["Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado","Domingo"],this.employeeName="",this.employeeSchedules=[];let t=new Date,i=t.getUTCMonth()+1,c=t.getUTCDate().toString()+"/"+i.toString();this.timerSubscription=this.ScheduleService.getSchedules().subscribe(e=>{const t=e,i=(0,r.Z)(localStorage.getItem("token"));this.employeeName=i.name;for(let n of t)for(let e of n.dates)e===c&&n.employeeName==this.employeeName&&(this.employeeSchedule=n)})}ngOnInit(){}ngOnDestroy(){this.timerSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.u))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-my-shift"]],decls:8,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],["class","table table-secondary table-bordered w-50 text-center mb-2 m-auto",4,"ngIf"],[1,"table","table-secondary","table-bordered","w-50","text-center","mb-2","m-auto"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Mi turno"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.YNc(7,J,11,1,"table",6),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(7),o.Q6J("ngIf",t.employeeSchedule))},directives:[c.O5,c.sg],styles:[""]}),e})();var C=i(7556);function Y(e,t){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"h4",8),o._uU(2,"No hay cambios pendientes"),o.qZA(),o.qZA())}function I(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",10),o.TgZ(1,"h4",11),o._uU(2,"Solicitud de cambio"),o.qZA(),o._UZ(3,"hr"),o.TgZ(4,"p"),o._uU(5,"Empleados solicitantes del cambio: "),o.TgZ(6,"b"),o._uU(7),o.qZA(),o.qZA(),o.TgZ(8,"p"),o._uU(9,"Fecha del cambio: "),o.TgZ(10,"b"),o._uU(11),o.qZA(),o.qZA(),o.TgZ(12,"p"),o._uU(13,"Turnos antes del cambio: "),o._UZ(14,"br"),o.TgZ(15,"b"),o._uU(16),o.qZA(),o.qZA(),o.TgZ(17,"p"),o._uU(18,"Turnos despu\xe9s del cambio: "),o._UZ(19,"br"),o.TgZ(20,"b"),o._uU(21),o.qZA(),o.qZA(),o.TgZ(22,"p"),o.TgZ(23,"button",12),o.NdJ("click",function(){const t=o.CHM(e).$implicit;return o.oxw(2).acceptChange(t.id,t.applicantSchedule,t.affectedSchedule,t.index)}),o._uU(24," Aceptar "),o.qZA(),o.TgZ(25,"button",13),o.NdJ("click",function(){const t=o.CHM(e).$implicit;return o.oxw(2).declineChange(t.id)}),o._uU(26,"Rechazar"),o.qZA(),o.qZA(),o.qZA()}if(2&e){const e=t.$implicit;o.xp6(7),o.AsE("",e.applicantEmployeeName," - ",e.affectedEmployeeName,""),o.xp6(4),o.Oqu(e.changeDate),o.xp6(5),o.HOy(" ",e.applicantEmployeeName,": ",e.applicantShift," / ",e.affectedEmployeeName,": ",e.affectedShift," "),o.xp6(5),o.HOy(" ",e.applicantEmployeeName,": ",e.affectedShift," / ",e.affectedEmployeeName,": ",e.applicantShift," ")}}function Q(e,t){if(1&e&&o.YNc(0,I,27,11,"div",9),2&e){const e=o.oxw();o.Q6J("ngForOf",e.changes)}}let D=(()=>{class e{constructor(e,t){this.changeService=e,this.authService=t,this.changes=[],this.isEmptyChanges=!0,this.changeService.getChanges("pending").subscribe(e=>{this.authService.userToken().then(t=>{for(let i of e)if(i.affectedEmployee===t.name){this.isEmptyChanges=!1;let e=i.shiftApplicant.dates.indexOf(i.changeDate);this.changes.push({id:i._id,applicantEmployeeName:i.applicantEmployee,affectedEmployeeName:i.affectedEmployee,changeDate:i.changeDate,applicantShift:i.shiftApplicant.shifts[e],affectedShift:i.shiftAffected.shifts[e],applicantSchedule:i.shiftApplicant,affectedSchedule:i.shiftAffected,index:e})}})})}ngOnInit(){}acceptChange(e,t,i,c){this.changeService.updateChange(e,"accepted",t,i,c).subscribe(),U().fire({icon:"success",title:"Cambio aceptado!!\n            En cuanto un responsable lo autorice,\n            el cambio se har\xe1 efectivo",timer:2e3})}declineChange(e){this.changeService.updateChange(e,"rejected").subscribe(),U().fire({icon:"error",title:"Cambio rechazado!!",timer:2e3})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(w.p),o.Y36(C.e))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-pending-changes"]],decls:10,vars:2,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[4,"ngIf","ngIfElse"],["noEmpty",""],[1,"text-center","mt-5"],["class","bg-secondary border rounded m-auto",4,"ngFor","ngForOf"],[1,"bg-secondary","border","rounded","m-auto"],[1,"my-3"],[1,"btn","btn-warning","mx-3",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Cambios pendientes de aprobaci\xf3n"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.YNc(7,Y,3,0,"div",6),o.YNc(8,Q,1,1,"ng-template",null,7,o.W1O),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e){const e=o.MAs(9);o.xp6(7),o.Q6J("ngIf",t.isEmptyChanges)("ngIfElse",e)}},directives:[c.O5,c.sg],styles:[""]}),e})();var M=i(4832);function $(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e.name),o.xp6(2),o.Oqu(e.shift)}}const W=[{path:"",children:[{path:"allShifts",component:x},{path:"myShift",component:F},{path:"changeShift",component:E},{path:"typesShifts",component:(()=>{class e{constructor(e){this.ShiftsService=e}ngOnInit(){this.timerSubscription=this.ShiftsService.allShifts().subscribe(e=>{this.shiftsEnabled=e})}ngOnDestroy(){this.timerSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(M.U))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-types-shift"]],decls:16,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[1,"table","table-secondary","table-bordered","w-50","text-center","m-auto","mb-3"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h2",3),o._uU(4,"Turnos"),o.qZA(),o.qZA(),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"table",6),o.TgZ(8,"thead"),o.TgZ(9,"tr"),o.TgZ(10,"th"),o._uU(11,"Nombre turno"),o.qZA(),o.TgZ(12,"th"),o._uU(13,"Horario"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"tbody"),o.YNc(15,$,5,2,"tr",7),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(15),o.Q6J("ngForOf",t.shiftsEnabled))},directives:[c.sg],styles:[""]}),e})()},{path:"allMyShifts",component:l},{path:"pendingChanges",component:D},{path:"**",redirectTo:"allShifts"}]}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.Bz.forChild(W)],s.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.ez,n.UX,X]]}),e})()}}]);