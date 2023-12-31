"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242, $rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
}, $rt_wrapFunction0 = f => function() {
    return f(this);
}, $rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
}, $rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
}, $rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
}, $rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
}, $rt_eraseClinit = target => target.$clinit = () => {
}, $dbg_class = obj => {
    let cls = obj.constructor, arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
}, $rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
}, $rt_cls = cls => jl_Class_getClass(cls), $rt_objcls = () => jl_Object;
let $rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
}, $rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
}, $rt_charcls = $rt_createPrimitiveCls("char", "C"), $rt_shortcls = $rt_createPrimitiveCls("short", "S"), $rt_intcls = $rt_createPrimitiveCls("int", "I"), $rt_longcls = $rt_createPrimitiveCls("long", "J"), $rt_doublecls = $rt_createPrimitiveCls("double", "D"), $rt_voidcls = $rt_createPrimitiveCls("void", "V");
let $rt_numberConversionBuffer = new ArrayBuffer(16), $rt_numberConversionView = new DataView($rt_numberConversionBuffer), $rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer), $rt_numberConversionIntArray = new Int32Array($rt_numberConversionBuffer), $rt_doubleToRawLongBits;
if (typeof BigInt !== 'function') {
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionView.setFloat64(0, n, true);
        return new Long($rt_numberConversionView.getInt32(0, true), $rt_numberConversionView.getInt32(4, true));
    };
} else if (typeof BigInt64Array !== 'function') {
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionView.setFloat64(0, n, true);
        let lo = $rt_numberConversionView.getInt32(0, true), hi = $rt_numberConversionView.getInt32(4, true);
        return BigInt.asIntN(64, BigInt.asUintN(32, BigInt(lo)) | BigInt(hi) << BigInt(32));
    };
} else {
    let $rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer);
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionDoubleArray[0] = n;
        return $rt_numberConversionLongArray[0];
    };
}
let $rt_equalDoubles = (a, b) => {
    if (a !== a) {
        return b !== b;
    }
    $rt_numberConversionDoubleArray[0] = a;
    $rt_numberConversionDoubleArray[1] = b;
    return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[2] && $rt_numberConversionIntArray[1] === $rt_numberConversionIntArray[3];
}, $rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1, $rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF, al = a & 0xFFFF, bh = b >>> 16 & 0xFFFF, bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}, $rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0, $rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0, $rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
};
function Long(lo, hi) {
    this.lo = lo | 0;
    this.hi = hi | 0;
}
Long.prototype.__teavm_class__ = () => {
    return "long";
};
let Long_isPositive = a => (a.hi & 0x80000000) === 0, Long_isNegative = a => (a.hi & 0x80000000) !== 0, Long_MAX_NORMAL = 1 << 18, Long_ZERO, Long_create, Long_fromInt, Long_fromNumber, Long_toNumber, Long_hi, Long_lo, Long_divRem;
if (typeof BigInt !== "function") {
    Long.prototype.toString = function() {
        let result = [], n = this, positive = Long_isPositive(n);
        if (!positive) {
            n = Long_neg(n);
        }
        let radix = new Long(10, 0);
        do  {
            let divRem = Long_divRem(n, radix);
            result.push(String.fromCharCode(48 + divRem[1].lo));
            n = divRem[0];
        }while (n.lo !== 0 || n.hi !== 0);
        result = (result.reverse()).join('');
        return positive ? result : "-" + result;
    };
    Long.prototype.valueOf = function() {
        return Long_toNumber(this);
    };
    Long_ZERO = new Long(0, 0);
    Long_fromInt = val => new Long(val,  -(val < 0) | 0);
    Long_fromNumber = val => val >= 0 ? new Long(val | 0, val / 0x100000000 | 0) : Long_neg(new Long( -val | 0,  -val / 0x100000000 | 0));
    Long_create = (lo, hi) => new Long(lo, hi);
    Long_toNumber = val => 0x100000000 * val.hi + (val.lo >>> 0);
    Long_hi = val => val.hi;
    Long_lo = val => val.lo;
} else {
    Long_ZERO = BigInt(0);
    Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32)));
    Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0));
    Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val)));
    Long_toNumber = val => Number(val);
    Long_hi = val => Number(BigInt.asIntN(64, val >> BigInt(32))) | 0;
    Long_lo = val => Number(BigInt.asIntN(32, val)) | 0;
}
let Long_eq, Long_le, Long_ucompare, Long_add, Long_sub, Long_inc, Long_mul, Long_div, Long_rem, Long_udiv, Long_neg, Long_and, Long_or, Long_xor, Long_shl, Long_shr, Long_shru;
if (typeof BigInt !== 'function') {
    Long_eq = (a, b) => a.hi === b.hi && a.lo === b.lo;
    Long_le = (a, b) => {
        if (a.hi > b.hi) {
            return false;
        }
        if (a.hi < b.hi) {
            return true;
        }
        let x = a.lo >>> 1, y = b.lo >>> 1;
        if (x !== y) {
            return x <= y;
        }
        return (a.lo & 1) <= (b.lo & 1);
    };
    Long_add = (a, b) => {
        if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
            return Long_fromNumber(a.lo + b.lo);
        } else if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
            return Long_fromNumber(Long_toNumber(a) + Long_toNumber(b));
        }
        let a_lolo = a.lo & 0xFFFF, a_lohi = a.lo >>> 16, a_hilo = a.hi & 0xFFFF, a_hihi = a.hi >>> 16, b_lolo = b.lo & 0xFFFF, b_lohi = b.lo >>> 16, b_hilo = b.hi & 0xFFFF, b_hihi = b.hi >>> 16, lolo = a_lolo + b_lolo | 0, lohi = a_lohi + b_lohi + (lolo >> 16) | 0, hilo = a_hilo + b_hilo + (lohi >> 16) | 0, hihi = a_hihi + b_hihi + (hilo >> 16) | 0;
        return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
    };
    Long_inc = a => {
        let lo = a.lo + 1 | 0, hi = a.hi;
        if (lo === 0) {
            hi = hi + 1 | 0;
        }
        return new Long(lo, hi);
    };
    Long_neg = a => Long_inc(new Long(a.lo ^ 0xFFFFFFFF, a.hi ^ 0xFFFFFFFF));
    Long_sub = (a, b) => {
        if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
            return Long_fromNumber(a.lo - b.lo);
        }
        let a_lolo = a.lo & 0xFFFF, a_lohi = a.lo >>> 16, a_hilo = a.hi & 0xFFFF, a_hihi = a.hi >>> 16, b_lolo = b.lo & 0xFFFF, b_lohi = b.lo >>> 16, b_hilo = b.hi & 0xFFFF, b_hihi = b.hi >>> 16, lolo = a_lolo - b_lolo | 0, lohi = a_lohi - b_lohi + (lolo >> 16) | 0, hilo = a_hilo - b_hilo + (lohi >> 16) | 0, hihi = a_hihi - b_hihi + (hilo >> 16) | 0;
        return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
    };
    Long_ucompare = (a, b) => {
        let r = $rt_ucmp(a.hi, b.hi);
        if (r !== 0) {
            return r;
        }
        r = (a.lo >>> 1) - (b.lo >>> 1);
        if (r !== 0) {
            return r;
        }
        return (a.lo & 1) - (b.lo & 1);
    };
    Long_mul = (a, b) => {
        let positive = Long_isNegative(a) === Long_isNegative(b);
        if (Long_isNegative(a)) {
            a = Long_neg(a);
        }
        if (Long_isNegative(b)) {
            b = Long_neg(b);
        }
        let a_lolo = a.lo & 0xFFFF, a_lohi = a.lo >>> 16, a_hilo = a.hi & 0xFFFF, a_hihi = a.hi >>> 16, b_lolo = b.lo & 0xFFFF, b_lohi = b.lo >>> 16, b_hilo = b.hi & 0xFFFF, b_hihi = b.hi >>> 16, lolo = 0, lohi = 0, hilo = 0, hihi = 0;
        lolo = a_lolo * b_lolo | 0;
        lohi = lolo >>> 16;
        lohi = (lohi & 0xFFFF) + a_lohi * b_lolo | 0;
        hilo = hilo + (lohi >>> 16) | 0;
        lohi = (lohi & 0xFFFF) + a_lolo * b_lohi | 0;
        hilo = hilo + (lohi >>> 16) | 0;
        hihi = hilo >>> 16;
        hilo = (hilo & 0xFFFF) + a_hilo * b_lolo | 0;
        hihi = hihi + (hilo >>> 16) | 0;
        hilo = (hilo & 0xFFFF) + a_lohi * b_lohi | 0;
        hihi = hihi + (hilo >>> 16) | 0;
        hilo = (hilo & 0xFFFF) + a_lolo * b_hilo | 0;
        hihi = hihi + (hilo >>> 16) | 0;
        hihi = hihi + a_hihi * b_lolo + a_hilo * b_lohi + a_lohi * b_hilo + a_lolo * b_hihi | 0;
        let result = new Long(lolo & 0xFFFF | lohi << 16, hilo & 0xFFFF | hihi << 16);
        return positive ? result : Long_neg(result);
    };
    Long_div = (a, b) => {
        if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
            return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
        }
        return (Long_divRem(a, b))[0];
    };
    Long_udiv = (a, b) => {
        if (a.hi >= 0 && a.hi < Long_MAX_NORMAL && b.hi >= 0 && b.hi < Long_MAX_NORMAL) {
            return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
        }
        return (Long_udivRem(a, b))[0];
    };
    Long_rem = (a, b) => {
        if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
            return Long_fromNumber(Long_toNumber(a) % Long_toNumber(b));
        }
        return (Long_divRem(a, b))[1];
    };
    Long_divRem = (a, b) => {
        if (b.lo === 0 && b.hi === 0) {
            throw new Error("Division by zero");
        }
        let positive = Long_isNegative(a) === Long_isNegative(b);
        if (Long_isNegative(a)) {
            a = Long_neg(a);
        }
        if (Long_isNegative(b)) {
            b = Long_neg(b);
        }
        a = new LongInt(a.lo, a.hi, 0);
        b = new LongInt(b.lo, b.hi, 0);
        let q = LongInt_div(a, b);
        a = new Long(a.lo, a.hi);
        q = new Long(q.lo, q.hi);
        return positive ? [q, a] : [Long_neg(q), Long_neg(a)];
    };
    let Long_udivRem = (a, b) => {
        if (b.lo === 0 && b.hi === 0) {
            throw new Error("Division by zero");
        }
        a = new LongInt(a.lo, a.hi, 0);
        b = new LongInt(b.lo, b.hi, 0);
        let q = LongInt_div(a, b);
        a = new Long(a.lo, a.hi);
        q = new Long(q.lo, q.hi);
        return [q, a];
    };
    Long_and = (a, b) => new Long(a.lo & b.lo, a.hi & b.hi);
    Long_or = (a, b) => new Long(a.lo | b.lo, a.hi | b.hi);
    Long_xor = (a, b) => new Long(a.lo ^ b.lo, a.hi ^ b.hi);
    Long_shl = (a, b) => {
        b &= 63;
        if (b === 0) {
            return a;
        } else if (b < 32) {
            return new Long(a.lo << b, a.lo >>> 32 - b | a.hi << b);
        } else if (b === 32) {
            return new Long(0, a.lo);
        } else {
            return new Long(0, a.lo << b - 32);
        }
    };
    Long_shr = (a, b) => {
        b &= 63;
        if (b === 0) {
            return a;
        } else if (b < 32) {
            return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >> b);
        } else if (b === 32) {
            return new Long(a.hi, a.hi >> 31);
        } else {
            return new Long(a.hi >> b - 32, a.hi >> 31);
        }
    };
    Long_shru = (a, b) => {
        b &= 63;
        if (b === 0) {
            return a;
        } else if (b < 32) {
            return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >>> b);
        } else if (b === 32) {
            return new Long(a.hi, 0);
        } else {
            return new Long(a.hi >>> b - 32, 0);
        }
    };
    function LongInt(lo, hi, sup) {
        this.lo = lo;
        this.hi = hi;
        this.sup = sup;
    }
    let LongInt_mul = (a, b) => {
        let a_lolo = (a.lo & 0xFFFF) * b | 0, a_lohi = (a.lo >>> 16) * b | 0, a_hilo = (a.hi & 0xFFFF) * b | 0, a_hihi = (a.hi >>> 16) * b | 0, sup = a.sup * b | 0;
        a_lohi = a_lohi + (a_lolo >>> 16) | 0;
        a_hilo = a_hilo + (a_lohi >>> 16) | 0;
        a_hihi = a_hihi + (a_hilo >>> 16) | 0;
        sup = sup + (a_hihi >>> 16) | 0;
        a.lo = a_lolo & 0xFFFF | a_lohi << 16;
        a.hi = a_hilo & 0xFFFF | a_hihi << 16;
        a.sup = sup & 0xFFFF;
    }, LongInt_sub = (a, b) => {
        let a_lolo = a.lo & 0xFFFF, a_lohi = a.lo >>> 16, a_hilo = a.hi & 0xFFFF, a_hihi = a.hi >>> 16, b_lolo = b.lo & 0xFFFF, b_lohi = b.lo >>> 16, b_hilo = b.hi & 0xFFFF, b_hihi = b.hi >>> 16;
        a_lolo = a_lolo - b_lolo | 0;
        a_lohi = a_lohi - b_lohi + (a_lolo >> 16) | 0;
        a_hilo = a_hilo - b_hilo + (a_lohi >> 16) | 0;
        a_hihi = a_hihi - b_hihi + (a_hilo >> 16) | 0;
        let sup = a.sup - b.sup + (a_hihi >> 16) | 0;
        a.lo = a_lolo & 0xFFFF | a_lohi << 16;
        a.hi = a_hilo & 0xFFFF | a_hihi << 16;
        a.sup = sup;
    }, LongInt_add = (a, b) => {
        let a_lolo = a.lo & 0xFFFF, a_lohi = a.lo >>> 16, a_hilo = a.hi & 0xFFFF, a_hihi = a.hi >>> 16, b_lolo = b.lo & 0xFFFF, b_lohi = b.lo >>> 16, b_hilo = b.hi & 0xFFFF, b_hihi = b.hi >>> 16;
        a_lolo = a_lolo + b_lolo | 0;
        a_lohi = a_lohi + b_lohi + (a_lolo >> 16) | 0;
        a_hilo = a_hilo + b_hilo + (a_lohi >> 16) | 0;
        a_hihi = a_hihi + b_hihi + (a_hilo >> 16) | 0;
        let sup = a.sup + b.sup + (a_hihi >> 16) | 0;
        a.lo = a_lolo & 0xFFFF | a_lohi << 16;
        a.hi = a_hilo & 0xFFFF | a_hihi << 16;
        a.sup = sup;
    }, LongInt_ucompare = (a, b) => {
        let r = a.sup - b.sup;
        if (r !== 0) {
            return r;
        }
        r = (a.hi >>> 1) - (b.hi >>> 1);
        if (r !== 0) {
            return r;
        }
        r = (a.hi & 1) - (b.hi & 1);
        if (r !== 0) {
            return r;
        }
        r = (a.lo >>> 1) - (b.lo >>> 1);
        if (r !== 0) {
            return r;
        }
        return (a.lo & 1) - (b.lo & 1);
    }, LongInt_numOfLeadingZeroBits = a => {
        let n = 0, d = 16;
        while (d > 0) {
            if (a >>> d !== 0) {
                a >>>= d;
                n = n + d | 0;
            }
            d = d / 2 | 0;
        }
        return 31 - n;
    }, LongInt_shl = (a, b) => {
        if (b === 0) {
            return;
        }
        if (b < 32) {
            a.sup = (a.hi >>> 32 - b | a.sup << b) & 0xFFFF;
            a.hi = a.lo >>> 32 - b | a.hi << b;
            a.lo <<= b;
        } else if (b === 32) {
            a.sup = a.hi & 0xFFFF;
            a.hi = a.lo;
            a.lo = 0;
        } else if (b < 64) {
            a.sup = (a.lo >>> 64 - b | a.hi << b - 32) & 0xFFFF;
            a.hi = a.lo << b;
            a.lo = 0;
        } else if (b === 64) {
            a.sup = a.lo & 0xFFFF;
            a.hi = 0;
            a.lo = 0;
        } else {
            a.sup = a.lo << b - 64 & 0xFFFF;
            a.hi = 0;
            a.lo = 0;
        }
    }, LongInt_shr = (a, b) => {
        if (b === 0) {
            return;
        }
        if (b === 32) {
            a.lo = a.hi;
            a.hi = a.sup;
            a.sup = 0;
        } else if (b < 32) {
            a.lo = a.lo >>> b | a.hi << 32 - b;
            a.hi = a.hi >>> b | a.sup << 32 - b;
            a.sup >>>= b;
        } else if (b === 64) {
            a.lo = a.sup;
            a.hi = 0;
            a.sup = 0;
        } else if (b < 64) {
            a.lo = a.hi >>> b - 32 | a.sup << 64 - b;
            a.hi = a.sup >>> b - 32;
            a.sup = 0;
        } else {
            a.lo = a.sup >>> b - 64;
            a.hi = 0;
            a.sup = 0;
        }
    }, LongInt_copy = a => new LongInt(a.lo, a.hi, a.sup), LongInt_div = (a, b) => {
        let bits = b.hi !== 0 ? LongInt_numOfLeadingZeroBits(b.hi) : LongInt_numOfLeadingZeroBits(b.lo) + 32, sz = 1 + (bits / 16 | 0), dividentBits = bits % 16;
        LongInt_shl(b, bits);
        LongInt_shl(a, dividentBits);
        let q = new LongInt(0, 0, 0);
        while (sz-- > 0) {
            LongInt_shl(q, 16);
            let digitA = (a.hi >>> 16) + 0x10000 * a.sup, digitB = b.hi >>> 16, digit = digitA / digitB | 0, t = LongInt_copy(b);
            LongInt_mul(t, digit);
            if (LongInt_ucompare(t, a) >= 0) {
                while (LongInt_ucompare(t, a) > 0) {
                    LongInt_sub(t, b);
                     --digit;
                }
            } else {
                while (true) {
                    let nextT = LongInt_copy(t);
                    LongInt_add(nextT, b);
                    if (LongInt_ucompare(nextT, a) > 0) {
                        break;
                    }
                    t = nextT;
                    ++digit;
                }
            }
            LongInt_sub(a, t);
            q.lo |= digit;
            LongInt_shl(a, 16);
        }
        LongInt_shr(a, bits + 16);
        return q;
    };
} else {
    Long_eq = (a, b) => a === b;
    Long_le = (a, b) => a <= b;
    Long_add = (a, b) => BigInt.asIntN(64, a + b);
    Long_inc = a => BigInt.asIntN(64, a + 1);
    Long_neg = a => BigInt.asIntN(64,  -a);
    Long_sub = (a, b) => BigInt.asIntN(64, a - b);
    Long_ucompare = (a, b) => {
        a = BigInt.asUintN(64, a);
        b = BigInt.asUintN(64, b);
        return a < b ?  -1 : a > b ? 1 : 0;
    };
    Long_mul = (a, b) => BigInt.asIntN(64, a * b);
    Long_div = (a, b) => BigInt.asIntN(64, a / b);
    Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b));
    Long_rem = (a, b) => BigInt.asIntN(64, a % b);
    Long_and = (a, b) => BigInt.asIntN(64, a & b);
    Long_or = (a, b) => BigInt.asIntN(64, a | b);
    Long_xor = (a, b) => BigInt.asIntN(64, a ^ b);
    Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63));
    Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63));
    Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63));
}
let $rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
}, $rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data), $rt_createLongArray, $rt_createLongArrayFromData;
if (typeof BigInt64Array !== 'function') {
    $rt_createLongArray = sz => {
        let data = new Array(sz), arr = new $rt_longArrayCls(data);
        data.fill(Long_ZERO);
        return arr;
    };
    $rt_createLongArrayFromData = init => new $rt_longArrayCls(init);
} else {
    $rt_createLongArray = sz => new $rt_longArrayCls(new BigInt64Array(sz));
    $rt_createLongArrayFromData = data => {
        let buffer = new BigInt64Array(data.length);
        buffer.set(data);
        return new $rt_longArrayCls(buffer);
    };
}
let $rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)), $rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
}, $rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)), $rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
}, $rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
};
let $rt_stringPool_instance, $rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
}, $rt_s = index => $rt_stringPool_instance[index], $rt_charArrayToString = (array, offset, count) => {
    let result = "", limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
}, $rt_fullArrayToString = array => $rt_charArrayToString(array, 0, array.length), $rt_str = str => str === null ? null : jl_String__init_(str), $rt_ustr = str => str === null ? null : str.$nativeString, $rt_stringClassInit = () => (() => {})(), $rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls), $rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    if (to.$meta.item !== null) {
        return from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            return true;
        }
    }
    return false;
};
let $rt_throw = ex => {
    throw $rt_exception(ex);
}, $rt_javaExceptionProp = Symbol("javaException"), $rt_exception = ex => {
    let err = ex.$jsException;
    if (!err) {
        let javaCause = $rt_throwableCause(ex), jsCause = javaCause !== null ? javaCause.$jsException : void 0, cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
        err = new JavaError("Java exception thrown", cause);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(err);
        }
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return err;
}, $rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack), javaStack = $rt_createArray($rt_stecls(), stack.length), elem, noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
}, JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    };
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null, $rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
}, $rt_createException = message => jl_RuntimeException__init_(message), $rt_throwableMessage = t => jl_Throwable_getMessage(t), $rt_throwableCause = t => jl_Throwable_getCause(t), $rt_stecls = () => $rt_objcls(), $rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
}, $rt_setStack = (e, stack) => {
};
let $rt_packageData = null, $rt_packages = data => {
    let i = 0, packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++], prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
}, $rt_metadata = data => {
    let packages = $rt_packageData, i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta, className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j], func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
};
let $rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    var$1 = jl_Object_getClass($this);
    if (var$1.$name === null)
        var$1.$name = $rt_str(var$1.$platformClass.$meta.name);
    var$1 = var$1.$name;
    var$2 = jl_Object_identity($this);
    if (!var$2)
        var$3 = $rt_s(0);
    else {
        if (!var$2)
            var$4 = 32;
        else {
            var$5 = 0;
            var$4 = var$2 >>> 16 | 0;
            if (var$4)
                var$5 = 16;
            else
                var$4 = var$2;
            var$6 = var$4 >>> 8 | 0;
            if (!var$6)
                var$6 = var$4;
            else
                var$5 = var$5 | 8;
            var$7 = var$6 >>> 4 | 0;
            if (!var$7)
                var$7 = var$6;
            else
                var$5 = var$5 | 4;
            var$6 = var$7 >>> 2 | 0;
            if (!var$6)
                var$6 = var$7;
            else
                var$5 = var$5 | 2;
            if (var$6 >>> 1 | 0)
                var$5 = var$5 | 1;
            var$4 = (32 - var$5 | 0) - 1 | 0;
        }
        var$4 = (((32 - var$4 | 0) + 4 | 0) - 1 | 0) / 4 | 0;
        var$8 = $rt_createCharArray(var$4);
        var$9 = var$8.data;
        var$4 = (var$4 - 1 | 0) * 4 | 0;
        var$5 = 0;
        while (var$4 >= 0) {
            var$10 = var$5 + 1 | 0;
            var$9[var$5] = jl_Character_forDigit((var$2 >>> var$4 | 0) & 15, 16);
            var$4 = var$4 - 4 | 0;
            var$5 = var$10;
        }
        var$3 = jl_String__init_0(var$8);
    }
    var$11 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$11, var$1), 64), var$3);
    return jl_AbstractStringBuilder_toString(var$11);
},
jl_Object_identity = $this => {
    let $platformThis, var$2;
    $platformThis = $this;
    if (!$platformThis.$id$) {
        var$2 = $rt_nextId();
        $platformThis.$id$ = var$2;
    }
    return $this.$id$;
},
jl_Object_clone = $this => {
    let $result, var$2, var$3;
    if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
        $result = new jl_CloneNotSupportedException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $result = otp_Platform_clone($this);
    var$2 = $result;
    var$3 = $rt_nextId();
    var$2.$id$ = var$3;
    return $result;
};
let ui_Client = $rt_classWithoutFields();
let ui_Client_visualizers = null, ui_Client_ui = null, ui_Client_canvas = null, ui_Client_select = null, ui_Client_context = null, ui_Client_visualizer = null, ui_Client_model = null, ui_Client_selected = null;
let ui_Client_$callClinit = () => {
    ui_Client_$callClinit = $rt_eraseClinit(ui_Client);
    ui_Client__clinit_();
};
let ui_Client_main = $args => {
    let $cont, $controls, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    jl_String__clinit_();
    jl_Character__clinit_();
    jl_Integer__clinit_();
    jl_Double__clinit_();
    uid_TextColor__clinit_();
    juc_ThreadLocalRandom__clinit_();
    uiu_Color__clinit_();
    jl_AbstractStringBuilder$Constants__clinit_();
    jl_Long__clinit_();
    otcit_DoubleAnalyzer__clinit_();
    uiu_LineConf__clinit_();
    uiu_LineConf$Children__clinit_();
    uiu_MouseEvt$Type__clinit_();
    jus_Collector$Characteristics__clinit_();
    ui_Client_$callClinit();
    $cont = uiu_HTMLUIFactory_lineLayout(ui_Client_ui, 1, uiu_LineConf_gap(20));
    uiuci_HTMLComponent_box($cont, uiu_Box_padding(10));
    uiuci_HTMLContainer_add($cont, ui_Client_canvas);
    uiuci_HTMLComponent_addEventListener(ui_Client_canvas, $rt_s(1), new ui_Client$main$lambda$_1_0);
    $controls = uiu_HTMLUIFactory_lineLayout(ui_Client_ui, 0, uiu_LineConf_gap(10));
    uiuci_HTMLComponent_box($controls, uiu_Box_padding(10));
    var$4 = ui_Client_visualizers;
    ju_Objects_requireNonNull(new ui_Client$main$lambda$_1_1);
    if (var$4.$entrySet0 === null) {
        var$5 = new ju_TemplateCollections$NEtriesMap$1;
        var$5.$this$0 = var$4;
        var$4.$entrySet0 = var$5;
    }
    var$6 = var$4.$entrySet0;
    var$7 = 0;
    while (true) {
        $args = var$6.$this$0.$data.data;
        var$8 = $rt_compare(var$7, $args.length);
        if (!(var$8 >= 0 ? 0 : 1)) {
            var$9 = ui_Client_select.$elem;
            var$4 = "unital";
            var$9.value = var$4;
            uiuci_HTMLContainer_add($controls, ui_Client_select);
            var$4 = ui_Client_select;
            var$9 = new ui_Client$main$lambda$_1_2;
            if (!jl_String_equals($rt_s(2), $rt_s(2)))
                uiuci_HTMLComponent_addEventListener(var$4, $rt_s(2), var$9);
            else {
                var$10 = var$4.$elem;
                var$11 = new uiuci_HTMLSelect$addEventListener$lambda$_11_0;
                var$11.$_0 = var$9;
                var$10.addEventListener("change", otji_JS_function(var$11, "handleEvent"));
            }
            uiuci_HTMLContainer_add($cont, $controls);
            uiuci_HTMLContainer_add(uiu_HTMLUIFactory_ROOT, $cont);
            ui_Client_repaint();
            return;
        }
        if (!var$8)
            break;
        var$8 = var$7 + 1 | 0;
        var$4 = $args[var$7].$key;
        var$5 = ui_Client_select;
        var$9 = (otjdh_HTMLDocument_current()).createElement("option");
        var$11 = $rt_ustr(var$4);
        var$9.value = var$11;
        var$4 = $rt_ustr(var$4);
        var$9.text = var$4;
        var$5.$elem.appendChild(var$9);
        var$7 = var$8;
    }
    var$4 = new ju_NoSuchElementException;
    jl_Exception__init_(var$4);
    $rt_throw(var$4);
},
ui_Client_repaint = () => {
    let var$1, var$2, var$3;
    ui_Client_$callClinit();
    ui_Client_context.$context.clearRect(0.0, 0.0, 1000.0, 800.0);
    jusi_SimpleIntStreamImpl_forEachOrdered(jusi_SimpleIntStreamImpl_filter(jus_IntStream_range(0, ui_Client_model.data.length), new ui_Client$repaint$lambda$_2_0), new ui_Client$repaint$lambda$_2_1);
    var$1 = ui_Client_selected;
    var$1 = var$1 === null ? ju_BitSet__init_() : ui_Client_model.data[var$1.$value].$points0;
    var$2 = ju_BitSet_stream(ui_Client_visualizer.$points());
    var$3 = new ui_Client$drawPoints$lambda$_3_0;
    var$3.$_00 = var$1;
    jusi_SimpleIntStreamImpl_forEachOrdered(var$2, var$3);
},
ui_Client__clinit_ = () => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13;
    var$1 = new uid_UnitalVisualizer;
    uid_STS13Visualizer_$callClinit();
    var$2 = uid_STS13Visualizer_first;
    var$3 = uid_STS13Visualizer_second;
    var$4 = new ju_TemplateCollections$NEtriesMap;
    var$5 = $rt_createArray(ju_Map$Entry, 3).data;
    var$5[0] = ju_Map_entry($rt_s(3), var$1);
    var$5[1] = ju_Map_entry($rt_s(4), var$2);
    var$5[2] = ju_Map_entry($rt_s(5), var$3);
    var$6 = var$5.length;
    var$7 = $rt_createArray(ju_Map$Entry, var$6);
    var$8 = var$7.data;
    var$9 = null;
    var$10 = 0;
    var$11 = var$8.length;
    if (var$10 > var$11) {
        var$9 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$9);
        $rt_throw(var$9);
    }
    while (var$10 < var$11) {
        var$12 = var$10 + 1 | 0;
        var$8[var$10] = var$9;
        var$10 = var$12;
    }
    var$10 = 0;
    a: while (true) {
        if (var$10 >= var$6) {
            var$4.$data = var$7;
            ui_Client_visualizers = var$4;
            var$9 = new uiu_HTMLUIFactory;
            uiu_HTMLUIFactory_$callClinit();
            ui_Client_ui = var$9;
            var$9 = (otjdh_HTMLDocument_current()).createElement("canvas");
            var$1 = new uiuci_HTMLCanvas;
            uiuci_HTMLComponent__init_(var$1, var$9);
            var$9 = var$1.$elem;
            var$2 = 1000;
            var$9.width = var$2;
            var$9 = var$1.$elem;
            var$2 = 800;
            var$9.height = var$2;
            ui_Client_canvas = var$1;
            var$1 = (otjdh_HTMLDocument_current()).createElement("select");
            var$9 = new uiuci_HTMLSelect;
            uiuci_HTMLComponent__init_(var$9, var$1);
            ui_Client_select = var$9;
            var$9 = ui_Client_canvas;
            var$1 = new uiuci_HTMLGraphicsContext;
            var$1.$context = var$9.$elem.getContext("2d");
            ui_Client_context = var$1;
            var$9 = new uid_UnitalVisualizer;
            ui_Client_visualizer = var$9;
            ui_Client_model = uid_Visualizer_model(var$9);
            return;
        }
        var$1 = var$5[var$10];
        ju_Objects_requireNonNull(var$1.$key);
        ju_Objects_requireNonNull(var$1.$value0);
        var$11 = jl_Math_abs(var$1.$key.$hashCode()) % var$6 | 0;
        var$12 = 0;
        var$13 = var$11;
        b: {
            while (var$13 < var$6) {
                var$9 = var$8[var$13];
                if (var$9 === null) {
                    var$12 = 1;
                    break b;
                }
                if (var$9.$key.$equals(var$1.$key)) {
                    var$9 = new jl_IllegalArgumentException;
                    jl_Exception__init_(var$9);
                    $rt_throw(var$9);
                }
                var$13 = var$13 + 1 | 0;
            }
        }
        c: {
            if (!var$12) {
                var$13 = 0;
                while (var$13 < var$11) {
                    var$9 = var$8[var$13];
                    if (var$9 === null)
                        break c;
                    if (var$9.$key.$equals(var$1.$key))
                        break a;
                    var$13 = var$13 + 1 | 0;
                }
            }
        }
        var$8[var$13] = ju_TemplateCollections$ImmutableEntry__init_(var$1.$key, var$1.$value0);
        var$10 = var$10 + 1 | 0;
    }
    var$9 = new jl_IllegalArgumentException;
    jl_Exception__init_(var$9);
    $rt_throw(var$9);
};
let jlr_AnnotatedElement = $rt_classWithoutFields(0);
let jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class_getClass = $cls => {
    let $result, var$3;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null) {
        $result = new jl_Class;
        $result.$platformClass = $cls;
        var$3 = $result;
        $cls.classObject = var$3;
    }
    return $result;
},
jl_Class_getPlatformClass = $this => {
    return $this.$platformClass;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass($this.$platformClass.$meta.item);
},
jl_Class_getSuperclass = $this => {
    return jl_Class_getClass($this.$platformClass.$meta.superclass);
};
let otji_JS = $rt_classWithoutFields();
let otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otji_JS_functionAsObject = (var$1, var$2) => {
    if (typeof var$1 !== 'function') return var$1;
    let result = {  };
    result[var$2] = var$1;
    return result;
};
let otp_Platform = $rt_classWithoutFields();
let otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
otp_Platform_getEnumConstants = var$1 => {
    let c = '$$enumConstants$$';
    uiu_LineConf$Children[c] = uiu_LineConf$Children_values;
    uiu_MouseEvt$Type[c] = uiu_MouseEvt$Type_values;
    jus_Collector$Characteristics[c] = jus_Collector$Characteristics_values;
    uid_TextColor[c] = uid_TextColor_values;
    otp_Platform_getEnumConstants = cls => {
        if (!cls.hasOwnProperty(c)) {
            return null;
        }
        if (typeof cls[c] === "function") {
            cls[c] = cls[c]();
        }
        return cls[c];
    };
    return otp_Platform_getEnumConstants(var$1);
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    let var$1;
    var$1 = $this.$cause;
    if (var$1 === $this)
        var$1 = null;
    return var$1;
};
let jl_Exception = $rt_classWithoutFields(jl_Throwable);
let jl_Exception__init_ = $this => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
},
jl_Exception__init_0 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
};
let jl_RuntimeException = $rt_classWithoutFields(jl_Exception);
let jl_RuntimeException__init_0 = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_1 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_0);
    return var_0;
},
jl_RuntimeException__init_2 = ($this, $message) => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
},
jl_RuntimeException__init_ = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_2(var_1, var_0);
    return var_1;
};
let jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException);
let ji_Serializable = $rt_classWithoutFields(0);
let jl_Comparable = $rt_classWithoutFields(0);
let jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    jl_Object.call(this);
    this.$hashCode2 = 0;
}
let jl_String_EMPTY_CHARS = null, jl_String_EMPTY = null, jl_String_CASE_INSENSITIVE_ORDER = null;
let jl_String__init_1 = $this => {
    $this.$nativeString = "";
},
jl_String__init_2 = () => {
    let var_0 = new jl_String();
    jl_String__init_1(var_0);
    return var_0;
},
jl_String__init_3 = ($this, $characters) => {
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, $characters.data.length);
},
jl_String__init_0 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_3(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_4(var_1, var_0);
    return var_1;
},
jl_String_charAt = (var$0, var$1) => {
    let var$2;
    if (var$1 >= 0 && var$1 < var$0.$nativeString.length)
        return var$0.$nativeString.charCodeAt(var$1);
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode2) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode2 = (31 * $this.$hashCode2 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode2;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_2();
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_112_0;
};
let jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value = 0;
}
let jl_Integer_TYPE = null, jl_Integer_integerCache = null;
let jl_Integer__init_ = ($this, $value) => {
    $this.$value = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_valueOf = $i => {
    let var$2, var$3;
    if ($i >= (-128) && $i <= 127) {
        a: {
            if (jl_Integer_integerCache === null) {
                jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                var$2 = 0;
                while (true) {
                    var$3 = jl_Integer_integerCache.data;
                    if (var$2 >= var$3.length)
                        break a;
                    var$3[var$2] = jl_Integer__init_0(var$2 - 128 | 0);
                    var$2 = var$2 + 1 | 0;
                }
            }
        }
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_doubleValue = $this => {
    return $this.$value;
},
jl_Integer_toString = $this => {
    let var$1;
    var$1 = $this.$value;
    return (jl_AbstractStringBuilder_append(jl_AbstractStringBuilder__init_(20), var$1, 10)).$toString();
},
jl_Integer_hashCode = $this => {
    return $this.$value;
},
jl_Integer_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Integer && $other.$value == $this.$value ? 1 : 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 << 8;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i << 4;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 << 2;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length = 0;
}
let jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_ = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append = ($this, $value, $radix) => {
    return jl_AbstractStringBuilder_insert($this, $this.$length, $value, $radix);
},
jl_AbstractStringBuilder_insert = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                $positive = $target;
            else {
                var$5 = $this.$buffer.data;
                $positive = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                $target = $positive + 1 | 0;
                var$5[$positive] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                $positive = $target;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_insert0 = ($this, $target, $value) => {
    let $intDigit, var$4, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, $pos, $i;
    $intDigit = $rt_compare($value, 0.0);
    if (!$intDigit) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            $intDigit = $target + 1 | 0;
            var$4[$target] = 48;
            $target = $intDigit + 1 | 0;
            var$4[$intDigit] = 46;
            var$4[$target] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 45;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 48;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 46;
        var$4[$intDigit] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 78;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 97;
        var$4[$target] = 78;
        return $this;
    }
    if (!isFinite($value) ? 1 : 0) {
        if ($intDigit > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            $intDigit = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            $intDigit = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 73;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 110;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 102;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 110;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 116;
        var$4[$target] = 121;
        return $this;
    }
    $number = jl_AbstractStringBuilder$Constants_doubleAnalysisResult;
    otcit_DoubleAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent0;
    $negative = $number.$sign0;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 18;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if (!($exp > (-100) && $exp < 100))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + ($sz + ($digits + $leadingZeros | 0) | 0) | 0);
    if (!$negative)
        $sz = $target;
    else {
        var$4 = $this.$buffer.data;
        $sz = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = Long_create(1569325056, 23283064);
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        $target = $sz + 1 | 0;
        var$4[$sz] = 48;
        $sz = $target + 1 | 0;
        var$4[$target] = 46;
        while (true) {
            $target = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            $intDigit = $sz + 1 | 0;
            var$4[$sz] = 48;
            $leadingZeros = $target;
            $sz = $intDigit;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if (Long_le($pos, Long_ZERO))
            $intDigit = 0;
        else {
            $intDigit = Long_lo(Long_div($mantissa, $pos));
            $mantissa = Long_rem($mantissa, $pos);
        }
        var$4 = $this.$buffer.data;
        $target = $sz + 1 | 0;
        var$4[$sz] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            $sz = $target;
        else {
            $sz = $target + 1 | 0;
            var$4[$target] = 46;
        }
        $pos = Long_div($pos, Long_fromInt(10));
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        $negative = $sz + 1 | 0;
        var$4[$sz] = 69;
        if ($exp >= 0)
            $intDigit = $negative;
        else {
            $exp =  -$exp | 0;
            $intDigit = $negative + 1 | 0;
            var$4[$negative] = 45;
        }
        if ($exp >= 100) {
            $target = $intDigit + 1 | 0;
            var$4[$intDigit] = (48 + ($exp / 100 | 0) | 0) & 65535;
            $exp = $exp % 100 | 0;
            $negative = $target + 1 | 0;
            var$4[$target] = (48 + ($exp / 10 | 0) | 0) & 65535;
        } else if ($exp < 10)
            $negative = $intDigit;
        else {
            $negative = $intDigit + 1 | 0;
            var$4[$intDigit] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        var$4[$negative] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_trailingDecimalZeros = $n => {
    let $zeros, $result, $bit, var$5, $i;
    $zeros = Long_fromInt(1);
    $result = 0;
    $bit = 16;
    var$5 = jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data;
    $i = var$5.length - 1 | 0;
    while ($i >= 0) {
        if (Long_eq(Long_rem($n, Long_mul($zeros, var$5[$i])), Long_ZERO)) {
            $result = $result | $bit;
            $zeros = Long_mul($zeros, var$5[$i]);
        }
        $bit = $bit >>> 1 | 0;
        $i = $i + (-1) | 0;
    }
    return $result;
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let var$2, $newLength, var$4, var$5, var$6;
    var$2 = $this.$buffer.data.length;
    if (var$2 >= $capacity)
        return;
    $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max(var$2 * 2 | 0, 5));
    var$4 = $this.$buffer.data;
    var$5 = $rt_createCharArray($newLength);
    var$6 = var$5.data;
    $capacity = jl_Math_min($newLength, var$4.length);
    var$2 = 0;
    while (var$2 < $capacity) {
        var$6[var$2] = var$4[var$2];
        var$2 = var$2 + 1 | 0;
    }
    $this.$buffer = var$5;
},
jl_AbstractStringBuilder_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = new jl_String;
    var$2 = $this.$buffer;
    var$3 = var$2.data;
    var$4 = $this.$length;
    var$5 = var$3.length;
    if (var$4 >= 0 && var$4 <= (var$5 - 0 | 0)) {
        var$1.$nativeString = $rt_charArrayToString(var$2.data, 0, var$4);
        return var$1;
    }
    var$1 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6;
    var$3 = $this.$length;
    $sz = var$3 - $start | 0;
    $this.$ensureCapacity((var$3 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length = $this.$length + ($end - $start | 0) | 0;
};
let jl_Appendable = $rt_classWithoutFields(0);
let jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder);
let jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder__init_1 = ($this, $value) => {
    let var$2, var$3;
    $this.$buffer = $rt_createCharArray($value.$nativeString.length);
    var$2 = 0;
    while (true) {
        var$3 = $this.$buffer.data;
        if (var$2 >= var$3.length)
            break;
        var$3[var$2] = jl_String_charAt($value, var$2);
        var$2 = var$2 + 1 | 0;
    }
    $this.$length = $value.$nativeString.length;
},
jl_StringBuilder__init_2 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_StringBuilder_insert($this, $this.$length, $obj === null ? $rt_s(6) : $obj.$toString());
    return $this;
},
jl_StringBuilder_append1 = ($this, $string) => {
    jl_StringBuilder_insert($this, $this.$length, $string);
    return $this;
},
jl_StringBuilder_append2 = ($this, $value) => {
    jl_AbstractStringBuilder_append($this, $value, 10);
    return $this;
},
jl_StringBuilder_append3 = ($this, $value) => {
    jl_AbstractStringBuilder_insert0($this, $this.$length, $value);
    return $this;
},
jl_StringBuilder_append0 = ($this, $c) => {
    let var$2;
    var$2 = $this.$length;
    jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 1 | 0);
    $this.$buffer.data[var$2] = $c;
    return $this;
},
jl_StringBuilder_isEmpty = $this => {
    return $this.$length ? 0 : 1;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    if (var$1 >= 0 && var$1 <= $this.$length) {
        a: {
            if (var$2 === null)
                var$2 = $rt_s(6);
            else if (var$2.$nativeString.length ? 0 : 1)
                break a;
            jl_AbstractStringBuilder_ensureCapacity($this, $this.$length + var$2.$nativeString.length | 0);
            var$3 = $this.$length - 1 | 0;
            while (var$3 >= var$1) {
                $this.$buffer.data[var$3 + var$2.$nativeString.length | 0] = $this.$buffer.data[var$3];
                var$3 = var$3 + (-1) | 0;
            }
            $this.$length = $this.$length + var$2.$nativeString.length | 0;
            var$4 = 0;
            while (var$4 < var$2.$nativeString.length) {
                var$5 = $this.$buffer.data;
                var$6 = var$1 + 1 | 0;
                var$5[var$1] = jl_String_charAt(var$2, var$4);
                var$4 = var$4 + 1 | 0;
                var$1 = var$6;
            }
        }
        return $this;
    }
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
};
function uiu_LineConf() {
    let a = this; jl_Object.call(a);
    a.$gap0 = 0;
    a.$children = null;
    a.$align = null;
    a.$stretch = 0;
}
let uiu_LineConf_EMPTY = null;
let uiu_LineConf_gap = $gap => {
    let var$2, var$3, var$4;
    var$2 = new uiu_LineConf;
    var$3 = null;
    var$4 = null;
    var$2.$gap0 = $gap;
    var$2.$children = var$3;
    var$2.$align = var$4;
    var$2.$stretch = 0;
    return var$2;
},
uiu_LineConf__clinit_ = () => {
    uiu_LineConf_EMPTY = uiu_LineConf_gap(0);
};
let jl_Record = $rt_classWithoutFields();
function uiu_Box() {
    let a = this; jl_Record.call(a);
    a.$margin = 0;
    a.$border = null;
    a.$padding0 = 0;
}
let uiu_Box_padding = $padding => {
    let var$2, var$3;
    var$2 = new uiu_Box;
    var$3 = null;
    var$2.$margin = 0;
    var$2.$border = var$3;
    var$2.$padding0 = $padding;
    return var$2;
};
let juf_Consumer = $rt_classWithoutFields(0);
let ui_Client$main$lambda$_1_0 = $rt_classWithoutFields();
let ui_Client$main$lambda$_1_0_accept = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    var$1 = var$1;
    ui_Client_$callClinit();
    var$2 = uid_Point__init_(var$1.$e.offsetX, var$1.$e.offsetY);
    var$1 = jusi_SimpleIntStreamImpl_boxed(jus_IntStream_range(0, ui_Client_model.data.length));
    var$3 = new juf_Function$identity$lambda$_3_0;
    var$4 = new ui_Client$lambda$main$1$lambda$_10_0;
    var$4.$_01 = var$2;
    var$5 = new jus_Collectors$toMap$lambda$_12_1;
    var$5.$_02 = var$3;
    var$5.$_1 = var$4;
    var$6 = $rt_createArray(jus_Collector$Characteristics, 1);
    var$6.data[0] = jus_Collector$Characteristics_IDENTITY_FINISH;
    var$7 = new ju_GenericEnumSet;
    ju_AbstractSet__init_(var$7);
    var$7.$cls = $rt_cls(jus_Collector$Characteristics);
    var$2 = jl_Class_getPlatformClass($rt_cls(jus_Collector$Characteristics));
    var$2.$clinit();
    var$8 = otp_Platform_getEnumConstants(var$2);
    if (var$8 === null) {
        var$1 = new jl_ClassCastException;
        jl_RuntimeException__init_0(var$1);
        $rt_throw(var$1);
    }
    var$9 = var$8.data.length;
    var$9 = !var$9 ? 0 : ((var$9 - 1 | 0) / 32 | 0) + 1 | 0;
    a: {
        var$7.$bits = $rt_createIntArray(var$9);
        ju_Objects_requireNonNull(var$6);
        var$10 = new ju_Arrays$ArrayAsList;
        ju_AbstractCollection__init_(var$10);
        var$10.$array = var$6;
        if (var$10 instanceof ju_GenericEnumSet) {
            var$2 = var$10;
            if (var$7.$cls === var$2.$cls) {
                var$9 = 0;
                while (true) {
                    var$6 = var$7.$bits.data;
                    if (var$9 >= var$6.length)
                        break;
                    var$11 = var$6[var$9];
                    var$8 = var$2.$bits.data;
                    if ((var$11 | var$8[var$9]) != var$6[var$9])
                        var$6[var$9] = var$6[var$9] | var$8[var$9];
                    var$9 = var$9 + 1 | 0;
                }
                break a;
            }
        }
        var$4 = ju_AbstractList$1__init_(var$10);
        while (var$4.$index >= var$4.$size ? 0 : 1) {
            ju_AbstractList$1_checkConcurrentModification(var$4);
            var$11 = var$4.$index;
            var$4.$removeIndex = var$11;
            var$2 = var$4.$this$00;
            var$4.$index = var$11 + 1 | 0;
            if (!ju_GenericEnumSet_add(var$7, ju_Arrays$ArrayAsList_get(var$2, var$11)))
                continue;
        }
    }
    var$4 = new ju_HashMap;
    ju_AbstractMap__init_(var$4);
    var$9 = ju_HashMap_calculateCapacity(16);
    var$4.$elementCount = 0;
    var$4.$elementData = ju_HashMap_newElementArray(var$4, var$9);
    var$4.$loadFactor = 0.75;
    ju_HashMap_computeThreshold(var$4);
    while (true) {
        var$2 = new jusi_SimpleStreamImpl$collect$lambda$_26_0;
        var$2.$_03 = var$5;
        var$2.$_10 = var$4;
        if (!jusi_BoxedIntStream_next(var$1, var$2))
            break;
    }
    var$1 = jusi_SimpleIntStreamImpl_boxed(jus_IntStream_range(0, ui_Client_model.data.length));
    ju_Objects_requireNonNull(var$4);
    var$2 = new ui_Client$lambda$main$1$lambda$_10_1;
    var$2.$_04 = var$4;
    var$3 = new ju_Comparator$comparingDouble$lambda$_16_0;
    var$3.$_05 = var$2;
    var$2 = new jusi_SimpleStreamImpl$min$lambda$_27_0;
    var$2.$_06 = var$3;
    var$3 = jusi_ReducingConsumer__init_(var$2, null, 0);
    while (jusi_BoxedIntStream_next(var$1, var$3)) {
    }
    var$1 = (ju_Optional_ofNullable(var$3.$result)).$value1;
    if (var$1 === null) {
        var$1 = new ju_NoSuchElementException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    var$1 = var$1;
    if ((ju_HashMap_get(var$4, var$1)).$value2 >= 3.0)
        var$1 = null;
    ui_Client_selected = var$1;
    ui_Client_repaint();
};
let juf_BiConsumer = $rt_classWithoutFields(0);
let ui_Client$main$lambda$_1_1 = $rt_classWithoutFields();
let ui_Client$main$lambda$_1_2 = $rt_classWithoutFields();
let ui_Client$main$lambda$_1_2_accept = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6;
    a: {
        var$1 = var$1;
        ui_Client_$callClinit();
        var$2 = ui_Client_visualizers;
        var$3 = var$1.$value3;
        if (var$3 === null)
            var$1 = null;
        else {
            var$4 = jl_Math_abs(jl_String_hashCode(var$3)) % var$2.$data.data.length | 0;
            var$5 = var$4;
            while (true) {
                var$6 = var$2.$data.data;
                if (var$5 >= var$6.length) {
                    var$5 = 0;
                    while (var$5 < var$4) {
                        var$1 = var$2.$data.data[var$5];
                        if (var$1.$key.$equals(var$3)) {
                            var$1 = var$1.$value0;
                            break a;
                        }
                        var$5 = var$5 + 1 | 0;
                    }
                    var$1 = null;
                    break a;
                }
                var$1 = var$6[var$5];
                if (var$1.$key.$equals(var$3))
                    break;
                var$5 = var$5 + 1 | 0;
            }
            var$1 = var$1.$value0;
        }
    }
    var$1 = var$1;
    ui_Client_visualizer = var$1;
    ui_Client_model = uid_Visualizer_model(var$1);
    ui_Client_selected = null;
    ui_Client_repaint();
};
let otci_IntegerUtil = $rt_classWithoutFields();
let uid_Visualizer = $rt_classWithoutFields(0);
let uid_Visualizer_bezier = ($this, $line) => {
    let var$2, $points, var$4, var$5, $result, var$7, $i, var$9, $i_0, var$11;
    $line = ju_BitSet_stream($line);
    var$2 = new uid_Visualizer$bezier$lambda$_3_0;
    var$2.$_07 = $this;
    $points = (jusi_SimpleStreamImpl_toArray(jusi_SimpleIntStreamImpl_mapToObj($line, var$2), new uid_Visualizer$bezier$lambda$_3_1)).data;
    var$4 = $points.length;
    var$5 = var$4 - 1 | 0;
    $result = $rt_createArray($rt_arraycls(uid_Point), var$5);
    var$7 = $result.data;
    var$7[0] = uid_Visualizer_bezierForPoints(uid_Point_add($points[0], uid_Point_mul(uid_Point_subtract($points[0], $points[1]), 0.001)), $points[0], $points[1], $points[2]);
    $i = 0;
    var$9 = var$4 - 3 | 0;
    while ($i < var$9) {
        $i_0 = $i + 1 | 0;
        var$7[$i_0] = uid_Visualizer_bezierForPoints($points[$i], $points[$i_0], $points[$i + 2 | 0], $points[$i + 3 | 0]);
        $i = $i_0;
    }
    var$11 = var$4 - 2 | 0;
    var$7[var$11] = uid_Visualizer_bezierForPoints($points[var$9], $points[var$11], $points[var$5], uid_Point_add($points[var$5], uid_Point_mul(uid_Point_subtract($points[var$5], $points[var$11]), 0.001)));
    return $result;
},
uid_Visualizer_model = $this => {
    let var$1, var$2;
    var$1 = ju_Arrays_stream($this.$lines());
    var$2 = new uid_Visualizer$model$lambda$_4_0;
    var$2.$_08 = $this;
    return jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_map(var$1, var$2), new uid_Visualizer$model$lambda$_4_1);
},
uid_Visualizer_bezierForPoints = ($p0, $p1, $p2, $p3) => {
    let $d1, $d2, $d3, $a, $b, $d, $t2y, $c, $t1x, $t1y, $t1;
    $d1 = jl_Math_pow(uid_Point_dist($p1, $p0), 0.5);
    $d2 = jl_Math_pow(uid_Point_dist($p2, $p1), 0.5);
    $d3 = jl_Math_pow(uid_Point_dist($p3, $p2), 0.5);
    $a = $d1 * $d1;
    $b = $d2 * $d2;
    $d = 2.0 * $d1 * $d1;
    $t2y = 3.0 * $d1;
    $c = $d + $t2y * $d2 + $b;
    $d = $t2y * ($d1 + $d2);
    $t1x = ($a * $p2.$x - $b * $p0.$x + $c * $p1.$x) / $d;
    $t1y = ($a * $p2.$y - $b * $p0.$y + $c * $p1.$y) / $d;
    $t1 = uid_Point__init_($t1x, $t1y);
    $a = $d3 * $d3;
    $t2y = 2.0 * $d3 * $d3;
    $d = 3.0 * $d3;
    $c = $t2y + $d * $d2 + $b;
    $d = $d * ($d3 + $d2);
    return $rt_wrapArray(uid_Point, [$p1, $t1, uid_Point__init_(($a * $p1.$x - $b * $p3.$x + $c * $p2.$x) / $d, ($a * $p1.$y - $b * $p3.$y + $c * $p2.$y) / $d), $p2]);
};
let uid_UnitalVisualizer = $rt_classWithoutFields();
let uid_UnitalVisualizer_coordinate = ($this, $p) => {
    if ($p >= 81)
        return uid_Point__init_(900.0, ((($p - 81 | 0) - 4 | 0) * 99 | 0) + 400 | 0);
    return uid_Point__init_(((($p / 9 | 0) - 4 | 0) * 99 | 0) + 400 | 0, ((($p % 9 | 0) - 4 | 0) * 99 | 0) + 400 | 0);
},
uid_UnitalVisualizer_lines = $this => {
    return uid_F9Point_generateUnital();
},
uid_UnitalVisualizer_points = $this => {
    let var$1, var$2, var$3;
    var$1 = ju_Arrays_stream(uid_F9Point_generateUnital());
    var$2 = new uid_UnitalVisualizer$points$lambda$_3_0;
    var$3 = new jusi_FlatMappingToIntStreamImpl;
    var$3.$sourceStream = var$1;
    var$3.$mapper = var$2;
    return jusi_SimpleIntStreamImpl_collect(var$3, new uid_UnitalVisualizer$points$lambda$_3_1, new uid_UnitalVisualizer$points$lambda$_3_2, new uid_UnitalVisualizer$points$lambda$_3_3);
};
function uid_STS13Visualizer() {
    jl_Object.call(this);
    this.$lines0 = null;
}
let uid_STS13Visualizer_first = null, uid_STS13Visualizer_second = null;
let uid_STS13Visualizer_$callClinit = () => {
    uid_STS13Visualizer_$callClinit = $rt_eraseClinit(uid_STS13Visualizer);
    uid_STS13Visualizer__clinit_();
};
let uid_STS13Visualizer__init_ = ($this, $design) => {
    let var$2, var$3;
    uid_STS13Visualizer_$callClinit();
    var$2 = jus_IntStream_range(0, $design.data[0].$nativeString.length);
    var$3 = new uid_STS13Visualizer$_init_$lambda$_0_0;
    var$3.$_09 = $design;
    $this.$lines0 = jusi_SimpleStreamImpl_toArray(jusi_SimpleIntStreamImpl_mapToObj(var$2, var$3), new uid_STS13Visualizer$_init_$lambda$_0_1);
},
uid_STS13Visualizer__init_0 = var_0 => {
    let var_1 = new uid_STS13Visualizer();
    uid_STS13Visualizer__init_(var_1, var_0);
    return var_1;
},
uid_STS13Visualizer_coordinate = ($this, $p) => {
    let $r, $alpha, var$4, var$5;
    if (!$p)
        return uid_Point__init_(500.0, 400.0);
    $p = $p - 1 | 0;
    $r = $p % 2 | 0 ? 360 : 180;
    $alpha = ($p / 2 | 0) * 3.141592653589793 / 3.0;
    var$4 = new uid_Point;
    var$5 = $r;
    uid_Point__init_0(var$4, var$5 * jl_Math_cos($alpha) + 500.0, var$5 * jl_Math_sin($alpha) + 400.0);
    return var$4;
},
uid_STS13Visualizer_lines = $this => {
    return $this.$lines0;
},
uid_STS13Visualizer_points = $this => {
    let $result, var$2;
    $result = ju_BitSet__init_();
    if (13 > $result.$length0) {
        ju_BitSet_ensureCapacity($result, 1);
        $result.$length0 = 13;
    }
    var$2 = $result.$data0.data;
    var$2[0] = var$2[0] | ju_BitSet_trailingZeroBits($result, 0) & ju_BitSet_trailingOneBits($result, 13);
    return $result;
},
uid_STS13Visualizer__clinit_ = () => {
    uid_STS13Visualizer_first = uid_STS13Visualizer__init_0($rt_wrapArray(jl_String, [$rt_s(7), $rt_s(8), $rt_s(9)]));
    uid_STS13Visualizer_second = uid_STS13Visualizer__init_0($rt_wrapArray(jl_String, [$rt_s(7), $rt_s(8), $rt_s(10)]));
};
let ju_Map = $rt_classWithoutFields(0);
let ju_Map_entry = ($k, $v) => {
    return ju_TemplateCollections$ImmutableEntry__init_(ju_Objects_requireNonNull($k), ju_Objects_requireNonNull($v));
};
let uiu_UIFactory = $rt_classWithoutFields(0);
let uiu_HTMLUIFactory = $rt_classWithoutFields();
let uiu_HTMLUIFactory_ROOT = null;
let uiu_HTMLUIFactory_$callClinit = () => {
    uiu_HTMLUIFactory_$callClinit = $rt_eraseClinit(uiu_HTMLUIFactory);
    uiu_HTMLUIFactory__clinit_();
};
let uiu_HTMLUIFactory_lineLayout = ($this, $horizontal, $conf) => {
    let $elem, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    $elem = (otjdh_HTMLDocument_current()).createElement("div");
    var$4 = $elem.classList;
    var$5 = !$horizontal ? $rt_s(11) : $rt_s(12);
    var$4.add($rt_ustr(var$5));
    if ($conf.$align !== null) {
        var$4 = $elem.classList;
        var$5 = $conf.$align.$name0;
        var$6 = $rt_createCharArray(var$5.$nativeString.length);
        var$7 = var$6.data;
        var$8 = 0;
        while (var$8 < var$5.$nativeString.length) {
            var$7[var$8] = jl_String_charAt(var$5, var$8) != 95 ? jl_String_charAt(var$5, var$8) : 45;
            var$8 = var$8 + 1 | 0;
        }
        var$9 = jl_String__init_2();
        var$9.$nativeString = $rt_fullArrayToString(var$6.data);
        var$5 = var$9.$nativeString.toLowerCase();
        if (var$5 !== var$9.$nativeString)
            var$9 = jl_String__init_(var$5);
        var$4.add($rt_ustr(var$9));
    }
    var$5 = $conf.$children;
    if (var$5 === uiu_LineConf$Children_MAX_DIST)
        $elem.classList.add("max-distance");
    else if (var$5 === uiu_LineConf$Children_SPLIT_DIST)
        $elem.classList.add("split-distance");
    else if ($conf.$gap0) {
        var$5 = $elem.style;
        $horizontal = $conf.$gap0;
        var$10 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append2(var$10, $horizontal), $rt_s(13));
        var$9 = jl_AbstractStringBuilder_toString(var$10);
        var$5.setProperty("gap", $rt_ustr(var$9));
    }
    if ($conf.$stretch)
        $elem.classList.add("stretch");
    $conf = new uiuci_HTMLContainer;
    uiuci_HTMLComponent__init_($conf, $elem);
    return $conf;
},
uiu_HTMLUIFactory__clinit_ = () => {
    let var$1;
    var$1 = new uiuci_HTMLContainer;
    uiuci_HTMLComponent__init_(var$1, (otjdh_HTMLDocument_current()).body);
    uiu_HTMLUIFactory_ROOT = var$1;
};
let jl_AutoCloseable = $rt_classWithoutFields(0);
let jus_BaseStream = $rt_classWithoutFields(0);
let jus_IntStream = $rt_classWithoutFields(0);
let jus_IntStream_range = ($startInclusive, $endExclusive) => {
    let var$3;
    var$3 = new jusi_RangeIntStream;
    var$3.$start = $startInclusive;
    var$3.$end = $endExclusive;
    return var$3;
};
let juf_IntPredicate = $rt_classWithoutFields(0);
let ui_Client$repaint$lambda$_2_0 = $rt_classWithoutFields();
let ui_Client$repaint$lambda$_2_0_test = (var$0, var$1) => {
    let var$2;
    ui_Client_$callClinit();
    var$2 = ui_Client_selected;
    return var$2 !== null && var$1 != var$2.$value ? 0 : 1;
};
let juf_IntConsumer = $rt_classWithoutFields(0);
let ui_Client$repaint$lambda$_2_1 = $rt_classWithoutFields();
let ui_Client$repaint$lambda$_2_1_accept = (var$0, var$1) => {
    let var$2, var$3, var$4;
    ui_Client_$callClinit();
    var$2 = ui_Client_model.data[var$1];
    var$3 = ui_Client_context;
    var$4 = var$2.$color0;
    var$3 = var$3.$context;
    var$4 = $rt_ustr(var$4.$name0);
    var$3.strokeStyle = var$4;
    jusi_SimpleStreamImpl_forEach(ju_Arrays_stream(var$2.$bezier0), new ui_Client$drawLine$lambda$_4_0);
};
let ju_Comparator = $rt_classWithoutFields(0);
let jl_String$_clinit_$lambda$_112_0 = $rt_classWithoutFields();
let jl_Character = $rt_classWithoutFields();
let jl_Character_TYPE = null, jl_Character_digitMapping = null, jl_Character_characterCache = null, jl_Character_$$metadata$$3 = null;
let jl_Character_forDigit = ($digit, $radix) => {
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
    + "%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
};
let ju_AbstractMap = $rt_classWithoutFields();
let ju_AbstractMap__init_ = $this => {
    return;
},
ju_AbstractMap_equals = ($this, $obj) => {
    let $other, $it, $entry, $$je;
    if ($this === $obj)
        return 1;
    if (!$rt_isInstance($obj, ju_Map))
        return 0;
    $other = $obj;
    if ($this.$elementCount != $other.$elementCount)
        return 0;
    a: {
        try {
            $it = ju_HashMap$HashMapEntrySet_iterator(ju_HashMap_entrySet($this));
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_ClassCastException) {
                break a;
            } else if ($$je instanceof jl_NullPointerException) {
                break a;
            } else {
                throw $$e;
            }
        }
        b: {
            c: {
                try {
                    while (ju_HashMap$AbstractMapIterator_hasNext($it)) {
                        $entry = ju_HashMap$EntryIterator_next($it);
                        if (!ju_HashMap_containsKey($other, ju_MapEntry_getKey($entry)))
                            break b;
                        if (!ju_Objects_equals(ju_MapEntry_getValue($entry), ju_HashMap_get($other, ju_MapEntry_getKey($entry))))
                            break c;
                    }
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_ClassCastException) {
                        break a;
                    } else if ($$je instanceof jl_NullPointerException) {
                        break a;
                    } else {
                        throw $$e;
                    }
                }
                return 1;
            }
            try {
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_ClassCastException) {
                    break a;
                } else if ($$je instanceof jl_NullPointerException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return 0;
        }
        try {
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_ClassCastException) {
                break a;
            } else if ($$je instanceof jl_NullPointerException) {
                break a;
            } else {
                throw $$e;
            }
        }
        return 0;
    }
    return 0;
},
ju_AbstractMap_hashCode = $this => {
    let $result, $iter, $entry;
    $result = 0;
    $iter = ju_HashMap$HashMapEntrySet_iterator(ju_HashMap_entrySet($this));
    while (ju_HashMap$AbstractMapIterator_hasNext($iter)) {
        $entry = ju_HashMap$EntryIterator_next($iter);
        $result = $result + (ju_Objects_hashCode($entry.$key0) ^ ju_Objects_hashCode($entry.$value4)) | 0;
    }
    return $result;
},
ju_AbstractMap_toString = $this => {
    let $sb, $iter, $e, var$4;
    $sb = jl_StringBuilder__init_();
    jl_StringBuilder_append0($sb, 123);
    $iter = ju_HashMap$HashMapEntrySet_iterator(ju_HashMap_entrySet($this));
    if (ju_HashMap$AbstractMapIterator_hasNext($iter)) {
        $e = ju_HashMap$EntryIterator_next($iter);
        var$4 = $e.$key0;
        if (var$4 === $this)
            var$4 = $rt_s(14);
        jl_StringBuilder_append($sb, var$4);
        jl_StringBuilder_append0($sb, 61);
        $e = $e.$value4;
        if ($e === $this)
            $e = $rt_s(14);
        jl_StringBuilder_append($sb, $e);
    }
    while (ju_HashMap$AbstractMapIterator_hasNext($iter)) {
        jl_StringBuilder_append1($sb, $rt_s(15));
        $e = ju_HashMap$EntryIterator_next($iter);
        var$4 = $e.$key0;
        if (var$4 === $this)
            var$4 = $rt_s(14);
        jl_StringBuilder_append($sb, var$4);
        jl_StringBuilder_append0($sb, 61);
        $e = $e.$value4;
        if ($e === $this)
            $e = $rt_s(14);
        jl_StringBuilder_append($sb, $e);
    }
    jl_StringBuilder_append0($sb, 125);
    return jl_AbstractStringBuilder_toString($sb);
};
let ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap);
function ju_TemplateCollections$NEtriesMap() {
    let a = this; ju_TemplateCollections$AbstractImmutableMap.call(a);
    a.$data = null;
    a.$entrySet0 = null;
}
let ju_Map$Entry = $rt_classWithoutFields(0);
let jusi_SimpleIntStreamImpl = $rt_classWithoutFields();
let jusi_SimpleIntStreamImpl_filter = ($this, $predicate) => {
    let var$2;
    var$2 = new jusi_FilteringIntStreamImpl;
    var$2.$sourceStream0 = $this;
    var$2.$filter1 = $predicate;
    return var$2;
},
jusi_SimpleIntStreamImpl_mapToObj = ($this, $mapper) => {
    let var$2;
    var$2 = new jusi_MappingToObjStreamImpl;
    var$2.$source = $this;
    var$2.$mapper0 = $mapper;
    return var$2;
},
jusi_SimpleIntStreamImpl_forEachOrdered = ($this, $action) => {
    let var$2;
    while (true) {
        var$2 = new jusi_SimpleIntStreamImpl$forEachOrdered$lambda$_15_0;
        var$2.$_010 = $action;
        if (!$this.$next1(var$2))
            break;
    }
},
jusi_SimpleIntStreamImpl_collect = ($this, $supplier, $accumulator, $combiner) => {
    let $collection;
    $collection = $supplier.$get1();
    while (true) {
        $supplier = new jusi_SimpleIntStreamImpl$collect$lambda$_19_0;
        $supplier.$_011 = $accumulator;
        $supplier.$_11 = $collection;
        if (!$this.$next1($supplier))
            break;
    }
    return $collection;
},
jusi_SimpleIntStreamImpl_boxed = $this => {
    let var$1;
    var$1 = new jusi_BoxedIntStream;
    var$1.$source0 = $this;
    return var$1;
},
jusi_SimpleIntStreamImpl_estimateSize = $this => {
    return (-1);
};
function jusi_RangeIntStream() {
    let a = this; jusi_SimpleIntStreamImpl.call(a);
    a.$start = 0;
    a.$end = 0;
}
let jusi_RangeIntStream_next = ($this, $consumer) => {
    let var$2;
    while (true) {
        var$2 = $this.$start;
        if (var$2 >= $this.$end)
            break;
        $this.$start = var$2 + 1 | 0;
        if ($consumer.$test(var$2))
            continue;
        else
            return 1;
    }
    return 0;
};
function uid_LineData() {
    let a = this; jl_Record.call(a);
    a.$points0 = null;
    a.$color0 = null;
    a.$bezier0 = null;
}
let uid_LineData_toString = $this => {
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder__init_2($rt_s(16)), $rt_s(17)), $this.$points0), $rt_s(18)), $this.$color0), $rt_s(19)), $this.$bezier0), $rt_s(20)));
},
uid_LineData_hashCode = $this => {
    return ((((31 + ju_Objects_hashCode($this.$points0) | 0) * 31 | 0) + ju_Objects_hashCode($this.$color0) | 0) * 31 | 0) + ju_Objects_hashCode($this.$bezier0) | 0;
},
uid_LineData_equals = ($this, $o) => {
    let var$2;
    if ($this === $o)
        var$2 = 1;
    else if ($o !== null && jl_Object_getClass($o) === $rt_cls(uid_LineData)) {
        $o = $o;
        var$2 = !ju_Objects_equals($this.$points0, $o.$points0) ? 0 : !ju_Objects_equals($this.$color0, $o.$color0) ? 0 : ju_Objects_equals($this.$bezier0, $o.$bezier0) ? 1 : 0;
    } else
        var$2 = 0;
    return var$2;
};
let jl_Cloneable = $rt_classWithoutFields(0);
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data0 = null;
    a.$length0 = 0;
}
let ju_BitSet__init_0 = $this => {
    $this.$data0 = $rt_createIntArray(2);
},
ju_BitSet__init_ = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet_set = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length0) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length0 = $bitIndex + 1 | 0;
    }
    var$4 = $this.$data0.data;
    var$4[$index] = var$4[$index] | 1 << ($bitIndex % 32 | 0);
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    return (-1) << ($num % 32 | 0);
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    $num = $num % 32 | 0;
    return !$num ? 0 : (-1) >>> (32 - $num | 0) | 0;
},
ju_BitSet_get = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    var$4 = $this.$data0.data;
    return $index < var$4.length && var$4[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let var$2, $top, $index, var$5, $i;
    if ($fromIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    $top = $this.$length0;
    if ($fromIndex >= $top)
        return (-1);
    $index = $fromIndex / 32 | 0;
    var$5 = $this.$data0.data;
    $i = var$5[$index] >>> ($fromIndex % 32 | 0) | 0;
    if ($i)
        return jl_Integer_numberOfTrailingZeros($i) + $fromIndex | 0;
    $top = ($top + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if (var$5[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$5[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength, var$3, var$4, var$5;
    $newArrayLength = $this.$data0.data.length;
    if ($newArrayLength >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($newArrayLength * 2 | 0) + 1 | 0);
    var$3 = $this.$data0.data;
    var$4 = $rt_createIntArray($newArrayLength);
    var$5 = var$4.data;
    $capacity = jl_Math_min($newArrayLength, var$3.length);
    $newArrayLength = 0;
    while ($newArrayLength < $capacity) {
        var$5[$newArrayLength] = var$3[$newArrayLength];
        $newArrayLength = $newArrayLength + 1 | 0;
    }
    $this.$data0 = var$4;
},
ju_BitSet_equals = ($this, $other) => {
    let $set, $sz, $i;
    if ($this === $other)
        return 1;
    if (!($other instanceof ju_BitSet))
        return 0;
    $set = $other;
    if ($set.$length0 != $this.$length0)
        return 0;
    $sz = jl_Math_min($this.$data0.data.length, $set.$data0.data.length);
    $i = 0;
    while ($i < $sz) {
        if ($this.$data0.data[$i] != $set.$data0.data[$i])
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
},
ju_BitSet_hashCode = $this => {
    let $h, $i, var$3, var$4, var$5, $words, var$7;
    $h = Long_fromInt(1234);
    $i = $this.$length0;
    var$3 = $rt_createLongArray(($i + 63 | 0) / 64 | 0).data;
    var$4 = $i / 64 | 0;
    var$5 = 0;
    while (var$5 < var$4) {
        $words = $this.$data0.data;
        var$7 = var$5 * 2 | 0;
        var$3[var$5] = Long_or(Long_fromInt($words[var$7]), Long_shl(Long_fromInt($words[var$7 + 1 | 0]), 32));
        var$5 = var$5 + 1 | 0;
    }
    if ((((31 + $i | 0) / 32 | 0) & 1) == 1)
        var$3[var$5] = Long_fromInt($this.$data0.data[var$5 * 2 | 0]);
    $i = var$3.length;
    while (true) {
        $i = $i + (-1) | 0;
        if ($i < 0)
            break;
        $h = Long_xor($h, Long_mul(var$3[$i], Long_fromInt($i + 1 | 0)));
    }
    return Long_lo(Long_xor(Long_shr($h, 32), $h));
},
ju_BitSet_toString = $this => {
    let $sb, $first, $i, var$4, $bit, $val, $numZeros, var$8;
    $sb = jl_StringBuilder__init_();
    jl_StringBuilder_append0($sb, 123);
    $first = 1;
    $i = 0;
    a: {
        while (true) {
            var$4 = $this.$data0.data;
            if ($i >= var$4.length)
                break a;
            $bit = $i * 32 | 0;
            if ($bit > $this.$length0)
                break;
            $val = var$4[$i];
            while ($val) {
                $numZeros = jl_Integer_numberOfTrailingZeros($val);
                var$8 = $bit + $numZeros | 0;
                if ($first)
                    $first = 0;
                else
                    jl_StringBuilder_append1($sb, $rt_s(15));
                $bit = var$8 + 1 | 0;
                jl_StringBuilder_append2($sb, var$8);
                $val = ($val >>> $numZeros | 0) >>> 1 | 0;
            }
            $i = $i + 1 | 0;
        }
    }
    jl_StringBuilder_append0($sb, 125);
    return jl_AbstractStringBuilder_toString($sb);
},
ju_BitSet_stream = $this => {
    let var$1;
    var$1 = new ju_BitSet$BitSetStream;
    var$1.$this$01 = $this;
    var$1.$current0 = ju_BitSet_nextSetBit($this, 0);
    return var$1;
};
function ui_Client$drawPoints$lambda$_3_0() {
    jl_Object.call(this);
    this.$_00 = null;
}
let ui_Client$drawPoints$lambda$_3_0_accept = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5;
    var$2 = var$0.$_00;
    ui_Client_$callClinit();
    var$3 = ui_Client_context;
    var$2 = !ju_BitSet_get(var$2, var$1) ? uiu_Color_BLACK : uiu_Color_RED;
    var$3 = var$3.$context;
    var$2 = $rt_ustr(uiu_HTMLUtil_convert(var$2));
    var$3.fillStyle = var$2;
    var$2 = ui_Client_visualizer.$coordinate(var$1);
    var$3 = ui_Client_context;
    var$4 = var$2.$x;
    var$5 = var$2.$y;
    var$3.$context.beginPath();
    var$3.$context.arc(var$4, var$5, 3.0, 0.0, 6.283185307179586);
    var$3.$context.fill();
};
let ju_Objects = $rt_classWithoutFields();
let ju_Objects_equals = ($a, $b) => {
    if ($a === $b)
        return 1;
    return $a !== null ? $a.$equals($b) : $b !== null ? 0 : 1;
},
ju_Objects_hashCode = $o => {
    return $o !== null ? $o.$hashCode() : 0;
},
ju_Objects_requireNonNull = $obj => {
    if ($obj !== null)
        return $obj;
    $obj = new jl_NullPointerException;
    jl_RuntimeException__init_2($obj, $rt_s(21));
    $rt_throw($obj);
};
function ju_TemplateCollections$ImmutableEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value0 = null;
}
let ju_TemplateCollections$ImmutableEntry__init_0 = ($this, $theKey, $theValue) => {
    $this.$key = $theKey;
    $this.$value0 = $theValue;
},
ju_TemplateCollections$ImmutableEntry__init_ = (var_0, var_1) => {
    let var_2 = new ju_TemplateCollections$ImmutableEntry();
    ju_TemplateCollections$ImmutableEntry__init_0(var_2, var_0, var_1);
    return var_2;
};
let uiuc_Component = $rt_classWithoutFields(0);
function uiuci_HTMLComponent() {
    jl_Object.call(this);
    this.$elem = null;
}
let uiuci_HTMLComponent__init_ = ($this, $elem) => {
    $this.$elem = $elem;
},
uiuci_HTMLComponent__init_0 = var_0 => {
    let var_1 = new uiuci_HTMLComponent();
    uiuci_HTMLComponent__init_(var_1, var_0);
    return var_1;
},
uiuci_HTMLComponent_getElem = $this => {
    return $this.$elem;
},
uiuci_HTMLComponent_box = ($this, $box) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    if ($box.$margin) {
        var$2 = $this.$elem.style;
        var$3 = $box.$margin;
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append2(var$4, var$3), $rt_s(13));
        var$4 = jl_AbstractStringBuilder_toString(var$4);
        var$2.setProperty("margin", $rt_ustr(var$4));
    }
    var$5 = (ju_Optional_ofNullable($box.$border)).$value1;
    if (var$5 !== null) {
        var$5 = var$5;
        var$6 = $this.$elem.style;
        var$3 = var$5.$width;
        var$7 = var$5.$type;
        var$2 = uiu_HTMLUtil_convert(var$5.$color1);
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append2(var$8, var$3), $rt_s(22)), var$7), 32), var$2);
        var$8 = jl_AbstractStringBuilder_toString(var$8);
        var$6.setProperty("border", $rt_ustr(var$8));
        if (var$5.$radius) {
            var$2 = $this.$elem.style;
            var$3 = var$5.$radius;
            var$5 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append2(var$5, var$3), $rt_s(13));
            var$6 = jl_AbstractStringBuilder_toString(var$5);
            var$2.setProperty("border-radius", $rt_ustr(var$6));
        }
    }
    if ($box.$padding0) {
        var$4 = $this.$elem.style;
        var$3 = $box.$padding0;
        $box = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append2($box, var$3), $rt_s(13));
        var$2 = jl_AbstractStringBuilder_toString($box);
        var$4.setProperty("padding", $rt_ustr(var$2));
    }
    return $this;
},
uiuci_HTMLComponent_addEventListener = ($this, $type, $listener) => {
    let var$3, var$4, var$5;
    a: {
        var$3 = (-1);
        switch (jl_String_hashCode($type)) {
            case -934437708:
                if (!jl_String_equals($type, $rt_s(23)))
                    break a;
                var$3 = 2;
                break a;
            case 94750088:
                if (!jl_String_equals($type, $rt_s(1)))
                    break a;
                var$3 = 1;
                break a;
            case 1252611035:
                if (!jl_String_equals($type, $rt_s(24)))
                    break a;
                var$3 = 0;
                break a;
            default:
        }
    }
    switch (var$3) {
        case 0:
            $type = $this.$elem;
            var$4 = new uiuci_HTMLComponent$addEventListener$lambda$_10_0;
            var$4.$_012 = $listener;
            $type.addEventListener("mousemove", otji_JS_function(var$4, "handleEvent"));
            $type = $this.$elem;
            var$4 = new uiuci_HTMLComponent$addEventListener$lambda$_10_1;
            var$4.$_013 = $listener;
            $type.addEventListener("mouseover", otji_JS_function(var$4, "handleEvent"));
            $type = $this.$elem;
            var$5 = new uiuci_HTMLComponent$addEventListener$lambda$_10_2;
            var$5.$_014 = $listener;
            $type.addEventListener("mouseout", otji_JS_function(var$5, "handleEvent"));
            return $this;
        case 1:
            $type = $this.$elem;
            var$5 = new uiuci_HTMLComponent$addEventListener$lambda$_10_3;
            var$5.$_015 = $listener;
            $type.addEventListener("click", otji_JS_function(var$5, "handleEvent"));
            return $this;
        case 2:
            $type = $this.$elem;
            var$5 = new uiuci_HTMLComponent$addEventListener$lambda$_10_4;
            var$5.$_016 = $listener;
            $type.addEventListener("resize", otji_JS_function(var$5, "handleEvent"));
            return $this;
        default:
    }
    $listener = new jl_IllegalArgumentException;
    jl_RuntimeException__init_2($listener, $type);
    $rt_throw($listener);
};
let uiuc_Container = $rt_classWithoutFields(0);
let uiuci_HTMLContainer = $rt_classWithoutFields(uiuci_HTMLComponent);
let uiuci_HTMLContainer_add = ($this, var$1) => {
    let var$2, var$3;
    var$2 = $this.$elem;
    var$3 = var$1.$elem;
    var$2.appendChild(var$3);
    return $this;
};
let otj_JSObject = $rt_classWithoutFields(0);
let otjdx_Node = $rt_classWithoutFields(0);
let otjdx_Document = $rt_classWithoutFields(0);
let otjde_EventTarget = $rt_classWithoutFields(0);
let otjdh_HTMLDocument = $rt_classWithoutFields(0);
let otjdh_HTMLDocument_current = () => {
    return window.document;
};
let jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException);
let juf_IntFunction = $rt_classWithoutFields(0);
function uid_STS13Visualizer$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_09 = null;
}
let uid_STS13Visualizer$_init_$lambda$_0_0_apply = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, var$16;
    var$2 = var$0.$_09.data;
    uid_STS13Visualizer_$callClinit();
    var$3 = ju_BitSet__init_();
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        var$6 = jl_String_charAt(var$2[var$5], var$1);
        if (jl_Character_digitMapping === null) {
            if (jl_Character_$$metadata$$3 === null)
                jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
            var$7 = (jl_Character_$$metadata$$3.value !== null ? $rt_str(jl_Character_$$metadata$$3.value) : null);
            var$8 = new otci_CharFlow;
            var$9 = $rt_createCharArray(var$7.$nativeString.length);
            var$10 = var$9.data;
            var$11 = 0;
            var$12 = var$10.length;
            while (var$11 < var$12) {
                var$10[var$11] = jl_String_charAt(var$7, var$11);
                var$11 = var$11 + 1 | 0;
            }
            jl_Object__init_(var$8);
            var$8.$characters = var$9;
            var$12 = otci_Base46_decodeUnsigned(var$8);
            var$9 = $rt_createIntArray(var$12 * 2 | 0);
            var$10 = var$9.data;
            var$13 = 0;
            var$11 = 0;
            var$14 = 0;
            var$15 = 0;
            while (var$15 < var$12) {
                var$11 = var$11 + otci_Base46_decode(var$8) | 0;
                var$14 = var$14 + otci_Base46_decode(var$8) | 0;
                var$16 = var$13 + 1 | 0;
                var$10[var$13] = var$11;
                var$13 = var$16 + 1 | 0;
                var$10[var$16] = var$14;
                var$15 = var$15 + 1 | 0;
            }
            jl_Character_digitMapping = var$9;
        }
        var$9 = jl_Character_digitMapping.data;
        var$13 = 0;
        var$11 = (var$9.length / 2 | 0) - 1 | 0;
        a: {
            while (var$11 >= var$13) {
                var$14 = (var$13 + var$11 | 0) / 2 | 0;
                var$12 = var$14 * 2 | 0;
                var$15 = $rt_compare(var$6, var$9[var$12]);
                if (var$15 > 0)
                    var$13 = var$14 + 1 | 0;
                else {
                    if (var$15 >= 0) {
                        var$12 = var$9[var$12 + 1 | 0];
                        break a;
                    }
                    var$11 = var$14 - 1 | 0;
                }
            }
            var$12 = (-1);
        }
        if (var$12 >= 36)
            var$12 = (-1);
        ju_BitSet_set(var$3, var$12);
        var$5 = var$5 + 1 | 0;
    }
    return var$3;
};
let uid_STS13Visualizer$_init_$lambda$_0_1 = $rt_classWithoutFields();
let uid_STS13Visualizer$_init_$lambda$_0_1_apply = (var$0, var$1) => {
    uid_STS13Visualizer_$callClinit();
    return $rt_createArray(ju_BitSet, var$1);
};
let ju_Arrays = $rt_classWithoutFields();
let ju_Arrays_copyOf = ($original, $newLength) => {
    let var$3, $sz, $i;
    var$3 = jl_Class_getComponentType(jl_Object_getClass($original));
    if (var$3 === null) {
        var$3 = new jl_NullPointerException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    if (var$3 === $rt_cls($rt_voidcls)) {
        var$3 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    if ($newLength < 0) {
        var$3 = new jl_NegativeArraySizeException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    $original = $original.data;
    var$3 = jlr_Array_newInstanceImpl(var$3.$platformClass, $newLength);
    $sz = jl_Math_min($newLength, $original.length);
    $i = 0;
    while ($i < $sz) {
        var$3.data[$i] = $original[$i];
        $i = $i + 1 | 0;
    }
    return var$3;
},
ju_Arrays_stream = $array => {
    let var$2, var$3, var$4;
    var$2 = $array.data;
    var$3 = new jusi_ArrayStreamImpl;
    var$4 = var$2.length;
    var$3.$array0 = $array;
    var$3.$index0 = 0;
    var$3.$end0 = var$4;
    var$3.$size0 = var$4 - 0 | 0;
    return var$3;
};
let jl_Math = $rt_classWithoutFields();
let jl_Math_sin = var$1 => {
    return Math.sin(var$1);
},
jl_Math_cos = var$1 => {
    return Math.cos(var$1);
},
jl_Math_sqrt = var$1 => {
    return Math.sqrt(var$1);
},
jl_Math_pow = (var$1, $y) => {
    return jl_Math_powImpl(var$1, $y);
},
jl_Math_powImpl = (var$1, var$2) => {
    return Math.pow(var$1, var$2);
},
jl_Math_min = (var$1, var$2) => {
    if (var$1 < var$2)
        var$2 = var$1;
    return var$2;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_minImpl = (var$1, var$2) => {
    return Math.min(var$1, var$2);
},
jl_Math_abs = var$1 => {
    if (var$1 < 0)
        var$1 =  -var$1 | 0;
    return var$1;
},
jl_Math_sign = var$1 => {
    return Math.sign(var$1);
};
let jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException);
let jl_IllegalArgumentException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_IllegalArgumentException__init_0 = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_(var_0);
    return var_0;
};
let otjde_FocusEventTarget = $rt_classWithoutFields(0);
let otjde_MouseEventTarget = $rt_classWithoutFields(0);
let otjde_KeyboardEventTarget = $rt_classWithoutFields(0);
let otjde_LoadEventTarget = $rt_classWithoutFields(0);
let otjde_GamepadEventTarget = $rt_classWithoutFields(0);
let otjb_WindowEventTarget = $rt_classWithoutFields(0);
let otjb_StorageProvider = $rt_classWithoutFields(0);
let otjc_JSArrayReader = $rt_classWithoutFields(0);
let otjb_Window = $rt_classWithoutFields();
let otjb_Window_get$exported$0 = (var$0, var$1) => {
    var$1 = var$0.$get(var$1);
    otji_JSWrapper_$callClinit();
    return var$1 === null ? null : var$1 instanceof $rt_objcls() && var$1 instanceof otji_JSWrapper ? otji_JSWrapper_unwrap(var$1) : var$1;
},
otjb_Window_addEventListener$exported$1 = (var$0, var$1, var$2) => {
    var$0.$addEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
},
otjb_Window_removeEventListener$exported$2 = (var$0, var$1, var$2) => {
    var$0.$removeEventListener($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
},
otjb_Window_removeEventListener$exported$3 = (var$0, var$1, var$2, var$3) => {
    var$0.$removeEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
},
otjb_Window_dispatchEvent$exported$4 = (var$0, var$1) => {
    return !!var$0.$dispatchEvent(var$1);
},
otjb_Window_getLength$exported$5 = var$0 => {
    return var$0.$getLength();
},
otjb_Window_addEventListener$exported$6 = (var$0, var$1, var$2, var$3) => {
    var$0.$addEventListener1($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
};
let jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException);
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_hashCodes = null, otji_JSWrapper_wrappers = null, otji_JSWrapper_stringWrappers = null, otji_JSWrapper_numberWrappers = null, otji_JSWrapper_stringFinalizationRegistry = null, otji_JSWrapper_numberFinalizationRegistry = null;
let otji_JSWrapper_$callClinit = () => {
    otji_JSWrapper_$callClinit = $rt_eraseClinit(otji_JSWrapper);
    otji_JSWrapper__clinit_();
};
let otji_JSWrapper__init_ = ($this, $js) => {
    otji_JSWrapper_$callClinit();
    $this.$js = $js;
},
otji_JSWrapper__init_0 = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_(var_1, var_0);
    return var_1;
},
otji_JSWrapper_unwrap = $o => {
    otji_JSWrapper_$callClinit();
    if ($o === null)
        return null;
    return !($o[$rt_jso_marker] === true) ? $o.$js : $o;
},
otji_JSWrapper_jsToJava = $o => {
    let var$2, var$3;
    otji_JSWrapper_$callClinit();
    if ($o === null)
        return null;
    if ($o instanceof $rt_objcls())
        $o = $o;
    else
        a: {
            $o = $o;
            if ($o === null)
                $o = null;
            else {
                var$2 = $o;
                if (!($o[$rt_jso_marker] === true)) {
                    b: {
                        if (otji_JSWrapper_wrappers !== null) {
                            var$3 = $rt_str(typeof var$2);
                            if (!jl_String_equals(var$3, $rt_s(25)) && !jl_String_equals(var$3, $rt_s(26))) {
                                if (jl_String_equals(var$3, $rt_s(27))) {
                                    $o = otji_JSWrapper_stringWrappers.get(var$2);
                                    $o = (typeof $o === 'undefined' ? 1 : 0) ? void 0 : $o.deref();
                                    if (!(typeof $o === 'undefined' ? 1 : 0)) {
                                        $o = $o;
                                        break a;
                                    }
                                    $o = otji_JSWrapper__init_0(var$2);
                                    var$3 = $o;
                                    otji_JSWrapper_stringWrappers.set(var$2, new WeakRef(var$3));
                                    otji_JSWrapper_register$js_body$_4(otji_JSWrapper_stringFinalizationRegistry, var$3, var$2);
                                    break a;
                                }
                                if (!jl_String_equals(var$3, $rt_s(28)))
                                    break b;
                                else {
                                    $o = otji_JSWrapper_numberWrappers.get(var$2);
                                    $o = (typeof $o === 'undefined' ? 1 : 0) ? void 0 : $o.deref();
                                    if (!(typeof $o === 'undefined' ? 1 : 0)) {
                                        $o = $o;
                                        break a;
                                    }
                                    $o = otji_JSWrapper__init_0(var$2);
                                    var$3 = $o;
                                    otji_JSWrapper_numberWrappers.set(var$2, new WeakRef(var$3));
                                    otji_JSWrapper_register$js_body$_4(otji_JSWrapper_numberFinalizationRegistry, var$3, var$2);
                                    break a;
                                }
                            }
                            $o = otji_JSWrapper_wrappers.get(var$2);
                            $o = (typeof $o === 'undefined' ? 1 : 0) ? void 0 : $o.deref();
                            if (!(typeof $o === 'undefined' ? 1 : 0)) {
                                $o = $o;
                                break a;
                            }
                            $o = otji_JSWrapper__init_0(var$2);
                            otji_JSWrapper_wrappers.set(var$2, new WeakRef($o));
                            break a;
                        }
                    }
                    $o = otji_JSWrapper__init_0(var$2);
                }
            }
        }
    return $o;
},
otji_JSWrapper__clinit_ = () => {
    otji_JSWrapper_hashCodes = new WeakMap();
    otji_JSWrapper_wrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper_stringWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper_numberWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper_stringFinalizationRegistry = otji_JSWrapper_stringWrappers === null ? null : new FinalizationRegistry(otji_JS_function(new otji_JSWrapper$_clinit_$lambda$_30_0, "accept"));
    otji_JSWrapper_numberFinalizationRegistry = otji_JSWrapper_numberWrappers === null ? null : new FinalizationRegistry(otji_JS_function(new otji_JSWrapper$_clinit_$lambda$_30_1, "accept"));
},
otji_JSWrapper_register$js_body$_4 = (var$1, var$2, var$3) => {
    return var$1.register(var$2, var$3);
};
let otjc_JSWeakMap = $rt_classWithoutFields();
let otjc_JSWeakRef = $rt_classWithoutFields();
let otjc_JSMap = $rt_classWithoutFields();
let otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0);
let otji_JSWrapper$_clinit_$lambda$_30_0 = $rt_classWithoutFields();
let otji_JSWrapper$_clinit_$lambda$_30_0_accept$exported$0 = (var$0, var$1) => {
    let var$2;
    var$1 = otji_JSWrapper_jsToJava(var$1);
    var$2 = otji_JSWrapper_stringWrappers;
    var$1 = otji_JSWrapper_unwrap(var$1);
    var$2.delete(var$1);
};
let otjc_JSFinalizationRegistry = $rt_classWithoutFields();
let otji_JSWrapper$_clinit_$lambda$_30_1 = $rt_classWithoutFields();
let otji_JSWrapper$_clinit_$lambda$_30_1_accept$exported$0 = (var$0, var$1) => {
    let var$2;
    var$1 = otji_JSWrapper_jsToJava(var$1);
    var$2 = otji_JSWrapper_numberWrappers;
    var$1 = otji_JSWrapper_unwrap(var$1);
    var$2.delete(var$1);
};
let otjc_JSObjects = $rt_classWithoutFields();
function jusi_WrappingIntStreamImpl() {
    jusi_SimpleIntStreamImpl.call(this);
    this.$sourceStream0 = null;
}
let jusi_WrappingIntStreamImpl_next = ($this, $consumer) => {
    let var$2, var$3;
    var$2 = $this.$sourceStream0;
    var$3 = new jusi_FilteringIntStreamImpl$wrap$lambda$_1_0;
    var$3.$_017 = $this;
    var$3.$_12 = $consumer;
    return var$2.$next1(var$3);
};
function jusi_FilteringIntStreamImpl() {
    jusi_WrappingIntStreamImpl.call(this);
    this.$filter1 = null;
}
let uiuc_Canvas = $rt_classWithoutFields(0);
let uiuci_HTMLCanvas = $rt_classWithoutFields(uiuci_HTMLComponent);
let uiuc_Select = $rt_classWithoutFields(0);
let uiuci_HTMLSelect = $rt_classWithoutFields(uiuci_HTMLComponent);
let juf_Function = $rt_classWithoutFields(0);
function uid_Visualizer$model$lambda$_4_0() {
    jl_Object.call(this);
    this.$_08 = null;
}
let uid_Visualizer$model$lambda$_4_0_apply = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6;
    var$1 = var$1;
    var$2 = var$0.$_08;
    var$3 = new uid_LineData;
    var$4 = uid_TextColor_values();
    var$5 = (uid_TextColor_values()).data.length - 2 | 0;
    if (var$5 <= 0) {
        var$1 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    var$6 = var$4.data[Math.random() * var$5 | 0];
    var$4 = uid_Visualizer_bezier(var$2, var$1);
    var$3.$points0 = var$1;
    var$3.$color0 = var$6;
    var$3.$bezier0 = var$4;
    return var$3;
};
let uid_Visualizer$model$lambda$_4_1 = $rt_classWithoutFields();
let uid_Visualizer$model$lambda$_4_1_apply = (var$0, var$1) => {
    return $rt_createArray(uid_LineData, var$1);
};
function uid_F9Point() {
    let a = this; jl_Record.call(a);
    a.$x0 = null;
    a.$y0 = null;
}
let uid_F9Point__init_ = ($this, $x, $y) => {
    $this.$x0 = $x;
    $this.$y0 = $y;
},
uid_F9Point__init_0 = (var_0, var_1) => {
    let var_2 = new uid_F9Point();
    uid_F9Point__init_(var_2, var_0, var_1);
    return var_2;
},
uid_F9Point_add = ($this, $that) => {
    return uid_F9Point__init_0(uid_F9_add($this.$x0, $that.$x0), uid_F9_add($this.$y0, $that.$y0));
},
uid_F9Point_generateLines = () => {
    let $cardinality, var$2, var$3, $v, $rays, $start, $infinity, $line, $lines, var$10, $i, $j, var$13, $lineIdx, $line_0, $j_0, var$17;
    uid_F9_$callClinit();
    $cardinality = uid_F9_COUNT;
    var$2 = $rt_imul($cardinality, $cardinality);
    var$3 = var$2 + $cardinality | 0;
    $v = var$3 + 1 | 0;
    $rays = jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_map(jusi_SimpleStreamImpl_filter(ju_Arrays_stream(uid_F9_values), new uid_F9Point$generateLines$lambda$_4_0), new uid_F9Point$generateLines$lambda$_4_1), new uid_F9Point$generateLines$lambda$_4_2);
    $start = new jusi_SingleStreamImpl;
    $start.$element = $rays;
    $infinity = jusi_SimpleStreamImpl_map(ju_Arrays_stream(uid_F9_values), new uid_F9Point$generateLines$lambda$_4_3);
    if ($start instanceof jusi_SimpleStreamImpl && $infinity instanceof jusi_SimpleStreamImpl) {
        $line = new jusi_SpecializedConcatStream;
        $line.$first = $start;
        $line.$second = $infinity;
        $line.$current1 = $start;
    } else {
        $line = new jusi_GenericConcatStream;
        $line.$first0 = $start;
        $line.$second0 = $infinity;
    }
    $rays = jusi_SimpleStreamImpl_toArray($line, new uid_F9Point$generateLines$lambda$_4_4);
    $lines = $rt_createArray(ju_BitSet, $v);
    var$10 = $lines.data;
    $i = 0;
    while ($i < $cardinality) {
        $start = uid_F9Point__init_0(uid_F9_ZERO, uid_F9_values.data[$i]);
        $j = 0;
        while ($j < $cardinality) {
            var$13 = $rays.data;
            $lineIdx = $rt_imul($i, $cardinality) + $j | 0;
            $line_0 = ju_BitSet__init_();
            ju_BitSet_set($line_0, uid_F9Point_idx($start));
            $j_0 = $j + 1 | 0;
            $infinity = ju_Arrays_stream(var$13[$j_0]);
            $line = new uid_F9Point$generateLines$lambda$_4_5;
            $line.$_018 = $line_0;
            $line.$_13 = $start;
            jusi_SimpleStreamImpl_forEach($infinity, $line);
            ju_BitSet_set($line_0, var$2 + $j | 0);
            var$10[$lineIdx] = $line_0;
            $j = $j_0;
        }
        $i = $i + 1 | 0;
    }
    $i = 0;
    while ($i < $cardinality) {
        var$17 = $rays.data;
        $lineIdx = var$2 + $i | 0;
        $line = ju_BitSet__init_();
        $start = uid_F9Point__init_0(uid_F9_values.data[$i], uid_F9_ZERO);
        ju_BitSet_set($line, uid_F9Point_idx($start));
        $line_0 = ju_Arrays_stream(var$17[0]);
        $infinity = new uid_F9Point$generateLines$lambda$_4_6;
        $infinity.$_019 = $line;
        $infinity.$_14 = $start;
        jusi_SimpleStreamImpl_forEach($line_0, $infinity);
        ju_BitSet_set($line, var$3);
        var$10[$lineIdx] = $line;
        $i = $i + 1 | 0;
    }
    $infinity = ju_BitSet__init_();
    $i = 0;
    while ($i <= $cardinality) {
        ju_BitSet_set($infinity, var$2 + $i | 0);
        $i = $i + 1 | 0;
    }
    var$10[var$3] = $infinity;
    return $lines;
},
uid_F9Point_generateUnital = () => {
    let $ord, var$2, $v, $lines, $unital, $p, $hom, var$8, var$9, var$10, $val, var$12, var$13;
    uid_F9_$callClinit();
    $ord = uid_F9_COUNT;
    var$2 = $rt_imul($ord, $ord);
    $v = (var$2 + $ord | 0) + 1 | 0;
    $lines = uid_F9Point_generateLines();
    $unital = ju_BitSet__init_();
    $p = 0;
    while ($p < $v) {
        if ($p < var$2)
            $hom = $rt_createIntArrayFromData([$p / $ord | 0, $p % $ord | 0, uid_F9_idx(uid_F9_ONE)]);
        else {
            var$8 = $p - var$2 | 0;
            $hom = var$8 < $ord ? $rt_createIntArrayFromData([uid_F9_idx(uid_F9_ONE), var$8, uid_F9_idx(uid_F9_ZERO)]) : $rt_createIntArrayFromData([uid_F9_idx(uid_F9_ONE), uid_F9_idx(uid_F9_ZERO), uid_F9_idx(uid_F9_ZERO)]);
        }
        var$9 = $hom.data;
        var$10 = new jusi_ArrayIntStreamImpl;
        var$8 = var$9.length;
        var$10.$array1 = $hom;
        var$10.$index1 = 0;
        var$10.$end1 = var$8;
        var$10.$size1 = var$8 - 0 | 0;
        $val = new uid_F9Point$generateUnital$lambda$_5_3;
        $val.$_020 = 3;
        $val = jusi_SimpleIntStreamImpl_mapToObj(var$10, $val);
        var$10 = uid_F9_ZERO;
        var$12 = new uid_F9Point$generateUnital$lambda$_5_4;
        var$13 = jusi_ReducingConsumer__init_(var$12, var$10, 1);
        while (jusi_MappingToObjStreamImpl_next($val, var$13)) {
        }
        $val = var$13.$result;
        if (uid_F9_equals(uid_F9_ZERO, $val))
            ju_BitSet_set($unital, $p);
        $p = $p + 1 | 0;
    }
    $val = ju_Arrays_stream($lines);
    var$10 = new uid_F9Point$generateUnital$lambda$_5_0;
    var$10.$_021 = $unital;
    return jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_filter(jusi_SimpleStreamImpl_map($val, var$10), new uid_F9Point$generateUnital$lambda$_5_1), new uid_F9Point$generateUnital$lambda$_5_2);
},
uid_F9Point_idx = $this => {
    return $rt_imul(uid_F9_idx($this.$x0), uid_F9_COUNT) + uid_F9_idx($this.$y0) | 0;
},
uid_F9Point_toString = $this => {
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder__init_2($rt_s(29)), $rt_s(30)), $this.$x0), $rt_s(31)), $this.$y0), $rt_s(20)));
},
uid_F9Point_hashCode = $this => {
    return ((31 + ju_Objects_hashCode($this.$x0) | 0) * 31 | 0) + ju_Objects_hashCode($this.$y0) | 0;
},
uid_F9Point_equals = ($this, $o) => {
    let var$2;
    if ($this === $o)
        var$2 = 1;
    else if ($o !== null && jl_Object_getClass($o) === $rt_cls(uid_F9Point)) {
        $o = $o;
        var$2 = !ju_Objects_equals($this.$x0, $o.$x0) ? 0 : ju_Objects_equals($this.$y0, $o.$y0) ? 1 : 0;
    } else
        var$2 = 0;
    return var$2;
};
let uid_UnitalVisualizer$points$lambda$_3_0 = $rt_classWithoutFields();
let juf_Supplier = $rt_classWithoutFields(0);
let uid_UnitalVisualizer$points$lambda$_3_1 = $rt_classWithoutFields();
let uid_UnitalVisualizer$points$lambda$_3_1_get = var$0 => {
    return ju_BitSet__init_();
};
let juf_ObjIntConsumer = $rt_classWithoutFields(0);
let uid_UnitalVisualizer$points$lambda$_3_2 = $rt_classWithoutFields();
let uid_UnitalVisualizer$points$lambda$_3_2_accept = (var$0, var$1, var$2) => {
    ju_BitSet_set(var$1, var$2);
};
let uid_UnitalVisualizer$points$lambda$_3_3 = $rt_classWithoutFields();
let jus_Stream = $rt_classWithoutFields(0);
let jusi_SimpleStreamImpl = $rt_classWithoutFields();
let jusi_SimpleStreamImpl_filter = ($this, $predicate) => {
    let var$2;
    var$2 = new jusi_FilteringStreamImpl;
    jusi_WrappingStreamImpl__init_(var$2, $this);
    var$2.$filter2 = $predicate;
    return var$2;
},
jusi_SimpleStreamImpl_map = ($this, $mapper) => {
    let var$2;
    var$2 = new jusi_MappingStreamImpl;
    jusi_WrappingStreamImpl__init_(var$2, $this);
    var$2.$mapper1 = $mapper;
    return var$2;
},
jusi_SimpleStreamImpl_forEach = ($this, $action) => {
    let var$2;
    while (true) {
        var$2 = new jusi_SimpleStreamImpl$forEachOrdered$lambda$_19_0;
        var$2.$_022 = $action;
        if (!jusi_ArrayStreamImpl_next($this, var$2))
            break;
    }
},
jusi_SimpleStreamImpl_toArray = ($this, $generator) => {
    let $estimatedSize, $array, $consumer, var$5, $list, $array_0, $i;
    $estimatedSize = $this.$estimateSize();
    if ($estimatedSize >= 0) {
        $array = $generator.$apply($estimatedSize);
        $consumer = new jusi_SimpleStreamImpl$ArrayFillingConsumer;
        $consumer.$array2 = $array;
        while ($this.$next($consumer)) {
        }
        var$5 = $array.data;
        $estimatedSize = $consumer.$index2;
        if ($estimatedSize < var$5.length)
            $array = ju_Arrays_copyOf($array, $estimatedSize);
        return $array;
    }
    $list = new ju_ArrayList;
    $list.$array3 = $rt_createArray(jl_Object, 10);
    while (true) {
        ju_Objects_requireNonNull($list);
        $consumer = new jusi_SimpleStreamImpl$toArray$lambda$_21_0;
        $consumer.$_023 = $list;
        if (!$this.$next($consumer))
            break;
    }
    $array_0 = $generator.$apply($list.$size2);
    $i = 0;
    while (true) {
        $generator = $array_0.data;
        if ($i >= $generator.length)
            break;
        $generator[$i] = ju_ArrayList_get($list, $i);
        $i = $i + 1 | 0;
    }
    return $array_0;
},
jusi_SimpleStreamImpl_iterator = $this => {
    let var$1;
    var$1 = new jusi_SimpleStreamIterator;
    var$1.$stream1 = $this;
    return var$1;
},
jusi_SimpleStreamImpl_estimateSize = $this => {
    return (-1);
};
function jusi_MappingToObjStreamImpl() {
    let a = this; jusi_SimpleStreamImpl.call(a);
    a.$source = null;
    a.$mapper0 = null;
}
let jusi_MappingToObjStreamImpl_next = ($this, $consumer) => {
    let var$2, var$3;
    var$2 = $this.$source;
    var$3 = new jusi_MappingToObjStreamImpl$next$lambda$_1_0;
    var$3.$_024 = $this;
    var$3.$_15 = $consumer;
    return var$2.$next1(var$3);
},
jusi_MappingToObjStreamImpl_estimateSize = $this => {
    return $this.$source.$estimateSize();
};
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    $this.$name0 = $name;
    $this.$ordinal = $ordinal;
},
jl_Enum_toString = $this => {
    return $this.$name0;
},
jl_Enum_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Enum_hashCode = $this => {
    return jl_Object_identity($this);
};
let uiu_LineConf$Children = $rt_classWithoutFields(jl_Enum);
let uiu_LineConf$Children_MAX_DIST = null, uiu_LineConf$Children_SPLIT_DIST = null, uiu_LineConf$Children_$VALUES = null;
let uiu_LineConf$Children_values = () => {
    return uiu_LineConf$Children_$VALUES.$clone0();
},
uiu_LineConf$Children__clinit_ = () => {
    let var$1;
    var$1 = new uiu_LineConf$Children;
    jl_Enum__init_(var$1, $rt_s(32), 0);
    uiu_LineConf$Children_MAX_DIST = var$1;
    var$1 = new uiu_LineConf$Children;
    jl_Enum__init_(var$1, $rt_s(33), 1);
    uiu_LineConf$Children_SPLIT_DIST = var$1;
    uiu_LineConf$Children_$VALUES = $rt_wrapArray(uiu_LineConf$Children, [uiu_LineConf$Children_MAX_DIST, var$1]);
};
function jusi_ArrayStreamImpl() {
    let a = this; jusi_SimpleStreamImpl.call(a);
    a.$array0 = null;
    a.$index0 = 0;
    a.$end0 = 0;
    a.$size0 = 0;
}
let jusi_ArrayStreamImpl_next = ($this, $consumer) => {
    let var$2, var$3;
    a: {
        while (true) {
            var$2 = $this.$index0;
            if (var$2 >= $this.$end0)
                break a;
            var$3 = $this.$array0.data;
            $this.$index0 = var$2 + 1 | 0;
            if ($consumer.$test0(var$3[var$2]))
                continue;
            else
                break;
        }
    }
    return $this.$index0 >= $this.$end0 ? 0 : 1;
},
jusi_ArrayStreamImpl_estimateSize = $this => {
    return $this.$size0;
};
function uid_F9() {
    let a = this; jl_Record.call(a);
    a.$re = 0;
    a.$im = 0;
}
let uid_F9_values = null, uid_F9_COUNT = 0, uid_F9_ZERO = null, uid_F9_ONE = null, uid_F9_MINUS_ONE = null, uid_F9_ONE_ROOTS = null, uid_F9_MINUS_ONE_ROOTS = null;
let uid_F9_$callClinit = () => {
    uid_F9_$callClinit = $rt_eraseClinit(uid_F9);
    uid_F9__clinit_();
};
let uid_F9__init_ = ($this, $re, $im) => {
    uid_F9_$callClinit();
    $this.$re = $re;
    $this.$im = $im;
},
uid_F9__init_0 = (var_0, var_1) => {
    let var_2 = new uid_F9();
    uid_F9__init_(var_2, var_0, var_1);
    return var_2;
},
uid_F9_idx = $this => {
    return (($this.$re + 1 | 0) * 3 | 0) + ($this.$im + 1 | 0) | 0;
},
uid_F9_add = ($this, $that) => {
    return uid_F9__init_0(uid_F9_modAdd($this.$re, $that.$re), uid_F9_modAdd($this.$im, $that.$im));
},
uid_F9_mul = ($this, $that) => {
    return uid_F9__init_0(uid_F9_modAdd($rt_imul($this.$re, $that.$re), $rt_imul( -$this.$im | 0, $that.$im)), uid_F9_modAdd($rt_imul($this.$re, $that.$im), $rt_imul($this.$im, $that.$re)));
},
uid_F9_exponent = ($base, $power) => {
    let $result;
    $result = uid_F9__init_0(1, 0);
    while ($power > 0) {
        if (($power % 2 | 0) == 1)
            $result = uid_F9_mul($result, $base);
        $base = uid_F9_mul($base, $base);
        $power = $power / 2 | 0;
    }
    return $result;
},
uid_F9_modAdd = ($a, $b) => {
    let $res;
    uid_F9_$callClinit();
    $res = $a + $b | 0;
    if ($res == 2)
        $res = (-1);
    if ($res == (-2))
        $res = 1;
    return $res;
},
uid_F9_toString = $this => {
    let $result, var$2;
    $result = jl_StringBuilder__init_();
    var$2 = $this.$re;
    if (var$2)
        jl_StringBuilder_append2($result, var$2);
    if ($this.$im == 1 && !jl_StringBuilder_isEmpty($result))
        jl_StringBuilder_append0($result, 43);
    var$2 = $this.$im;
    if (var$2)
        jl_StringBuilder_append2($result, var$2);
    if (jl_StringBuilder_isEmpty($result))
        return $rt_s(0);
    return jl_AbstractStringBuilder_toString($result);
},
uid_F9_hashCode = $this => {
    return ((31 + $this.$re | 0) * 31 | 0) + $this.$im | 0;
},
uid_F9_equals = ($this, $o) => {
    let var$2;
    if ($this === $o)
        var$2 = 1;
    else if ($o !== null && jl_Object_getClass($o) === $rt_cls(uid_F9)) {
        $o = $o;
        var$2 = $this.$re != $o.$re ? 0 : $this.$im == $o.$im ? 1 : 0;
    } else
        var$2 = 0;
    return var$2;
},
uid_F9__clinit_ = () => {
    let var$1, var$2;
    var$1 = jusi_SimpleStreamImpl_toArray(jusi_SimpleIntStreamImpl_mapToObj(jus_IntStream_range(0, 9), new uid_F9$_clinit_$lambda$_20_0), new uid_F9$_clinit_$lambda$_20_1);
    var$2 = var$1.data;
    uid_F9_values = var$1;
    uid_F9_COUNT = var$2.length;
    uid_F9_ZERO = uid_F9__init_0(0, 0);
    uid_F9_ONE = uid_F9__init_0(1, 0);
    uid_F9_MINUS_ONE = uid_F9__init_0((-1), 0);
    uid_F9_ONE_ROOTS = jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_filter(ju_Arrays_stream(uid_F9_values), new uid_F9$_clinit_$lambda$_20_2), new uid_F9$_clinit_$lambda$_20_3);
    uid_F9_MINUS_ONE_ROOTS = jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_filter(ju_Arrays_stream(uid_F9_values), new uid_F9$_clinit_$lambda$_20_4), new uid_F9$_clinit_$lambda$_20_5);
};
function uid_F9Point$generateUnital$lambda$_5_0() {
    jl_Object.call(this);
    this.$_021 = null;
}
let uid_F9Point$generateUnital$lambda$_5_0_apply = (var$0, var$1) => {
    let var$2, var$3;
    var$1 = var$1;
    var$2 = var$0.$_021;
    var$1 = ju_BitSet_stream(var$1);
    ju_Objects_requireNonNull(var$2);
    var$3 = new uid_F9Point$lambda$generateUnital$11$lambda$_16_0;
    var$3.$_025 = var$2;
    return jusi_SimpleIntStreamImpl_collect(jusi_SimpleIntStreamImpl_filter(var$1, var$3), new uid_F9Point$lambda$generateUnital$11$lambda$_16_1, new uid_F9Point$lambda$generateUnital$11$lambda$_16_2, new uid_F9Point$lambda$generateUnital$11$lambda$_16_3);
};
let juf_Predicate = $rt_classWithoutFields(0);
let uid_F9Point$generateUnital$lambda$_5_1 = $rt_classWithoutFields();
let uid_F9Point$generateUnital$lambda$_5_1_test = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6;
    var$1 = var$1;
    var$2 = 0;
    var$3 = 1 + (var$1.$length0 / 32 | 0) | 0;
    var$4 = 0;
    while (var$4 < var$3) {
        var$5 = var$1.$data0.data[var$4];
        var$6 = ((var$5 & (-1431655766)) >>> 1 | 0) + (var$5 & 1431655765) | 0;
        var$5 = ((var$6 & (-858993460)) >>> 2 | 0) + (var$6 & 858993459) | 0;
        var$5 = ((var$5 & 1886417008) >>> 4 | 0) + (var$5 & 117901063) | 0;
        var$5 = ((var$5 & 251662080) >>> 8 | 0) + (var$5 & 983055) | 0;
        var$2 = var$2 + (((var$5 & 2031616) >>> 16 | 0) + (var$5 & 31) | 0) | 0;
        var$4 = var$4 + 1 | 0;
    }
    return var$2 <= 1 ? 0 : 1;
};
let uid_F9Point$generateUnital$lambda$_5_2 = $rt_classWithoutFields();
let uid_F9Point$generateUnital$lambda$_5_2_apply = (var$0, var$1) => {
    return $rt_createArray(ju_BitSet, var$1);
};
function uid_F9Point$generateUnital$lambda$_5_3() {
    jl_Object.call(this);
    this.$_020 = 0;
}
let uid_F9Point$generateUnital$lambda$_5_3_apply = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_020;
    uid_F9_$callClinit();
    return uid_F9_exponent(uid_F9_values.data[var$1], var$2 + 1 | 0);
};
let juf_BiFunction = $rt_classWithoutFields(0);
let juf_BinaryOperator = $rt_classWithoutFields(0);
let uid_F9Point$generateUnital$lambda$_5_4 = $rt_classWithoutFields();
let uid_F9Point$generateUnital$lambda$_5_4_apply = (var$0, var$1, var$2) => {
    return uid_F9_add(var$1, var$2);
};
let uid_F9Point$generateLines$lambda$_4_0 = $rt_classWithoutFields();
let uid_F9Point$generateLines$lambda$_4_0_test = (var$0, var$1) => {
    var$1 = var$1;
    uid_F9_$callClinit();
    return uid_F9_equals(var$1, uid_F9_ZERO) ? 0 : 1;
};
let uid_F9Point$generateLines$lambda$_4_1 = $rt_classWithoutFields();
let uid_F9Point$generateLines$lambda$_4_1_apply = (var$0, var$1) => {
    let var$2;
    var$1 = var$1;
    var$2 = new uid_F9Point;
    uid_F9_$callClinit();
    uid_F9Point__init_(var$2, uid_F9_ZERO, var$1);
    return var$2;
};
let uid_F9Point$generateLines$lambda$_4_2 = $rt_classWithoutFields();
let uid_F9Point$generateLines$lambda$_4_2_apply = (var$0, var$1) => {
    return $rt_createArray(uid_F9Point, var$1);
};
let uid_F9Point$generateLines$lambda$_4_3 = $rt_classWithoutFields();
let uid_F9Point$generateLines$lambda$_4_3_apply = (var$0, var$1) => {
    let var$2, var$3;
    var$1 = var$1;
    uid_F9_$callClinit();
    var$2 = jusi_SimpleStreamImpl_filter(ju_Arrays_stream(uid_F9_values), new uid_F9Point$lambda$generateLines$6$lambda$_21_0);
    var$3 = new uid_F9Point$lambda$generateLines$6$lambda$_21_1;
    var$3.$_026 = var$1;
    return jusi_SimpleStreamImpl_toArray(jusi_SimpleStreamImpl_map(var$2, var$3), new uid_F9Point$lambda$generateLines$6$lambda$_21_2);
};
let uid_F9Point$generateLines$lambda$_4_4 = $rt_classWithoutFields();
let uid_F9Point$generateLines$lambda$_4_4_apply = (var$0, var$1) => {
    return $rt_createArray($rt_arraycls(uid_F9Point), var$1);
};
function uid_F9Point$generateLines$lambda$_4_5() {
    let a = this; jl_Object.call(a);
    a.$_018 = null;
    a.$_13 = null;
}
let uid_F9Point$generateLines$lambda$_4_5_accept = (var$0, var$1) => {
    var$1 = var$1;
    ju_BitSet_set(var$0.$_018, uid_F9Point_idx(uid_F9Point_add(var$0.$_13, var$1)));
};
function uid_F9Point$generateLines$lambda$_4_6() {
    let a = this; jl_Object.call(a);
    a.$_019 = null;
    a.$_14 = null;
}
let uid_F9Point$generateLines$lambda$_4_6_accept = (var$0, var$1) => {
    var$1 = var$1;
    ju_BitSet_set(var$0.$_019, uid_F9Point_idx(uid_F9Point_add(var$0.$_14, var$1)));
};
function jusi_ArrayIntStreamImpl() {
    let a = this; jusi_SimpleIntStreamImpl.call(a);
    a.$array1 = null;
    a.$index1 = 0;
    a.$end1 = 0;
    a.$size1 = 0;
}
let jusi_ArrayIntStreamImpl_next = ($this, $consumer) => {
    let var$2, var$3;
    a: {
        while (true) {
            var$2 = $this.$index1;
            if (var$2 >= $this.$end1)
                break a;
            var$3 = $this.$array1.data;
            $this.$index1 = var$2 + 1 | 0;
            if (jusi_MappingToObjStreamImpl$next$lambda$_1_0_test($consumer, var$3[var$2]))
                continue;
            else
                break;
        }
    }
    return $this.$index1 >= $this.$end1 ? 0 : 1;
},
jusi_ArrayIntStreamImpl_estimateSize = $this => {
    return $this.$size1;
};
let uid_F9$_clinit_$lambda$_20_0 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_0_apply = (var$0, var$1) => {
    uid_F9_$callClinit();
    return uid_F9__init_0((var$1 / 3 | 0) - 1 | 0, (var$1 % 3 | 0) - 1 | 0);
};
let uid_F9$_clinit_$lambda$_20_1 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_1_apply = (var$0, var$1) => {
    uid_F9_$callClinit();
    return $rt_createArray(uid_F9, var$1);
};
let uid_F9$_clinit_$lambda$_20_2 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_2_test = (var$0, var$1) => {
    var$1 = var$1;
    uid_F9_$callClinit();
    return uid_F9_equals(uid_F9_ONE, uid_F9_exponent(var$1, 4));
};
let uid_F9$_clinit_$lambda$_20_3 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_3_apply = (var$0, var$1) => {
    uid_F9_$callClinit();
    return $rt_createArray(uid_F9, var$1);
};
let uid_F9$_clinit_$lambda$_20_4 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_4_test = (var$0, var$1) => {
    var$1 = var$1;
    uid_F9_$callClinit();
    return uid_F9_equals(uid_F9_MINUS_ONE, uid_F9_exponent(var$1, 4));
};
let uid_F9$_clinit_$lambda$_20_5 = $rt_classWithoutFields();
let uid_F9$_clinit_$lambda$_20_5_apply = (var$0, var$1) => {
    uid_F9_$callClinit();
    return $rt_createArray(uid_F9, var$1);
};
function jusi_SingleStreamImpl() {
    jusi_SimpleStreamImpl.call(this);
    this.$element = null;
}
let jusi_SingleStreamImpl_next = ($this, $consumer) => {
    $consumer.$test0($this.$element);
    return 0;
};
function jusi_GenericConcatStream() {
    let a = this; jusi_SimpleStreamImpl.call(a);
    a.$first0 = null;
    a.$second0 = null;
    a.$iterator0 = null;
    a.$isSecond = 0;
}
let jusi_GenericConcatStream_next = ($this, $consumer) => {
    let var$2, var$3, var$4;
    if ($this.$iterator0 === null)
        $this.$iterator0 = jusi_SimpleStreamImpl_iterator($this.$first0);
    while (true) {
        var$2 = $this.$iterator0;
        jusi_SimpleStreamIterator_fetchIfNeeded(var$2);
        if (!(var$2.$state == 3 ? 0 : 1)) {
            if ($this.$isSecond)
                return 0;
            $this.$isSecond = 1;
            $this.$iterator0 = jusi_SimpleStreamImpl_iterator($this.$second0);
            continue;
        }
        var$2 = $this.$iterator0;
        jusi_SimpleStreamIterator_fetchIfNeeded(var$2);
        var$3 = var$2.$state;
        if (var$3 == 3) {
            $consumer = new ju_NoSuchElementException;
            jl_Exception__init_($consumer);
            $rt_throw($consumer);
        }
        var$4 = var$2.$lastElement;
        var$2.$lastElement = null;
        var$2.$state = var$3 != 2 ? 0 : 3;
        if ($consumer.$test0(var$4))
            continue;
        else
            break;
    }
    return 1;
};
function jusi_SpecializedConcatStream() {
    let a = this; jusi_SimpleStreamImpl.call(a);
    a.$first = null;
    a.$second = null;
    a.$current1 = null;
}
let jusi_SpecializedConcatStream_next = ($this, $consumer) => {
    let var$2;
    var$2 = $this.$current1;
    if (var$2 === null)
        return 0;
    if (var$2.$next($consumer))
        return 1;
    if ($this.$current1 !== $this.$first) {
        $this.$current1 = null;
        return 0;
    }
    $this.$current1 = $this.$second;
    return 1;
},
jusi_SpecializedConcatStream_estimateSize = $this => {
    let $secondSize;
    $secondSize = jusi_WrappingStreamImpl_estimateSize($this.$second);
    return $secondSize < 0 ? (-1) : 1 + $secondSize | 0;
};
let otjde_EventListener = $rt_classWithoutFields(0);
function uiuci_HTMLSelect$addEventListener$lambda$_11_0() {
    jl_Object.call(this);
    this.$_0 = null;
}
let uiuci_HTMLSelect$addEventListener$lambda$_11_0_handleEvent$exported$0 = (var$0, var$1) => {
    let var$2, var$3;
    var$2 = var$0.$_0;
    var$3 = new uiu_SelectEvent;
    var$3.$value3 = $rt_str(var$1.target.value);
    var$2.$accept(var$3);
};
function jusi_SimpleStreamImpl$ArrayFillingConsumer() {
    let a = this; jl_Object.call(a);
    a.$array2 = null;
    a.$index2 = 0;
}
let jusi_SimpleStreamImpl$ArrayFillingConsumer_test = ($this, $t) => {
    let var$2, var$3;
    var$2 = $this.$array2.data;
    var$3 = $this.$index2;
    $this.$index2 = var$3 + 1 | 0;
    var$2[var$3] = $t;
    return 1;
};
let jl_Iterable = $rt_classWithoutFields(0);
let ju_Collection = $rt_classWithoutFields(0);
let ju_AbstractCollection = $rt_classWithoutFields();
let ju_AbstractCollection__init_ = $this => {
    return;
};
let ju_SequencedCollection = $rt_classWithoutFields(0);
let ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList_equals = ($this, $other) => {
    let $list, $i;
    if (!$rt_isInstance($other, ju_List))
        return 0;
    $list = $other;
    if ($this.$size2 != $list.$size2)
        return 0;
    $i = 0;
    while ($i < $list.$size2) {
        if (!ju_Objects_equals(ju_ArrayList_get($this, $i), ju_ArrayList_get($list, $i)))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
};
let ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array3 = null;
    a.$size2 = 0;
}
let ju_ArrayList_get = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$size2)
        return $this.$array3.data[$index];
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
ju_ArrayList_toString = $this => {
    let var$1, $length, $buffer, $i, var$5;
    var$1 = $this.$size2;
    if (!var$1)
        return $rt_s(34);
    $length = var$1 - 1 | 0;
    $buffer = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($buffer, var$1 * 16 | 0);
    jl_StringBuilder_append0($buffer, 91);
    $i = 0;
    while ($i < $length) {
        var$5 = $this.$array3.data;
        jl_StringBuilder_append1(jl_StringBuilder_append($buffer, var$5[$i] !== $this ? var$5[$i] : $rt_s(35)), $rt_s(15));
        $i = $i + 1 | 0;
    }
    var$5 = $this.$array3.data;
    jl_StringBuilder_append($buffer, var$5[$length] !== $this ? var$5[$length] : $rt_s(35));
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append0($buffer, 93));
},
ju_ArrayList_hashCode = $this => {
    let $result, $i;
    $result = 1;
    $i = 0;
    while ($i < $this.$size2) {
        $result = (31 * $result | 0) + ju_Objects_hashCode($this.$array3.data[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return $result;
};
function jusi_SimpleStreamImpl$toArray$lambda$_21_0() {
    jl_Object.call(this);
    this.$_023 = null;
}
let jusi_SimpleStreamImpl$toArray$lambda$_21_0_test = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6;
    var$2 = var$0.$_023;
    var$3 = var$2.$size2 + 1 | 0;
    var$4 = var$2.$array3.data.length;
    if (var$4 < var$3) {
        var$3 = var$4 >= 1073741823 ? 2147483647 : jl_Math_max(var$3, jl_Math_max(var$4 * 2 | 0, 5));
        var$2.$array3 = ju_Arrays_copyOf(var$2.$array3, var$3);
    }
    var$5 = var$2.$array3.data;
    var$6 = var$2.$size2;
    var$2.$size2 = var$6 + 1 | 0;
    var$5[var$6] = var$1;
    var$2.$modCount = var$2.$modCount + 1 | 0;
    return 1;
};
function ju_Optional() {
    jl_Object.call(this);
    this.$value1 = null;
}
let ju_Optional_emptyInstance = null;
let ju_Optional__init_ = ($this, $value) => {
    $this.$value1 = $value;
},
ju_Optional__init_0 = var_0 => {
    let var_1 = new ju_Optional();
    ju_Optional__init_(var_1, var_0);
    return var_1;
},
ju_Optional_ofNullable = $value => {
    let var$2;
    if ($value !== null)
        var$2 = ju_Optional__init_0(ju_Objects_requireNonNull($value));
    else {
        if (ju_Optional_emptyInstance === null)
            ju_Optional_emptyInstance = ju_Optional__init_0(null);
        var$2 = ju_Optional_emptyInstance;
    }
    return var$2;
};
function uiuci_HTMLComponent$box$lambda$_6_0() {
    jl_Object.call(this);
    this.$_027 = null;
}
function jusi_WrappingStreamImpl() {
    jusi_SimpleStreamImpl.call(this);
    this.$sourceStream1 = null;
}
let jusi_WrappingStreamImpl__init_ = ($this, $sourceStream) => {
    $this.$sourceStream1 = $sourceStream;
},
jusi_WrappingStreamImpl_next = ($this, $consumer) => {
    return $this.$sourceStream1.$next($this.$wrap($consumer));
},
jusi_WrappingStreamImpl_estimateSize = $this => {
    return $this.$sourceStream1.$estimateSize();
};
function jusi_MappingStreamImpl() {
    jusi_WrappingStreamImpl.call(this);
    this.$mapper1 = null;
}
let jusi_MappingStreamImpl_wrap = ($this, $consumer) => {
    let var$2;
    var$2 = new jusi_MappingStreamImpl$wrap$lambda$_1_0;
    var$2.$_028 = $this;
    var$2.$_16 = $consumer;
    return var$2;
};
function jusi_FlatMappingToIntStreamImpl() {
    let a = this; jusi_SimpleIntStreamImpl.call(a);
    a.$sourceStream = null;
    a.$current2 = null;
    a.$currentSet = 0;
    a.$iterator1 = null;
    a.$mapper = null;
    a.$done = 0;
}
let jusi_FlatMappingToIntStreamImpl_next = ($this, $consumer) => {
    let var$2, var$3, $e, var$5;
    if ($this.$current2 === null) {
        if ($this.$done)
            return 0;
        $this.$currentSet = 0;
        a: {
            while (true) {
                if ($this.$currentSet)
                    break a;
                var$2 = $this.$sourceStream;
                var$3 = new jusi_FlatMappingToIntStreamImpl$next$lambda$_1_0;
                var$3.$_029 = $this;
                if (!jusi_ArrayStreamImpl_next(var$2, var$3))
                    break;
            }
            $this.$done = 1;
        }
        if ($this.$current2 === null)
            return 0;
    }
    b: {
        var$2 = $this.$current2;
        if (var$2 instanceof jusi_SimpleIntStreamImpl) {
            if (ju_BitSet$BitSetStream_next(var$2, $consumer))
                return 1;
            $this.$current2 = null;
        } else {
            var$3 = new jusi_SimpleIntStreamIterator;
            var$3.$stream2 = var$2;
            $this.$iterator1 = var$3;
            while (true) {
                var$2 = $this.$iterator1;
                jusi_SimpleIntStreamIterator_fetchIfNeeded(var$2);
                if (!(var$2.$state0 == 3 ? 0 : 1)) {
                    $this.$iterator1 = null;
                    $this.$current2 = null;
                    break b;
                }
                var$2 = $this.$iterator1;
                jusi_SimpleIntStreamIterator_fetchIfNeeded(var$2);
                $e = var$2.$state0;
                if ($e == 3) {
                    $consumer = new ju_NoSuchElementException;
                    jl_Exception__init_($consumer);
                    $rt_throw($consumer);
                }
                var$5 = var$2.$lastElement0;
                var$2.$state0 = $e != 2 ? 0 : 3;
                if (!jusi_SimpleIntStreamImpl$collect$lambda$_19_0_test($consumer, (jl_Integer_valueOf(var$5)).$value))
                    break;
            }
            return 1;
        }
    }
    return 1;
};
function jusi_ReducingConsumer() {
    let a = this; jl_Object.call(a);
    a.$accumulator = null;
    a.$result = null;
    a.$initialized = 0;
}
let jusi_ReducingConsumer__init_0 = ($this, $accumulator, $result, $initialized) => {
    $this.$accumulator = $accumulator;
    $this.$result = $result;
    $this.$initialized = $initialized;
},
jusi_ReducingConsumer__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jusi_ReducingConsumer();
    jusi_ReducingConsumer__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jusi_ReducingConsumer_test = ($this, $t) => {
    if (!$this.$initialized) {
        $this.$result = $t;
        $this.$initialized = 1;
    } else
        $this.$result = $this.$accumulator.$apply0($this.$result, $t);
    return 1;
};
let ju_Set = $rt_classWithoutFields(0);
let ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection);
let ju_AbstractSet__init_ = $this => {
    return;
};
let ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet);
function ju_TemplateCollections$NEtriesMap$1() {
    ju_TemplateCollections$AbstractImmutableSet.call(this);
    this.$this$0 = null;
}
function jusi_FilteringStreamImpl() {
    jusi_WrappingStreamImpl.call(this);
    this.$filter2 = null;
}
let jusi_FilteringStreamImpl_wrap = ($this, $consumer) => {
    let var$2;
    var$2 = new jusi_FilteringStreamImpl$wrap$lambda$_1_0;
    var$2.$_030 = $this;
    var$2.$_17 = $consumer;
    return var$2;
};
function uiuci_HTMLComponent$addEventListener$lambda$_10_0() {
    jl_Object.call(this);
    this.$_012 = null;
}
let uiuci_HTMLComponent$addEventListener$lambda$_10_0_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$_012.$accept(uiuci_HTMLComponent$HTMLMouseEvent__init_(uiu_MouseEvt$Type_MOVE, var$1));
};
function uiuci_HTMLComponent$addEventListener$lambda$_10_1() {
    jl_Object.call(this);
    this.$_013 = null;
}
let uiuci_HTMLComponent$addEventListener$lambda$_10_1_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$_013.$accept(uiuci_HTMLComponent$HTMLMouseEvent__init_(uiu_MouseEvt$Type_OVER, var$1));
};
function uiuci_HTMLComponent$addEventListener$lambda$_10_2() {
    jl_Object.call(this);
    this.$_014 = null;
}
let uiuci_HTMLComponent$addEventListener$lambda$_10_2_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$_014.$accept(uiuci_HTMLComponent$HTMLMouseEvent__init_(uiu_MouseEvt$Type_OUT, var$1));
};
function uiuci_HTMLComponent$addEventListener$lambda$_10_3() {
    jl_Object.call(this);
    this.$_015 = null;
}
let uiuci_HTMLComponent$addEventListener$lambda$_10_3_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$_015.$accept(uiuci_HTMLComponent$HTMLMouseEvent__init_(uiu_MouseEvt$Type_CLICK, var$1));
};
function uiuci_HTMLComponent$addEventListener$lambda$_10_4() {
    jl_Object.call(this);
    this.$_016 = null;
}
let uiuci_HTMLComponent$addEventListener$lambda$_10_4_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$_016.$accept(null);
};
let jlr_Array = $rt_classWithoutFields();
let jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
};
let jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException);
function uiuc_SelectOption() {
    let a = this; jl_Record.call(a);
    a.$value5 = null;
    a.$name1 = null;
}
let uiuc_GraphicsContext = $rt_classWithoutFields(0);
function uiuci_HTMLGraphicsContext() {
    jl_Record.call(this);
    this.$context = null;
}
function jusi_SimpleIntStreamImpl$collect$lambda$_19_0() {
    let a = this; jl_Object.call(a);
    a.$_011 = null;
    a.$_11 = null;
}
let jusi_SimpleIntStreamImpl$collect$lambda$_19_0_test = (var$0, var$1) => {
    var$0.$_011.$accept0(var$0.$_11, var$1);
    return 1;
};
let ju_Iterator = $rt_classWithoutFields(0);
function ju_TemplateCollections$NEtriesMap$1$1() {
    let a = this; jl_Object.call(a);
    a.$index3 = 0;
    a.$this$1 = null;
}
function jusi_SimpleIntStreamImpl$forEachOrdered$lambda$_15_0() {
    jl_Object.call(this);
    this.$_010 = null;
}
let jusi_SimpleIntStreamImpl$forEachOrdered$lambda$_15_0_test = (var$0, var$1) => {
    var$0.$_010.$accept1(var$1);
    return 1;
};
function jusi_MappingToObjStreamImpl$next$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_024 = null;
    a.$_15 = null;
}
let jusi_MappingToObjStreamImpl$next$lambda$_1_0_test = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_024;
    return var$0.$_15.$test0(var$2.$mapper0.$apply(var$1));
};
let jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
function jusi_SimpleStreamImpl$forEachOrdered$lambda$_19_0() {
    jl_Object.call(this);
    this.$_022 = null;
}
let jusi_SimpleStreamImpl$forEachOrdered$lambda$_19_0_test = (var$0, var$1) => {
    var$0.$_022.$accept(var$1);
    return 1;
};
function uiu_Border() {
    let a = this; jl_Record.call(a);
    a.$color1 = null;
    a.$type = null;
    a.$width = 0;
    a.$radius = 0;
}
let uiu_Border_BLACK = null, uiu_Border_TRANSPARENT = null, uiu_Border_GRAY = null, uiu_Border_YELLOW = null, uiu_Border_GRAY_INSET = null;
let uiu_Border_$callClinit = () => {
    uiu_Border_$callClinit = $rt_eraseClinit(uiu_Border);
    uiu_Border__clinit_();
};
let uiu_Border__init_ = ($this, $color, $type, $width, $radius) => {
    uiu_Border_$callClinit();
    $this.$color1 = $color;
    $this.$type = $type;
    $this.$width = $width;
    $this.$radius = $radius;
},
uiu_Border__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new uiu_Border();
    uiu_Border__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
