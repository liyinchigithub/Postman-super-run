const newman = require('newman');
var Sandbox = require('postman-sandbox'), context;
const chalk = require('chalk');


describe("Postman Multi-format report", () => {

    it("Default Html Report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。
            // environment 此属性还接受环境变量作为object 例如 environment:{ "key": "url","value": "http://www.baidu.com","enabled": false} 
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['html'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                html: {
                    export: './report/htmlResults.html',  //单色 html 报告
                    template: './teamplate/html/template-default.hbs'
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置


        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('Default Html Report complete!'));
        });
    });


    it("junit xml report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['junit'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                junit: { export: './report/xmlResults.xml' },//junit xml 报告
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置


        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('junit xml report complete!'));
        });
    });

    it("json report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['json'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                json: {
                    export: './report/jsonResults.json' // json 报告
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('json report complete!'));
        });
    });

    it("htmlextra report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['htmlextra'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                htmlextra: {
                    export: './report/htmlextraResults.html',// 个性化可自定义配置newman html 报告
                    showOnlyFails: false, //可选，报告仅显示测试失败的请求。
                    darkTheme: false, //可选，使用`Dark Theme`模板 
                    title: 'Newman Run Dashboard', //可选，报告将其用作报告中心的主要标题 
                    logs: false,  //可选，报告程序在报告中显示控制台日志语句。默认情况下为False。
                    skipHeaders: ['Server', 'Authorization', 'X-Powered-By'], //可选，不在报告中输出这些头及其值。默认情况下为false。
                    omitHeaders: false,//可选，告诉报告者不要为报告中的每个请求和响应输出标头。默认情况下为false。
                    hideResponse: ['Ping the API'],//可选的，不输出报告中的请求的响应主体。
                    skipSensitiveData: true,//可选，不要为报告中的每个请求和响应输出标题和正文。默认情况下为false。
                    // template: './teamplate/htmlextra/only-failures-dashboard.hbs', //可选，如果未指定模板，将使用默认模板 
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('htmlextra report complete!'));
        });
    });

    it("csv report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['csv'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                csv: {
                    export: './report/csvResults.csv'// csv 报告
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('csv report complete!'));
        });
    });

    it("confluence wiki report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['confluence'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                confluence: {
                    export: './report/default-template.wiki',// confluence wiki 报告（jira）
                    template: './teamplate/confluence/confluence.hbs'
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('confluence wiki report complete!'));
        });
    });

    it("allure report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['allure'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                allure: {
                    export: './report/htmlAllureResults',// allure 报告（开源测试报告工具）
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('allure report complete!'));
        });
    });

    it("testrail report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['teamcity'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                testrail: {
                    export: './report/testrail',// testrail 报告（testrail是一款商业化测试用例管理工具）
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('testrail report complete!'));
        });
    });
    it.skip("statsd report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['statsd'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                statsd: {  // grafana 报告（此报告器可用于将Collection运行数据发送到statsd时间序列分析工具，并用于诸如Grafana的时间序列分析工具）
                    destination: "destination", // statsd地址
                    port: "port",  // statsd端口
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('statsd report complete!'));
        });
    });
    it("teamcity report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['teamcity'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                teamcity: {
                    export: './report/teamcity',// teamcity 报告（IDEA公司出品持续集成工具）
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('teamcity report complete!'));
        });
    });
    it("influxdb report", () => {
        newman.run({
            // Postman collection 文件路径，也可以是一个url地址
            collection: require('../postmanCollection/demo.postman_collection.json'), // 作为string，可以提供一个URL，可以在其中找到Collection JSON（例如Postman Cloud API服务）或本地JSON文件的路径。
            // Postman 环境变量 collection 文件路径，也可以是一个url地址
            environment: require('../postmanCollection/demo.postman_environment.json'),// 可以选择传递有关string此属性的环境文件路径或URL ，并将其用于读取Postman环境变量。此属性还接受环境变量作为object 例如 environment:{ url:"",username:"",password:"" } 从Postman App导出的环境文件可以在这里直接使用。
            // Postman 全局变量 
            globals: {  // 全局变量可以有选择地传递到以文件或URL路径形式运行的集合。它还接受变量作为object
                "key": "url",
                "value": "http://www.baidu.com",
                "enable": true,
            },
            iterationCount: 1,// 指定要在集合上运行的迭代次数。通常会附带提供数据文件引用，例如options.iterationData。类型：number 默认1
            iterationData: "",// （变量参数化）在集合上运行多个迭代时，用作数据源的JSON或CSV文件或URL的路径。类型：string
            folder: "",// 集合中要运行的文件夹/文件夹（ItemGroup）的名称或ID，而不是整个集合。类型：string|array
            workingDir: "",// 用作工作目录的目录路径件。 类型：string，默认值：Current Directory
            insecureFileRead: true,// 允许读取工作目录之外的文件。 类型：boolean，默认值：true
            timeout: 60000,// 指定等待整个集合运行完成执行的时间（毫秒）。类型：number，默认值：Infinity 
            timeoutRequest: 10000,// 指定等待请求返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            timeoutScript: 10000,// 指定等待脚本返回响应的时间（以毫秒为单位）。类型：number，默认值：Infinity
            delayRequest: 0,//	指定后续请求之间要等待的时间（以毫秒为单位）。类型：number，默认值：0
            ignoreRedirects: false,// 这指定了newman是否将自动跟踪服务器的3xx响应。类型：boolean，默认值：false
            insecure: false,// 禁用SSL验证检查，并允许自签名SSL证书。类型：boolean，默认值：false
            bail: false,// 一个开关，用于指定在遇到第一个错误时是否优雅地停止集合运行（在完成当前测试脚本之后）。采用其他修饰符作为参数，以指定是否以无效的名称或路径错误结束运行。 类型：boolean|object，默认值：false
            suppressExitCode: false,// 如果存在，则允许覆盖当前收集运行中的默认退出代码，这对于绕过收集结果失败很有用。不带参数。 类型：boolean，默认值：false
            reporters: ['influxdb'],//   指定一个报告人名称作为string或提供一个以上报告人名称作为array。类型：string|array 。Available reporters: cli, json, junit, progress and emojitrain.
            reporter: {
                influxdb: {
                    server: 'localhost',
                    port: 'port',
                    name: 'newman_reports',
                    measurement: 'api_results',
                },
            },
            color: "on", // 启用或禁用彩色CLI输出。类型：string，默认值：auto。可用选项：on，off和auto
            sslClientCert: "",// 公用客户端证书文件的路径。类型：string
            sslClientKey: "",// 私有客户端密钥文件的路径。类型：string
            sslClientPassphrase: "",// 秘密客户端密钥密码短语。类型：string
            sslClientCertList: "",// 客户端证书配置列表文件的路径。此选项优先sslClientCert，sslClientKey和sslClientPassphrase。如果此配置列表中没有匹配项，sslClientCert则用作后备。类型：string|array
            sslExtraCaCerts: "", // 文件的路径，其中包含一个或多个PEM格式的受信任CA证书。
            newmanVersion: "", // 用于集合运行的Newman版本。这将由newman设置
        }, function (err) {
            if (err) { 
                console.error(chalk.red(err));
            }
            console.log(chalk.green.bold('influxdb report complete!'));
        });
    })
})




