"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "
+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj)
{var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta
?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if
(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt
=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val){return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh
=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass)
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eX=f;}
function $rt_cls(cls){return Ha(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hq(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.q.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return Hi(t);}
function $rt_throwableCause(t){return Hk(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(HR());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return HS(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var P=$rt_throw;var CB=$rt_compare;var HT=$rt_nullCheck;var N=$rt_cls;var V=$rt_createArray;var HU=$rt_isInstance;var HV=$rt_nativeThread;var HW=$rt_suspending;var HX=$rt_resuming;var HY=$rt_invalidPointer;var C=$rt_s;var Bi=$rt_eraseClinit;var G_=$rt_imul;var GT=$rt_wrapException;var HZ=$rt_checkBounds;var H0=$rt_checkUpperBound;var H1=$rt_checkLowerBound;var H2=$rt_wrapFunction0;var H3=$rt_wrapFunction1;var H4=$rt_wrapFunction2;var H5=$rt_wrapFunction3;var H6=$rt_wrapFunction4;var E=$rt_classWithoutFields;var Hm
=$rt_createArrayFromData;var H7=$rt_createCharArrayFromData;var H8=$rt_createByteArrayFromData;var H9=$rt_createShortArrayFromData;var Hu=$rt_createIntArrayFromData;var H$=$rt_createBooleanArrayFromData;var H_=$rt_createFloatArrayFromData;var Ia=$rt_createDoubleArrayFromData;var GM=$rt_createLongArrayFromData;var Ib=$rt_createBooleanArray;var Ic=$rt_createByteArray;var Id=$rt_createShortArray;var Cf=$rt_createCharArray;var GY=$rt_createIntArray;var HM=$rt_createLongArray;var Ie=$rt_createFloatArray;var If=$rt_createDoubleArray;var CB
=$rt_compare;var Ig=$rt_castToClass;var Ih=$rt_castToInterface;var Hx=Long_toNumber;var F=Long_fromInt;var Ii=Long_fromNumber;var L=Long_create;var BW=Long_ZERO;var Ij=Long_hi;var Gf=Long_lo;
function B(){this.$id$=0;}
function Ik(){var a=new B();DA(a);return a;}
function DA(a){}
function E4(a){return Ha(a.constructor);}
function GF(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=C(0);else{if(!d)f=32;else{g=0;f=d>>>16;if(f)g=16;else f=d;h=f>>>8;if(!h)h=f;else g=g|8;i=h>>>4;if(!i)i=h;else g=g|4;f=i>>>2;if(!f)f=i;else g=g|2;if(f>>>1)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=Cf(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=CN(d>>>j&15,16);j=j-4|0;f=i;}e=Hq(k);}b=X();I(I(b,C(1)),e);return R(b);}
var BT=E();
var Il=null;var Im=null;var In=null;var Io=null;var Ip=null;function Bm(){Bm=Bi(BT);Gk();}
function GL(b){var c,d,e,f,g,h,i,j,k,l;FW();Fg();FM();Fz();FI();Fr();FY();F0();Bm();c=Ex(Il,CM(20));Ca(c,FR(10));d=(BA()).createElement("div");d.classList.add("board");e=new EK;By(e,d);f=Ek(EH(Il),800,800);g=Dt(f);D9(g,400,0,800);BI(g,800,400,780,405);BI(g,800,400,780,395);h=(-19);while(h<20){if(h){i=(h+20|0)*20|0;C6(g,i,397,403);if(!(h%5|0))Ee(g,BV(h),i-7|0,415);}h=h+1|0;}C6(g,400,0,800);BI(g,400,0,405,20);BI(g,400,0,395,20);j=(-19);while(j<20){if(j){D9(g,(j+20|0)*20|0,397,403);if(!(j%5|0))Ee(g,BV(j),405,((20
-j|0)*20|0)+3|0);}j=j+1|0;}BI(g,0,0,800,800);BI(g,0,800,800,0);Bj(e,f);d=In;d.a.style.setProperty("position","absolute");g=d.a.style;k=X();I(T(k,10),C(2));l=R(k);g.setProperty("left",$rt_ustr(l));g=d.a.style;k=X();I(T(k,10),C(2));l=R(k);g.setProperty("top",$rt_ustr(l));Bj(e,d);BB(In,C(3),new Da);BB(Io.bJ,C(3),new C$);Bj(c,e);d=Dc(Il,CM(10));Ca(d,FR(10));f=BD(Il,C(4));BB(f,C(3),new C_);Bj(d,f);g=BD(Il,C(5));BB(g,C(3),new C8);Bj(d,g);Bj(d,Bb(Io.B,0));Bj(c,d);Bb(Ip.by,0);Bb(Ip.bL,1);Bj(d,Bb(Ip.u,0));g=(BA()).createElement("input");f
="range";g.type=f;k=E9(HB(g),(-50),50);l=k.a;f=$rt_ustr(BV(0));l.value=f;l=FN(Bg(Il),CX(0));k.cC=HJ(l);Ct(d,k);Ct(d,l);Ct(C3(Il),c);}
function Cc(){var b,c,d,e,f,g,h,i,j,k,l,m,n;Bm();b=Dt(In);b.c.clearRect(0.0,0.0,800.0,800.0);c=Cp(Ch(Im.O));while(BS(c)){d=CW(c);e=d.L;f=b.c;e=$rt_ustr(Cy(e));f.strokeStyle=e;g=ES(Im,d.w.t);h=ES(Im,d.w.x);i=CO(g.i);j=CO(h.i);BI(b,i.I,i.J,j.I,j.J);}c=Cp(Ch(Im.l));while(BS(c)){f=CW(c);d=f.K;e=b.c;d=$rt_ustr(Cy(d));e.fillStyle=d;e=CO(f.i);k=e.I;l=e.J;b.c.beginPath();h=b.c;m=k;n=l;h.arc(m,n,2.0,0.0,6.283185307179586);b.c.fill();}}
function CO(b){var c,d,e;Bm();c=new Dm;d=b.j*20.0+400.0;e=400.0-b.k*20.0;Fc(c,D4(d),D4(e));return c;}
function EV(b){var c,d;Bm();c=(BA()).createElement("div");c.classList.add("modal-window");d=new BM;By(d,c);Bj(d,b.cA());Bj(C3(Il),d);return d;}
function Gk(){var b;b=new Cx;Hb();Il=b;b=new Eo;b.l=Hh();b.O=Hh();Im=b;In=Ek(EH(Il),800,800);Io=G0(Il);Ip=GW(Il);}
var DZ=E(0);
var Di=E(0);
function En(){B.call(this);this.c0=null;}
function Ha(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new En;c.c0=b;d=c;b.classObject=d;}return c;}
var FQ=E();
function BY(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function CY(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Fp=E();
var BR=E(0);
var BE=E(0);
var Cs=E(0);
function Cg(){var a=this;B.call(a);a.q=null;a.Q=0;}
var Iq=null;function Hq(a){var b=new Cg();FD(b,a);return b;}
function FD(a,b){var c,d,e,f;b=b.data;c=b.length;d=Cf(c);e=d.data;a.q=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function U(a,b){var c,d;if(b>=0){c=a.q.data;if(b<c.length)return c[b];}d=new CA;W(d);P(d);}
function Bp(a){return a.q.data.length;}
function CE(a){return a.q.data.length?0:1;}
function BV(b){return R(T(X(),b));}
function CZ(a,b){var c;if(a===b)return 1;if(!(b instanceof Cg))return 0;if(Bp(b)!=Bp(a))return 0;c=0;while(c<Bp(b)){if(U(a,c)!=U(b,c))return 0;c=c+1|0;}return 1;}
function FX(a){var b,c,d,e;a:{if(!a.Q){b=a.q.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.Q=(31*a.Q|0)+e|0;d=d+1|0;}}}return a.Q;}
function FW(){Iq=new C7;}
function B2(){var a=this;B.call(a);a.co=null;a.c8=null;a.b4=0;a.cr=0;}
function Ir(a){var b=new B2();Bx(b,a);return b;}
function Bx(a,b){a.b4=1;a.cr=1;a.co=b;}
function GH(a){return a;}
function Hi(a){return a.co;}
function Hk(a){var b;b=a.c8;if(b===a)b=null;return b;}
var Cu=E(B2);
var B5=E(Cu);
var E1=E(B5);
var BG=E();
function BZ(){BG.call(this);this.r=0;}
var Is=null;var It=null;function GV(a){var b=new BZ();EY(b,a);return b;}
function EY(a,b){a.r=b;}
function CL(b){return b>>>4^b<<28^b<<8^b>>>24;}
function Bu(b){return (Ew(Hr(20),b,10)).bE();}
function Bw(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(b!==null&&!CE(b)){a:{c=0;d=0;switch(U(b,0)){case 43:d=1;break a;case 45:c=1;d=1;break a;default:}}e=0;if(d==Bp(b)){b=new Ba;W(b);P(b);}b:{c:{while(d<Bp(b)){f=d+1|0;g=U(b,d);if(Iu===null){if(Iv===null)Iv=E3();h=(Iv.value!==null?$rt_str(Iv.value):null);i=new EG;j=h.q.data;k=Cf(j.length);l=k.data;m=0;n=l.length;while(m<n){l[m]=j[m];m=m+1|0;}i.ce=k;d=Fm(i);j=GY(d*2|0);k=j.data;m=0;n=0;o=0;p=0;while(p<d){n=n+Fw(i)|0;o=o+Fw(i)|0;q=m+1|0;k[m]=n;m=q+1|0;k[q]=o;p=p
+1|0;}Iu=j;}j=Iu.data;m=0;n=(j.length/2|0)-1|0;d:{while(n>=m){o=(m+n|0)/2|0;d=o*2|0;p=CB(g,j[d]);if(p>0)m=o+1|0;else{if(p>=0){m=j[d+1|0];break d;}n=o-1|0;}}m=(-1);}if(m<0){h=new Ba;i=X();I(I(i,C(6)),b);Bx(h,R(i));P(h);}if(m>=10){h=new Ba;i=X();I(I(T(I(i,C(7)),10),C(8)),b);Bx(h,R(i));P(h);}e=(10*e|0)+m|0;if(e<0){if(f!=Bp(b))break b;if(e!=(-2147483648))break b;if(!c)break b;e=(-2147483648);break c;}d=f;}if(c)e= -e|0;}return e;}h=new Ba;i=X();I(I(i,C(9)),b);Bx(h,R(i));P(h);}b=new Ba;Bx(b,C(10));P(b);}
function CX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(It===null){It=V(BZ,256);c=0;while(true){d=It.data;if(c>=d.length)break a;d[c]=GV(c-128|0);c=c+1|0;}}}return It.data[b+128|0];}return GV(b);}
function Gm(a){return CL(a.r);}
function GQ(a,b){if(a===b)return 1;return b instanceof BZ&&b.r==a.r?1:0;}
function Fg(){Is=N($rt_intcls());}
function CR(){var a=this;B.call(a);a.b=null;a.h=0;}
function Hr(a){var b=new CR();FE(b,a);return b;}
function FE(a,b){a.b=Cf(b);}
function Ew(a,b,c){return Fh(a,a.h,b,c);}
function Fh(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bv(a,b,b+1|0);else{Bv(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CN(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=G_(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bv(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=CN($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function F6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=CB(c,0.0);if(!d){Bv(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Bv(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bv(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bv(a,b,b+8|0);d=b;}else{Bv(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Iw;Fl(c,f);g=f.bc;h=f.Z;i=f.cs;j=1;k=1;if(i)k=2;l=18;m=Gu(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Cv(l,j+1|0);h=0;}else{g=Bq(g,Ix.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bv(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}n=L(1569325056, 23283064);o=0;while(o<l){if(Cn(n,BW))d=0;else{d=Gf(Bq(g,n));g=DC(g,
n);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Bq(n,F(10));o=o+1|0;}if(h){e=a.b.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function Gu(b){var c,d,e,f,g;c=F(1);d=0;e=16;f=Iy.data;g=f.length-1|0;while(g>=0){if(B$(DC(b,J(c,f[g])),BW)){d=d|e;c=J(c,f[g]);}e=e>>>1;g=g+(-1)|0;}return d;}
function De(a,b){var c,d,e,f,g;c=a.b.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Cv(b,Cv(c*2|0,5));e=a.b.data;f=Cf(d);g=f.data;b=FK(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.b=f;}
function R(a){var b,c,d,e,f,g;b=new Cg;c=a.b;d=a.h;e=Cf(d);f=e.data;b.q=e;g=0;while(g<d){f[g]=c.data[g+0|0];g=g+1|0;}return b;}
function Bv(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;a.b9((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var EX=E(0);
var Fe=E(CR);
function X(){var a=new Fe();GE(a);return a;}
function GE(a){FE(a,16);}
function I(a,b){var c,d,e,f;c=a.h;if(b===null)b=C(11);if(c>=0&&c<=c){if(!CE(b)){De(a,a.h+Bp(b)|0);d=a.h-1|0;while(d>=c){a.b.data[d+Bp(b)|0]=a.b.data[d];d=d+(-1)|0;}a.h=a.h+Bp(b)|0;d=0;while(d<Bp(b)){e=a.b.data;f=c+1|0;e[c]=U(b,d);d=d+1|0;c=f;}}return a;}b=new CA;Fs(b);P(b);}
function T(a,b){Ew(a,b,10);return a;}
function Bt(a,b){var c;c=a.h;Bv(a,c,c+1|0);a.b.data[c]=b;return a;}
function Gw(a){return R(a);}
function G8(a,b){De(a,b);}
var B4=E(B5);
var F4=E(B4);
function Iz(a){var b=new F4();GJ(b,a);return b;}
function GJ(a,b){Bx(a,b);}
var FO=E(B4);
function IA(a){var b=new FO();GU(b,a);return b;}
function GU(a,b){Bx(a,b);}
var B0=E(B2);
var Bl=E(B0);
function IB(){var a=new Bl();W(a);return a;}
function HS(a){var b=new Bl();Gb(b,a);return b;}
function W(a){a.b4=1;a.cr=1;}
function Gb(a,b){Bx(a,b);}
function Cr(){var a=this;B.call(a);a.bu=0;a.ci=null;a.bx=null;a.bX=0;}
var IC=null;function FT(){FT=Bi(Cr);G6();}
function CM(b){var c,d,e;FT();c=new Cr;d=null;e=null;c.bu=b;c.ci=d;c.bx=e;c.bX=0;return c;}
function G6(){IC=CM(0);}
var Bf=E();
function Fk(){var a=this;Bf.call(a);a.bK=0;a.cF=null;a.ba=0;}
function Hc(a,b,c){var d=new Fk();Hg(d,a,b,c);return d;}
function Hg(a,b,c,d){a.bK=b;a.cF=c;a.ba=d;}
function F8(b){return Hc(0,b,0);}
function FR(b){return Hc(0,null,b);}
var Bc=E(0);
var Da=E();
function Hl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Bm();c=Hn(b.bB.offsetX,b.bB.offsetY);b=Fx(0.05*(c.I-400|0),0.05*(400-c.J|0));c=Ch(Im.l);d=new ET;e=new DO;e.cj=c;d.ct=e;c=new EA;c.b6=b;e=new Dq;e.ca=d;e.bR=c;c=new DK;while(c.bs===null){d=e.ca;f=new C2;DA(f);f.cc=e;f.cd=c;g=new Dx;DA(g);g.cD=f;a:{while(true){f=d.ct;FZ(f);if(!BS(f.T))h=0;else{FU(g,CW(f.T));h=1;}if(!h){h=0;break a;}if(g.ch)continue;else break;}h=1;}if(!h)break;}c=Es(c.bs);if(Ea(c)){EB(Io,DW(c));Bb(Io.B,1);Bb(Ip.u,0);}else{Bb(Io.B,0);c=Im;d
=Dh(Eu(c.l));b:{while(BS(d)){e=DP(d);g=Dh(Eu(c.l));while(BS(g)){f=DP(g);i=e.N.r;h=f.N.r;if(i>=h)continue;j=EQ(c.O,FC(i,h));k=e.o.i;l=f.o.i;f=EJ(k,b);k=EJ(l,b);m=Df(f);n=Df(k);if(m>=0.3&&n>=0.3){o=f.j;p=k.k;q=o*p;r=k.j;s=f.k;q=(q-r*s)/m/n;if(q<=0.0)q= -q;h=q>0.05?0:o*r+s*p>0.0?0:1;}else h=0;if(h){b=FL(j);break b;}}}b=Fu();}if(!Ea(b))Bb(Ip.u,0);else{Bb(Ip.u,1);c=Ip;b=DW(b);Cq(Bs(c.Y,Bu(b.w.t)),1);Cq(Bs(c.bj,Bu(b.w.x)),1);e=b.L;if(e!==null){Bs(c.bo,Bu(e.z));Bs(c.bd,Bu(b.L.D));Bs(c.bf,Bu(b.L.C));}}}}
var C$=E();
function Gq(a,b){Bm();b=EL(Io);if(b!==null){DB(Im,b);Cc();}}
var C_=E();
function GS(a,b){var c,d,e;Bm();b=G0(Il);c=new ER;c.V=Im.bt;EB(b,c);Bb(b.bH,1);c=EV(b);d=b.bH;e=new DE;e.bU=c;BB(d,C(3),e);d=b.bJ;e=new DF;e.b0=b;e.b1=c;BB(d,C(3),e);}
var C8=E();
function GA(a,b){var c,d,e;Bm();b=GW(Il);Bb(b.bI,1);c=EV(b);d=b.bI;e=new Dp;e.cf=c;BB(d,C(3),e);d=b.by;e=new Do;e.bN=b;e.bO=c;BB(d,C(3),e);}
var Dz=E(0);
function E2(){B.call(this);this.b8=null;}
function HJ(a){var b=new E2();He(b,a);return b;}
function He(a,b){a.b8=b;}
var F2=E();
var C0=E(0);
function Bd(a){FT();return Ex(a,IC);}
function EI(a){FT();return Dc(a,IC);}
var Cx=E();
var ID=null;function Hb(){Hb=Bi(Cx);Gx();}
function C3(a){Hb();return ID;}
function EO(a,b,c){var d,e,f,g,h;d=(BA()).createElement("div");e=d.classList;f=!b?C(12):C(13);e.add($rt_ustr(f));if(c.bx!==null){f=d.classList;e=((HH(c.bx)).eF(95,45)).dN();f.add($rt_ustr(e));}f=c.ci;GP();if(f===IE)d.classList.add("max-distance");else if(f===IF)d.classList.add("split-distance");else if(c.bu){f=d.style;b=c.bu;g=X();I(T(g,b),C(2));h=R(g);f.setProperty("gap",$rt_ustr(h));}if(c.bX)d.classList.add("stretch");c=new BM;By(c,d);return c;}
function Ex(a,b){return EO(a,1,b);}
function Dc(a,b){return EO(a,0,b);}
function Bg(a){var b;b=new EN;By(b,(BA()).createElement("span"));CJ(b);return b;}
function EH(a){var b,c;b=(BA()).createElement("canvas");c=new Eq;By(c,b);return c;}
function BD(a,b){var c,d;c=(BA()).createElement("input");d="button";c.type=d;c.classList.add("text-button");b=$rt_ustr(b);c.value=b;b=new Dw;By(b,c);return b;}
function Bo(a){var b,c;b=(BA()).createElement("input");c="text";b.type=c;b.classList.add("text-input");c=new Er;By(c,b);return c;}
function Gx(){var b;b=new BM;By(b,(BA()).body);ID=b;}
function Eo(){var a=this;B.call(a);a.l=null;a.O=null;a.b2=0.0;a.bt=0;}
function DB(a,b){if(D$(a.l,CX(b.V),b)===null)a.bt=a.bt+1|0;}
function ES(a,b){return EQ(a.l,CX(b));}
function GD(b,c){var d,e,f,g,h,i;d=c.i;e=E6(b);f=(e+1.0/e)/2.0;e=E6(b);b=(e-1.0/e)/2.0;g=new EU;e=d.k;h=e*b;i=d.j;E5(g,h+i*f,e*f+i*b);c.i=g;}
var Co=E(0);
function FG(){var a=this;B.call(a);a.B=null;a.bn=null;a.bh=null;a.bi=null;a.bg=null;a.bl=null;a.bk=null;a.bJ=null;a.bH=null;}
function G0(a){var b=new FG();GN(b,a);return b;}
function GN(a,b){var c,d,e,f,g,h,i;c=EI(b);d=V(K,7);e=d.data;f=Bd(b);g=V(K,2);h=g.data;i=Cq(Bo(b),1);a.bn=i;h[0]=i;h[1]=Bh(Bg(b),C(14));e[0]=Z(f,g);i=Bd(b);g=V(K,2);h=g.data;f=Bo(b);a.bh=f;h[0]=f;h[1]=Bh(Bg(b),C(15));e[1]=Z(i,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bi=i;h[0]=i;h[1]=Bh(Bg(b),C(16));e[2]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bg=i;h[0]=i;h[1]=Bh(Bg(b),C(17));e[3]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bl=i;h[0]=i;h[1]=Bh(Bg(b),C(18));e[4]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bk=i;h[0]
=i;h[1]=Bh(Bg(b),C(19));e[5]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=BD(b,C(20));a.bJ=i;h[0]=i;b=BD(b,C(21));a.bH=b;h[1]=Bb(b,0);e[6]=Z(f,g);a.B=Ca(Z(c,d),F8(BN(IG)));}
function EB(a,b){var c;Bs(a.bn,Bu(b.V));c=b.i;if(c!==null){Bs(a.bh,Cz(c.j));Bs(a.bi,Cz(b.i.k));}c=b.K;if(c!==null){Bs(a.bg,Bu(c.z));Bs(a.bl,Bu(b.K.D));Bs(a.bk,Bu(b.K.C));}}
function EL(a){var b,$$je;a:{try{b=Ff(FH(Fj(Hp(),Bw(Bn(a.bn))),Fx(DS(Bn(a.bh)),DS(Bn(a.bi)))),Y(Bw(Bn(a.bg)),Bw(Bn(a.bl)),Bw(Bn(a.bk))));}catch($$e){$$je=GT($$e);if($$je instanceof B0){break a;}else{throw $$e;}}return b;}return null;}
function GI(a){return a.B;}
function E8(){var a=this;B.call(a);a.u=null;a.Y=null;a.bj=null;a.bo=null;a.bd=null;a.bf=null;a.by=null;a.bI=null;a.bL=null;}
function GW(a){var b=new E8();GB(b,a);return b;}
function GB(a,b){var c,d,e,f,g,h,i,j;c=EI(b);d=V(K,6);e=d.data;f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.Y=i;h[0]=i;h[1]=Bh(Bg(b),C(22));e[0]=Z(f,g);j=Bd(b);h=V(K,2);g=h.data;f=Bo(b);a.bj=f;g[0]=f;g[1]=Bh(Bg(b),C(23));e[1]=Z(j,h);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bo=i;h[0]=i;h[1]=Bh(Bg(b),C(17));e[2]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bd=i;h[0]=i;h[1]=Bh(Bg(b),C(18));e[3]=Z(f,g);f=Bd(b);g=V(K,2);h=g.data;i=Bo(b);a.bf=i;h[0]=i;h[1]=Bh(Bg(b),C(19));e[4]=Z(f,g);f=Bd(b);g=V(K,3);h=g.data;i=BD(b,C(20));a.by=
i;h[0]=i;i=BD(b,C(21));a.bI=i;h[1]=Bb(i,0);b=BD(b,C(24));a.bL=b;h[2]=Bb(b,0);e[5]=Z(f,g);a.u=Ca(Z(c,d),F8(BN(IH)));}
function Gn(a){return a.u;}
var DL=E(0);
var C7=E();
var BP=E();
var II=null;var Iu=null;var IJ=null;var Iv=null;function CN(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FM(){II=N($rt_charcls());IJ=V(BP,128);}
function E3(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DG=E(0);
function CI(){B.call(this);this.bp=null;}
var CS=E(0);
function Fv(){var a=this;CI.call(a);a.y=0;a.f=null;a.n=0;a.cv=0.0;a.bm=0;}
function Hh(){var a=new Fv();Gc(a);return a;}
function Gc(a){var b;b=Fa(16);a.y=0;a.f=V(Cb,b);a.cv=0.75;D6(a);}
function Fa(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function D6(a){a.bm=a.f.data.length*a.cv|0;}
function Eu(a){var b;b=new D7;b.cq=a;return b;}
function EQ(a,b){var c,d;if(b===null)c=EM(a);else{d=b.R();c=D5(a,b,d&(a.f.data.length-1|0),d);}if(c===null)return null;return c.o;}
function D5(a,b,c,d){var e,f;e=a.f.data[c];while(e!==null){if(e.bw==d){f=e.N;if(b!==f&&!b.bG(f)?0:1)break;}e=e.p;}return e;}
function EM(a){var b;b=a.f.data[0];while(b!==null&&b.N!==null){b=b.p;}return b;}
function D$(a,b,c){var d,e,f;if(b===null){d=EM(a);if(d===null){a.n=a.n+1|0;d=DV(a,null,0,0);e=a.y+1|0;a.y=e;if(e>a.bm)Ep(a);}}else{e=b.R();f=e&(a.f.data.length-1|0);d=D5(a,b,f,e);if(d===null){a.n=a.n+1|0;d=DV(a,b,f,e);e=a.y+1|0;a.y=e;if(e>a.bm)Ep(a);}}b=d.o;d.o=c;return b;}
function DV(a,b,c,d){var e,f,g;e=new Cb;f=null;e.N=b;e.o=f;e.bw=d;g=a.f.data;e.p=g[c];g[c]=e;return e;}
function Ep(a){var b,c,d,e,f,g,h,i;b=a.f.data.length;b=Fa(!b?1:b<<1);c=V(Cb,b);d=c.data;e=0;f=b-1|0;while(true){g=a.f.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bw&f;i=h.p;h.p=d[b];d[b]=h;h=i;}e=e+1|0;}a.f=c;D6(a);}
function Ch(a){var b;if(a.bp===null){b=new Ev;b.G=a;a.bp=b;}return a.bp;}
var K=E(0);
var O=E(0);
var IK=null;var IL=null;var IM=null;var IN=null;var IO=null;var IP=null;var IQ=null;var IG=null;var IR=null;var IS=null;var IT=null;var IU=null;var IV=null;var IW=null;var IH=null;var IX=null;var IY=null;var IZ=null;var I0=null;var I1=null;function Fz(){IK=Y(247,222,123);IL=DI(0,0,0,0.0);IM=DI(128,128,128,0.5);IN=Y(128,128,128);IO=Y(255,255,255);IP=Y(0,0,0);IQ=Y(255,75,125);IG=Y(203,24,24);IR=Y(222,181,148);IS=Y(214,99,0);IT=Y(79,145,153);IU=Y(178,107,123);IV=Y(255,0,0);IW=Y(0,0,255);IH=Y(0,128,0);IX=Y(255,
165,0);IY=DI(149,69,53,0.25);IZ=DI(149,69,53,0.5);I0=Y(255,255,221);I1=Y(136,136,102);}
function BU(){var a=this;Bf.call(a);a.cm=null;a.cx=null;a.cn=0;a.br=0;}
var I2=null;var I3=null;var I4=null;var I5=null;var I6=null;function Gi(){Gi=Bi(BU);G4();}
function Go(a,b,c,d){var e=new BU();Fb(e,a,b,c,d);return e;}
function Fb(a,b,c,d,e){Gi();a.cm=b;a.cx=c;a.cn=d;a.br=e;}
function BN(b){Gi();return Go(b,C(25),1,0);}
function G4(){I2=BN(IP);I3=BN(IL);I4=BN(IM);I5=BN(IK);I6=Go(IN,C(26),1,0);}
function Be(){B.call(this);this.a=null;}
function I7(a){var b=new Be();By(b,a);return b;}
function By(a,b){a.a=b;}
function Gd(a){return a.a;}
function B9(a){var b;b=a.a;if(b.parentNode!==null)b.parentNode.removeChild(b);}
function Bb(a,b){if(b)a.a.style.removeProperty("display");else a.a.style.setProperty("display","none");return a;}
function Ca(a,b){var c,d,e,f,g;if(b.bK){c=a.a.style;d=b.bK;e=X();I(T(e,d),C(2));f=R(e);c.setProperty("margin",$rt_ustr(f));}g=Es(b.cF);f=new Du;f.bT=a;El(g,f);if(b.ba){f=a.a.style;d=b.ba;b=X();I(T(b,d),C(2));c=R(b);f.setProperty("padding",$rt_ustr(c));}return a;}
function BB(a,b,c){var d,e,f;a:{d=(-1);switch(FX(b)){case -934437708:if(!CZ(b,C(27)))break a;d=2;break a;case 94750088:if(!CZ(b,C(3)))break a;d=1;break a;case 1252611035:if(!CZ(b,C(28)))break a;d=0;break a;default:}}switch(d){case 0:b=a.a;e=new Ei;e.bZ=c;b.addEventListener("mousemove",BY(e,"handleEvent"));b=a.a;e=new Eh;e.bM=c;b.addEventListener("mouseover",BY(e,"handleEvent"));b=a.a;f=new Eg;f.bV=c;b.addEventListener("mouseout",BY(f,"handleEvent"));return a;case 1:b=a.a;f=new Ec;f.cb=c;b.addEventListener("click",
BY(f,"handleEvent"));return a;case 2:b=a.a;f=new Eb;f.b3=c;b.addEventListener("resize",BY(f,"handleEvent"));return a;default:}c=new BQ;Bx(c,b);P(c);}
var CQ=E(0);
function Z(a,b){var c,d;b=b.data;c=b.length;d=0;while(d<c){Bj(a,b[d]);d=d+1|0;}return a;}
var BM=E(Be);
function Bj(a,b){var c,d;c=a.a;d=b.a;c.appendChild(d);return a;}
function Ct(a,b){return Bj(a,b);}
var BJ=E(0);
var C4=E(0);
var Dg=E(0);
var Bz=E(0);
var FA=E(0);
function BA(){return $rt_globals.window.document;}
var EP=E(0);
var DD=E(0);
var Dn=E(0);
var Ey=E(0);
var Dv=E(0);
var D3=E(0);
var DQ=E(0);
var Ed=E(0);
var FS=E();
function Ga(a,b,c){a.et($rt_str(b),CY(c,"handleEvent"));}
function Gp(a,b,c){a.d7($rt_str(b),CY(c,"handleEvent"));}
function Hd(a,b){return a.em(b);}
function Hj(a,b,c,d){a.eH($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function F_(a,b){return !!a.eB(b);}
function GO(a){return a.d5();}
function Gr(a,b,c,d){a.eI($rt_str(b),CY(c,"handleEvent"),d?1:0);}
function E_(){var a=this;Bf.call(a);a.z=0;a.D=0;a.C=0;a.bY=0.0;}
function Y(a,b,c){var d=new E_();G$(d,a,b,c);return d;}
function DI(a,b,c,d){var e=new E_();Fn(e,a,b,c,d);return e;}
function G$(a,b,c,d){Fn(a,b,c,d,1.0);}
function Fn(a,b,c,d,e){a.z=b;a.D=c;a.C=d;a.bY=e;}
var BQ=E(Bl);
var D2=E(0);
var EK=E(BM);
var Dr=E(0);
var Dw=E(Be);
var D_=E(0);
function E7(){Be.call(this);this.cC=null;}
function HB(a){var b=new E7();Gv(b,a);return b;}
function Gv(a,b){var c;By(a,b);c=new DH;c.cp=a;b.addEventListener("input",BY(c,"handleEvent"));}
function E9(a,b,c){var d,e;d=a.a;e=BV(b);d.setAttribute("min",$rt_ustr(e));d=a.a;e=BV(c);d.setAttribute("max",$rt_ustr(e));return a;}
var DJ=E(0);
function EN(){var a=this;Be.call(a);a.cw=null;a.cN=null;}
function Bh(a,b){return b!==null?DN(a,b):CJ(a);}
function FN(a,b){return b===null?CJ(a):DN(a,Bu(b.r));}
function CJ(a){var b,c;a.a.style.setProperty("color","transparent");b=a.a;c="Plh";b.innerHTML=c;return a;}
function DN(a,b){var c,d;a.cN=b;if(a.cw===null)a.a.style.removeProperty("color");else{c=a.a.style;d=Cy(a.cw);c.setProperty("color",$rt_ustr(d));}d=a.a;b=$rt_ustr(b);d.innerHTML=b;return a;}
var CD=E(Bl);
function I8(){var a=new CD();Fs(a);return a;}
function Fs(a){W(a);}
var CA=E(CD);
var Db=E(0);
var Eq=E(Be);
function Dt(a){var b;b=new DT;b.c=a.a.getContext("2d");return b;}
function Ek(a,b,c){var d,e;d=a.a;e=b;d.width=e;d=a.a;e=c;d.height=e;return a;}
var Em=E(0);
var Er=E(Be);
function Cq(a,b){var c,d;c=a.a;d=!!b;c.disabled=d;return a;}
function Bs(a,b){var c;c=a.a;b=$rt_ustr(b);c.value=b;return a;}
function Bn(a){return $rt_str(a.a.value);}
var C9=E(0);
function CH(){var a=this;B.call(a);a.N=null;a.o=null;}
function Cb(){var a=this;CH.call(a);a.bw=0;a.p=null;}
function B3(){var a=this;B.call(a);a.cL=null;a.cQ=0;}
function EW(a,b,c){a.cL=b;a.cQ=c;}
var B1=E(B3);
var IE=null;var IF=null;var I9=null;function GP(){GP=Bi(B1);G2();}
function G1(a,b){var c=new B1();Fd(c,a,b);return c;}
function Fd(a,b,c){GP();EW(a,b,c);}
function G2(){var b;IE=G1(C(29),0);b=G1(C(30),1);IF=b;I9=Hm(B1,[IE,b]);}
var BF=E(0);
function DH(){B.call(this);this.cp=null;}
function Gt(a,b){var c,d;b=a.cp;c=Bw($rt_str(b.a.value));b=Es(b.cC);d=new D8;d.bQ=c;El(b,d);}
function Ei(){B.call(this);this.bZ=null;}
function G7(a,b){var c,d;c=a.bZ;d=new B8;CP();Ce(d,I$,b);c.d(d);}
function Eh(){B.call(this);this.bM=null;}
function F$(a,b){var c,d;c=a.bM;d=new B8;CP();Ce(d,I_,b);c.d(d);}
function Eg(){B.call(this);this.bV=null;}
function G5(a,b){var c,d;c=a.bV;d=new B8;CP();Ce(d,Ja,b);c.d(d);}
function Ec(){B.call(this);this.cb=null;}
function Gy(a,b){var c,d;c=a.cb;d=new B8;CP();Ce(d,Jb,b);c.d(d);}
function Eb(){B.call(this);this.b3=null;}
function GK(a,b){a.b3.d(null);}
function CT(){B.call(this);this.W=null;}
var Jc=null;function HQ(a){var b=new CT();FJ(b,a);return b;}
function FJ(a,b){a.W=b;}
function Fu(){if(Jc===null)Jc=HQ(null);return Jc;}
function FL(b){var c;c=new CT;if(b!==null){FJ(c,b);return c;}b=new Ds;Bx(b,C(31));P(b);}
function Es(b){return b===null?Fu():FL(b);}
function DW(a){var b;b=a.W;if(b!==null)return b;b=new CV;W(b);P(b);}
function Ea(a){return a.W===null?0:1;}
function El(a,b){var c;c=a.W;if(c!==null)b.d(c);}
function Du(){B.call(this);this.bT=null;}
function Gz(a,b){var c,d,e,f,g,h,i;b=b;c=a.bT;d=c.a.style;e=b.cn;f=b.cx;g=Cy(b.cm);h=X();I(Bt(I(I(T(h,e),C(32)),f),32),g);h=R(h);d.setProperty("border",$rt_ustr(h));if(b.br){i=c.a.style;e=b.br;b=X();I(T(b,e),C(2));g=R(b);i.setProperty("border-radius",$rt_ustr(g));}}
var Fy=E(0);
function Cy(b){var c,d,e,f,g,h,i,j;c=b.bY;if(c!==1.0){d=D4(c*1000.0);if(d!=1000){e=b.z;f=b.D;g=b.C;h=d/1000|0;d=d%1000|0;if(d<10){i=X();T(I(i,C(33)),d);b=R(i);}else if(d>=100)b=BV(d);else{b=X();T(Bt(b,48),d);b=R(b);}i=X();I(Bt(T(i,h),46),b);j=R(i);b=X();Bt(I(Bt(T(Bt(T(Bt(T(I(b,C(34)),e),44),f),44),g),44),j),41);return R(b);}}f=b.z;d=b.D;e=b.C;b=X();Bt(T(Bt(T(Bt(T(I(b,C(35)),f),44),d),44),e),41);return R(b);}
function D4(b){var c;c=CB(b,0.0);return b+(c>0?1.0:c>=0?b:(-1.0))*0.5|0;}
var FB=E();
function D8(){B.call(this);this.bQ=0;}
function GG(a,b){var c,d,e,f,g,h,i,j;a:{b=b;c=a.bQ;b=b.b8;Bm();d=0.1*c;Bh(b,Cz(d));b=Im;e=b.b2-d;f=Ch(b.l);g=f.G;if(g.y>0){h=g.n;i=0;while(true){j=f.G.f.data;if(i>=j.length)break a;g=j[i];while(g!==null){GD(e,g.o);g=g.p;if(h!=f.G.n){b=new CK;W(b);P(b);}}i=i+1|0;}}}b.b2=d;Cc();}
var E$=E();
function E6(b){return Math.exp(b);}
function G3(b){return Math.sqrt(b);}
function FK(b,c){if(b<c)c=b;return c;}
function Cv(b,c){if(b>c)c=b;return c;}
function FV(b,c){return G3(b*b+c*c);}
var Ds=E(Bl);
var Ba=E(BQ);
var F1=E();
var Fo=E();
function EG(){var a=this;B.call(a);a.ce=null;a.cg=0;}
var F3=E();
function Fm(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.ce.data;f=b.cg;b.cg=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+G_(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Fw(b){var c,d;c=Fm(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Ez=E(0);
function DT(){B.call(this);this.c=null;}
function BI(a,b,c,d,e){var f,g,h,i;a.c.beginPath();f=a.c;g=b;h=c;f.moveTo(g,h);i=a.c;g=d;h=e;i.lineTo(g,h);a.c.stroke();}
function D9(a,b,c,d){var e,f,g;a.c.beginPath();e=a.c;f=c;g=b;e.moveTo(f,g);e=a.c;f=d;e.lineTo(f,g);a.c.stroke();}
function C6(a,b,c,d){var e,f,g,h;a.c.beginPath();e=a.c;f=b;g=c;e.moveTo(f,g);h=a.c;g=d;h.lineTo(f,g);a.c.stroke();}
function Ee(a,b,c,d){var e,f,g;e=a.c;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
var DX=E(0);
function B8(){var a=this;B.call(a);a.c2=null;a.bB=null;}
function Jd(a,b){var c=new B8();Ce(c,a,b);return c;}
function Ce(a,b,c){a.c2=b;a.bB=c;}
var BC=E(B3);
var I_=null;var Ja=null;var I$=null;var Jb=null;var Je=null;function CP(){CP=Bi(BC);Gl();}
function Dj(a,b){var c=new BC();EZ(c,a,b);return c;}
function EZ(a,b,c){CP();EW(a,b,c);}
function Gl(){var b;I_=Dj(C(36),0);Ja=Dj(C(37),1);I$=Dj(C(38),2);b=Dj(C(39),3);Jb=b;Je=Hm(BC,[I_,Ja,I$,b]);}
var F7=E();
function ER(){var a=this;B.call(a);a.V=0;a.K=null;a.i=null;}
function Hp(){var a=new ER();GC(a);return a;}
function Fj(a,b){a.V=b;return a;}
function Ff(a,b){a.K=b;return a;}
function FH(a,b){a.i=b;return a;}
function GC(a){}
function DE(){B.call(this);this.bU=null;}
function Gg(a,b){b=a.bU;Bm();B9(b);}
function DF(){var a=this;B.call(a);a.b0=null;a.b1=null;}
function Gh(a,b){var c;b=a.b0;c=a.b1;Bm();b=EL(b);if(b!==null){B9(c);DB(Im,b);Cc();}}
function Dp(){B.call(this);this.cf=null;}
function GR(a,b){b=a.cf;Bm();B9(b);}
function Do(){var a=this;B.call(a);a.bN=null;a.bO=null;}
function G9(a,b){var c,$$je;b=a.bN;c=a.bO;Bm();a:{try{b=E0(HG(FC(Bw(Bn(b.Y)),Bw(Bn(b.bj)))),Y(Bw(Bn(b.bo)),Bw(Bn(b.bd)),Bw(Bn(b.bf))));break a;}catch($$e){$$je=GT($$e);if($$je instanceof B0){}else{throw $$e;}}b=null;}if(b!==null){B9(c);D$(Im.O,b.w,b);Cc();}}
function Fq(){var a=this;B.call(a);a.w=null;a.L=null;}
function HG(a){var b=new Fq();GZ(b,a);return b;}
function GZ(a,b){a.w=b;}
function E0(a,b){a.L=b;return a;}
function Dm(){var a=this;Bf.call(a);a.I=0;a.J=0;}
function Hn(a,b){var c=new Dm();Fc(c,a,b);return c;}
function Fc(a,b,c){a.I=b;a.J=c;}
function Ck(){var a=this;Bf.call(a);a.t=0;a.x=0;}
function FC(b,c){var d,e;if(b==c){d=new BQ;W(d);P(d);}d=new Ck;e=FK(b,c);b=Cv(b,c);d.t=e;d.x=b;return d;}
function Gj(a){return ((31+CL(a.t)|0)*31|0)+CL(a.x)|0;}
function Hf(a,b){var c;if(a===b)c=1;else if(b!==null&&E4(b)===N(Ck)){b=b;c=a.t!=b.t?0:a.x==b.x?1:0;}else c=0;return c;}
function EU(){var a=this;Bf.call(a);a.j=0.0;a.k=0.0;}
function Fx(a,b){var c=new EU();E5(c,a,b);return c;}
function E5(a,b,c){a.j=b;a.k=c;}
function EJ(a,b){return Fx(a.j-b.j,a.k-b.k);}
function Df(a){return FV(a.j,a.k);}
var Cl=E(BG);
var Jf=0.0;var Jg=null;function Cz(b){var c;c=X();F6(c,c.h,b);return R(c);}
function DS(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;if(CE(b)){b=new Ba;W(b);P(b);}c=0;d=Bp(b);while(true){if(U(b,c)>32){while(U(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(U(b,c)==45){c=c+1|0;e=1;}else if(U(b,c)==43)c=c+1|0;if(c==d){b=new Ba;W(b);P(b);}a:{f=U(b,c);g=BW;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(U(b,c)!=48)break b;c=c+1|0;}}while(c<d){j=U(b,c);if(j<48)break a;if(j>57)break a;if(C5(g,L(3435973827, 214748364)))h=h+1|0;else g=S(J(g,F(10)),F(j-48|0));c=c+1|0;}}else{b=new Ba;W(b);P(b);}}}if(c<d&&U(b,c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=U(b,c);if(k<48)break c;if(k>57)break;if(Ge(g,L(3435973827, 214748364))){g=S(J(g,F(10)),F(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i){b=new Ba;W(b);P(b);}}if(c<d){k=U(b,c);if(k!=101&&k!=69){b=new Ba;W(b);P(b);}j=c+1|0;k=0;if(j==d){b=new Ba;W(b);P(b);}if(U(b,j)==45){j=j+1|0;k=1;}else if(U(b,j)==43)j=j+1|0;l=0;c=0;d:{while(true){if(j>=d)break d;i=U(b,j);if(i<48)break d;if(i>57)break;l=(10*l|0)+(i-48|0)|0;c=1;j=j+1|0;}}if(!c){b=new Ba;W(b);P(b);}if(k)l= -l|0;h=h+l|0;}e:
{j=CB(h,308);if(j<=0){if(j)break e;if(Cn(g,L(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Hy(g);m=Hx(g);if(h>=0)n=10.0;else{n=0.1;h= -h|0;}o=1.0;while(h){if(h%2|0)o=o*n;n=n*n;h=h/2|0;}return m*o;}c=c+1|0;if(c==d)break;}b=new Ba;W(b);P(b);}
function FI(){Jf=$rt_globals.NaN;Jg=N($rt_doublecls());}
var Cj=E(0);
function EA(){B.call(this);this.b6=null;}
var D1=E(0);
var Cm=E(0);
var CV=E(Bl);
var BX=E();
function Ev(){BX.call(this);this.G=null;}
function Cp(a){var b;b=new Dl;Dd(b,a.G);return b;}
var Ef=E(0);
var Cw=E(BX);
function D7(){Cw.call(this);this.cq=null;}
function Dh(a){var b;b=new DR;Dd(b,a.cq);return b;}
function FF(){B.call(this);this.eJ=0.0;}
function B7(){var a=this;B.call(a);a.U=0;a.cG=0;a.H=null;a.A=null;a.cB=null;a.S=null;}
function Jh(a){var b=new B7();Dd(b,a);return b;}
function Dd(a,b){a.S=b;a.cG=b.n;a.H=null;}
function BS(a){var b,c;if(a.H!==null)return 1;while(true){b=a.U;c=a.S.f.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.U=b+1|0;}return 0;}
function F5(a){var b;if(a.cG==a.S.n)return;b=new CK;W(b);P(b);}
function Dy(a){var b,c,d,e;F5(a);if(!BS(a)){b=new CV;W(b);P(b);}b=a.H;if(b!==null){c=a.A;if(c!==null)a.cB=c;a.A=b;a.H=b.p;}else{d=a.S.f.data;e=a.U;a.U=e+1|0;b=d[e];a.A=b;a.H=b.p;a.cB=null;}}
var CU=E(0);
var Dl=E(B7);
function CW(a){Dy(a);return a.A.o;}
var Ej=E(0);
var EE=E(0);
var EF=E(0);
var B6=E();
function ET(){B6.call(this);this.ct=null;}
var Et=E(0);
var DR=E(B7);
function DP(a){Dy(a);return a.A;}
var CK=E(Bl);
function CG(){B6.call(this);this.ca=null;}
function Dq(){CG.call(this);this.bR=null;}
function DO(){var a=this;B.call(a);a.cj=null;a.T=null;}
function FZ(a){if(a.T===null)a.T=Cp(a.cj);}
var BL=E();
var Ji=null;var Ix=null;var Iy=null;var Iw=null;var Jj=null;function Fr(){Ji=Hu([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Ix=GM([F(1),F(10),F(100),F(1000),F(10000),F(100000),F(1000000),F(10000000),F(100000000),F(1000000000),L(1410065408, 2),L(1215752192, 23),L(3567587328, 232),L(1316134912, 2328),L(276447232, 23283),L(2764472320, 232830),L(1874919424, 2328306),L(1569325056, 23283064),L(2808348672, 232830643)]);Iy=GM([F(1),F(10),F(100),F(10000),F(100000000),L(1874919424, 2328306)]);Iw
=new Dk;Jj=new C1;}
var CF=E();
var Jk=null;var Jl=null;function Fl(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_doubleToLongBits(b);c.cs=B$(Bk(d,L(0, 2147483648)),BW)?0:1;e=Bk(d,L(4294967295, 1048575));f=Gf(B_(d,52))&2047;if(B$(e,BW)&&!f){c.bc=BW;c.Z=0;return;}g=0;if(f)e=Hw(e,L(0, 1048576));else{e=BO(e,1);while(B$(Bk(e,L(0, 1048576)),BW)){e=BO(e,1);f=f+(-1)|0;g=g+1|0;}}h=Jl.data;i=0;j=h.length;k=CB(i,j);if(k>0){c=new BQ;W(c);P(c);}a:{if(!k)l=(-1);else{j=j-1|0;while(true){l=(i+j|0)/2|0;k=h[l];if(k==f)break;if(f>=k){i=l+1|0;if(i>j){l=( -l|
0)-2|0;break a;}}else{j=l-1|0;if(j<i){l=( -l|0)-1|0;break a;}}}}}if(l<0)l=( -l|0)-2|0;i=12+(f-h[l]|0)|0;m=DM(e,Jk.data[l],i);if(C5(m,L(2808348672, 232830643))){l=l+1|0;i=12+(f-Jl.data[l]|0)|0;m=DM(e,Jk.data[l],i);}n=BH(Jk.data[l],(63-i|0)-g|0);o=B_(S(n,F(1)),1);p=B_(n,1);if(B$(e,L(0, 1048576)))p=B_(p,2);q=F(10);while(Cn(q,p)){q=J(q,F(10));}if(C5(DC(m,q),Bq(p,F(2))))q=Bq(q,F(10));r=F(1);while(Cn(r,o)){r=J(r,F(10));}if(F9(Hs(r,DC(m,r)),Bq(o,F(2))))r=Bq(r,F(10));f=HI(q,r);e=f>0?J(Bq(m,q),q):f<0?S(J(Bq(m,r),r),
r):J(Bq(S(m,Bq(r,F(2))),r),r);if(C5(e,L(2808348672, 232830643))){l=l+1|0;e=Bq(e,F(10));}else if(Ge(e,L(1569325056, 23283064))){l=l+(-1)|0;e=J(e,F(10));}c.bc=e;c.Z=l-330|0;}
function DM(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Bk(b,F(65535));f=Bk(BH(b,16),F(65535));g=Bk(BH(b,32),F(65535));h=Bk(BH(b,48),F(65535));i=Bk(c,F(65535));j=Bk(BH(c,16),F(65535));k=Bk(BH(c,32),F(65535));l=Bk(BH(c,48),F(65535));m=S(S(J(k,e),J(j,f)),J(i,g));n=S(S(S(J(l,e),J(k,f)),J(j,g)),J(i,h));o=S(S(BO(J(l,h),32+d|0),BO(S(J(l,g),J(k,h)),16+d|0)),BO(S(S(J(l,f),J(k,g)),J(j,h)),d));return S(d>16?S(o,BO(n,d-16|0)):S(o,BH(n,16-d|0)),BH(m,32-d|0));}
function F0(){var b,c,d,e,f,g,h,i,j,k;Jk=HM(660);Jl=GY(660);b=L(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Jk.data;g=d+330|0;f[g]=CC(e,F(80));Jl.data[g]=c;e=CC(e,F(10));h=FP(e,F(10));while(Cn(e,b)&&B$(Bk(e,L(0, 2147483648)),BW)){e=BO(e,1);c=c+1|0;h=BO(h,1);}e=S(e,Bq(h,F(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(F9(e,L(3435973836, 214748364))){e=B_(e,1);j=j+1|0;d=d+(-1)|0;}k=J(e,F(10));b=j<=0?k:S(k,B_(J(Bk(b,F((1<<j)-1|0)),F(10)),j));f=Jk.data;g=(330-i|0)-1|0;f[g]=CC(b,F(80));Jl.data[g]=
d;i=i+1|0;}}
function Dk(){var a=this;B.call(a);a.bc=BW;a.Z=0;a.cs=0;}
var C1=E();
var ED=E(BG);
var Jm=null;function CC(b,c){return Long_udiv(b, c);}
function FP(b,c){return Long_urem(b, c);}
function FY(){Jm=N($rt_longcls());}
function DK(){B.call(this);this.bs=null;}
function C2(){var a=this;B.call(a);a.cc=null;a.cd=null;}
function Dx(){var a=this;B.call(a);a.cD=null;a.ch=0;}
function FU(a,b){var c,d,e,f,g;c=a.cD;d=c.cc;c=c.cd;d=d.bR;e=b;f=d.b6;d=e.i;if(!(FV(f.j-d.j,f.k-d.k)>=0.3?0:1))g=1;else{c.bs=b;g=0;}a.ch=g;}
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,BT,0,B,[],0,3,0,Bm,0,DZ,0,B,[],3,3,0,0,0,Di,0,B,[],3,3,0,0,0,En,0,B,[DZ,Di],0,3,0,0,0,FQ,0,B,[],4,0,0,0,0,Fp,0,B,[],4,3,0,0,0,BR,0,B,[],3,3,0,0,0,BE,0,B,[],3,3,0,0,0,Cs,0,B,[],3,3,0,0,0,Cg,0,B,[BR,BE,Cs],0,3,0,0,0,B2,0,B,[],0,3,0,0,0,Cu,0,B2,[],0,3,0,0,0,B5,0,Cu,[],0,3,0,0,0,E1,0,B5,[],0,3,0,0,0,BG,0,B,[BR],1,3,0,0,0,BZ,0,BG,[BE],0,3,0,0,["R",H2(Gm),"bG",H3(GQ)],CR,0,B,[BR,Cs],0,0,0,0,["b9",H3(De),"bE",H2(R)],EX,0,B,[],3,3,0,0,0,Fe,0,CR,[EX],0,3,0,0,["bE",H2(Gw),"b9",H3(G8)],B4,
0,B5,[],0,3,0,0,0,F4,0,B4,[],0,3,0,0,0,FO,0,B4,[],0,3,0,0,0,B0,0,B2,[],0,3,0,0,0,Bl,0,B0,[],0,3,0,0,0,Cr,0,B,[],0,3,0,FT,0,Bf,0,B,[],1,3,0,0,0,Fk,0,Bf,[],32772,3,0,0,0,Bc,0,B,[],3,3,0,0,0,Da,0,B,[Bc],0,3,0,0,["d",H3(Hl)],C$,0,B,[Bc],0,3,0,0,["d",H3(Gq)],C_,0,B,[Bc],0,3,0,0,["d",H3(GS)],C8,0,B,[Bc],0,3,0,0,["d",H3(GA)],Dz,0,B,[],3,3,0,0,0,E2,0,B,[Dz],0,3,0,0,0,F2,0,B,[],4,3,0,0,0,C0,0,B,[],3,3,0,0,0,Cx,0,B,[C0],0,3,0,Hb,0,Eo,0,B,[],0,3,0,0,0,Co,0,B,[],3,3,0,0,0,FG,0,B,[Co],0,3,0,0,["cA",H2(GI)],E8,0,B,[Co],0,
3,0,0,["cA",H2(Gn)],DL,0,B,[],3,3,0,0,0,C7,0,B,[DL],0,3,0,0,0,BP,0,B,[BE],0,3,0,0,0,DG,0,B,[],3,3,0,0,0,CI,0,B,[DG],1,3,0,0,0,CS,0,B,[],3,3,0,0,0,Fv,0,CI,[CS,BR],0,3,0,0,0,K,0,B,[],3,3,0,0,0]);
$rt_metadata([O,0,B,[],3,3,0,0,0,BU,0,Bf,[],32772,3,0,Gi,0,Be,0,B,[K],0,3,0,0,0,CQ,0,B,[K],3,3,0,0,0,BM,0,Be,[CQ],0,3,0,0,0,BJ,0,B,[],3,3,0,0,0,C4,0,B,[BJ],3,3,0,0,0,Dg,0,B,[C4],3,3,0,0,0,Bz,0,B,[BJ],3,3,0,0,0,FA,0,B,[Dg,Bz],3,3,0,0,0,EP,0,B,[Bz],3,3,0,0,0,DD,0,B,[Bz],3,3,0,0,0,Dn,0,B,[Bz],3,3,0,0,0,Ey,0,B,[Bz],3,3,0,0,0,Dv,0,B,[Bz],3,3,0,0,0,D3,0,B,[Bz,EP,DD,Dn,Ey,Dv],3,3,0,0,0,DQ,0,B,[],3,3,0,0,0,Ed,0,B,[BJ],3,3,0,0,0,FS,0,B,[BJ,D3,DQ,Ed],1,3,0,0,["dS",H4(Ga),"dC",H4(Gp),"dF",H3(Hd),"dV",H5(Hj),"ez",H3(F_),
"eO",H2(GO),"dW",H5(Gr)],E_,0,Bf,[O],32772,3,0,0,0,BQ,0,Bl,[],0,3,0,0,0,D2,0,B,[CQ],3,3,0,0,0,EK,0,BM,[D2],0,3,0,0,0,Dr,0,B,[K],3,3,0,0,0,Dw,0,Be,[Dr],0,3,0,0,0,D_,0,B,[K],3,3,0,0,0,E7,0,Be,[D_],0,3,0,0,0,DJ,0,B,[K],3,3,0,0,0,EN,0,Be,[DJ],0,3,0,0,0,CD,0,Bl,[],0,3,0,0,0,CA,0,CD,[],0,3,0,0,0,Db,0,B,[K],3,3,0,0,0,Eq,0,Be,[Db],0,3,0,0,0,Em,0,B,[K],3,3,0,0,0,Er,0,Be,[Em],0,3,0,0,0,C9,0,B,[],3,3,0,0,0,CH,0,B,[C9,CS],0,0,0,0,0,Cb,0,CH,[],0,0,0,0,0,B3,0,B,[BE,BR],1,3,0,0,0,B1,0,B3,[],12,3,0,GP,0,BF,0,B,[BJ],3,3,0,0,
0,DH,0,B,[BF],0,3,0,0,["M",H3(Gt)],Ei,0,B,[BF],0,3,0,0,["M",H3(G7)],Eh,0,B,[BF],0,3,0,0,["M",H3(F$)],Eg,0,B,[BF],0,3,0,0,["M",H3(G5)],Ec,0,B,[BF],0,3,0,0,["M",H3(Gy)],Eb,0,B,[BF],0,3,0,0,["M",H3(GK)],CT,0,B,[],4,3,0,0,0,Du,0,B,[Bc],0,3,0,0,["d",H3(Gz)],Fy,0,B,[],3,3,0,0,0]);
$rt_metadata([FB,0,B,[],4,3,0,0,0,D8,0,B,[Bc],0,3,0,0,["d",H3(GG)],E$,0,B,[],4,3,0,0,0,Ds,0,Bl,[],0,3,0,0,0,Ba,0,BQ,[],0,3,0,0,0,F1,0,B,[],4,0,0,0,0,Fo,0,B,[],4,3,0,0,0,EG,0,B,[],0,3,0,0,0,F3,0,B,[],4,3,0,0,0,Ez,0,B,[],3,3,0,0,0,DT,0,B,[Ez],0,3,0,0,0,DX,0,B,[],3,3,0,0,0,B8,0,B,[DX],0,3,0,0,0,BC,0,B3,[],12,3,0,CP,0,F7,0,B,[],0,3,0,0,0,ER,0,B,[],0,3,0,0,0,DE,0,B,[Bc],0,3,0,0,["d",H3(Gg)],DF,0,B,[Bc],0,3,0,0,["d",H3(Gh)],Dp,0,B,[Bc],0,3,0,0,["d",H3(GR)],Do,0,B,[Bc],0,3,0,0,["d",H3(G9)],Fq,0,B,[],0,3,0,0,0,Dm,0,
Bf,[],32772,3,0,0,0,Ck,0,Bf,[],32772,3,0,0,["R",H2(Gj),"bG",H3(Hf)],EU,0,Bf,[],32772,3,0,0,0,Cl,0,BG,[BE],0,3,0,0,0,Cj,0,B,[],3,3,0,0,0,EA,0,B,[Cj],0,3,0,0,0,D1,0,B,[],3,3,0,0,0,Cm,0,B,[D1],3,3,0,0,0,CV,0,Bl,[],0,3,0,0,0,BX,0,B,[Cm],1,3,0,0,0,Ev,0,BX,[],0,0,0,0,0,Ef,0,B,[Cm],3,3,0,0,0,Cw,0,BX,[Ef],1,3,0,0,0,D7,0,Cw,[],0,0,0,0,0,FF,0,B,[Bc],0,3,0,0,0,B7,0,B,[],0,0,0,0,0,CU,0,B,[],3,3,0,0,0,Dl,0,B7,[CU],0,0,0,0,0,Ej,0,B,[],3,3,0,0,0,EE,0,B,[Ej],3,3,0,0,0,EF,0,B,[EE],3,3,0,0,0,B6,0,B,[EF],1,3,0,0,0,ET,0,B6,[],
0,3,0,0,0,Et,0,B,[],3,3,0,0,0,DR,0,B7,[CU],0,0,0,0,0,CK,0,Bl,[],0,3,0,0,0,CG,0,B6,[],1,3,0,0,0,Dq,0,CG,[],0,3,0,0,0,DO,0,B,[Et],0,3,0,0,0]);
$rt_metadata([BL,0,B,[],0,0,0,0,0,CF,0,B,[],4,3,0,0,0,Dk,0,B,[],0,3,0,0,0,C1,0,B,[],0,3,0,0,0,ED,0,BG,[BE],0,3,0,0,0,DK,0,B,[Cj],0,3,0,0,0,C2,0,B,[Cj],0,3,0,0,0,Dx,0,B,[Bc],0,0,0,0,0]);
function $rt_array(cls,data){this.fC=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","px","click","Add point","Add edge","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","null","vertical","horizontal","Id","x","y","r","g","b","Update","Close","From","To","Delete","solid","inset","resize","mousecontact","MAX_DIST","SPLIT_DIST","","px ","00","rgba(","rgb(","OVER",
"OUT","MOVE","CLICK"]);
Cg.prototype.toString=function(){return $rt_ustr(this);};
Cg.prototype.valueOf=Cg.prototype.toString;B.prototype.toString=function(){return $rt_ustr(GF(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var S=Long_add;var Hs=Long_sub;var J=Long_mul;var Bq=Long_div;var DC=Long_rem;var Hw=Long_or;var Bk=Long_and;var Jn=Long_xor;var BO=Long_shl;var B_=Long_shr;var BH=Long_shru;var HI=Long_compare;var B$=Long_eq;var Jo=Long_ne;var Ge=Long_lt;var Cn=Long_le;var F9=Long_gt;var C5=Long_ge;var Jp=Long_not;var Hy=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(GL);
main.javaException=$rt_javaException;
(function(){var c;c=FS.prototype;c.dispatchEvent=c.ez;c.addEventListener=c.dS;c.removeEventListener=c.dC;c.getLength=c.eO;c.get=c.dF;c.addEventListener=c.dW;c.removeEventListener=c.dV;c=DH.prototype;c.handleEvent=c.M;c=Ei.prototype;c.handleEvent=c.M;c=Eh.prototype;c.handleEvent=c.M;c=Eg.prototype;c.handleEvent=c.M;c=Ec.prototype;c.handleEvent=c.M;c=Eb.prototype;c.handleEvent=c.M;})();
})(this);