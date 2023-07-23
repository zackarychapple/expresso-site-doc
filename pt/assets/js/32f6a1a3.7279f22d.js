"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[239],{3905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>v});var r=a(7294);function s(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){s(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,r,s=function(e,o){if(null==e)return{};var a,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||(s[a]=e[a]);return s}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),d=function(e){var o=r.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):n(n({},o),e)),a},p=function(e){var o=d(e.components);return r.createElement(c.Provider,{value:o},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var a=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=s,v=u["".concat(c,".").concat(m)]||u[m]||l[m]||t;return a?r.createElement(v,n(n({ref:o},p),{},{components:a})):r.createElement(v,n({ref:o},p))}));function v(e,o){var a=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var t=a.length,n=new Array(t);n[0]=m;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[u]="string"==typeof e?e:s,n[1]=i;for(var d=2;d<t;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3183:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=a(7462),s=(a(7294),a(3905));const t={sidebar_position:6},n="Casos de Uso",i={unversionedId:"overview/usecase",id:"overview/usecase",title:"Casos de Uso",description:"Do ponto de vista da UML, os casos de uso fornecem uma maneira de modelar as intera\xe7\xf5es entre usu\xe1rios, outros sistemas e um aplicativo de software. Um caso de uso descreve um cen\xe1rio espec\xedfico ou fluxo de eventos entre os atores e o sistema, levando a um determinado resultado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/overview/usecase.md",sourceDirName:"overview",slug:"/overview/usecase",permalink:"/pt/docs/overview/usecase",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Controladores",permalink:"/pt/docs/overview/controller"},next:{title:"Provedores",permalink:"/pt/docs/overview/providers"}},c={},d=[{value:"N\xf3s recomendamos",id:"n\xf3s-recomendamos",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Explica\xe7\xe3o",id:"explica\xe7\xe3o",level:2},{value:"Inje\xe7\xe3o de construtor",id:"inje\xe7\xe3o-de-construtor",level:3},{value:"Apoie o projeto",id:"apoie-o-projeto",level:2}],p={toc:d},u="wrapper";function l(e){let{components:o,...t}=e;return(0,s.kt)(u,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"casos-de-uso"},"Casos de Uso"),(0,s.kt)("p",null,"Do ponto de vista da UML, os casos de uso fornecem uma maneira de modelar as intera\xe7\xf5es entre usu\xe1rios, outros sistemas e um aplicativo de software. Um caso de uso descreve um cen\xe1rio espec\xedfico ou fluxo de eventos entre os atores e o sistema, levando a um determinado resultado. "),(0,s.kt)("p",null,"No contexto do ExpressoTS, os casos de uso servem para representar a l\xf3gica de neg\xf3cios da aplica\xe7\xe3o, permitindo uma clara separa\xe7\xe3o entre o controlador e a execu\xe7\xe3o da solicita\xe7\xe3o."),(0,s.kt)("h2",{id:"n\xf3s-recomendamos"},"N\xf3s recomendamos"),(0,s.kt)("p",null,"Apesar de voc\xea poder usar qualquer padr\xe3o de design que desejar como ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/pt/docs/overview/controller#a-mvc-approach"},"MVC")),", no template opinativo do ExpressoTS refor\xe7amos o uso da ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Arquitetura Limpa"))," e ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://medium.com/backticks-tildes/the-s-o-l-i-d-princ%C3%ADpios-em-imagens-b34ce2f1e898"},"princ\xedpios SOLID")),". Acreditamos que essa abordagem ajudar\xe1 voc\xea a criar um aplicativo mais sustent\xe1vel e escal\xe1vel."),(0,s.kt)("p",null,"\xc9 uma pr\xe1tica recomendada ter um caso de uso por controlador, sendo o controlador respons\xe1vel por chamar o caso de uso correspondente que ir\xe1 implementar a l\xf3gica de neg\xf3cios da solicita\xe7\xe3o. A carga \xfatil da solicita\xe7\xe3o, tamb\xe9m conhecida como DTO de solicita\xe7\xe3o no ExpressoTS, cont\xe9m as informa\xe7\xf5es necess\xe1rias para executar o caso de uso."),(0,s.kt)("p",null,'Um caso de uso no ExpressoTS cont\xe9m apenas a l\xf3gica de neg\xf3cios da aplica\xe7\xe3o, mantendo-a separada da l\xf3gica do controlador. \xc9 comum ter DTOs de resposta como parte do caso de uso, definindo o formato de resposta da solicita\xe7\xe3o. O caso de uso normalmente cont\xe9m uma \xfanica fun\xe7\xe3o chamada "execute", respons\xe1vel por executar a l\xf3gica desse caso de uso espec\xedfico.'),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Vale ressaltar que ter v\xe1rios casos de uso implementados em uma \xfanica classe viola o princ\xedpio da responsabilidade \xfanica e deve ser evitado.")),(0,s.kt)("h2",{id:"exemplo"},"Exemplo"),(0,s.kt)("p",null,"Aqui est\xe1 um exemplo de diagrama de casos de uso para um projeto x:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Projeto X Diagrama de Caso de Uso",src:a(3174).Z,width:"750",height:"428"})),(0,s.kt)("p",null,"Na diagrama de caso de uso acima, o ator representa o usu\xe1rio interagindo com o sistema. Para executar o caso de uso de login, o usu\xe1rio deve fornecer informa\xe7\xf5es espec\xedficas conhecidas como payload ou, no caso do ExpressoTS, o DTO de solicita\xe7\xe3o. Essas informa\xe7\xf5es s\xe3o necess\xe1rias para acionar o caso de uso e para o sistema fornecer o resultado desejado."),(0,s.kt)("p",null,"\xc9 importante observar que o caso de uso deve conter exclusivamente a l\xf3gica de neg\xf3cios da aplica\xe7\xe3o, sem funcionalidades adicionais ou n\xe3o relacionadas. Essa abordagem ajuda a garantir uma clara separa\xe7\xe3o de preocupa\xe7\xf5es, promovendo a manutenibilidade e escalabilidade do sistema."),(0,s.kt)("p",null,"Aqui est\xe1 nossa implementa\xe7\xe3o simples do caso de uso no ExpressoTS:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide(LoginUserUseCase)\nclass LoginUserUseCase {\n\n  execute(payload: ILoginUserRequestDTO): boolean {\n    const { email, password } = payload;\n    \n    if (isAuthenticated(email, password)) {\n      return true;\n    }\n    \n    return false;\n  }\n}\n\nexport { LoginUserUseCase };\n")),(0,s.kt)("h2",{id:"explica\xe7\xe3o"},"Explica\xe7\xe3o"),(0,s.kt)("p",null,"A implementa\xe7\xe3o de casos de uso no ExpressoTS segue as melhores pr\xe1ticas de design de software, em que cada caso de uso \xe9 respons\xe1vel por implementar uma l\xf3gica de neg\xf3cios espec\xedfica. Como mostrado no exemplo de c\xf3digo, um caso de uso geralmente cont\xe9m apenas uma fun\xe7\xe3o, chamada execute, que \xe9 respons\xe1vel por executar a l\xf3gica de neg\xf3cios definida naquele caso de uso. O caso de uso tamb\xe9m pode incluir um DTO de resposta que define o formato da resposta para aquele caso de uso espec\xedfico."),(0,s.kt)("p",null,"Al\xe9m disso, \xe9 comum usar construtores nos casos de uso para injetar depend\xeancias, como provedores e reposit\xf3rios. Isso permite uma melhor modularidade e testabilidade do c\xf3digo."),(0,s.kt)("h3",{id:"inje\xe7\xe3o-de-construtor"},"Inje\xe7\xe3o de construtor"),(0,s.kt)("p",null,"Com o sistema ExpressoTS ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/pt/docs/overview/di"},"Dependency Injection"))," podemos usar o construtor nos casos de uso para injetar depend\xeancias, como provedores, reposit\xf3rios, entidades ou qualquer outra classe auxiliar necess\xe1ria para entregar a resposta do caso de uso. Isso permite uma melhor modularidade e testabilidade do c\xf3digo."),(0,s.kt)("p",null,"Aqui est\xe1 um exemplo de um caso de uso com inje\xe7\xe3o de construtor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class ExampleUseCase {\n  \n  constructor(\n    private yourInjection1: Injection1, \n    private yourInjection2: Injection2\n  ) {}  \n  \n  execute() {\n    this.yourInjection1.foo();\n    this.yourInjection2.bar();\n  }\n}\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\xc9 importante aderir ao princ\xedpio da responsabilidade \xfanica ao implementar casos de uso. Cada caso de uso deve lidar apenas com uma l\xf3gica de neg\xf3cios espec\xedfica, e se voc\xea se encontrar implementando v\xe1rios casos de uso em uma \xfanica classe, \xe9 hora de revisar sua implementa\xe7\xe3o para garantir que cada caso de uso tenha uma responsabilidade clara e concisa.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"apoie-o-projeto"},"Apoie o projeto"),(0,s.kt)("p",null,"ExpressoTS \xe9 um projeto de c\xf3digo aberto licenciado sob o MIT. \xc9 um projeto independente com desenvolvimento cont\xednuo possibilitado gra\xe7as ao seu suporte. Se voc\xea deseja ajudar, por favor considere:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Se tornar um ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,s.kt)("li",{parentName:"ul"},"Siga a ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organiza\xe7\xe3o"))," no GitHub e de um Star \u2b50 no projeto"),(0,s.kt)("li",{parentName:"ul"},"Subscreva no nosso canal na Twitch: ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,s.kt)("li",{parentName:"ul"},"Entre no nosso ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,s.kt)("li",{parentName:"ul"},"Contribua submetendo ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues e pull requests"))),(0,s.kt)("li",{parentName:"ul"},"Compartilhe o projeto com seus amigos e colegas")))}l.isMDXComponent=!0},3174:(e,o,a)=>{a.d(o,{Z:()=>r});const r=a.p+"assets/images/use-case-project-x-d20e76cb969011bd096d033e582bf2ff.png"}}]);