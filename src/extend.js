define('util:extend', function (require, exports, module) {
    module.exports = extend;

    /**
     * 扩展函数
     *
     * @description 
     * 将`targetObject`上的所有属性移植到`sourceObject`上
     * 在移植时，如果`sourceObject`上存在相同的属性或方法，则覆盖
     * 
     * @param  {Object} sourceObject 源对象
     * @param  {Object} targetObject 目标对象
     * @return {undefined}
     */
    function extend(sourceObject, targetObject) {
        for (var method in targetObject) {
            if (targetObject.hasOwnProperty(method)) {
                sourceObject[method] = targetObject[method];
            }
        }
    }
});
