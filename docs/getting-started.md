---
id: getting-started
sidebar_position: 3
---

# Começando

Este guia tem finalidade de orientar sobre a instalação e utilização dos componentes.

Os componentes do Animalia DS são construídos utilizando a tecnologia Web Components,
que consiste em criar elementos customizáveis utilizando apenas Javascript e HTML, podendo
desta forma ser utilizado por aplicações contendo diversas tecnologias web, sendo assim uma
biblioteca de componentes agnóstica.

## Pré requisitos

Para usar a biblioteca Animalia DS, você precisa ter familiaridade com:

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [HTML](https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML)
- [CSS](https://developer.mozilla.org/docs/Learn/CSS/First_steps)

E para a instalação local no seu computador, precisará ter instalado:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)

## Instalação

Instale o pacote via npm:

```
npm install @animaliads/animalia-web-components
```

Se preferir, você também pode instalar o componente de forma individual:

```
npm install @animaliads/ani-button
```

## Como usar

Adicione o arquivo instalado no seu código `html`:

```html
<script type="module" src="./node_modules/@animaliads/web-components"></script>
```

<a id="angular"></a>

### Angular

Para utilizar o web component, você precisará adicionar o `CUSTOM_ELEMENTS_SCHEMA` no módulo da sua aplicação.

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent],
  exports: [PageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageModule {}
```

Você também precisará importar o pacote dentro do seu componente:

```javascript
import '@animaliads/web-components';
```
