# ng-browser-detect
Pequeno módulo que adiciona classes referentes ao browser em execução ao elemento selecionado

## Como instalar:

```bash
bower install ng-browser-detect
```

ou

```bash
bower install ng-browser-detect --save
```

## Como usar:

Para adicionar classes referentes ao navegador em execução.

###1. Adicione o javascript ao seu index:

```html
<script src="bower_components/ng-browser-detect/dest/browser-detect.min.js"></script>
```

ou

```html
<script src="https://raw.githubusercontent.com/sillasleal/ng-browser-detect/master/dest/browser-detect.min.js"></script>
```

###2. Adicione o módulo "browserDetect" ao seu projeto

```javascript
angular.module("myApp", ["browserDetect"]);
```

###3. Insira a directiva onde deseja que as classe do browser devem ser inseridas.

```html
<div browser-detect-class></div>
```

####Resulta em 

```html
<div class="browser-name browser-version browser-name-verion"></div>
```

####Por exemplo, no Chrome, na versão 56 do browser:

```html
<div class="chrome 56 chrome-56"></div>
```