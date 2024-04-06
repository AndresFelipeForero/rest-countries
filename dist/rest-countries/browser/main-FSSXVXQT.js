import{a as We}from"./chunk-6GYLOSPX.js";import{$ as Se,A as l,B as d,C as ee,D as T,E as y,F as be,G as we,H as h,I as xe,J as U,K as te,L as ne,M as ie,N as s,O as a,P as p,Q as re,R as m,S as g,T as Ae,U as Ee,V as Fe,W as c,X as w,Y as Oe,Z as Ie,_ as Pe,a as _,aa as oe,ab as Ue,b as F,ba as C,c as pe,ca as M,d as fe,da as x,e as ge,ea as A,f as me,fa as ke,g as _e,ga as Ne,h as ve,ha as Te,i as ye,ia as se,j as K,ja as H,k as b,l as X,la as Be,m as O,ma as W,n as u,na as je,o as L,p as v,pa as Ge,q as Y,qa as Le,r as I,ra as Re,s as Ce,sb as He,t as k,u as N,v as Me,w as J,x as R,y as Ve,z as De}from"./chunk-OZSW7DMG.js";var Ye=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(J))},e.\u0275dir=I({type:e});let t=e;return t})(),Vt=(()=>{let e=class e extends Ye{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Me(e)))(o||e)}})(),e.\u0275dir=I({type:e,features:[T]});let t=e;return t})(),Je=new O("");var Dt={provide:Je,useExisting:K(()=>Z),multi:!0};function bt(){let t=se()?se().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var wt=new O(""),Z=(()=>{let e=class e extends Ye{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(J),d(wt,8))},e.\u0275dir=I({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(D){return o._handleInput(D.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(D){return o._compositionEnd(D.target.value)})},features:[oe([Dt]),T]});let t=e;return t})();var xt=new O(""),At=new O("");function et(t){return t!=null}function tt(t){return ke(t)?ge(t):t}function nt(t){let e={};return t.forEach(n=>{e=n!=null?_(_({},e),n):e}),Object.keys(e).length===0?null:e}function it(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function rt(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function Ft(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(n){return nt(it(n,e))}}function ot(t){return t!=null?Ft(rt(t)):null}function Ot(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(n){let i=it(n,e).map(tt);return _e(i).pipe(me(nt))}}function st(t){return t!=null?Ot(rt(t)):null}function $e(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function It(t){return t._rawValidators}function Pt(t){return t._rawAsyncValidators}function ae(t){return t?Array.isArray(t)?t:[t]:[]}function q(t,e){return Array.isArray(t)?t.includes(e):t===e}function qe(t,e){let n=ae(e);return ae(t).forEach(r=>{q(n,r)||n.push(r)}),n}function ze(t,e){return ae(e).filter(n=>!q(t,n))}var z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ot(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},le=class extends z{get formDirective(){return null}get path(){return null}},G=class extends z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ce=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Nn=F(_({},St),{"[class.ng-submitted]":"isSubmitted"}),at=(()=>{let e=class e extends ce{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(G,2))},e.\u0275dir=I({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&xe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[T]});let t=e;return t})();var B="VALID",$="INVALID",P="PENDING",j="DISABLED";function kt(t){return(Q(t)?t.validators:t)||null}function Nt(t){return Array.isArray(t)?ot(t):t||null}function Tt(t,e){return(Q(e)?e.asyncValidators:t)||null}function Bt(t){return Array.isArray(t)?st(t):t||null}function Q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ue=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===B}get invalid(){return this.status===$}get pending(){return this.status==P}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(qe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ze(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ze(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=P,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(i=>{i.disable(F(_({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(_({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=B,this._forEachChild(i=>{i.enable(F(_({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(F(_({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===P)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=P,this._hasOwnPendingAsyncValidator=!0;let n=tt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?$:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P)?P:this._anyControlsHaveStatus($)?$:B}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Bt(this._rawAsyncValidators)}};var lt=new O("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function jt(t,e){return[...e.path,t]}function Gt(t,e,n=de){Rt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ut(t,e),Wt(t,e),Ht(t,e),Lt(t,e)}function Ze(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Lt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Rt(t,e){let n=It(t);e.validator!==null?t.setValidators($e(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Pt(t);e.asyncValidator!==null?t.setAsyncValidators($e(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ze(e._rawValidators,r),Ze(e._rawAsyncValidators,r)}function Ut(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ct(t,e)})}function Ht(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ct(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ct(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Wt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function $t(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function qt(t){return Object.getPrototypeOf(t.constructor)===Vt}function zt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Z?n=o:qt(o)?i=o:r=o}),r||i||n||null}function Qe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Zt=class extends ue{constructor(e=null,n,i){super(kt(n),Tt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt={provide:G,useExisting:K(()=>he)},Xe=Promise.resolve(),he=(()=>{let e=class e extends G{constructor(i,r,o,f,D,Mt){super(),this._changeDetectorRef=D,this.callSetDisabledState=Mt,this.control=new Zt,this._registered=!1,this.name="",this.update=new R,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=zt(this,f)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),$t(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Gt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Xe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Te(r);Xe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?jt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(d(le,9),d(xt,10),d(At,10),d(Je,10),d(Ne,8),d(lt,8))},e.\u0275dir=I({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[L.None,"disabled","isDisabled"],model:[L.None,"ngModel","model"],options:[L.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[oe([Qt]),T,Ce]});let t=e;return t})();var Kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Y({type:e}),e.\u0275inj=X({});let t=e;return t})();var ut=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:lt,useValue:i.callSetDisabledState??de}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Y({type:e}),e.\u0275inj=X({imports:[Kt]});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.isLoading$=new pe}show(){this.isLoading$.next(!0)}hide(){this.isLoading$.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var S=(()=>{let e=class e{constructor(){this.themeDark=new fe(!1)}themeToggle(i){this.themeDark.next(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Yt=["customOptions"],Jt=()=>[import("./chunk-UOYBAVSY.js").then(t=>t.RouterLink),je],dt=t=>({"dark-theme":t}),en=t=>({open:t}),tn=t=>({liopen:t}),nn=t=>["/countries",t];function rn(t,e){if(t&1){let n=re();s(0,"li",15),m("click",function(){let r=k(n).$implicit,o=g(2);return N(o.selectContinent(r))}),c(1),a()}if(t&2){let n=e.$implicit,i=g(2);h("ngClass",M(2,tn,i.showOptions)),l(),w(n)}}function on(t,e){if(t&1&&(s(0,"div",17)(1,"div",18),p(2,"img",19),a(),s(3,"div",20)(4,"h2"),c(5),a(),s(6,"div",21)(7,"h3"),c(8,"Population: "),s(9,"span"),c(10),x(11,"number"),a()(),s(12,"h3"),c(13,"Region: "),s(14,"span"),c(15),a()(),s(16,"h3"),c(17,"Capital: "),s(18,"span"),c(19),a()()()()()),t&2){let n=g().$implicit;h("routerLink",M(9,nn,n.cca3)),l(2),h("src",n.flags.png,Ve)("alt",n.flags.alt),l(3),w(n.name.common),l(5),w(A(11,7,n.population)),l(5),w(n.region),l(4),w(n.capital)}}function sn(t,e){t&1&&(s(0,"span"),c(1,"Cargando..."),a())}function an(t,e){t&1&&(y(0,on,20,11)(1,sn,2,0),be(2,0,Jt,null,1),we(0,-1))}function ln(t,e){if(t&1&&(s(0,"div",16),ne(1,an,4,0,null,null,te),a()),t&2){let n=g(2);l(),ie(n.showCountries)}}function cn(t,e){t&1&&(s(0,"div",22)(1,"span"),c(2,"Matches not found"),a()())}function un(t,e){if(t&1){let n=re();s(0,"div",3)(1,"div",4),p(2,"span",5),x(3,"async"),s(4,"input",6),m("keyup",function(){k(n);let r=g();return N(r.countriesFilter())}),Se("ngModelChange",function(r){k(n);let o=g();return Pe(o.inputSearch,r)||(o.inputSearch=r),N(r)}),a()(),s(5,"div",7,0)(7,"div",8),m("click",function(){k(n);let r=g();return N(r.toggleOptions())}),s(8,"div",9),c(9),p(10,"span",10),x(11,"async"),a(),s(12,"ul",11),ne(13,rn,2,4,"li",12,te),a()()(),y(15,ln,3,0,"div",13)(16,cn,3,0,"div",14),a()}if(t&2){let n=g();l(2),h("ngClass",M(11,dt,A(3,7,n.darkTheme$))),l(2),Ie("ngModel",n.inputSearch),l(5),Oe(" ",n.selectedContinent," "),l(),h("ngClass",M(13,dt,A(11,9,n.darkTheme$))),l(2),h("ngClass",M(15,en,n.showOptions)),l(),ie(n.continents),l(2),h("ngIf",n.showCountries.length>0),l(),h("ngIf",n.showCountries.length===0)}}function dn(t,e){if(t&1&&(s(0,"div",23)(1,"span"),c(2),a()()),t&2){let n=g();l(2),w(n.requestError)}}var ht=(()=>{let e=class e{constructor(){this._countriesService=u(We),this._spinnerService=u(V),this._themeService=u(S),this.inputSearch="",this.fields="all?fields=flags,name,capital,region,population,cca3",this.continents=["Africa","America","Asia","Europe","Oceania"],this.selectedContinent="Filter by Region",this.showOptions=!1,this.showCountries=[],this.darkTheme$=this._themeService.themeDark}ngOnInit(){this.suscription$=this._countriesService.getAll(this.fields).subscribe(i=>{this.countriesArray=i,this.showCountries=this.countriesArray},i=>this.requestError=i)}toggleOptions(){this.showOptions=!this.showOptions}selectContinent(i){this.selectedContinent=i,this.showOptions=!0,this.countriesFilter()}closeOptions(i){this.optionsContinents.nativeElement.contains(i.target)||(this.showOptions=!1)}countriesFilter(){this.selectedContinent==="Filter by Region"&&(this.selectedContinent=""),this.showCountries=this.countriesArray.filter(({name:i,region:r})=>i.common.toLowerCase().includes(this.inputSearch.toLowerCase().trim())&&r.toLowerCase().includes(this.selectedContinent.toLowerCase())),this.selectedContinent===""&&(this.selectedContinent="Filter by Region")}ngOnDestroy(){this.suscription$.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-countries"]],viewQuery:function(r,o){if(r&1&&Ae(Yt,5),r&2){let f;Ee(f=Fe())&&(o.optionsContinents=f.first)}},hostBindings:function(r,o){r&1&&m("click",function(D){return o.closeOptions(D)},!1,De)},standalone:!0,features:[C],decls:2,vars:2,consts:[["customOptions",""],["class","container",4,"ngIf"],["class","errorMessage",4,"ngIf"],[1,"container"],[1,"search-container"],[1,"search-icon",3,"ngClass"],["type","text","placeholder","Search for a country...",3,"keyup","ngModelChange","ngModel"],[1,"select-container"],[1,"custom-select",3,"click"],[1,"selected-option"],[1,"select__arrow",3,"ngClass"],[1,"options",3,"ngClass"],[3,"ngClass"],["class","cards-container",4,"ngIf"],["class","not-matches-span",4,"ngIf"],[3,"click","ngClass"],[1,"cards-container"],[1,"card",3,"routerLink"],[1,"card__img--container"],[1,"card__flag",3,"src","alt"],[1,"card__info"],[1,"card__info--properties"],[1,"not-matches-span"],[1,"errorMessage"]],template:function(r,o){r&1&&y(0,un,17,17,"div",1)(1,dn,3,1,"div",2),r&2&&(h("ngIf",!o.requestError),l(),h("ngIf",o.requestError))},dependencies:[H,ut,Z,at,he,Be,W],styles:['@charset "UTF-8";.variables[_ngcontent-%COMP%]{--DarkBlueDarkModeElements: hsl(209, 23%, 22%);--VeryDarkBlueDarkModeBackground: hsl(207, 26%, 17%);--VeryDarkBlueLightModeText: hsl(200, 15%, 8%);--DarkGrayLightModeInput: hsl(0, 0%, 52%);--VeryLightGrayLightModeBackground: hsl(0, 0%, 98%);--WhiteDarkModeTextLightModeElements: hsl(0, 0%, 100%)}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:24px 4.15% 0;gap:20px}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:24px;padding-left:24px;align-items:center;width:100%;height:48px;max-width:344px;box-shadow:0 2px 4px #0000001a;border-radius:4px;background-color:var(--WhiteDarkModeTextLightModeElements)}input[type=text][_ngcontent-%COMP%]{flex-grow:1;outline:none;width:100%;color:var(--VeryDarkBlueLightModeText);background-color:var(--WhiteDarkModeTextLightModeElements)}input[type=text][_ngcontent-%COMP%]::placeholder{color:var(--DarkGrayLightModeInput)}.search-container[_ngcontent-%COMP%]:has(input[type=text]:focus){box-shadow:0 2px 4px #0000004d}.search-icon[_ngcontent-%COMP%]{width:20px;height:20px;background-image:url("./media/icons8-b\xFAsqueda-LJM4QGKY.svg");background-size:cover}.search-icon.dark-theme[_ngcontent-%COMP%]{background-image:url("./media/icons8-b\xFAsqueda-white-BK5MI4RB.svg")}.select-container[_ngcontent-%COMP%]{max-width:200px;width:53.3%}.custom-select[_ngcontent-%COMP%]{height:48px;max-width:200px;width:53.3vw;position:relative;display:inline-block;cursor:pointer;outline:none;color:var(--VeryDarkBlueDarkModeBackground)}.selected-option[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a;display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 24px;border-radius:4px;font-size:12px;font-weight:600;background-color:var(--WhiteDarkModeTextLightModeElements)}.selected-option[_ngcontent-%COMP%]   .select__arrow[_ngcontent-%COMP%]{background-image:url("./media/icons8-flecha-ampliar-30-RVAECATW.png");background-repeat:no-repeat;background-size:contain;height:12px;width:12px}.selected-option[_ngcontent-%COMP%]   .select__arrow.dark-theme[_ngcontent-%COMP%]{background-image:url("./media/icons8-flecha-contraer-white50-XVG7G7IC.png")}.options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;background-color:var(--WhiteDarkModeTextLightModeElements);box-shadow:0 2px 4px #0000001a;list-style:none;margin-top:4px;padding:12px 0;border-radius:4px;display:none}.options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:4px 8px 4px 24px;font-size:12px;font-weight:600;cursor:pointer;color:var(--VeryDarkBlueDarkModeBackground)}.options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--VeryLightGrayLightModeBackground)}.open[_ngcontent-%COMP%]{display:block}.cards-container[_ngcontent-%COMP%]{width:100%;display:grid;justify-items:center;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:40px;margin:12px 0}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:280px;height:337px;border-radius:4px;background-color:var(--WhiteDarkModeTextLightModeElements);overflow:hidden;box-shadow:0 2px 4px #0000001a;cursor:pointer}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__img--container[_ngcontent-%COMP%]{width:100%}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__img--container[_ngcontent-%COMP%]   .card__flag[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center;aspect-ratio:16/9}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__info[_ngcontent-%COMP%]{margin:28px 24px 48px;height:100%;display:flex;flex-direction:column;justify-content:space-between}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--VeryDarkBlueDarkModeBackground);font-size:1.2rem}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__info[_ngcontent-%COMP%]   .card__info--properties[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__info[_ngcontent-%COMP%]   .card__info--properties[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--DarkBlueDarkModeElements);font-size:14px;font-weight:600}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card__info[_ngcontent-%COMP%]   .card__info--properties[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:14px}.not-matches-span[_ngcontent-%COMP%]{text-align:center;width:100%}.not-matches-span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--DarkGrayLightModeInput)}.errorMessage[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:80px;color:var(--DarkGrayLightModeInput)}@media (min-width: 800px){.container[_ngcontent-%COMP%]{padding:48px 5.55% 0;gap:48px}.container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{height:58px}.container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{width:25px}.container[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]{height:58px;transition:box-shadow .4s ease}.container[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]:hover{box-shadow:0 2px 4px #0000004d}.container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{margin-top:14px}.container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]{margin-top:0;margin-bottom:72px;gap:72px}.container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:266px}.container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 4px #0000004d}}']});let t=e;return t})();var pt=[{path:"",redirectTo:"countries",pathMatch:"full"},{path:"countries",component:ht},{path:"countries/:code",loadComponent:()=>import("./chunk-VLYY4XMX.js").then(t=>t.CountriesDetailsComponent)}];var ft=(t,e)=>{let n=u(V);return n.show(),e(t).pipe(ye(()=>{n.hide()}))};var gt=(()=>{let e=class e{constructor(){this.errorMessages={default:"An unknown error occurred",clientSide:"A client-side error occurred",400:"Bad request",401:"Unauthorized",403:"Forbidden",404:"Resource not found",500:"Internal server error",timeout:"Request timeout"}}getErrorMessage(i){return i instanceof Error?this.errorMessages.clientSide:i.status?this.errorMessages[i.status]||this.errorMessages.default:i.name==="TimeoutError"?this.errorMessages.timeout:this.errorMessages.default}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var mt=(t,e)=>{let n=u(gt);return e(t).pipe(ve(i=>{throw n.getErrorMessage(i)}))};var _t={providers:[He(pt),Ge(Le([ft,mt]))]};function hn(t,e){t&1&&p(0,"img",4)}function pn(t,e){t&1&&p(0,"img",6)}var vt=(()=>{let e=class e{constructor(){this._themeService=u(S),this.darkTheme=!1}onClickTheme(){this.darkTheme=!this.darkTheme,this._themeService.themeToggle(this.darkTheme)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-nav"]],standalone:!0,features:[C],decls:9,vars:1,consts:[[1,"nav"],[1,"logo"],[1,"theme",3,"click"],[1,"theme__icon"],["src","../../../assets/images/icons8-dark-24-white.png","alt","moon image",1,"icon__img--dark"],[1,"theme__text"],["src","../../../assets/images/icons8-dark-30.png","alt","moon image",1,"icon__img"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h1",1),c(2,"Where in the world?"),a(),s(3,"div",2),m("click",function(){return o.onClickTheme()}),s(4,"i",3),y(5,hn,1,0,"img",4)(6,pn,1,0),a(),s(7,"span",5),c(8,"Dark Mode"),a()()()),r&2&&(l(5),U(5,o.darkTheme?5:6))},styles:[".variables[_ngcontent-%COMP%]{--DarkBlueDarkModeElements: hsl(209, 23%, 22%);--VeryDarkBlueDarkModeBackground: hsl(207, 26%, 17%);--VeryDarkBlueLightModeText: hsl(200, 15%, 8%);--DarkGrayLightModeInput: hsl(0, 0%, 52%);--VeryLightGrayLightModeBackground: hsl(0, 0%, 98%);--WhiteDarkModeTextLightModeElements: hsl(0, 0%, 100%)}.nav[_ngcontent-%COMP%]{height:80px;width:100%;box-shadow:#43475545 0 0 .25em,#5a7dbc0d 0 .25em 1em;display:flex;justify-content:space-between;padding:0 4.15%;align-items:center;background-color:var(--WhiteDarkModeTextLightModeElements)}.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:.9rem;color:var(--VeryDarkBlueLightModeText)}.nav[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%]{display:flex;gap:8px;cursor:pointer}.nav[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%]   .icon__img[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%]   .icon__img--dark[_ngcontent-%COMP%]{height:1rem;width:1rem}.nav[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%]   .theme__text[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--VeryDarkBlueLightModeText)}@media (min-width: 800px){.nav[_ngcontent-%COMP%]{padding:0 5.55%}.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.5rem}.nav[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%]   .theme__text[_ngcontent-%COMP%]{font-weight:900}}"]});let t=e;return t})();var yt=(()=>{let e=class e{constructor(){this._spinnerService=u(V),this.isLoading$=this._spinnerService.isLoading$}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-spinner"]],standalone:!0,features:[C],decls:2,vars:0,consts:[[1,"overlay"]],template:function(r,o){r&1&&(s(0,"div",0),c(1,` cargando...
`),a())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;display:grid;place-items:center;background-color:#5d5f79b3;height:100vh;width:100%;z-index:20}"]});let t=e;return t})();var fn=t=>({"dark-theme":t});function gn(t,e){t&1&&p(0,"app-spinner")}var Ct=(()=>{let e=class e{constructor(){this.title="rest-countries",this._spinnerService=u(V),this.isLoading$=this._spinnerService.isLoading$,this._themeService=u(S),this.darkTheme=this._themeService.themeDark}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[C],decls:7,vars:8,consts:[[1,"container",3,"ngClass"]],template:function(r,o){r&1&&(s(0,"main",0),x(1,"async"),y(2,gn,1,0,"app-spinner"),x(3,"async"),s(4,"header"),p(5,"app-nav"),a(),p(6,"router-outlet"),a()),r&2&&(h("ngClass",M(6,fn,A(1,2,o.darkTheme))),l(2),U(2,A(3,4,o.isLoading$)?2:-1))},dependencies:[Ue,vt,yt,W,H],styles:[".container[_ngcontent-%COMP%]{min-height:100vh;background-color:var(--VeryLightGrayLightModeBackground)}.variables[_ngcontent-%COMP%]{--DarkBlueDarkModeElements: hsl(209, 23%, 22%);--VeryDarkBlueDarkModeBackground: hsl(207, 26%, 17%);--VeryDarkBlueLightModeText: hsl(200, 15%, 8%);--DarkGrayLightModeInput: hsl(0, 0%, 52%);--VeryLightGrayLightModeBackground: hsl(0, 0%, 98%);--WhiteDarkModeTextLightModeElements: hsl(0, 0%, 100%)}.dark-theme[_ngcontent-%COMP%]{--DarkBlueDarkModeElements: hsl(0, 0%, 98%);--WhiteDarkModeTextLightModeElements: hsl(209, 23%, 22%);--VeryLightGrayLightModeBackground: hsl(207, 26%, 17%);--VeryDarkBlueLightModeText: hsl(0, 0%, 90%);--VeryDarkBlueDarkModeBackground: hsl(0, 0%, 90%);--DarkGrayLightModeInput: hsl(0, 0%, 90%)}"]});let t=e;return t})();Re(Ct,_t).catch(t=>console.error(t));