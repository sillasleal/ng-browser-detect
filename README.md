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

Para adicionar classes referentes ao navegador em execução

```html
<div browser-detect-class></div>
```

Resulta em 

```html
<div class="browser-name browser-version browser-name-verion"></div>
```

Por exemplo, no Chrome, na versão 56 do browser:

```html
<div class="chrome 56 chrome-56"></div>
```