uiu_Border_color = $color => {
    uiu_Border_$callClinit();
    return uiu_Border__init_0($color, $rt_s(36), 1, 0);
},
uiu_Border__clinit_ = () => {
    uiu_Border_BLACK = uiu_Border_color(uiu_Color_BLACK);
    uiu_Border_TRANSPARENT = uiu_Border_color(uiu_Color_TRANSPARENT);
    uiu_Border_GRAY = uiu_Border_color(uiu_Color_TRANS_GRAY);
    uiu_Border_YELLOW = uiu_Border_color(uiu_Color_SELECTION);
    uiu_Border_GRAY_INSET = uiu_Border__init_0(uiu_Color_GRAY, $rt_s(37), 1, 0);
};
function uiu_SelectEvent() {
    jl_Record.call(this);
    this.$value3 = null;
}
let uiu_HTMLUtil = $rt_classWithoutFields(0);
let uiu_HTMLUtil_convert = $color => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11;
    var$2 = $color.$a;
    if (var$2 !== 1.0) {
        var$3 = var$2 * 1000.0;
        var$4 = var$3 + jl_Math_sign(var$3) * 0.5 | 0;
        if (var$4 != 1000) {
            var$5 = $color.$r;
            var$6 = $color.$g;
            var$7 = $color.$b;
            var$8 = var$4 / 1000 | 0;
            var$9 = var$4 % 1000 | 0;
            if (var$9 < 10) {
                $color = jl_StringBuilder__init_();
                jl_StringBuilder_append2(jl_StringBuilder_append($color, $rt_s(38)), var$9);
                $color = jl_AbstractStringBuilder_toString($color);
            } else if (var$9 >= 100)
                $color = jl_AbstractStringBuilder_toString(jl_StringBuilder_append2(jl_StringBuilder__init_(), var$9));
            else {
                $color = jl_StringBuilder__init_();
                jl_StringBuilder_append2(jl_StringBuilder_append0($color, 48), var$9);
                $color = jl_AbstractStringBuilder_toString($color);
            }
            var$10 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append2(var$10, var$8), 46), $color);
            var$11 = jl_AbstractStringBuilder_toString(var$10);
            $color = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append($color, $rt_s(39)), var$5), 44), var$6), 44), var$7), 44), var$11), 41);
            return jl_AbstractStringBuilder_toString($color);
        }
    }
    var$5 = $color.$r;
    var$6 = $color.$g;
    var$4 = $color.$b;
    $color = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append($color, $rt_s(40)), var$5), 44), var$6), 44), var$4), 41);
    return jl_AbstractStringBuilder_toString($color);
};
let uiu_MouseEvt = $rt_classWithoutFields(0);
function uiuci_HTMLComponent$HTMLMouseEvent() {
    let a = this; jl_Object.call(a);
    a.$type0 = null;
    a.$e = null;
}
let uiuci_HTMLComponent$HTMLMouseEvent__init_0 = ($this, $type, $e) => {
    $this.$type0 = $type;
    $this.$e = $e;
},
uiuci_HTMLComponent$HTMLMouseEvent__init_ = (var_0, var_1) => {
    let var_2 = new uiuci_HTMLComponent$HTMLMouseEvent();
    uiuci_HTMLComponent$HTMLMouseEvent__init_0(var_2, var_0, var_1);
    return var_2;
};
let uiu_MouseEvt$Type = $rt_classWithoutFields(jl_Enum);
let uiu_MouseEvt$Type_OVER = null, uiu_MouseEvt$Type_OUT = null, uiu_MouseEvt$Type_MOVE = null, uiu_MouseEvt$Type_CLICK = null, uiu_MouseEvt$Type_$VALUES = null;
let uiu_MouseEvt$Type_values = () => {
    return uiu_MouseEvt$Type_$VALUES.$clone0();
},
uiu_MouseEvt$Type__clinit_ = () => {
    let var$1;
    var$1 = new uiu_MouseEvt$Type;
    jl_Enum__init_(var$1, $rt_s(41), 0);
    uiu_MouseEvt$Type_OVER = var$1;
    var$1 = new uiu_MouseEvt$Type;
    jl_Enum__init_(var$1, $rt_s(42), 1);
    uiu_MouseEvt$Type_OUT = var$1;
    var$1 = new uiu_MouseEvt$Type;
    jl_Enum__init_(var$1, $rt_s(43), 2);
    uiu_MouseEvt$Type_MOVE = var$1;
    var$1 = new uiu_MouseEvt$Type;
    jl_Enum__init_(var$1, $rt_s(44), 3);
    uiu_MouseEvt$Type_CLICK = var$1;
    uiu_MouseEvt$Type_$VALUES = $rt_wrapArray(uiu_MouseEvt$Type, [uiu_MouseEvt$Type_OVER, uiu_MouseEvt$Type_OUT, uiu_MouseEvt$Type_MOVE, var$1]);
};
let uiu_Color = $rt_classWithoutFields(0);
let uiu_Color_SELECTION = null, uiu_Color_TRANSPARENT = null, uiu_Color_TRANS_GRAY = null, uiu_Color_GRAY = null, uiu_Color_WHITE = null, uiu_Color_BLACK = null, uiu_Color_FRENCH_ROSE = null, uiu_Color_RED_FLAG = null, uiu_Color_TAN_FLAG = null, uiu_Color_ORANGE_FLAG = null, uiu_Color_TEAL_FLAG = null, uiu_Color_PINK_FLAG = null, uiu_Color_RED = null, uiu_Color_BLUE = null, uiu_Color_GREEN = null, uiu_Color_ORANGE = null, uiu_Color_POSSIBLE = null, uiu_Color_MOVE = null, uiu_Color_TOOLTIP_BACKGROUND = null,
uiu_Color_TOOLTIP_BORDER = null;
let uiu_Color__clinit_ = () => {
    uiu_Color_SELECTION = uiu_RGBAColor__init_(247, 222, 123);
    uiu_Color_TRANSPARENT = uiu_RGBAColor__init_0(0, 0, 0, 0.0);
    uiu_Color_TRANS_GRAY = uiu_RGBAColor__init_0(128, 128, 128, 0.5);
    uiu_Color_GRAY = uiu_RGBAColor__init_(128, 128, 128);
    uiu_Color_WHITE = uiu_RGBAColor__init_(255, 255, 255);
    uiu_Color_BLACK = uiu_RGBAColor__init_(0, 0, 0);
    uiu_Color_FRENCH_ROSE = uiu_RGBAColor__init_(255, 75, 125);
    uiu_Color_RED_FLAG = uiu_RGBAColor__init_(203, 24, 24);
    uiu_Color_TAN_FLAG = uiu_RGBAColor__init_(222, 181, 148);
    uiu_Color_ORANGE_FLAG = uiu_RGBAColor__init_(214, 99, 0);
    uiu_Color_TEAL_FLAG = uiu_RGBAColor__init_(79, 145, 153);
    uiu_Color_PINK_FLAG = uiu_RGBAColor__init_(178, 107, 123);
    uiu_Color_RED = uiu_RGBAColor__init_(255, 0, 0);
    uiu_Color_BLUE = uiu_RGBAColor__init_(0, 0, 255);
    uiu_Color_GREEN = uiu_RGBAColor__init_(0, 128, 0);
    uiu_Color_ORANGE = uiu_RGBAColor__init_(255, 165, 0);
    uiu_Color_POSSIBLE = uiu_RGBAColor__init_0(149, 69, 53, 0.25);
    uiu_Color_MOVE = uiu_RGBAColor__init_0(149, 69, 53, 0.5);
    uiu_Color_TOOLTIP_BACKGROUND = uiu_RGBAColor__init_(255, 255, 221);
    uiu_Color_TOOLTIP_BORDER = uiu_RGBAColor__init_(136, 136, 102);
};
function uiu_RGBAColor() {
    let a = this; jl_Record.call(a);
    a.$r = 0;
    a.$g = 0;
    a.$b = 0;
    a.$a = 0.0;
}
let uiu_RGBAColor__init_1 = ($this, $r, $g, $b) => {
    uiu_RGBAColor__init_2($this, $r, $g, $b, 1.0);
},
uiu_RGBAColor__init_ = (var_0, var_1, var_2) => {
    let var_3 = new uiu_RGBAColor();
    uiu_RGBAColor__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
uiu_RGBAColor__init_2 = ($this, $r, $g, $b, $a) => {
    $this.$r = $r;
    $this.$g = $g;
    $this.$b = $b;
    $this.$a = $a;
},
uiu_RGBAColor__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new uiu_RGBAColor();
    uiu_RGBAColor__init_2(var_4, var_0, var_1, var_2, var_3);
    return var_4;
};
function jusi_MappingStreamImpl$wrap$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_028 = null;
    a.$_16 = null;
}
let jusi_MappingStreamImpl$wrap$lambda$_1_0_test = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_028;
    return var$0.$_16.$test0(var$2.$mapper1.$apply1(var$1));
};
function jusi_FilteringStreamImpl$wrap$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_030 = null;
    a.$_17 = null;
}
let jusi_FilteringStreamImpl$wrap$lambda$_1_0_test = (var$0, var$1) => {
    let var$2, var$3;
    var$2 = var$0.$_030;
    var$3 = var$0.$_17;
    return var$2.$filter2.$test0(var$1) ? var$3.$test0(var$1) : 1;
};
function jusi_FlatMappingToIntStreamImpl$next$lambda$_1_0() {
    jl_Object.call(this);
    this.$_029 = null;
}
let jusi_FlatMappingToIntStreamImpl$next$lambda$_1_0_test = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_029;
    var$2.$current2 = ju_BitSet_stream(var$1);
    var$2.$currentSet = 1;
    return 0;
};
function jusi_SimpleStreamIterator() {
    let a = this; jl_Object.call(a);
    a.$stream1 = null;
    a.$lastElement = null;
    a.$state = 0;
}
let jusi_SimpleStreamIterator_fetchIfNeeded = $this => {
    let var$1, var$2;
    if ($this.$state)
        return;
    $this.$state = 0;
    while (!$this.$state) {
        var$1 = $this.$stream1;
        var$2 = new jusi_SimpleStreamIterator$fetchIfNeeded$lambda$_4_0;
        var$2.$_031 = $this;
        if (!var$1.$next(var$2)) {
            if ($this.$state)
                $this.$state = 2;
            else
                $this.$state = 3;
            $this.$stream1 = null;
        }
    }
};
let ju_PrimitiveIterator = $rt_classWithoutFields(0);
let ju_PrimitiveIterator$OfInt = $rt_classWithoutFields(0);
function uid_Point() {
    let a = this; jl_Record.call(a);
    a.$x = 0.0;
    a.$y = 0.0;
}
let uid_Point__init_0 = ($this, $x, $y) => {
    $this.$x = $x;
    $this.$y = $y;
},
uid_Point__init_ = (var_0, var_1) => {
    let var_2 = new uid_Point();
    uid_Point__init_0(var_2, var_0, var_1);
    return var_2;
},
uid_Point_add = ($this, $that) => {
    return uid_Point__init_($this.$x + $that.$x, $this.$y + $that.$y);
},
uid_Point_subtract = ($this, $that) => {
    return uid_Point__init_($this.$x - $that.$x, $this.$y - $that.$y);
},
uid_Point_mul = ($this, $scalar) => {
    return uid_Point__init_($this.$x * $scalar, $this.$y * $scalar);
},
uid_Point_dist = ($this, $that) => {
    let var$2, var$3;
    var$2 = $that.$x - $this.$x;
    var$3 = $that.$y - $this.$y;
    return jl_Math_sqrt(var$2 * var$2 + var$3 * var$3);
},
uid_Point_toString = $this => {
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append1(jl_StringBuilder_append3(jl_StringBuilder_append1(jl_StringBuilder_append3(jl_StringBuilder_append1(jl_StringBuilder__init_2($rt_s(45)), $rt_s(30)), $this.$x), $rt_s(31)), $this.$y), $rt_s(20)));
},
uid_Point_hashCode = $this => {
    return ((31 + jl_Double_hashCode($this.$x) | 0) * 31 | 0) + jl_Double_hashCode($this.$y) | 0;
},
uid_Point_equals = ($this, $o) => {
    let var$2;
    if ($this === $o)
        var$2 = 1;
    else if ($o !== null && jl_Object_getClass($o) === $rt_cls(uid_Point)) {
        $o = $o;
        var$2 = jl_Double_compare($this.$x, $o.$x) ? 0 : !jl_Double_compare($this.$y, $o.$y) ? 1 : 0;
    } else
        var$2 = 0;
    return var$2;
};
function ui_Client$lambda$main$1$lambda$_10_0() {
    jl_Object.call(this);
    this.$_01 = null;
}
let jus_Collectors = $rt_classWithoutFields();
let juf_ToDoubleFunction = $rt_classWithoutFields(0);
function ui_Client$lambda$main$1$lambda$_10_1() {
    jl_Object.call(this);
    this.$_04 = null;
}
let ui_Client$lambda$main$1$lambda$_10_1_applyAsDouble = (var$0, var$1) => {
    var$1 = var$1;
    return (ju_HashMap_get(var$0.$_04, var$1)).$doubleValue();
};
function jl_Double() {
    jl_Number.call(this);
    this.$value2 = 0.0;
}
let jl_Double_TYPE = null;
let jl_Double__init_ = ($this, $value) => {
    $this.$value2 = $value;
},
jl_Double__init_0 = var_0 => {
    let var_1 = new jl_Double();
    jl_Double__init_(var_1, var_0);
    return var_1;
},
jl_Double_doubleValue = $this => {
    return $this.$value2;
},
jl_Double_toString = $this => {
    let var$1;
    var$1 = $this.$value2;
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append3(jl_StringBuilder__init_(), var$1));
},
jl_Double_equals = ($this, $other) => {
    if ($this === $other)
        return 1;
    return $other instanceof jl_Double && $rt_equalDoubles($this.$value2, $other.$value2) ? 1 : 0;
},
jl_Double_hashCode0 = $this => {
    return jl_Double_hashCode($this.$value2);
},
jl_Double_hashCode = $d => {
    let $h;
    $h = jl_Double_doubleToLongBits($d);
    return Long_hi($h) ^ Long_lo($h);
},
jl_Double_compare = ($a, $b) => {
    let $diff, var$4, var$5;
    $diff = ($a <= $b ? 0 : 1) - ($b <= $a ? 0 : 1) | 0;
    if (!$diff) {
        var$4 = 1.0 / $a;
        var$5 = 1.0 / $b;
        $diff = (((var$4 <= var$5 ? 0 : 1) - (var$5 <= var$4 ? 0 : 1) | 0) + ($b !== $b ? 0 : 1) | 0) - ($a !== $a ? 0 : 1) | 0;
    }
    return $diff;
},
jl_Double_doubleToLongBits = $value => {
    if (!(isNaN($value) ? 1 : 0))
        return $rt_doubleToRawLongBits($value);
    return Long_create(0, 2146959360);
},
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
};
let juf_Function$identity$lambda$_3_0 = $rt_classWithoutFields();
let jus_Collectors$toMap$lambda$_12_0 = $rt_classWithoutFields();
function jus_Collectors$toMap$lambda$_12_1() {
    let a = this; jl_Object.call(a);
    a.$_02 = null;
    a.$_1 = null;
}
let jus_Collectors$toMap$lambda$_12_2 = $rt_classWithoutFields();
let jus_Collector$Characteristics = $rt_classWithoutFields(jl_Enum);
let jus_Collector$Characteristics_CONCURRENT = null, jus_Collector$Characteristics_UNORDERED = null, jus_Collector$Characteristics_IDENTITY_FINISH = null, jus_Collector$Characteristics_$VALUES = null;
let jus_Collector$Characteristics_values = () => {
    return jus_Collector$Characteristics_$VALUES.$clone0();
},
jus_Collector$Characteristics__clinit_ = () => {
    let var$1;
    var$1 = new jus_Collector$Characteristics;
    jl_Enum__init_(var$1, $rt_s(46), 0);
    jus_Collector$Characteristics_CONCURRENT = var$1;
    var$1 = new jus_Collector$Characteristics;
    jl_Enum__init_(var$1, $rt_s(47), 1);
    jus_Collector$Characteristics_UNORDERED = var$1;
    var$1 = new jus_Collector$Characteristics;
    jl_Enum__init_(var$1, $rt_s(48), 2);
    jus_Collector$Characteristics_IDENTITY_FINISH = var$1;
    jus_Collector$Characteristics_$VALUES = $rt_wrapArray(jus_Collector$Characteristics, [jus_Collector$Characteristics_CONCURRENT, jus_Collector$Characteristics_UNORDERED, var$1]);
};
let jus_Collector = $rt_classWithoutFields(0);
function ju_Comparator$comparingDouble$lambda$_16_0() {
    jl_Object.call(this);
    this.$_05 = null;
}
let ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException);
let jus_Collector$of$lambda$_5_0 = $rt_classWithoutFields();
let ju_EnumSet = $rt_classWithoutFields(ju_AbstractSet);
function jus_CollectorImpl() {
    let a = this; jl_Object.call(a);
    a.$supplier = null;
    a.$accumulator0 = null;
    a.$combiner = null;
    a.$finisher = null;
    a.$characteristics = null;
}
function ju_GenericEnumSet() {
    let a = this; ju_EnumSet.call(a);
    a.$cls = null;
    a.$bits = null;
}
let ju_GenericEnumSet_add = ($this, $t) => {
    let $tCls, $n, $bitNumber, $bit, var$6;
    $tCls = jl_Object_getClass($t);
    if ($tCls !== $this.$cls && jl_Class_getSuperclass($tCls) !== $this.$cls) {
        $t = new jl_ClassCastException;
        jl_Exception__init_($t);
        $rt_throw($t);
    }
    $n = $t.$ordinal;
    $bitNumber = $n / 32 | 0;
    $bit = 1 << ($n % 32 | 0);
    var$6 = $this.$bits.data;
    if (var$6[$bitNumber] & $bit)
        return 0;
    var$6[$bitNumber] = var$6[$bitNumber] | $bit;
    return 1;
};
function ju_Arrays$ArrayAsList() {
    ju_AbstractList.call(this);
    this.$array = null;
}
let ju_Arrays$ArrayAsList_get = ($this, $index) => {
    return $this.$array.data[$index];
};
function ju_BitSet$BitSetStream() {
    let a = this; jusi_SimpleIntStreamImpl.call(a);
    a.$current0 = 0;
    a.$this$01 = null;
}
let ju_BitSet$BitSetStream_next = ($this, $consumer) => {
    let var$2;
    while (true) {
        var$2 = $this.$current0;
        if (var$2 < 0)
            break;
        if (!$consumer.$test(var$2))
            return 1;
        $this.$current0 = ju_BitSet_nextSetBit($this.$this$01, $this.$current0 + 1 | 0);
    }
    return 0;
};
function jusi_FilteringIntStreamImpl$wrap$lambda$_1_0() {
    let a = this; jl_Object.call(a);
    a.$_017 = null;
    a.$_12 = null;
}
let jusi_FilteringIntStreamImpl$wrap$lambda$_1_0_test = (var$0, var$1) => {
    let var$2, var$3;
    var$2 = var$0.$_017;
    var$3 = var$0.$_12;
    return var$2.$filter1.$test(var$1) ? var$3.$test(var$1) : 1;
};
function jusi_BoxedIntStream() {
    jusi_SimpleStreamImpl.call(this);
    this.$source0 = null;
}
let jusi_BoxedIntStream_next = ($this, $consumer) => {
    let var$2, var$3;
    var$2 = $this.$source0;
    ju_Objects_requireNonNull($consumer);
    var$3 = new jusi_BoxedIntStream$next$lambda$_1_0;
    var$3.$_032 = $consumer;
    return jusi_RangeIntStream_next(var$2, var$3);
};
function jusi_SimpleStreamIterator$fetchIfNeeded$lambda$_4_0() {
    jl_Object.call(this);
    this.$_031 = null;
}
let jusi_SimpleStreamIterator$fetchIfNeeded$lambda$_4_0_test = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_031;
    var$2.$lastElement = var$1;
    var$2.$state = 1;
    return 0;
};
let jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception);
function jusi_SimpleStreamImpl$collect$lambda$_26_0() {
    let a = this; jl_Object.call(a);
    a.$_03 = null;
    a.$_10 = null;
}
let jusi_SimpleStreamImpl$collect$lambda$_26_0_test = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18;
    var$2 = var$0.$_03;
    var$3 = var$0.$_10;
    var$2 = var$2.$_1.$_01;
    ui_Client_$callClinit();
    var$4 = ui_Client_model.data[var$1.$value];
    var$5 = 1.7976931348623157E308;
    var$6 = var$4.$bezier0.data;
    var$7 = var$6.length;
    var$8 = 0;
    while (var$8 < var$7) {
        var$9 = var$6[var$8];
        var$10 = 0;
        while (var$10 < 1000) {
            var$11 = var$9.data;
            var$12 = 1.0 * var$10 / 1000.0;
            var$13 = 1.0 - var$12;
            var$14 = var$13 * var$13 * var$13;
            var$15 = 3.0 * var$13;
            var$13 = var$15 * var$13 * var$12;
            var$15 = var$15 * var$12 * var$12;
            var$12 = var$12 * var$12 * var$12;
            var$5 = jl_Math_minImpl(var$5, uid_Point_dist(uid_Point_add(uid_Point_add(uid_Point_add(uid_Point_mul(var$11[0], var$14), uid_Point_mul(var$11[1], var$13)), uid_Point_mul(var$11[2], var$15)), uid_Point_mul(var$11[3], var$12)), var$2));
            var$10 = var$10 + 1 | 0;
        }
        var$8 = var$8 + 1 | 0;
    }
    var$2 = ju_Objects_requireNonNull(jl_Double__init_0(var$5));
    var$16 = ju_HashMap_get(var$3, var$1);
    if (var$16 === null) {
        var$7 = jl_Integer_hashCode(var$1);
        var$17 = var$7 & (var$3.$elementData.data.length - 1 | 0);
        var$4 = ju_HashMap_findNonNullKeyEntry(var$3, var$1, var$17, var$7);
        if (var$4 === null) {
            var$3.$modCount0 = var$3.$modCount0 + 1 | 0;
            var$4 = ju_HashMap_createHashedEntry(var$3, var$1, var$17, var$7);
            var$7 = var$3.$elementCount + 1 | 0;
            var$3.$elementCount = var$7;
            if (var$7 > var$3.$threshold)
                ju_HashMap_rehash(var$3);
        }
        var$16 = var$4.$value4;
        var$4.$value4 = var$2;
    }
    if (var$16 === null)
        return 1;
    var$3 = new jl_IllegalStateException;
    var$18 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$18, $rt_s(49)), var$1), $rt_s(50)), var$16), $rt_s(51)), var$2);
    jl_RuntimeException__init_2(var$3, jl_AbstractStringBuilder_toString(var$18));
    $rt_throw(var$3);
};
function jusi_SimpleStreamImpl$min$lambda$_27_0() {
    jl_Object.call(this);
    this.$_06 = null;
}
let jusi_SimpleStreamImpl$min$lambda$_27_0_apply = (var$0, var$1, var$2) => {
    let var$3;
    var$3 = var$0.$_06.$_05;
    if (jl_Double_compare(ui_Client$lambda$main$1$lambda$_10_1_applyAsDouble(var$3, var$1), ui_Client$lambda$main$1$lambda$_10_1_applyAsDouble(var$3, var$2)) <= 0)
        var$2 = var$1;
    return var$2;
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index = 0;
    a.$modCount1 = 0;
    a.$size = 0;
    a.$removeIndex = 0;
    a.$this$00 = null;
}
let ju_AbstractList$1__init_0 = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    $this.$modCount1 = $this$0.$modCount;
    $this.$size = $this$0.$array.data.length;
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_ = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_0(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    let var$1;
    if ($this.$modCount1 >= $this.$this$00.$modCount)
        return;
    var$1 = new ju_ConcurrentModificationException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
};
let uid_TextColor = $rt_classWithoutFields(jl_Enum);
let uid_TextColor_black = null, uid_TextColor_blue = null, uid_TextColor_brown = null, uid_TextColor_cyan = null, uid_TextColor_darkgray = null, uid_TextColor_gray = null, uid_TextColor_green = null, uid_TextColor_lightgray = null, uid_TextColor_lime = null, uid_TextColor_magenta = null, uid_TextColor_olive = null, uid_TextColor_orange = null, uid_TextColor_pink = null, uid_TextColor_purple = null, uid_TextColor_red = null, uid_TextColor_teal = null, uid_TextColor_violet = null, uid_TextColor_yellow = null,
uid_TextColor_white = null, uid_TextColor_$VALUES = null;
let uid_TextColor_values = () => {
    return uid_TextColor_$VALUES.$clone0();
},
uid_TextColor__clinit_ = () => {
    let var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(52), 0);
    uid_TextColor_black = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(53), 1);
    uid_TextColor_blue = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(54), 2);
    uid_TextColor_brown = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(55), 3);
    uid_TextColor_cyan = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(56), 4);
    uid_TextColor_darkgray = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(57), 5);
    uid_TextColor_gray = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(58), 6);
    uid_TextColor_green = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(59), 7);
    uid_TextColor_lightgray = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(60), 8);
    uid_TextColor_lime = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(61), 9);
    uid_TextColor_magenta = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(62), 10);
    uid_TextColor_olive = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(63), 11);
    uid_TextColor_orange = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(64), 12);
    uid_TextColor_pink = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(65), 13);
    uid_TextColor_purple = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(66), 14);
    uid_TextColor_red = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(67), 15);
    uid_TextColor_teal = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(68), 16);
    uid_TextColor_violet = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(69), 17);
    uid_TextColor_yellow = var$1;
    var$1 = new uid_TextColor;
    jl_Enum__init_(var$1, $rt_s(70), 18);
    uid_TextColor_white = var$1;
    uid_TextColor_$VALUES = $rt_wrapArray(uid_TextColor, [uid_TextColor_black, uid_TextColor_blue, uid_TextColor_brown, uid_TextColor_cyan, uid_TextColor_darkgray, uid_TextColor_gray, uid_TextColor_green, uid_TextColor_lightgray, uid_TextColor_lime, uid_TextColor_magenta, uid_TextColor_olive, uid_TextColor_orange, uid_TextColor_pink, uid_TextColor_purple, uid_TextColor_red, uid_TextColor_teal, uid_TextColor_violet, uid_TextColor_yellow, var$1]);
};
let jur_RandomGenerator = $rt_classWithoutFields(0);
let ju_Random = $rt_classWithoutFields();
let juc_ThreadLocalRandom = $rt_classWithoutFields(ju_Random);
let juc_ThreadLocalRandom_current = null;
let juc_ThreadLocalRandom__clinit_ = () => {
    juc_ThreadLocalRandom_current = new juc_ThreadLocalRandom;
};
function uid_F9Point$lambda$generateUnital$11$lambda$_16_0() {
    jl_Object.call(this);
    this.$_025 = null;
}
let uid_F9Point$lambda$generateUnital$11$lambda$_16_0_test = (var$0, var$1) => {
    return ju_BitSet_get(var$0.$_025, var$1);
};
let uid_F9Point$lambda$generateUnital$11$lambda$_16_1 = $rt_classWithoutFields();
let uid_F9Point$lambda$generateUnital$11$lambda$_16_1_get = var$0 => {
    return ju_BitSet__init_();
};
let uid_F9Point$lambda$generateUnital$11$lambda$_16_2 = $rt_classWithoutFields();
let uid_F9Point$lambda$generateUnital$11$lambda$_16_2_accept = (var$0, var$1, var$2) => {
    ju_BitSet_set(var$1, var$2);
};
let uid_F9Point$lambda$generateUnital$11$lambda$_16_3 = $rt_classWithoutFields();
let uid_F9Point$lambda$generateLines$6$lambda$_21_0 = $rt_classWithoutFields();
let uid_F9Point$lambda$generateLines$6$lambda$_21_0_test = (var$0, var$1) => {
    var$1 = var$1;
    uid_F9_$callClinit();
    return uid_F9_equals(var$1, uid_F9_ZERO) ? 0 : 1;
};
function uid_F9Point$lambda$generateLines$6$lambda$_21_1() {
    jl_Object.call(this);
    this.$_026 = null;
}
let uid_F9Point$lambda$generateLines$6$lambda$_21_1_apply = (var$0, var$1) => {
    let var$2, var$3;
    var$1 = var$1;
    var$2 = var$0.$_026;
    var$3 = new uid_F9Point;
    uid_F9_$callClinit();
    uid_F9Point__init_(var$3, uid_F9_ONE, var$2);
    return uid_F9Point__init_0(uid_F9_mul(var$1, var$3.$x0), uid_F9_mul(var$1, var$3.$y0));
};
let uid_F9Point$lambda$generateLines$6$lambda$_21_2 = $rt_classWithoutFields();
let uid_F9Point$lambda$generateLines$6$lambda$_21_2_apply = (var$0, var$1) => {
    return $rt_createArray(uid_F9Point, var$1);
};
let otpp_ResourceAccessor = $rt_classWithoutFields();
let otciu_UnicodeHelper = $rt_classWithoutFields();
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_Base46 = $rt_classWithoutFields();
let otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, $hasMore, $digit;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        $hasMore = $seq.$pointer;
        $seq.$pointer = $hasMore + 1 | 0;
        $digit = var$4[$hasMore];
        $digit = $digit < 34 ? $digit - 32 | 0 : $digit >= 92 ? ($digit - 32 | 0) - 2 | 0 : ($digit - 32 | 0) - 1 | 0;
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
};
function jusi_BoxedIntStream$next$lambda$_1_0() {
    jl_Object.call(this);
    this.$_032 = null;
}
let jusi_BoxedIntStream$next$lambda$_1_0_test = (var$0, var$1) => {
    return var$0.$_032.$test0(jl_Integer_valueOf(var$1));
};
function jusi_SimpleIntStreamIterator() {
    let a = this; jl_Object.call(a);
    a.$stream2 = null;
    a.$lastElement0 = 0;
    a.$state0 = 0;
}
let jusi_SimpleIntStreamIterator_fetchIfNeeded = $this => {
    let var$1, var$2;
    if ($this.$state0)
        return;
    $this.$state0 = 0;
    while (!$this.$state0) {
        var$1 = $this.$stream2;
        var$2 = new jusi_SimpleIntStreamIterator$fetchIfNeeded$lambda$_3_0;
        var$2.$_033 = $this;
        if (!ju_BitSet$BitSetStream_next(var$1, var$2)) {
            if ($this.$state0)
                $this.$state0 = 2;
            else
                $this.$state0 = 3;
            $this.$stream2 = null;
        }
    }
};
function uid_Visualizer$bezier$lambda$_3_0() {
    jl_Object.call(this);
    this.$_07 = null;
}
let uid_Visualizer$bezier$lambda$_3_0_apply = (var$0, var$1) => {
    return var$0.$_07.$coordinate(var$1);
};
let uid_Visualizer$bezier$lambda$_3_1 = $rt_classWithoutFields();
let uid_Visualizer$bezier$lambda$_3_1_apply = (var$0, var$1) => {
    return $rt_createArray(uid_Point, var$1);
};
let ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap_calculateCapacity = $x => {
    let var$2;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    $x = var$2 | var$2 >> 1;
    $x = $x | $x >> 2;
    $x = $x | $x >> 4;
    $x = $x | $x >> 8;
    return ($x | $x >> 16) + 1 | 0;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_containsKey = ($this, $key) => {
    return ju_HashMap_entryByKey($this, $key) === null ? 0 : 1;
},
ju_HashMap_entrySet = $this => {
    let var$1;
    var$1 = new ju_HashMap$HashMapEntrySet;
    var$1.$associatedMap = $this;
    return var$1;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value4;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, var$3;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        var$3 = $key.$value;
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, var$3 & ($this.$elementData.data.length - 1 | 0), var$3);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m, var$5;
    $m = $this.$elementData.data[$index];
    while ($m !== null) {
        if ($m.$origKeyHash == $keyHash) {
            var$5 = $m.$key0;
            if ($key !== var$5 && !jl_Integer_equals($key, var$5) ? 0 : 1)
                break;
        }
        $m = $m.$next2;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key0 !== null) {
        $m = $m.$next2;
    }
    return $m;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry, var$5, var$6;
    $entry = new ju_HashMap$HashEntry;
    var$5 = null;
    $entry.$key0 = $key;
    $entry.$value4 = var$5;
    $entry.$origKeyHash = $hash;
    var$6 = $this.$elementData.data;
    $entry.$next2 = var$6[$index];
    var$6[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = $this.$elementData.data.length;
    var$1 = ju_HashMap_calculateCapacity(!var$1 ? 1 : var$1 << 1);
    var$2 = $rt_createArray(ju_HashMap$HashEntry, var$1);
    var$3 = var$2.data;
    var$4 = 0;
    var$5 = var$1 - 1 | 0;
    while (true) {
        var$6 = $this.$elementData.data;
        if (var$4 >= var$6.length)
            break;
        var$7 = var$6[var$4];
        var$6[var$4] = null;
        while (var$7 !== null) {
            var$1 = var$7.$origKeyHash & var$5;
            var$8 = var$7.$next2;
            var$7.$next2 = var$3[var$1];
            var$3[var$1] = var$7;
            var$7 = var$8;
        }
        var$4 = var$4 + 1 | 0;
    }
    $this.$elementData = var$2;
    ju_HashMap_computeThreshold($this);
};
function jusi_SimpleIntStreamIterator$fetchIfNeeded$lambda$_3_0() {
    jl_Object.call(this);
    this.$_033 = null;
}
let jusi_SimpleIntStreamIterator$fetchIfNeeded$lambda$_3_0_test = (var$0, var$1) => {
    let var$2;
    var$2 = var$0.$_033;
    var$2.$lastElement0 = var$1;
    var$2.$state0 = 1;
    return 0;
};
let ui_Client$drawLine$lambda$_4_0 = $rt_classWithoutFields();
let ui_Client$drawLine$lambda$_4_0_accept = (var$0, var$1) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13;
    var$2 = var$1.data;
    ui_Client_$callClinit();
    var$1 = ui_Client_context;
    var$3 = var$2[0];
    var$4 = var$2[1];
    var$5 = var$2[2];
    var$6 = var$2[3];
    var$1.$context.beginPath();
    var$7 = var$1.$context;
    var$8 = var$3.$x;
    var$9 = var$3.$y;
    var$7.moveTo(var$8, var$9);
    var$3 = var$1.$context;
    var$10 = var$4.$x;
    var$11 = var$4.$y;
    var$12 = var$5.$x;
    var$8 = var$5.$y;
    var$9 = var$6.$x;
    var$13 = var$6.$y;
    var$3.bezierCurveTo(var$10, var$11, var$12, var$8, var$9, var$13);
    var$1.$context.stroke();
};
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key0 = null;
    a.$value4 = null;
}
let ju_MapEntry_getKey = $this => {
    return $this.$key0;
},
ju_MapEntry_getValue = $this => {
    return $this.$value4;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next2 = null;
}
function ju_HashMap$HashMapEntrySet() {
    ju_AbstractSet.call(this);
    this.$associatedMap = null;
}
let ju_HashMap$HashMapEntrySet_iterator = $this => {
    let var$1, var$2;
    var$1 = new ju_HashMap$EntryIterator;
    var$2 = $this.$associatedMap;
    var$1.$associatedMap0 = var$2;
    var$1.$expectedModCount = var$2.$modCount0;
    var$1.$futureEntry = null;
    return var$1;
};
let jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException);
function ju_HashMap$AbstractMapIterator() {
    let a = this; jl_Object.call(a);
    a.$position = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
    a.$prevEntry = null;
    a.$associatedMap0 = null;
}
let ju_HashMap$AbstractMapIterator_hasNext = $this => {
    let var$1, var$2;
    if ($this.$futureEntry !== null)
        return 1;
    while (true) {
        var$1 = $this.$position;
        var$2 = $this.$associatedMap0.$elementData.data;
        if (var$1 >= var$2.length)
            break;
        if (var$2[var$1] !== null)
            return 1;
        $this.$position = var$1 + 1 | 0;
    }
    return 0;
};
let ju_HashMap$EntryIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator);
let ju_HashMap$EntryIterator_next = $this => {
    let var$1, var$2, var$3, var$4;
    if ($this.$expectedModCount != $this.$associatedMap0.$modCount0) {
        var$1 = new ju_ConcurrentModificationException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    if (!ju_HashMap$AbstractMapIterator_hasNext($this)) {
        var$1 = new ju_NoSuchElementException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    var$1 = $this.$futureEntry;
    if (var$1 !== null) {
        var$2 = $this.$currentEntry;
        if (var$2 !== null)
            $this.$prevEntry = var$2;
        $this.$currentEntry = var$1;
        $this.$futureEntry = var$1.$next2;
    } else {
        var$3 = $this.$associatedMap0.$elementData.data;
        var$4 = $this.$position;
        $this.$position = var$4 + 1 | 0;
        var$1 = var$3[var$4];
        $this.$currentEntry = var$1;
        $this.$futureEntry = var$1.$next2;
        $this.$prevEntry = null;
    }
    return $this.$currentEntry;
};
let jl_AbstractStringBuilder$Constants = $rt_classWithoutFields();
let jl_AbstractStringBuilder$Constants_intPowersOfTen = null, jl_AbstractStringBuilder$Constants_longPowersOfTen = null, jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null, jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null, jl_AbstractStringBuilder$Constants_floatAnalysisResult = null;
let jl_AbstractStringBuilder$Constants__clinit_ = () => {
    jl_AbstractStringBuilder$Constants_intPowersOfTen = $rt_createIntArrayFromData([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    jl_AbstractStringBuilder$Constants_longPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(1000), Long_fromInt(10000), Long_fromInt(100000), Long_fromInt(1000000), Long_fromInt(10000000), Long_fromInt(100000000), Long_fromInt(1000000000), Long_create(1410065408, 2), Long_create(1215752192, 23), Long_create(3567587328, 232), Long_create(1316134912, 2328), Long_create(276447232, 23283), Long_create(2764472320, 232830), Long_create(1874919424, 2328306),
    Long_create(1569325056, 23283064), Long_create(2808348672, 232830643)]);
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), Long_create(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = new otcit_DoubleAnalyzer$Result;
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = new otcit_FloatAnalyzer$Result;
};
let otcit_DoubleAnalyzer = $rt_classWithoutFields();
let otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO, otcit_DoubleAnalyzer_mantissa10Table = null, otcit_DoubleAnalyzer_exp10Table = null;
let otcit_DoubleAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $posCmp, $mantissaShift, $decExponent, $binExponentCorrection, var$11, $decMantissa, $decMantissaHi, $decMantissaLow, $lowerPos, $lowerPos_0, $upperPos, $upperPos_0;
    $bits = jl_Double_doubleToLongBits($d);
    $result.$sign0 = Long_eq(Long_and($bits, Long_create(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, Long_create(4294967295, 1048575));
    $exponent = Long_lo(Long_shr($bits, 52)) & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent0 = 0;
        return;
    }
    if ($exponent)
        $mantissa = Long_or($mantissa, Long_create(0, 1048576));
    else {
        $mantissa = Long_shl($mantissa, 1);
        while (Long_eq(Long_and($mantissa, Long_create(0, 1048576)), Long_ZERO)) {
            $mantissa = Long_shl($mantissa, 1);
            $exponent = $exponent + (-1) | 0;
        }
    }
    var$6 = otcit_DoubleAnalyzer_exp10Table.data;
    $posCmp = $exponent << 16 >> 16;
    $mantissaShift = 0;
    $decExponent = var$6.length;
    if ($mantissaShift > $decExponent) {
        $result = new jl_IllegalArgumentException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $binExponentCorrection = $decExponent - 1 | 0;
    a: {
        while (true) {
            if ($mantissaShift > $binExponentCorrection) {
                $decExponent = ( -$mantissaShift | 0) - 1 | 0;
                break a;
            }
            $decExponent = ($mantissaShift + $binExponentCorrection | 0) / 2 | 0;
            var$11 = $rt_compare(var$6[$decExponent], $posCmp);
            if (!var$11)
                break;
            if (var$11 <= 0)
                $mantissaShift = $decExponent + 1 | 0;
            else
                $binExponentCorrection = $decExponent - 1 | 0;
        }
    }
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    $posCmp = $decExponent + 1 | 0;
    $mantissaShift = 12 + ($exponent - var$6[$posCmp] | 0) | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $mantissaShift);
    if (Long_le($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA)) {
        while (jl_Long_compareUnsigned($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = Long_add(Long_mul($decMantissa, Long_fromInt(10)), Long_fromInt(9));
        }
        var$6 = otcit_DoubleAnalyzer_exp10Table.data;
        $posCmp = $decExponent + 1 | 0;
        $mantissaShift = 12 + ($exponent - var$6[$posCmp] | 0) | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $mantissaShift);
    }
    $mantissa = Long_shl($mantissa, 1);
    $bits = Long_add($mantissa, Long_fromInt(1));
    var$6 = otcit_DoubleAnalyzer_mantissa10Table.data;
    $posCmp = $decExponent + 1 | 0;
    $decMantissaHi = var$6[$posCmp];
    $exponent = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight($bits, $decMantissaHi, $exponent);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub($mantissa, Long_fromInt(1)), otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $exponent);
    $lowerPos = Long_fromInt(1);
    while (true) {
        $lowerPos_0 = Long_mul($lowerPos, Long_fromInt(10));
        if (jl_Long_compareUnsigned(jl_Long_divideUnsigned($decMantissa, $lowerPos_0), jl_Long_divideUnsigned($decMantissaLow, $lowerPos_0)) <= 0)
            break;
        $lowerPos = $lowerPos_0;
    }
    $upperPos = Long_fromInt(1);
    while (true) {
        $upperPos_0 = Long_mul($upperPos, Long_fromInt(10));
        if (jl_Long_compareUnsigned(jl_Long_divideUnsigned($decMantissa, $upperPos_0), jl_Long_divideUnsigned($decMantissaHi, $upperPos_0)) >= 0)
            break;
        $upperPos = $upperPos_0;
    }
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    $mantissa = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned($mantissa, Long_create(2808348672, 232830643)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            $mantissa = jl_Long_divideUnsigned($mantissa, Long_fromInt(10));
            if (jl_Long_compareUnsigned($mantissa, Long_create(2808348672, 232830643)) < 0)
                break;
        }
    else if (jl_Long_compareUnsigned($mantissa, Long_create(1569325056, 23283064)) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        $mantissa = Long_mul($mantissa, Long_fromInt(10));
    }
    $result.$mantissa = $mantissa;
    $result.$exponent0 = $decExponent - 330 | 0;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4;
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    return Long_add(Long_add(Long_add(Long_shl(Long_mul($b4, $a4), 32 + $shift | 0), Long_shl(Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4)), 16 + $shift | 0)), Long_shl(Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4)), $shift)), Long_shru(Long_add(Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3)), Long_shl(Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4)), 16)), 32 - $shift | 0));
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
};
function otcit_DoubleAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent0 = 0;
    a.$sign0 = 0;
}
let jl_Long = $rt_classWithoutFields(jl_Number);
let jl_Long_TYPE = null;
let jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
let otcit_FloatAnalyzer$Result = $rt_classWithoutFields();
$rt_packages([-1, "java", 0, "util", 1, "stream", 2, "impl", 0, "lang", -1, "ua", 5, "ihromant", 6, "ui", 6, "domain"
]);
$rt_metadata([jl_Object, "Object", 4, 0, [], 0, 3, 0, 0, ["$hashCode", $rt_wrapFunction0(jl_Object_hashCode), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString)],
ui_Client, 0, jl_Object, [], 0, 3, 0, ui_Client_$callClinit, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 0, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 0, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String, "String", 4, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_String_toString), "$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Integer, "Integer", 4, jl_Number, [jl_Comparable], 0, 3, 0, 0, ["$doubleValue", $rt_wrapFunction0(jl_Integer_doubleValue), "$toString", $rt_wrapFunction0(jl_Integer_toString), "$hashCode", $rt_wrapFunction0(jl_Integer_hashCode), "$equals", $rt_wrapFunction1(jl_Integer_equals)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity)],
uiu_LineConf, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Record, 0, jl_Object, [], 1, 3, 0, 0, 0,
uiu_Box, 0, jl_Record, [], 32772, 3, 0, 0, 0,
juf_Consumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
ui_Client$main$lambda$_1_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(ui_Client$main$lambda$_1_0_accept)],
juf_BiConsumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
ui_Client$main$lambda$_1_1, "Client$main$lambda$_1_1", 6, jl_Object, [juf_BiConsumer], 0, 3, 0, 0, 0,
ui_Client$main$lambda$_1_2, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(ui_Client$main$lambda$_1_2_accept)],
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
uid_Visualizer, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_UnitalVisualizer, "UnitalVisualizer", 8, jl_Object, [uid_Visualizer], 0, 3, 0, 0, ["$coordinate", $rt_wrapFunction1(uid_UnitalVisualizer_coordinate), "$lines", $rt_wrapFunction0(uid_UnitalVisualizer_lines), "$points", $rt_wrapFunction0(uid_UnitalVisualizer_points)],
uid_STS13Visualizer, "STS13Visualizer", 8, jl_Object, [uid_Visualizer], 0, 3, 0, uid_STS13Visualizer_$callClinit, ["$coordinate", $rt_wrapFunction1(uid_STS13Visualizer_coordinate), "$lines", $rt_wrapFunction0(uid_STS13Visualizer_lines), "$points", $rt_wrapFunction0(uid_STS13Visualizer_points)],
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiu_UIFactory, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiu_HTMLUIFactory, 0, jl_Object, [uiu_UIFactory], 0, 3, 0, uiu_HTMLUIFactory_$callClinit, 0,
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jus_BaseStream, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
jus_IntStream, 0, jl_Object, [jus_BaseStream], 3, 3, 0, 0, 0,
juf_IntPredicate, 0, jl_Object, [], 3, 3, 0, 0, 0,
ui_Client$repaint$lambda$_2_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(ui_Client$repaint$lambda$_2_0_test)],
juf_IntConsumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
ui_Client$repaint$lambda$_2_1, 0, jl_Object, [juf_IntConsumer], 0, 3, 0, 0, ["$accept1", $rt_wrapFunction1(ui_Client$repaint$lambda$_2_1_accept)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_112_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, ["$equals", $rt_wrapFunction1(ju_AbstractMap_equals), "$hashCode", $rt_wrapFunction0(ju_AbstractMap_hashCode), "$toString", $rt_wrapFunction0(ju_AbstractMap_toString)],
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1, 0, 0, 0, 0,
ju_TemplateCollections$NEtriesMap, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
jusi_SimpleIntStreamImpl, 0, jl_Object, [jus_IntStream], 1, 3, 0, 0, ["$estimateSize", $rt_wrapFunction0(jusi_SimpleIntStreamImpl_estimateSize)]]);
$rt_metadata([jusi_RangeIntStream, 0, jusi_SimpleIntStreamImpl, [], 0, 3, 0, 0, ["$next1", $rt_wrapFunction1(jusi_RangeIntStream_next)],
uid_LineData, "LineData", 8, jl_Record, [], 32772, 3, 0, 0, ["$toString", $rt_wrapFunction0(uid_LineData_toString), "$hashCode", $rt_wrapFunction0(uid_LineData_hashCode), "$equals", $rt_wrapFunction1(uid_LineData_equals)],
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_BitSet, "BitSet", 1, jl_Object, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$equals", $rt_wrapFunction1(ju_BitSet_equals), "$hashCode", $rt_wrapFunction0(ju_BitSet_hashCode), "$toString", $rt_wrapFunction0(ju_BitSet_toString)],
ui_Client$drawPoints$lambda$_3_0, 0, jl_Object, [juf_IntConsumer], 0, 3, 0, 0, ["$accept1", $rt_wrapFunction1(ui_Client$drawPoints$lambda$_3_0_accept)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_TemplateCollections$ImmutableEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
uiuc_Component, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiuci_HTMLComponent, 0, jl_Object, [uiuc_Component], 0, 3, 0, 0, 0,
uiuc_Container, 0, jl_Object, [uiuc_Component], 3, 3, 0, 0, 0,
uiuci_HTMLContainer, 0, uiuci_HTMLComponent, [uiuc_Container], 0, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 3, 3, 0, 0, 0,
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
juf_IntFunction, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_STS13Visualizer$_init_$lambda$_0_0, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_STS13Visualizer$_init_$lambda$_0_0_apply)],
uid_STS13Visualizer$_init_$lambda$_0_1, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_STS13Visualizer$_init_$lambda$_0_1_apply)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
otjde_FocusEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_MouseEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_KeyboardEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_LoadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_GamepadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjb_WindowEventTarget, 0, jl_Object, [otjde_EventTarget, otjde_FocusEventTarget, otjde_MouseEventTarget, otjde_KeyboardEventTarget, otjde_LoadEventTarget, otjde_GamepadEventTarget], 3, 3, 0, 0, 0,
otjb_StorageProvider, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjc_JSArrayReader, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjb_Window, 0, jl_Object, [otj_JSObject, otjb_WindowEventTarget, otjb_StorageProvider, otjc_JSArrayReader], 1, 3, 0, 0, ["$get$exported$0", $rt_wrapFunction1(otjb_Window_get$exported$0), "$addEventListener$exported$1", $rt_wrapFunction2(otjb_Window_addEventListener$exported$1), "$removeEventListener$exported$2", $rt_wrapFunction2(otjb_Window_removeEventListener$exported$2), "$removeEventListener$exported$3", $rt_wrapFunction3(otjb_Window_removeEventListener$exported$3), "$dispatchEvent$exported$4", $rt_wrapFunction1(otjb_Window_dispatchEvent$exported$4),
"$getLength$exported$5", $rt_wrapFunction0(otjb_Window_getLength$exported$5), "$addEventListener$exported$6", $rt_wrapFunction3(otjb_Window_addEventListener$exported$6)],
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, otji_JSWrapper_$callClinit, 0,
otjc_JSWeakMap, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjc_JSMap, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otji_JSWrapper$_clinit_$lambda$_30_0, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_30_0_accept$exported$0)],
otjc_JSFinalizationRegistry, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otji_JSWrapper$_clinit_$lambda$_30_1, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_30_1_accept$exported$0)],
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
jusi_WrappingIntStreamImpl, 0, jusi_SimpleIntStreamImpl, [], 1, 3, 0, 0, ["$next1", $rt_wrapFunction1(jusi_WrappingIntStreamImpl_next)],
jusi_FilteringIntStreamImpl, 0, jusi_WrappingIntStreamImpl, [], 0, 3, 0, 0, 0,
uiuc_Canvas, 0, jl_Object, [uiuc_Component], 3, 3, 0, 0, 0,
uiuci_HTMLCanvas, 0, uiuci_HTMLComponent, [uiuc_Canvas], 0, 3, 0, 0, 0,
uiuc_Select, 0, jl_Object, [uiuc_Component], 3, 3, 0, 0, 0,
uiuci_HTMLSelect, 0, uiuci_HTMLComponent, [uiuc_Select], 0, 3, 0, 0, 0,
juf_Function, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_Visualizer$model$lambda$_4_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$apply1", $rt_wrapFunction1(uid_Visualizer$model$lambda$_4_0_apply)]]);
$rt_metadata([uid_Visualizer$model$lambda$_4_1, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_Visualizer$model$lambda$_4_1_apply)],
uid_F9Point, "F9Point", 8, jl_Record, [], 32772, 3, 0, 0, ["$toString", $rt_wrapFunction0(uid_F9Point_toString), "$hashCode", $rt_wrapFunction0(uid_F9Point_hashCode), "$equals", $rt_wrapFunction1(uid_F9Point_equals)],
uid_UnitalVisualizer$points$lambda$_3_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, 0,
juf_Supplier, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_UnitalVisualizer$points$lambda$_3_1, 0, jl_Object, [juf_Supplier], 0, 3, 0, 0, ["$get1", $rt_wrapFunction0(uid_UnitalVisualizer$points$lambda$_3_1_get)],
juf_ObjIntConsumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_UnitalVisualizer$points$lambda$_3_2, 0, jl_Object, [juf_ObjIntConsumer], 0, 3, 0, 0, ["$accept0", $rt_wrapFunction2(uid_UnitalVisualizer$points$lambda$_3_2_accept)],
uid_UnitalVisualizer$points$lambda$_3_3, 0, jl_Object, [juf_BiConsumer], 0, 3, 0, 0, 0,
jus_Stream, 0, jl_Object, [jus_BaseStream], 3, 3, 0, 0, 0,
jusi_SimpleStreamImpl, 0, jl_Object, [jus_Stream], 1, 3, 0, 0, ["$estimateSize", $rt_wrapFunction0(jusi_SimpleStreamImpl_estimateSize)],
jusi_MappingToObjStreamImpl, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_MappingToObjStreamImpl_next), "$estimateSize", $rt_wrapFunction0(jusi_MappingToObjStreamImpl_estimateSize)],
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Enum_toString), "$equals", $rt_wrapFunction1(jl_Enum_equals), "$hashCode", $rt_wrapFunction0(jl_Enum_hashCode)],
uiu_LineConf$Children, "LineConf$Children", 7, jl_Enum, [], 12, 3, 0, 0, 0,
jusi_ArrayStreamImpl, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_ArrayStreamImpl_next), "$estimateSize", $rt_wrapFunction0(jusi_ArrayStreamImpl_estimateSize)],
uid_F9, "F9", 8, jl_Record, [jl_Comparable], 32772, 3, 0, uid_F9_$callClinit, ["$toString", $rt_wrapFunction0(uid_F9_toString), "$hashCode", $rt_wrapFunction0(uid_F9_hashCode), "$equals", $rt_wrapFunction1(uid_F9_equals)],
uid_F9Point$generateUnital$lambda$_5_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$apply1", $rt_wrapFunction1(uid_F9Point$generateUnital$lambda$_5_0_apply)],
juf_Predicate, 0, jl_Object, [], 3, 3, 0, 0, 0,
uid_F9Point$generateUnital$lambda$_5_1, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(uid_F9Point$generateUnital$lambda$_5_1_test)],
uid_F9Point$generateUnital$lambda$_5_2, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9Point$generateUnital$lambda$_5_2_apply)],
uid_F9Point$generateUnital$lambda$_5_3, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9Point$generateUnital$lambda$_5_3_apply)],
juf_BiFunction, 0, jl_Object, [], 3, 3, 0, 0, 0,
juf_BinaryOperator, 0, jl_Object, [juf_BiFunction], 3, 3, 0, 0, 0,
uid_F9Point$generateUnital$lambda$_5_4, 0, jl_Object, [juf_BinaryOperator], 0, 3, 0, 0, ["$apply0", $rt_wrapFunction2(uid_F9Point$generateUnital$lambda$_5_4_apply)],
uid_F9Point$generateLines$lambda$_4_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_0_test)],
uid_F9Point$generateLines$lambda$_4_1, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$apply1", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_1_apply)],
uid_F9Point$generateLines$lambda$_4_2, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_2_apply)],
uid_F9Point$generateLines$lambda$_4_3, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$apply1", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_3_apply)],
uid_F9Point$generateLines$lambda$_4_4, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_4_apply)],
uid_F9Point$generateLines$lambda$_4_5, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_5_accept)],
uid_F9Point$generateLines$lambda$_4_6, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(uid_F9Point$generateLines$lambda$_4_6_accept)],
jusi_ArrayIntStreamImpl, 0, jusi_SimpleIntStreamImpl, [], 0, 3, 0, 0, ["$next1", $rt_wrapFunction1(jusi_ArrayIntStreamImpl_next), "$estimateSize", $rt_wrapFunction0(jusi_ArrayIntStreamImpl_estimateSize)],
uid_F9$_clinit_$lambda$_20_0, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_0_apply)],
uid_F9$_clinit_$lambda$_20_1, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_1_apply)],
uid_F9$_clinit_$lambda$_20_2, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_2_test)],
uid_F9$_clinit_$lambda$_20_3, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_3_apply)],
uid_F9$_clinit_$lambda$_20_4, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_4_test)],
uid_F9$_clinit_$lambda$_20_5, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9$_clinit_$lambda$_20_5_apply)],
jusi_SingleStreamImpl, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_SingleStreamImpl_next)],
jusi_GenericConcatStream, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_GenericConcatStream_next)],
jusi_SpecializedConcatStream, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_SpecializedConcatStream_next), "$estimateSize", $rt_wrapFunction0(jusi_SpecializedConcatStream_estimateSize)],
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
uiuci_HTMLSelect$addEventListener$lambda$_11_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLSelect$addEventListener$lambda$_11_0_handleEvent$exported$0)],
jusi_SimpleStreamImpl$ArrayFillingConsumer, 0, jl_Object, [juf_Predicate], 0, 0, 0, 0, ["$test0", $rt_wrapFunction1(jusi_SimpleStreamImpl$ArrayFillingConsumer_test)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, ["$equals", $rt_wrapFunction1(ju_AbstractList_equals)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0]);
$rt_metadata([ju_ArrayList, "ArrayList", 1, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(ju_ArrayList_toString), "$hashCode", $rt_wrapFunction0(ju_ArrayList_hashCode)],
jusi_SimpleStreamImpl$toArray$lambda$_21_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_SimpleStreamImpl$toArray$lambda$_21_0_test)],
ju_Optional, 0, jl_Object, [], 4, 3, 0, 0, 0,
uiuci_HTMLComponent$box$lambda$_6_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, 0,
jusi_WrappingStreamImpl, 0, jusi_SimpleStreamImpl, [], 1, 3, 0, 0, ["$next", $rt_wrapFunction1(jusi_WrappingStreamImpl_next), "$estimateSize", $rt_wrapFunction0(jusi_WrappingStreamImpl_estimateSize)],
jusi_MappingStreamImpl, 0, jusi_WrappingStreamImpl, [], 0, 3, 0, 0, ["$wrap", $rt_wrapFunction1(jusi_MappingStreamImpl_wrap)],
jusi_FlatMappingToIntStreamImpl, 0, jusi_SimpleIntStreamImpl, [], 0, 3, 0, 0, ["$next1", $rt_wrapFunction1(jusi_FlatMappingToIntStreamImpl_next)],
jusi_ReducingConsumer, "ReducingConsumer", 3, jl_Object, [juf_Predicate], 0, 0, 0, 0, ["$test0", $rt_wrapFunction1(jusi_ReducingConsumer_test)],
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1, 0, 0, 0, 0,
ju_TemplateCollections$NEtriesMap$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, 0, 0,
jusi_FilteringStreamImpl, 0, jusi_WrappingStreamImpl, [], 0, 3, 0, 0, ["$wrap", $rt_wrapFunction1(jusi_FilteringStreamImpl_wrap)],
uiuci_HTMLComponent$addEventListener$lambda$_10_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLComponent$addEventListener$lambda$_10_0_handleEvent$exported$0)],
uiuci_HTMLComponent$addEventListener$lambda$_10_1, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLComponent$addEventListener$lambda$_10_1_handleEvent$exported$0)],
uiuci_HTMLComponent$addEventListener$lambda$_10_2, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLComponent$addEventListener$lambda$_10_2_handleEvent$exported$0)],
uiuci_HTMLComponent$addEventListener$lambda$_10_3, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLComponent$addEventListener$lambda$_10_3_handleEvent$exported$0)],
uiuci_HTMLComponent$addEventListener$lambda$_10_4, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(uiuci_HTMLComponent$addEventListener$lambda$_10_4_handleEvent$exported$0)],
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
uiuc_SelectOption, 0, jl_Record, [], 32772, 3, 0, 0, 0,
uiuc_GraphicsContext, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiuci_HTMLGraphicsContext, 0, jl_Record, [uiuc_GraphicsContext], 32772, 3, 0, 0, 0,
jusi_SimpleIntStreamImpl$collect$lambda$_19_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_SimpleIntStreamImpl$collect$lambda$_19_0_test)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_TemplateCollections$NEtriesMap$1$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
jusi_SimpleIntStreamImpl$forEachOrdered$lambda$_15_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_SimpleIntStreamImpl$forEachOrdered$lambda$_15_0_test)],
jusi_MappingToObjStreamImpl$next$lambda$_1_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_MappingToObjStreamImpl$next$lambda$_1_0_test)],
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
jusi_SimpleStreamImpl$forEachOrdered$lambda$_19_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_SimpleStreamImpl$forEachOrdered$lambda$_19_0_test)],
uiu_Border, 0, jl_Record, [], 32772, 3, 0, uiu_Border_$callClinit, 0,
uiu_SelectEvent, 0, jl_Record, [], 32772, 3, 0, 0, 0,
uiu_HTMLUtil, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiu_MouseEvt, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiuci_HTMLComponent$HTMLMouseEvent, 0, jl_Object, [uiu_MouseEvt], 0, 3, 0, 0, 0,
uiu_MouseEvt$Type, "MouseEvt$Type", 7, jl_Enum, [], 12, 3, 0, 0, 0,
uiu_Color, 0, jl_Object, [], 3, 3, 0, 0, 0,
uiu_RGBAColor, 0, jl_Record, [uiu_Color], 32772, 3, 0, 0, 0,
jusi_MappingStreamImpl$wrap$lambda$_1_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_MappingStreamImpl$wrap$lambda$_1_0_test)],
jusi_FilteringStreamImpl$wrap$lambda$_1_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_FilteringStreamImpl$wrap$lambda$_1_0_test)],
jusi_FlatMappingToIntStreamImpl$next$lambda$_1_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_FlatMappingToIntStreamImpl$next$lambda$_1_0_test)],
jusi_SimpleStreamIterator, 0, jl_Object, [ju_Iterator], 0, 3, 0, 0, 0,
ju_PrimitiveIterator, 0, jl_Object, [ju_Iterator], 3, 3, 0, 0, 0,
ju_PrimitiveIterator$OfInt, 0, jl_Object, [ju_PrimitiveIterator], 3, 3, 0, 0, 0,
uid_Point, "Point", 8, jl_Record, [], 32772, 3, 0, 0, ["$toString", $rt_wrapFunction0(uid_Point_toString), "$hashCode", $rt_wrapFunction0(uid_Point_hashCode), "$equals", $rt_wrapFunction1(uid_Point_equals)],
ui_Client$lambda$main$1$lambda$_10_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, 0,
jus_Collectors, 0, jl_Object, [], 4, 3, 0, 0, 0,
juf_ToDoubleFunction, 0, jl_Object, [], 3, 3, 0, 0, 0,
ui_Client$lambda$main$1$lambda$_10_1, 0, jl_Object, [juf_ToDoubleFunction], 0, 3, 0, 0, 0,
jl_Double, "Double", 4, jl_Number, [jl_Comparable], 0, 3, 0, 0, ["$doubleValue", $rt_wrapFunction0(jl_Double_doubleValue), "$toString", $rt_wrapFunction0(jl_Double_toString), "$equals", $rt_wrapFunction1(jl_Double_equals), "$hashCode", $rt_wrapFunction0(jl_Double_hashCode0)]]);
$rt_metadata([juf_Function$identity$lambda$_3_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, 0,
jus_Collectors$toMap$lambda$_12_0, 0, jl_Object, [juf_Supplier], 0, 3, 0, 0, 0,
jus_Collectors$toMap$lambda$_12_1, 0, jl_Object, [juf_BiConsumer], 0, 3, 0, 0, 0,
jus_Collectors$toMap$lambda$_12_2, 0, jl_Object, [juf_BinaryOperator], 0, 3, 0, 0, 0,
jus_Collector$Characteristics, "Collector$Characteristics", 2, jl_Enum, [], 12, 3, 0, 0, 0,
jus_Collector, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Comparator$comparingDouble$lambda$_16_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
ju_NoSuchElementException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jus_Collector$of$lambda$_5_0, 0, jl_Object, [juf_Function], 0, 3, 0, 0, 0,
ju_EnumSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 1, 3, 0, 0, 0,
jus_CollectorImpl, 0, jl_Object, [jus_Collector], 0, 0, 0, 0, 0,
ju_GenericEnumSet, 0, ju_EnumSet, [], 0, 0, 0, 0, 0,
ju_Arrays$ArrayAsList, 0, ju_AbstractList, [ju_RandomAccess], 0, 0, 0, 0, 0,
ju_BitSet$BitSetStream, 0, jusi_SimpleIntStreamImpl, [], 0, 0, 0, 0, ["$next1", $rt_wrapFunction1(ju_BitSet$BitSetStream_next)],
jusi_FilteringIntStreamImpl$wrap$lambda$_1_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_FilteringIntStreamImpl$wrap$lambda$_1_0_test)],
jusi_BoxedIntStream, 0, jusi_SimpleStreamImpl, [], 0, 3, 0, 0, 0,
jusi_SimpleStreamIterator$fetchIfNeeded$lambda$_4_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_SimpleStreamIterator$fetchIfNeeded$lambda$_4_0_test)],
jl_CloneNotSupportedException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jusi_SimpleStreamImpl$collect$lambda$_26_0, "SimpleStreamImpl$collect$lambda$_26_0", 3, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(jusi_SimpleStreamImpl$collect$lambda$_26_0_test)],
jusi_SimpleStreamImpl$min$lambda$_27_0, 0, jl_Object, [juf_BinaryOperator], 0, 3, 0, 0, ["$apply0", $rt_wrapFunction2(jusi_SimpleStreamImpl$min$lambda$_27_0_apply)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
uid_TextColor, "TextColor", 8, jl_Enum, [], 12, 3, 0, 0, 0,
jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, 0,
juc_ThreadLocalRandom, 0, ju_Random, [], 0, 3, 0, 0, 0,
uid_F9Point$lambda$generateUnital$11$lambda$_16_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(uid_F9Point$lambda$generateUnital$11$lambda$_16_0_test)],
uid_F9Point$lambda$generateUnital$11$lambda$_16_1, 0, jl_Object, [juf_Supplier], 0, 3, 0, 0, ["$get1", $rt_wrapFunction0(uid_F9Point$lambda$generateUnital$11$lambda$_16_1_get)],
uid_F9Point$lambda$generateUnital$11$lambda$_16_2, 0, jl_Object, [juf_ObjIntConsumer], 0, 3, 0, 0, ["$accept0", $rt_wrapFunction2(uid_F9Point$lambda$generateUnital$11$lambda$_16_2_accept)],
uid_F9Point$lambda$generateUnital$11$lambda$_16_3, 0, jl_Object, [juf_BiConsumer], 0, 3, 0, 0, 0,
uid_F9Point$lambda$generateLines$6$lambda$_21_0, 0, jl_Object, [juf_Predicate], 0, 3, 0, 0, ["$test0", $rt_wrapFunction1(uid_F9Point$lambda$generateLines$6$lambda$_21_0_test)],
uid_F9Point$lambda$generateLines$6$lambda$_21_1, 0, jl_Object, [juf_Function], 0, 3, 0, 0, ["$apply1", $rt_wrapFunction1(uid_F9Point$lambda$generateLines$6$lambda$_21_1_apply)],
uid_F9Point$lambda$generateLines$6$lambda$_21_2, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_F9Point$lambda$generateLines$6$lambda$_21_2_apply)],
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, 0,
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
jusi_BoxedIntStream$next$lambda$_1_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_BoxedIntStream$next$lambda$_1_0_test)],
jusi_SimpleIntStreamIterator, 0, jl_Object, [ju_PrimitiveIterator$OfInt], 0, 3, 0, 0, 0,
uid_Visualizer$bezier$lambda$_3_0, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_Visualizer$bezier$lambda$_3_0_apply)],
uid_Visualizer$bezier$lambda$_3_1, 0, jl_Object, [juf_IntFunction], 0, 3, 0, 0, ["$apply", $rt_wrapFunction1(uid_Visualizer$bezier$lambda$_3_1_apply)],
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_HashMap, "HashMap", 1, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
jusi_SimpleIntStreamIterator$fetchIfNeeded$lambda$_3_0, 0, jl_Object, [juf_IntPredicate], 0, 3, 0, 0, ["$test", $rt_wrapFunction1(jusi_SimpleIntStreamIterator$fetchIfNeeded$lambda$_3_0_test)],
ui_Client$drawLine$lambda$_4_0, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(ui_Client$drawLine$lambda$_4_0_accept)],
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
ju_HashMap$HashMapEntrySet, 0, ju_AbstractSet, [], 0, 0, 0, 0, 0,
jl_IllegalStateException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_HashMap$AbstractMapIterator, 0, jl_Object, [], 0, 0, 0, 0, 0,
ju_HashMap$EntryIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, 0]);
$rt_metadata([jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, 0, 0, 0,
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls), $rt_shortArrayCls = $rt_arraycls($rt_shortcls), $rt_intArrayCls = $rt_arraycls($rt_intcls), $rt_longArrayCls = $rt_arraycls($rt_longcls);
$rt_stringPool(["0", "click", "select", "unital", "sts13fst", "sts13snd", "null", "00000011111222223334445556", "13579b3469a3467867868a7897", "2468ac578bc95acbbacc9bbac9", "2468ac578bc95abcbcac9babc9", "vertical", "horizontal", "px", "(this Map)", ", ", "LineData[", "points=", ", color=", ", bezier=", "]", "", "px ", "resize", "mousecontact", "object", "function", "string", "number", "F9Point[", "x=", ", y=", "MAX_DIST", "SPLIT_DIST", "[]", "(this Collection)", "solid", "inset", "00", "rgba(", "rgb(", "OVER",
"OUT", "MOVE", "CLICK", "Point[", "CONCURRENT", "UNORDERED", "IDENTITY_FINISH", "Key ", " corresponds to values ", " and ", "black", "blue", "brown", "cyan", "darkgray", "gray", "green", "lightgray", "lime", "magenta", "olive", "orange", "pink", "purple", "red", "teal", "violet", "yellow", "white"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
$rt_exports.main = $rt_mainStarter(ui_Client_main);
$rt_exports.main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(function() {
    var c;
    c = otjb_Window.prototype;
    c.removeEventListener = c.$removeEventListener$exported$3;
    c.dispatchEvent = c.$dispatchEvent$exported$4;
    c.get = c.$get$exported$0;
    c.addEventListener = c.$addEventListener$exported$6;
    Object.defineProperty(c, "length", {
        get: c.$getLength$exported$5
    });
    c = otji_JSWrapper$_clinit_$lambda$_30_0.prototype;
    c[$rt_jso_marker] = true;
    c.accept = c.$accept$exported$0;
    c = otji_JSWrapper$_clinit_$lambda$_30_1.prototype;
    c[$rt_jso_marker] = true;
    c.accept = c.$accept$exported$0;
    c = uiuci_HTMLSelect$addEventListener$lambda$_11_0.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = uiuci_HTMLComponent$addEventListener$lambda$_10_0.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = uiuci_HTMLComponent$addEventListener$lambda$_10_1.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = uiuci_HTMLComponent$addEventListener$lambda$_10_2.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = uiuci_HTMLComponent$addEventListener$lambda$_10_3.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = uiuci_HTMLComponent$addEventListener$lambda$_10_4.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
})();
}));