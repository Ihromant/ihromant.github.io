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
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.bv=f;}
function $rt_cls(cls){return G7(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Kp(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.B.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return Kd(t);}
function $rt_throwableCause(t){return Kh(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(KV());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return KW(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var GR=$rt_compare;var KX=$rt_nullCheck;var H=$rt_cls;var Z=$rt_createArray;var Ks=$rt_isInstance;var KY=$rt_nativeThread;var KZ=$rt_suspending;var K0=$rt_resuming;var K1=$rt_invalidPointer;var D=$rt_s;var W=$rt_eraseClinit;var BL=$rt_imul;var K2=$rt_wrapException;var K3=$rt_checkBounds;var K4=$rt_checkUpperBound;var K5=$rt_checkLowerBound;var K6=$rt_wrapFunction0;var K7=$rt_wrapFunction1;var K8=$rt_wrapFunction2;var K9=$rt_wrapFunction3;var K$=$rt_wrapFunction4;var E=$rt_classWithoutFields;var CJ
=$rt_createArrayFromData;var K_=$rt_createCharArrayFromData;var La=$rt_createByteArrayFromData;var KN=$rt_createShortArrayFromData;var FN=$rt_createIntArrayFromData;var Lb=$rt_createBooleanArrayFromData;var Lc=$rt_createFloatArrayFromData;var Ld=$rt_createDoubleArrayFromData;var HD=$rt_createLongArrayFromData;var KT=$rt_createBooleanArray;var Le=$rt_createByteArray;var Lf=$rt_createShortArray;var CE=$rt_createCharArray;var HJ=$rt_createIntArray;var Lg=$rt_createLongArray;var Lh=$rt_createFloatArray;var Li=$rt_createDoubleArray;var GR
=$rt_compare;var Lj=$rt_castToClass;var Lk=$rt_castToInterface;var Ll=$rt_equalDoubles;var Lm=Long_toNumber;var G=Long_fromInt;var Ln=Long_fromNumber;var B=Long_create;var CX=Long_ZERO;var Lo=Long_hi;var H8=Long_lo;
function C(){this.$id$=0;}
function CM(a){return G7(a.constructor);}
function JC(a){var b,c,d,e,f,g,h,i,j;b=GK(a);if(!b)c=D(0);else{if(!b)d=32;else{e=0;d=b>>>16|0;if(d)e=16;else d=b;f=d>>>8|0;if(!f)f=d;else e=e|8;d=f>>>4|0;if(!d)d=f;else e=e|4;f=d>>>2|0;if(!f)f=d;else e=e|2;if(f>>>1|0)e=e|1;d=(32-e|0)-1|0;}d=(((32-d|0)+4|0)-1|0)/4|0;g=CE(d);h=g.data;e=(d-1|0)*4|0;f=0;while(e>=0){i=f+1|0;h[f]=Du((b>>>e|0)&15,16);e=e-4|0;f=i;}c=Kp(g);}j=V();I(I(j,D(1)),c);return J(j);}
function GK(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function J8(a){var b,c,d;if(!Ks(a,BH)&&a.constructor.$meta.item===null){b=new DU;N(b);K(b);}b=Ig(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Bz=E();
var Lp=null;var Lq=null;var Lr=null;var Ls=null;var Lt=null;var Lu=null;var Lv=null;var Lw=null;function Bi(){Bi=W(Bz);Jq();}
function IB(b){var c,d;GL();G1();HH();Hz();Ha();Hb();GT();GH();Bi();c=EW(Lp,C8(20));Cg(c,HP(10));B3(c,Lq);Gg(Lq,D(2),new Fy);d=FB(Lp,C8(10));Cg(d,HP(10));B3(d,Lr.dZ);B3(c,d);B3(Lx,c);F1();}
function F1(){var b,c,d;Bi();Ls.l.clearRect(0.0,0.0,1000.0,800.0);FD(F3(BY(0,Lu.data.length),new Gw),new Gv);b=Lw;b=b===null?Cr():Lu.data[b.p].bC;c=CL(Lv);d=new Eb;d.dh=b;FD(c,d);}
function C3(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;Bi();f=Gy(CA(c,b),0.5);g=Gy(CA(d,c),0.5);h=Gy(CA(e,d),0.5);i=f*f;j=g*g;k=2.0*f*f;l=3.0*f;m=k+l*g+j;k=l*(f+g);n=(i*d.d-j*b.d+m*c.d)/k;o=(i*d.c-j*b.c+m*c.c)/k;p=BS(n,o);i=h*h;l=2.0*h*h;k=3.0*h;m=l+k*g+j;k=k*(h+g);return CJ(CN,[c,p,BS((i*c.d-j*e.d+m*d.d)/k,(i*c.c-j*e.c+m*d.c)/k),d]);}
function Jq(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new C2;KO();Lp=b;b=(Ds()).createElement("canvas");c=new EQ;Dr(c,b);d=c.f;b=1000;d.width=b;b=c.f;e=800;b.height=e;Lq=c;b=new Ed;e=Lp;d=new Gb;d.cB=H(L);f=Z(C,(Hf(H(L))).data.length);g=f.data;d.bZ=f;d.cg=KT(g.length);b.bt=d;HQ();h=FB(e,Ly);d=BY(0,3);c=new E6;c.cE=b;c.cH=e;b.dZ=EV(h,B1(d,c));FT();Lr=Fw(b,Lz);b=Lq;e=new FY;e.l=b.f.getContext("2d");Ls=e;Lt=Gh(Dv(BY(0,91)),HW(He(),new Er));Bh();i=LA;j=BL(i,i);k=(j+i|0)+1|0;f=Je();e=Cr();l=0;while(l<k){if(l<j)g=FN([l
/i|0,l%i|0,BI(LB)]);else{m=l-j|0;g=m<i?FN([BI(LB),m,BI(LC)]):FN([BI(LB),BI(LC),BI(LC)]);}n=g.data;d=new DG;o=n.length;d.d3=g;d.bs=0;d.bD=o;d.cv=o-0|0;b=new Eg;b.cC=3;b=B1(d,b);d=LC;c=new Ek;h=I_(c,d,1);while(GS(b,h)){}b=h.L;if(Ce(LC,b))Bs(e,l);l=l+1|0;}b=Bq(f);d=new Eh;d.dU=e;f=Bx(Ca(Bq(Bx(B7(Ca(b,d),new Ej),new Ef)),new Es),new Et);Lu=f;b=Bq(f);e=new Eu;d=new DS;d.d1=b;d.eu=e;Lv=El(d,new Eo,new Ep,new Eq);}
var Ev=E(0);
var DV=E(0);
function EN(){C.call(this);this.D=null;}
function G7(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new EN;c.D=b;d=c;b.classObject=d;}return c;}
function DL(a,b){var c;b=b;c=a.D;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&G9(b.constructor,c)?1:0;}
function CF(a){return a.D.$meta.primitive?1:0;}
function C0(a){return G7(a.D.$meta.item);}
var HO=E();
function BQ(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dc(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Hx=E();
function Ig(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function G9(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(G9(d[e],c))return 1;e=e+1|0;}return 0;}
function IS(b){var c='$$enumConstants$$';L[c]=C_;BB[c]=Ib;Ci[c]=IE;BJ[c]=Jp;IS=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return IS(b);}
function Cl(){var a=this;C.call(a);a.d0=null;a.eV=null;a.dy=0;a.d5=0;}
function LD(a){var b=new Cl();BO(b,a);return b;}
function BO(a,b){a.dy=1;a.d5=1;a.d0=b;}
function Iw(a){return a;}
function Kd(a){return a.d0;}
function Kh(a){var b;b=a.eV;if(b===a)b=null;return b;}
var Cf=E(Cl);
function LE(){var a=new Cf();N(a);return a;}
function N(a){a.dy=1;a.d5=1;}
var S=E(Cf);
function KW(a){var b=new S();Jh(b,a);return b;}
function Jh(a,b){BO(a,b);}
var HB=E(S);
var Bn=E(0);
var BF=E(0);
var Dj=E(0);
function BZ(){var a=this;C.call(a);a.B=null;a.Y=0;}
var LF=null;var LG=null;var LH=null;function Dy(){Dy=W(BZ);I1();}
function Kp(a){var b=new BZ();GW(b,a);return b;}
function KK(a,b,c){var d=new BZ();Gx(d,a,b,c);return d;}
function GW(a,b){Dy();Gx(a,b,0,b.data.length);}
function Gx(a,b,c,d){var e,f,g,h,i,j,k,l;Dy();e=CE(d);a.B=e;if(b===null){f=new Cw;BO(f,D(3));K(f);}if(c>=0&&d>=0&&(c+d|0)<=Dp(b)&&(0+d|0)<=Dp(e)){a:{b:{c:{if(b!==e){g=C0(CM(b));f=C0(CM(e));if(g!==null&&f!==null){if(g===f)break c;if(!CF(g)&&!CF(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;if(!DL(f,k[j])){Dt(b,c,e,0,i);g=new CG;N(g);K(g);}i=i+1|0;j=l;}Dt(b,c,e,0,d);break a;}if(!CF(g))break b;if(CF(f))break c;else break b;}g=new CG;N(g);K(g);}}Dt(b,c,e,0,d);break a;}g=new CG;N(g);K(g);}return;}g=new By;N(g);K(g);}
function CH(a,b){var c,d;if(b>=0){c=a.B.data;if(b<c.length)return c[b];}d=new Do;N(d);K(d);}
function Bw(a){return a.B.data.length;}
function JA(a){return a;}
function DA(b){Dy();return b===null?D(4):b.e();}
function BN(a,b){var c;if(a===b)return 1;if(!(b instanceof BZ))return 0;if(Bw(b)!=Bw(a))return 0;c=0;while(c<Bw(b)){if(CH(a,c)!=CH(b,c))return 0;c=c+1|0;}return 1;}
function G$(a){var b,c,d,e;a:{if(!a.Y){b=a.B.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.Y=(31*a.Y|0)+e|0;d=d+1|0;}}}return a.Y;}
function I1(){var b,c;b=CE(0);LF=b;c=new BZ;Dy();c.B=b;LG=c;LH=new GA;}
var Dk=E(Cl);
var Cm=E(Dk);
var Hh=E(Cm);
var BP=E();
function B5(){BP.call(this);this.p=0;}
var LI=null;var LJ=null;function IG(a){var b=new B5();GD(b,a);return b;}
function GD(a,b){a.p=b;}
function BE(b){var c,d;if(b>=(-128)&&b<=127){a:{if(LJ===null){LJ=Z(B5,256);c=0;while(true){d=LJ.data;if(c>=d.length)break a;d[c]=IG(c-128|0);c=c+1|0;}}}return LJ.data[b+128|0];}return IG(b);}
function Jk(a){var b;b=a.p;return (EU(KE(20),b,10)).e();}
function DW(a){return a.p;}
function Dd(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function GL(){LI=H($rt_intcls());}
function Da(){var a=this;C.call(a);a.a=null;a.h=0;}
function KE(a){var b=new Da();EI(b,a);return b;}
function EI(a,b){a.a=CE(b);}
function EU(a,b,c){return Hr(a,a.h,b,c);}
function Hr(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Br(a,b,b+1|0);else{Br(a,b,b+2|0);f=a.a.data;g=b+1|0;f[b]=45;b=g;}a.a.data[b]=Du(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=BL(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Br(a,b,b+i|0);if(e)e=b;else{f=a.a.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.a.data;b=e+1|0;f[e]=Du($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function HV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=GR(c,0.0);if(!d){if(1.0/c===Infinity){Br(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Br(a,b,b+4|0);e=a.a.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Br(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Br(a,b,b+8|0);d=b;}else{Br(a,b,b+9|0);e=a.a.data;d=b+1|0;e[b]=45;}e=a.a.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=LK;Hu(c,f);g=f.bA;h=f.bS;i=f.c1;j=1;k=1;if(i)k=2;l=18;m=Jv(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Cc(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Br(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.a.data;k=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.a.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(H9(p,CX))d=0;else{d=H8(HL(g,p));g=Ik(g,p);}e=a.a.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=HL(p,G(10));q=q+1|0;}if(h){e=a.a.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function Jv(b){var c,d,e,f,g;c=G(1);d=0;e=16;f=LL.data;g=f.length-1|0;while(g>=0){if(DQ(Ik(b,P(c,f[g])),CX)){d=d|e;c=P(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function FC(a,b){var c,d,e,f,g;c=a.a.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Cc(b,Cc(c*2|0,5));e=a.a.data;f=CE(d);g=f.data;b=EO(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.a=f;}
function J(a){return KK(a.a,0,a.h);}
function Br(a,b,c){var d,e,f,g;d=a.h;e=d-b|0;a.dI((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.a.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.h=a.h+(c-b|0)|0;}
var Fp=E(0);
var D1=E(Da);
function V(){var a=new D1();JB(a);return a;}
function Gj(a){var b=new D1();Is(b,a);return b;}
function JB(a){EI(a,16);}
function Is(a,b){var c,d;a.a=CE(Bw(b));c=0;while(true){d=a.a.data;if(c>=d.length)break;d[c]=CH(b,c);c=c+1|0;}a.h=Bw(b);}
function I(a,b){Gs(a,a.h,b===null?D(4):b.e());return a;}
function R(a,b){Gs(a,a.h,b);return a;}
function M(a,b){EU(a,b,10);return a;}
function CW(a,b){HV(a,a.h,b);return a;}
function Q(a,b){var c;c=a.h;Br(a,c,c+1|0);a.a.data[c]=b;return a;}
function FH(a){return a.h?0:1;}
function Jx(a){return J(a);}
function J6(a,b){FC(a,b);}
function Gs(a,b,c){var d,e,f,g;if(b>=0){d=a.h;if(b<=d){a:{if(c===null)c=D(4);else if(c.B.data.length?0:1)break a;FC(a,d+Bw(c)|0);e=a.h-1|0;while(e>=b){a.a.data[e+Bw(c)|0]=a.a.data[e];e=e+(-1)|0;}a.h=a.h+Bw(c)|0;f=0;while(f<Bw(c)){g=a.a.data;d=b+1|0;g[b]=CH(c,f);f=f+1|0;b=d;}}return a;}}c=new Do;N(c);K(c);}
var B8=E(Cm);
var Hc=E(B8);
function LM(a){var b=new Hc();JK(b,a);return b;}
function JK(a,b){BO(a,b);}
var G3=E(B8);
function LN(a){var b=new G3();JW(b,a);return b;}
function JW(a,b){BO(a,b);}
function Di(){var a=this;C.call(a);a.bE=0;a.cQ=null;a.bG=null;a.cp=0;}
var Ly=null;function HQ(){HQ=W(Di);IV();}
function C8(b){var c,d,e;HQ();c=new Di;d=null;e=null;c.bE=b;c.cQ=d;c.bG=e;c.cp=0;return c;}
function IV(){Ly=C8(0);}
var Bc=E();
function GN(){var a=this;Bc.call(a);a.ca=0;a.da=null;a.bU=0;}
function I3(a,b,c){var d=new GN();Kb(d,a,b,c);return d;}
function Kb(a,b,c,d){a.ca=b;a.da=c;a.bU=d;}
function DD(b){return I3(0,b,0);}
function HP(b){return I3(0,null,b);}
var BC=E(0);
var Fy=E();
function Kk(a,b){var c,d,e;Bi();c=BS(b.bI.offsetX,b.bI.offsetY);b=Dv(BY(0,Lu.data.length));d=He();e=new DH;e.c_=c;b=Gh(b,HW(d,e));c=Dv(BY(0,Lu.data.length));d=new DI;d.d6=b;e=new F_;e.df=d;d=I_(e,null,0);while(E0(c,d)){}c=(HN(d.L)).bP;if(c===null){b=new Co;N(b);K(b);}c=c;if((BM(b,c)).R>=3.0)c=null;Lw=c;F1();}
var Hn=E();
function Ku(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Dp(b)&&(e+f|0)<=Dp(d)){Dt(b,c,d,e,f);return;}b=new By;N(b);K(b);}
function Dt(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var HT=E();
var Ft=E(0);
var C2=E();
var Lx=null;function KO(){KO=W(C2);Im();}
function E8(a,b,c){var d,e,f,g,h;d=(Ds()).createElement("div");e=d.classList;f=!b?D(5):D(6);e.add($rt_ustr(f));if(c.bG!==null){e=d.classList;f=(c.bG.S.gt(95,45)).fb();e.add($rt_ustr(f));}f=c.cQ;HF();if(f===LO)d.classList.add("max-distance");else if(f===LP)d.classList.add("split-distance");else if(c.bE){f=d.style;b=c.bE;g=V();I(M(g,b),D(7));h=J(g);f.setProperty("gap",$rt_ustr(h));}if(c.cp)d.classList.add("stretch");c=new Dg;Dr(c,d);return c;}
function EW(a,b){return E8(a,1,b);}
function FB(a,b){return E8(a,0,b);}
function Im(){var b;b=new Dg;Dr(b,(Ds()).body);Lx=b;}
function Ed(){var a=this;C.call(a);a.bt=null;a.dV=null;a.dZ=null;}
function Fw(a,b){var c,d;c=a.dV;if(c!==null){c=FU(a.bt,c);Cu();Cg(c,DD(LQ));}d=FU(a.bt,b);FT();if(b!==Lz){Cu();c=DD(LR);}else{Cu();c=DD(LS);}Cg(d,c);a.dV=b;return a;}
function BA(){var a=this;C.call(a);a.S=null;a.M=0;}
function CI(a,b,c){a.S=b;a.M=c;}
function Iu(a){return a.M;}
function I4(a){return a.S;}
var L=E(BA);
var Lz=null;var LT=null;var LU=null;var LV=null;var LW=null;var LX=null;var LY=null;var LZ=null;var L0=null;var L1=null;var L2=null;var L3=null;var L4=null;var L5=null;var L6=null;var L7=null;var L8=null;var L9=null;var L$=null;var L_=null;function FT(){FT=W(L);JF();}
function Y(a,b){var c=new L();GQ(c,a,b);return c;}
function C_(){FT();return L_.bv();}
function GQ(a,b,c){FT();CI(a,b,c);}
function JF(){var b;Lz=Y(D(8),0);LT=Y(D(9),1);LU=Y(D(10),2);LV=Y(D(11),3);LW=Y(D(12),4);LX=Y(D(13),5);LY=Y(D(14),6);LZ=Y(D(15),7);L0=Y(D(16),8);L1=Y(D(17),9);L2=Y(D(18),10);L3=Y(D(19),11);L4=Y(D(20),12);L5=Y(D(21),13);L6=Y(D(22),14);L7=Y(D(23),15);L8=Y(D(24),16);L9=Y(D(25),17);b=Y(D(26),18);L$=b;L_=CJ(L,[Lz,LT,LU,LV,LW,LX,LY,LZ,L0,L1,L2,L3,L4,L5,L6,L7,L8,L9,b]);}
var Gd=E(0);
var C$=E(0);
var Gk=E(0);
function BY(b,c){var d;d=new Fx;d.bR=b;d.d4=c;return d;}
var Bo=E(0);
function He(){return new FO;}
var Er=E();
function J_(a,b){var c,d;Bi();c=b.p;if(c>=81){d=BE(c-81|0);b=BS(900.0,((d.p-4|0)*99|0)+400|0);}else b=BS((((c/9|0)-4|0)*99|0)+400|0,(((c%9|0)-4|0)*99|0)+400|0);return b;}
var GF=E();
function HW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;a:{d=new Fr;e=new Fq;e.eh=b;e.cb=c;c=new Ff;f=Z(BB,1);g=f.data;Hy();g[0]=Ma;b=new D0;h=new Dm;h.bz=H(BB);h.bu=HJ((((Hf(H(BB))).data.length-1|0)/32|0)+1|0);BR(f);i=new EM;i.eS=f;if(i instanceof Dm){j=i;if(h.bz===j.bz){k=0;while(true){f=h.bu.data;if(k>=f.length)break;l=f[k];m=j.bu.data;if((l|m[k])!=f[k])f[k]=f[k]|m[k];k=k+1|0;}break a;}}k=0;l=i.by;n=g.length;o=GR(l,l);while(true){if(!(k>=n?0:1))break a;if(o<0)break;p=k+1|0;q=g[k].M;k=q/32|0;l=1<<(q%32|0);f=h.bu.data;if
(f[k]&l)l=0;else{f[k]=f[k]|l;l=1;}if(l){k=p;continue;}k=p;}b=new C7;N(b);K(b);}i=new D3;i.eH=d;i.cc=e;i.eE=c;i.es=b;i.e1=h;return i;}
var D$=E(0);
function BW(){var a=this;Bc.call(a);a.J=null;a.K=null;}
function F2(a,b){var c=new BW();EF(c,a,b);return c;}
function EF(a,b,c){a.J=b;a.K=c;}
function EB(a,b){return F2(Df(a.J,b.J),Df(a.K,b.K));}
function Je(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Bh();b=LA;c=BL(b,b);d=c+b|0;e=d+1|0;f=Bx(Ca(B7(Bq(Mb),new Fc),new Fe),new Fd);g=new ES;g.cq=f;h=Ca(Bq(Mb),new E_);if(g instanceof X&&h instanceof X){i=new Gu;i.dE=g;i.bQ=h;i.N=g;}else{i=new FS;i.cu=g;i.dg=h;}f=Bx(i,new E$);j=Z(De,e);k=j.data;l=0;while(l<b){g=F2(LC,Mb.data[l]);m=0;while(m<b){n=f.data;o=BL(l,b)+m|0;p=Cr();Bs(p,Cz(g));q=m+1|0;h=Bq(n[q]);i=new Fb;i.cl=p;i.cm=g;Cy(h,i);Bs(p,c+m|0);k[o]=p;m=q;}l=l+1|0;}l=0;while(l<b){r=f.data;o=c+l|0;i=Cr();g=F2(Mb.data[l],
LC);Bs(i,Cz(g));p=Bq(r[0]);h=new Fa;h.ds=i;h.dr=g;Cy(p,h);Bs(i,d);k[o]=i;l=l+1|0;}h=Cr();l=0;while(l<=b){Bs(h,c+l|0);l=l+1|0;}k[d]=h;return j;}
function Cz(a){return BL(BI(a.J),LA)+BI(a.K)|0;}
function I2(a){return J(R(I(R(I(R(Gj(D(27)),D(28)),a.J),D(29)),a.K),D(30)));}
var Hd=E();
function Hs(b,c){var d,e,f;d=C0(CM(b));if(d===null){d=new Cw;N(d);K(d);}if(d===H($rt_voidcls())){d=new B6;N(d);K(d);}if(c<0){d=new GB;N(d);K(d);}b=b.data;d=Jt(d.D,c);e=EO(c,b.length);f=0;while(f<e){d.data[f]=b[f];f=f+1|0;}return d;}
function Bq(b){var c,d,e;c=b.data;d=new Ei;e=c.length;d.dt=b;d.bi=0;d.b5=e;d.ed=e-0|0;return d;}
var Es=E();
function IQ(a,b){var c,d,e,f,g;b=b;Bi();c=new C9;c.bC=b;d=C_();e=(C_()).data.length-2|0;if(e<=0){b=new B6;N(b);K(b);}c.cW=d.data[$rt_globals.Math.random()*e|0];b=CL(b);f=Lt;BR(f);g=new Fn;g.cx=f;d=(Bx(B1(b,g),new Fo)).data;c.bN=CJ($rt_arraycls(CN),[C3(d[0],d[1],d[2],d[3]),C3(Cp(d[0],B0(Go(d[0],d[1]),0.001)),d[0],d[1],d[2]),C3(Cp(d[3],B0(Go(d[3],d[2]),0.001)),d[3],d[2],d[1])]);return c;}
var Bb=E(0);
var Et=E();
function IN(a,b){Bi();return Z(C9,b);}
function C9(){var a=this;C.call(a);a.cW=null;a.bC=null;a.bN=null;}
var Eu=E();
var Cs=E(0);
var Eo=E();
function II(a){return Cr();}
var Dl=E(0);
var Ep=E();
function HZ(a,b,c){Bs(b,c);}
var Cv=E(0);
var Eq=E();
var BH=E(0);
function De(){var a=this;C.call(a);a.v=null;a.V=0;}
function Cr(){var a=new De();JH(a);return a;}
function JH(a){a.v=HJ(2);}
function Bs(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new By;N(c);K(c);}d=b/32|0;if(b>=a.V){e=d+1|0;f=a.v.data.length;if(f<e){g=Cc((e*3|0)/2|0,(f*2|0)+1|0);h=a.v.data;i=HJ(g);j=i.data;g=EO(g,h.length);e=0;while(e<g){j[e]=h[e];e=e+1|0;}a.v=i;}a.V=b+1|0;}i=a.v.data;i[d]=i[d]|1<<(b%32|0);}
function EA(a,b){var c,d,e;if(b<0){c=new By;N(c);K(c);}d=b/32|0;e=a.v.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
function Ge(a,b){var c,d,e,f,g;if(b<0){c=new By;N(c);K(c);}d=a.V;if(b>=d)return (-1);e=b/32|0;f=a.v.data;g=f[e]>>>(b%32|0)|0;if(g)return Dd(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Dd(f[g])|0;g=g+1|0;}return (-1);}
function ID(a){var b,c,d,e,f,g,h,i;b=V();Q(b,123);c=1;d=0;a:{while(true){e=a.v.data;if(d>=e.length)break a;f=d*32|0;if(f>a.V)break;g=e[d];while(g){h=Dd(g);i=f+h|0;if(c)c=0;else R(b,D(31));f=i+1|0;M(b,i);g=(g>>>h|0)>>>1|0;}d=d+1|0;}}Q(b,125);return J(b);}
function CL(a){var b;b=new ER;b.dQ=a;b.bb=Ge(a,0);return b;}
var Bu=E(0);
var Gw=E();
function J4(a,b){var c;Bi();c=Lw;return c!==null&&b!=c.p?0:1;}
var C1=E(0);
var Gv=E();
function IL(a,b){var c,d,e;Bi();c=Lu.data[b];d=Ls;e=c.cW;d=d.l;e=$rt_ustr(e.S);d.strokeStyle=e;Cy(Bq(c.bN),new DR);}
var Dn=E(0);
var GA=E();
var By=E(S);
var GX=E();
function Dp(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Mc());}return b.data.length;}
function Jt(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Cw=E(S);
var CG=E(S);
var CQ=E();
var Md=null;var Me=null;function Du(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function G1(){Md=H($rt_charcls());Me=Z(CQ,128);}
var Ck=E();
function Js(a){var b,c,d,e;b=V();Q(b,123);c=new FX;c.bm=a;c.dd=a.I;c.P=null;if(C5(c)){d=FV(c);e=d.X;if(e===a)e=D(32);I(b,e);Q(b,61);d=d.E;if(d===a)d=D(32);I(b,d);}while(C5(c)){R(b,D(31));d=FV(c);e=d.X;if(e===a)e=D(32);I(b,e);Q(b,61);d=d.E;if(d===a)d=D(32);I(b,d);}Q(b,125);return J(b);}
function Gb(){var a=this;Ck.call(a);a.cB=null;a.bZ=null;a.cg=null;a.dM=0;}
function FU(a,b){var c;if(!DL(a.cB,b))return null;c=b.M;return a.bZ.data[c];}
function E6(){var a=this;C.call(a);a.cE=null;a.cH=null;}
function Il(a,b){var c,d,e,f,g;c=a.cE;d=a.cH;HQ();e=EW(d,Ly);f=BY(0,6);g=new E9;g.c7=c;g.c6=b;g.eB=d;return EV(e,B1(f,g));}
var Bk=E();
function F3(a,b){var c;c=new F5;c.dl=a;c.c2=b;return c;}
function B1(a,b){var c;c=new Ee;c.b6=a;c.c0=b;return c;}
function FD(a,b){var c;while(true){c=new DY;c.cn=b;if(!a.w(c))break;}}
function El(a,b,c,d){var e;e=b.dA();while(true){b=new E3;b.ef=c;b.ee=e;if(!a.w(b))break;}return e;}
function Dv(a){var b;b=new DX;b.dj=a;return b;}
function Ic(a){return (-1);}
function Fx(){var a=this;Bk.call(a);a.bR=0;a.d4=0;}
function GY(a,b){var c;while(true){c=a.bR;if(c>=a.d4)break;a.bR=c+1|0;if(b.n(c))continue;else return 1;}return 0;}
var FO=E();
var Fr=E();
function Fq(){var a=this;C.call(a);a.eh=null;a.cb=null;}
var FE=E(0);
var CO=E(0);
var Ff=E();
var BB=E(BA);
var Mf=null;var Mg=null;var Ma=null;var Mh=null;function Hy(){Hy=W(BB);JD();}
function Hi(a,b){var c=new BB();Hm(c,a,b);return c;}
function Ib(){Hy();return Mh.bv();}
function Hm(a,b,c){Hy();CI(a,b,c);}
function JD(){var b;Mf=Hi(D(33),0);Mg=Hi(D(34),1);b=Hi(D(35),2);Ma=b;Mh=CJ(BB,[Mf,Mg,b]);}
var FJ=E(0);
function Bl(){var a=this;Bc.call(a);a.q=0;a.k=0;}
var Mb=null;var LA=0;var LC=null;var LB=null;var Mi=null;var Mj=null;var Mk=null;function Bh(){Bh=W(Bl);JE();}
function B_(a,b){var c=new Bl();HR(c,a,b);return c;}
function HR(a,b,c){Bh();a.q=b;a.k=c;}
function BI(a){return ((a.q+1|0)*3|0)+(a.k+1|0)|0;}
function Df(a,b){return B_(CC(a.q,b.q),CC(a.k,b.k));}
function CD(a,b){return B_(CC(BL(a.q,b.q),BL( -a.k|0,b.k)),CC(BL(a.q,b.k),BL(a.k,b.q)));}
function Db(a,b){var c;c=B_(1,0);while(b>0){if((b%2|0)==1)c=CD(c,a);a=CD(a,a);b=b/2|0;}return c;}
function CC(b,c){var d;Bh();d=b+c|0;if(d==2)d=(-1);if(d==(-2))d=1;return d;}
function H$(a){var b,c;b=V();c=a.q;if(c)M(b,c);if(a.k==1&&!FH(b))Q(b,43);c=a.k;if(c)M(b,c);if(FH(b))return D(0);return J(b);}
function Ce(a,b){return a===b?1:b!==null&&CM(b)===H(Bl)?(a.q!=b.q?0:a.k==b.k?1:0):0;}
function JE(){var b,c;b=Bx(B1(BY(0,9),new Fi),new Fj);c=b.data;Mb=b;LA=c.length;LC=B_(0,0);LB=B_(1,0);Mi=B_((-1),0);Mj=Bx(B7(Bq(Mb),new Fg),new Fh);Mk=Bx(B7(Bq(Mb),new Fl),new Fm);}
function Eh(){C.call(this);this.dU=null;}
function IJ(a,b){var c,d;b=b;c=a.dU;b=CL(b);BR(c);d=new D4;d.dP=c;return El(F3(b,d),new D6,new D5,new D7);}
var Ba=E(0);
var Ej=E();
function IY(a,b){var c,d,e,f,g;b=b;c=0;d=1+(b.V/32|0)|0;e=0;while(e<d){f=b.v.data[e];g=((f&(-1431655766))>>>1|0)+(f&1431655765)|0;f=((g&(-858993460))>>>2|0)+(g&858993459)|0;f=((f&1886417008)>>>4|0)+(f&117901063)|0;f=((f&251662080)>>>8|0)+(f&983055)|0;c=c+(((f&2031616)>>>16|0)+(f&31)|0)|0;e=e+1|0;}return c<=1?0:1;}
var Ef=E();
function JL(a,b){return Z(De,b);}
function Eg(){C.call(this);this.cC=0;}
function JQ(a,b){var c;c=a.cC;Bh();return Db(Mb.data[b],c+1|0);}
var Ek=E();
function J$(a,b,c){return Df(b,c);}
var E1=E(0);
var X=E();
function B7(a,b){var c;c=new FL;Fs(c,a);c.di=b;return c;}
function Ca(a,b){var c;c=new Fu;Fs(c,a);c.cr=b;return c;}
function Cy(a,b){var c;while(true){c=new F8;c.dX=b;if(!a.j(c))break;}}
function Bx(a,b){var c,d,e,f,g,h,i;c=a.t();if(c>=0){d=b.g(c);e=new En;e.db=d;while(a.j(e)){}f=d.data;c=e.bJ;if(c<f.length)d=Hs(d,c);return d;}g=new Fv;g.x=Z(C,10);while(true){BR(g);e=new Ex;e.dD=g;if(!a.j(e))break;}h=b.g(g.F);i=0;a:{while(true){b=h.data;if(i>=b.length)break;if(i<0)break a;if(i>=g.F)break a;b[i]=g.x.data[i];i=i+1|0;}return h;}b=new By;N(b);K(b);}
function Gh(a,b){var c,d,e;c=new F4;d=Hl(16);c.Q=0;c.i=Z(CB,d);c.d_=0.75;F7(c);e=b.cc;while(true){b=new EZ;b.c8=e;b.c9=c;if(!E0(a,b))break;}return c;}
function FR(a){var b;b=new ET;b.bV=a;return b;}
function JS(a){return (-1);}
function Ei(){var a=this;X.call(a);a.dt=null;a.bi=0;a.b5=0;a.ed=0;}
function GJ(a,b){var c,d;a:{while(true){c=a.bi;if(c>=a.b5)break a;d=a.dt.data;a.bi=c+1|0;if(b.b(d[c]))continue;else break;}}return a.bi>=a.b5?0:1;}
function It(a){return a.ed;}
function Eb(){C.call(this);this.dh=null;}
function IF(a,b){var c,d,e,f;c=a.dh;Bi();d=Ls;c=!EA(c,b)?Ml:Mm;d=d.l;c=$rt_ustr(Hw(c));d.fillStyle=c;d=Ls;e=(BM(Lt,BE(b))).d;f=(BM(Lt,BE(b))).c;d.l.beginPath();d.l.arc(e,f,3.0,0.0,6.283185307179586);d.l.fill();}
var CU=E(0);
function B9(){C.call(this);this.f=null;}
function Kw(a){var b=new B9();Dr(b,a);return b;}
function Dr(a,b){a.f=b;}
function Jj(a){return a.f;}
function Cg(a,b){var c,d,e,f,g,h,i;if(b.ca){c=a.f.style;d=b.ca;e=V();I(M(e,d),D(7));e=J(e);c.setProperty("margin",$rt_ustr(e));}f=(HN(b.da)).bP;if(f!==null){f=f;g=a.f.style;d=f.b7;h=f.bO;c=Hw(f.b3);i=V();I(Q(I(I(M(i,d),D(36)),h),32),c);i=J(i);g.setProperty("border",$rt_ustr(i));if(f.bc){c=a.f.style;d=f.bc;f=V();I(M(f,d),D(7));g=J(f);c.setProperty("border-radius",$rt_ustr(g));}}if(b.bU){e=a.f.style;d=b.bU;b=V();I(M(b,d),D(7));c=J(b);e.setProperty("padding",$rt_ustr(c));}return a;}
function Gg(a,b,c){var d,e,f;a:{d=(-1);switch(G$(b)){case -934437708:if(!BN(b,D(37)))break a;d=2;break a;case 94750088:if(!BN(b,D(2)))break a;d=1;break a;case 1252611035:if(!BN(b,D(38)))break a;d=0;break a;default:}}switch(d){case 0:b=a.f;e=new EL;e.dq=c;b.addEventListener("mousemove",BQ(e,"handleEvent"));b=a.f;e=new EK;e.ce=c;b.addEventListener("mouseover",BQ(e,"handleEvent"));b=a.f;f=new EJ;f.dn=c;b.addEventListener("mouseout",BQ(f,"handleEvent"));return a;case 1:b=a.f;f=new EH;f.cJ=c;b.addEventListener("click",
BQ(f,"handleEvent"));return a;case 2:b=a.f;f=new EG;f.dx=c;b.addEventListener("resize",BQ(f,"handleEvent"));return a;default:}c=new B6;BO(c,b);K(c);}
var E4=E(0);
function EV(a,b){var c;c=new EC;c.cY=a;Cy(b,c);return a;}
var Dg=E(B9);
function B3(a,b){var c,d;c=a.f;d=b.f;c.appendChild(d);return a;}
var Bm=E(0);
var DJ=E(0);
var DT=E(0);
var BD=E(0);
var GU=E(0);
function Ds(){return $rt_globals.window.document;}
var D0=E();
var Fc=E();
function JI(a,b){b=b;Bh();return Ce(b,LC)?0:1;}
var Fe=E();
function Ji(a,b){var c;b=b;c=new BW;Bh();EF(c,LC,b);return c;}
var Fd=E();
function IR(a,b){return Z(BW,b);}
var E_=E();
function Ja(a,b){var c,d;b=b;Bh();c=B7(Bq(Mb),new DO);d=new DM;d.cU=b;return Bx(Ca(c,d),new DN);}
var E$=E();
function H7(a,b){return Z($rt_arraycls(BW),b);}
function Fb(){var a=this;C.call(a);a.cl=null;a.cm=null;}
function H6(a,b){b=b;Bs(a.cl,Cz(EB(a.cm,b)));}
function Fa(){var a=this;C.call(a);a.ds=null;a.dr=null;}
function Jr(a,b){b=b;Bs(a.ds,Cz(EB(a.dr,b)));}
function DG(){var a=this;Bk.call(a);a.d3=null;a.bs=0;a.bD=0;a.cv=0;}
function JO(a,b){var c,d;a:{while(true){c=a.bs;if(c>=a.bD)break a;d=a.d3.data;a.bs=c+1|0;if(GG(b,d[c]))continue;else break;}}return a.bs>=a.bD?0:1;}
function IH(a){return a.cv;}
var Gr=E(0);
var FP=E(0);
var FK=E(0);
var EX=E(0);
var FM=E(0);
var F6=E(0);
var FW=E(0);
var Ga=E(0);
var G4=E();
function I$(a,b){b=a.fr(b);FQ();return b===null?null:b instanceof $rt_objcls()&&b instanceof BG?Dw(b):b;}
function Ij(a,b,c){a.fx($rt_str(b),Dc(c,"handleEvent"));}
function Kl(a,b,c){a.fj($rt_str(b),Dc(c,"handleEvent"));}
function I7(a,b,c,d){a.fH($rt_str(b),Dc(c,"handleEvent"),d?1:0);}
function Jc(a,b){return !!a.fD(b);}
function JR(a){return a.gd();}
function If(a,b,c,d){a.gv($rt_str(b),Dc(c,"handleEvent"),d?1:0);}
var Ew=E(0);
var CK=E(0);
var B2=E();
var Gc=E(0);
var B4=E(B2);
var DB=E(B4);
function Dm(){var a=this;DB.call(a);a.bz=null;a.bu=null;}
function Hf(b){var c;c=b.D;c.$clinit();return IS(c);}
function D3(){var a=this;C.call(a);a.eH=null;a.cc=null;a.eE=null;a.es=null;a.e1=null;}
var Fi=E();
function Io(a,b){Bh();return B_((b/3|0)-1|0,(b%3|0)-1|0);}
var Fj=E();
function Iv(a,b){Bh();return Z(Bl,b);}
var Fg=E();
function J9(a,b){b=b;Bh();return Ce(LB,Db(b,4));}
var Fh=E();
function JJ(a,b){Bh();return Z(Bl,b);}
var Fl=E();
function H5(a,b){b=b;Bh();return Ce(Mi,Db(b,4));}
var Fm=E();
function JV(a,b){Bh();return Z(Bl,b);}
function ES(){X.call(this);this.cq=null;}
function Jb(a,b){b.b(a.cq);return 0;}
function FS(){var a=this;X.call(a);a.cu=null;a.dg=null;a.U=null;a.cd=0;}
function I9(a,b){var c,d,e;if(a.U===null)a.U=FR(a.cu);while(true){c=a.U;Gm(c);if(!(c.s==3?0:1)){if(a.cd)return 0;a.cd=1;a.U=FR(a.dg);continue;}c=a.U;Gm(c);d=c.s;if(d==3){b=new Co;N(b);K(b);}e=c.bx;c.bx=null;c.s=d!=2?0:3;if(b.b(e))continue;else break;}return 1;}
function Gu(){var a=this;X.call(a);a.dE=null;a.bQ=null;a.N=null;}
function H3(a,b){var c;c=a.N;if(c===null)return 0;if(c.j(b))return 1;if(a.N!==a.dE){a.N=null;return 0;}a.N=a.bQ;return 1;}
function IP(a){var b;b=G2(a.bQ);return b<0?(-1):1+b|0;}
var GV=E();
function BR(b){if(b!==null)return b;b=new Cw;BO(b,D(39));K(b);}
var Gi=E(0);
var D9=E(0);
function Cb(){B2.call(this);this.by=0;}
var Dh=E(0);
function EM(){Cb.call(this);this.eS=null;}
function BG(){C.call(this);this.du=null;}
var Mn=null;var Mo=null;var Mp=null;var Mq=null;var Mr=null;var Ms=null;function FQ(){FQ=W(BG);JT();}
function Ea(a){var b=new BG();GO(b,a);return b;}
function GO(a,b){FQ();a.du=b;}
function Dw(b){FQ();if(b!==null)return b.du;return null;}
function DZ(b){var c,d;FQ();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(Mo!==null){d=$rt_str(typeof c);if(!BN(d,D(40))&&!BN(d,D(41))){if(BN(d,D(42))){b=Mp.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=Ea(c);d=b;Mp.set(c,new $rt_globals.WeakRef(d));E5(Mr,d,c);break a;}if(!BN(d,D(43)))break b;else{b=Mq.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=Ea(c);d=b;Mq.set(c,new $rt_globals.WeakRef(d));E5(Ms,d,c);break a;}}b=Mo.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=Ea(c);Mo.set(c,new $rt_globals.WeakRef(b));break a;}}b=Ea(c);}}return b;}
function JT(){Mn=new $rt_globals.WeakMap();Mo=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();Mp=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Mq=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Mr=Mp===null?null:new $rt_globals.FinalizationRegistry(BQ(new F9,"accept"));Ms=Mq===null?null:new $rt_globals.FinalizationRegistry(BQ(new F$,"accept"));}
function E5(b,c,d){return b.register(c,d);}
var Ht=E();
var G0=E();
var HS=E();
var Dx=E(0);
var F9=E();
function JP(a,b){var c;b=DZ(b);c=Mp;b=Dw(b);c.delete(b);}
var Hg=E();
var F$=E();
function Ii(a,b){var c;b=DZ(b);c=Mq;b=Dw(b);c.delete(b);}
var HU=E();
function DX(){X.call(this);this.dj=null;}
function E0(a,b){var c,d;c=a.dj;BR(b);d=new Fz;d.cw=b;return GY(c,d);}
function CZ(){Bk.call(this);this.dl=null;}
function H_(a,b){var c,d;c=a.dl;d=new D2;d.d7=a;d.d8=b;return c.w(d);}
function F5(){CZ.call(this);this.c2=null;}
function Ee(){var a=this;X.call(a);a.b6=null;a.c0=null;}
function GS(a,b){var c,d;c=a.b6;d=new EE;d.ch=a;d.cj=b;return c.w(d);}
function H1(a){return a.b6.t();}
function Cj(){X.call(this);this.b1=null;}
function Fs(a,b){a.b1=b;}
function JZ(a,b){return a.b1.j(a.cs(b));}
function G2(a){return a.b1.t();}
function Fu(){Cj.call(this);this.cr=null;}
function Ka(a,b){var c;c=new EP;c.cF=a;c.cD=b;return c;}
function DS(){var a=this;Bk.call(a);a.d1=null;a.C=null;a.b9=0;a.bd=null;a.eu=null;a.cR=0;}
function Ih(a,b){var c,d,e,f;if(a.C===null){if(a.cR)return 0;a.b9=0;a:{while(true){if(a.b9)break a;c=a.d1;d=new GC;d.dY=a;if(!GJ(c,d))break;}a.cR=1;}if(a.C===null)return 0;}b:{c=a.C;if(c instanceof Bk){if(Gn(c,b))return 1;a.C=null;}else{d=new FF;d.bW=c;a.bd=d;while(true){c=a.bd;E2(c);if(!(c.r==3?0:1)){a.bd=null;a.C=null;break b;}c=a.bd;E2(c);e=c.r;if(e==3){b=new Co;N(b);K(b);}f=c.cI;c.r=e!=2?0:3;if(!HK(b,(BE(f)).p))break;}return 1;}}return 1;}
function En(){var a=this;C.call(a);a.db=null;a.bJ=0;}
function Km(a,b){var c,d;c=a.db.data;d=a.bJ;a.bJ=d+1|0;c[d]=b;return 1;}
function Fv(){var a=this;Cb.call(a);a.x=null;a.F=0;}
function Jn(a){var b,c,d,e,f;b=a.F;if(!b)return D(44);c=b-1|0;d=new D1;EI(d,b*16|0);Q(d,91);e=0;while(e<c){f=a.x.data;R(I(d,f[e]!==a?f[e]:D(45)),D(31));e=e+1|0;}f=a.x.data;I(d,f[c]!==a?f[c]:D(45));return J(Q(d,93));}
function Ex(){C.call(this);this.dD=null;}
function Iq(a,b){var c,d,e,f,g;c=a.dD;d=c.F+1|0;e=c.x.data.length;if(e<d){d=e>=1073741823?2147483647:Cc(d,Cc(e*2|0,5));c.x=Hs(c.x,d);}f=c.x.data;g=c.F;c.F=g+1|0;f[g]=b;c.by=c.by+1|0;return 1;}
var Do=E(By);
var FA=E(0);
var EQ=E(B9);
function BU(){var a=this;Bc.call(a);a.b3=null;a.bO=null;a.b7=0;a.bc=0;}
var LR=null;var LQ=null;var Mt=null;var LS=null;var Mu=null;function Cu(){Cu=W(BU);J2();}
function Ju(a,b,c,d){var e=new BU();Ho(e,a,b,c,d);return e;}
function Ho(a,b,c,d,e){Cu();a.b3=b;a.bO=c;a.b7=d;a.bc=e;}
function Cx(b){Cu();return Ju(b,D(46),1,0);}
function Iy(a){return J(R(M(R(M(R(I(R(I(R(Gj(D(47)),D(48)),a.b3),D(49)),a.bO),D(50)),a.b7),D(51)),a.bc),D(30)));}
function J2(){LR=Cx(Ml);LQ=Cx(Mv);Mt=Cx(Mw);LS=Cx(Mx);Mu=Ju(My,D(52),1,0);}
function FL(){Cj.call(this);this.di=null;}
function JM(a,b){var c;c=new DF;c.cK=a;c.cL=b;return c;}
var Ci=E(BA);
var LO=null;var LP=null;var Mz=null;function HF(){HF=W(Ci);IM();}
function IK(a,b){var c=new Ci();Hq(c,a,b);return c;}
function IE(){HF();return Mz.bv();}
function Hq(a,b,c){HF();CI(a,b,c);}
function IM(){var b;LO=IK(D(53),0);b=IK(D(54),1);LP=b;Mz=CJ(Ci,[LO,b]);}
var Hj=E();
function J0(b){return Math.sqrt(b);}
function Gy(b,c){return Ie(b,c);}
function Ie(b,c){return Math.pow(b,c);}
function EO(b,c){if(b<c)c=b;return c;}
function Cc(b,c){if(b>c)c=b;return c;}
function Ke(b,c){return Math.min(b,c);}
function JY(b){return Math.sign(b);}
var DU=E(Cf);
var B6=E(S);
var GB=E(S);
var O=E(0);
var Mx=null;var Mv=null;var Mw=null;var My=null;var MA=null;var Ml=null;var MB=null;var MC=null;var MD=null;var ME=null;var MF=null;var MG=null;var Mm=null;var MH=null;var MI=null;var MJ=null;var MK=null;var ML=null;var MM=null;var MN=null;function GT(){Mx=Bf(247,222,123);Mv=D_(0,0,0,0.0);Mw=D_(128,128,128,0.5);My=Bf(128,128,128);MA=Bf(255,255,255);Ml=Bf(0,0,0);MB=Bf(255,75,125);MC=Bf(203,24,24);MD=Bf(222,181,148);ME=Bf(214,99,0);MF=Bf(79,145,153);MG=Bf(178,107,123);Mm=Bf(255,0,0);MH=Bf(0,0,255);MI=Bf(0,128,
0);MJ=Bf(255,165,0);MK=D_(149,69,53,0.25);ML=D_(149,69,53,0.5);MM=Bf(255,255,221);MN=Bf(136,136,102);}
function Hk(){var a=this;Bc.call(a);a.bl=0;a.bq=0;a.bp=0;a.bT=0.0;}
function Bf(a,b,c){var d=new Hk();IW(d,a,b,c);return d;}
function D_(a,b,c,d){var e=new Hk();GP(e,a,b,c,d);return e;}
function IW(a,b,c,d){GP(a,b,c,d,1.0);}
function GP(a,b,c,d,e){a.bl=b;a.bq=c;a.bp=d;a.bT=e;}
function Iz(a){return J(R(CW(R(M(R(M(R(M(R(Gj(D(55)),D(56)),a.bl),D(57)),a.bq),D(58)),a.bp),D(59)),a.bT),D(30)));}
function EZ(){var a=this;C.call(a);a.c8=null;a.c9=null;}
function HY(a,b){var c,d,e,f,g,h,i;c=a.c8;d=a.c9;c=BR(c.cb.y(b));e=BM(d,b);if(e===null){if(b===null){f=Gq(d);if(f===null){d.I=d.I+1|0;f=F0(d,null,0,0);g=d.Q+1|0;d.Q=g;if(g>d.bY)Gf(d);}}else{g=DW(b);h=g&(d.i.data.length-1|0);f=Ey(d,b,h,g);if(f===null){d.I=d.I+1|0;f=F0(d,b,h,g);g=d.Q+1|0;d.Q=g;if(g>d.bY)Gf(d);}}e=f.E;f.E=c;}if(e===null)return 1;d=new ED;b=DA(b);i=DA(e);e=DA(c);f=V();I(I(I(I(I(I(f,D(60)),b),D(61)),i),D(62)),e);BO(d,J(f));K(d);}
function G6(){var a=this;C.call(a);a.dO=null;a.L=null;a.b2=0;}
function I_(a,b,c){var d=new G6();In(d,a,b,c);return d;}
function In(a,b,c,d){a.dO=b;a.L=c;a.b2=d;}
function I8(a,b){if(!a.b2){a.L=b;a.b2=1;}else a.L=a.dO.dk(a.L,b);return 1;}
function EE(){var a=this;C.call(a);a.ch=null;a.cj=null;}
function GG(a,b){var c;c=a.ch;return a.cj.b(c.c0.g(b));}
function E3(){var a=this;C.call(a);a.ef=null;a.ee=null;}
function HK(a,b){a.ef.cZ(a.ee,b);return 1;}
function Gp(){C.call(this);this.bP=null;}
var MO=null;function Kj(a){var b=new Gp();JX(b,a);return b;}
function JX(a,b){a.bP=b;}
function HN(b){var c;if(b!==null)c=Kj(BR(b));else{if(MO===null)MO=Kj(null);c=MO;}return c;}
function Hp(){C.call(this);this.e6=null;}
function EC(){C.call(this);this.cY=null;}
function IC(a,b){b=b;B3(a.cY,b);}
function F8(){C.call(this);this.dX=null;}
function JG(a,b){a.dX.m(b);return 1;}
var Cn=E(0);
function G8(){var a=this;C.call(a);a.fO=0;a.fR=0;a.fS=0;a.fk=0;a.f3=null;}
var BT=E(0);
function EL(){C.call(this);this.dq=null;}
function J5(a,b){var c,d;c=a.dq;d=new Cq;CV();CT(d,MP,b);c.m(d);}
function EK(){C.call(this);this.ce=null;}
function H0(a,b){var c,d;c=a.ce;d=new Cq;CV();CT(d,MQ,b);c.m(d);}
function EJ(){C.call(this);this.dn=null;}
function J3(a,b){var c,d;c=a.dn;d=new Cq;CV();CT(d,MR,b);c.m(d);}
function EH(){C.call(this);this.cJ=null;}
function Jz(a,b){var c,d;c=a.cJ;d=new Cq;CV();CT(d,MS,b);c.m(d);}
function EG(){C.call(this);this.dx=null;}
function JN(a,b){a.dx.m(null);}
var EY=E(0);
function FY(){Bc.call(this);this.l=null;}
function Fz(){C.call(this);this.cw=null;}
function Jl(a,b){return a.cw.b(BE(b));}
function DY(){C.call(this);this.cn=null;}
function I6(a,b){a.cn.dp(b);return 1;}
function EP(){var a=this;C.call(a);a.cF=null;a.cD=null;}
function Jg(a,b){var c;c=a.cF;return a.cD.b(c.cr.y(b));}
function DF(){var a=this;C.call(a);a.cK=null;a.cL=null;}
function Jo(a,b){var c,d;c=a.cK;d=a.cL;return c.di.b(b)?d.b(b):1;}
function GC(){C.call(this);this.dY=null;}
function Ir(a,b){var c;c=a.dY;b=b;Bi();c.C=CL(b.bC);c.b9=1;return 0;}
function ET(){var a=this;C.call(a);a.bV=null;a.bx=null;a.s=0;}
function Gm(a){var b,c;if(a.s)return;a.s=0;while(!a.s){b=a.bV;c=new Fk;c.dC=a;if(!b.j(c)){if(a.s)a.s=2;else a.s=3;a.bV=null;}}}
var C7=E(S);
var Ec=E(0);
var Ez=E(0);
var Co=E(S);
function ER(){var a=this;Bk.call(a);a.bb=0;a.dQ=null;}
function Gn(a,b){var c;while(true){c=a.bb;if(c<0)break;if(!b.n(c))return 1;a.bb=Ge(a.dQ,a.bb+1|0);}return 0;}
function F4(){var a=this;Ck.call(a);a.Q=0;a.i=null;a.I=0;a.d_=0.0;a.bY=0;}
function Hl(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function F7(a){a.bY=a.i.data.length*a.d_|0;}
function BM(a,b){var c,d;if(b===null)c=Gq(a);else{d=DW(b);c=Ey(a,b,d&(a.i.data.length-1|0),d);}if(c===null)return null;return c.E;}
function Ey(a,b,c,d){var e,f;e=a.i.data[c];while(e!==null){if(e.bF==d){f=e.X;if(b!==f&&!(b===f?1:f instanceof B5&&f.p==b.p?1:0)?0:1)break;}e=e.A;}return e;}
function Gq(a){var b;b=a.i.data[0];while(b!==null&&b.X!==null){b=b.A;}return b;}
function F0(a,b,c,d){var e,f,g;e=new CB;f=null;e.X=b;e.E=f;e.bF=d;g=a.i.data;e.A=g[c];g[c]=e;return e;}
function Gf(a){var b,c,d,e,f,g,h,i;b=a.i.data.length;b=Hl(!b?1:b<<1);c=Z(CB,b);d=c.data;e=0;f=b-1|0;while(true){g=a.i.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bF&f;i=h.A;h.A=d[b];d[b]=h;h=i;}e=e+1|0;}a.i=c;F7(a);}
function Fk(){C.call(this);this.dC=null;}
function Ix(a,b){var c;c=a.dC;c.bx=b;c.s=1;return 0;}
var HE=E(0);
function Hw(b){var c,d,e,f,g,h,i,j,k,l;c=b.bT;if(c!==1.0){d=c*1000.0;e=d+JY(d)*0.5|0;if(e!=1000){f=b.bl;g=b.bq;h=b.bp;i=e/1000|0;j=e%1000|0;if(j<10){b=V();M(I(b,D(63)),j);b=J(b);}else if(j>=100){Dy();b=J(M(V(),j));}else{b=V();M(Q(b,48),j);b=J(b);}k=V();I(Q(M(k,i),46),b);l=J(k);b=V();Q(I(Q(M(Q(M(Q(M(I(b,D(64)),f),44),g),44),h),44),l),41);return J(b);}}f=b.bl;g=b.bq;e=b.bp;b=V();Q(M(Q(M(Q(M(I(b,D(65)),f),44),g),44),e),41);return J(b);}
var Em=E(0);
function Cq(){var a=this;C.call(a);a.eQ=null;a.bI=null;}
function MT(a,b){var c=new Cq();CT(c,a,b);return c;}
function CT(a,b,c){a.eQ=b;a.bI=c;}
var BJ=E(BA);
var MQ=null;var MR=null;var MP=null;var MS=null;var MU=null;function CV(){CV=W(BJ);Ia();}
function FG(a,b){var c=new BJ();GE(c,a,b);return c;}
function Jp(){CV();return MU.bv();}
function GE(a,b,c){CV();CI(a,b,c);}
function Ia(){var b;MQ=FG(D(66),0);MR=FG(D(67),1);MP=FG(D(68),2);b=FG(D(69),3);MS=b;MU=CJ(BJ,[MQ,MR,MP,b]);}
function D2(){var a=this;C.call(a);a.d7=null;a.d8=null;}
function IT(a,b){var c,d;c=a.d7;d=a.d8;return c.c2.n(b)?d.n(b):1;}
var DP=E(0);
function Dq(){var a=this;C.call(a);a.X=null;a.E=null;}
function CB(){var a=this;Dq.call(a);a.bF=0;a.A=null;}
function CN(){var a=this;Bc.call(a);a.d=0.0;a.c=0.0;}
function BS(a,b){var c=new CN();JU(c,a,b);return c;}
function JU(a,b,c){a.d=b;a.c=c;}
function Cp(a,b){return BS(a.d+b.d,a.c+b.c);}
function Go(a,b){return BS(a.d-b.d,a.c-b.c);}
function B0(a,b){return BS(a.d*b,a.c*b);}
function CA(a,b){var c,d;c=b.d-a.d;d=b.c-a.c;return J0(c*c+d*d);}
function IA(a){return J(R(CW(R(CW(R(Gj(D(70)),D(28)),a.d),D(29)),a.c),D(30)));}
function DH(){C.call(this);this.c_=null;}
function IZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.c_;Bi();b=Lu.data[b.p];d=1.7976931348623157E308;e=b.bN.data;f=e.length;g=0;while(g<f){h=e[g];i=0;while(i<1000){j=h.data;k=1.0*i/1000.0;l=1.0-k;m=l*l*l;n=3.0*l;l=n*l*k;n=n*k*k;o=k*k*k;d=Ke(d,CA(Cp(Cp(Cp(B0(j[0],m),B0(j[1],l)),B0(j[2],n)),B0(j[3],o)),c));i=i+1|0;}g=g+1|0;}b=new CY;b.R=d;return b;}
function DI(){C.call(this);this.d6=null;}
function CY(){BP.call(this);this.R=0.0;}
var MV=null;function IX(a){var b;b=a.R;return J(CW(V(),b));}
function HH(){MV=H($rt_doublecls());}
var FZ=E(0);
var C6=E();
var Dz=E(C6);
var MW=null;function GH(){MW=new Dz;}
function Fn(){C.call(this);this.cx=null;}
function Ki(a,b){return BM(a.cx,BE(b));}
var Fo=E();
function Kg(a,b){Bi();return Z(CN,b);}
function D4(){C.call(this);this.dP=null;}
function IO(a,b){return EA(a.dP,b);}
var D6=E();
function Jf(a){return Cr();}
var D5=E();
function H4(a,b,c){Bs(b,c);}
var D7=E();
var DO=E();
function H2(a,b){b=b;Bh();return Ce(b,LC)?0:1;}
function DM(){C.call(this);this.cU=null;}
function HX(a,b){var c,d;b=b;c=a.cU;d=new BW;Bh();EF(d,LB,c);return F2(CD(b,d.J),CD(b,d.K));}
var DN=E();
function Id(a,b){return Z(BW,b);}
function E9(){var a=this;C.call(a);a.c7=null;a.c6=0;a.eB=null;}
function IU(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.c7;d=a.c6;e=(C_()).data[(d*6|0)+b|0];f=BE(30);g=BE(15);h=(Ds()).createElement("div");if(f!==null){i=h.style;j=V();I(I(j,f),D(7));k=J(j);i.setProperty("width",$rt_ustr(k));}if(g!==null){f=h.style;i=V();I(I(i,g),D(7));k=J(i);f.setProperty("height",$rt_ustr(k));}f=Kw(h);i=f.f;if(e===null)i.style.removeProperty("background-color");else{i=i.style;k=e.S;i.setProperty("background-color",$rt_ustr(k));}Cu();Cg(f,DD(LQ));g=c.bt;l=e.M;m=g.cg.data;if(!m[l]){m[l]=1;g.dM=g.dM
+1|0;}g.bZ.data[l]=f;i=new D8;i.dK=c;i.dL=e;Gg(f,D(2),i);return f;}
function F_(){C.call(this);this.df=null;}
function J1(a,b,c){var d,e,f,g,h,i,j,k;d=a.df;e=b;f=c;d=d.d6;Bi();g=(BM(d,e)).R;h=(BM(d,f)).R;i=(g<=h?0:1)-(h<=g?0:1)|0;if(!i){j=1.0/g;k=1.0/h;i=(((j<=k?0:1)-(k<=j?0:1)|0)+(h!==h?0:1)|0)-(g!==g?0:1)|0;}if(i<=0)c=b;return c;}
function FF(){var a=this;C.call(a);a.bW=null;a.cI=0;a.r=0;}
function E2(a){var b,c;if(a.r)return;a.r=0;while(!a.r){b=a.bW;c=new Gz;c.eb=a;if(!Gn(b,c)){if(a.r)a.r=2;else a.r=3;a.bW=null;}}}
var ED=E(S);
function D8(){var a=this;C.call(a);a.dK=null;a.dL=null;}
function I5(a,b){Fw(a.dK,a.dL);}
function Gz(){C.call(this);this.eb=null;}
function Kc(a,b){var c;c=a.eb;c.cI=b;c.r=1;return 0;}
var DR=E();
function Jd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;Bi();b=Ls;d=c[0];e=c[1];f=c[2];g=c[3];b.l.beginPath();h=b.l;i=d.d;j=d.c;h.moveTo(i,j);d=b.l;k=e.d;l=e.c;m=f.d;i=f.c;j=g.d;n=g.c;d.bezierCurveTo(k,l,m,i,j,n);b.l.stroke();}
var Gt=E(0);
function HA(){C.call(this);this.fv=null;}
function HG(){B4.call(this);this.go=null;}
function DC(){var a=this;C.call(a);a.be=0;a.dd=0;a.P=null;a.bo=null;a.c$=null;a.bm=null;}
function C5(a){var b,c;if(a.P!==null)return 1;while(true){b=a.be;c=a.bm.i.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.be=b+1|0;}return 0;}
var FX=E(DC);
function FV(a){var b,c,d,e;if(a.dd!=a.bm.I){b=new C7;N(b);K(b);}if(!C5(a)){b=new Co;N(b);K(b);}b=a.P;if(b!==null){c=a.bo;if(c!==null)a.c$=c;a.bo=b;a.P=b.A;}else{d=a.bm.i.data;e=a.be;a.be=e+1|0;b=d[e];a.bo=b;a.P=b.A;a.c$=null;}return a.bo;}
var BX=E();
var MX=null;var MY=null;var LL=null;var LK=null;var MZ=null;function Hz(){MX=FN([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);MY=HD([G(1),G(10),G(100),G(1000),G(10000),G(100000),G(1000000),G(10000000),G(100000000),G(1000000000),B(1410065408, 2),B(1215752192, 23),B(3567587328, 232),B(1316134912, 2328),B(276447232, 23283),B(2764472320, 232830),B(1874919424, 2328306),B(1569325056, 23283064),B(2808348672, 232830643)]);LL=HD([G(1),G(10),G(100),G(10000),G(100000000),B(1874919424, 2328306)]);LK
=new FI;MZ=new DE;}
var CS=E();
var M0=CX;var M1=null;var M2=null;function Hu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):B(0, 2146959360);c.c1=DQ(Bt(d,B(0, 2147483648)),CX)?0:1;e=Bt(d,B(4294967295, 1048575));f=H8(KJ(d,52))&2047;if(DQ(e,CX)&&!f){c.bA=CX;c.bS=0;return;}if(f)e=Kr(e,B(0, 1048576));else{e=Cd(e,1);while(DQ(Bt(e,B(0, 1048576)),CX)){e=Cd(e,1);f=f+(-1)|0;}}g=M2.data;h=f<<16>>16;i=0;j=g.length;if(i>j){c=new B6;N(c);K(c);}k=j-1|0;a:{while(true){if(i>k){j=( -i|0)-1|0;break a;}j=(i
+k|0)/2|0;l=GR(g[j],h);if(!l)break;if(l<=0)i=j+1|0;else k=j-1|0;}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=CP(e,M1.data[h],i);if(H9(m,M0)){while(BK(m,M0)<=0){j=j+(-1)|0;m=Bd(P(m,G(10)),G(9));}g=M2.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=CP(e,M1.data[h],i);}e=Cd(e,1);d=Bd(e,G(1));g=M1.data;h=j+1|0;n=g[h];f=i-1|0;n=CP(d,n,f);o=CP(KH(e,G(1)),M1.data[h],f);p=G(1);while(true){q=P(p,G(10));if(BK(Bv(m,q),Bv(o,q))<=0)break;p=q;}r=G(1);while(true){s=P(r,G(10));if(BK(Bv(m,s),Bv(n,s))>=0)break;r=s;}h=BK(p,r);e=h>0?P(Bv(m,p),
p):h<0?Bd(P(Bv(m,r),r),r):P(Bv(Bd(m,HL(r,G(2))),r),r);if(BK(e,B(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Bv(e,G(10));if(BK(e,B(2808348672, 232830643))<0)break;}else if(BK(e,B(1569325056, 23283064))<0){j=j+(-1)|0;e=P(e,G(10));}c.bA=e;c.bS=j-330|0;}
function CP(b,c,d){var e,f,g,h,i,j,k,l;e=Bt(b,G(65535));f=Bt(B$(b,16),G(65535));g=Bt(B$(b,32),G(65535));h=Bt(B$(b,48),G(65535));i=Bt(c,G(65535));j=Bt(B$(c,16),G(65535));k=Bt(B$(c,32),G(65535));l=Bt(B$(c,48),G(65535));return Bd(Bd(Bd(Cd(P(l,h),32+d|0),Cd(Bd(P(l,g),P(k,h)),16+d|0)),Cd(Bd(Bd(P(l,f),P(k,g)),P(j,h)),d)),B$(Bd(Bd(Bd(P(k,e),P(j,f)),P(i,g)),Cd(Bd(Bd(Bd(P(l,e),P(k,f)),P(j,g)),P(i,h)),16)),32-d|0));}
function Hb(){M0=Bv(G(-1),G(10));M1=HD([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
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
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);M2=KN([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function FI(){var a=this;C.call(a);a.bA=CX;a.bS=0;a.c1=0;}
var Gl=E(BP);
var M3=null;function Bv(b,c){return Long_udiv(b, c);}
function BK(b,c){return Long_ucompare(b, c);}
function Ha(){M3=H($rt_longcls());}
var DE=E();
$rt_packages([]);
$rt_metadata([C,0,0,[],0,3,0,0,["e",K6(JC)],Bz,0,C,[],0,3,0,Bi,0,Ev,0,C,[],3,3,0,0,0,DV,0,C,[],3,3,0,0,0,EN,0,C,[Ev,DV],0,3,0,0,0,HO,0,C,[],4,0,0,0,0,Hx,0,C,[],4,3,0,0,0,Cl,0,C,[],0,3,0,0,0,Cf,0,Cl,[],0,3,0,0,0,S,0,Cf,[],0,3,0,0,0,HB,0,S,[],0,3,0,0,0,Bn,0,C,[],3,3,0,0,0,BF,0,C,[],3,3,0,0,0,Dj,0,C,[],3,3,0,0,0,BZ,0,C,[Bn,BF,Dj],0,3,0,Dy,["e",K6(JA)],Dk,0,Cl,[],0,3,0,0,0,Cm,0,Dk,[],0,3,0,0,0,Hh,0,Cm,[],0,3,0,0,0,BP,0,C,[Bn],1,3,0,0,0,B5,0,BP,[BF],0,3,0,0,["e",K6(Jk)],Da,0,C,[Bn,Dj],0,0,0,0,["dI",K7(FC),"e",K6(J)],Fp,
0,C,[],3,3,0,0,0,D1,0,Da,[Fp],0,3,0,0,["e",K6(Jx),"dI",K7(J6)],B8,0,Cm,[],0,3,0,0,0,Hc,0,B8,[],0,3,0,0,0,G3,0,B8,[],0,3,0,0,0,Di,0,C,[],0,3,0,HQ,0,Bc,0,C,[],1,3,0,0,0,GN,0,Bc,[],32772,3,0,0,0,BC,0,C,[],3,3,0,0,0,Fy,0,C,[BC],0,3,0,0,["m",K7(Kk)],Hn,0,C,[],4,3,0,0,0,HT,0,C,[],4,3,0,0,0,Ft,0,C,[],3,3,0,0,0,C2,0,C,[Ft],0,3,0,KO,0,Ed,0,C,[],0,3,0,0,0,BA,0,C,[BF,Bn],1,3,0,0,["e",K6(I4)],L,0,BA,[],12,3,0,FT,0,Gd,0,C,[],3,3,0,0,0,C$,0,C,[Gd],3,3,0,0,0,Gk,0,C,[C$],3,3,0,0,0,Bo,0,C,[],3,3,0,0,0,Er,0,C,[Bo],0,3,0,0,["y",
K7(J_)],GF,0,C,[],4,3,0,0,0,D$,0,C,[],3,3,0,0,0,BW,0,Bc,[],32772,3,0,0,["e",K6(I2)],Hd,0,C,[],0,3,0,0,0,Es,0,C,[Bo],0,3,0,0,["y",K7(IQ)],Bb,0,C,[],3,3,0,0,0,Et,0,C,[Bb],0,3,0,0,["g",K7(IN)]]);
$rt_metadata([C9,0,C,[],0,0,0,0,0,Eu,0,C,[Bo],0,3,0,0,0,Cs,0,C,[],3,3,0,0,0,Eo,0,C,[Cs],0,3,0,0,["dA",K6(II)],Dl,0,C,[],3,3,0,0,0,Ep,0,C,[Dl],0,3,0,0,["cZ",K8(HZ)],Cv,0,C,[],3,3,0,0,0,Eq,0,C,[Cv],0,3,0,0,0,BH,0,C,[],3,3,0,0,0,De,0,C,[BH,Bn],0,3,0,0,["e",K6(ID)],Bu,0,C,[],3,3,0,0,0,Gw,0,C,[Bu],0,3,0,0,["n",K7(J4)],C1,0,C,[],3,3,0,0,0,Gv,0,C,[C1],0,3,0,0,["dp",K7(IL)],Dn,0,C,[],3,3,0,0,0,GA,0,C,[Dn],0,3,0,0,0,By,0,S,[],0,3,0,0,0,GX,0,C,[],4,3,0,0,0,Cw,0,S,[],0,3,0,0,0,CG,0,S,[],0,3,0,0,0,CQ,0,C,[BF],0,3,0,0,0,Ck,
0,C,[D$],1,3,0,0,["e",K6(Js)],Gb,0,Ck,[Bn,BH],0,3,0,0,0,E6,0,C,[Bb],0,3,0,0,["g",K7(Il)],Bk,0,C,[Gk],1,3,0,0,["t",K6(Ic)],Fx,0,Bk,[],0,3,0,0,["w",K7(GY)],FO,0,C,[Bo],0,3,0,0,0,Fr,0,C,[Cs],0,3,0,0,0,Fq,0,C,[Cv],0,3,0,0,0,FE,0,C,[],3,3,0,0,0,CO,0,C,[FE],3,3,0,0,0,Ff,0,C,[CO],0,3,0,0,0,BB,0,BA,[],12,3,0,Hy,0,FJ,0,C,[],3,3,0,0,0,Bl,0,Bc,[BF],32772,3,0,Bh,["e",K6(H$)],Eh,0,C,[Bo],0,3,0,0,["y",K7(IJ)],Ba,0,C,[],3,3,0,0,0,Ej,0,C,[Ba],0,3,0,0,["b",K7(IY)],Ef,0,C,[Bb],0,3,0,0,["g",K7(JL)],Eg,0,C,[Bb],0,3,0,0,["g",K7(JQ)],Ek,
0,C,[CO],0,3,0,0,["dk",K8(J$)],E1,0,C,[C$],3,3,0,0,0,X,0,C,[E1],1,3,0,0,["t",K6(JS)],Ei,0,X,[],0,3,0,0,["j",K7(GJ),"t",K6(It)],Eb,0,C,[C1],0,3,0,0,["dp",K7(IF)],CU,0,C,[],3,3,0,0,0,B9,0,C,[CU],0,3,0,0,0,E4,0,C,[CU],3,3,0,0,0,Dg,0,B9,[E4],0,3,0,0,0,Bm,0,C,[],3,3,0,0,0]);
$rt_metadata([DJ,0,C,[Bm],3,3,0,0,0,DT,0,C,[DJ],3,3,0,0,0,BD,0,C,[Bm],3,3,0,0,0,GU,0,C,[DT,BD],3,3,0,0,0,D0,0,C,[Bo],0,3,0,0,0,Fc,0,C,[Ba],0,3,0,0,["b",K7(JI)],Fe,0,C,[Bo],0,3,0,0,["y",K7(Ji)],Fd,0,C,[Bb],0,3,0,0,["g",K7(IR)],E_,0,C,[Bo],0,3,0,0,["y",K7(Ja)],E$,0,C,[Bb],0,3,0,0,["g",K7(H7)],Fb,0,C,[BC],0,3,0,0,["m",K7(H6)],Fa,0,C,[BC],0,3,0,0,["m",K7(Jr)],DG,0,Bk,[],0,3,0,0,["w",K7(JO),"t",K6(IH)],Gr,0,C,[BD],3,3,0,0,0,FP,0,C,[BD],3,3,0,0,0,FK,0,C,[BD],3,3,0,0,0,EX,0,C,[BD],3,3,0,0,0,FM,0,C,[BD],3,3,0,0,0,F6,
0,C,[BD,Gr,FP,FK,EX,FM],3,3,0,0,0,FW,0,C,[],3,3,0,0,0,Ga,0,C,[Bm],3,3,0,0,0,G4,0,C,[Bm,F6,FW,Ga],1,3,0,0,["fT",K7(I$),"gB",K8(Ij),"fU",K8(Kl),"fe",K9(I7),"fB",K7(Jc),"fM",K6(JR),"f_",K9(If)],Ew,0,C,[],3,3,0,0,0,CK,0,C,[Ew],3,3,0,0,0,B2,0,C,[CK],1,3,0,0,0,Gc,0,C,[CK],3,3,0,0,0,B4,0,B2,[Gc],1,3,0,0,0,DB,0,B4,[BH,Bn],1,3,0,0,0,Dm,0,DB,[],0,0,0,0,0,D3,0,C,[FJ],0,0,0,0,0,Fi,0,C,[Bb],0,3,0,0,["g",K7(Io)],Fj,0,C,[Bb],0,3,0,0,["g",K7(Iv)],Fg,0,C,[Ba],0,3,0,0,["b",K7(J9)],Fh,0,C,[Bb],0,3,0,0,["g",K7(JJ)],Fl,0,C,[Ba],
0,3,0,0,["b",K7(H5)],Fm,0,C,[Bb],0,3,0,0,["g",K7(JV)],ES,0,X,[],0,3,0,0,["j",K7(Jb)],FS,0,X,[],0,3,0,0,["j",K7(I9)],Gu,0,X,[],0,3,0,0,["j",K7(H3),"t",K6(IP)],GV,0,C,[],4,3,0,0,0,Gi,0,C,[CK],3,3,0,0,0,D9,0,C,[Gi],3,3,0,0,0,Cb,0,B2,[D9],1,3,0,0,0,Dh,0,C,[],3,3,0,0,0,EM,0,Cb,[Dh],0,0,0,0,0,BG,0,C,[],4,3,0,FQ,0,Ht,0,C,[Bm],1,3,0,0,0,G0,0,C,[Bm],1,3,0,0,0,HS,0,C,[Bm],1,3,0,0,0,Dx,0,C,[Bm],3,3,0,0,0]);
$rt_metadata([F9,0,C,[Dx],0,3,0,0,["eT",K7(JP)],Hg,0,C,[Bm],1,3,0,0,0,F$,0,C,[Dx],0,3,0,0,["eT",K7(Ii)],HU,0,C,[],4,3,0,0,0,DX,0,X,[],0,3,0,0,0,CZ,0,Bk,[],1,3,0,0,["w",K7(H_)],F5,0,CZ,[],0,3,0,0,0,Ee,0,X,[],0,3,0,0,["j",K7(GS),"t",K6(H1)],Cj,0,X,[],1,3,0,0,["j",K7(JZ),"t",K6(G2)],Fu,0,Cj,[],0,3,0,0,["cs",K7(Ka)],DS,0,Bk,[],0,3,0,0,["w",K7(Ih)],En,0,C,[Ba],0,0,0,0,["b",K7(Km)],Fv,0,Cb,[BH,Bn,Dh],0,3,0,0,["e",K6(Jn)],Ex,0,C,[Ba],0,3,0,0,["b",K7(Iq)],Do,0,By,[],0,3,0,0,0,FA,0,C,[CU],3,3,0,0,0,EQ,0,B9,[FA],0,3,
0,0,0,BU,0,Bc,[],32772,3,0,Cu,["e",K6(Iy)],FL,0,Cj,[],0,3,0,0,["cs",K7(JM)],Ci,0,BA,[],12,3,0,HF,0,Hj,0,C,[],4,3,0,0,0,DU,0,Cf,[],0,3,0,0,0,B6,0,S,[],0,3,0,0,0,GB,0,S,[],0,3,0,0,0,O,0,C,[],3,3,0,0,0,Hk,0,Bc,[O],32772,3,0,0,["e",K6(Iz)],EZ,0,C,[Ba],0,3,0,0,["b",K7(HY)],G6,0,C,[Ba],0,0,0,0,["b",K7(I8)],EE,0,C,[Bu],0,3,0,0,["n",K7(GG)],E3,0,C,[Bu],0,3,0,0,["n",K7(HK)],Gp,0,C,[],4,3,0,0,0,Hp,0,C,[BC],0,3,0,0,0,EC,0,C,[BC],0,3,0,0,["m",K7(IC)],F8,0,C,[Ba],0,3,0,0,["b",K7(JG)],Cn,0,C,[],3,3,0,0,0,G8,0,C,[Cn],0,0,
0,0,0,BT,0,C,[Bm],3,3,0,0,0,EL,0,C,[BT],0,3,0,0,["bg",K7(J5)],EK,0,C,[BT],0,3,0,0,["bg",K7(H0)],EJ,0,C,[BT],0,3,0,0,["bg",K7(J3)],EH,0,C,[BT],0,3,0,0,["bg",K7(Jz)],EG,0,C,[BT],0,3,0,0,["bg",K7(JN)],EY,0,C,[],3,3,0,0,0,FY,0,Bc,[EY],32772,3,0,0,0,Fz,0,C,[Bu],0,3,0,0,["n",K7(Jl)],DY,0,C,[Bu],0,3,0,0,["n",K7(I6)],EP,0,C,[Ba],0,3,0,0,["b",K7(Jg)],DF,0,C,[Ba],0,3,0,0,["b",K7(Jo)],GC,0,C,[Ba],0,3,0,0,["b",K7(Ir)],ET,0,C,[Cn],0,3,0,0,0]);
$rt_metadata([C7,0,S,[],0,3,0,0,0,Ec,0,C,[Cn],3,3,0,0,0,Ez,0,C,[Ec],3,3,0,0,0,Co,0,S,[],0,3,0,0,0,ER,0,Bk,[],0,0,0,0,["w",K7(Gn)],F4,0,Ck,[BH,Bn],0,3,0,0,0,Fk,0,C,[Ba],0,3,0,0,["b",K7(Ix)],HE,0,C,[],3,3,0,0,0,Em,0,C,[],3,3,0,0,0,Cq,0,C,[Em],0,3,0,0,0,BJ,0,BA,[],12,3,0,CV,0,D2,0,C,[Bu],0,3,0,0,["n",K7(IT)],DP,0,C,[],3,3,0,0,0,Dq,0,C,[DP,BH],0,0,0,0,0,CB,0,Dq,[],0,0,0,0,0,CN,0,Bc,[],32772,3,0,0,["e",K6(IA)],DH,0,C,[Bo],0,3,0,0,["y",K7(IZ)],DI,0,C,[Dn],0,3,0,0,0,CY,0,BP,[BF],0,3,0,0,["e",K6(IX)],FZ,0,C,[],3,3,
0,0,0,C6,0,C,[FZ,Bn],0,3,0,0,0,Dz,0,C6,[],0,3,0,0,0,Fn,0,C,[Bb],0,3,0,0,["g",K7(Ki)],Fo,0,C,[Bb],0,3,0,0,["g",K7(Kg)],D4,0,C,[Bu],0,3,0,0,["n",K7(IO)],D6,0,C,[Cs],0,3,0,0,["dA",K6(Jf)],D5,0,C,[Dl],0,3,0,0,["cZ",K8(H4)],D7,0,C,[Cv],0,3,0,0,0,DO,0,C,[Ba],0,3,0,0,["b",K7(H2)],DM,0,C,[Bo],0,3,0,0,["y",K7(HX)],DN,0,C,[Bb],0,3,0,0,["g",K7(Id)],E9,0,C,[Bb],0,3,0,0,["g",K7(IU)],F_,0,C,[CO],0,3,0,0,["dk",K8(J1)],FF,0,C,[Ez],0,3,0,0,0,ED,0,S,[],0,3,0,0,0,D8,0,C,[BC],0,3,0,0,["m",K7(I5)],Gz,0,C,[Bu],0,3,0,0,["n",K7(Kc)],DR,
0,C,[BC],0,3,0,0,["m",K7(Jd)],Gt,0,C,[],3,3,0,0,0,HA,0,C,[Gt],0,3,0,0,0,HG,0,B4,[],0,0,0,0,0,DC,0,C,[],0,0,0,0,0,FX,0,DC,[Cn],0,0,0,0,0,BX,0,C,[],0,0,0,0,0,CS,0,C,[],4,3,0,0,0,FI,0,C,[],0,3,0,0,0,Gl,0,BP,[BF],0,3,0,0,0,DE,0,C,[],0,3,0,0,0]);
function $rt_array(cls,data){this.hn=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","click","Either src or dest is null","null","vertical","horizontal","px","black","blue","brown","cyan","darkgray","gray","green","lightgray","lime","magenta","olive","orange","pink","purple","red","teal","violet","yellow","white","F9Point[","x=",", y=","]",", ","(this Map)","CONCURRENT","UNORDERED","IDENTITY_FINISH","px ","resize","mousecontact","","object","function","string",
"number","[]","(this Collection)","solid","Border[","color=",", type=",", width=",", radius=","inset","MAX_DIST","SPLIT_DIST","RGBAColor[","r=",", g=",", b=",", a=","Key "," corresponds to values "," and ","00","rgba(","rgb(","OVER","OUT","MOVE","CLICK","Point["]);
BZ.prototype.toString=function(){return $rt_ustr(this);};
BZ.prototype.valueOf=BZ.prototype.toString;C.prototype.toString=function(){return $rt_ustr(JC(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Bd=Long_add;var KH=Long_sub;var P=Long_mul;var HL=Long_div;var Ik=Long_rem;var Kr=Long_or;var Bt=Long_and;var M4=Long_xor;var Cd=Long_shl;var KJ=Long_shr;var B$=Long_shru;var M5=Long_compare;var DQ=Long_eq;var M6=Long_ne;var M7=Long_lt;var H9=Long_le;var M8=Long_gt;var M9=Long_ge;var M$=Long_not;var M_=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(IB);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=G4.prototype;c.removeEventListener=c.fe;c.dispatchEvent=c.fB;c.get=c.fT;c.addEventListener=c.f_;Object.defineProperty(c,"length",{get:c.fM});c=F9.prototype;c.accept=c.eT;c=F$.prototype;c.accept=c.eT;c=EL.prototype;c.handleEvent=c.bg;c=EK.prototype;c.handleEvent=c.bg;c=EJ.prototype;c.handleEvent=c.bg;c=EH.prototype;c.handleEvent=c.bg;c=EG.prototype;c.handleEvent=c.bg;})();
}));