// Generated by psc-make version 0.5.5
"use strict";
var Prelude = require("Prelude");
var when = function (__dict_Monad_0) {
    return function (_54) {
        return function (_55) {
            if (_54) {
                return _55;
            };
            if (!_54) {
                return Prelude["return"](__dict_Monad_0)(Prelude.unit);
            };
            throw new Error("Failed pattern match");
        };
    };
};
var unless = function (__dict_Monad_1) {
    return function (_56) {
        return function (_57) {
            if (!_56) {
                return _57;
            };
            if (_56) {
                return Prelude["return"](__dict_Monad_1)(Prelude.unit);
            };
            throw new Error("Failed pattern match");
        };
    };
};
var replicateM = function (__dict_Monad_2) {
    return function (_49) {
        return function (_50) {
            if (_49 === 0) {
                return Prelude["return"](__dict_Monad_2)([  ]);
            };
            return Prelude[">>="](__dict_Monad_2["__superclass_Prelude.Bind_1"]())(_50)(function (_4) {
                return Prelude[">>="](__dict_Monad_2["__superclass_Prelude.Bind_1"]())(replicateM(__dict_Monad_2)(_49 - 1)(_50))(function (_3) {
                    return Prelude["return"](__dict_Monad_2)(Prelude[":"](_4)(_3));
                });
            });
        };
    };
};
var foldM = function (__dict_Monad_3) {
    return function (_51) {
        return function (_52) {
            return function (_53) {
                if (_53.length === 0) {
                    return Prelude["return"](__dict_Monad_3)(_52);
                };
                if (_53.length >= 1) {
                    var _377 = _53.slice(1);
                    return Prelude[">>="](__dict_Monad_3["__superclass_Prelude.Bind_1"]())(_51(_52)(_53[0]))(function (a$prime) {
                        return foldM(__dict_Monad_3)(_51)(a$prime)(_377);
                    });
                };
                throw new Error("Failed pattern match");
            };
        };
    };
};
module.exports = {
    unless: unless, 
    when: when, 
    foldM: foldM, 
    replicateM: replicateM
};