// Generated by psc-make version 0.5.5
"use strict";
var Data_Map = require("Data.Map");
var Data_Array = require("Data.Array");
var Data_Tuple = require("Data.Tuple");
var Prelude = require("Prelude");
var Data_Foldable = require("Data.Foldable");
function Set(value0) {
    this.value0 = value0;
};
Set.create = function (value0) {
    return new Set(value0);
};
var union = function (__dict_Ord_0) {
    return function (_279) {
        return function (_280) {
            return new Set(Data_Map.union(__dict_Ord_0)(_279.value0)(_280.value0));
        };
    };
};
var toList = function (_278) {
    return Data_Array.map(Data_Tuple.fst)(Data_Map.toList(_278.value0));
};
var singleton = function (a) {
    return new Set(Data_Map.singleton(a)(Prelude.unit));
};
var showSet = function (__dict_Show_1) {
    return new Prelude.Show(function (s) {
        return "fromList " + Prelude.show(Prelude.showArray(__dict_Show_1))(toList(s));
    });
};
var member = function (__dict_Ord_2) {
    return function (_272) {
        return function (_273) {
            return Data_Map.member(__dict_Ord_2)(_272)(_273.value0);
        };
    };
};
var isEmpty = function (_270) {
    return Data_Map.isEmpty(_270.value0);
};
var insert = function (__dict_Ord_3) {
    return function (_274) {
        return function (_275) {
            return new Set(Data_Map.insert(__dict_Ord_3)(_274)(Prelude.unit)(_275.value0));
        };
    };
};
var eqSet = function (__dict_Eq_4) {
    return new Prelude.Eq(function (_283) {
        return function (_284) {
            return Prelude["/="](Data_Map.eqMap(__dict_Eq_4)(Prelude.eqUnit()))(_283.value0)(_284.value0);
        };
    }, function (_281) {
        return function (_282) {
            return Prelude["=="](Data_Map.eqMap(__dict_Eq_4)(Prelude.eqUnit()))(_281.value0)(_282.value0);
        };
    });
};
var empty = new Set(Data_Map.empty);
var fromList = function (__dict_Ord_5) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray())(function (m) {
        return function (a) {
            return insert(__dict_Ord_5)(a)(m);
        };
    })(empty);
};
var unions = function (__dict_Ord_6) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray())(union(__dict_Ord_6))(empty);
};
var $$delete = function (__dict_Ord_7) {
    return function (_276) {
        return function (_277) {
            return new Set(Data_Map["delete"](__dict_Ord_7)(_276)(_277.value0));
        };
    };
};
var checkValid = function (_271) {
    return Data_Map.checkValid(_271.value0);
};
module.exports = {
    unions: unions, 
    union: union, 
    fromList: fromList, 
    toList: toList, 
    "delete": $$delete, 
    member: member, 
    insert: insert, 
    checkValid: checkValid, 
    singleton: singleton, 
    isEmpty: isEmpty, 
    empty: empty, 
    eqSet: eqSet, 
    showSet: showSet
};