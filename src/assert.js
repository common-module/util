define('util:assert.js', function (require, exports, module) {
    /**
     * 打印消息
     * @param  {String} message 消息文字
     * @return {String}         消息文字
     */
    function print(message) {
        if (console && console.log) {
            console.log(message);
        }

        return message;
    }

    // assert.fail(actual, expected, message, operator)
    // assert(value, message), assert.ok(value, [message])
    // assert.equal(actual, expected, [message])
    // assert.notEqual(actual, expected, [message])
    // assert.deepEqual(actual, expected, [message])
    // assert.notDeepEqual(actual, expected, [message])
    // assert.strictEqual(actual, expected, [message])
    // assert.notStrictEqual(actual, expected, [message])
    // assert.throws(block, [error], [message])
    // assert.doesNotThrow(block, [message])
    // assert.ifError(value)

    /**
     * 相等
     * @param  {Mix} actualValue   实际值
     * @param  {Mix} expectedValue 预期值
     * @param  {String} passMessage  检测通过消息
     */
    exports.equal = function (actualValue, expectedValue, passMessage) {
        if (actualValue == expectedValue) {
            if (passMessage) {
                print(passMessage);
            }
        } else {
            throw new Error([actualValue, expectedValue, 'are not equal'].join(' '));
        }
    }

    /**
     * 不相等
     * @param  {Mix} actualValue   实际值
     * @param  {Mix} expectedValue 预期值
     * @param  {String} passMessage  检测通过消息
     */
    exports.notEqual = function (actualValue, expectedValue, passMessage) {
        if (actualValue == expectedValue) {
            throw new Error([actualValue, expectedValue, 'are equal'].join(' '));
        } else {
            if (passMessage) {
                print(passMessage);
            }
        }
    }

    /**
     * 严格相等
     * @param  {Mix} actualValue   实际值
     * @param  {Mix} expectedValue 预期值
     * @param  {String} passMessage  检测通过消息
     */
    exports.strictEqual = function (actualValue, expectedValue, passMessage) {
        if (actualValue === expectedValue) {
            if (passMessage) {
                print(passMessage);
            }
        } else {
            throw new Error([actualValue, expectedValue, 'are not strict equal'].join(' '));
        }
    }

    /**
     * 不严格相等
     * @param  {Mix} actualValue   实际值
     * @param  {Mix} expectedValue 预期值
     * @param  {String} passMessage  检测通过消息
     */
    exports.notStrictEqual = function (actualValue, expectedValue, passMessage) {
        if (actualValue === expectedValue) {
            throw new Error([actualValue, expectedValue, 'are strict equal'].join(' '));
        } else {
            if (passMessage) {
                print(passMessage);
            }
        }
    }

    /**
     * 抛出错误
     * @param  {Function} func         函数
     * @param  {String} passMessage 检测通过消息
     */
    exports.throws = function (func, passMessage) {
        var error;

        try {
            func();
        } catch (e) {
            error = e;
        }

        if (error) {
            if (passMessage) {
                print(passMessage);
            }
        } else {
            /**
             * func没有抛出错误
             */
            throw new Error('function did not throw an error');
        }
    }

    /**
     * 不抛出错误
     * @param  {Function} func         函数
     * @param  {String} passMessage 检测通过消息
     */
    exports.doesNotThrow = function (func, passMessage) {
        var error;

        try {
            func();
        } catch (e) {
            e = error;
        }

        if (error) {
            /**
             * func抛出了错误
             */
            throw new Error('function did not throw an error');
        } else {
            if (passMessage) {
                print(passMessage);
            }
        }
    }
});
