define('util:extend', function (require, exports, module) {
    module.exports = extend;

    /**
     * 扩展函数
     * @param  {Function} baseObject   基对象
     * @param  {Function} extendObject 扩展对象
     * @return {Undefined}
     */
    function extend(baseObject, extendObject) {
        for (var method in extendObject) {
            if (extendObject.hasOwnProperty(method)) {
                baseObject[method] = extendObject[method];
            }
        }
    }
});