describe("Newman event config demo", () => {
    it("newman run event", () => {
        newman.run({
            collection: require('../postmanCollection/sample-collection.json'),
            iterationData: [{ "var": "data", "var_beta": "other_val" }],
            globals: {
                "id": "5bfde907-2a1e-8c5a-2246-4aff74b74236",
                "name": "test-env",
                "values": [
                    {
                        "key": "alpha",
                        "value": "beta",
                        "type": "text",
                        "enabled": true
                    }
                ],
                "timestamp": 1404119927461,
                "_postman_variable_scope": "globals",
                "_postman_exported_at": "2016-10-17T14:31:26.200Z",
                "_postman_exported_using": "Postman/4.8.0"
            },
            environment: {
                "id": "4454509f-00c3-fd32-d56c-ac1537f31415",
                "name": "test-env",
                "values": [
                    {
                        "key": "foo",
                        "value": "bar",
                        "type": "text",
                        "enabled": true
                    }
                ],
                "timestamp": 1404119927461,
                "_postman_variable_scope": "environment",
                "_postman_exported_at": "2016-10-17T14:26:34.940Z",
                "_postman_exported_using": "Postman/4.8.0"
            }
        }).on('start', function (err, args) { // on start of run, log to console
            console.log('running a collection...');
        }).on('done', function (err, summary) {
            if (err || summary.error) {
              
                if (err) { 
                    console.error(chalk.red(err));
                }
                console.log(chalk.green.bold('testrail report complete!'));
            }
            else {
                console.log(chalk.green.bold('Newman run event collection run completed!'));
            }
        });

        /**
        其他event 所有事件都接收两个参数（1）error和（2）args。下面的列表描述了第二个自变量对象的属性。
        start  集合运行的开始
        eforeIteration 在迭代开始之前
        beforeItem 在项目执行开始之前（prerequest-> request-> test的集合）
        beforePrerequest 在prerequest脚本开始执行之前
        prerequest 后prerequest脚本执行完成
        beforeRequest 发送HTTP请求之前
        request 收到请求响应后
        beforeTest 在test脚本开始执行之前
        test 后test脚本执行完成
        beforeScript	 在执行任何脚本（类型test或prerequest）之前
        script 执行任何脚本（类型为test或prerequest）后
        item 一个项目（整套prerequest-> request-> test）完成时
        iteration 迭代完成后
        assertion test脚本中完成的每个测试断言都会触发此事件
        console 每次console从任何脚本中调用函数时，都会传播此事件
        exception 当在scripts此事件中发生任何异步错误时，将触发
        eforeDone 运行完成之前触发的事件
        done 收集运行完成（有无错误）时，将发出此事件
        */

    })
})

