---
id: designtokens
sidebar_position: 1
---

# Design Tokens

## Intro

### O que é um Design Token?

De forma resumida, os design tokens são todas as opção de estilização que podemos usar em nossos componentes.
Estão sempre espelhados entre design e tecnologia.

:::note **Medidas relativas**

As ferramentas de design voltadas para interface utilizam pixel como unidade. Mas no desenvolvimento é importante considerar as medidas relativas (rem), pois valores fixos podem prejudicar a acessibilidade.
:::

### Global token e brand token


----

## Spacing
Espaçamentos usados para estruturar os componentes, assim como criar ritmo vertical e ritmo horizontal nas interfaces.



| Token         | Valor (rem) | Valor (pixel) |
|---------------|-------------|---------------|
| `spacing-xs`  | 0.5 rem     | 8px           |
| `spacing-sm`  | 1 rem       | 16px          |
| `spacing-md`  | 1.5 rem     | 24px          |
| `spacing-lg`  | 2 rem       | 32px          |
| `spacing-xl`  | 2.5 rem     | 40px          |
| `spacing-2xl` | 3 rem       | 48px          |
| `spacing-3xl` | 3.5 rem     | 56px          |
| `spacing-4xl` | 4 rem       | 64px          |


----

## Border

### Border radius


### Border widht


___

## Tipography

:::note **Legenda**

- **global** = token básico, comum à todos
- **brand** = específico de cada marca, disponível de acordo com a necessidade
:::

### Font family

| Token                 | Camada DS | Uso                                                  |
| --------------------- | --------- | ---------------------------------------------------- |
| `font-family-heading` | brand     | Títulos e chamadas                                   |
| `font-family-text`    | brand     | Textos em geral, labels, placeholders, legendas, etc |
| `font-family-code`    | brand     | Trechos de código em documentação técnica            |


### Font size

| Token               | Valor (rem) | Valor (pixel) | Camada DS | Descrição      |
| ------------------- | ----------- | ------------- | --------- | ---------------|
| `font-size-xs`      | 0.75        | 12px          | global    |                |
| `font-size-sm`      | 0.875       | 14px          | global    |                |
| `font-size-default` | 1           | 16px          | global    | Base da escala |
| `font-size-md`      | 1.25        | 20px          | global    |                |
| `font-size-lg`      | 1.5         | 24px          | global    |                |
| `font-size-xl`      | 2           | 32px          | global    |                |
| `font-size-2xl`     | 2.5         | 40px          | global    |                |
| `font-size-3xl`     | 3           | 48px          | global    |                |
| `font-size-4xl`     | 3.75        | 60px          | brand     |                |
| `font-size-5xl`     | 4.75        | 76px          | brand     |                |
| `font-size-6xl`     | 6           | 96px          | brand     |                |


### Font-weight

| Token                     | Valor | Camada DS |
| ------------------------- | ----- | --------- |
| `font-weight-thin`        | 100   | brand     |
| `font-weight-extra-light` | 200   | brand     |
| `font-weight-light`       | 300   | brand     |
| `font-weight-normal`      | 400   | global    |
| `font-weight-medium`      | 500   | brand     |
| `font-weight-semibold`    | 600   | global    |
| `font-weight-bold`        | 700   | global    |
| `font-weight-extrabold`   | 800   | brand     |
| `font-weight-heavy`       | 900   | brand     |

### Line-height

| Token              | Valor (%) | Referência (em) |
|--------------------|-----------|-----------------|
| `line-height-auto` | auto      |                 |
| `line-height-none` | 100%      | 1.0             |
| `line-height-3xs ` | 110%      | 1.1             |
| `line-height-2xs ` | 120%      | 1.2             |
| `line-height-xs `  | 130%      | 1.3             |
| `line-height-sm`   | 140%      | 1.4             |
| `line-height-md`   | 150%      | 1.5             |
| `line-height-lg`   | 160%      | 1.6             |
| `line-height-xlg`  | 170%      | 1.7             |
| `line-height-2xl`  | 180%      | 1.8             |
| `line-height-3xl`  | 190%      | 1.9             |
| `line-height-4xl`  | 200%      | 2.0             |

### Letterspacing

| Token                  | Valor (em) | Camada DS |
| ---------------------- | ---------- | --------- |
| `letter-spacing-auto`  | auto       | global    |
| `letter-spacing-1`     | 0.015      | global    |
| `letter-spacing-2`     | 0.025      | global    |
| `letter-spacing-3`     | 0.05       | global    |
| `letter-spacing-4`     | 0.075      | global    |
| `letter-spacing-5`     | 0.1        | global    |
| `letter-spacing-neg-1` | -0.015     | global    |
| `letter-spacing-neg-2` | -0.025     | global    |
| `letter-spacing-neg-3` | -0.05      | global    |
| `letter-spacing-neg-4` | -0.075     | global    |
| `letter-spacing-neg-5` | -0.1       | global    |
