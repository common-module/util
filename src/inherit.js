define('util:inherit', function (require, exports, module) {
    module.exports = inherit;

    /**
     * 继承函数
     * @param  {Function} subClass   子类
     * @param  {Function} superClass 父类
     * @return {Undefined}
     */
    function inherit(subClass, superClass) {
        var clazz = new Function();

        clazz.prototype = superClass.prototype;
        subClass.prototype = new clazz();
        subClass.prototype.constructor = subClass;
    }
});
