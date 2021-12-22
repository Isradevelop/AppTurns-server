(self.webpackChunkapp_turns=self.webpackChunkapp_turns||[]).push([[202],{4202:(e,r,t)=>{"use strict";t.r(r),t.d(r,{EmployeesModule:()=>h});var o=t(8583),i=t(665),n=t(8663),s=t(8259),m=t.n(s),a=t(639),c=t(4640),l=t(7556);let u=(()=>{class e{constructor(e,r){this.EmployeesService=e,this.authService=r,this.employees=[],this.employeePassword="",this.myForm=new i.cw({password:new i.NI,newPassword:new i.NI,confirmPassword:new i.NI})}ngOnInit(){this.authService.userToken().then(e=>this.employee=e)}onSubmit(){this.checkOldAndNewPassword()&&(this.EmployeesService.updatePassword(this.employee.name,this.myForm.value.newPassword).subscribe(),m().fire({icon:"success",title:"Contrase\xf1a cambiada con \xe9xito",timer:1500}))}checkOldAndNewPassword(){return null!=this.myForm.value.newPassword&&this.myForm.value.newPassword.trim().length>=6?this.myForm.value.newPassword==this.myForm.value.confirmPassword||(m().fire({icon:"error",title:"Las contrase\xf1as deben ser iguales",timer:1500}),!1):(m().fire({icon:"error",title:"La contrase\xf1a debe tener 6 d\xedgitos o m\xe1s",timer:1500}),!1)}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(c.M),a.Y36(l.e))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-change-password"]],decls:19,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],["formControlName","newPassword","type","password",1,"form-control"],["formControlName","confirmPassword","type","password",1,"form-control"],[1,"row","text-center"],["type","submit",1,"btn","btn-warning"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4,"Cambiar contrase\xf1a"),a.qZA(),a.qZA(),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"form",6),a.NdJ("ngSubmit",function(){return r.onSubmit()}),a.TgZ(8,"div",7),a.TgZ(9,"p"),a._uU(10,"Introduce nueva contrase\xf1a"),a.qZA(),a._UZ(11,"input",8),a.qZA(),a.TgZ(12,"div",7),a.TgZ(13,"p"),a._uU(14,"Confirma nueva contrase\xf1a"),a.qZA(),a._UZ(15,"input",9),a.qZA(),a.TgZ(16,"div",10),a.TgZ(17,"button",11),a._uU(18,"Modificar contrase\xf1a"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(7),a.Q6J("formGroup",r.myForm))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u],styles:[""]}),e})();function d(e,r){if(1&e&&(a.TgZ(0,"option",12),a._uU(1),a.qZA()),2&e){const e=r.$implicit;a.s9C("value",e.name),a.xp6(1),a.hij(" ",e.name,"")}}const p=[{path:"",children:[{path:"createEmployee",component:(()=>{class e{constructor(e){this.EmployeesService=e,this.employees=[],this.myForm=new i.cw({name:new i.NI,email:new i.NI,isABoss:new i.NI,password:new i.NI,confirmPassword:new i.NI})}ngOnInit(){this.timerSubscription=this.EmployeesService.getEmployees().subscribe(e=>this.employees=e)}ngOnDestroy(){this.timerSubscription.unsubscribe()}onSubmit(){if(this.checkName()&&this.checkEmail()&&this.checkIsABoss()&&this.checkPassword()){const{name:e,password:r,email:t,isABoss:o}=this.myForm.value;this.EmployeesService.createEmployee(e,r,t,o).subscribe(r=>{0==r.ok?m().fire({icon:"error",title:"El email no tiene un formato v\xe1lido",showConfirmButton:!0,timer:5e3}):m().fire({icon:"success",title:`\n              Usuario creado!!\n              Nombre: ${e},\n              Email: ${t}\n                `,showConfirmButton:!0,timer:5e3})})}}checkName(){return null!=this.myForm.value.name&&this.myForm.value.name.trim()?null==this.employees.find(e=>{var r;return e.name==(null===(r=this.myForm.get("name"))||void 0===r?void 0:r.value)})||(m().fire({icon:"error",title:`Ya existe empleado con nombre: ${this.myForm.value.name}`,timer:2e3}),!1):(m().fire({icon:"error",title:"El nombre no puede estar vac\xedo",timer:2e3}),!1)}checkEmail(){return null!=this.myForm.value.email&&this.myForm.value.email.trim()?null==this.employees.find(e=>{var r;return e.email==(null===(r=this.myForm.get("email"))||void 0===r?void 0:r.value)})||(m().fire({icon:"error",title:"Ya existe ese email",timer:2e3}),!1):(m().fire({icon:"error",title:"El email no puede estar vac\xedo",timer:2e3}),!1)}checkIsABoss(){return null!=this.myForm.value.isABoss||(m().fire({icon:"error",title:"El tipo de empleado no puede estar vac\xedo",timer:2e3}),!1)}checkPassword(){const e=this.myForm.value.password;return null!=this.myForm.value.password&&this.myForm.value.password.trim()&&e.length>=6?this.myForm.value.password===this.myForm.value.confirmPassword||(m().fire({icon:"error",title:"Las contrase\xf1as deben ser iguales",timer:2e3}),!1):(m().fire({icon:"error",title:"La contrase\xf1a debe tener como m\xednimo 6 caracteres",timer:2e3}),!1)}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(c.M))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-create-employee"]],decls:35,vars:1,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"row","mb-4"],["formControlName","name","type","text",1,"form-control"],["formControlName","email","type","email",1,"form-control"],["formControlName","isABoss",1,"form-select"],["value","false","selected",""],["value","true"],["formControlName","password","type","password",1,"form-control"],["formControlName","confirmPassword","type","password",1,"form-control"],[1,"row","text-center"],["type","submit",1,"btn","btn-warning"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4,"Crear empleado"),a.qZA(),a.qZA(),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"form",6),a.NdJ("ngSubmit",function(){return r.onSubmit()}),a.TgZ(8,"div",7),a.TgZ(9,"p"),a._uU(10,"Introduce el nombre"),a.qZA(),a._UZ(11,"input",8),a.qZA(),a.TgZ(12,"div",7),a.TgZ(13,"p"),a._uU(14,"Introduce el email"),a.qZA(),a._UZ(15,"input",9),a.qZA(),a.TgZ(16,"div",7),a.TgZ(17,"p"),a._uU(18,"Tipo de empleado"),a.qZA(),a.TgZ(19,"select",10),a.TgZ(20,"option",11),a._uU(21,"Normal"),a.qZA(),a.TgZ(22,"option",12),a._uU(23,"Jefe"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(24,"div",7),a.TgZ(25,"p"),a._uU(26,"Introduce contrase\xf1a"),a.qZA(),a._UZ(27,"input",13),a.qZA(),a.TgZ(28,"div",7),a.TgZ(29,"p"),a._uU(30,"Repite la contrase\xf1a"),a.qZA(),a._UZ(31,"input",14),a.qZA(),a.TgZ(32,"div",15),a.TgZ(33,"button",16),a._uU(34,"Crear"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(7),a.Q6J("formGroup",r.myForm))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,i.EJ,i.YN,i.Kr],styles:[""]}),e})()},{path:"deleteEmployee",component:(()=>{class e{constructor(e){this.employeesService=e,this.employees=[],this.myForm=new i.cw({name:new i.NI})}ngOnInit(){this.timerSubscription=this.employeesService.getEmployees().subscribe(e=>{this.employees=e})}ngOnDestroy(){this.timerSubscription.unsubscribe()}onSubmit(){if(null===this.myForm.value.name)return void m().fire({icon:"error",title:"El usuario introducido es incorrecto, por favor int\xe9ntalo de nuevo",showConfirmButton:!1,timer:1500});const e=m().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});e.fire({title:"\xbfEst\xe1s seguro?",text:"Est\xe1s a punto de borrar un empleado",icon:"warning",showCancelButton:!0,confirmButtonText:"Borrar!",cancelButtonText:"Cancelar!",reverseButtons:!0}).then(r=>{r.isConfirmed?this.employeesService.deleteEmployee(this.myForm.value.name).subscribe(r=>{e.fire("Usuario Borrado con \xe9xito",`${this.myForm.value.name}`,"success")}):r.dismiss===m().DismissReason.cancel&&e.fire("Operaci\xf3n cancelada","No se realizar\xe1 ninguna operaci\xf3n","error")})}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(c.M))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-delete-employee"]],decls:16,vars:2,consts:[[1,"row","bg-light","mx-3","rounded","mt-5"],[1,"card"],[1,"card-header"],[1,"text-center"],[1,"card-body","mb-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"row","mb-5"],["formControlName","name",1,"form-select"],["class","text-black",3,"value",4,"ngFor","ngForOf"],[1,"row","text-center"],["type","submit",1,"btn","btn-warning"],[1,"text-black",3,"value"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4,"Eliminar empleado"),a.qZA(),a.qZA(),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"form",6),a.NdJ("ngSubmit",function(){return r.onSubmit()}),a.TgZ(8,"div",7),a.TgZ(9,"p"),a._uU(10,"Introduce el nombre del empleado que quieres eliminar"),a.qZA(),a.TgZ(11,"select",8),a.YNc(12,d,2,2,"option",9),a.qZA(),a.qZA(),a.TgZ(13,"div",10),a.TgZ(14,"button",11),a._uU(15,"Eliminar"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(7),a.Q6J("formGroup",r.myForm),a.xp6(5),a.Q6J("ngForOf",r.employees))},directives:[i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,o.sg,i.YN,i.Kr],styles:[""]}),e})()},{path:"changePassword",component:u},{path:"**",redirectTo:"createEmployee"}]}];let Z=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.Bz.forChild(p)],n.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,i.UX,Z]]}),e})()}}]);