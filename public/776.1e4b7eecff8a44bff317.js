(self.webpackChunkapp_turns=self.webpackChunkapp_turns||[]).push([[776],{1776:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ShiftManagementModule:()=>F});var r=i(8583),o=i(8663),n=i(665),s=i(8259),a=i.n(s),c=i(6738),m=i(639),u=i(4832),f=i(4640),l=i(9364);function h(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij("",e," ")}}function d(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function p(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function Z(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function g(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function b(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function y(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}function q(e,t){if(1&e&&(m.TgZ(0,"option",33),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.s9C("value",e),m.xp6(1),m.hij(" ",e,"")}}let A=(()=>{class e{constructor(e,t,i,r){this.shiftService=e,this.employeeService=t,this.scheduleService=i,this.fb=r,this.shiftsNames=[],this.employeeNames=[],this.myForm=this.fb.group({from:["",n.kI.required],employeeName:["",n.kI.required],mondayShift:["",n.kI.required],tuesdayShift:["",n.kI.required],wednesdayShift:["",n.kI.required],thursdayShift:["",n.kI.required],fridayShift:["",n.kI.required],saturdayShift:["",n.kI.required],sundayShift:["",n.kI.required]})}ngOnInit(){this.employeeService.getEmployeesNames().subscribe(e=>{this.employeeNames=e}),this.shiftService.allShiftsNames().subscribe(e=>{this.shiftsNames=e})}onSubmit(){const e=this.myForm.value.employeeName,t=this.myForm.value.from,i=this.myForm.value.mondayShift,r=this.myForm.value.tuesdayShift,o=this.myForm.value.wednesdayShift,n=this.myForm.value.thursdayShift,s=this.myForm.value.fridayShift,m=this.myForm.value.saturdayShift,u=this.myForm.value.sundayShift,f=t.split("-"),l=parseInt(f[2]),h=parseInt(f[0]),d=parseInt(f[1]),p=[];if(0===t.length)a().fire({icon:"error",title:"Por favor introduce fecha",timer:2500});else if(0===e.length)a().fire({icon:"error",title:"Por favor introduce empleado",timer:2500});else if(0===i.length||0===r.length||0===o.length||0===n.length||0===s.length||0===m.length||0===u.length)a().fire({icon:"error",title:"Por favor introduce turnos",timer:2500});else{let t=c.utc(`${h}-${d}-${l}`);for(let e=0;e<7;e++)p.push(t.format("DD/MM")),t.add(1,"d");this.scheduleService.createSchedule(e,p,[i,r,o,n,s,m,u],f[0],f[1]).subscribe(e=>{a().fire({icon:"success",title:"Calendario creado con \xe9xito",timer:2500})})}}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(u.U),m.Y36(f.M),m.Y36(l.u),m.Y36(n.qu))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-schedule-create"]],decls:66,vars:9,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header","pt-3"],[1,"text-center"],[1,"card-body","mb-5"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"row"],[1,"col-6"],["for","from"],["formControlName","from","type","date","id","from",1,"form-control"],[1,"row","mb-4","mt-3"],[1,"col-12"],["for","employeeName"],["id","employeeName","formControlName","employeeName",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"my-5"],[1,"col-12","mb-3"],["for","mondayShift"],["formControlName","mondayShift","id","mondayShift",1,"form-select"],["for","tuesdayShift"],["formControlName","tuesdayShift","id","tuesdayShift",1,"form-select"],["for","wednesdayShift"],["formControlName","wednesdayShift","id","wednesdayShift",1,"form-select"],["for","thursdayShift"],["formControlName","thursdayShift","id","thursdayShift",1,"form-select"],["for","fridayShift"],["formControlName","fridayShift","id","fridayShift",1,"form-select"],["for","saturdayShift"],["formControlName","saturdayShift","id","saturdayShift",1,"form-select"],["for","sundayShift"],["formControlName","sundayShift","id","sundayShift",1,"form-select"],["type","submit","value","Crear",1,"btn","btn-warning","my-3","col-5","ms-2"],[3,"value"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h2",3),m._uU(4,"Crear calendario semanal"),m.qZA(),m.qZA(),m.TgZ(5,"div",4),m.TgZ(6,"form",5),m.NdJ("ngSubmit",function(){return t.onSubmit()}),m.TgZ(7,"div",6),m.TgZ(8,"div",7),m.TgZ(9,"div",8),m.TgZ(10,"label",9),m._uU(11,"Desde: "),m.qZA(),m._UZ(12,"input",10),m.qZA(),m.qZA(),m.qZA(),m.TgZ(13,"div",11),m.TgZ(14,"div",12),m.TgZ(15,"label",13),m._uU(16,"Nombre: "),m.qZA(),m.TgZ(17,"select",14),m.YNc(18,h,2,2,"option",15),m.qZA(),m.qZA(),m.qZA(),m._UZ(19,"hr",16),m.TgZ(20,"h4",3),m._uU(21,"Turnos"),m.qZA(),m.TgZ(22,"div",11),m.TgZ(23,"div",17),m.TgZ(24,"label",18),m._uU(25,"Lunes"),m.qZA(),m.TgZ(26,"select",19),m._UZ(27,"option"),m.YNc(28,d,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(29,"div",17),m.TgZ(30,"label",20),m._uU(31,"Martes"),m.qZA(),m.TgZ(32,"select",21),m._UZ(33,"option"),m.YNc(34,p,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(35,"div",17),m.TgZ(36,"label",22),m._uU(37,"Mi\xe9rcoles"),m.qZA(),m.TgZ(38,"select",23),m._UZ(39,"option"),m.YNc(40,Z,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(41,"div",17),m.TgZ(42,"label",24),m._uU(43,"Jueves"),m.qZA(),m.TgZ(44,"select",25),m._UZ(45,"option"),m.YNc(46,g,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(47,"div",17),m.TgZ(48,"label",26),m._uU(49,"Viernes"),m.qZA(),m.TgZ(50,"select",27),m._UZ(51,"option"),m.YNc(52,b,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(53,"div",17),m.TgZ(54,"label",28),m._uU(55,"S\xe1bado"),m.qZA(),m.TgZ(56,"select",29),m._UZ(57,"option"),m.YNc(58,y,2,2,"option",15),m.qZA(),m.qZA(),m.TgZ(59,"div",17),m.TgZ(60,"label",30),m._uU(61,"Domingo"),m.qZA(),m.TgZ(62,"select",31),m._UZ(63,"option"),m.YNc(64,q,2,2,"option",15),m.qZA(),m.qZA(),m.qZA(),m._UZ(65,"input",32),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&e&&(m.xp6(6),m.Q6J("formGroup",t.myForm),m.xp6(12),m.Q6J("ngForOf",t.employeeNames),m.xp6(10),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames),m.xp6(6),m.Q6J("ngForOf",t.shiftsNames))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.EJ,r.sg,n.YN,n.Kr],styles:[""]}),e})();var T=i(6363),v=i(7556);function S(e,t){1&e&&(m.TgZ(0,"div"),m.TgZ(1,"h4",8),m._uU(2,"No hay cambios pendientes"),m.qZA(),m.qZA())}function N(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"div",10),m.TgZ(1,"h4",11),m._uU(2,"Solicitud de cambio"),m.qZA(),m._UZ(3,"hr"),m.TgZ(4,"p"),m._uU(5,"Empleados solicitantes del cambio: "),m.TgZ(6,"b"),m._uU(7),m.qZA(),m.qZA(),m.TgZ(8,"p"),m._uU(9,"Fecha del cambio: "),m.TgZ(10,"b"),m._uU(11),m.qZA(),m.qZA(),m.TgZ(12,"p"),m._uU(13,"Turnos antes del cambio: "),m._UZ(14,"br"),m.TgZ(15,"b"),m._uU(16),m.qZA(),m.qZA(),m.TgZ(17,"p"),m._uU(18,"Turnos despu\xe9s del cambio: "),m._UZ(19,"br"),m.TgZ(20,"b"),m._uU(21),m.qZA(),m.qZA(),m.TgZ(22,"p"),m.TgZ(23,"button",12),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).acceptChange(t.id,t.applicantSchedule,t.affectedSchedule,t.index)}),m._uU(24," Aceptar "),m.qZA(),m.TgZ(25,"button",13),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).declineChange(t._id)}),m._uU(26,"Rechazar"),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=t.$implicit;m.xp6(7),m.AsE("",e.applicantEmployeeName," - ",e.affectedEmployeeName,""),m.xp6(4),m.Oqu(e.changeDate),m.xp6(5),m.HOy(" ",e.applicantEmployeeName,": ",e.applicantShift," / ",e.affectedEmployeeName,": ",e.affectedShift," "),m.xp6(5),m.HOy(" ",e.applicantEmployeeName,": ",e.affectedShift," / ",e.affectedEmployeeName,": ",e.applicantShift," ")}}function _(e,t){if(1&e&&m.YNc(0,N,27,11,"div",9),2&e){const e=m.oxw();m.Q6J("ngForOf",e.changes)}}function U(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m.TgZ(6,"button",8),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw().deleteShift(t._id)}),m._uU(7,"Eliminar"),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=t.$implicit;m.xp6(2),m.Oqu(e.name),m.xp6(2),m.Oqu(e.shift)}}const x=[{path:"",children:[{path:"shiftChanges",component:(()=>{class e{constructor(e,t){this.changesService=e,this.authService=t,this.isEmptyChanges=!0,this.changes=[],this.changesService.getChanges("accepted").subscribe(e=>{this.authService.userToken().then(t=>{for(let i of e)if(i.affectedEmployee===t.name){this.isEmptyChanges=!1;let t=i.shiftApplicant.dates.indexOf(i.changeDate);for(let i of e)this.changes.push({id:i._id,applicantEmployeeName:i.applicantEmployee,affectedEmployeeName:i.affectedEmployee,changeDate:i.changeDate,applicantShift:i.shiftApplicant.shifts[t],affectedShift:i.shiftAffected.shifts[t],applicantSchedule:i.shiftApplicant,affectedSchedule:i.shiftAffected,index:t})}})})}ngOnInit(){}acceptChange(e,t,i,r){this.changesService.updateChange(e,"approved",t,i,r).subscribe(),a().fire({icon:"success",title:"Cambio aceptado!!",timer:2e3})}declineChange(e){this.changesService.updateChange(e,"rejected").subscribe(),a().fire({icon:"error",title:"Cambio rechazado!!",timer:2e3})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(T.p),m.Y36(v.e))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-shift-changes"]],decls:10,vars:2,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[4,"ngIf","ngIfElse"],["noEmpty",""],[1,"text-center","mt-5"],["class","bg-secondary border rounded m-auto",4,"ngFor","ngForOf"],[1,"bg-secondary","border","rounded","m-auto"],[1,"my-3"],[1,"btn","btn-warning","mx-3",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h2",3),m._uU(4,"Gesti\xf3n de cambios de turno"),m.qZA(),m.qZA(),m.TgZ(5,"div",4),m.TgZ(6,"div",5),m.YNc(7,S,3,0,"div",6),m.YNc(8,_,1,1,"ng-template",null,7,m.W1O),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&e){const e=m.MAs(9);m.xp6(7),m.Q6J("ngIf",t.isEmptyChanges)("ngIfElse",e)}},directives:[r.O5,r.sg],styles:[""]}),e})()},{path:"shiftCreate",component:(()=>{class e{constructor(e){this.shiftService=e,this.mysShiftsList=[],this.myForm=new n.cw({name:new n.NI,shift:new n.NI})}ngOnInit(){this.shiftService.allShifts().subscribe(e=>this.mysShiftsList=e)}onSubmit(){this.checkName()&&this.checkEmptyShift()&&this.shiftService.createShift(this.myForm.value.name,this.myForm.value.shift).subscribe(e=>0==e.ok?a().fire({icon:"error",title:e.msg,timer:1500}):a().fire({icon:"success",title:`Nuevo horario creado.\n                        Nombre: ${this.myForm.value.name}\n                        Horario: ${this.myForm.value.shift}`,timer:1500}))}checkName(){return null==this.myForm.value.name?(a().fire({icon:"error",title:"El campo nombre no puede estar vac\xedo",timer:1500}),!1):!!this.myForm.value.name.trim()||(a().fire({icon:"error",title:"El campo nombre no puede estar vac\xedo",timer:1500}),!1)}checkEmptyShift(){return null!=this.myForm.value.shift&&!!this.myForm.value.shift.trim()||(a().fire({icon:"error",title:"El horario no puede estar vac\xedo",timer:1500}),!1)}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(u.U))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-shift-create"]],decls:19,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],["formControlName","name","type","text",1,"form-control"],["formControlName","shift","type","text",1,"form-control"],[1,"row","text-center"],["type","submit",1,"btn","btn-warning"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h2",3),m._uU(4,"Crear turno"),m.qZA(),m.qZA(),m.TgZ(5,"div",4),m.TgZ(6,"div",5),m.TgZ(7,"form",6),m.NdJ("ngSubmit",function(){return t.onSubmit()}),m.TgZ(8,"div",7),m.TgZ(9,"p"),m._uU(10,"Introduce nombre"),m.qZA(),m._UZ(11,"input",8),m.qZA(),m.TgZ(12,"div",7),m.TgZ(13,"p"),m._uU(14,"Introduce horario"),m.qZA(),m._UZ(15,"input",9),m.qZA(),m.TgZ(16,"div",10),m.TgZ(17,"button",11),m._uU(18,"Crear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&e&&(m.xp6(7),m.Q6J("formGroup",t.myForm))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[""]}),e})()},{path:"shiftDelete",component:(()=>{class e{constructor(e){this.ShiftsService=e}ngOnInit(){this.timerSubscription=this.ShiftsService.allShifts().subscribe(e=>{this.shiftsEnabled=e})}ngOnDestroy(){this.timerSubscription.unsubscribe()}deleteShift(e){const t=a().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});t.fire({title:"\xbfEst\xe1s seguro?",text:"Est\xe1s a punto de borrar un turno",icon:"warning",showCancelButton:!0,confirmButtonText:"Borrar!",cancelButtonText:"Cancelar!",reverseButtons:!0}).then(i=>{i.isConfirmed?this.ShiftsService.deleteShift(e).subscribe(e=>{!0===e.ok?t.fire("Turno borrado con \xe9xito","Turno borrado","success"):t.fire("No se pudo borrar el turno, hable con el administrador","Turno borrado","error")}):i.dismiss===a().DismissReason.cancel&&t.fire("Operaci\xf3n cancelada","No se realizar\xe1 ninguna operaci\xf3n","error")})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(u.U))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-shift-delete"]],decls:18,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[1,"table","table-bordered","w-50","text-center","m-auto","mb-3"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning",3,"click"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h2",3),m._uU(4,"Eliminar turno"),m.qZA(),m.qZA(),m.TgZ(5,"div",4),m.TgZ(6,"div",5),m.TgZ(7,"table",6),m.TgZ(8,"thead"),m.TgZ(9,"tr"),m.TgZ(10,"th"),m._uU(11,"Nombre turno"),m.qZA(),m.TgZ(12,"th"),m._uU(13,"Horario"),m.qZA(),m.TgZ(14,"th"),m._uU(15,"Eliminar turno"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(16,"tbody"),m.YNc(17,U,8,2,"tr",7),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&e&&(m.xp6(17),m.Q6J("ngForOf",t.shiftsEnabled))},directives:[r.sg],styles:[""]}),e})()},{path:"scheduleCreate",component:A},{path:"**",redirectTo:"shiftChanges"}]}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[o.Bz.forChild(x)],o.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[r.ez,n.UX,C]]}),e})()}}]);