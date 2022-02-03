module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  'ignorePatterns': [
    'webpack.config.js'
  ],
  "globals": {
    "document": true,
    "localStorage": true,
    "window": true,
    "key": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',//禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": "off",
    "prefer-const": 'off',
    "no-multi-spaces": 2,
    'accessor-pairs': 0, //在对象中使用getter/setter
    'arrow-spacing': [2, { //=>的前/后括号
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],//函数大括号需要一个或多个空格
    'brace-style': [2, '1tbs', { //强制执行一个真正的大括号风格
      'allowSingleLine': true //允许一个块打开和关闭括号在同一行上
    }],
    'camelcase': [0, {
      'properties': 'always'//命名规范 加下划线和不加下划线只能有一种
    }],
    'comma-dangle': [2, 'never'], //对象里面的属性最后一个能不能随逗号
    'comma-spacing': [2, { //逗号附件加空格 
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],//在数组元素、对象属性或变量声明之后和同一行上需要一个逗号
    'constructor-super': 2,//该规则检查是否存在有效的super()调用。
    'curly': [2, 'multi-line'],//当一个块只包含一条语句时，JavaScript 允许省略花括号
    'dot-location': [2, 'property'],//对象链式结构选项要求点与属性位于同一行。
    'eol-last': 2,//该规则在非空文件的末尾至少执行一个换行符
    'eqeqeq': ["off", "always", { "null": "ignore" }],//强制使用===和!==在任何情况下（除非您选择更具体的处理null
    'generator-star-spacing': [2, { //该规则旨在强化*发生器功能的间距。
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],//这个规则期望当你在 Node.js 中使用回调模式时，你会处理这个错误。
    'indent': [2, 2, { //两个缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], //强制所有不包含单引号的JSX属性值强制使用单引号
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }], //对象冒号后面加空格
    'keyword-spacing': [2, { //关键字附近加空格
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true, //构造函数首字母必须大写
      'capIsNew': false //所有大写字母开头的函数是否强制与new操作符一起调用
    }],
    'new-parens': 2,//此规则在使用new关键字调用不带参数的构造函数时需要括号，以便提高代码清晰度。
    'no-array-constructor': 2,//是否不允许使用array构造函数构造数组，但是可以构造稀疏数组
    'no-caller': 2,//不可能使用arguments.caller并arguments.callee进行几次代码优化
    'no-class-assign': 2,//不能对声明之后的类进行变化
    'no-cond-assign': 2,//（缺省值）只允许在测试条件下进行赋值，如果它们被括在圆括号中（例如，允许在while或do...while循环的测试中重新赋值变量）
    'no-const-assign': 2,//不能修改const声明之后的变量
    'no-control-regex': 0,//此规则不允许正则表达式中的控制字符
    'no-delete-var': 2,//此规则不允许在变量上使用delete操作符
    'no-dupe-args': 2,//此规则不允许在函数声明或表达式中使用重复的参数名称。它不适用于箭头函数或类方法，因为解析器报告错误。
    'no-dupe-class-members': 2,//不允许类中有相同的重复名称实例方法
    'no-dupe-keys': 2,//不允许在对象中使用重复的键
    'no-duplicate-case': 2,//此规则不允许在switch语句的case子句中使用重复的测试表达式。
    'no-empty-character-class': 2,//此规则不允许在正则表达式中使用空字符类。
    'no-empty-pattern': 2,//不允许空解构
    'no-eval': 2,//该规则旨在通过禁止使用eval()函数
    'no-ex-assign': 2,//此规则不允许在catch子句中重新分配给异常参数。
    'no-extend-native': 2,//不允许直接修改内建对象的原型
    'no-extra-bind': 2,//此规则旨在避免不必要的使用，bind()因此只要立即调用的函数表达式（ IIFE ）正在使用bind()并且没有适当的this值，就会发出警告。此规则不会标记bind()包含函数参数绑定的用法。
    'no-extra-boolean-cast': 2,//该规则禁止不必要的布尔转换。
    'no-extra-parens': [2, 'functions'],//仅在函数表达式附近禁止不必要的括号
    'no-extra-semi': 'off',
    'no-fallthrough': 2,//这条规则的目的是消除一个案件无意中掉到另一个案件。因此，它会标记没有标注评论的任何延期情况。
    'no-floating-decimal': 2,//此规则旨在消除浮点小数点，并在数值有小数点但在其之前或之后缺少数字时发出警告，不可以写.7这样的数字
    'no-func-assign': 2,//此规则不允许重新分配function声明。
    'no-implied-eval': 2,//此规则旨在消除隐含eval()通过使用setTimeout()，setInterval()或execScript()。因此，它会在任何一个函数与字符串一起用作第一个参数时发出警告。
    'no-inner-declarations': [2, 'functions'],//不允许function嵌套块中的声明
    'no-invalid-regexp': 2,//此规则不允许RegExp构造函数中的无效正则表达式字符串。
    'no-irregular-whitespace': 2,//允许字符串文字中的任何空白字符
    'no-iterator': 2, // 防止使用该__iterator__属性时可能出现的错误
    'no-label-var': 2,  // 防止局部变量使用外部变量
    'no-labels': [2, {  // 控制遇到带标签的语句以及每次break或continue使用标签时，是否发出警告
      'allowLoop': false,   // 是否忽略循环语句的标签
      'allowSwitch': false  // 是否忽略switch语句的标签
    }],
    'no-lone-blocks': 2,  // 消除脚本顶层或其他块中不必要的和可能混淆的块
    'no-mixed-spaces-and-tabs': 2,  // 不允许使用混合空格和制表符进行缩进
    'no-multi-spaces': 2, // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
    'no-multi-str': 2,  // 防止使用多行字符串
    'no-multiple-empty-lines': [2, {  // 超过最大空行数量时发出警告
      'max': 1  // 强制连续空行的最大数量，默认为2
    }],
    'no-native-reassign': 2,  // 已弃用，并由 no-global-assign 规则取代，不允许修改只读全局变量
    'no-negated-in-lhs': 2, // 已弃用，并由无不安全否定规则取代，不允许否定in表达式中的左操作数
    'no-new-object': 2, // 不允许使用Object构造函数
    'no-new-require': 2,  // 消除new require表达的使用
    'no-new-symbol': 2, // 防止Symbol和new的意外操作
    'no-new-wrappers': 2, // 杜绝使用String，Number以及Boolean与new操作
    'no-obj-calls': 2,  // 不允许调用Math，JSON和Reflect对象作为函数，例如Math()
    'no-octal': 2,  // 不允许使用八进制文字，例如071
    'no-octal-escape': 2, // 不允许字符串文字中的八进制转义序列，例如\251
    'no-path-concat': 2,  // 防止 Node.js 中的目录路径字符串连接，例如__dirname + "/foo.js"
    'no-proto': 2,  // 不允许使用__proto__
    'no-redeclare': 2,  // 消除在同一范围内具有多个声明的变量
    'no-regex-spaces': 2, // 在正则表达式文字中不允许有多个空格
    'no-return-assign': [2, 'except-parens'], // except-parens：不允许函数return中赋值，除非它们被括在圆括号中
    'no-self-assign': 2,  // 消除自我分配，例如[a, b] = [a, b]
    'no-self-compare': 2, // 不允许变量与自身比较
    'no-sequences': 2,  // 禁止使用逗号运算符，除for语句的初始化或更新部分，以及表达式序列显式包含在圆括号中
    'no-shadow-restricted-names': 2,  // 不允许修改全局对象以及严格限制模式标识符eval和arguments
    'no-spaced-func': 2,  // 已弃用，并由 func-call-spacing 规则取代，不允许函数标识符与其应用程序之间的间距，例如fn ()
    'no-sparse-arrays': 2,  // 不允许稀疏数组文字，它们在逗号前没有元素的地方有“孔”。它不适用于最后一个元素之后的尾随逗号。
    'no-this-before-super': 2,  // 不允许在super()前使用this
    'no-throw-literal': 2,  // 不允许抛出不可能是Error对象的文字和其他表达式
    'no-trailing-spaces': 2,  // 不允许在行尾添加尾随空白（空格，制表符和其他Unicode空白字符）
    'no-undef': 2,  // 不允许对未声明的变量的引用，除非该变量在/*global ...*/注释中明确提到
    'no-undef-init': 2, // 消除初始化为的变量声明undefined
    'no-unmodified-loop-condition': 2, //循环中的变量经常在循环中修改。如果不是，那可能是一个错误。
    'no-unneeded-ternary': [2, { defaultAssignment: false }],//在 JavaScript 中使用条件表达式来选择两个布尔值而不是使用！将测试转换为布尔值。
    'no-unreachable': 2, //这条规则不允许可达代码后return，throw，continue，和break语句。
    'no-unsafe-finally': 2, //条规则不允许return，throw，break，和continue里面的语句finally块。它允许间接使用，如in function或class定义
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],//该规则旨在消除未使用的变量，函数和函数的参数。
    'no-useless-call': 2, //此规则旨在标记使用情况，Function.prototype.call()并且Function.prototype.apply()可以用正常的函数调用来替代。
    'no-useless-computed-key': 2, //此规则禁止不必要地使用计算属性键。
    'no-useless-constructor': 2, //这个规则标记了可以在不改变类的工作方式的情况下安全地移除的类构造函数。
    'no-useless-escape': 0, //此规则标志可以在不改变行为的情况下安全地移除。
    'no-whitespace-before-property': 2, //对象的属性位于同一行上
    'no-with': 2, //禁止使用with
    'one-var': [2, { initialized: 'never', },],//变量声明方式
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],//而不适合单行时，通常会在分隔表达式的运算符旁边插入换行符。想到的第一种方式是按照英文标点符号将操作员放在行的末尾
    'padded-blocks': [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],//此规则强制一致使用反引号，双引号或单引号。
    semi: [0, 'never'], //;
    'semi-spacing': [2, { before: false, after: true }],//此规则旨在强制分号间隔。此规则可防止在表达式中使用分号之前的空格。
    'space-before-blocks': [2, 'always'], //此规则将强化块之前的间距一致性。它只适用于不以新行开始的块。
    'space-before-function-paren': [2, 'never'], //此规则旨在在函数括号之前强制执行一致的间距，因此，只要空格不符合指定的偏好，就会发出警告。
    'space-in-parens': [2, 'never'], //此规则将强制直接在括号内进行间隔的一致性，即禁止或要求右侧(和左侧有一个或多个空格)。无论如何，()仍然会被允许。
    'space-infix-ops': 2, //这条规则旨在确保中缀操作员周围有空间。
    'space-unary-ops': [2, { words: true, nonwords: false }],//该规则强化了words一元运算符之后和一元运算符之后的空间的一致性nonwords。
    'template-curly-spacing': [2, 'always'], //- 在花括号内需要一个或多个空间。
    'valid-typeof': 2, //此规则强制将typeof表达式与有效的字符串文字进行比较。
    'yield-star-spacing': [2, 'both'], //此规则强制执行*周围 yield*表达式的间距。
    yoda: [2, 'never'], //Yoda 条件是如此命名的，因为条件的字面值首先出现，而变量出现在第二位。例如，以下是 Yoda 条件
    'prefer-const': 2, //此规则旨在标记使用let关键字声明的变量，但在初始分配后从未重新分配变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //此规则不允许debugger声明。
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }], //此规则在对象文字的大括号内执行一致的间距，解构赋值和导入/导出说明符。
    'array-bracket-spacing': [2, 'never'], //该规则在数组括号内强制实现一致的间距。
  }
}