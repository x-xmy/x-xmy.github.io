(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{581:function(e,t,n){"use strict";n.r(t);var a=n(8),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),n("p",[e._v("软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。")]),e._v(" "),n("p",[e._v("在像C#和Java这样的语言中，可以使用"),n("code",[e._v("泛型")]),e._v("来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。")]),e._v(" "),n("h2",{attrs:{id:"泛型之hello-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型之hello-world"}},[e._v("#")]),e._v(" 泛型之Hello World")]),e._v(" "),n("p",[e._v("下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是"),n("code",[e._v("echo")]),e._v("命令。")]),e._v(" "),n("p",[e._v("不用泛型的话，这个函数可能是下面这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity(arg: number): number {\n    return arg;\n}\n")])])]),n("p",[e._v("或者，我们使用"),n("code",[e._v("any")]),e._v("类型来定义函数：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity(arg: any): any {\n    return arg;\n}\n")])])]),n("p",[e._v("虽然使用"),n("code",[e._v("any")]),e._v("类型后这个函数已经能接收任何类型的arg参数，但是却丢失了一些信息：传入的类型与返回的类型应该是相同的。 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。")]),e._v(" "),n("p",[e._v("因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了"),n("em",[e._v("类型变量")]),e._v("，它是一种特殊的变量，只用于表示类型而不是值。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity<T>(arg: T): T {\n    return arg;\n}\n")])])]),n("p",[e._v("我们给identity添加了类型变量"),n("code",[e._v("T")]),e._v("。 "),n("code",[e._v("T")]),e._v("帮助我们捕获用户传入的类型（比如："),n("code",[e._v("number")]),e._v("），之后我们就可以使用这个类型。 之后我们再次使用了"),n("code",[e._v("T")]),e._v("当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。")]),e._v(" "),n("p",[e._v("我们把这个版本的"),n("code",[e._v("identity")]),e._v("函数叫做泛型，因为它可以适用于多个类型。 不同于使用"),n("code",[e._v("any")]),e._v("，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。")]),e._v(" "),n("p",[e._v("我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let output = identity<string>(\"myString\");  // type of output will be 'string'\n")])])]),n("p",[e._v("这里我们明确的指定了"),n("code",[e._v("T")]),e._v("是字符串类型，并做为一个参数传给函数，使用了"),n("code",[e._v("<>")]),e._v("括起来而不是"),n("code",[e._v("()")]),e._v("。")]),e._v(" "),n("p",[e._v("第二种方法更普遍。利用了"),n("em",[e._v("类型推论")]),e._v("，编译器会根据传入的参数自动地帮助我们确定T的类型：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let output = identity(\"myString\");  // type of output will be 'string'\n")])])]),n("p",[e._v("注意我们并没用"),n("code",[e._v("<>")]),e._v("明确的指定类型，编译器看到了"),n("code",[e._v("myString")]),e._v("，把"),n("code",[e._v("T")]),e._v("设置为此类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。")]),e._v(" "),n("h2",{attrs:{id:"使用泛型变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用泛型变量"}},[e._v("#")]),e._v(" 使用泛型变量")]),e._v(" "),n("p",[e._v("使用泛型创建像"),n("code",[e._v("identity")]),e._v("这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。")]),e._v(" "),n("p",[e._v("看下之前"),n("code",[e._v("identity")]),e._v("例子：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity<T>(arg: T): T {\n    return arg;\n}\n")])])]),n("p",[e._v("如果我们想同时打印出"),n("code",[e._v("arg")]),e._v("的长度。 我们很可能会这样做：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function loggingIdentity<T>(arg: T): T {\n    console.log(arg.length);  // Error: T doesn't have .length\n    return arg;\n}\n")])])]),n("p",[e._v("如果这么做，编译器会报错说我们使用了"),n("code",[e._v("arg")]),e._v("的"),n("code",[e._v(".length")]),e._v("属性，但是没有地方指明"),n("code",[e._v("arg")]),e._v("具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有"),n("code",[e._v(".length")]),e._v("属性的。")]),e._v(" "),n("p",[e._v("现在假设我们想操作"),n("code",[e._v("T")]),e._v("类型的数组而不直接是"),n("code",[e._v("T")]),e._v("。由于我们操作的是数组，所以"),n("code",[e._v(".length")]),e._v("属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function loggingIdentity<T>(arg: T[]): T[] {\n    console.log(arg.length);  // Array has a .length, so no more error\n    return arg;\n}\n")])])]),n("p",[e._v("你可以这样理解"),n("code",[e._v("loggingIdentity")]),e._v("的类型：泛型函数"),n("code",[e._v("loggingIdentity")]),e._v("，接收类型参数"),n("code",[e._v("T")]),e._v("，和函数"),n("code",[e._v("arg")]),e._v("，它是个元素类型是"),n("code",[e._v("T")]),e._v("的数组，并返回元素类型是"),n("code",[e._v("T")]),e._v("的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时"),n("code",[e._v("T")]),e._v("的的类型为"),n("code",[e._v("number")]),e._v("。 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。")]),e._v(" "),n("p",[e._v("我们也可以这样实现上面的例子：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function loggingIdentity<T>(arg: Array<T>): Array<T> {\n    console.log(arg.length);  // Array has a .length, so no more error\n    return arg;\n}\n")])])]),n("p",[e._v("使用过其它语言的话，你可能对这种语法已经很熟悉了。 在下一节，会介绍如何创建自定义泛型像"),n("code",[e._v("Array<T>")]),e._v("一样。")]),e._v(" "),n("h2",{attrs:{id:"泛型类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型类型"}},[e._v("#")]),e._v(" 泛型类型")]),e._v(" "),n("p",[e._v("上一节，我们创建了identity通用函数，可以适用于不同的类型。 在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。")]),e._v(" "),n("p",[e._v("泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity<T>(arg: T): T {\n    return arg;\n}\n\nlet myIdentity: <T>(arg: T) => T = identity;\n")])])]),n("p",[e._v("我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity<T>(arg: T): T {\n    return arg;\n}\n\nlet myIdentity: <U>(arg: U) => U = identity;\n")])])]),n("p",[e._v("我们还可以使用带有调用签名的对象字面量来定义泛型函数：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function identity<T>(arg: T): T {\n    return arg;\n}\n\nlet myIdentity: {<T>(arg: T): T} = identity;\n")])])]),n("p",[e._v("这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("interface GenericIdentityFn {\n    <T>(arg: T): T;\n}\n\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nlet myIdentity: GenericIdentityFn = identity;\n")])])]),n("p",[e._v("一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如："),n("code",[e._v("Dictionary<string>而不只是Dictionary")]),e._v("）。 这样接口里的其它成员也能知道这个参数的类型了。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("interface GenericIdentityFn<T> {\n    (arg: T): T;\n}\n\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nlet myIdentity: GenericIdentityFn<number> = identity;\n")])])]),n("p",[e._v("注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用"),n("code",[e._v("GenericIdentityFn")]),e._v("的时候，还得传入一个类型参数来指定泛型类型（这里是："),n("code",[e._v("number")]),e._v("），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。")]),e._v(" "),n("p",[e._v("除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。")]),e._v(" "),n("h2",{attrs:{id:"泛型类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型类"}},[e._v("#")]),e._v(" 泛型类")]),e._v(" "),n("p",[e._v("泛型类看上去与泛型接口差不多。 泛型类使用（"),n("code",[e._v("<>")]),e._v("）括起泛型类型，跟在类名后面。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class GenericNumber<T> {\n    zeroValue: T;\n    add: (x: T, y: T) => T;\n}\n\nlet myGenericNumber = new GenericNumber<number>();\nmyGenericNumber.zeroValue = 0;\nmyGenericNumber.add = function(x, y) { return x + y; };\n")])])]),n("p",[n("code",[e._v("GenericNumber")]),e._v("类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用"),n("code",[e._v("number")]),e._v("类型。 也可以使用字符串或其它更复杂的类型。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let stringNumeric = new GenericNumber<string>();\nstringNumeric.zeroValue = "";\nstringNumeric.add = function(x, y) { return x + y; };\n\nalert(stringNumeric.add(stringNumeric.zeroValue, "test"));\n')])])]),n("p",[e._v("与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。")]),e._v(" "),n("p",[e._v("我们在"),n("a",{attrs:{href:"https://www.runoob.com/manual/gitbook/TypeScript/_book/doc/handbook/Classes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("类"),n("OutboundLink")],1),e._v("那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。")]),e._v(" "),n("h2",{attrs:{id:"泛型约束"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型约束"}},[e._v("#")]),e._v(" 泛型约束")]),e._v(" "),n("p",[e._v("你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在"),n("code",[e._v("loggingIdentity")]),e._v("例子中，我们想访问"),n("code",[e._v("arg")]),e._v("的"),n("code",[e._v("length")]),e._v("属性，但是编译器并不能证明每种类型都有"),n("code",[e._v("length")]),e._v("属性，所以就报错了。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function loggingIdentity<T>(arg: T): T {\n    console.log(arg.length);  // Error: T doesn't have .length\n    return arg;\n}\n")])])]),n("p",[e._v("相比于操作any所有类型，我们想要限制函数去处理任意带有"),n("code",[e._v(".length")]),e._v("属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。")]),e._v(" "),n("p",[e._v("为此，我们定义一个接口来描述约束条件。 创建一个包含"),n("code",[e._v(".length")]),e._v("属性的接口，使用这个接口和"),n("code",[e._v("extends")]),e._v("关键字还实现约束：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("interface Lengthwise {\n    length: number;\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n    console.log(arg.length);  // Now we know it has a .length property, so no more error\n    return arg;\n}\n")])])]),n("p",[e._v("现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("loggingIdentity(3);  // Error, number doesn't have a .length property\n")])])]),n("p",[e._v("我们需要传入符合约束类型的值，必须包含必须的属性：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("loggingIdentity({length: 10, value: 3});\n")])])]),n("h2",{attrs:{id:"在泛型约束中使用类型参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在泛型约束中使用类型参数"}},[e._v("#")]),e._v(" 在泛型约束中使用类型参数")]),e._v(" "),n("p",[e._v("你可以声明一个类型参数，且它被另一个类型参数所约束。比如，")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function find<T, U extends Findable<T>>(n: T, s: U) {\n  // ...\n}\nfind (giraffe, myAnimals);\n")])])]),n("h2",{attrs:{id:"在泛型里使用类类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在泛型里使用类类型"}},[e._v("#")]),e._v(" 在泛型里使用类类型")]),e._v(" "),n("p",[e._v("在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function create<T>(c: {new(): T; }): T {\n    return new c();\n}\n")])])]),n("p",[e._v("一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class BeeKeeper {\n    hasMask: boolean;\n}\n\nclass ZooKeeper {\n    nametag: string;\n}\n\nclass Animal {\n    numLegs: number;\n}\n\nclass Bee extends Animal {\n    keeper: BeeKeeper;\n}\n\nclass Lion extends Animal {\n    keeper: ZooKeeper;\n}\n\nfunction findKeeper<A extends Animal, K> (a: {new(): A;\n    prototype: {keeper: K}}): K {\n\n    return a.prototype.keeper;\n}\n\nfindKeeper(Lion).nametag;  // typechecks!\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);