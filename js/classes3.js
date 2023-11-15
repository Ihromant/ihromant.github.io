"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.M=f;}
function $rt_cls(cls){return Fm(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Lo(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.E.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return Lg(t);}
function $rt_throwableCause(t){return Li(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(LV());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return LW(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var EE=$rt_compare;var LX=$rt_nullCheck;var K=$rt_cls;var X=$rt_createArray;var Ls=$rt_isInstance;var LY=$rt_nativeThread;var LZ=$rt_suspending;var L0=$rt_resuming;var L1=$rt_invalidPointer;var D=$rt_s;var S=$rt_eraseClinit;var BN=$rt_imul;var KW=$rt_wrapException;var L2=$rt_checkBounds;var L3=$rt_checkUpperBound;var L4=$rt_checkLowerBound;var L5=$rt_wrapFunction0;var L6=$rt_wrapFunction1;var L7=$rt_wrapFunction2;var L8=$rt_wrapFunction3;var L9=$rt_wrapFunction4;var E=$rt_classWithoutFields;var FV
=$rt_createArrayFromData;var L$=$rt_createCharArrayFromData;var L_=$rt_createByteArrayFromData;var LN=$rt_createShortArrayFromData;var Gj=$rt_createIntArrayFromData;var Ma=$rt_createBooleanArrayFromData;var Mb=$rt_createFloatArrayFromData;var Mc=$rt_createDoubleArrayFromData;var It=$rt_createLongArrayFromData;var LT=$rt_createBooleanArray;var GQ=$rt_createByteArray;var Md=$rt_createShortArray;var BL=$rt_createCharArray;var IB=$rt_createIntArray;var Me=$rt_createLongArray;var Mf=$rt_createFloatArray;var Mg=$rt_createDoubleArray;var EE
=$rt_compare;var Mh=$rt_castToClass;var Mi=$rt_castToInterface;var Mj=$rt_equalDoubles;var Mk=Long_toNumber;var J=Long_fromInt;var Ml=Long_fromNumber;var B=Long_create;var C3=Long_ZERO;var Mm=Long_hi;var I7=Long_lo;
function C(){this.$id$=0;}
function Mn(){var a=new C();Hz(a);return a;}
function Hz(a){}
function Cg(a){return Fm(a.constructor);}
function KD(a){var b,c,d,e,f,g,h,i,j;b=Ek(a);if(!b)c=D(0);else{if(!b)d=32;else{e=0;d=b>>>16|0;if(d)e=16;else d=b;f=d>>>8|0;if(!f)f=d;else e=e|8;d=f>>>4|0;if(!d)d=f;else e=e|4;f=d>>>2|0;if(!f)f=d;else e=e|2;if(f>>>1|0)e=e|1;d=(32-e|0)-1|0;}d=(((32-d|0)+4|0)-1|0)/4|0;g=BL(d);h=g.data;e=(d-1|0)*4|0;f=0;while(e>=0){i=f+1|0;h[f]=DR((b>>>e|0)&15,16);e=e-4|0;f=i;}c=Lo(g);}j=N();G(G(j,D(1)),c);return L(j);}
function Ek(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Lb(a){var b,c,d;if(!Ls(a,BG)&&a.constructor.$meta.item===null){b=new Eg;M(b);H(b);}b=Ji(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var BR=E();
var Mo=null;var Mp=null;var Mq=null;var Mr=null;var Ms=null;var Mt=null;function B4(){B4=S(BR);Kp();}
function JD(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;Hx();HQ();Iz();Io();HZ();H0();Hr();HH();IK();Iu();Hv();B4();c=Fi(Mo,Dn(20));Co(c,IH(10));B6(c,Mp);d=F5(Mo,Dn(10));Co(d,IH(10));B6(d,Mq.em);B6(c,d);B6(Mu,c);Bj();e=Mv;f=BN(e,e);g=(f+e|0)+1|0;b=Kc();d=C4();h=0;while(h<g){if(h<f)i=Gj([h/e|0,h%e|0,BH(Mw)]);else{j=h-f|0;i=j<e?Gj([BH(Mw),j,BH(Mx)]):Gj([BH(Mw),BH(Mx),BH(Mx)]);}k=i.data;c=new D5;l=k.length;c.eq=i;c.bx=0;c.bI=l;c.cF=l-0|0;m=new EI;m.cP=3;c=BT(c,m);m=Mx;n=new EM;o=new Fh;o.fy=n;o.Y=m;o.b$=1;while(HF(c,o))
{}c=o.Y;if(Cn(Mx,c))Bu(d,h);h=h+1|0;}c=BD(b);m=new EJ;m.eh=d;k=By(B$(CS(c,m),new EL),new EH);b=k.data;c=BD(k);d=new G_;m=new Ee;m.eo=c;m.e0=d;c=EN(m,new G$,new Hb,new Ha);Mr.m.clearRect(0.0,0.0,1000.0,800.0);d=Mr;m=My;d=d.m;m=$rt_ustr(Il(m));d.fillStyle=m;d=Mz;p=b.length;Fx(d,p);d=Cj(0,p);m=new Hl;m.cD=k;F7(d,m);F7(CU(c),new Hk);}
function Da(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;B4();f=Hf(Dg(c,b),0.5);g=Hf(Dg(d,c),0.5);h=Hf(Dg(e,d),0.5);i=f*f;j=g*g;k=2.0*f*f;l=3.0*f;k=k+l*g+j;l=l*(f+g);m=(i*d.c-j*b.c+k*c.c)/l;n=(i*d.b-j*b.b+k*c.b)/l;o=B9(m,n);i=h*h;k=2.0*h*h;l=3.0*h;k=k+l*g+j;l=l*(h+g);p=(i*c.c-j*e.c+k*d.c)/l;q=(i*c.b-j*e.b+k*d.b)/l;r=B9(p,q);b=Mr;b.m.beginPath();e=b.m;i=c.c;h=c.b;e.moveTo(i,h);c=b.m;h=o.c;j=o.b;i=r.c;m=r.b;l=d.c;k=d.b;c.bezierCurveTo(h,j,i,m,l,k);b.m.stroke();}
function Kp(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;a:{b=new De;LO();Mo=b;b=(DN()).createElement("canvas");c=new E_;DM(c,b);d=c.g;b=1000;d.width=b;b=c.g;e=800;b.height=e;Mp=c;b=new EF;e=Mo;d=new GM;d.cM=K(P);f=X(C,(H4(K(P))).data.length);g=f.data;d.b6=f;d.cp=LT(g.length);b.by=d;IL();h=F5(e,MA);d=Cj(0,3);c=new Ft;c.cR=b;c.cU=e;b.em=Ff(h,BT(d,c));DJ();Mq=F1(b,MB);b=Mp;e=new Gz;e.m=b.g.getContext("2d");Mr=e;Ms=By(BT(Cj(0,91),new G3),new G4);b=Cj(0,91);h=new El;h.dA=b;c=new Gk;b=new G2;e=new FT;d=new FS;d.eL=c;d.eK
=b;c=new FG;f=X(BA,1);g=f.data;In();g[0]=MC;b=new Eo;i=new DG;Hz(i);i.bF=K(BA);i.bA=IB((((H4(K(BA))).data.length-1|0)/32|0)+1|0);BW(f);j=new E7;j.fx=f;if(j instanceof DG){k=j;if(i.bF===k.bF){l=0;while(true){f=i.bA.data;if(l>=f.length)break;m=f[l];g=k.bA.data;if((m|g[l])!=f[l])f[l]=f[l]|g[l];l=l+1|0;}break a;}}m=0;l=j.bD;n=g.length;o=EE(l,l);while(true){if(!(m>=n?0:1))break a;if(o<0)break;p=m+1|0;q=g[m].x;m=q/32|0;l=1<<(q%32|0);f=i.bA.data;if(f[m]&l)l=0;else{f[m]=f[m]|l;l=1;}if(l){m=p;continue;}m=p;}b=new Dm;HG(b);H(b);}k
=new Er;k.fh=e;k.ck=d;k.fe=c;k.eY=b;k.fJ=i;Mt=IF(h,k);}
var EQ=E(0);
var Eh=E(0);
function E8(){C.call(this);this.z=null;}
function Fm(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new E8;c.z=b;d=c;b.classObject=d;}return c;}
function IW(a){var b,c;b=Ek(a);c=N();I(G(c,D(2)),b);return L(c);}
function D$(a,b){var c;b=b;c=a.z;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&HW(b.constructor,c)?1:0;}
function CM(a){return a.z.$meta.primitive?1:0;}
function C$(a){return Fm(a.z.$meta.item);}
function GV(a){return Fm(a.z.$meta.superclass);}
var IG=E();
function BU(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Du(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Im=E();
function Ji(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function HW(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(HW(d[e],c))return 1;e=e+1|0;}return 0;}
function JR(b){var c='$$enumConstants$$';P[c]=Dq;BA[c]=Jb;Cr[c]=JI;BI[c]=Ko;JR=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return JR(b);}
function Cu(){var a=this;C.call(a);a.en=null;a.eg=null;a.b4=0;a.cf=0;}
function MD(a){var b=new Cu();W(b,a);return b;}
function W(a,b){a.b4=1;a.cf=1;a.en=b;}
function Jx(a){return a;}
function Lg(a){return a.en;}
function Li(a){var b;b=a.eg;if(b===a)b=null;return b;}
var BP=E(Cu);
function ME(){var a=new BP();M(a);return a;}
function MF(a){var b=new BP();Hw(b,a);return b;}
function M(a){a.b4=1;a.cf=1;}
function Hw(a,b){W(a,b);}
var O=E(BP);
function MG(){var a=new O();HG(a);return a;}
function LW(a){var b=new O();Kg(b,a);return b;}
function HG(a){M(a);}
function Kg(a,b){W(a,b);}
var Ir=E(O);
var Bp=E(0);
var Bq=E(0);
var CV=E(0);
function BS(){var a=this;C.call(a);a.E=null;a.ba=0;}
var MH=null;var MI=null;var MJ=null;function DW(){DW=S(BS);JZ();}
function Lo(a){var b=new BS();HK(b,a);return b;}
function LK(a,b,c){var d=new BS();He(d,a,b,c);return d;}
function HK(a,b){DW();He(a,b,0,b.data.length);}
function He(a,b,c,d){var e,f,g,h,i,j,k,l;DW();e=BL(d);a.E=e;if(b===null){f=new CE;W(f,D(3));H(f);}if(c>=0&&d>=0&&(c+d|0)<=DK(b)&&(0+d|0)<=DK(e)){a:{b:{c:{if(b!==e){g=C$(Cg(b));f=C$(Cg(e));if(g!==null&&f!==null){if(g===f)break c;if(!CM(g)&&!CM(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;if(!D$(f,k[j])){DO(b,c,e,0,i);g=new CO;M(g);H(g);}i=i+1|0;j=l;}DO(b,c,e,0,d);break a;}if(!CM(g))break b;if(CM(f))break c;else break b;}g=new CO;M(g);H(g);}}DO(b,c,e,0,d);break a;}g=new CO;M(g);H(g);}return;}g=new Bc;M(g);H(g);}
function B0(a,b){var c,d;if(b>=0){c=a.E.data;if(b<c.length)return c[b];}d=new DI;M(d);H(d);}
function Bs(a){return a.E.data.length;}
function GE(a){return a.E.data.length?0:1;}
function KB(a){return a;}
function Cx(b){DW();return b===null?D(4):b.f();}
function BO(a,b){var c;if(a===b)return 1;if(!(b instanceof BS))return 0;if(Bs(b)!=Bs(a))return 0;c=0;while(c<Bs(b)){if(B0(a,c)!=B0(b,c))return 0;c=c+1|0;}return 1;}
function HX(a){var b,c,d,e;a:{if(!a.ba){b=a.E.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.ba=(31*a.ba|0)+e|0;d=d+1|0;}}}return a.ba;}
function JZ(){var b,c;b=BL(0);MH=b;c=new BS;DW();c.E=b;MI=c;MJ=new Hh;}
var Ck=E(Cu);
var Cv=E(Ck);
var H6=E(Cv);
var BQ=E();
function B8(){BQ.call(this);this.B=0;}
var MK=null;var ML=null;function JJ(a){var b=new B8();Hm(b,a);return b;}
function Hm(a,b){a.B=b;}
function BE(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ML===null){ML=X(B8,256);c=0;while(true){d=ML.data;if(c>=d.length)break a;d[c]=JJ(c-128|0);c=c+1|0;}}}return ML.data[b+128|0];}return JJ(b);}
function Cd(a){return a.B;}
function Kj(a){var b;b=a.B;return (Fe(LE(20),b,10)).f();}
function Ej(a){return a.B;}
function Dx(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Hx(){MK=K($rt_intcls());}
function Dr(){var a=this;C.call(a);a.a=null;a.e=0;}
function LE(a){var b=new Dr();E2(b,a);return b;}
function E2(a,b){a.a=BL(b);}
function Fe(a,b,c){return Ig(a,a.e,b,c);}
function Ig(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bt(a,b,b+1|0);else{Bt(a,b,b+2|0);f=a.a.data;g=b+1|0;f[b]=45;b=g;}a.a.data[b]=DR(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=BN(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bt(a,b,b+i|0);if(e)e=b;else{f=a.a.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.a.data;b=e+1|0;f[e]=DR($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function IV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=EE(c,0.0);if(!d){if(1.0/c===Infinity){Bt(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bt(a,b,b+4|0);e=a.a.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bt(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bt(a,b,b+8|0);d=b;}else{Bt(a,b,b+9|0);e=a.a.data;d=b+1|0;e[b]=45;}e=a.a.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=MM;Ij(c,f);g=f.bG;h=f.bY;i=f.df;j=1;k=1;if(i)k=2;l=18;m=Kw(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=B3(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bt(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.a.data;k=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.a.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(I8(p,C3))d=0;else{d=I7(IC(g,p));g=Jm(g,p);}e=a.a.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=IC(p,J(10));q=q+1|0;}if(h){e=a.a.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function Kw(b){var c,d,e,f,g;c=J(1);d=0;e=16;f=MN.data;g=f.length-1|0;while(g>=0){if(Ed(Jm(b,U(c,f[g])),C3)){d=d|e;c=U(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function F6(a,b){var c,d,e,f,g;c=a.a.data.length;if(c>=b)return;d=c>=1073741823?2147483647:B3(b,B3(c*2|0,5));e=a.a.data;f=BL(d);g=f.data;b=BK(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.a=f;}
function L(a){return LK(a.a,0,a.e);}
function Bt(a,b,c){var d,e,f,g;d=a.e;e=d-b|0;a.d7((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.a.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.e=a.e+(c-b|0)|0;}
var Dv=E(0);
var Ep=E(Dr);
function N(){var a=new Ep();KC(a);return a;}
function GT(a){var b=new Ep();Jt(b,a);return b;}
function KC(a){E2(a,16);}
function Jt(a,b){var c,d;a.a=BL(Bs(b));c=0;while(true){d=a.a.data;if(c>=d.length)break;d[c]=B0(b,c);c=c+1|0;}a.e=Bs(b);}
function G(a,b){G5(a,a.e,b===null?D(4):b.f());return a;}
function R(a,b){G5(a,a.e,b);return a;}
function I(a,b){Fe(a,b,10);return a;}
function DZ(a,b){IV(a,a.e,b);return a;}
function Q(a,b){var c;c=a.e;Bt(a,c,c+1|0);a.a.data[c]=b;return a;}
function Ga(a){return a.e?0:1;}
function Ky(a){return L(a);}
function K$(a,b){F6(a,b);}
function G5(a,b,c){var d,e,f;if(b>=0&&b<=a.e){a:{if(c===null)c=D(4);else if(GE(c))break a;F6(a,a.e+Bs(c)|0);d=a.e-1|0;while(d>=b){a.a.data[d+Bs(c)|0]=a.a.data[d];d=d+(-1)|0;}a.e=a.e+Bs(c)|0;d=0;while(d<Bs(c)){e=a.a.data;f=b+1|0;e[b]=B0(c,d);d=d+1|0;b=f;}}return a;}c=new DI;M(c);H(c);}
var B_=E(Cv);
var H1=E(B_);
function MO(a){var b=new H1();KM(b,a);return b;}
function KM(a,b){W(a,b);}
var HS=E(B_);
function MP(a){var b=new HS();KZ(b,a);return b;}
function KZ(a,b){W(a,b);}
function DE(){var a=this;C.call(a);a.bJ=0;a.c2=null;a.bL=null;a.cz=0;}
var MA=null;function IL(){IL=S(DE);JU();}
function Dn(b){var c,d,e;IL();c=new DE;d=null;e=null;c.bJ=b;c.c2=d;c.bL=e;c.cz=0;return c;}
function JU(){MA=Dn(0);}
var Bf=E();
function HA(){var a=this;Bf.call(a);a.cj=0;a.dr=null;a.b0=0;}
function J1(a,b,c){var d=new HA();Le(d,a,b,c);return d;}
function Le(a,b,c,d){a.cj=b;a.dr=c;a.b0=d;}
function D2(b){return J1(0,b,0);}
function IH(b){return J1(0,null,b);}
var Gg=E();
var MQ=null;function Lu(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=DK(b)&&(e+f|0)<=DK(d)){DO(b,c,d,e,f);return;}b=new Bc;M(b);H(b);}
function DO(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var IT=E();
var FX=E(0);
var De=E();
var Mu=null;function LO(){LO=S(De);Jo();}
function Fv(a,b,c){var d,e,f,g,h;d=(DN()).createElement("div");e=d.classList;f=!b?D(5):D(6);e.add($rt_ustr(f));if(c.bL!==null){e=d.classList;f=(c.bL.S.hn(95,45)).f0();e.add($rt_ustr(f));}f=c.c2;Ix();if(f===MR)d.classList.add("max-distance");else if(f===MS)d.classList.add("split-distance");else if(c.bJ){f=d.style;b=c.bJ;g=N();G(I(g,b),D(7));h=L(g);f.setProperty("gap",$rt_ustr(h));}if(c.cz)d.classList.add("stretch");c=new DB;DM(c,d);return c;}
function Fi(a,b){return Fv(a,1,b);}
function F5(a,b){return Fv(a,0,b);}
function Jo(){var b;b=new DB;DM(b,(DN()).body);Mu=b;}
function EF(){var a=this;C.call(a);a.by=null;a.ei=null;a.em=null;}
function F1(a,b){var c,d;c=a.ei;if(c!==null){c=Gv(a.by,c);CC();Co(c,D2(MT));}d=Gv(a.by,b);DJ();if(b!==MB){CC();c=D2(MU);}else{CC();c=D2(MV);}Co(d,c);a.ei=b;return a;}
function Bv(){var a=this;C.call(a);a.S=null;a.x=0;}
function CR(a,b,c){a.S=b;a.x=c;}
function Jv(a){return a.x;}
function J3(a){return a.S;}
function CP(a){var b;b=Cg(a);if(!(GV(b)!==K(Bv)?0:1))b=GV(b);return b;}
function Hu(a,b){var c,d,e;if(CP(b)===CP(a))return EE(a.x,b.x);c=new Bo;d=Cx(CP(a));b=Cx(CP(b));e=N();G(G(G(G(e,D(8)),d),D(9)),b);W(c,L(e));H(c);}
function K3(a,b){return Hu(a,b);}
var P=E(Bv);
var MB=null;var MW=null;var MX=null;var MY=null;var MZ=null;var M0=null;var M1=null;var M2=null;var M3=null;var M4=null;var M5=null;var M6=null;var M7=null;var M8=null;var M9=null;var M$=null;var M_=null;var Na=null;var Nb=null;var Nc=null;function DJ(){DJ=S(P);KH();}
function Z(a,b){var c=new P();HD(c,a,b);return c;}
function Dq(){DJ();return Nc.M();}
function HD(a,b,c){DJ();CR(a,b,c);}
function KH(){var b;MB=Z(D(10),0);MW=Z(D(11),1);MX=Z(D(12),2);MY=Z(D(13),3);MZ=Z(D(14),4);M0=Z(D(15),5);M1=Z(D(16),6);M2=Z(D(17),7);M3=Z(D(18),8);M4=Z(D(19),9);M5=Z(D(20),10);M6=Z(D(21),11);M7=Z(D(22),12);M8=Z(D(23),13);M9=Z(D(24),14);M$=Z(D(25),15);M_=Z(D(26),16);Na=Z(D(27),17);b=Z(D(28),18);Nb=b;Nc=FV(P,[MB,MW,MX,MY,MZ,M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M$,M_,Na,b]);}
var DQ=E(0);
var Dp=E(0);
var GU=E(0);
function Cj(b,c){var d;d=new F2;d.bW=b;d.es=c;return d;}
var Bb=E(0);
var G3=E();
function K7(a,b){B4();return (Dq()).data[Fx(Mz,(Dq()).data.length-2|0)];}
var G4=E();
function K0(a,b){B4();return X(P,b);}
var Bz=E(0);
var G2=E();
var Ho=E();
var Ey=E(0);
function B1(){var a=this;Bf.call(a);a.K=null;a.L=null;}
function GC(a,b){var c=new B1();EY(c,a,b);return c;}
function EY(a,b,c){a.K=b;a.L=c;}
function EV(a,b){return GC(DA(a.K,b.K),DA(a.L,b.L));}
function Kc(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Bj();b=Mv;c=BN(b,b);d=c+b|0;e=d+1|0;f=By(CS(B$(BD(Nd),new FD),new FF),new FE);g=new Fc;g.cA=f;h=CS(BD(Nd),new FA);if(g instanceof Y&&h instanceof Y){i=new G8;i.d3=g;i.bV=h;i.N=g;}else{i=new Gq;i.cE=g;i.dx=h;}f=By(i,new Fz);j=X(Dy,e);k=j.data;l=0;while(l<b){g=GC(Mx,Nd.data[l]);m=0;while(m<b){n=f.data;o=BN(l,b)+m|0;p=C4();Bu(p,CG(g));q=m+1|0;h=BD(n[q]);i=new FC;i.cu=p;i.cv=g;Db(h,i);Bu(p,c+m|0);k[o]=p;m=q;}l=l+1|0;}l=0;while(l<b){r=f.data;o=c+l|0;i=C4();g=GC(Nd.data[l],
Mx);Bu(i,CG(g));p=BD(r[0]);h=new FB;h.dJ=i;h.dI=g;Db(p,h);Bu(i,d);k[o]=i;l=l+1|0;}h=C4();l=0;while(l<=b){Bu(h,c+l|0);l=l+1|0;}k[d]=h;return j;}
function CG(a){return BN(BH(a.K),Mv)+BH(a.L)|0;}
function J0(a){return L(R(G(R(G(R(GT(D(29)),D(30)),a.K),D(31)),a.L),D(32)));}
var H2=E();
function Ih(b,c){var d,e,f;d=C$(Cg(b));if(d===null){d=new CE;M(d);H(d);}if(d===K($rt_voidcls())){d=new Bo;M(d);H(d);}if(c<0){d=new Hi;M(d);H(d);}b=b.data;d=Kt(d.z,c);e=BK(c,b.length);f=0;while(f<e){d.data[f]=b[f];f=f+1|0;}return d;}
function BD(b){var c,d,e;c=b.data;d=new EK;e=c.length;d.dK=b;d.bn=0;d.cc=e;d.eC=e-0|0;return d;}
var G_=E();
var CA=E(0);
var G$=E();
function J2(a){return C4();}
var DF=E(0);
var Hb=E();
function Kv(a,b,c){Bu(b,c);}
var CD=E(0);
var Ha=E();
var BG=E(0);
function Dy(){var a=this;C.call(a);a.t=null;a.V=0;}
function C4(){var a=new Dy();KJ(a);return a;}
function KJ(a){a.t=IB(2);}
function Bu(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bc;M(c);H(c);}d=b/32|0;if(b>=a.V){e=d+1|0;f=a.t.data.length;if(f<e){g=B3((e*3|0)/2|0,(f*2|0)+1|0);h=a.t.data;i=IB(g);j=i.data;g=BK(g,h.length);e=0;while(e<g){j[e]=h[e];e=e+1|0;}a.t=i;}a.V=b+1|0;}i=a.t.data;i[d]=i[d]|1<<(b%32|0);}
function GO(a,b){var c,d,e,f,g;if(b<0){c=new Bc;M(c);H(c);}d=a.V;if(b>=d)return (-1);e=b/32|0;f=a.t.data;g=f[e]>>>(b%32|0)|0;if(g)return Dx(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Dx(f[g])|0;g=g+1|0;}return (-1);}
function JG(a){var b,c,d,e,f,g,h,i;b=N();Q(b,123);c=1;d=0;a:{while(true){e=a.t.data;if(d>=e.length)break a;f=d*32|0;if(f>a.V)break;g=e[d];while(g){h=Dx(g);i=f+h|0;if(c)c=0;else R(b,D(33));f=i+1|0;I(b,i);g=(g>>>h|0)>>>1|0;}d=d+1|0;}}Q(b,125);return L(b);}
function CU(a){var b;b=new Fb;b.ec=a;b.be=GO(a,0);return b;}
var T=E(0);
var Ne=null;var Nf=null;var Ng=null;var Nh=null;var Ni=null;var My=null;var Nj=null;var Nk=null;var Nl=null;var Nm=null;var Nn=null;var No=null;var Np=null;var Nq=null;var Nr=null;var Ns=null;var Nt=null;var Nu=null;var Nv=null;var Nw=null;function HH(){Ne=Bi(247,222,123);Nf=Ez(0,0,0,0.0);Ng=Ez(128,128,128,0.5);Nh=Bi(128,128,128);Ni=Bi(255,255,255);My=Bi(0,0,0);Nj=Bi(255,75,125);Nk=Bi(203,24,24);Nl=Bi(222,181,148);Nm=Bi(214,99,0);Nn=Bi(79,145,153);No=Bi(178,107,123);Np=Bi(255,0,0);Nq=Bi(0,0,255);Nr=Bi(0,128,
0);Ns=Bi(255,165,0);Nt=Ez(149,69,53,0.25);Nu=Ez(149,69,53,0.5);Nv=Bi(255,255,221);Nw=Bi(136,136,102);}
var GA=E(0);
var Dl=E();
function Fx(a,b){var c;if(b<=0){c=new Bo;M(c);H(c);}return $rt_globals.Math.random()*b|0;}
var DX=E(Dl);
var Mz=null;function Hr(){Mz=new DX;}
var Dd=E(0);
function Hl(){C.call(this);this.cD=null;}
function Jy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.cD.data;B4();d=c[b];e=Ms.data[b];f=Mr.m;g=$rt_ustr(e.S);f.strokeStyle=g;d=CU(d);f=Mt;BW(f);g=new Gs;g.cO=f;c=By(BT(d,g),new Gr);h=c.data;d=new Gu;f=new Ei;f.dL=d;d=new Gt;g=new FU;g.c4=f;g.c5=d;i=h.length;if(i){j=X(C,i);k=1;l=c;while(k<i){m=0;while(true){n=l.data;o=n.length;if(m>=o)break;p=BK(o,m+k|0);q=m+(2*k|0)|0;r=BK(o,q);s=m;t=p;a:{b:{while(m!=p){if(t==r)break b;d=n[m];f=n[t];if(g.dR(d,f)>0){u=j.data;b=s+1|0;u[s]=f;t=t+1|0;}else{u=j.data;b=s
+1|0;u[s]=d;m=m+1|0;}s=b;}while(true){if(t>=r)break a;u=j.data;b=s+1|0;o=t+1|0;u[s]=n[t];s=b;t=o;}}while(true){if(m>=p)break a;u=j.data;b=s+1|0;o=m+1|0;u[s]=n[m];s=b;m=o;}}m=q;}k=k*2|0;u=l;l=j;j=u;}c:{if(l!==c){b=0;while(true){u=l.data;if(b>=u.length)break c;j.data[b]=u[b];b=b+1|0;}}}}DJ();if(e===MB){if(MQ===null){e=new Fa;e.eE=Nx;e.bs=N();e.eI=BL(32);e.fo=0;JF();e.er=Ny;MQ=e;}f=MQ;if(c===null)d=D(4);else{d=N();R(d,D(34));b=0;while(b<i){if(b>0)R(d,D(33));G(d,h[b]);b=b+1|0;}R(d,D(32));d=L(d);}Q(R(f.bs,d),10);d
=f.bs;p=d.e;c=f.eI;if(p>c.data.length)c=BL(p);i=0;b=0;if(i>p){d=new Bc;Hw(d,D(35));H(d);}while(i<p){j=c.data;k=b+1|0;u=d.a.data;o=i+1|0;j[b]=u[i];b=k;i=o;}H9(f,c,0,p);f.bs.e=0;}Da(h[0],h[1],h[2],h[3]);Da(G7(h[0],Hd(GZ(h[0],h[1]),0.001)),h[0],h[1],h[2]);Da(G7(h[3],Hd(GZ(h[3],h[2]),0.001)),h[3],h[2],h[1]);}
var Hk=E();
function Kr(a,b){var c,d,e;B4();c=Mr;d=(CQ(Mt,BE(b))).c;e=(CQ(Mt,BE(b))).b;c.m.beginPath();c.m.arc(d,e,3.0,0.0,6.283185307179586);c.m.fill();}
var Cm=E(0);
var Hh=E();
var Bc=E(O);
var HM=E();
function DK(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Nz());}return b.data.length;}
function Kt(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var CE=E(O);
var CO=E(O);
var CX=E();
var NA=null;var NB=null;function Fr(b){return (b&64512)!=55296?0:1;}
function E9(b){return (b&64512)!=56320?0:1;}
function DR(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HQ(){NA=K($rt_charcls());NB=X(CX,128);}
var Ct=E();
function Ks(a){var b,c,d,e;b=N();Q(b,123);c=new Gy;c.br=a;c.dv=a.bz;c.P=null;if(Dk(c)){d=Gw(c);e=d.X;if(e===a)e=D(36);G(b,e);Q(b,61);d=d.G;if(d===a)d=D(36);G(b,d);}while(Dk(c)){R(b,D(33));d=Gw(c);e=d.X;if(e===a)e=D(36);G(b,e);Q(b,61);d=d.G;if(d===a)d=D(36);G(b,d);}Q(b,125);return L(b);}
function GM(){var a=this;Ct.call(a);a.cM=null;a.b6=null;a.cp=null;a.d_=0;}
function Gv(a,b){var c;if(!D$(a.cM,b))return null;c=b.x;return a.b6.data[c];}
function Ft(){var a=this;C.call(a);a.cR=null;a.cU=null;}
function Jn(a,b){var c,d,e,f,g;c=a.cR;d=a.cU;IL();e=Fi(d,MA);f=Cj(0,6);g=new Fw;g.dl=c;g.dk=b;g.e_=d;return Ff(e,BT(f,g));}
var Bl=E();
function BT(a,b){var c;c=new EG;c.cd=a;c.de=b;return c;}
function F7(a,b){var c;while(true){c=new Em;c.cx=b;if(!a.y(c))break;}}
function EN(a,b,c,d){var e;e=b.dX();while(true){b=new Fp;b.eG=c;b.eF=e;if(!a.y(b))break;}return e;}
function Jc(a){return (-1);}
function F2(){var a=this;Bl.call(a);a.bW=0;a.es=0;}
function HN(a,b){var c;while(true){c=a.bW;if(c>=a.es)break;a.bW=c+1|0;if(b.A(c))continue;else return 1;}return 0;}
var Gk=E();
var FT=E();
function FS(){var a=this;C.call(a);a.eL=null;a.eK=null;}
var F8=E(0);
var DH=E(0);
var FG=E();
var BA=E(Bv);
var NC=null;var ND=null;var MC=null;var NE=null;function In(){In=S(BA);KE();}
function H8(a,b){var c=new BA();Ib(c,a,b);return c;}
function Jb(){In();return NE.M();}
function Ib(a,b,c){In();CR(a,b,c);}
function KE(){var b;NC=H8(D(37),0);ND=H8(D(38),1);b=H8(D(39),2);MC=b;NE=FV(BA,[NC,ND,b]);}
var Gd=E(0);
function Bm(){var a=this;Bf.call(a);a.k=0;a.j=0;}
var Nd=null;var Mv=0;var Mx=null;var Mw=null;var NF=null;var NG=null;var NH=null;function Bj(){Bj=S(Bm);KF();}
function Ce(a,b){var c=new Bm();IQ(c,a,b);return c;}
function IQ(a,b,c){Bj();a.k=b;a.j=c;}
function BH(a){return ((a.k+1|0)*3|0)+(a.j+1|0)|0;}
function DA(a,b){return Ce(CI(a.k,b.k),CI(a.j,b.j));}
function CK(a,b){return Ce(CI(BN(a.k,b.k),BN( -a.j|0,b.j)),CI(BN(a.k,b.j),BN(a.j,b.k)));}
function Dt(a,b){var c;c=Ce(1,0);while(b>0){if((b%2|0)==1)c=CK(c,a);a=CK(a,a);b=b/2|0;}return c;}
function CI(b,c){var d;Bj();d=b+c|0;if(d==2)d=(-1);if(d==(-2))d=1;return d;}
function I$(a){var b,c;b=N();c=a.k;if(c)I(b,c);if(a.j==1&&!Ga(b))Q(b,43);c=a.j;if(c)I(b,c);if(Ga(b))return D(0);return L(b);}
function Cn(a,b){return a===b?1:b!==null&&Cg(b)===K(Bm)?(a.k!=b.k?0:a.j==b.j?1:0):0;}
function J4(a,b){var c;b=b;c=a.k-b.k|0;if(!c)c=a.j-b.j|0;return c;}
function KF(){var b,c;b=By(BT(Cj(0,9),new FL),new FM);c=b.data;Nd=b;Mv=c.length;Mx=Ce(0,0);Mw=Ce(1,0);NF=Ce((-1),0);NG=By(B$(BD(Nd),new FJ),new FK);NH=By(B$(BD(Nd),new FO),new FP);}
function EJ(){C.call(this);this.eh=null;}
function JL(a,b){var c,d;b=b;c=a.eh;b=CU(b);BW(c);d=new Es;d.eb=c;c=new GF;c.dC=b;c.dg=d;return EN(c,new Eu,new Et,new Ev);}
var Be=E(0);
var EL=E();
function JW(a,b){var c,d,e,f,g;b=b;c=0;d=1+(b.V/32|0)|0;e=0;while(e<d){f=b.t.data[e];g=((f&(-1431655766))>>>1|0)+(f&1431655765)|0;f=((g&(-858993460))>>>2|0)+(g&858993459)|0;f=((f&1886417008)>>>4|0)+(f&117901063)|0;f=((f&251662080)>>>8|0)+(f&983055)|0;c=c+(((f&2031616)>>>16|0)+(f&31)|0)|0;e=e+1|0;}return c<=1?0:1;}
var EH=E();
function KN(a,b){return X(Dy,b);}
function EI(){C.call(this);this.cP=0;}
function KS(a,b){var c;c=a.cP;Bj();return Dt(Nd.data[b],c+1|0);}
var EM=E();
var Fn=E(0);
var Y=E();
function B$(a,b){var c;c=new Gh;FW(c,a);c.dy=b;return c;}
function CS(a,b){var c;c=new FY;FW(c,a);c.cB=b;return c;}
function Db(a,b){var c;while(true){c=new GI;c.ek=b;if(!a.o(c))break;}}
function By(a,b){var c,d,e,f,g,h,i;c=a.r();if(c>=0){d=b.h(c);e=new EP;e.ds=d;while(a.o(e)){}f=d.data;c=e.bP;if(c<f.length)d=Ih(d,c);return d;}g=new FZ;g.w=X(C,10);while(true){BW(g);e=new ES;e.d2=g;if(!a.o(e))break;}h=b.h(g.H);i=0;a:{while(true){b=h.data;if(i>=b.length)break;if(i<0)break a;if(i>=g.H)break a;b[i]=g.w.data[i];i=i+1|0;}return h;}b=new Bc;M(b);H(b);}
function IF(a,b){var c,d,e,f,g;c=new GD;d=Ia(16);c.bT=0;c.l=X(CH,d);c.ex=0.75;GH(c);e=b.ck;while(true){b=new Fl;b.fc=e;b.dm=c;f=a.dA;BW(b);g=new F3;g.cG=b;if(!HN(f,g))break;}return c;}
function Gp(a){var b;b=new Fd;b.b1=a;return b;}
function KU(a){return (-1);}
function EK(){var a=this;Y.call(a);a.dK=null;a.bn=0;a.cc=0;a.eC=0;}
function Ht(a,b){var c,d;a:{while(true){c=a.bn;if(c>=a.cc)break a;d=a.dK.data;a.bn=c+1|0;if(b.d(d[c]))continue;else break;}}return a.bn>=a.cc?0:1;}
function Ju(a){return a.eC;}
var C0=E(0);
function Ca(){C.call(this);this.g=null;}
function Lw(a){var b=new Ca();DM(b,a);return b;}
function DM(a,b){a.g=b;}
function Ki(a){return a.g;}
function Co(a,b){var c,d,e,f,g,h,i;if(b.cj){c=a.g.style;d=b.cj;e=N();G(I(e,d),D(7));f=L(e);c.setProperty("margin",$rt_ustr(f));}f=b.dr;if(f!==null)g=Lj(BW(f));else{if(NI===null)NI=Lj(null);g=NI;}g=g.dp;if(g!==null){g=g;e=a.g.style;d=g.ce;h=g.bU;c=Il(g.b_);i=N();G(Q(G(G(I(i,d),D(40)),h),32),c);i=L(i);e.setProperty("border",$rt_ustr(i));if(g.bf){c=a.g.style;d=g.bf;g=N();G(I(g,d),D(7));e=L(g);c.setProperty("border-radius",$rt_ustr(e));}}if(b.b0){f=a.g.style;d=b.b0;b=N();G(I(b,d),D(7));c=L(b);f.setProperty("padding",
$rt_ustr(c));}return a;}
var Fq=E(0);
function Ff(a,b){var c;c=new EW;c.dc=a;Db(b,c);return a;}
var DB=E(Ca);
function B6(a,b){var c,d;c=a.g;d=b.g;c.appendChild(d);return a;}
var Bn=E(0);
var D8=E(0);
var Ef=E(0);
var BC=E(0);
var HI=E(0);
function DN(){return $rt_globals.window.document;}
var Eo=E();
var FD=E();
function KK(a,b){b=b;Bj();return Cn(b,Mx)?0:1;}
var FF=E();
function Kh(a,b){var c;b=b;c=new B1;Bj();EY(c,Mx,b);return c;}
var FE=E();
function JQ(a,b){return X(B1,b);}
var FA=E();
function J_(a,b){var c,d;b=b;Bj();c=B$(BD(Nd),new Eb);d=new D_;d.c$=b;return By(CS(c,d),new Ea);}
var Fz=E();
function I6(a,b){return X($rt_arraycls(B1),b);}
var BV=E(0);
function FC(){var a=this;C.call(a);a.cu=null;a.cv=null;}
function I5(a,b){b=b;Bu(a.cu,CG(EV(a.cv,b)));}
function FB(){var a=this;C.call(a);a.dJ=null;a.dI=null;}
function Kq(a,b){b=b;Bu(a.dJ,CG(EV(a.dI,b)));}
function D5(){var a=this;Bl.call(a);a.eq=null;a.bx=0;a.bI=0;a.cF=0;}
function KQ(a,b){var c,d;a:{while(true){c=a.bx;if(c>=a.bI)break a;d=a.eq.data;a.bx=c+1|0;if(Hq(b,d[c]))continue;else break;}}return a.bx>=a.bI?0:1;}
function JK(a){return a.cF;}
function H_(){var a=this;Bf.call(a);a.bq=0;a.bv=0;a.bu=0;a.bZ=0.0;}
function Bi(a,b,c){var d=new H_();JV(d,a,b,c);return d;}
function Ez(a,b,c,d){var e=new H_();HC(e,a,b,c,d);return e;}
function JV(a,b,c,d){HC(a,b,c,d,1.0);}
function HC(a,b,c,d,e){a.bq=b;a.bv=c;a.bu=d;a.bZ=e;}
function JB(a){return L(R(DZ(R(I(R(I(R(I(R(GT(D(41)),D(42)),a.bq),D(43)),a.bv),D(44)),a.bu),D(45)),a.bZ),D(32)));}
var G1=E(0);
var Gm=E(0);
var Ge=E(0);
var Fj=E(0);
var Gi=E(0);
var GG=E(0);
var Gx=E(0);
var GL=E(0);
var HT=E();
function J$(a,b){b=a.gf(b);Gn();return b===null?null:b instanceof $rt_objcls()&&b instanceof BF?DS(b):b;}
function Jl(a,b,c){a.gl($rt_str(b),Du(c,"handleEvent"));}
function Lk(a,b,c){a.f8($rt_str(b),Du(c,"handleEvent"));}
function J6(a,b,c,d){a.gu($rt_str(b),Du(c,"handleEvent"),d?1:0);}
function Kb(a,b){return !!a.gq(b);}
function KT(a){return a.g7();}
function Jh(a,b,c,d){a.hp($rt_str(b),Du(c,"handleEvent"),d?1:0);}
var ER=E(0);
var CT=E(0);
var B5=E();
var GN=E(0);
var B7=E(B5);
var DY=E(B7);
function DG(){var a=this;DY.call(a);a.bF=null;a.bA=null;}
function H4(b){var c;c=b.z;c.$clinit();return JR(c);}
function Er(){var a=this;C.call(a);a.fh=null;a.ck=null;a.fe=null;a.eY=null;a.fJ=null;}
var FL=E();
function Jp(a,b){Bj();return Ce((b/3|0)-1|0,(b%3|0)-1|0);}
var FM=E();
function Jw(a,b){Bj();return X(Bm,b);}
var FJ=E();
function Lc(a,b){b=b;Bj();return Cn(Mw,Dt(b,4));}
var FK=E();
function KL(a,b){Bj();return X(Bm,b);}
var FO=E();
function I3(a,b){b=b;Bj();return Cn(NF,Dt(b,4));}
var FP=E();
function KY(a,b){Bj();return X(Bm,b);}
function Fc(){Y.call(this);this.cA=null;}
function Ka(a,b){b.d(a.cA);return 0;}
function Gq(){var a=this;Y.call(a);a.cE=null;a.dx=null;a.U=null;a.cl=0;}
function J9(a,b){var c,d,e;if(a.U===null)a.U=Gp(a.cE);while(true){c=a.U;GY(c);if(!(c.q==3?0:1)){if(a.cl)return 0;a.cl=1;a.U=Gp(a.dx);continue;}c=a.U;GY(c);d=c.q;if(d==3){b=new C2;M(b);H(b);}e=c.bC;c.bC=null;c.q=d!=2?0:3;if(b.d(e))continue;else break;}return 1;}
function G8(){var a=this;Y.call(a);a.d3=null;a.bV=null;a.N=null;}
function I1(a,b){var c;c=a.N;if(c===null)return 0;if(c.o(b))return 1;if(a.N!==a.d3){a.N=null;return 0;}a.N=a.bV;return 1;}
function JP(a){var b;b=HR(a.bV);return b<0?(-1):1+b|0;}
var HJ=E();
function BW(b){if(b!==null)return b;b=new CE;W(b,D(46));H(b);}
var GR=E(0);
var Ex=E(0);
function Ch(){B5.call(this);this.bD=0;}
var DD=E(0);
function E7(){Ch.call(this);this.fx=null;}
function BF(){C.call(this);this.dN=null;}
var NJ=null;var NK=null;var NL=null;var NM=null;var NN=null;var NO=null;function Gn(){Gn=S(BF);KV();}
function EA(a){var b=new BF();HB(b,a);return b;}
function HB(a,b){Gn();a.dN=b;}
function DS(b){Gn();if(b!==null)return b.dN;return null;}
function En(b){var c,d;Gn();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(NK!==null){d=$rt_str(typeof c);if(!BO(d,D(47))&&!BO(d,D(48))){if(BO(d,D(49))){b=NL.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=EA(c);d=b;NL.set(c,new $rt_globals.WeakRef(d));Fs(NN,d,c);break a;}if(!BO(d,D(50)))break b;else{b=NM.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=EA(c);d=b;NM.set(c,new $rt_globals.WeakRef(d));Fs(NO,d,c);break a;}}b=NK.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=EA(c);NK.set(c,new $rt_globals.WeakRef(b));break a;}}b=EA(c);}}return b;}
function KV(){NJ=new $rt_globals.WeakMap();NK=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();NL=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();NM=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();NN=NL===null?null:new $rt_globals.FinalizationRegistry(BU(new GJ,"accept"));NO=NM===null?null:new $rt_globals.FinalizationRegistry(BU(new GK,"accept"));}
function Fs(b,c,d){return b.register(c,d);}
var Ii=E();
var HP=E();
var IR=E();
var DT=E(0);
var GJ=E();
function KR(a,b){var c;b=En(b);c=NL;b=DS(b);c.delete(b);}
var H5=E();
var GK=E();
function Jk(a,b){var c;b=En(b);c=NM;b=DS(b);c.delete(b);}
var IU=E();
function EG(){var a=this;Y.call(a);a.cd=null;a.de=null;}
function HF(a,b){var c,d;c=a.cd;d=new EX;d.cr=a;d.cs=b;return c.y(d);}
function IZ(a){return a.cd.r();}
function El(){Y.call(this);this.dA=null;}
function Ee(){var a=this;Bl.call(a);a.eo=null;a.F=null;a.ch=0;a.bg=null;a.e0=null;a.c3=0;}
function Jj(a,b){var c,d,e,f;if(a.F===null){if(a.c3)return 0;a.ch=0;a:{while(true){if(a.ch)break a;c=a.eo;d=new Hj;d.el=a;if(!Ht(c,d))break;}a.c3=1;}if(a.F===null)return 0;}b:{c=a.F;if(c instanceof Bl){if(DV(c,b))return 1;a.F=null;}else{d=new F9;d.b2=c;a.bg=d;while(true){c=a.bg;Fo(c);if(!(c.p==3?0:1)){a.bg=null;a.F=null;break b;}c=a.bg;Fo(c);e=c.p;if(e==3){b=new C2;M(b);H(b);}f=c.cV;c.p=e!=2?0:3;if(!GP(b,(BE(f)).B))break;}return 1;}}return 1;}
function Cs(){Y.call(this);this.b8=null;}
function FW(a,b){a.b8=b;}
function K4(a,b){return a.b8.o(a.cC(b));}
function HR(a){return a.b8.r();}
function FY(){Cs.call(this);this.cB=null;}
function Ld(a,b){var c;c=new E$;c.cS=a;c.cQ=b;return c;}
var Bo=E(O);
function EP(){var a=this;C.call(a);a.ds=null;a.bP=0;}
function Ll(a,b){var c,d;c=a.ds.data;d=a.bP;a.bP=d+1|0;c[d]=b;return 1;}
function FZ(){var a=this;Ch.call(a);a.w=null;a.H=0;}
function Km(a){var b,c,d,e,f;b=a.H;if(!b)return D(51);c=b-1|0;d=new Ep;E2(d,b*16|0);Q(d,91);e=0;while(e<c){f=a.w.data;R(G(d,f[e]!==a?f[e]:D(52)),D(33));e=e+1|0;}f=a.w.data;G(d,f[c]!==a?f[c]:D(52));return L(Q(d,93));}
function ES(){C.call(this);this.d2=null;}
function Jr(a,b){var c,d,e,f,g;c=a.d2;d=c.H+1|0;e=c.w.data.length;if(e<d){d=e>=1073741823?2147483647:B3(d,B3(e*2|0,5));c.w=Ih(c.w,d);}f=c.w.data;g=c.H;c.H=g+1|0;f[g]=b;c.bD=c.bD+1|0;return 1;}
var DI=E(Bc);
var F4=E(0);
var E_=E(Ca);
function BY(){var a=this;Bf.call(a);a.b_=null;a.bU=null;a.ce=0;a.bf=0;}
var MU=null;var MT=null;var NP=null;var MV=null;var NQ=null;function CC(){CC=S(BY);K6();}
function Ku(a,b,c,d){var e=new BY();Id(e,a,b,c,d);return e;}
function Id(a,b,c,d,e){CC();a.b_=b;a.bU=c;a.ce=d;a.bf=e;}
function CF(b){CC();return Ku(b,D(53),1,0);}
function JA(a){return L(R(I(R(I(R(G(R(G(R(GT(D(54)),D(55)),a.b_),D(56)),a.bU),D(57)),a.ce),D(58)),a.bf),D(32)));}
function K6(){MU=CF(My);MT=CF(Nf);NP=CF(Ng);MV=CF(Ne);NQ=Ku(Nh,D(59),1,0);}
function Gh(){Cs.call(this);this.dy=null;}
function KO(a,b){var c;c=new D4;c.cX=a;c.cY=b;return c;}
var Cr=E(Bv);
var MR=null;var MS=null;var NR=null;function Ix(){Ix=S(Cr);JN();}
function JM(a,b){var c=new Cr();If(c,a,b);return c;}
function JI(){Ix();return NR.M();}
function If(a,b,c){Ix();CR(a,b,c);}
function JN(){var b;MR=JM(D(60),0);b=JM(D(61),1);MS=b;NR=FV(Cr,[MR,b]);}
var H$=E();
function K5(b){return Math.sqrt(b);}
function Hf(b,c){return Jf(b,c);}
function Jf(b,c){return Math.pow(b,c);}
function BK(b,c){if(b<c)c=b;return c;}
function B3(b,c){if(b>c)c=b;return c;}
function K2(b){return Math.sign(b);}
var Eg=E(BP);
var Hi=E(O);
var BB=E(0);
function EX(){var a=this;C.call(a);a.cr=null;a.cs=null;}
function Hq(a,b){var c;c=a.cr;return a.cs.d(c.de.h(b));}
function Fh(){var a=this;C.call(a);a.fy=null;a.Y=null;a.b$=0;}
function J7(a,b){if(!a.b$){a.Y=b;a.b$=1;}else a.Y=DA(a.Y,b);return 1;}
function Fl(){var a=this;C.call(a);a.fc=null;a.dm=null;}
function Fp(){var a=this;C.call(a);a.eG=null;a.eF=null;}
function GP(a,b){a.eG.dd(a.eF,b);return 1;}
function G0(){C.call(this);this.dp=null;}
var NI=null;function Lj(a){var b=new G0();K1(b,a);return b;}
function K1(a,b){a.dp=b;}
function Ie(){C.call(this);this.fQ=null;}
function Em(){C.call(this);this.cx=null;}
function J5(a,b){a.cx.dF(b);return 1;}
function EW(){C.call(this);this.dc=null;}
function JE(a,b){b=b;B6(a.dc,b);}
function GI(){C.call(this);this.ek=null;}
function KI(a,b){a.ek.bl(b);return 1;}
var Cw=E(0);
function HV(){var a=this;C.call(a);a.gB=0;a.gE=0;a.gF=0;a.f9=0;a.gU=null;}
var Fk=E(0);
function Gz(){Bf.call(this);this.m=null;}
function F3(){C.call(this);this.cG=null;}
function Kk(a,b){var c,d,e,f,g,h,i;c=a.cG;d=BE(b);c=c.dm;B4();if(Cd(d)>=81){e=BE(Cd(d)-81|0);f=B9(900.0,((Cd(e)-4|0)*99|0)+400|0);}else f=B9((((Cd(d)/9|0)-4|0)*99|0)+400|0,(((Cd(d)%9|0)-4|0)*99|0)+400|0);f=BW(f);e=CQ(c,d);if(e===null){g=Ej(d);h=g&(c.l.data.length-1|0);i=ET(c,d,h,g);if(i===null){c.bz=c.bz+1|0;i=Ip(c,d,h,g);b=c.bT+1|0;c.bT=b;if(b>c.dW)ID(c);}e=i.G;i.G=f;}if(e===null)return 1;c=new CJ;d=Cx(d);e=Cx(e);f=Cx(f);i=N();G(G(G(G(G(G(i,D(62)),d),D(63)),e),D(64)),f);W(c,L(i));H(c);}
function Hj(){C.call(this);this.el=null;}
function Js(a,b){var c;c=a.el;c.F=CU(b);c.ch=1;return 0;}
function D4(){var a=this;C.call(a);a.cX=null;a.cY=null;}
function Kn(a,b){var c,d;c=a.cX;d=a.cY;return c.dy.d(b)?d.d(b):1;}
function E$(){var a=this;C.call(a);a.cS=null;a.cQ=null;}
function Kf(a,b){var c;c=a.cS;return a.cQ.d(c.cB.bB(b));}
function Fd(){var a=this;C.call(a);a.b1=null;a.bC=null;a.q=0;}
function GY(a){var b,c;if(a.q)return;a.q=0;while(!a.q){b=a.b1;c=new FN;c.d0=a;if(!b.o(c)){if(a.q)a.q=2;else a.q=3;a.b1=null;}}}
var Dm=E(O);
var ED=E(0);
var EU=E(0);
var Iv=E(0);
function Il(b){var c,d,e,f,g,h,i,j,k,l;c=b.bZ;if(c!==1.0){d=c*1000.0;e=d+K2(d)*0.5|0;if(e!=1000){f=b.bq;g=b.bv;h=b.bu;i=e/1000|0;j=e%1000|0;if(j<10){b=N();I(G(b,D(65)),j);b=L(b);}else if(j>=100){DW();b=L(I(N(),j));}else{b=N();I(Q(b,48),j);b=L(b);}k=N();G(Q(I(k,i),46),b);l=L(k);b=N();Q(G(Q(I(Q(I(Q(I(G(b,D(66)),f),44),g),44),h),44),l),41);return L(b);}}f=b.bq;g=b.bv;e=b.bu;b=N();Q(I(Q(I(Q(I(G(b,D(67)),f),44),g),44),e),41);return L(b);}
var C2=E(O);
function Fb(){var a=this;Bl.call(a);a.be=0;a.ec=null;}
function DV(a,b){var c;while(true){c=a.be;if(c<0)break;if(!b.A(c))return 1;a.be=GO(a.ec,a.be+1|0);}return 0;}
function GD(){var a=this;Ct.call(a);a.bT=0;a.l=null;a.bz=0;a.ex=0.0;a.dW=0;}
function Ia(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function GH(a){a.dW=a.l.data.length*a.ex|0;}
function CQ(a,b){var c,d;if(b===null)c=IP(a);else{d=Ej(b);c=ET(a,b,d&(a.l.data.length-1|0),d);}if(c===null)return null;return c.G;}
function ET(a,b,c,d){var e,f;e=a.l.data[c];while(e!==null){if(e.bK==d){f=e.X;if(b!==f&&!(b===f?1:f instanceof B8&&f.B==b.B?1:0)?0:1)break;}e=e.D;}return e;}
function IP(a){var b;b=a.l.data[0];while(b!==null&&b.X!==null){b=b.D;}return b;}
function Ip(a,b,c,d){var e,f,g;e=new CH;f=null;e.X=b;e.G=f;e.bK=d;g=a.l.data;e.D=g[c];g[c]=e;return e;}
function ID(a){var b,c,d,e,f,g,h,i;b=a.l.data.length;b=Ia(!b?1:b<<1);c=X(CH,b);d=c.data;e=0;f=b-1|0;while(true){g=a.l.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bK&f;i=h.D;h.D=d[b];d[b]=h;h=i;}e=e+1|0;}a.l=c;GH(a);}
function FN(){C.call(this);this.d0=null;}
function Jz(a,b){var c;c=a.d0;c.bC=b;c.q=1;return 0;}
var Ec=E(0);
function DL(){var a=this;C.call(a);a.X=null;a.G=null;}
function CH(){var a=this;DL.call(a);a.bK=0;a.D=null;}
function Gl(){var a=this;Bf.call(a);a.c=0.0;a.b=0.0;}
function B9(a,b){var c=new Gl();KX(c,a,b);return c;}
function KX(a,b,c){a.c=b;a.b=c;}
function G7(a,b){return B9(a.c+b.c,a.b+b.b);}
function GZ(a,b){return B9(a.c-b.c,a.b-b.b);}
function Hd(a,b){return B9(a.c*b,a.b*b);}
function Dg(a,b){var c,d;c=b.c-a.c;d=b.b-a.b;return K5(c*c+d*d);}
function JC(a){return L(R(DZ(R(DZ(R(GT(D(68)),D(30)),a.c),D(31)),a.b),D(32)));}
function Es(){C.call(this);this.eb=null;}
var Eu=E();
function Ke(a){return C4();}
var Et=E();
function I2(a,b,c){Bu(b,c);}
var Ev=E();
var Eb=E();
function I0(a,b){b=b;Bj();return Cn(b,Mx)?0:1;}
function D_(){C.call(this);this.c$=null;}
function IX(a,b){var c,d;b=b;c=a.c$;d=new B1;Bj();EY(d,Mw,c);return GC(CK(b,d.K),CK(b,d.L));}
var Ea=E();
function Jd(a,b){return X(B1,b);}
function Fw(){var a=this;C.call(a);a.dl=null;a.dk=0;a.e_=null;}
function JS(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.dl;d=a.dk;e=(Dq()).data[(d*6|0)+b|0];f=BE(30);g=BE(15);h=(DN()).createElement("div");if(f!==null){i=h.style;j=N();G(G(j,f),D(7));j=L(j);i.setProperty("width",$rt_ustr(j));}if(g!==null){k=h.style;i=N();G(G(i,g),D(7));i=L(i);k.setProperty("height",$rt_ustr(i));}i=Lw(h);g=i.g;if(e===null)g.style.removeProperty("background-color");else{g=g.style;k=e.S;g.setProperty("background-color",$rt_ustr(k));}CC();Co(i,D2(MT));f=c.by;l=e.x;m=f.cp.data;if(!m[l]){m[l]=1;f.d_=f.d_
+1|0;}a:{f.b6.data[l]=i;g=new Ew;g.d9=c;g.d$=e;b=(-1);switch(HX(D(69))){case -934437708:if(!BO(D(69),D(70)))break a;b=2;break a;case 94750088:if(!BO(D(69),D(69)))break a;b=1;break a;case 1252611035:if(!BO(D(69),D(71)))break a;b=0;break a;default:}}b:{switch(b){case 0:c=i.g;k=new E6;k.dG=g;c.addEventListener("mousemove",BU(k,"handleEvent"));c=i.g;k=new E5;k.cm=g;c.addEventListener("mouseover",BU(k,"handleEvent"));c=i.g;h=new E4;h.dD=g;c.addEventListener("mouseout",BU(h,"handleEvent"));break b;case 1:c=i.g;h=
new E0;h.cW=g;c.addEventListener("click",BU(h,"handleEvent"));break b;case 2:c=i.g;h=new EZ;h.dS=g;c.addEventListener("resize",BU(h,"handleEvent"));break b;default:}c=new Bo;W(c,D(69));H(c);}return i;}
function Gs(){C.call(this);this.cO=null;}
function JX(a,b){return CQ(a.cO,BE(b));}
var Gr=E();
function I4(a,b){B4();return X(Gl,b);}
var C7=E(0);
var Gu=E();
function Gc(a,b){return b.c;}
var Gt=E();
function EB(a,b){return b.b;}
function Ei(){C.call(this);this.dL=null;}
var Dc=E();
var NS=null;function J8(a,b,c){return b.eJ(c);}
function IK(){NS=new Dc;}
var E3=E(0);
var GB=E(0);
var Ci=E();
function Do(){Ci.call(this);this.eE=null;}
function Fa(){var a=this;Do.call(a);a.fo=0;a.b5=0;a.bs=null;a.eI=null;a.er=null;}
function Fg(a,b,c,d){var e,$$je;e=a.eE;if(e===null)a.b5=1;if(!(a.b5?0:1))return;a:{try{Iw(e,b,c,d);break a;}catch($$e){$$je=KW($$e);if($$je instanceof Go){}else{throw $$e;}}a.b5=1;}}
function H9(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Gf;g=e.length;h=c+d|0;EC(f,g);f.i=c;f.u=h;f.c7=0;f.fA=0;f.ey=b;e=GQ(B3(16,BK(d,1024)));d=e.data.length;i=new FQ;h=0+d|0;EC(i,d);KG();i.fN=NT;i.dY=0;i.dB=e;i.i=0;i.u=h;i.eT=0;i.c_=0;j=a.er;k=new Hc;b=GQ(1);l=b.data;l[0]=63;Kd();m=NU;k.b9=m;k.ca=m;c=l.length;if(c&&c>=k.co){k.fa=j;k.dz=b.M();k.fi=2.0;k.co=4.0;k.c6=BL(512);k.dP=GQ(512);j=NV;if(j===null){m=new Bo;W(m,D(72));H(m);}k.b9=j;k.ca=j;while(k.bm!=3){k.bm=2;a:{while(true){try{j=H3(k,
f,i);}catch($$e){$$je=KW($$e);if($$je instanceof O){j=$$je;m=new F0;m.b4=1;m.cf=1;m.eg=j;H(m);}else{throw $$e;}}if(j.Q?0:1){c=BJ(f);if(c<=0)break a;j=Dw(c);}else if(Ds(j))break;m=!FH(j)?k.b9:k.ca;b:{if(m!==NV){if(m===NW)break b;else break a;}c=BJ(i);b=k.dz;d=b.data.length;if(c<d){j=NX;break a;}FR(i,b,0,d);}n=f.i;c=j.Q!=2?0:1;if(!(!c&&!FH(j)?0:1)){j=new CL;M(j);H(j);}D7(f,n+j.dV|0);}}n=Ds(j);Fg(a,e,0,i.i);F$(i);if(!n){while(true){d=k.bm;if(d!=2&&d!=4){j=new CJ;M(j);H(j);}j=NY;if(j===j)k.bm=3;n=Ds(j);Fg(a,e,0,
i.i);F$(i);if(!n)break;}return;}}j=new CJ;M(j);H(j);}m=new Bo;W(m,D(73));H(m);}
function C6(){Ci.call(this);this.e2=null;}
var DC=E(C6);
var Nx=null;function Iw(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Iu(){var b;b=new DC;b.e2=GQ(1);Nx=b;}
function Dj(){var a=this;C.call(a);a.eR=null;a.e6=null;}
function IN(b){var c,d;if(GE(b))H(HL(b));if(!IO(B0(b,0)))H(HL(b));c=1;while(c<Bs(b)){a:{d=B0(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(IO(d))break a;else H(HL(b));}}c=c+1|0;}}
function IO(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var DU=E(Dj);
var Ny=null;function JF(){JF=S(DU);Jg();}
function Jg(){var b,c,d,e,f;b=new DU;JF();c=X(BS,0);d=c.data;IN(D(74));e=d.length;f=0;while(f<e){IN(d[f]);f=f+1|0;}b.eR=D(74);b.e6=c.M();Ny=b;}
function IS(){Bo.call(this);this.fk=null;}
function HL(a){var b=new IS();JH(b,a);return b;}
function JH(a,b){M(a);a.fk=b;}
function FU(){var a=this;C.call(a);a.c4=null;a.c5=null;}
function JO(a,b,c){var d,e,f;d=a.c4;e=a.c5;d=d.dL;f=GX(Gc(d,b),Gc(d,c));if(!f)f=GX(EB(e,b),EB(e,c));return f;}
function F9(){var a=this;C.call(a);a.b2=null;a.cV=0;a.p=0;}
function Fo(a){var b,c;if(a.p)return;a.p=0;while(!a.p){b=a.b2;c=new Hg;c.eA=a;if(!DV(b,c)){if(a.p)a.p=2;else a.p=3;a.b2=null;}}}
function C9(){Bl.call(this);this.dC=null;}
function I_(a,b){var c,d;c=a.dC;d=new Eq;d.et=a;d.eu=b;return DV(c,d);}
function GF(){C9.call(this);this.dg=null;}
function Cb(){var a=this;C.call(a);a.dM=0;a.i=0;a.u=0;a.bj=0;}
function EC(a,b){a.bj=(-1);a.dM=b;a.u=b;}
function BJ(a){return a.u-a.i|0;}
function BZ(a){return a.i>=a.u?0:1;}
var G9=E(0);
var Dh=E(Cb);
function D7(a,b){var c,d,e;if(b>=0&&b<=a.u){a.i=b;if(b<a.bj)a.bj=0;return a;}c=new Bo;d=a.u;e=N();Q(I(G(I(G(e,D(75)),b),D(76)),d),93);W(c,L(e));H(c);}
function DP(){var a=this;Cb.call(a);a.dY=0;a.dB=null;a.fN=null;}
function FR(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.c_){e=new GS;M(e);H(e);}if(BJ(a)<d){e=new FI;M(e);H(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bc;j=N();I(G(I(G(j,D(77)),h),D(78)),g);W(i,L(j));H(i);}if(d<0){e=new Bc;i=N();G(I(G(i,D(79)),d),D(80));W(e,L(i));H(e);}h=a.i;k=h+a.dY|0;l=0;while(l<d){b=a.dB.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.i=h+d|0;return a;}}b=b.data;e=new Bc;d=b.length;i=N();Q(I(G(I(G(i,D(81)),c),D(76)),d),41);W(e,L(i));H(e);}
function F$(a){a.i=0;a.u=a.dM;a.bj=(-1);return a;}
function Cz(){C.call(this);this.e5=null;}
var NW=null;var NV=null;var NU=null;function Kd(){Kd=S(Cz);Je();}
function H7(a){var b=new Cz();IJ(b,a);return b;}
function IJ(a,b){Kd();a.e5=b;}
function Je(){NW=H7(D(82));NV=H7(D(83));NU=H7(D(84));}
var CJ=E(O);
function Ew(){var a=this;C.call(a);a.d9=null;a.d$=null;}
function Cf(a,b){F1(a.d9,a.d$);}
var C8=E(Dh);
function Gf(){var a=this;C8.call(a);a.fA=0;a.c7=0;a.ey=null;}
function C5(){var a=this;C.call(a);a.fa=null;a.dz=null;a.fi=0.0;a.co=0.0;a.b9=null;a.ca=null;a.bm=0;}
function Df(){var a=this;C.call(a);a.Q=0;a.dV=0;}
var NY=null;var NX=null;function Ic(a,b){var c=new Df();IM(c,a,b);return c;}
function IM(a,b,c){a.Q=b;a.dV=c;}
function Ds(a){return a.Q!=1?0:1;}
function FH(a){return a.Q!=3?0:1;}
function Dw(b){return Ic(2,b);}
function Hv(){NY=Ic(0,0);NX=Ic(1,0);}
function FQ(){var a=this;DP.call(a);a.eT=0;a.c_=0;}
function Dz(){C.call(this);this.fl=null;}
var NT=null;var NZ=null;function KG(){KG=S(Dz);La();}
function I9(a){var b=new Dz();Hp(b,a);return b;}
function Hp(a,b){KG();a.fl=b;}
function La(){NT=I9(D(85));NZ=I9(D(86));}
function D1(){var a=this;C5.call(a);a.c6=null;a.dP=null;}
function H3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.c6;e=0;f=0;g=a.dP;a:{b:{while(true){if((e+32|0)>f&&BZ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BJ(b)+j|0;h=i.length;f=BK(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bc;b=N();I(G(I(G(b,D(87)),k),D(78)),h);W(l,L(b));H(l);}if(BJ(b)<e)break;if(e<0){b=new Bc;c=N();G(I(G(c,D(79)),e),D(80));W(b,L(c));H(b);}h=b.i;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.ey.data[n+b.c7|0];m=m+1|0;j=o;n=k;}b.i=h+e|0;e=0;}if(!BZ(c))
{l=!BZ(b)&&e>=f?NY:NX;break a;}i=g.data;k=BK(BJ(c),i.length);p=new Fy;p.cN=b;p.dH=c;l=II(a,d,e,f,g,0,k,p);e=p.cJ;j=p.dT;if(l===null){if(!BZ(b)&&e>=f)l=NY;else if(!BZ(c)&&e>=f)l=NX;}FR(c,g,0,j);if(l!==null)break a;}b=new E1;M(b);H(b);}p=new Bc;l=N();Q(I(G(I(G(l,D(81)),j),D(76)),h),41);W(p,L(l));H(p);}D7(b,b.i-(f-e|0)|0);return l;}
var Hc=E(D1);
function II(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(C_(h,2))break a;i=NX;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!Fr(l)&&!E9(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(C_(h,3))break a;i=NX;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Fr(l))
{i=Dw(1);break a;}if(j>=d){if(BZ(h.cN))break a;i=NY;break a;}c=j+1|0;n=k[j];if(!E9(n)){j=c+(-2)|0;i=Dw(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(C_(h,4))break a;i=NX;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cJ=j;h.dT=f;return i;}
var Go=E(BP);
function Hg(){C.call(this);this.eA=null;}
function Lf(a,b){var c;c=a.eA;c.cV=b;c.p=1;return 0;}
var D6=E(BQ);
var N0=null;function GX(b,c){var d,e,f;d=(b<=c?0:1)-(c<=b?0:1)|0;if(!d){e=1.0/b;f=1.0/c;d=(((e<=f?0:1)-(f<=e?0:1)|0)+(c!==c?0:1)|0)-(b!==b?0:1)|0;}return d;}
function Iz(){N0=K($rt_doublecls());}
var G6=E(0);
function Iq(){C.call(this);this.gj=null;}
var BX=E(0);
function E6(){C.call(this);this.dG=null;}
function K9(a,b){var c,d;c=a.dG;d=new Cy;C1();CZ(d,N1,b);Cf(c,d);}
function E5(){C.call(this);this.cm=null;}
function IY(a,b){var c,d;c=a.cm;d=new Cy;C1();CZ(d,N2,b);Cf(c,d);}
function E4(){C.call(this);this.dD=null;}
function K8(a,b){var c,d;c=a.dD;d=new Cy;C1();CZ(d,N3,b);Cf(c,d);}
function E0(){C.call(this);this.cW=null;}
function KA(a,b){var c,d;c=a.cW;d=new Cy;C1();CZ(d,N4,b);Cf(c,d);}
function EZ(){C.call(this);this.dS=null;}
function KP(a,b){Cf(a.dS,null);}
function Eq(){var a=this;C.call(a);a.et=null;a.eu=null;}
function JT(a,b){var c,d,e,f;c=a.et;d=a.eu;c=c.dg.eb;if(b<0){c=new Bc;M(c);H(c);}e=b/32|0;f=c.t.data;return (e<f.length&&f[e]&1<<(b%32|0)?1:0)?GP(d,b):1;}
var HE=E();
function Iy(){B7.call(this);this.hi=null;}
function D0(){var a=this;C.call(a);a.bh=0;a.dv=0;a.P=null;a.bt=null;a.dq=null;a.br=null;}
function Dk(a){var b,c;if(a.P!==null)return 1;while(true){b=a.bh;c=a.br.l.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.bh=b+1|0;}return 0;}
var Gy=E(D0);
function Gw(a){var b,c,d,e;if(a.dv!=a.br.bz){b=new Dm;M(b);H(b);}if(!Dk(a)){b=new C2;M(b);H(b);}b=a.P;if(b!==null){c=a.bt;if(c!==null)a.dq=c;a.bt=b;a.P=b.D;}else{d=a.br.l.data;e=a.bh;a.bh=e+1|0;b=d[e];a.bt=b;a.P=b.D;a.dq=null;}return a.bt;}
var EO=E(0);
function Cy(){var a=this;C.call(a);a.fv=null;a.e8=null;}
function N5(a,b){var c=new Cy();CZ(c,a,b);return c;}
function CZ(a,b,c){a.fv=b;a.e8=c;}
var BI=E(Bv);
var N2=null;var N3=null;var N1=null;var N4=null;var N6=null;function C1(){C1=S(BI);Ja();}
function F_(a,b){var c=new BI();Hn(c,a,b);return c;}
function Ko(){C1();return N6.M();}
function Hn(a,b,c){C1();CR(a,b,c);}
function Ja(){var b;N2=F_(D(88),0);N3=F_(D(89),1);N1=F_(D(90),2);b=F_(D(91),3);N4=b;N6=FV(BI,[N2,N3,N1,b]);}
var F0=E(Ck);
var CL=E(O);
function Fy(){var a=this;C.call(a);a.cN=null;a.dH=null;a.cJ=0;a.dT=0;}
function C_(a,b){return BJ(a.dH)<b?0:1;}
var B2=E();
var N7=null;var N8=null;var MN=null;var MM=null;var N9=null;function Io(){N7=Gj([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);N8=It([J(1),J(10),J(100),J(1000),J(10000),J(100000),J(1000000),J(10000000),J(100000000),J(1000000000),B(1410065408, 2),B(1215752192, 23),B(3567587328, 232),B(1316134912, 2328),B(276447232, 23283),B(2764472320, 232830),B(1874919424, 2328306),B(1569325056, 23283064),B(2808348672, 232830643)]);MN=It([J(1),J(10),J(100),J(10000),J(100000000),B(1874919424, 2328306)]);MM
=new Gb;N9=new D3;}
var CY=E();
var N$=C3;var N_=null;var Oa=null;function Ij(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):B(0, 2146959360);c.df=Ed(Bw(d,B(0, 2147483648)),C3)?0:1;e=Bw(d,B(4294967295, 1048575));f=I7(LJ(d,52))&2047;if(Ed(e,C3)&&!f){c.bG=C3;c.bY=0;return;}if(f)e=Lq(e,B(0, 1048576));else{e=Cl(e,1);while(Ed(Bw(e,B(0, 1048576)),C3)){e=Cl(e,1);f=f+(-1)|0;}}g=Oa.data;h=f<<16>>16;i=0;j=g.length;if(i>j){c=new Bo;M(c);H(c);}k=j-1|0;a:{while(true){if(i>k){j=( -i|0)-1|0;break a;}j=(i
+k|0)/2|0;l=EE(g[j],h);if(!l)break;if(l<=0)i=j+1|0;else k=j-1|0;}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=CW(e,N_.data[h],i);if(I8(m,N$)){while(BM(m,N$)<=0){j=j+(-1)|0;m=Bg(U(m,J(10)),J(9));}g=Oa.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=CW(e,N_.data[h],i);}e=Cl(e,1);d=Bg(e,J(1));g=N_.data;h=j+1|0;n=g[h];f=i-1|0;n=CW(d,n,f);o=CW(LH(e,J(1)),N_.data[h],f);p=J(1);while(true){q=U(p,J(10));if(BM(Bx(m,q),Bx(o,q))<=0)break;p=q;}r=J(1);while(true){s=U(r,J(10));if(BM(Bx(m,s),Bx(n,s))>=0)break;r=s;}h=BM(p,r);e=h>0?U(Bx(m,p),
p):h<0?Bg(U(Bx(m,r),r),r):U(Bx(Bg(m,IC(r,J(2))),r),r);if(BM(e,B(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Bx(e,J(10));if(BM(e,B(2808348672, 232830643))<0)break;}else if(BM(e,B(1569325056, 23283064))<0){j=j+(-1)|0;e=U(e,J(10));}c.bG=e;c.bY=j-330|0;}
function CW(b,c,d){var e,f,g,h,i,j,k,l;e=Bw(b,J(65535));f=Bw(Cc(b,16),J(65535));g=Bw(Cc(b,32),J(65535));h=Bw(Cc(b,48),J(65535));i=Bw(c,J(65535));j=Bw(Cc(c,16),J(65535));k=Bw(Cc(c,32),J(65535));l=Bw(Cc(c,48),J(65535));return Bg(Bg(Bg(Cl(U(l,h),32+d|0),Cl(Bg(U(l,g),U(k,h)),16+d|0)),Cl(Bg(Bg(U(l,f),U(k,g)),U(j,h)),d)),Cc(Bg(Bg(Bg(U(k,e),U(j,f)),U(i,g)),Cl(Bg(Bg(Bg(U(l,e),U(k,f)),U(j,g)),U(i,h)),16)),32-d|0));}
function H0(){N$=Bx(J(-1),J(10));N_=It([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
B(3141732885, 4047385770),B(2513386308, 3237908616),B(1151715587, 2590326893),B(983751480, 4144523029),B(1645994643, 3315618423),B(3034782633, 2652494738),B(3996658754, 4243991581),B(2338333544, 3395193265),B(1870666835, 2716154612),B(4073513845, 2172923689),B(3940641775, 3476677903),B(575533043, 2781342323),B(2178413352, 2225073858),B(2626467905, 3560118173),B(3819161242, 2848094538),B(478348616, 2278475631),B(3342338164, 3645561009),B(3532863990, 2916448807),B(1108304273, 2333159046),B(55299919, 3733054474),
B(903233395, 2986443579),B(1581580175, 2389154863),B(1671534821, 3822647781),B(478234397, 3058118225),B(382587518, 2446494580),B(612140029, 3914391328),B(2207698941, 3131513062),B(48172235, 2505210450),B(77075576, 4008336720),B(61660460, 3206669376),B(3485302205, 2565335500),B(1281516232, 4104536801),B(166219527, 3283629441),B(3568949458, 2626903552),B(2274345296, 4203045684),B(2678469696, 3362436547),B(424788838, 2689949238),B(2057817989, 2151959390),B(3292508783, 3443135024),B(3493000485, 2754508019),B(3653393847, 2203606415),
B(1550462860, 3525770265),B(1240370288, 2820616212),B(3569276608, 2256492969),B(3133862195, 3610388751),B(1648096297, 2888311001),B(459483578, 2310648801),B(3312154103, 3697038081),B(1790729823, 2957630465),B(1432583858, 2366104372),B(3151127633, 3785766995),B(2520902106, 3028613596),B(1157728226, 2422890877),B(2711358621, 3876625403),B(3887073815, 3101300322),B(1391672133, 2481040258),B(1367681954, 3969664413),B(2812132482, 3175731530),B(2249705985, 2540585224),B(1022549199, 4064936359),B(1677032818, 3251949087),
B(3918606632, 2601559269),B(3692790234, 4162494831),B(2095238728, 3329995865),B(1676190982, 2663996692),B(3540899031, 4262394707),B(1114732307, 3409915766),B(32792386, 2727932613),B(1744220827, 2182346090),B(2790753324, 3491753744),B(3091596118, 2793402995),B(2473276894, 2234722396),B(2239256113, 3575555834),B(2650398349, 2860444667),B(402331761, 2288355734),B(2361717736, 3661369174),B(2748367648, 2929095339),B(3057687578, 2343276271),B(3174313206, 3749242034),B(3398444024, 2999393627),B(1000768301, 2399514902),
B(2460222741, 3839223843),B(3686165111, 3071379074),B(3807925548, 2457103259),B(3515700499, 3931365215),B(2812560399, 3145092172),B(532061401, 2516073738),B(4287272078, 4025717980),B(3429817663, 3220574384),B(3602847589, 2576459507),B(2328582306, 4122335212),B(144878926, 3297868170),B(115903141, 2638294536),B(2762425404, 4221271257),B(491953404, 3377017006),B(3829536560, 2701613604),B(3922622707, 2161290883),B(1122235577, 3458065414),B(1756781920, 2766452331),B(546432077, 2213161865),B(874291324, 3541058984),
B(1558426518, 2832847187),B(3823721592, 2266277749),B(3540974170, 3626044399),B(3691772795, 2900835519),B(3812411695, 2320668415),B(1804891416, 3713069465),B(1443913133, 2970455572),B(3732110884, 2376364457),B(2535403578, 3802183132),B(310335944, 3041746506),B(3684242592, 2433397204),B(3317807769, 3893435527),B(936259297, 3114748422),B(3325987815, 2491798737),B(1885606668, 3986877980),B(1508485334, 3189502384),B(2065781726, 2551601907),B(4164244222, 4082563051),B(2472401918, 3266050441),B(1118928075, 2612840353),
B(931291461, 4180544565),B(745033169, 3344435652),B(3173006913, 2675548521),B(3358824142, 4280877634),B(3546052773, 3424702107),B(1118855300, 2739761686),B(36090780, 2191809349),B(1775732167, 3506894958),B(3138572652, 2805515966),B(1651864662, 2244412773),B(1783990001, 3591060437),B(4004172378, 2872848349),B(4062331362, 2298278679),B(3922749802, 3677245887),B(1420212923, 2941796710),B(1136170338, 2353437368),B(958879082, 3765499789),B(1626096725, 3012399831),B(441883920, 2409919865),B(707014273, 3855871784),
B(1424604878, 3084697427),B(3716664280, 2467757941),B(4228675929, 3948412706),B(2523947284, 3158730165),B(2019157827, 2526984132),B(4089645983, 4043174611),B(2412723327, 3234539689),B(2789172121, 2587631751),B(2744688475, 4140210802),B(477763862, 3312168642),B(2959191467, 2649734913),B(3875712888, 4239575861),B(2241576851, 3391660689),B(2652254940, 2713328551),B(1262810493, 2170662841),B(302509870, 3473060546),B(3677981733, 2778448436),B(2083391927, 2222758749),B(756446706, 3556413999),B(1464150824, 2845131199),
B(2030314118, 2276104959),B(671522212, 3641767935),B(537217769, 2913414348),B(2147761134, 2330731478),B(2577424355, 3729170365),B(2061939484, 2983336292),B(4226531965, 2386669033),B(1608490388, 3818670454),B(2145785770, 3054936363),B(3434615534, 2443949090),B(1200417559, 3910318545),B(960334047, 3128254836),B(4204241074, 2502603868),B(1572824964, 4004166190),B(1258259971, 3203332952),B(3583588354, 2562666361),B(4015754449, 4100266178),B(635623181, 3280212943),B(2226485463, 2624170354),B(985396364, 4198672567),
B(3365297469, 3358938053),B(115257597, 2687150443),B(1810192996, 2149720354),B(319328417, 3439552567),B(2832443111, 2751642053),B(3983941407, 2201313642),B(2938332415, 3522101828),B(4068652850, 2817681462),B(1536935362, 2254145170),B(2459096579, 3606632272),B(249290345, 2885305818),B(1917419194, 2308244654),B(490890333, 3693191447),B(2969692644, 2954553157),B(657767197, 2363642526),B(3629407892, 3781828041),B(2044532855, 3025462433),B(3353613202, 2420369946),B(3647794205, 3872591914),B(3777228823, 3098073531),
B(2162789599, 2478458825),B(3460463359, 3965534120),B(2768370687, 3172427296),B(1355703090, 2537941837),B(3028118404, 4060706939),B(3281488183, 3248565551),B(1766197087, 2598852441),B(1107928421, 4158163906),B(27349277, 3326531125),B(21879422, 2661224900),B(35007075, 4257959840),B(28005660, 3406367872),B(2599384905, 2725094297),B(361521006, 2180075438),B(4014407446, 3488120700),B(3211525957, 2790496560),B(2569220766, 2232397248),B(3251759766, 3571835597),B(883420894, 2857468478),B(2424723634, 2285974782),B(443583977, 3657559652),
B(2931847559, 2926047721),B(1486484588, 2340838177),B(3237368801, 3745341083),B(12914663, 2996272867),B(2587312108, 2397018293),B(3280705914, 3835229269),B(3483558190, 3068183415),B(2786846552, 2454546732),B(1022980646, 3927274772),B(3395364895, 3141819817),B(998304997, 2513455854),B(3315274914, 4021529366),B(1793226472, 3217223493),B(3152568096, 2573778794),B(2467128576, 4118046071),B(1114709402, 3294436857),B(3468747899, 2635549485),B(1255029343, 4216879177),B(3581003852, 3373503341),B(2005809622, 2698802673),
B(3322634616, 2159042138),B(162254630, 3454467422),B(2706784082, 2763573937),B(447440347, 2210859150),B(715904555, 3537374640),B(572723644, 2829899712),B(3035159293, 2263919769),B(2279274491, 3622271631),B(964426134, 2897817305),B(771540907, 2318253844),B(2952452370, 3709206150),B(2361961896, 2967364920),B(1889569516, 2373891936),B(1305324308, 3798227098),B(2762246365, 3038581678),B(3927784010, 2430865342),B(2848480580, 3889384548),B(3996771382, 3111507638),B(620436728, 2489206111),B(3569679143, 3982729777),
B(1137756396, 3186183822),B(3487185494, 2548947057),B(2143522954, 4078315292),B(4291798741, 3262652233),B(856458615, 2610121787),B(2229327243, 4176194859),B(2642455254, 3340955887),B(395977285, 2672764710),B(633563656, 4276423536),B(3942824761, 3421138828),B(577279431, 2736911063),B(2179810463, 2189528850),B(3487696741, 3503246160),B(2790157393, 2802596928),B(3950112833, 2242077542),B(2884206696, 3587324068),B(4025352275, 2869859254),B(4079275279, 2295887403),B(1372879692, 3673419846),B(239310294, 2938735877),
B(2768428613, 2350988701),B(2711498862, 3761581922),B(451212171, 3009265538),B(2078956655, 2407412430),B(3326330649, 3851859888),B(84084141, 3081487911),B(3503241150, 2465190328),B(451225085, 3944304526),B(3796953905, 3155443620),B(3037563124, 2524354896),B(3142114080, 4038967834),B(3372684723, 3231174267),B(980160860, 2584939414),B(3286244294, 4135903062),B(911008517, 3308722450),B(728806813, 2646977960),B(1166090902, 4235164736),B(73879262, 3388131789),B(918096869, 2710505431),B(4170451332, 2168404344),B(4095741754, 3469446951),
B(2417599944, 2775557561),B(1075086496, 2220446049),B(3438125312, 3552713678),B(173519872, 2842170943),B(1856802816, 2273736754),B(393904128, 3637978807),B(2892103680, 2910383045),B(2313682944, 2328306436),B(1983905792, 3725290298),B(3305111552, 2980232238),B(67108864, 2384185791),B(2684354560, 3814697265),B(2147483648, 3051757812),B(0, 2441406250),B(0, 3906250000),B(0, 3125000000),B(0, 2500000000),B(0, 4000000000),B(0, 3200000000),B(0, 2560000000),B(0, 4096000000),B(0, 3276800000),B(0, 2621440000),B(0, 4194304000),
B(0, 3355443200),B(0, 2684354560),B(0, 2147483648),B(3435973836, 3435973836),B(1889785610, 2748779069),B(2370821947, 2199023255),B(3793315115, 3518437208),B(457671715, 2814749767),B(2943117749, 2251799813),B(3849994940, 3602879701),B(2221002492, 2882303761),B(917808535, 2305843009),B(3186480574, 3689348814),B(3408177918, 2951479051),B(1867548875, 2361183241),B(1270091283, 3777893186),B(157079567, 3022314549),B(984657113, 2417851639),B(3293438299, 3868562622),B(916763721, 3094850098),B(2451397895, 2475880078),
B(3063243173, 3961408125),B(2450594538, 3169126500),B(1960475630, 2535301200),B(3136761009, 4056481920),B(2509408807, 3245185536),B(1148533586, 2596148429),B(3555640657, 4153837486),B(1985519066, 3323069989),B(2447408712, 2658455991),B(2197867021, 4253529586),B(899300158, 3402823669),B(1578433585, 2722258935),B(1262746868, 2177807148),B(1161401530, 3484491437),B(3506101601, 2787593149),B(3663874740, 2230074519),B(3285219207, 3568119231),B(1769181906, 2854495385),B(1415345525, 2283596308),B(1405559381, 3653754093),
B(2842434423, 2923003274),B(3132940998, 2338402619),B(2435725219, 3741444191),B(1089586716, 2993155353),B(2589656291, 2394524282),B(707476229, 3831238852),B(3142961361, 3064991081),B(1655375629, 2451992865),B(2648601007, 3923188584),B(2977874265, 3138550867),B(664312493, 2510840694),B(2780886908, 4017345110),B(2224709526, 3213876088),B(3497754539, 2571100870),B(1301439967, 4113761393),B(2759138892, 3291009114),B(3066304573, 2632807291),B(3188100398, 4212491666),B(1691486859, 3369993333),B(3071176406, 2695994666),
B(1597947665, 2156795733),B(1697722806, 3450873173),B(3076165163, 2760698538),B(4178919049, 2208558830),B(2391303182, 3533694129),B(2772036005, 2826955303),B(3935615722, 2261564242),B(2861011319, 3618502788),B(4006795973, 2894802230),B(3205436779, 2315841784),B(2551718468, 3705346855),B(2041374775, 2964277484),B(2492093279, 2371421987),B(551375410, 3794275180),B(441100328, 3035420144),B(1211873721, 2428336115),B(1938997954, 3885337784),B(2410191822, 3108270227),B(210166539, 2486616182),B(1195259923, 3978585891),
B(97214479, 3182868713),B(1795758501, 2546294970),B(2873213602, 4074071952),B(580583963, 3259257562),B(3041447548, 2607406049),B(2289335700, 4171849679),B(2690462019, 3337479743),B(3870356534, 2669983794),B(3615590076, 4271974071),B(2033478602, 3417579257),B(4203763259, 2734063405),B(3363010607, 2187250724),B(2803836594, 3499601159),B(3102062734, 2799680927),B(763663269, 2239744742),B(2080854690, 3583591587),B(4241664129, 2866873269),B(4252324763, 2293498615),B(2508752324, 3669597785),B(2007001859, 2935678228),
B(3323588406, 2348542582),B(1881767613, 3757668132),B(4082394468, 3006134505),B(3265915574, 2404907604),B(2648484541, 3847852167),B(400800715, 3078281734),B(1179634031, 2462625387),B(2746407909, 3940200619),B(3056119786, 3152160495),B(2444895829, 2521728396),B(2193846408, 4034765434),B(2614070585, 3227812347),B(373269550, 2582249878),B(4033205117, 4131599804),B(4085557553, 3305279843),B(691465664, 2644223875),B(1106345063, 4230758200),B(885076050, 3384606560),B(708060840, 2707685248),B(2284435591, 2166148198),
B(2796103486, 3465837117),B(518895870, 2772669694),B(1274110155, 2218135755),B(2038576249, 3549017208),B(3348847917, 2839213766),B(1820084875, 2271371013),B(2053142340, 3634193621),B(783520413, 2907354897),B(3203796708, 2325883917),B(1690100896, 3721414268),B(3070067635, 2977131414),B(3315047567, 2381705131),B(3586089190, 3810728210),B(2868871352, 3048582568),B(4013084000, 2438866054),B(3843954022, 3902185687),B(1357176299, 3121748550),B(1085741039, 2497398840),B(1737185663, 3995838144),B(2248741989, 3196670515),
B(1798993591, 2557336412),B(3737383206, 4091738259),B(3848900024, 3273390607),B(1361133101, 2618712486),B(459826043, 4189939978),B(2085847752, 3351951982),B(4245658579, 2681561585),B(2498086431, 4290498537),B(280482227, 3432398830),B(224385781, 2745919064),B(1038502084, 2196735251),B(4238583712, 3514776401),B(2531873511, 2811821121),B(1166505349, 2249456897),B(2725402018, 3599131035),B(2180321615, 2879304828),B(3462244210, 2303443862),B(2103616899, 3685510180),B(1682893519, 2948408144),B(2205308275, 2358726515),
B(3528493240, 3773962424),B(3681788051, 3019169939),B(3804423900, 2415335951),B(74124026, 3864537523),B(1777286139, 3091630018),B(3139815829, 2473304014),B(2446724950, 3957286423),B(3675366878, 3165829138),B(363313125, 2532663311),B(3158281377, 4052261297),B(808638183, 3241809038),B(2364897465, 2593447230),B(3783835944, 4149515568),B(450088378, 3319612455),B(360070702, 2655689964),B(2294100042, 4249103942),B(117293115, 3399283154),B(952827951, 2719426523),B(2480249279, 2175541218),B(3109405388, 3480865949),
B(3346517769, 2784692759),B(3536207675, 2227754207),B(2221958443, 3564406732),B(59579836, 2851525386),B(3483637705, 2281220308),B(419859574, 3649952494),B(1194881118, 2919961995),B(955904894, 2335969596),B(4106428209, 3737551353),B(708162189, 2990041083),B(2284516670, 2392032866),B(1937239754, 3827252586),B(690798344, 3061802069),B(1411632134, 2449441655),B(2258611415, 3919106648),B(3524876050, 3135285318),B(242920462, 2508228255),B(388672740, 4013165208),B(2028925110, 3210532166),B(764146629, 2568425733),B(363641147, 4109481173),
B(2008899836, 3287584938),B(3325106787, 2630067950),B(1025203564, 4208108721),B(4256136688, 3366486976),B(2545915891, 2693189581),B(1177739254, 2154551665),B(1884382806, 3447282664),B(2366499704, 2757826131),B(1034206304, 2206260905),B(1654730086, 3530017448),B(3041770987, 2824013958),B(4151403708, 2259211166),B(629291719, 3614737867),B(3080413753, 2891790293),B(4182317920, 2313432234),B(4114728295, 3701491575),B(3291782636, 2961193260),B(2633426109, 2368954608),B(3354488315, 3790327373),B(106610275, 3032261899),
B(944281679, 2425809519),B(3228837605, 3881295230),B(2583070084, 3105036184),B(2925449526, 2484028947),B(1244745405, 3974446316),B(136802865, 3179557053),B(1827429210, 2543645642),B(3782880196, 4069833027),B(1308317238, 3255866422),B(3623634168, 2604693137),B(2361840832, 4167509020),B(1889472666, 3334007216),B(652584673, 2667205773),B(185142018, 4267529237),B(2725093992, 3414023389),B(3039068653, 2731218711),B(1572261463, 2184974969),B(4233605259, 3495959950),B(3386884207, 2796767960),B(2709507366, 2237414368),
B(3476218326, 3579862989),B(3639968120, 2863890391),B(2052981037, 2291112313),B(2425776200, 3665779701),B(1081627501, 2932623761),B(6308541, 2346099009),B(1728080585, 3753758414),B(2241457927, 3003006731),B(934172882, 2402405385),B(1494676612, 3843848616),B(336747830, 3075078893),B(1987385183, 2460063114),B(602835915, 3936100983),B(2200255650, 3148880786),B(901211061, 2519104629),B(3159924616, 4030567406),B(1668946233, 3224453925),B(1335156987, 2579563140),B(2136251179, 4127301024),B(2567994402, 3301840819),
B(2913388981, 2641472655),B(366455074, 4226356249),B(1152157518, 3381084999),B(1780719474, 2704867999),B(2283569038, 2163894399),B(1076730083, 3462231039),B(1720377526, 2769784831),B(517308561, 2215827865),B(827693699, 3545324584),B(1521148418, 2836259667),B(3793899112, 2269007733),B(916277824, 3630412374),B(1592015718, 2904329899),B(2132606034, 2323463919),B(835189277, 3717542271),B(4104125258, 2974033816),B(2424306747, 2379227053),B(3019897337, 3806763285),B(2415917869, 3045410628),B(3650721214, 2436328502),
B(2405180105, 3898125604),B(2783137543, 3118500483),B(3944496953, 2494800386),B(298240911, 3991680619),B(1097586188, 3193344495),B(878068950, 2554675596),B(3981890698, 4087480953),B(608532181, 3269984763),B(2204812663, 2615987810),B(3527700261, 4185580496),B(1963166749, 3348464397),B(4147513777, 2678771517),B(3200048207, 4286034428),B(4278025484, 3428827542),B(1704433468, 2743062034),B(2222540234, 2194449627),B(120090538, 3511119404),B(955065889, 2808895523),B(2482039630, 2247116418),B(3112269949, 3595386269),
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);Oa=LN([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Gb(){var a=this;C.call(a);a.bG=C3;a.bY=0;a.df=0;}
var GW=E(BQ);
var Ob=null;function Bx(b,c){return Long_udiv(b, c);}
function BM(b,c){return Long_ucompare(b, c);}
function HZ(){Ob=K($rt_longcls());}
var D3=E();
var GS=E(CL);
var FI=E(O);
var E1=E(O);
$rt_packages([]);
$rt_metadata([C,0,0,[],0,3,0,0,["f",L5(KD)],BR,0,C,[],0,3,0,B4,0,EQ,0,C,[],3,3,0,0,0,Eh,0,C,[],3,3,0,0,0,E8,0,C,[EQ,Eh],0,3,0,0,["f",L5(IW)],IG,0,C,[],4,0,0,0,0,Im,0,C,[],4,3,0,0,0,Cu,0,C,[],0,3,0,0,0,BP,0,Cu,[],0,3,0,0,0,O,0,BP,[],0,3,0,0,0,Ir,0,O,[],0,3,0,0,0,Bp,0,C,[],3,3,0,0,0,Bq,0,C,[],3,3,0,0,0,CV,0,C,[],3,3,0,0,0,BS,0,C,[Bp,Bq,CV],0,3,0,DW,["f",L5(KB)],Ck,0,Cu,[],0,3,0,0,0,Cv,0,Ck,[],0,3,0,0,0,H6,0,Cv,[],0,3,0,0,0,BQ,0,C,[Bp],1,3,0,0,0,B8,0,BQ,[Bq],0,3,0,0,["f",L5(Kj)],Dr,0,C,[Bp,CV],0,0,0,0,["d7",L6(F6),
"f",L5(L)],Dv,0,C,[],3,3,0,0,0,Ep,0,Dr,[Dv],0,3,0,0,["f",L5(Ky),"d7",L6(K$)],B_,0,Cv,[],0,3,0,0,0,H1,0,B_,[],0,3,0,0,0,HS,0,B_,[],0,3,0,0,0,DE,0,C,[],0,3,0,IL,0,Bf,0,C,[],1,3,0,0,0,HA,0,Bf,[],32772,3,0,0,0,Gg,0,C,[],4,3,0,0,0,IT,0,C,[],4,3,0,0,0,FX,0,C,[],3,3,0,0,0,De,0,C,[FX],0,3,0,LO,0,EF,0,C,[],0,3,0,0,0,Bv,0,C,[Bq,Bp],1,3,0,0,["f",L5(J3),"eJ",L6(K3)],P,0,Bv,[],12,3,0,DJ,0,DQ,0,C,[],3,3,0,0,0,Dp,0,C,[DQ],3,3,0,0,0,GU,0,C,[Dp],3,3,0,0,0,Bb,0,C,[],3,3,0,0,0,G3,0,C,[Bb],0,3,0,0,["h",L6(K7)],G4,0,C,[Bb],0,3,
0,0,["h",L6(K0)],Bz,0,C,[],3,3,0,0,0,G2,0,C,[Bz],0,3,0,0,0,Ho,0,C,[],4,3,0,0,0,Ey,0,C,[],3,3,0,0,0,B1,0,Bf,[],32772,3,0,0,["f",L5(J0)],H2,0,C,[],0,3,0,0,0,G_,0,C,[Bz],0,3,0,0,0,CA,0,C,[],3,3,0,0,0]);
$rt_metadata([G$,0,C,[CA],0,3,0,0,["dX",L5(J2)],DF,0,C,[],3,3,0,0,0,Hb,0,C,[DF],0,3,0,0,["dd",L7(Kv)],CD,0,C,[],3,3,0,0,0,Ha,0,C,[CD],0,3,0,0,0,BG,0,C,[],3,3,0,0,0,Dy,0,C,[BG,Bp],0,3,0,0,["f",L5(JG)],T,0,C,[],3,3,0,0,0,GA,0,C,[],3,3,0,0,0,Dl,0,C,[GA,Bp],0,3,0,0,0,DX,0,Dl,[],0,3,0,0,0,Dd,0,C,[],3,3,0,0,0,Hl,0,C,[Dd],0,3,0,0,["dF",L6(Jy)],Hk,0,C,[Dd],0,3,0,0,["dF",L6(Kr)],Cm,0,C,[],3,3,0,0,0,Hh,0,C,[Cm],0,3,0,0,0,Bc,0,O,[],0,3,0,0,0,HM,0,C,[],4,3,0,0,0,CE,0,O,[],0,3,0,0,0,CO,0,O,[],0,3,0,0,0,CX,0,C,[Bq],0,3,0,
0,0,Ct,0,C,[Ey],1,3,0,0,["f",L5(Ks)],GM,0,Ct,[Bp,BG],0,3,0,0,0,Ft,0,C,[Bb],0,3,0,0,["h",L6(Jn)],Bl,0,C,[GU],1,3,0,0,["r",L5(Jc)],F2,0,Bl,[],0,3,0,0,["y",L6(HN)],Gk,0,C,[Bz],0,3,0,0,0,FT,0,C,[CA],0,3,0,0,0,FS,0,C,[CD],0,3,0,0,0,F8,0,C,[],3,3,0,0,0,DH,0,C,[F8],3,3,0,0,0,FG,0,C,[DH],0,3,0,0,0,BA,0,Bv,[],12,3,0,In,0,Gd,0,C,[],3,3,0,0,0,Bm,0,Bf,[Bq],32772,3,0,Bj,["f",L5(I$),"eJ",L6(J4)],EJ,0,C,[Bz],0,3,0,0,["bB",L6(JL)],Be,0,C,[],3,3,0,0,0,EL,0,C,[Be],0,3,0,0,["d",L6(JW)],EH,0,C,[Bb],0,3,0,0,["h",L6(KN)],EI,0,C,
[Bb],0,3,0,0,["h",L6(KS)],EM,0,C,[DH],0,3,0,0,0,Fn,0,C,[Dp],3,3,0,0,0,Y,0,C,[Fn],1,3,0,0,["r",L5(KU)],EK,0,Y,[],0,3,0,0,["o",L6(Ht),"r",L5(Ju)],C0,0,C,[],3,3,0,0,0,Ca,0,C,[C0],0,3,0,0,0,Fq,0,C,[C0],3,3,0,0,0,DB,0,Ca,[Fq],0,3,0,0,0,Bn,0,C,[],3,3,0,0,0,D8,0,C,[Bn],3,3,0,0,0]);
$rt_metadata([Ef,0,C,[D8],3,3,0,0,0,BC,0,C,[Bn],3,3,0,0,0,HI,0,C,[Ef,BC],3,3,0,0,0,Eo,0,C,[Bz],0,3,0,0,0,FD,0,C,[Be],0,3,0,0,["d",L6(KK)],FF,0,C,[Bz],0,3,0,0,["bB",L6(Kh)],FE,0,C,[Bb],0,3,0,0,["h",L6(JQ)],FA,0,C,[Bz],0,3,0,0,["bB",L6(J_)],Fz,0,C,[Bb],0,3,0,0,["h",L6(I6)],BV,0,C,[],3,3,0,0,0,FC,0,C,[BV],0,3,0,0,["bl",L6(I5)],FB,0,C,[BV],0,3,0,0,["bl",L6(Kq)],D5,0,Bl,[],0,3,0,0,["y",L6(KQ),"r",L5(JK)],H_,0,Bf,[T],32772,3,0,0,["f",L5(JB)],G1,0,C,[BC],3,3,0,0,0,Gm,0,C,[BC],3,3,0,0,0,Ge,0,C,[BC],3,3,0,0,0,Fj,0,C,
[BC],3,3,0,0,0,Gi,0,C,[BC],3,3,0,0,0,GG,0,C,[BC,G1,Gm,Ge,Fj,Gi],3,3,0,0,0,Gx,0,C,[],3,3,0,0,0,GL,0,C,[Bn],3,3,0,0,0,HT,0,C,[Bn,GG,Gx,GL],1,3,0,0,["gI",L6(J$),"hw",L7(Jl),"gJ",L7(Lk),"f2",L8(J6),"go",L6(Kb),"gz",L5(KT),"g2",L8(Jh)],ER,0,C,[],3,3,0,0,0,CT,0,C,[ER],3,3,0,0,0,B5,0,C,[CT],1,3,0,0,0,GN,0,C,[CT],3,3,0,0,0,B7,0,B5,[GN],1,3,0,0,0,DY,0,B7,[BG,Bp],1,3,0,0,0,DG,0,DY,[],0,0,0,0,0,Er,0,C,[Gd],0,0,0,0,0,FL,0,C,[Bb],0,3,0,0,["h",L6(Jp)],FM,0,C,[Bb],0,3,0,0,["h",L6(Jw)],FJ,0,C,[Be],0,3,0,0,["d",L6(Lc)],FK,0,
C,[Bb],0,3,0,0,["h",L6(KL)],FO,0,C,[Be],0,3,0,0,["d",L6(I3)],FP,0,C,[Bb],0,3,0,0,["h",L6(KY)],Fc,0,Y,[],0,3,0,0,["o",L6(Ka)],Gq,0,Y,[],0,3,0,0,["o",L6(J9)],G8,0,Y,[],0,3,0,0,["o",L6(I1),"r",L5(JP)],HJ,0,C,[],4,3,0,0,0,GR,0,C,[CT],3,3,0,0,0,Ex,0,C,[GR],3,3,0,0,0,Ch,0,B5,[Ex],1,3,0,0,0,DD,0,C,[],3,3,0,0,0,E7,0,Ch,[DD],0,0,0,0,0,BF,0,C,[],4,3,0,Gn,0,Ii,0,C,[Bn],1,3,0,0,0,HP,0,C,[Bn],1,3,0,0,0,IR,0,C,[Bn],1,3,0,0,0]);
$rt_metadata([DT,0,C,[Bn],3,3,0,0,0,GJ,0,C,[DT],0,3,0,0,["fz",L6(KR)],H5,0,C,[Bn],1,3,0,0,0,GK,0,C,[DT],0,3,0,0,["fz",L6(Jk)],IU,0,C,[],4,3,0,0,0,EG,0,Y,[],0,3,0,0,["o",L6(HF),"r",L5(IZ)],El,0,Y,[],0,3,0,0,0,Ee,0,Bl,[],0,3,0,0,["y",L6(Jj)],Cs,0,Y,[],1,3,0,0,["o",L6(K4),"r",L5(HR)],FY,0,Cs,[],0,3,0,0,["cC",L6(Ld)],Bo,0,O,[],0,3,0,0,0,EP,0,C,[Be],0,0,0,0,["d",L6(Ll)],FZ,0,Ch,[BG,Bp,DD],0,3,0,0,["f",L5(Km)],ES,0,C,[Be],0,3,0,0,["d",L6(Jr)],DI,0,Bc,[],0,3,0,0,0,F4,0,C,[C0],3,3,0,0,0,E_,0,Ca,[F4],0,3,0,0,0,BY,0,
Bf,[],32772,3,0,CC,["f",L5(JA)],Gh,0,Cs,[],0,3,0,0,["cC",L6(KO)],Cr,0,Bv,[],12,3,0,Ix,0,H$,0,C,[],4,3,0,0,0,Eg,0,BP,[],0,3,0,0,0,Hi,0,O,[],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,EX,0,C,[BB],0,3,0,0,["A",L6(Hq)],Fh,0,C,[Be],0,0,0,0,["d",L6(J7)],Fl,0,C,[Be],0,3,0,0,0,Fp,0,C,[BB],0,3,0,0,["A",L6(GP)],G0,0,C,[],4,3,0,0,0,Ie,0,C,[BV],0,3,0,0,0,Em,0,C,[BB],0,3,0,0,["A",L6(J5)],EW,0,C,[BV],0,3,0,0,["bl",L6(JE)],GI,0,C,[Be],0,3,0,0,["d",L6(KI)],Cw,0,C,[],3,3,0,0,0,HV,0,C,[Cw],0,0,0,0,0,Fk,0,C,[],3,3,0,0,0,Gz,0,Bf,[Fk],32772,
3,0,0,0,F3,0,C,[BB],0,3,0,0,["A",L6(Kk)],Hj,0,C,[Be],0,3,0,0,["d",L6(Js)],D4,0,C,[Be],0,3,0,0,["d",L6(Kn)],E$,0,C,[Be],0,3,0,0,["d",L6(Kf)],Fd,0,C,[Cw],0,3,0,0,0,Dm,0,O,[],0,3,0,0,0,ED,0,C,[Cw],3,3,0,0,0,EU,0,C,[ED],3,3,0,0,0,Iv,0,C,[],3,3,0,0,0,C2,0,O,[],0,3,0,0,0,Fb,0,Bl,[],0,0,0,0,["y",L6(DV)],GD,0,Ct,[BG,Bp],0,3,0,0,0,FN,0,C,[Be],0,3,0,0,["d",L6(Jz)]]);
$rt_metadata([Ec,0,C,[],3,3,0,0,0,DL,0,C,[Ec,BG],0,0,0,0,0,CH,0,DL,[],0,0,0,0,0,Gl,0,Bf,[],32772,3,0,0,["f",L5(JC)],Es,0,C,[BB],0,3,0,0,0,Eu,0,C,[CA],0,3,0,0,["dX",L5(Ke)],Et,0,C,[DF],0,3,0,0,["dd",L7(I2)],Ev,0,C,[CD],0,3,0,0,0,Eb,0,C,[Be],0,3,0,0,["d",L6(I0)],D_,0,C,[Bz],0,3,0,0,["bB",L6(IX)],Ea,0,C,[Bb],0,3,0,0,["h",L6(Jd)],Fw,0,C,[Bb],0,3,0,0,["h",L6(JS)],Gs,0,C,[Bb],0,3,0,0,["h",L6(JX)],Gr,0,C,[Bb],0,3,0,0,["h",L6(I4)],C7,0,C,[],3,3,0,0,0,Gu,0,C,[C7],0,3,0,0,0,Gt,0,C,[C7],0,3,0,0,0,Ei,0,C,[Cm],0,3,0,0,0,Dc,
0,C,[Cm],0,3,0,0,["dR",L7(J8)],E3,0,C,[DQ],3,3,0,0,0,GB,0,C,[],3,3,0,0,0,Ci,0,C,[E3,GB],1,3,0,0,0,Do,0,Ci,[],0,3,0,0,0,Fa,0,Do,[],0,3,0,0,0,C6,0,Ci,[],1,3,0,0,0,DC,0,C6,[],0,3,0,0,0,Dj,0,C,[Bq],1,3,0,0,0,DU,0,Dj,[],0,3,0,JF,0,IS,0,Bo,[],0,3,0,0,0,FU,0,C,[Cm],0,3,0,0,["dR",L7(JO)],F9,0,C,[EU],0,3,0,0,0,C9,0,Bl,[],1,3,0,0,["y",L6(I_)],GF,0,C9,[],0,3,0,0,0,Cb,0,C,[],1,3,0,0,0,G9,0,C,[],3,3,0,0,0,Dh,0,Cb,[Bq,Dv,CV,G9],1,3,0,0,0,DP,0,Cb,[Bq],1,3,0,0,0,Cz,0,C,[],0,3,0,Kd,0,CJ,0,O,[],0,3,0,0,0,Ew,0,C,[BV],0,3,0,0,
0,C8,0,Dh,[],1,0,0,0,0,Gf,0,C8,[],0,0,0,0,0,C5,0,C,[],1,3,0,0,0,Df,0,C,[],0,3,0,0,0,FQ,0,DP,[],0,0,0,0,0,Dz,0,C,[],4,3,0,KG,0,D1,0,C5,[],1,3,0,0,0,Hc,0,D1,[],0,3,0,0,0,Go,0,BP,[],0,3,0,0,0,Hg,0,C,[BB],0,3,0,0,["A",L6(Lf)]]);
$rt_metadata([D6,0,BQ,[Bq],0,3,0,0,0,G6,0,C,[],3,3,0,0,0,Iq,0,C,[G6],0,3,0,0,0,BX,0,C,[Bn],3,3,0,0,0,E6,0,C,[BX],0,3,0,0,["bi",L6(K9)],E5,0,C,[BX],0,3,0,0,["bi",L6(IY)],E4,0,C,[BX],0,3,0,0,["bi",L6(K8)],E0,0,C,[BX],0,3,0,0,["bi",L6(KA)],EZ,0,C,[BX],0,3,0,0,["bi",L6(KP)],Eq,0,C,[BB],0,3,0,0,["A",L6(JT)],HE,0,C,[],4,3,0,0,0,Iy,0,B7,[],0,0,0,0,0,D0,0,C,[],0,0,0,0,0,Gy,0,D0,[Cw],0,0,0,0,0,EO,0,C,[],3,3,0,0,0,Cy,0,C,[EO],0,3,0,0,0,BI,0,Bv,[],12,3,0,C1,0,F0,0,Ck,[],0,3,0,0,0,CL,0,O,[],0,3,0,0,0,Fy,0,C,[],0,3,0,0,
0,B2,0,C,[],0,0,0,0,0,CY,0,C,[],4,3,0,0,0,Gb,0,C,[],0,3,0,0,0,GW,0,BQ,[Bq],0,3,0,0,0,D3,0,C,[],0,3,0,0,0,GS,0,CL,[],0,3,0,0,0,FI,0,O,[],0,3,0,0,0,E1,0,O,[],0,3,0,0,0]);
function $rt_array(cls,data){this.ik=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","javaClass@","Either src or dest is null","null","vertical","horizontal","px","Can\'t compare "," to ","black","blue","brown","cyan","darkgray","gray","green","lightgray","lime","magenta","olive","orange","pink","purple","red","teal","violet","yellow","white","F9Point[","x=",", y=","]",", ","[","Index out of bounds","(this Map)","CONCURRENT","UNORDERED","IDENTITY_FINISH",
"px ","RGBAColor[","r=",", g=",", b=",", a=","","object","function","string","number","[]","(this Collection)","solid","Border[","color=",", type=",", width=",", radius=","inset","MAX_DIST","SPLIT_DIST","Key "," corresponds to values "," and ","00","rgba(","rgb(","Point[","click","resize","mousecontact","Action must be non-null","Replacement preconditions do not hold","UTF-8","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative",
"Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst ","OVER","OUT","MOVE","CLICK"]);
BS.prototype.toString=function(){return $rt_ustr(this);};
BS.prototype.valueOf=BS.prototype.toString;C.prototype.toString=function(){return $rt_ustr(KD(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Bg=Long_add;var LH=Long_sub;var U=Long_mul;var IC=Long_div;var Jm=Long_rem;var Lq=Long_or;var Bw=Long_and;var Oc=Long_xor;var Cl=Long_shl;var LJ=Long_shr;var Cc=Long_shru;var Od=Long_compare;var Ed=Long_eq;var Oe=Long_ne;var Of=Long_lt;var I8=Long_le;var Og=Long_gt;var Oh=Long_ge;var Oi=Long_not;var Oj=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(JD);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=HT.prototype;c.removeEventListener=c.f2;c.dispatchEvent=c.go;c.get=c.gI;c.addEventListener=c.g2;Object.defineProperty(c,"length",{get:c.gz});c=GJ.prototype;c.accept=c.fz;c=GK.prototype;c.accept=c.fz;c=E6.prototype;c.handleEvent=c.bi;c=E5.prototype;c.handleEvent=c.bi;c=E4.prototype;c.handleEvent=c.bi;c=E0.prototype;c.handleEvent=c.bi;c=EZ.prototype;c.handleEvent=c.bi;})();
}));
