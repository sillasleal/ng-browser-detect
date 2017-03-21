angular.module("browserDetect").factory("browserDetect.factory.getBrowser", [
    function () {

        /**
         * Função que retorna de forma dinâmica o browser em execução
         * @returns {browser-detect-factoryL#2.getBrowser.browser-detect-factoryAnonym$2|browser-detect-factoryL#2.getBrowser.browser-detect-factoryAnonym$1|browser-detect-factoryL#2.getBrowser.browser-detect-factoryAnonym$3}
         */
        function getBrowser() {
            var ua = navigator.userAgent;
            var test;
            var M = ua.match(/(opera|edge|chromium|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
                    [
                    ];
            var chromiuns = [
                {
                    expression: /\bChromium\/(\d+)/,
                    name: "Chromium"
                },
                {
                    expression: /\bOPR\/(\d+)/,
                    name: "Opera"
                },
                {
                    expression: /\bEdge\/(\d+)/,
                    name: "Edge"
                }
            ];
            var browser = {
                name: "",
                version: 0,
                vendor: navigator.vendor || "Undefined",
                product: navigator.product || "Undefined",
                platform: navigator.platform || "Undefined"
            };
            /**/
            if (/trident/i.test(M[1])) {
                test = /\brv[ :]+(\d+)/g.exec(ua) || [
                ];
                browser.name = "IE";
                browser.version = (test[1] || '');
            }
            if (browser.name.length === 0) {
                if (M[1] === 'Chrome') {
                    chromiuns.forEach(function (chromium) {
                        test = ua.match(chromium.expression);
                        if (test !== null) {
                            browser.name = chromium.name;
                            browser.version = test[1];
                            return false;
                        }
                    });
                }
            }
            if (browser.name.length === 0) {
                M = M[2] ? [
                    M[1],
                    M[2]
                ] : [
                    navigator.appName,
                    navigator.appVersion,
                    '-?'
                ];
                if ((test = ua.match(/version\/(\d+)/i)) !== null) {
                    M.splice(1, 1, test[1]);
                }
                browser.name = M[0];
                browser.version = M[1];
            }
            /**/
            return browser;
        }

        /**/
        return {
            info: getBrowser
        };
    }
]);