(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[812],{6532:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P},frontMatter:function(){return D},metadata:function(){return I},toc:function(){return _}});var n=a(2122),o=a(9756),r=a(7294),l=a(3905),i=a(944),s=a(6010),d="tabItem_1uMI",m="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,o=e.values,l=e.groupId,p=e.className,k=(0,i.Z)(),v=k.tabGroupChoices,b=k.setTabGroupChoices,h=(0,r.useState)(n),g=h[0],f=h[1],N=r.Children.toArray(e.children),w=[];if(null!=l){var z=v[l];null!=z&&z!==g&&o.some((function(e){return e.value===z}))&&f(z)}var y=function(e){var t=e.currentTarget,a=w.indexOf(t),n=o[a].value;f(n),null!=l&&(b(l,n),setTimeout((function(){var e,a,n,o,r,l,i,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,s=l.innerWidth,a>=0&&r<=s&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case c:var o=w.indexOf(e.target)-1;a=w[o]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},p)},o.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:y,onClick:y},a)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var k,v,b,h,g,f,N,w,z,y=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var E=function(e){var t=e.title,a=e.titleId,n=x(e,["title","titleId"]);return r.createElement("svg",C({width:256,height:239,viewBox:"0 0 256 239",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,k||(k=r.createElement("path",{fill:"#fff",d:"M0 0h256v239H0z"})),v||(v=r.createElement("g",{filter:"url(#button-anatomy_svg__filter0_dd)"},r.createElement("path",{d:"M56 97a2 2 0 012-2h136a2 2 0 012 2v40a2 2 0 01-2 2H58a2 2 0 01-2-2V97z",fill:"#FFD464"}),r.createElement("path",{d:"M75.648 117.992V122h-2.343v-11.375h4.437c.854 0 1.604.156 2.25.469.651.312 1.151.758 1.5 1.336.35.573.524 1.226.524 1.961 0 1.114-.383 1.994-1.149 2.64-.76.641-1.815.961-3.164.961h-2.055zm0-1.898h2.094c.62 0 1.091-.146 1.414-.438.328-.291.492-.708.492-1.25 0-.557-.164-1.008-.492-1.351-.328-.344-.781-.521-1.36-.532h-2.148v3.571zm12.586-.43a6.07 6.07 0 00-.812-.062c-.854 0-1.414.289-1.68.867V122h-2.258v-8.453h2.133l.063 1.008c.453-.776 1.08-1.164 1.882-1.164.25 0 .485.033.704.101l-.032 2.172zM91.711 122h-2.266v-8.453h2.266V122zm-2.398-10.641c0-.338.111-.617.335-.836.23-.218.54-.328.93-.328.385 0 .693.11.922.328.23.219.344.498.344.836 0 .344-.117.625-.352.844-.229.219-.534.328-.914.328s-.687-.109-.922-.328c-.229-.219-.344-.5-.344-.844zm6.382 2.188l.07.945c.6-.734 1.41-1.101 2.43-1.101 1.089 0 1.836.429 2.243 1.289.593-.86 1.44-1.289 2.539-1.289.916 0 1.599.268 2.046.804.448.532.672 1.334.672 2.407V122h-2.265v-5.391c0-.479-.094-.828-.282-1.047-.187-.223-.518-.335-.992-.335-.677 0-1.146.322-1.406.968l.008 5.805H98.5v-5.383c0-.489-.096-.844-.29-1.062-.192-.219-.52-.328-.983-.328-.641 0-1.105.265-1.391.796V122h-2.258v-8.453h2.117zM112.336 122a2.516 2.516 0 01-.227-.758c-.547.61-1.257.914-2.132.914-.829 0-1.516-.239-2.063-.718a2.317 2.317 0 01-.812-1.813c0-.896.33-1.583.992-2.063.666-.479 1.627-.721 2.883-.726h1.039v-.484c0-.391-.102-.704-.305-.938-.198-.234-.513-.352-.945-.352-.381 0-.68.092-.899.274-.213.182-.32.432-.32.75h-2.258c0-.49.151-.943.453-1.359.302-.417.729-.743 1.281-.977.553-.24 1.172-.359 1.86-.359 1.041 0 1.867.263 2.476.789.615.521.922 1.255.922 2.203v3.664c.005.802.117 1.409.336 1.82V122h-2.281zm-1.867-1.57c.333 0 .64-.073.922-.219.281-.151.489-.352.625-.602v-1.453h-.844c-1.13 0-1.732.391-1.805 1.172l-.008.133c0 .281.099.513.297.695.198.183.469.274.813.274zm10.297-4.766a6.077 6.077 0 00-.813-.062c-.854 0-1.414.289-1.68.867V122h-2.257v-8.453h2.132l.063 1.008c.453-.776 1.081-1.164 1.883-1.164.25 0 .484.033.703.101l-.031 2.172zm4.39 3.141l1.563-5.258h2.422l-3.399 9.765-.187.446c-.506 1.104-1.339 1.656-2.5 1.656-.328 0-.662-.049-1-.148v-1.711l.343.007c.428 0 .745-.065.954-.195.213-.13.38-.346.5-.648l.265-.696-2.961-8.476h2.43l1.57 5.258zm16.477-.953c0 1.354-.289 2.411-.867 3.171-.578.756-1.386 1.133-2.422 1.133-.917 0-1.649-.351-2.196-1.054l-.101.898h-2.031v-12h2.257v4.305c.521-.61 1.206-.914 2.055-.914 1.031 0 1.839.38 2.422 1.14.589.755.883 1.821.883 3.196v.125zm-2.258-.164c0-.855-.135-1.477-.406-1.868-.271-.396-.675-.593-1.211-.593-.719 0-1.214.294-1.485.882v3.336c.276.594.776.891 1.5.891.73 0 1.209-.359 1.438-1.078.109-.344.164-.867.164-1.57zm8.719 3.453c-.558.677-1.328 1.015-2.313 1.015-.906 0-1.599-.26-2.078-.781-.474-.521-.716-1.284-.726-2.289v-5.539h2.257v5.461c0 .88.401 1.32 1.204 1.32.765 0 1.291-.266 1.578-.797v-5.984h2.265V122h-2.125l-.062-.859zm6.594-9.672v2.078h1.445v1.656h-1.445v4.219c0 .312.059.536.179.672.12.135.349.203.688.203.25 0 .471-.018.664-.055v1.711a4.633 4.633 0 01-1.367.203c-1.584 0-2.391-.799-2.422-2.398v-4.555h-1.235v-1.656h1.235v-2.078h2.258zm5.406 0v2.078h1.445v1.656h-1.445v4.219c0 .312.06.536.179.672.12.135.349.203.688.203.25 0 .471-.018.664-.055v1.711a4.628 4.628 0 01-1.367.203c-1.584 0-2.391-.799-2.422-2.398v-4.555h-1.234v-1.656h1.234v-2.078h2.258zm2.117 6.226c0-.838.161-1.586.484-2.242a3.554 3.554 0 011.391-1.523c.609-.36 1.315-.539 2.117-.539 1.141 0 2.07.349 2.789 1.047.724.697 1.128 1.645 1.211 2.843l.016.578c0 1.297-.362 2.339-1.086 3.125-.724.782-1.695 1.172-2.914 1.172s-2.193-.39-2.922-1.172c-.724-.781-1.086-1.843-1.086-3.187v-.102zm2.258.164c0 .802.151 1.417.453 1.844.302.422.734.633 1.297.633.547 0 .974-.208 1.281-.625.307-.422.461-1.094.461-2.016 0-.786-.154-1.396-.461-1.828-.307-.432-.74-.648-1.297-.648-.552 0-.979.216-1.281.648-.302.427-.453 1.091-.453 1.992zm9.219-4.312l.07.976c.604-.755 1.414-1.132 2.43-1.132.895 0 1.562.263 2 .789.437.526.661 1.312.671 2.359V122h-2.257v-5.406c0-.479-.105-.826-.313-1.039-.208-.219-.555-.328-1.039-.328-.635 0-1.112.27-1.43.812V122h-2.258v-8.453h2.126z",fill:"#1D2426"}))),b||(b=r.createElement("path",{fill:"#1D2426",d:"M187 135h2v32h-2z"})),h||(h=r.createElement("circle",{cx:188,cy:171,r:12,fill:"#1D2426"})),g||(g=r.createElement("path",{d:"M190.803 168.678c0 .859-.406 1.815-1.218 2.87-.812 1.055-1.946 2.203-3.402 3.444h4.928V176h-6.216v-1.008c.177-.168.42-.387.728-.658s.639-.569.994-.896c.354-.336.714-.695 1.078-1.078.373-.383.709-.775 1.008-1.176.298-.401.541-.803.728-1.204a2.76 2.76 0 00.28-1.162c0-.56-.15-.999-.448-1.316-.29-.327-.728-.49-1.316-.49-.504 0-.929.056-1.274.168a3.086 3.086 0 00-.938.49l-.476-.77c.42-.299.863-.518 1.33-.658.476-.14.994-.21 1.554-.21.877 0 1.54.238 1.988.714.448.476.672 1.12.672 1.932z",fill:"#fff"})),f||(f=r.createElement("path",{fill:"#1D2426",d:"M74 104h2V72h-2z"})),N||(N=r.createElement("circle",{r:12,transform:"matrix(1 0 0 -1 75 68)",fill:"#1D2426"})),w||(w=r.createElement("path",{d:"M72.58 71.992h2.199v-7.364l-2.24 1.568-.546-.798 3.08-2.198h.784v8.792h2.156V73H72.58v-1.008z",fill:"#fff"})),z||(z=r.createElement("defs",null,r.createElement("filter",{id:"button-anatomy_svg__filter0_dd",x:48,y:91,width:156,height:60,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),r.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.createElement("feOffset",null),r.createElement("feGaussianBlur",{stdDeviation:1.5}),r.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),r.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.createElement("feOffset",{dy:4}),r.createElement("feGaussianBlur",{stdDeviation:4}),r.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),r.createElement("feBlend",{in2:"effect1_dropShadow",result:"effect2_dropShadow"}),r.createElement("feBlend",{in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})))))},O=a.p+"assets/images/button-states-a535067562c983b5fd75b648f32d7a8f.jpg",A=a(3552),B=function(e){function t(){return e.apply(this,arguments)||this}return(0,A.Z)(t,e),t.prototype.render=function(){return r.createElement("div",null,"Ol\xe1!")},t}(r.Component),D={id:"button",sidebar_label:"Button"},I={unversionedId:"components/button",id:"components/button",isDocsHomePage:!1,title:"Button",description:"<Tabs",source:"@site/docs/components/button.mdx",sourceDirName:"components",slug:"/components/button",permalink:"/homepage/en/docs/components/button",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/button.mdx",version:"current",sidebar_label:"Button",frontMatter:{id:"button",sidebar_label:"Button"},sidebar:"components",next:{title:"Link",permalink:"/homepage/en/docs/components/link"}},_=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[]},{value:"Anatomia",id:"anatomia",children:[]},{value:"Estados do bot\xe3o",id:"estados-do-bot\xe3o",children:[]}]},{value:"Acessibilidade",id:"acessibilidade",children:[{value:"Diretrizes tratadas no componente",id:"diretrizes-tratadas-no-componente",children:[]}]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Live Demo",id:"live-demo",children:[]}]},{value:"Propriedades customiz\xe1veis",id:"propriedades-customiz\xe1veis",children:[{value:"Button",id:"button",children:[]},{value:"Propriedades customiz\xe1veis em cada estado",id:"propriedades-customiz\xe1veis-em-cada-estado",children:[]}]}],V={toc:_};function P(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},V,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p,{defaultValue:"design",lazy:!0,values:[{label:"Design",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Propriedades Customizaveis",value:"custom-properies"}],mdxType:"Tabs"},(0,l.kt)(y,{value:"design",mdxType:"TabItem"},(0,l.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,l.kt)("p",null,"Os bot\xf5es s\xe3o utilizados para realizar a\xe7\xf5es e para tomada de decis\xf5es. Podem ser utilizado em p\xe1ginas e tamb\xe9m dentro de outros componentes."),(0,l.kt)(B,{mdxType:"WebComponentReact"}),(0,l.kt)("h3",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Use labels (r\xf3tulos) diretos, curtos e intuitivos, que direcionem o usu\xe1rio para o que ser\xe1 realizado. Para isso, prefira utilizar verbos, por exemplo: "Salvar" e "Adicionar";'),(0,l.kt)("li",{parentName:"ul"},"A intera\xe7\xe3o de foco deve compor os bot\xf5es, sendo navega\xe7\xe3o por mouse ou teclado, e em sequ\xeancia l\xf3gica;"),(0,l.kt)("li",{parentName:"ul"},"Evite utilizar muitos bot\xf5es em uma \xfanica tela, pois isso aumenta a carga cognitiva do usu\xe1rio e vai aumentar seu tempo de decis\xe3o;"),(0,l.kt)("li",{parentName:"ul"},"N\xe3o use cores para label e backgroud com baixo contraste entre elas, pois isso dificulta o entendimento do conte\xfado do bot\xe3o.")),(0,l.kt)("h3",{id:"anatomia"},"Anatomia"),(0,l.kt)("p",null,"O bot\xe3o \xe9 composto por um background que recebe uma cor de marca e uma label que descreve a intera\xe7\xe3o que ser\xe1 realizada."),(0,l.kt)(E,{mdxType:"ButtonAnatomy"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," Label"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," Background"),(0,l.kt)("h3",{id:"estados-do-bot\xe3o"},"Estados do bot\xe3o"),(0,l.kt)("p",null,"O bot\xe3o possui estados e se modifica de acordo com a intera\xe7\xe3o do usu\xe1rio. S\xe3o eles:"),(0,l.kt)("p",null,"Default, Hover, Focus, Disabled e Focusable Disabled."),(0,l.kt)("img",{src:O,alt:"Os cinco estados do bot\xe3o prim\xe1rio dispostos lado a lado"}),(0,l.kt)("h2",{id:"acessibilidade"},"Acessibilidade"),(0,l.kt)("p",null,"O componente bot\xe3o foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (WCAG) 2.1, mas altera\xe7\xf5es feitas na aplica\xe7\xe3o deste podem afetar essa conformidade."),(0,l.kt)("p",null,"Por isso, \xe9 muito importante que, ao aplicar esse componente, o propriet\xe1rio do conte\xfado leve em considera\xe7\xe3o os seguintes crit\xe9rios:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Oper\xe1vel")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"O bot\xe3o deve sempre ter um r\xf3tulo que descreva precisamente a a\xe7\xe3o que o mesmo executa. ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6: Headings and Labels")),(0,l.kt)("li",{parentName:"ul"},"O nome acess\xedvel do bot\xe3o deve conter o r\xf3tulo vis\xedvel do mesmo. Em caso de descri\xe7\xe3o adicional, o r\xf3tulo dever\xe1 ser lido primeiro. ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name"},"2.5.3: Label in Name")),(0,l.kt)("li",{parentName:"ul"},"O estado de foco deve ser sempre preservado, inclusive quando o bot\xe3o estiver desabilitado. ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"2.4.7: Focus Visible")),(0,l.kt)("li",{parentName:"ul"},"Ap\xf3s a ativa\xe7\xe3o do bot\xe3o o foco deve ser movido dependendo do tipo de a\xe7\xe3o que o bot\xe3o executa. Consultar lista de exemplos em ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#button"},"W3C WAI-ARIA 3.5 Button"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Percept\xedvel")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Entre as cores do r\xf3tulo do bot\xe3o e seu background o contraste deve ser de no m\xednimo 7:1, para bot\xf5es ativos. ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"},"1.4.6: Contrast"))),(0,l.kt)("h3",{id:"diretrizes-tratadas-no-componente"},"Diretrizes tratadas no componente"),(0,l.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas pelo propriet\xe1rio do conte\xfado. S\xe3o elas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quando em foco, o bot\xe3o \xe9 ativado usando as teclas de ",(0,l.kt)("em",{parentName:"li"},"Espa\xe7o")," e ",(0,l.kt)("em",{parentName:"li"},"Enter")," do teclado. ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"},"W3C WAI-ARIA 3.5 Button - Keyboard Interaction")))),(0,l.kt)(y,{value:"dev",mdxType:"TabItem"},(0,l.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,l.kt)("h3",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,l.kt)("p",null,"Voc\xea pode instalar o componente de forma isolada, conforme o exemplo abaixo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-button\n")),(0,l.kt)("p",null,"Ou instalar a biblioteca inteira de componentes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @animaliads/web-components\n")),(0,l.kt)("h3",{id:"como-utilizar"},"Como utilizar"),(0,l.kt)("p",null,"Para utilizar o web component na sua aplica\xe7\xe3o voc\xea precisa importar o arquivo principal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="html"',title:'"html"'},'<script src="./node_modules/@animaliads/ani-button"><\/script>\n')),(0,l.kt)("p",null,"Mas caso voc\xea estiver utilizando algum framework, pode ser necess\xe1rio seguir a documenta\xe7\xe3o do pr\xf3prio\ncomponente para adicionar o web component. Ou apenas importar o arquivo do componente\nem um arquivo JS, por exemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="javascript"',title:'"javascript"'},"import '@animaliads/ani-button';\n")),(0,l.kt)("p",null,"Depois dessa configura\xe7\xe3o, basta adicionar a tag ",(0,l.kt)("inlineCode",{parentName:"p"},"ani-button")," no seu c\xf3digo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="html"',title:'"html"'},"<ani-button>Hello world!</ani-button>\n")),(0,l.kt)("p",null,"Para customizar o tema do componente, voc\xea pode estar utilizando as propriedades customiz\xe1veis\nda seguinte forma:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="css"',title:'"css"'},"ani-button {\n  --background: red;\n  --line-height: 100%;\n  --border-radius: 3px;\n}\n")),(0,l.kt)("p",null,"Para saber quais s\xe3o as propriedades dispon\xedvel, consulte ",(0,l.kt)("a",{parentName:"p",href:"#propriedades-customiz%C3%A1veis"},"propriedades customiz\xe1veis do bot\xe3o"),"."),(0,l.kt)("h3",{id:"live-demo"},"Live Demo"),(0,l.kt)("iframe",{src:"https://codesandbox.io/embed/ani-button-ofjep?fontsize=14&hidenavigation=1&theme=dark",style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"ani-button",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.kt)("p",null,"Para saber a lista de propriedades e eventos, acesse o ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-button--sample"},"guia de referencia de API"),"."),(0,l.kt)("p",null,"Link \xfateis:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://angular.io/guide/elements"},"Angular elements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pt-br.reactjs.org/docs/web-components.html"},"Usando Web Components no React")))),(0,l.kt)(y,{value:"custom-properies",mdxType:"TabItem"},(0,l.kt)("h2",{id:"propriedades-customiz\xe1veis"},"Propriedades customiz\xe1veis"),(0,l.kt)("p",null,"O bot\xe3o possui propriedades customiz\xe1veis que podem variar de acordo com o tema selecionado. As propriedades customiz\xe1veis podem ser alteradas para cada produto, de acordo com os tokens de marca e tokens globais. Com isso, garantimos uma consist\xeancia no Design System, sem perder a identidade de cada marca."),(0,l.kt)("h3",{id:"button"},"Button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,l.kt)("th",{parentName:"tr",align:null},"Contexto"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--font-family")),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--text-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--font-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line-height")),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--spacing-squish")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")))),(0,l.kt)("h3",{id:"propriedades-customiz\xe1veis-em-cada-estado"},"Propriedades customiz\xe1veis em cada estado"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Estado"),(0,l.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,l.kt)("th",{parentName:"tr",align:null},"Contexto"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hover"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-hover")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--outline-color-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Outline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pressed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-pressed")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pressed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--outline-color-pressed")),(0,l.kt)("td",{parentName:"tr",align:null},"Outline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--text-color-disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focusable disabled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--outline-color-disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Outline")))))))}P.isMDXComponent=!0}}]);