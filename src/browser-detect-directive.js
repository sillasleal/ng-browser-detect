angular.module("browserDetect").directive("browserDetect", [
    "browserDetect.factory.getBrowser",
    function (getBrowser) {

        /**
         * Função a ser executada como link da diretiva
         * @param {object} scope O escopo de execução da diretiva 
         * @param {object} element O elemento afetado pela diretiva
         */
        function link(scope, element) {
            var browser = getBrowser.info();
            var className = browser.name.toLowerCase();
            var classVersionName = className + "-" + parseInt(browser.version);
            angular.element(element).addClass(className);
            angular.element(element).addClass(classVersionName);
        }

        return {
            link: link
        };
    }
]);