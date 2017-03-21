angular.module("browserDetect").directive("browserDetectClass", [
    "browserDetect.factory.getBrowser",
    function (getBrowser) {

        /**
         * Função que ajusta o nome das propriedades
         * @param {string} prop A string a ser ajustada
         * @returns {string} O texto devidamente convertido para nome de classe
         */
        function ajustar(prop) {
            var finais = [".", ",", "-", " "];
            if (finais.indexOf(prop.substring(prop.length - 1)) > -1) {
                prop = prop.substring(0, prop.length - 1);
            }
            return prop
                    .replace(".", "-")
                    .replace(" ", "-")
                    .toLowerCase();
        }

        /**
         * Função a ser executada como link da diretiva
         * @param {object} scope O escopo de execução da diretiva 
         * @param {object} element O elemento afetado pela diretiva
         * @param {object} attrs Objeto contendo os parametros passados para a diretiva
         */
        function link(scope, element, attrs) {
            var browser = getBrowser.info();
            var className = ajustar(browser.name);
            var classVersionName = className + "-" + parseInt(browser.version);
            var classes = {
                name: className,
                version: browser.version,
                nameVersion: classVersionName,
                vendor: ajustar(browser.vendor),
                product: ajustar(browser.product),
                platform: ajustar(browser.platform),
                device: ajustar(browser.device)
            };
            var classAdd = angular.copy(classes);
            /**/
            if (attrs.browserDetectClass) {
                /* Caso a inclusão de classes a ser exibida */
                var especifc = scope.$eval(attrs.browserDetectClass);
                if (especifc && Array.isArray(especifc)) {
                    classAdd = {};
                    especifc.forEach(function (v) {
                        classAdd[v] = classes[v];
                    });
                } else if (typeof (especifc) === "string") {
                    classAdd = {};
                    classAdd[especifc] = classes[especifc];
                } else if (attrs.browserDetectClass.length) {
                    classAdd = {};
                    classAdd[attrs.browserDetectClass] = classes[attrs.browserDetectClass];
                }
            }
            /**/
            angular.forEach(classAdd, function (v) {
                angular.element(element).addClass(v);
            });
        }

        return {
            link: link
        };
    }
]);