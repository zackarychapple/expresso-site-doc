"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[225],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>v});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(o),m=a,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return o?r.createElement(v,i(i({ref:t},d),{},{components:o})):r.createElement(v,i({ref:t},d))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7139:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:1},i="Validator de ambiente",p={unversionedId:"providers/envvalidator",id:"providers/envvalidator",title:"Validator de ambiente",description:"O provedor de valida\xe7\xe3o de ambiente \xe9 um provedor que o ExpressoTS oferece por padr\xe3o. Ele \xe9 usado para validar a exist\xeancia do arquivo .env e seu conte\xfado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/providers/envvalidator.md",sourceDirName:"providers",slug:"/providers/envvalidator",permalink:"/pt/docs/providers/envvalidator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/pt/docs/category/providers"},next:{title:"Prisma provedor",permalink:"/pt/docs/providers/prisma"}},s={},l=[{value:"Apoie o projeto",id:"apoie-o-projeto",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validator-de-ambiente"},"Validator de ambiente"),(0,a.kt)("p",null,"O provedor de valida\xe7\xe3o de ambiente \xe9 um provedor que o ExpressoTS oferece por padr\xe3o. Ele \xe9 usado para validar a exist\xeancia do arquivo ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," e seu conte\xfado.\nEle ajuda o desenvolvedor a evitar erros em tempo de execu\xe7\xe3o causados por vari\xe1veis de ambiente ausentes."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Ele est\xe1 incluso apenas no modelo opinativo ou quando voc\xea cria uma classe que estende a classe ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),".")),(0,a.kt)("p",null,"Voc\xea pode encontr\xe1-lo na pasta ",(0,a.kt)("inlineCode",{parentName:"p"},"src/providers/application")," no modelo opinativo."),(0,a.kt)("p",null,"O ",(0,a.kt)("inlineCode",{parentName:"p"},"application.provider")," \xe9 o provedor principal do aplicativo respons\xe1vel por controlar o  ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/pt/docs/overview/application#application-lifecycle-hooks"},"Application Lifecycle")),"."),(0,a.kt)("p",null,"Dentro da classe Application voc\xea pode encontrar tr\xeas m\xe9todos que s\xe3o chamados na seguinte ordem:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configureServices()")," : Configura servi\xe7os que devem ser inicializados antes do in\xedcio do servidor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postServerInitialization()")," : Configura servi\xe7os que devem ser executados ap\xf3s o in\xedcio do servidor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serverShutdown()")," : Realiza a\xe7\xf5es ou limpezas ap\xf3s o desligamento do servidor.")),(0,a.kt)("p",null,"O provedor de valida\xe7\xe3o de ambiente \xe9 chamado no m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"configureServices()"),", prevenindo que o aplicativo inicie se o arquivo ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," estiver faltando ou se tiver vari\xe1veis de ambiente ausentes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"protected configureServices(): void {\n    Environments.checkAll();\n}\n")),(0,a.kt)("p",null,"O provedor de valida\xe7\xe3o de ambiente tamb\xe9m tem um m\xe9todo chamado ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," que retorna o valor de uma vari\xe1vel de ambiente. Ele \xe9 usado para obter um valor espec\xedfico de vari\xe1vel de ambiente passando seu nome como par\xe2metro."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'Environments.get("PORT");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"apoie-o-projeto"},"Apoie o projeto"),(0,a.kt)("p",null,"ExpressoTS \xe9 um projeto de c\xf3digo aberto licenciado sob o MIT. \xc9 um projeto independente com desenvolvimento cont\xednuo possibilitado gra\xe7as ao seu suporte. Se voc\xea deseja ajudar, por favor considere:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Se tornar um ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,a.kt)("li",{parentName:"ul"},"Siga a ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organiza\xe7\xe3o"))," no GitHub e de um Star \u2b50 no projeto"),(0,a.kt)("li",{parentName:"ul"},"Subscreva no nosso canal na Twitch: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,a.kt)("li",{parentName:"ul"},"Entre no nosso ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,a.kt)("li",{parentName:"ul"},"Contribua submetendo ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues e pull requests"))),(0,a.kt)("li",{parentName:"ul"},"Compartilhe o projeto com seus amigos e colegas")))}u.isMDXComponent=!0}}]);