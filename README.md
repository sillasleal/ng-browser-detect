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

### 1. Adicione o javascript ao seu index:

```html
<script src="bower_components/ng-browser-detect/dest/browser-detect.min.js"></script>
```

ou

```html
<script src="https://raw.githubusercontent.com/sillasleal/ng-browser-detect/master/dest/browser-detect.min.js"></script>
```

### 2. Adicione o módulo "browserDetect" ao seu projeto

```javascript
angular.module("myApp", ["browserDetect"]);
```

### 3. Insira a directiva onde deseja que as classe do browser devem ser inseridas.

```html
<div browser-detect-class></div>
```

#### Resulta em 

```html
<div class="browser-name browser-version browser-name-verion"></div>
```

#### Por exemplo, no Chrome, na versão 56 do browser:

```html
<div class="chrome 56 chrome-56"></div>
```

### Para adicionar as classes relacionadas a apenas algumas opções:

```html
<div browser-detect-class="name"></div>
```

#### ou

```html
<div browser-detect-class="{{'name'}}"></div>
```

#### ou

```html
<div browser-detect-class="{{['name', 'version']}}"></div>
```

### As opções dinsponíveis são:

Opção       | Definição
------------|-------------------------------------------------------------
name        | Adiciona a classe referente ao nome do browser
version     | Adiciona a classe referente a versão do browser
nameVersion | Adiciona a classe referente ao nome concatenado ao browser
vendor      | Adiciona a classe referente ao desenvolvedor do browser
product     | Adiciona a classe referente ao product name
platform    | Adiciona a classe referente ao sistema operacional
device      | Adiciona a classe referente ao tipo do dispositivo(desktop e mobile)

### Exemplo de classes:
#### Google Chrome Sendo executado no Windows 10

Valor no sistema       | Opção         | Classe
-----------------------|:-------------:|:----------:
Google Chrome          | name          | chrome
Versão 56.0.2924.87    | version       | 56
Google Chrome    56    | nameVersion   | chrome-56
Google Inc.            | vendor        | google-inc
Gecko                  | product       | gecko
Win32                  | platform      | win32
Device                 | device        | desktop