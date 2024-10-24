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
{if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.be=f;}
function $rt_cls(cls){return Ic(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Je(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.n.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return I8(t);}
function $rt_throwableCause(t){return I9(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(JJ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return JK(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var Cv=$rt_compare;var JL=$rt_nullCheck;var H=$rt_cls;var Bc=$rt_createArray;var Ji=$rt_isInstance;var JM=$rt_nativeThread;var JN=$rt_suspending;var JO=$rt_resuming;var JP=$rt_invalidPointer;var C=$rt_s;var Bg=$rt_eraseClinit;var Ib=$rt_imul;var IS=$rt_wrapException;var JQ=$rt_checkBounds;var JR=$rt_checkUpperBound;var JS=$rt_checkLowerBound;var JT=$rt_wrapFunction0;var JU=$rt_wrapFunction1;var JV=$rt_wrapFunction2;var JW=$rt_wrapFunction3;var JX=$rt_wrapFunction4;var E=$rt_classWithoutFields;var EC
=$rt_createArrayFromData;var JY=$rt_createCharArrayFromData;var JZ=$rt_createByteArrayFromData;var J0=$rt_createShortArrayFromData;var Jx=$rt_createIntArrayFromData;var J1=$rt_createBooleanArrayFromData;var J2=$rt_createFloatArrayFromData;var J3=$rt_createDoubleArrayFromData;var IN=$rt_createLongArrayFromData;var JI=$rt_createBooleanArray;var J4=$rt_createByteArray;var J5=$rt_createShortArray;var Cz=$rt_createCharArray;var Hm=$rt_createIntArray;var Jq=$rt_createLongArray;var J6=$rt_createFloatArray;var J7=$rt_createDoubleArray;var Cv
=$rt_compare;var J8=$rt_castToClass;var J9=$rt_castToInterface;var Jz=Long_toNumber;var F=Long_fromInt;var J$=Long_fromNumber;var Q=Long_create;var B$=Long_ZERO;var J_=Long_hi;var HF=Long_lo;
function B(){this.$id$=0;}
function Ka(){var a=new B();DR(a);return a;}
function DR(a){}
function GW(a){return Ic(a.constructor);}
function IG(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=C(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=Cz(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=Dl((d>>>j|0)&15,16);j=j-4|0;f=i;}e=Je(k);}b=V();I(I(b,C(1)),e);return O(b);}
function I4(a){var b,c,d;if(!Ji(a,B9)&&a.constructor.$meta.item===null){b=new DF;U(b);L(b);}b=HN(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var BH=E();
var Kb=null;var Kc=null;var Kd=null;var Ke=null;var Kf=null;var Kg=null;var Kh=null;function Bb(){Bb=Bg(BH);Is();}
function HW(b){var c,d,e,f,g,h,i,j,k,l,m;GI();F_();Gw();Gp();Hj();Hb();GL();GN();Bb();c=El(Kb,C0(20));BG(c,Hp(10));d=(BA()).createElement("div");d.classList.add("board");e=new Et;Bz(e,d);f=FF(Dn(Kb),800,800);g=C9(f);D7(g,400,0,800);BW(g,800,400,780,405);BW(g,800,400,780,395);h=(-19);while(h<20){if(h){i=(h+20|0)*20|0;EF(g,i,397,403);if(!(h%5|0))CX(g,BP(h),i-7|0,415);}h=h+1|0;}EF(g,400,0,800);BW(g,400,0,405,20);BW(g,400,0,395,20);j=(-19);while(j<20){if(j){D7(g,(j+20|0)*20|0,397,403);if(!(j%5|0))CX(g,BP(j),405,
((20-j|0)*20|0)+3|0);}j=j+1|0;}BW(g,0,0,800,800);BW(g,0,800,800,0);Bh(e,f);d=Kd;d.a.style.setProperty("position","absolute");g=d.a.style;k=V();I(J(k,10),C(2));l=O(k);g.setProperty("left",$rt_ustr(l));g=d.a.style;k=V();I(J(k,10),C(2));l=O(k);g.setProperty("top",$rt_ustr(l));Bh(e,d);Br(Kd,C(3),new EK);Br(Ke.b4,C(3),new EI);Bh(c,e);d=EN(Kb,C0(10));BG(d,Hp(10));f=By(Kb,C(4));Br(f,C(3),new EJ);Bh(d,f);g=By(Kb,C(5));Br(g,C(3),new EG);Bh(d,g);Bh(d,Be(Ke.F,0));Bh(c,d);Be(Kf.bx,0);Be(Kf.cU,1);Bh(d,Be(Kf.C,0));k=By(Kb,
C(6));Br(k,C(3),new EH);Bh(d,k);l=F5(Hk(Kb),(-50),50);k=l.a;f=$rt_ustr(BP(0));k.value=f;f=Bw(Kb);g=Cf(0);m=g===null?Dk(f):DY(f,GX(g));F8(l,JF(m));CS(d,l);CS(d,m);CS(Dw(Kb),c);}
function GP(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;Bb();b=V();N(b,C(7));N(b,C(8));c=Cb(Ed(Kc));while(BF(c)){d=Co(c);e=CC(Kc,d.q.x);f=CC(Kc,d.q.u);g=B5(e.h);h=B5(f.h);i=h.i-g.i|0;j=h.j-g.j|0;k=FD(CQ(i),CQ(j));l=i/k|0;m=j/k|0;N(J(N(J(N(J(N(N(I(N(N(J(N(J(N(b,C(9)),g.i),C(10)),800-g.j|0),C(11)),C(12)),d.bb),C(13)),C(14)),l),C(10)), -m|0),C(15)),B6(CQ(i),CQ(j))),C(16));}c=Cb(FL(Kc));while(BF(c)){n=Co(c);o=B5(n.h);p=FI(n,o);N(N(I(N(N(J(N(J(N(b,C(9)),o.i),C(10)),800-o.j|0),C(11)),C(12)),n.bg),C(13)),C(17));N(N(N(J(N(J(N(b,
C(9)),p.i),C(10)),800-p.j|0),C(18)),n.E),C(19));}N(b,C(20));return O(b);}
function FD(b,c){Bb();if(!c)return b;return FD(c,b%c|0);}
function CL(){Bb();if(Kg===null){Kg=new E7;$rt_globals.requestAnimationFrame(BY(new E8,"onAnimationFrame"));}}
function B5(b){Bb();return Ij(b.m*20.0+400.0,400.0-b.l*20.0);}
function FI(b,c){var d,e,f,g,h;Bb();d=b.bK*3.141592653589793/180.0;e=HY(d);f=Ia(d);g=Kh;h=b.E;b=g.dd.c.measureText($rt_ustr(h));return Ij(f>=0.0?c.i+5.0*f:c.i+5.0*f-b.width,e>=0.0?c.j-5.0*e:c.j-5.0*e+b.actualBoundingBoxAscent);}
function Dr(b){var c,d;Bb();c=(BA()).createElement("div");c.classList.add("modal-window");d=new B4;Bz(d,c);Bh(d,b.bF());Bh(Dw(Kb),d);return d;}
function Is(){var b;b=new CT;I5();Kb=b;b=new DI;b.t=I7();b.bf=I7();Kc=b;Kd=FF(Dn(Kb),800,800);Ke=IX(Kb);Kf=IV(Kb);b=new FJ;b.dd=C9(Dn(Kb));Kh=b;}
var D3=E(0);
var DH=E(0);
function Ef(){B.call(this);this.bs=null;}
function Ic(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ef;c.bs=b;d=c;b.classObject=d;}return c;}
var Ho=E();
function BY(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function C5(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Ha=E();
function HN(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function GJ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(GJ(d[e],c))return 1;e=e+1|0;}return 0;}
function H6(b){var c='$$enumConstants$$';M[c]=GH;Cj[c]=HZ;BC[c]=HH;BK[c]=Ir;H6=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return H6(b);}
var BE=E(0);
var BR=E(0);
var C_=E(0);
function Dm(){var a=this;B.call(a);a.n=null;a.R=0;}
var Ki=null;function Je(a){var b=new Dm();Gt(b,a);return b;}
function IQ(a,b,c){var d=new Dm();Hu(d,a,b,c);return d;}
function Gt(a,b){var c,d,e,f;b=b.data;c=b.length;d=Cz(c);e=d.data;a.n=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}}
function Hu(a,b,c,d){var e,f,g;e=Cz(d);f=e.data;a.n=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}}
function W(a,b){var c,d;if(b>=0){c=a.n.data;if(b<c.length)return c[b];}d=new Dd;U(d);L(d);}
function Bf(a){return a.n.data.length;}
function Df(a){return a.n.data.length?0:1;}
function Cu(a,b,c){var d;if(b<=c)return IQ(a.n,b,c-b|0);d=new Ch;U(d);L(d);}
function IE(a){return a;}
function BP(b){return O(J(V(),b));}
function C6(a,b){var c;if(a===b)return 1;if(!(b instanceof Dm))return 0;if(Bf(b)!=Bf(a))return 0;c=0;while(c<Bf(b)){if(W(a,c)!=W(b,c))return 0;c=c+1|0;}return 1;}
function GK(a){var b,c,d,e;a:{if(!a.R){b=a.n.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.R=(31*a.R|0)+e|0;d=d+1|0;}}}return a.R;}
function GI(){Ki=new DG;}
function Cl(){var a=this;B.call(a);a.dy=null;a.ek=null;a.c5=0;a.dD=0;}
function Kj(a){var b=new Cl();Bt(b,a);return b;}
function Bt(a,b){a.c5=1;a.dD=1;a.dy=b;}
function HT(a){return a;}
function I8(a){return a.dy;}
function I9(a){var b;b=a.ek;if(b===a)b=null;return b;}
var Da=E(Cl);
var Cm=E(Da);
var GT=E(Cm);
var BV=E();
function Cd(){BV.call(this);this.w=0;}
var Kk=null;var Kl=null;function H1(a){var b=new Cd();F0(b,a);return b;}
function F0(a,b){a.w=b;}
function CZ(b){return (b>>>4|0)^b<<28^b<<8^(b>>>24|0);}
function CG(b){return (Ej(Ju(20),b,10)).v();}
function Cq(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(b===null){b=new Bd;Bt(b,C(21));L(b);}c=Bf(b);if(0==c){b=new Bd;Bt(b,C(22));L(b);}a:{d=0;switch(W(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new Bd;U(b);L(b);}b:{c:{while(e<c){g=e+1|0;h=W(b,e);if(Km===null){if(Kn===null)Kn=GV();i=(Kn.value!==null?$rt_str(Kn.value):null);j=new FR;k=i.n.data;l=Cz(k.length);m=l.data;n=0;e=m.length;while(n<e){m[n]=k[n];n=n+1|0;}j.dk=l;o=G$(j);l=Hm(o*2|0);k=l.data;e=0;p=0;q=0;r=0;while
(r<o){p=p+Gn(j)|0;q=q+Gn(j)|0;n=e+1|0;k[e]=p;e=n+1|0;k[n]=q;r=r+1|0;}Km=l;}k=Km.data;e=0;p=(k.length/2|0)-1|0;d:{while(p>=e){q=(e+p|0)/2|0;n=q*2|0;r=Cv(h,k[n]);if(r>0)e=q+1|0;else{if(r>=0){e=k[n+1|0];break d;}p=q-1|0;}}e=(-1);}if(e<0){j=new Bd;s=Cu(b,0,c);b=V();I(I(b,C(23)),s);Bt(j,O(b));L(j);}if(e>=10){j=new Bd;t=Cu(b,0,c);b=V();I(I(J(I(b,C(24)),10),C(25)),t);Bt(j,O(b));L(j);}f=(10*f|0)+e|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|0;}return f;}j
=new Bd;s=Cu(b,0,c);b=V();I(I(b,C(26)),s);Bt(j,O(b));L(j);}
function Cf(b){var c,d;if(b>=(-128)&&b<=127){a:{if(Kl===null){Kl=Bc(Cd,256);c=0;while(true){d=Kl.data;if(c>=d.length)break a;d[c]=H1(c-128|0);c=c+1|0;}}}return Kl.data[b+128|0];}return H1(b);}
function GX(a){return CG(a.w);}
function HI(a){return CZ(a.w);}
function IR(a,b){if(a===b)return 1;return b instanceof Cd&&b.w==a.w?1:0;}
function F_(){Kk=H($rt_intcls());}
function C4(){var a=this;B.call(a);a.b=null;a.f=0;}
function Ju(a){var b=new C4();Gu(b,a);return b;}
function Gu(a,b){a.b=Cz(b);}
function Ej(a,b,c){return G7(a,a.f,b,c);}
function G7(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bn(a,b,b+1|0);else{Bn(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=Dl(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ib(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bn(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=Dl($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Hw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=Cv(c,0.0);if(!d){Bn(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Bn(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Ko;G9(c,f);g=f.bj;h=f.bM;i=f.cJ;j=1;k=1;if(i)k=2;l=18;m=Iz(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=B6(l,j+1|0);h=0;}else{g=Bq(g,Kp.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bn(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}n=Q(1569325056, 23283064);o=0;while(o<l){if(CO(n,B$))d=0;else{d=HF(Bq(g,n));g=DT(g,
n);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Bq(n,F(10));o=o+1|0;}if(h){e=a.b.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function Iz(b){var c,d,e,f,g;c=F(1);d=0;e=16;f=Kq.data;g=f.length-1|0;while(g>=0){if(Cs(DT(b,P(c,f[g])),B$)){d=d|e;c=P(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function EO(a,b){var c,d,e,f,g;c=a.b.data.length;if(c>=b)return;d=c>=1073741823?2147483647:B6(b,B6(c*2|0,5));e=a.b.data;f=Cz(d);g=f.data;b=Eg(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.b=f;}
function O(a){return IQ(a.b,0,a.f);}
function Bn(a,b,c){var d,e,f,g;d=a.f;e=d-b|0;a.de((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.f=a.f+(c-b|0)|0;}
var EB=E(0);
var F$=E(C4);
function V(){var a=new F$();IF(a);return a;}
function IF(a){Gu(a,16);}
function I(a,b){FX(a,a.f,b===null?C(27):b.v());return a;}
function N(a,b){FX(a,a.f,b);return a;}
function J(a,b){Ej(a,b,10);return a;}
function Bs(a,b){var c;c=a.f;Bn(a,c,c+1|0);a.b.data[c]=b;return a;}
function CY(a,b){var c;c=Bf(b);EZ(a,a.f,b,0,c);return a;}
function EZ(a,b,c,d,e){var f,g;if(d<=e&&e<=Bf(c)&&d>=0){Bn(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=W(c,d);d=d+1|0;b=g;}return a;}c=new Ch;U(c);L(c);}
function IA(a){return O(a);}
function I3(a,b){EO(a,b);}
function FX(a,b,c){var d,e,f;if(b>=0&&b<=a.f){a:{if(c===null)c=C(27);else if(Df(c))break a;EO(a,a.f+Bf(c)|0);d=a.f-1|0;while(d>=b){a.b.data[d+Bf(c)|0]=a.b.data[d];d=d+(-1)|0;}a.f=a.f+Bf(c)|0;d=0;while(d<Bf(c)){e=a.b.data;f=b+1|0;e[b]=W(c,d);d=d+1|0;b=f;}}return a;}c=new Dd;U(c);L(c);}
var Ce=E(Cm);
var GQ=E(Ce);
function Kr(a){var b=new GQ();IL(b,a);return b;}
function IL(a,b){Bt(a,b);}
var Gx=E(Ce);
function Ks(a){var b=new Gx();IU(b,a);return b;}
function IU(a,b){Bt(a,b);}
var BU=E(Cl);
function Jd(){var a=new BU();U(a);return a;}
function U(a){a.c5=1;a.dD=1;}
var Bp=E(BU);
function Kt(){var a=new Bp();Go(a);return a;}
function JK(a){var b=new Bp();Io(b,a);return b;}
function Go(a){U(a);}
function Io(a,b){Bt(a,b);}
function C$(){var a=this;B.call(a);a.bt=0;a.cw=null;a.bw=null;a.ce=0;}
var Ku=null;function Hq(){Hq=Bg(C$);H8();}
function C0(b){var c,d,e;Hq();c=new C$;d=null;e=null;c.bt=b;c.cw=d;c.bw=e;c.ce=0;return c;}
function H8(){Ku=C0(0);}
var Bk=E();
function Gd(){var a=this;Bk.call(a);a.b5=0;a.cQ=null;a.bO=0;}
function Ie(a,b,c){var d=new Gd();I6(d,a,b,c);return d;}
function I6(a,b,c,d){a.b5=b;a.cQ=c;a.bO=d;}
function B_(b){return Ie(0,b,0);}
function Hp(b){return Ie(0,null,b);}
var Z=E(0);
var EK=E();
function Ja(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;Bb();c=Jt(b.bz.offsetX,b.bz.offsetY);b=Gi(0.05*(c.i-400|0),0.05*(400-c.j|0));c=CA(Kc.t);d=new FZ;e=new DZ;e.cy=c;GA(d,e);c=new Fd;c.b6=b;e=new E2;e.di=d;e.cX=c;c=new Fg;while(c.br===null){d=e.di;f=new Dt;DR(f);f.cp=e;f.cq=c;if(!Ft(d,f))break;}c=FM(c.br);if(Fz(c)){ET(Ke,D1(c));Be(Ke.F,1);Be(Kf.C,0);}else{Be(Ke.F,0);c=Kc;d=EQ(FN(c.t));a:{while(BF(d)){e=Fk(d);f=EQ(FN(c.t));while(BF(f)){g=Fk(f);h=e.O.w;i=g.O.w;if(h>=i)continue;j=Ey(c.bf,GM(h,i));if(j!==null){k=
e.p.h;g=g.p.h;l=Do(k,b);m=Do(g,b);n=CR(l);o=CR(m);if(n>=0.2&&o>=0.2)b:{g=Do(g,k);n=l.m;p=m.m;n=n*p;o=l.l;q=m.l;if(n+o*q<=0.0){n=(g.m*q-p*g.l)/CR(g);if(n<=0.0)n= -n;if(n<0.2){i=1;break b;}}i=0;}else i=0;if(i){b=Hn(j);break a;}}}}b=Gm();}if(!Fz(b))Be(Kf.C,0);else{Be(Kf.C,1);c=Kf;b=D1(b);CP(BQ(c.bh,CG(b.q.x)),1);CP(BQ(c.bT,CG(b.q.u)),1);b=b.bb;if(b!==null)Cg(c.bY,b);}}}
var EI=E();
function Ix(a,b){Bb();b=DA(Ke);if(b!==null){Ex(Kc,b);CL();}}
var EJ=E();
function H0(a,b){var c,d,e;Bb();b=IX(Kb);c=new E$;c.bd=Kc.b2;ET(b,c);Be(b.bH,1);c=Dr(b);d=b.bH;e=new Eo;e.cf=c;Br(d,C(3),e);d=b.b4;e=new Ep;e.cG=b;e.cI=c;Br(d,C(3),e);}
var EG=E();
function HS(a,b){var c,d,e;Bb();b=IV(Kb);Be(b.bI,1);c=Dr(b);d=b.bI;e=new DO;e.cV=c;Br(d,C(3),e);d=b.bx;e=new DN;e.dO=b;e.dP=c;Br(d,C(3),e);}
var EH=E();
function Iu(a,b){var c,d,e,f,g,h,i,j;Bb();b=new EM;c=Kb;d=CB(c);e=Bc(X,2);f=Bw(c);g=Kv;h=FW(f);if(g===null)h.J.style.removeProperty("background");else{i=h.J.style;g=Fh(g);i.setProperty("background",$rt_ustr(g));}j=e.data;b.cn=f;j[0]=f;c=By(c,C(28));b.c8=c;j[1]=c;b.c3=BG(Bl(d,e),B_(BL(Kw)));c=Dr(b);d=b.c8;h=new DP;h.cF=c;Br(d,C(3),h);Bx(b.cn,GP());}
var DQ=E(0);
function GU(){B.call(this);this.c6=null;}
function JF(a){var b=new GU();HA(b,a);return b;}
function HA(a,b){a.c6=b;}
var Ht=E();
var ED=E(0);
function Bu(a){Hq();return El(a,Ku);}
function CB(a){Hq();return EN(a,Ku);}
var CT=E();
var Kx=null;function I5(){I5=Bg(CT);HQ();}
function Dw(a){I5();return Kx;}
function Ev(a,b,c){var d,e,f,g,h;d=(BA()).createElement("div");e=d.classList;f=!b?C(29):C(30);e.add($rt_ustr(f));if(c.bw!==null){e=d.classList;f=(c.bw.B.gm(95,45)).eK();e.add($rt_ustr(f));}f=c.cw;Hh();if(f===Ky)d.classList.add("max-distance");else if(f===Kz)d.classList.add("split-distance");else if(c.bt){f=d.style;b=c.bt;g=V();I(J(g,b),C(2));h=O(g);f.setProperty("gap",$rt_ustr(h));}if(c.ce)d.classList.add("stretch");c=new B4;Bz(c,d);return c;}
function El(a,b){return Ev(a,1,b);}
function EN(a,b){return Ev(a,0,b);}
function Bw(a){var b;b=new FU;Bz(b,(BA()).createElement("span"));Dk(b);return b;}
function Dn(a){var b,c;b=(BA()).createElement("canvas");c=new Eh;Bz(c,b);return c;}
function By(a,b){var c,d;c=(BA()).createElement("input");d="button";c.type=d;c.classList.add("text-button");b=$rt_ustr(b);c.value=b;b=new E9;Bz(b,c);return b;}
function BT(a){var b,c;b=(BA()).createElement("input");c="text";b.type=c;b.classList.add("text-input");c=new Ei;Bz(c,b);return c;}
function Hk(a){var b,c,d;b=(BA()).createElement("input");c="range";b.type=c;c=new ER;Bz(c,b);d=new Fe;d.dA=c;b.addEventListener("input",BY(d,"handleEvent"));return c;}
function HQ(){var b;b=new B4;Bz(b,(BA()).body);Kx=b;}
function DI(){var a=this;B.call(a);a.t=null;a.bf=null;a.dl=0.0;a.b2=0;}
function Ex(a,b){if(D9(a.t,Cf(b.bd),b)===null)a.b2=a.b2+1|0;}
function FL(a){return CA(a.t);}
function CC(a,b){return Ey(a.t,Cf(b));}
function Ed(a){return CA(a.bf);}
function HV(b,c){var d,e,f,g,h,i;d=c.h;e=F3(b);f=(e+1.0/e)/2.0;e=F3(b);b=(e-1.0/e)/2.0;g=new Fa;e=d.l;h=e*b;i=d.m;Hi(g,h+i*f,e*f+i*b);c.h=g;}
var CF=E(0);
function Gv(){var a=this;B.call(a);a.F=null;a.bV=null;a.bl=null;a.bm=null;a.bn=null;a.bk=null;a.bp=null;a.b4=null;a.bH=null;}
function IX(a){var b=new Gv();IO(b,a);return b;}
function IO(a,b){var c,d,e,f,g,h,i;c=CB(b);d=Bc(X,7);e=d.data;f=Bu(b);g=Bc(X,2);h=g.data;i=CP(BT(b),1);a.bV=i;h[0]=i;h[1]=Bx(Bw(b),C(31));e[0]=Bl(f,g);i=Bu(b);h=Bc(X,2);g=h.data;f=BT(b);a.bl=f;g[0]=f;g[1]=Bx(Bw(b),C(32));e[1]=Bl(i,h);f=Bu(b);g=Bc(X,2);h=g.data;i=BT(b);a.bm=i;h[0]=i;h[1]=Bx(Bw(b),C(33));e[2]=Bl(f,g);f=HP(b);De();f=Cg(f,KA);a.bn=f;e[3]=f.b1;f=Bu(b);g=Bc(X,2);h=g.data;i=BT(b);a.bk=i;h[0]=i;h[1]=Bx(Bw(b),C(34));e[4]=Bl(f,g);f=Bu(b);g=Bc(X,2);h=g.data;i=BT(b);a.bp=i;h[0]=i;h[1]=Bx(Bw(b),C(35));e[5]
=Bl(f,g);f=Bu(b);g=Bc(X,2);h=g.data;i=By(b,C(36));a.b4=i;h[0]=i;b=By(b,C(28));a.bH=b;h[1]=Be(b,0);e[6]=Bl(f,g);a.F=BG(Bl(c,d),B_(BL(KB)));}
function ET(a,b){var c;BQ(a.bV,CG(b.bd));c=b.h;if(c!==null){BQ(a.bl,CU(c.m));BQ(a.bm,CU(b.h.l));}c=b.bg;if(c!==null)Cg(a.bn,c);BQ(a.bk,b.E);BQ(a.bp,BP(b.bK));}
function DA(a){var b,$$je;a:{try{b=Hr(Gb(GE(G8(GZ(JB(),Cq(BS(a.bV))),Gi(Fp(BS(a.bl)),Fp(BS(a.bm)))),DM(a.bn)),BS(a.bk)),Cq(BS(a.bp)));}catch($$e){$$je=IS($$e);if($$je instanceof BU){break a;}else{throw $$e;}}return b;}return null;}
function HU(a){return a.F;}
function F4(){var a=this;B.call(a);a.C=null;a.bh=null;a.bT=null;a.bY=null;a.bx=null;a.bI=null;a.cU=null;}
function IV(a){var b=new F4();ID(b,a);return b;}
function ID(a,b){var c,d,e,f,g,h,i,j;c=CB(b);d=Bc(X,4);e=d.data;f=Bu(b);g=Bc(X,2);h=g.data;i=BT(b);a.bh=i;h[0]=i;h[1]=Bx(Bw(b),C(37));e[0]=Bl(f,g);j=Bu(b);h=Bc(X,2);g=h.data;f=BT(b);a.bT=f;g[0]=f;g[1]=Bx(Bw(b),C(38));e[1]=Bl(j,h);f=HP(b);a.bY=f;De();e[2]=(Cg(f,KA)).b1;f=Bu(b);g=Bc(X,3);h=g.data;i=By(b,C(36));a.bx=i;h[0]=i;i=By(b,C(28));a.bI=i;h[1]=Be(i,0);b=By(b,C(39));a.cU=b;h[2]=Be(b,0);e[3]=Bl(f,g);a.C=BG(Bl(c,d),B_(BL(KC)));}
function HJ(a){return a.C;}
function FJ(){B.call(this);this.dd=null;}
var Fi=E(0);
var DG=E();
var B8=E();
var KD=null;var Km=null;var KE=null;var Kn=null;function Dl(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gw(){KD=H($rt_charcls());KE=Bc(B8,128);}
function GV(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DV=E(0);
function Ck(){B.call(this);this.bo=null;}
var B9=E(0);
function Hf(){var a=this;Ck.call(a);a.A=0;a.k=null;a.r=0;a.dH=0.0;a.bU=0;}
function I7(){var a=new Hf();HC(a);return a;}
function HC(a){var b;b=G2(16);a.A=0;a.k=Bc(Cw,b);a.dH=0.75;Fw(a);}
function G2(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fw(a){a.bU=a.k.data.length*a.dH|0;}
function FN(a){var b;b=new Fx;b.dB=a;return b;}
function Ey(a,b){var c,d;if(b===null)c=FT(a);else{d=b.S();c=D5(a,b,d&(a.k.data.length-1|0),d);}if(c===null)return null;return c.p;}
function D5(a,b,c,d){var e,f;e=a.k.data[c];while(e!==null){if(e.bv==d){f=e.O;if(b!==f&&!b.bG(f)?0:1)break;}e=e.s;}return e;}
function FT(a){var b;b=a.k.data[0];while(b!==null&&b.O!==null){b=b.s;}return b;}
function D9(a,b,c){var d,e,f;if(b===null){d=FT(a);if(d===null){a.r=a.r+1|0;d=Fr(a,null,0,0);e=a.A+1|0;a.A=e;if(e>a.bU)FK(a);}}else{e=b.S();f=e&(a.k.data.length-1|0);d=D5(a,b,f,e);if(d===null){a.r=a.r+1|0;d=Fr(a,b,f,e);e=a.A+1|0;a.A=e;if(e>a.bU)FK(a);}}b=d.p;d.p=c;return b;}
function Fr(a,b,c,d){var e,f,g;e=new Cw;f=null;e.O=b;e.p=f;e.bv=d;g=a.k.data;e.s=g[c];g[c]=e;return e;}
function FK(a){var b,c,d,e,f,g,h,i;b=a.k.data.length;b=G2(!b?1:b<<1);c=Bc(Cw,b);d=c.data;e=0;f=b-1|0;while(true){g=a.k.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bv&f;i=h.s;h.s=d[b];d[b]=h;h=i;}e=e+1|0;}a.k=c;Fw(a);}
function CA(a){var b;if(a.bo===null){b=new FO;b.N=a;a.bo=b;}return a.bo;}
var X=E(0);
function Gj(){var a=this;B.call(a);a.ba=null;a.b0=null;a.b1=null;}
function HP(a){var b=new Gj();Ik(b,a);return b;}
function Ik(a,b){var c,d,e,f,g;c=new FB;c.cj=H(M);d=Bc(B,(GS(H(M))).data.length);e=d.data;c.bW=d;c.b$=JI(e.length);a.ba=c;c=CB(b);f=G5(0,3);g=new Eu;g.ck=a;g.cm=b;a.b1=Ek(c,Dv(f,g));}
function Cg(a,b){var c,d;c=a.b0;if(c!==null){c=Fl(a.ba,c);Ct();BG(c,B_(KF));}d=Fl(a.ba,b);De();if(b!==KA){Ct();c=B_(KG);}else{Ct();c=B_(KH);}BG(d,c);a.b0=b;return a;}
function DM(a){return a.b0;}
function BB(){var a=this;B.call(a);a.B=null;a.Q=0;}
function CD(a,b,c){a.B=b;a.Q=c;}
function Ig(a){return a.B;}
var M=E(BB);
var KA=null;var KI=null;var KJ=null;var KK=null;var KL=null;var KM=null;var KN=null;var KO=null;var KP=null;var KQ=null;var KR=null;var KS=null;var KT=null;var KU=null;var KV=null;var KW=null;var KX=null;var KY=null;var KZ=null;var K0=null;function De(){De=Bg(M);IK();}
function Ba(a,b){var c=new M();Gh(c,a,b);return c;}
function GH(){De();return K0.be();}
function Gh(a,b,c){De();CD(a,b,c);}
function IK(){var b;KA=Ba(C(40),0);KI=Ba(C(41),1);KJ=Ba(C(42),2);KK=Ba(C(43),3);KL=Ba(C(44),4);KM=Ba(C(45),5);KN=Ba(C(46),6);KO=Ba(C(47),7);KP=Ba(C(48),8);KQ=Ba(C(49),9);KR=Ba(C(50),10);KS=Ba(C(51),11);KT=Ba(C(52),12);KU=Ba(C(53),13);KV=Ba(C(54),14);KW=Ba(C(55),15);KX=Ba(C(56),16);KY=Ba(C(57),17);b=Ba(C(58),18);KZ=b;K0=EC(M,[KA,KI,KJ,KK,KL,KM,KN,KO,KP,KQ,KR,KS,KT,KU,KV,KW,KX,KY,b]);}
var T=E(0);
var K1=null;var K2=null;var K3=null;var K4=null;var Kv=null;var K5=null;var K6=null;var KB=null;var K7=null;var K8=null;var K9=null;var K$=null;var K_=null;var Kw=null;var KC=null;var La=null;var Lb=null;var Lc=null;var Ld=null;var Le=null;function Gp(){K1=Bi(247,222,123);K2=DW(0,0,0,0.0);K3=DW(128,128,128,0.5);K4=Bi(128,128,128);Kv=Bi(255,255,255);K5=Bi(0,0,0);K6=Bi(255,75,125);KB=Bi(203,24,24);K7=Bi(222,181,148);K8=Bi(214,99,0);K9=Bi(79,145,153);K$=Bi(178,107,123);K_=Bi(255,0,0);Kw=Bi(0,0,255);KC=Bi(0,128,
0);La=Bi(255,165,0);Lb=DW(149,69,53,0.25);Lc=DW(149,69,53,0.5);Ld=Bi(255,255,221);Le=Bi(136,136,102);}
function B0(){var a=this;Bk.call(a);a.dt=null;a.cO=null;a.dx=0;a.bq=0;}
var KG=null;var KF=null;var Lf=null;var KH=null;var Lg=null;function Ct(){Ct=Bg(B0);I0();}
function Iv(a,b,c,d){var e=new B0();G4(e,a,b,c,d);return e;}
function G4(a,b,c,d,e){Ct();a.dt=b;a.cO=c;a.dx=d;a.bq=e;}
function BL(b){Ct();return Iv(b,C(59),1,0);}
function I0(){KG=BL(K5);KF=BL(K2);Lf=BL(K3);KH=BL(K1);Lg=Iv(K4,C(60),1,0);}
function Bj(){B.call(this);this.a=null;}
function Jm(a){var b=new Bj();Bz(b,a);return b;}
function Bz(a,b){a.a=b;}
function Ip(a){return a.a;}
function Ca(a){var b;b=a.a;if(b.parentNode!==null)b.parentNode.removeChild(b);}
function Be(a,b){if(b)a.a.style.removeProperty("display");else a.a.style.setProperty("display","none");return a;}
function BG(a,b){var c,d,e,f,g;if(b.b5){c=a.a.style;d=b.b5;e=V();I(J(e,d),C(2));f=O(e);c.setProperty("margin",$rt_ustr(f));}g=FM(b.cQ);f=new E5;f.ca=a;FG(g,f);if(b.bO){f=a.a.style;d=b.bO;b=V();I(J(b,d),C(2));c=O(b);f.setProperty("padding",$rt_ustr(c));}return a;}
function FW(a){var b;b=new Fs;b.J=a.a;return b;}
function Br(a,b,c){var d,e,f;a:{d=(-1);switch(GK(b)){case -934437708:if(!C6(b,C(61)))break a;d=2;break a;case 94750088:if(!C6(b,C(3)))break a;d=1;break a;case 1252611035:if(!C6(b,C(62)))break a;d=0;break a;default:}}switch(d){case 0:b=a.a;e=new Ec;e.c0=c;b.addEventListener("mousemove",BY(e,"handleEvent"));b=a.a;e=new Eb;e.b7=c;b.addEventListener("mouseover",BY(e,"handleEvent"));b=a.a;f=new Ea;f.cY=c;b.addEventListener("mouseout",BY(f,"handleEvent"));return a;case 1:b=a.a;f=new D_;f.co=c;b.addEventListener("click",
BY(f,"handleEvent"));return a;case 2:b=a.a;f=new D$;f.c4=c;b.addEventListener("resize",BY(f,"handleEvent"));return a;default:}c=new BZ;Bt(c,b);L(c);}
var C3=E(0);
function Bl(a,b){var c,d;b=b.data;c=b.length;d=0;while(d<c){Bh(a,b[d]);d=d+1|0;}return a;}
function Ek(a,b){var c,d,e;c=new D8;c.cE=a;d=b.dv;while(true){e=d.bJ;if(e>=d.dC)break;d.bJ=e+1|0;Gl(c,b.cH.da(e));}return a;}
var B4=E(Bj);
function Bh(a,b){var c,d;c=a.a;d=b.a;c.appendChild(d);return a;}
function CS(a,b){return Bh(a,b);}
var BI=E(0);
var Dx=E(0);
var DE=E(0);
var BD=E(0);
var Gq=E(0);
function BA(){return $rt_globals.window.document;}
function FB(){var a=this;Ck.call(a);a.cj=null;a.bW=null;a.b$=null;a.dj=0;}
function Fl(a,b){var c,d,e;c=a.cj;d=b;c=c.bs;if(!(d!==null&&!(typeof d.constructor.$meta==='undefined'?1:0)&&GJ(d.constructor,c)?1:0))return null;e=b.Q;return a.bW.data[e];}
var FE=E(0);
var C2=E(0);
var FP=E(0);
function G5(b,c){var d;d=new EE;d.bJ=b;d.dC=c;return d;}
var Db=E(0);
function Eu(){var a=this;B.call(a);a.ck=null;a.cm=null;}
function HO(a,b){var c,d,e,f,g;c=a.ck;d=a.cm;e=Bu(d);f=G5(0,6);g=new Ew;g.cN=c;g.cM=b;g.d7=d;return Ek(e,Dv(f,g));}
var FV=E(0);
var Fc=E(0);
var EY=E(0);
var Em=E(0);
var E6=E(0);
var Fu=E(0);
var Fn=E(0);
var FA=E(0);
var Gz=E();
function HB(a,b,c){a.fd($rt_str(b),C5(c,"handleEvent"));}
function HK(a,b,c){a.eX($rt_str(b),C5(c,"handleEvent"));}
function If(a,b){return a.gc(b);}
function Ii(a,b,c,d){a.fl($rt_str(b),C5(c,"handleEvent"),d?1:0);}
function Im(a,b){return !!a.fi(b);}
function IP(a){return a.fY();}
function HL(a,b,c,d){a.go($rt_str(b),C5(c,"handleEvent"),d?1:0);}
var C7=E();
function Dv(a,b){var c;c=new D0;c.dv=a;c.cH=b;return c;}
function EE(){var a=this;C7.call(a);a.bJ=0;a.dC=0;}
function G1(){var a=this;Bk.call(a);a.bL=0;a.bP=0;a.bN=0;a.cZ=0.0;}
function Bi(a,b,c){var d=new G1();H$(d,a,b,c);return d;}
function DW(a,b,c,d){var e=new G1();Gg(e,a,b,c,d);return e;}
function H$(a,b,c,d){Gg(a,b,c,d,1.0);}
function Gg(a,b,c,d,e){a.bL=b;a.bP=c;a.bN=d;a.cZ=e;}
var BZ=E(Bp);
var CW=E(0);
var CE=E(0);
var BJ=E();
var FC=E(0);
var Cc=E(BJ);
var Dq=E(Cc);
function Dc(){var a=this;Dq.call(a);a.bi=null;a.bc=null;}
function GS(b){var c;c=b.bs;c.$clinit();return H6(c);}
var D4=E(0);
var Et=E(B4);
var E4=E(0);
var E9=E(Bj);
var Fy=E(0);
function ER(){Bj.call(this);this.dK=null;}
function F5(a,b,c){var d,e;d=a.a;e=BP(b);d.setAttribute("min",$rt_ustr(e));d=a.a;e=BP(c);d.setAttribute("max",$rt_ustr(e));return a;}
function F8(a,b){a.dK=b;return a;}
var DX=E(0);
function FU(){var a=this;Bj.call(a);a.cL=null;a.ea=null;}
function Bx(a,b){return b!==null?DY(a,b):Dk(a);}
function Dk(a){var b,c;a.a.style.setProperty("color","transparent");b=a.a;c="Plh";b.innerHTML=c;return a;}
function DY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.ea=b;if(a.cL===null)a.a.style.removeProperty("color");else{c=a.a.style;d=Fh(a.cL);c.setProperty("color",$rt_ustr(d));}e=a.a;f=new DJ;f.dR=b;f.dS=10;d=new EV;d.z=b;d.bQ=10;g=!Df(b)&&W(d.z,0)==d.bQ?1:0;a:{d.M=g;b=new Du;b.d1=f;b.bA=d;c=Jp(b);h=new Es;h.dw=C(63);i=Bc(BC,0);f=new Dc;DR(f);f.bi=H(BC);f.bc=Hm((((GS(H(BC))).data.length-1|0)/32|0)+1|0);Gf(i);b=new Ee;b.ei=i;if(b instanceof Dc){j=b;if(f.bi===j.bi){g=0;while(true){k=f.bc.data;if(g>=k.length)break;l=k[g];i
=j.bc.data;if((l|i[g])!=k[g])k[g]=k[g]|i[g];g=g+1|0;}break a;}}k=i.data;m=0;l=b.dV;g=k.length;n=Cv(l,l);while(true){if(!(m>=g?0:1))break a;if(n<0)break;o=m+1|0;l=k[m].Q;p=l/32|0;l=1<<(l%32|0);i=f.bc.data;if(i[p]&l)l=0;else{i[p]=i[p]|l;l=1;}if(l){m=o;continue;}m=o;}b=new Cy;Go(b);L(b);}f=V();while(true){b=new E1;b.cu=h;b.ct=f;if(!Ft(c,b))break;}EZ(f,0,C(64),0,Bf(C(64)));b=$rt_ustr(O(CY(f,C(64))));e.innerHTML=b;return a;}
var Er=E(0);
var BO=E();
function D0(){var a=this;BO.call(a);a.dv=null;a.cH=null;}
var Ch=E(Bp);
var Dd=E(Ch);
var EL=E(0);
var Eh=E(Bj);
function C9(a){var b;b=new Fq;b.c=a.a.getContext("2d");return b;}
function FF(a,b,c){var d,e;d=a.a;e=b;d.width=e;d=a.a;e=c;d.height=e;return a;}
var FH=E(0);
var Ei=E(Bj);
function CP(a,b){var c,d;c=a.a;d=!!b;c.disabled=d;return a;}
function BQ(a,b){var c;c=a.a;b=$rt_ustr(b);c.value=b;return a;}
function BS(a){return $rt_str(a.a.value);}
var DB=E(0);
function Dj(){var a=this;B.call(a);a.O=null;a.p=null;}
function Cw(){var a=this;Dj.call(a);a.bv=0;a.s=null;}
var Cj=E(BB);
var Ky=null;var Kz=null;var Lh=null;function Hh(){Hh=Bg(Cj);H5();}
function H4(a,b){var c=new Cj();G6(c,a,b);return c;}
function HZ(){Hh();return Lh.be();}
function G6(a,b,c){Hh();CD(a,b,c);}
function H5(){var b;Ky=H4(C(65),0);b=H4(C(66),1);Kz=b;Lh=EC(Cj,[Ky,b]);}
var BM=E(0);
function Fe(){B.call(this);this.dA=null;}
function Iy(a,b){var c,d;b=a.dA;c=Cq($rt_str(b.a.value));b=FM(b.dK);d=new D6;d.b9=c;FG(b,d);}
var DF=E(BU);
function Ec(){B.call(this);this.c0=null;}
function I2(a,b){var c,d;c=a.c0;d=new Cr;CK();CJ(d,Li,b);c.d(d);}
function Eb(){B.call(this);this.b7=null;}
function Hz(a,b){var c,d;c=a.b7;d=new Cr;CK();CJ(d,Lj,b);c.d(d);}
function Ea(){B.call(this);this.cY=null;}
function I1(a,b){var c,d;c=a.cY;d=new Cr;CK();CJ(d,Lk,b);c.d(d);}
function D_(){B.call(this);this.co=null;}
function IC(a,b){var c,d;c=a.co;d=new Cr;CK();CJ(d,Ll,b);c.d(d);}
function D$(){B.call(this);this.c4=null;}
function IM(a,b){a.c4.d(null);}
var En=E(0);
function Fq(){B.call(this);this.c=null;}
function BW(a,b,c,d,e){var f,g,h,i;a.c.beginPath();f=a.c;g=b;h=c;f.moveTo(g,h);i=a.c;g=d;h=e;i.lineTo(g,h);a.c.stroke();}
function D7(a,b,c,d){var e,f,g;a.c.beginPath();e=a.c;f=c;g=b;e.moveTo(f,g);e=a.c;f=d;e.lineTo(f,g);a.c.stroke();}
function EF(a,b,c,d){var e,f,g,h;a.c.beginPath();e=a.c;f=b;g=c;e.moveTo(f,g);h=a.c;g=d;h.lineTo(f,g);a.c.stroke();}
function CX(a,b,c,d){var e,f,g;e=a.c;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function FS(){B.call(this);this.U=null;}
var Lm=null;function I$(a){var b=new FS();IW(b,a);return b;}
function IW(a,b){a.U=b;}
function Gm(){if(Lm===null)Lm=I$(null);return Lm;}
function Hn(b){return I$(Gf(b));}
function FM(b){return b===null?Gm():Hn(b);}
function D1(a){var b;b=a.U;if(b!==null)return b;b=new Dp;U(b);L(b);}
function Fz(a){return a.U===null?0:1;}
function FG(a,b){var c;c=a.U;if(c!==null)b.d(c);}
function E5(){B.call(this);this.ca=null;}
function HR(a,b){var c,d,e,f,g,h,i;b=b;c=a.ca;d=c.a.style;e=b.dx;f=b.cO;g=Fh(b.dt);h=V();I(Bs(I(I(J(h,e),C(67)),f),32),g);h=O(h);d.setProperty("border",$rt_ustr(h));if(b.bq){i=c.a.style;e=b.bq;b=V();I(J(b,e),C(2));g=O(b);i.setProperty("border-radius",$rt_ustr(g));}}
function D8(){B.call(this);this.cE=null;}
function Gl(a,b){Bh(a.cE,b);}
var Hg=E(0);
function Fh(b){var c,d,e,f,g,h,i,j;c=b.cZ;if(c!==1.0){d=Fv(c*1000.0);if(d!=1000){e=b.bL;f=b.bP;g=b.bN;h=d/1000|0;d=d%1000|0;if(d<10){i=V();J(I(i,C(68)),d);b=O(i);}else if(d>=100)b=BP(d);else{b=V();J(Bs(b,48),d);b=O(b);}i=V();I(Bs(J(i,h),46),b);j=O(i);b=V();Bs(I(Bs(J(Bs(J(Bs(J(I(b,C(69)),e),44),f),44),g),44),j),41);return O(b);}}f=b.bL;d=b.bP;e=b.bN;b=V();Bs(J(Bs(J(Bs(J(I(b,C(70)),f),44),d),44),e),41);return O(b);}
function Fv(b){var c;c=Cv(b,0.0);return b+(c>0?1.0:c>=0?b:(-1.0))*0.5|0;}
var F2=E();
function DJ(){var a=this;B.call(a);a.dR=null;a.dS=0;}
var F6=E();
var Gr=E();
function Gf(b){if(b!==null)return b;b=new DL;Bt(b,C(64));L(b);}
function D6(){B.call(this);this.b9=0;}
function IJ(a,b){var c,d,e,f,g,h,i,j;a:{b=b;c=a.b9;b=b.c6;Bb();d=0.1*c;Bx(b,CU(d));b=Kc;e=b.dl-d;f=CA(b.t);g=f.N;if(g.A>0){h=g.r;i=0;while(true){j=f.N.k.data;if(i>=j.length)break a;g=j[i];while(g!==null){HV(e,g.p);g=g.s;if(h!=f.N.r){b=new Cy;U(b);L(b);}}i=i+1|0;}}}b.dl=d;CL();}
var G0=E();
function HY(b){return Math.sin(b);}
function Ia(b){return Math.cos(b);}
function F3(b){return Math.exp(b);}
function IZ(b){return Math.sqrt(b);}
function Eg(b,c){if(b<c)c=b;return c;}
function B6(b,c){if(b>c)c=b;return c;}
function CQ(b){if(b<=0)b= -b|0;return b;}
function GD(b,c){return IZ(b*b+c*c);}
function FZ(){BO.call(this);this.dF=null;}
function Jp(a){var b=new FZ();GA(b,a);return b;}
function GA(a,b){a.dF=b;}
function Ft(a,b){var c;c=new E_;c.dM=b;while(a.dF.cs(c)){if(c.dp)continue;else return 1;}return 0;}
var DK=E(0);
function Es(){B.call(this);this.dw=null;}
var EP=E(0);
var Ff=E(0);
function GF(){B.call(this);this.fR=null;}
var Dz=E(0);
var GG=E();
var Fm=E(0);
function GB(){var a=this;B.call(a);a.f9=null;a.f8=null;}
var BC=E(BB);
var Ln=null;var Lo=null;var Lp=null;var Lq=null;function II(){II=Bg(BC);IH();}
function GY(a,b){var c=new BC();G3(c,a,b);return c;}
function HH(){II();return Lq.be();}
function G3(a,b,c){II();CD(a,b,c);}
function IH(){var b;Ln=GY(C(71),0);Lo=GY(C(72),1);b=GY(C(73),2);Lp=b;Lq=EC(BC,[Ln,Lo,b]);}
var EX=E(0);
var GR=E();
function Ga(){var a=this;B.call(a);a.fu=null;a.es=null;a.fn=null;a.eQ=null;a.gs=null;}
var DL=E(Bp);
var Bd=E(BZ);
var DU=E(0);
function C8(){BJ.call(this);this.dV=0;}
var E0=E(0);
function Ee(){C8.call(this);this.ei=null;}
var Hs=E();
var G_=E();
function FR(){var a=this;B.call(a);a.dk=null;a.dn=0;}
var GO=E();
function G$(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.dk.data;f=b.dn;b.dn=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ib(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Gn(b){var c,d;c=G$(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var B2=E(0);
function E1(){var a=this;B.call(a);a.cu=null;a.ct=null;}
function Iw(a,b){var c,d;c=a.cu;d=a.ct;b=b;c=c.dw;if(d.f>0)CY(d,c);CY(d,b);return 1;}
var C1=E(0);
function Du(){var a=this;B.call(a);a.bA=null;a.d1=null;}
function H2(a,b){var c,d,e,f,g,h,i,j;c=a.bA;if(!(c.M>=Bf(c.z)?0:1))return 0;a:{c=a.bA;d=c.z;e=c.bQ;f=B6(0,c.M);if(e<65536){g=e&65535;while(true){h=d.n.data;if(f>=h.length){f=(-1);break a;}if(h[f]==g)break;f=f+1|0;}}else{i=(55296|(e-65536|0)>>10&1023)&65535;j=(56320|e&1023)&65535;while(true){h=d.n.data;if(f>=(h.length-1|0)){f=(-1);break a;}if(h[f]==i&&h[f+1|0]==j)break;f=f+1|0;}}}if(f<0)f=Bf(c.z);d=Cu(c.z,c.M,f);c.M=f+1|0;Eq(b,d);return 1;}
var D2=E(0);
function Cr(){var a=this;B.call(a);a.eg=null;a.bz=null;}
function Lr(a,b){var c=new Cr();CJ(c,a,b);return c;}
function CJ(a,b,c){a.eg=b;a.bz=c;}
var BK=E(BB);
var Lj=null;var Lk=null;var Li=null;var Ll=null;var Ls=null;function CK(){CK=Bg(BK);HG();}
function ES(a,b){var c=new BK();F1(c,a,b);return c;}
function Ir(){CK();return Ls.be();}
function F1(a,b,c){CK();CD(a,b,c);}
function HG(){var b;Lj=ES(C(74),0);Lk=ES(C(75),1);Li=ES(C(76),2);b=ES(C(77),3);Ll=b;Ls=EC(BK,[Lj,Lk,Li,b]);}
function E_(){var a=this;B.call(a);a.dM=null;a.dp=0;}
function Eq(a,b){a.dp=a.dM.dQ(b);}
function He(){B.call(this);this.ey=null;}
var Cn=E(0);
function GC(){var a=this;B.call(a);a.fp=0;a.fs=0;a.fv=0;a.eY=0;a.fH=null;}
function DO(){B.call(this);this.cV=null;}
function H_(a,b){b=a.cV;Bb();Ca(b);}
function DN(){var a=this;B.call(a);a.dO=null;a.dP=null;}
function IT(a,b){var c,d,e,$$je;b=a.dO;c=a.dP;Bb();a:{try{d=Cq(BS(b.bh));e=Cq(BS(b.bT));if(d==e)L(Jd());b=Gk(JD(GM(Eg(d,e),B6(d,e))),DM(b.bY));break a;}catch($$e){$$je=IS($$e);if($$je instanceof BU){}else{throw $$e;}}b=null;}if(b!==null){Ca(c);D9(Kc.bf,b.q,b);CL();}}
function EM(){var a=this;B.call(a);a.c3=null;a.cn=null;a.c8=null;}
function In(a){return a.c3;}
function DP(){B.call(this);this.cF=null;}
function Il(a,b){b=a.cF;Bb();Ca(b);}
function E$(){var a=this;B.call(a);a.bd=0;a.bg=null;a.h=null;a.E=null;a.bK=0;}
function JB(){var a=new E$();It(a);return a;}
function GZ(a,b){a.bd=b;return a;}
function GE(a,b){a.bg=b;return a;}
function G8(a,b){a.h=b;return a;}
function Gb(a,b){a.E=b;return a;}
function Hr(a,b){a.bK=b;return a;}
function It(a){}
function Eo(){B.call(this);this.cf=null;}
function HD(a,b){b=a.cf;Bb();Ca(b);}
function Ep(){var a=this;B.call(a);a.cG=null;a.cI=null;}
function H9(a,b){var c;b=a.cG;c=a.cI;Bb();b=DA(b);if(b!==null){Ca(c);Ex(Kc,b);CL();}}
function EV(){var a=this;B.call(a);a.M=0;a.z=null;a.bQ=0;}
function F7(){var a=this;Bk.call(a);a.i=0;a.j=0;}
function Ij(a,b){var c=new F7();Hy(c,a,b);return c;}
function Jt(a,b){var c=new F7();F9(c,a,b);return c;}
function Hy(a,b,c){F9(a,Fv(b),Fv(c));}
function F9(a,b,c){a.i=b;a.j=c;}
function Ge(){var a=this;B.call(a);a.q=null;a.bb=null;}
function JD(a){var b=new Ge();H3(b,a);return b;}
function H3(a,b){a.q=b;}
function Gk(a,b){a.bb=b;return a;}
var Ez=E(0);
var E7=E();
var E3=E(0);
var E8=E();
function I_(a,b){var c,d,e,f,g,h,i,j,k;b;Bb();b=C9(Kd);b.c.clearRect(0.0,0.0,800.0,800.0);c=Cb(Ed(Kc));while(BF(c)){d=Co(c);e=d.bb;f=b.c;e=$rt_ustr(e.B);f.strokeStyle=e;f=CC(Kc,d.q.x);d=CC(Kc,d.q.u);f=B5(f.h);d=B5(d.h);BW(b,f.i,f.j,d.i,d.j);}c=Cb(FL(Kc));while(BF(c)){d=Co(c);e=d.bg;f=b.c;e=$rt_ustr(e.B);f.fillStyle=e;f=B5(d.h);g=f.i;h=f.j;b.c.beginPath();i=b.c;j=g;k=h;i.arc(j,k,2.0,0.0,6.283185307179586);b.c.fill();f=FI(d,f);CX(b,d.E,f.i,f.j);}Kg=null;}
function Fa(){var a=this;Bk.call(a);a.m=0.0;a.l=0.0;}
function Gi(a,b){var c=new Fa();Hi(c,a,b);return c;}
function Hi(a,b,c){a.m=b;a.l=c;}
function Do(a,b){return Gi(a.m-b.m,a.l-b.l);}
function CR(a){return GD(a.m,a.l);}
function CN(){var a=this;Bk.call(a);a.x=0;a.u=0;}
function GM(b,c){var d,e;if(b==c){d=new BZ;U(d);L(d);}d=new CN;e=Eg(b,c);b=B6(b,c);d.x=e;d.u=b;return d;}
function HX(a){return ((31+CZ(a.x)|0)*31|0)+CZ(a.u)|0;}
function IB(a,b){var c;if(a===b)c=1;else if(b!==null&&GW(b)===H(CN)){b=b;c=a.x!=b.x?0:a.u==b.u?1:0;}else c=0;return c;}
var DC=E(0);
function Gs(){var a=this;B.call(a);a.ev=null;a.ex=null;}
var CM=E(BV);
var Lt=0.0;var Lu=null;function CU(b){var c;c=V();Hw(c,c.f,b);return O(c);}
function Fp(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;if(Df(b)){b=new Bd;U(b);L(b);}c=0;d=Bf(b);while(true){if(W(b,c)>32){while(W(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(W(b,c)==45){c=c+1|0;e=1;}else if(W(b,c)==43)c=c+1|0;if(c==d){b=new Bd;U(b);L(b);}a:{f=W(b,c);g=B$;h=0;i=0;if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(W(b,c)!=48)break b;c=c+1|0;}}while(c<d){j=W(b,c);if(j<48)break a;if(j>57)break a;if(Dy(g,Q(3435973827, 214748364)))h=h+1|0;else g=Y(P(g,F(10)),F(j-48|0));c=c+1|0;}}else{b=new Bd;U(b);L(b);}}}if(c<d&&W(b,c)
==46){c=c+1|0;c:{while(true){if(c>=d)break c;k=W(b,c);if(k<48)break c;if(k>57)break;if(HE(g,Q(3435973827, 214748364))){g=Y(P(g,F(10)),F(k-48|0));h=h+(-1)|0;}c=c+1|0;i=1;}}if(!i){b=new Bd;U(b);L(b);}}if(c<d){k=W(b,c);if(k!=101&&k!=69){b=new Bd;U(b);L(b);}j=c+1|0;k=0;if(j==d){b=new Bd;U(b);L(b);}if(W(b,j)==45){j=j+1|0;k=1;}else if(W(b,j)==43)j=j+1|0;l=0;c=0;d:{while(true){if(j>=d)break d;i=W(b,j);if(i<48)break d;if(i>57)break;l=(10*l|0)+(i-48|0)|0;c=1;j=j+1|0;}}if(!c){b=new Bd;U(b);L(b);}if(k)l= -l|0;h=h+l|0;}e:
{j=Cv(h,308);if(j<=0){if(j)break e;if(CO(g,Q(2133831477, 4185580)))break e;}return e?(-Infinity):Infinity;}if(e)g=Jg(g);m=Jz(g);if(h>=0)n=10.0;else{n=0.1;h= -h|0;}o=1.0;while(h){if(h%2|0)o=o*n;n=n*n;h=h/2|0;}return m*o;}c=c+1|0;if(c==d)break;}b=new Bd;U(b);L(b);}
function Hj(){Lt=$rt_globals.NaN;Lu=H($rt_doublecls());}
function Fd(){B.call(this);this.b6=null;}
var Cy=E(Bp);
var Dp=E(Bp);
function FO(){BJ.call(this);this.N=null;}
function Cb(a){var b;b=new EW;DD(b,a.N);return b;}
function Fx(){Cc.call(this);this.dB=null;}
function EQ(a){var b;b=new Fo;DD(b,a.dB);return b;}
var FY=E(0);
function Fs(){B.call(this);this.J=null;}
function Hd(){B.call(this);this.f3=0.0;}
function Cp(){var a=this;B.call(a);a.T=0;a.cS=0;a.I=null;a.L=null;a.cP=null;a.Y=null;}
function Lv(a){var b=new Cp();DD(b,a);return b;}
function DD(a,b){a.Y=b;a.cS=b.r;a.I=null;}
function BF(a){var b,c;if(a.I!==null)return 1;while(true){b=a.T;c=a.Y.k.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.T=b+1|0;}return 0;}
function Hv(a){var b;if(a.cS==a.Y.r)return;b=new Cy;U(b);L(b);}
function Fb(a){var b,c,d,e;Hv(a);if(!BF(a)){b=new Dp;U(b);L(b);}b=a.I;if(b!==null){c=a.L;if(c!==null)a.cP=c;a.L=b;a.I=b.s;}else{d=a.Y.k.data;e=a.T;a.T=e+1|0;b=d[e];a.L=b;a.I=b.s;a.cP=null;}}
var EW=E(Cp);
function Co(a){Fb(a);return a.L.p;}
var Fo=E(Cp);
function Fk(a){Fb(a);return a.L;}
function Di(){BO.call(this);this.di=null;}
function E2(){Di.call(this);this.cX=null;}
function DZ(){var a=this;B.call(a);a.cy=null;a.Z=null;}
function IY(a,b){if(a.Z===null)a.Z=Cb(a.cy);if(!BF(a.Z))return 0;Eq(b,Co(a.Z));return 1;}
var B3=E();
var Lw=null;var Kp=null;var Kq=null;var Ko=null;var Lx=null;function Hb(){Lw=Jx([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Kp=IN([F(1),F(10),F(100),F(1000),F(10000),F(100000),F(1000000),F(10000000),F(100000000),F(1000000000),Q(1410065408, 2),Q(1215752192, 23),Q(3567587328, 232),Q(1316134912, 2328),Q(276447232, 23283),Q(2764472320, 232830),Q(1874919424, 2328306),Q(1569325056, 23283064),Q(2808348672, 232830643)]);Kq=IN([F(1),F(10),F(100),F(10000),F(100000000),Q(1874919424, 2328306)]);Ko
=new EU;Lx=new Ds;}
var Dh=E();
var Ly=null;var Lz=null;function G9(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_doubleToLongBits(b);c.cJ=Cs(Bm(d,Q(0, 2147483648)),B$)?0:1;e=Bm(d,Q(4294967295, 1048575));f=HF(CH(d,52))&2047;if(Cs(e,B$)&&!f){c.bj=B$;c.bM=0;return;}g=0;if(f)e=Jf(e,Q(0, 1048576));else{e=B7(e,1);while(Cs(Bm(e,Q(0, 1048576)),B$)){e=B7(e,1);f=f+(-1)|0;g=g+1|0;}}h=Lz.data;i=0;j=h.length;k=Cv(i,j);if(k>0){c=new BZ;U(c);L(c);}a:{if(!k)l=(-1);else{j=j-1|0;while(true){l=(i+j|0)/2|0;k=h[l];if(k==f)break;if(f>=k){i=l+1|0;if(i>j){l=( -l
|0)-2|0;break a;}}else{j=l-1|0;if(j<i){l=( -l|0)-1|0;break a;}}}}}if(l<0)l=( -l|0)-2|0;i=12+(f-h[l]|0)|0;m=Fj(e,Ly.data[l],i);if(Dy(m,Q(2808348672, 232830643))){l=l+1|0;i=12+(f-Lz.data[l]|0)|0;m=Fj(e,Ly.data[l],i);}n=BN(Ly.data[l],(63-i|0)-g|0);o=CH(Y(n,F(1)),1);p=CH(n,1);if(Cs(e,Q(0, 1048576)))p=CH(p,2);q=F(10);while(CO(q,p)){q=P(q,F(10));}if(Dy(DT(m,q),Bq(p,F(2))))q=Bq(q,F(10));r=F(1);while(CO(r,o)){r=P(r,F(10));}if(Hx(Jv(r,DT(m,r)),Bq(o,F(2))))r=Bq(r,F(10));f=JG(q,r);e=f>0?P(Bq(m,q),q):f<0?Y(P(Bq(m,r),r),
r):P(Bq(Y(m,Bq(r,F(2))),r),r);if(Dy(e,Q(2808348672, 232830643))){l=l+1|0;e=Bq(e,F(10));}else if(HE(e,Q(1569325056, 23283064))){l=l+(-1)|0;e=P(e,F(10));}c.bj=e;c.bM=l-330|0;}
function Fj(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Bm(b,F(65535));f=Bm(BN(b,16),F(65535));g=Bm(BN(b,32),F(65535));h=Bm(BN(b,48),F(65535));i=Bm(c,F(65535));j=Bm(BN(c,16),F(65535));k=Bm(BN(c,32),F(65535));l=Bm(BN(c,48),F(65535));m=Y(Y(P(k,e),P(j,f)),P(i,g));n=Y(Y(Y(P(l,e),P(k,f)),P(j,g)),P(i,h));o=Y(Y(B7(P(l,h),32+d|0),B7(Y(P(l,g),P(k,h)),16+d|0)),B7(Y(Y(P(l,f),P(k,g)),P(j,h)),d));return Y(d>16?Y(o,B7(n,d-16|0)):Y(o,BN(n,16-d|0)),BN(m,32-d|0));}
function GN(){var b,c,d,e,f,g,h,i,j,k;Ly=Jq(660);Lz=Hm(660);b=Q(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Ly.data;g=d+330|0;f[g]=CV(e,F(80));Lz.data[g]=c;e=CV(e,F(10));h=Gy(e,F(10));while(CO(e,b)&&Cs(Bm(e,Q(0, 2147483648)),B$)){e=B7(e,1);c=c+1|0;h=B7(h,1);}e=Y(e,Bq(h,F(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Hx(e,Q(3435973836, 214748364))){e=CH(e,1);j=j+1|0;d=d+(-1)|0;}k=P(e,F(10));b=j<=0?k:Y(k,CH(P(Bm(b,F((1<<j)-1|0)),F(10)),j));f=Ly.data;g=(330-i|0)-1|0;f[g]=CV(b,F(80));Lz.data[g]=
d;i=i+1|0;}}
function EU(){var a=this;B.call(a);a.bj=B$;a.bM=0;a.cJ=0;}
function Ew(){var a=this;B.call(a);a.cN=null;a.cM=0;a.d7=null;}
function H7(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.cN;d=a.cM;e=(GH()).data[(d*6|0)+b|0];f=Cf(30);g=Cf(15);h=(BA()).createElement("div");if(f!==null){i=h.style;j=V();I(I(j,f),C(2));k=O(j);i.setProperty("width",$rt_ustr(k));}if(g!==null){f=h.style;i=V();I(I(i,g),C(2));k=O(i);f.setProperty("height",$rt_ustr(k));}f=Jm(h);g=FW(f);if(e===null)g.J.style.removeProperty("background-color");else{i=g.J.style;k=e.B;i.setProperty("background-color",$rt_ustr(k));}Ct();BG(f,B_(KF));g=c.ba;l=e.Q;m=g.b$.data;if(!m[l]){m[l]=1;g.dj
=g.dj+1|0;}g.bW.data[l]=f;i=new DS;i.dg=c;i.dh=e;Br(f,C(3),i);return f;}
var Ds=E();
var FQ=E(BV);
var LA=null;function CV(b,c){return Long_udiv(b, c);}
function Gy(b,c){return Long_urem(b, c);}
function GL(){LA=H($rt_longcls());}
function DS(){var a=this;B.call(a);a.dg=null;a.dh=null;}
function Ih(a,b){Cg(a.dg,a.dh);}
function Fg(){B.call(this);this.br=null;}
function Dt(){var a=this;B.call(a);a.cp=null;a.cq=null;}
function Iq(a,b){var c,d,e,f;c=a.cp;d=a.cq;c=c.cX;e=b;c=c.b6;e=e.h;if(!(GD(c.m-e.m,c.l-e.l)>=0.2?0:1))f=1;else{d.br=b;f=0;}return f;}
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,BH,0,B,[],0,3,0,Bb,0,D3,0,B,[],3,3,0,0,0,DH,0,B,[],3,3,0,0,0,Ef,0,B,[D3,DH],0,3,0,0,0,Ho,0,B,[],4,0,0,0,0,Ha,0,B,[],4,3,0,0,0,BE,0,B,[],3,3,0,0,0,BR,0,B,[],3,3,0,0,0,C_,0,B,[],3,3,0,0,0,Dm,0,B,[BE,BR,C_],0,3,0,0,["v",JT(IE)],Cl,0,B,[],0,3,0,0,0,Da,0,Cl,[],0,3,0,0,0,Cm,0,Da,[],0,3,0,0,0,GT,0,Cm,[],0,3,0,0,0,BV,0,B,[BE],1,3,0,0,0,Cd,0,BV,[BR],0,3,0,0,["v",JT(GX),"S",JT(HI),"bG",JU(IR)],C4,0,B,[BE,C_],0,0,0,0,["de",JU(EO),"v",JT(O)],EB,0,B,[],3,3,0,0,0,F$,0,C4,[EB],0,3,0,0,["v",
JT(IA),"de",JU(I3)],Ce,0,Cm,[],0,3,0,0,0,GQ,0,Ce,[],0,3,0,0,0,Gx,0,Ce,[],0,3,0,0,0,BU,0,Cl,[],0,3,0,0,0,Bp,0,BU,[],0,3,0,0,0,C$,0,B,[],0,3,0,Hq,0,Bk,0,B,[],1,3,0,0,0,Gd,0,Bk,[],32772,3,0,0,0,Z,0,B,[],3,3,0,0,0,EK,0,B,[Z],0,3,0,0,["d",JU(Ja)],EI,0,B,[Z],0,3,0,0,["d",JU(Ix)],EJ,0,B,[Z],0,3,0,0,["d",JU(H0)],EG,0,B,[Z],0,3,0,0,["d",JU(HS)],EH,0,B,[Z],0,3,0,0,["d",JU(Iu)],DQ,0,B,[],3,3,0,0,0,GU,0,B,[DQ],0,3,0,0,0,Ht,0,B,[],4,3,0,0,0,ED,0,B,[],3,3,0,0,0,CT,0,B,[ED],0,3,0,I5,0,DI,0,B,[],0,3,0,0,0,CF,0,B,[],3,3,0,0,
0,Gv,0,B,[CF],0,3,0,0,["bF",JT(HU)],F4,0,B,[CF],0,3,0,0,["bF",JT(HJ)],FJ,0,B,[],0,3,0,0,0,Fi,0,B,[],3,3,0,0,0,DG,0,B,[Fi],0,3,0,0,0,B8,0,B,[BR],0,3,0,0,0,DV,0,B,[],3,3,0,0,0,Ck,0,B,[DV],1,3,0,0,0,B9,0,B,[],3,3,0,0,0]);
$rt_metadata([Hf,0,Ck,[B9,BE],0,3,0,0,0,X,0,B,[],3,3,0,0,0,Gj,0,B,[],0,3,0,0,0,BB,0,B,[BR,BE],1,3,0,0,["v",JT(Ig)],M,0,BB,[],12,3,0,De,0,T,0,B,[],3,3,0,0,0,B0,0,Bk,[],32772,3,0,Ct,0,Bj,0,B,[X],0,3,0,0,0,C3,0,B,[X],3,3,0,0,0,B4,0,Bj,[C3],0,3,0,0,0,BI,0,B,[],3,3,0,0,0,Dx,0,B,[BI],3,3,0,0,0,DE,0,B,[Dx],3,3,0,0,0,BD,0,B,[BI],3,3,0,0,0,Gq,0,B,[DE,BD],3,3,0,0,0,FB,0,Ck,[BE,B9],0,3,0,0,0,FE,0,B,[],3,3,0,0,0,C2,0,B,[FE],3,3,0,0,0,FP,0,B,[C2],3,3,0,0,0,Db,0,B,[],3,3,0,0,0,Eu,0,B,[Db],0,3,0,0,["da",JU(HO)],FV,0,B,[BD],
3,3,0,0,0,Fc,0,B,[BD],3,3,0,0,0,EY,0,B,[BD],3,3,0,0,0,Em,0,B,[BD],3,3,0,0,0,E6,0,B,[BD],3,3,0,0,0,Fu,0,B,[BD,FV,Fc,EY,Em,E6],3,3,0,0,0,Fn,0,B,[],3,3,0,0,0,FA,0,B,[BI],3,3,0,0,0,Gz,0,B,[BI,Fu,Fn,FA],1,3,0,0,["fQ",JV(HB),"fF",JV(HK),"eD",JU(If),"eO",JW(Ii),"fg",JU(Im),"fo",JT(IP),"fS",JW(HL)],C7,0,B,[FP],1,3,0,0,0,EE,0,C7,[],0,3,0,0,0,G1,0,Bk,[T],32772,3,0,0,0,BZ,0,Bp,[],0,3,0,0,0,CW,0,B,[],3,3,0,0,0,CE,0,B,[CW],3,3,0,0,0,BJ,0,B,[CE],1,3,0,0,0,FC,0,B,[CE],3,3,0,0,0,Cc,0,BJ,[FC],1,3,0,0,0,Dq,0,Cc,[B9,BE],1,3,0,
0,0,Dc,0,Dq,[],0,0,0,0,0,D4,0,B,[C3],3,3,0,0,0,Et,0,B4,[D4],0,3,0,0,0,E4,0,B,[X],3,3,0,0,0,E9,0,Bj,[E4],0,3,0,0,0,Fy,0,B,[X],3,3,0,0,0,ER,0,Bj,[Fy],0,3,0,0,0,DX,0,B,[X],3,3,0,0,0,FU,0,Bj,[DX],0,3,0,0,0,Er,0,B,[C2],3,3,0,0,0]);
$rt_metadata([BO,0,B,[Er],1,3,0,0,0,D0,0,BO,[],0,3,0,0,0,Ch,0,Bp,[],0,3,0,0,0,Dd,0,Ch,[],0,3,0,0,0,EL,0,B,[X],3,3,0,0,0,Eh,0,Bj,[EL],0,3,0,0,0,FH,0,B,[X],3,3,0,0,0,Ei,0,Bj,[FH],0,3,0,0,0,DB,0,B,[],3,3,0,0,0,Dj,0,B,[DB,B9],0,0,0,0,0,Cw,0,Dj,[],0,0,0,0,0,Cj,0,BB,[],12,3,0,Hh,0,BM,0,B,[BI],3,3,0,0,0,Fe,0,B,[BM],0,3,0,0,["K",JU(Iy)],DF,0,BU,[],0,3,0,0,0,Ec,0,B,[BM],0,3,0,0,["K",JU(I2)],Eb,0,B,[BM],0,3,0,0,["K",JU(Hz)],Ea,0,B,[BM],0,3,0,0,["K",JU(I1)],D_,0,B,[BM],0,3,0,0,["K",JU(IC)],D$,0,B,[BM],0,3,0,0,["K",JU(IM)],En,
0,B,[],3,3,0,0,0,Fq,0,B,[En],0,3,0,0,0,FS,0,B,[],4,3,0,0,0,E5,0,B,[Z],0,3,0,0,["d",JU(HR)],D8,0,B,[Z],0,3,0,0,0,Hg,0,B,[],3,3,0,0,0,F2,0,B,[],4,3,0,0,0,DJ,0,B,[CW],0,3,0,0,0,F6,0,B,[],4,3,0,0,0,Gr,0,B,[],4,3,0,0,0,D6,0,B,[Z],0,3,0,0,["d",JU(IJ)],G0,0,B,[],4,3,0,0,0,FZ,0,BO,[],0,3,0,0,0,DK,0,B,[],3,3,0,0,0,Es,0,B,[DK],0,3,0,0,0,EP,0,B,[],3,3,0,0,0,Ff,0,B,[EP],3,3,0,0,0,GF,0,B,[Ff],0,3,0,0,0,Dz,0,B,[],3,3,0,0,0,GG,0,B,[Dz],0,3,0,0,0,Fm,0,B,[],3,3,0,0,0,GB,0,B,[Fm],0,3,0,0,0,BC,0,BB,[],12,3,0,II,0,EX,0,B,[],3,
3,0,0,0,GR,0,B,[],0,3,0,0,0,Ga,0,B,[EX],0,0,0,0,0,DL,0,Bp,[],0,3,0,0,0,Bd,0,BZ,[],0,3,0,0,0,DU,0,B,[CE],3,3,0,0,0,C8,0,BJ,[DU],1,3,0,0,0]);
$rt_metadata([E0,0,B,[],3,3,0,0,0,Ee,0,C8,[E0],0,0,0,0,0,Hs,0,B,[],4,0,0,0,0,G_,0,B,[],4,3,0,0,0,FR,0,B,[],0,3,0,0,0,GO,0,B,[],4,3,0,0,0,B2,0,B,[],3,3,0,0,0,E1,0,B,[B2],0,3,0,0,["dQ",JU(Iw)],C1,0,B,[],3,3,0,0,0,Du,0,B,[C1],0,0,0,0,["cs",JU(H2)],D2,0,B,[],3,3,0,0,0,Cr,0,B,[D2],0,3,0,0,0,BK,0,BB,[],12,3,0,CK,0,E_,0,B,[Z],0,0,0,0,0,He,0,B,[B2],0,3,0,0,0,Cn,0,B,[],3,3,0,0,0,GC,0,B,[Cn],0,0,0,0,0,DO,0,B,[Z],0,3,0,0,["d",JU(H_)],DN,0,B,[Z],0,3,0,0,["d",JU(IT)],EM,0,B,[CF],0,3,0,0,["bF",JT(In)],DP,0,B,[Z],0,3,0,0,
["d",JU(Il)],E$,0,B,[],0,3,0,0,0,Eo,0,B,[Z],0,3,0,0,["d",JU(HD)],Ep,0,B,[Z],0,3,0,0,["d",JU(H9)],EV,0,B,[Cn],0,0,0,0,0,F7,0,Bk,[],32772,3,0,0,0,Ge,0,B,[],0,3,0,0,0,Ez,0,B,[],3,3,0,0,0,E7,0,B,[Ez],0,3,0,0,0,E3,0,B,[BI],3,3,0,0,0,E8,0,B,[E3],0,3,0,0,["eS",JU(I_)],Fa,0,Bk,[],32772,3,0,0,0,CN,0,Bk,[],32772,3,0,0,["S",JT(HX),"bG",JU(IB)],DC,0,B,[],3,3,0,0,0,Gs,0,B,[DC],0,3,0,0,0,CM,0,BV,[BR],0,3,0,0,0,Fd,0,B,[B2],0,3,0,0,0,Cy,0,Bp,[],0,3,0,0,0,Dp,0,Bp,[],0,3,0,0,0,FO,0,BJ,[],0,0,0,0,0,Fx,0,Cc,[],0,0,0,0,0,FY,0,B,
[],3,3,0,0,0,Fs,0,B,[FY],0,3,0,0,0,Hd,0,B,[Z],0,3,0,0,0,Cp,0,B,[],0,0,0,0,0,EW,0,Cp,[Cn],0,0,0,0,0,Fo,0,Cp,[Cn],0,0,0,0,0,Di,0,BO,[],1,3,0,0,0,E2,0,Di,[],0,3,0,0,0,DZ,0,B,[C1],0,3,0,0,["cs",JU(IY)]]);
$rt_metadata([B3,0,B,[],0,0,0,0,0,Dh,0,B,[],4,3,0,0,0,EU,0,B,[],0,3,0,0,0,Ew,0,B,[Db],0,3,0,0,["da",JU(H7)],Ds,0,B,[],0,3,0,0,0,FQ,0,BV,[BR],0,3,0,0,0,DS,0,B,[Z],0,3,0,0,["d",JU(Ih)],Fg,0,B,[B2],0,3,0,0,0,Dt,0,B,[B2],0,3,0,0,["dQ",JU(Iq)]]);
function $rt_array(cls,data){this.hn=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","px","click","Add point","Add edge","Export","\\begin{picture}(800,800)(0,0)\n","\\linethickness{1pt}\n","\\put(",",",")","{\\color{","}","\\line(","){","}}\n","\\circle*{3}}\n","){$","$}\n","\\end{picture}","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","null","Close",
"vertical","horizontal","Id","x","y","name","text angle °","Update","From","To","Delete","black","blue","brown","cyan","darkgray","gray","green","lightgray","lime","magenta","olive","orange","pink","purple","red","teal","violet","white","yellow","solid","inset","resize","mousecontact","<br>","","MAX_DIST","SPLIT_DIST","px ","00","rgba(","rgb(","CONCURRENT","UNORDERED","IDENTITY_FINISH","OVER","OUT","MOVE","CLICK"]);
Dm.prototype.toString=function(){return $rt_ustr(this);};
Dm.prototype.valueOf=Dm.prototype.toString;B.prototype.toString=function(){return $rt_ustr(IG(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Y=Long_add;var Jv=Long_sub;var P=Long_mul;var Bq=Long_div;var DT=Long_rem;var Jf=Long_or;var Bm=Long_and;var LB=Long_xor;var B7=Long_shl;var CH=Long_shr;var BN=Long_shru;var JG=Long_compare;var Cs=Long_eq;var LC=Long_ne;var HE=Long_lt;var CO=Long_le;var Hx=Long_gt;var Dy=Long_ge;var LD=Long_not;var Jg=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(HW);
main.javaException=$rt_javaException;
(function(){var c;c=Gz.prototype;c.dispatchEvent=c.fg;c.addEventListener=c.fQ;c.removeEventListener=c.fF;c.getLength=c.fo;c.get=c.eD;c.addEventListener=c.fS;c.removeEventListener=c.eO;c=Fe.prototype;c.handleEvent=c.K;c=Ec.prototype;c.handleEvent=c.K;c=Eb.prototype;c.handleEvent=c.K;c=Ea.prototype;c.handleEvent=c.K;c=D_.prototype;c.handleEvent=c.K;c=D$.prototype;c.handleEvent=c.K;c=E8.prototype;c.onAnimationFrame=c.eS;})();
})(this);