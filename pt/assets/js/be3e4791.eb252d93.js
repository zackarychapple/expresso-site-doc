"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var s=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=s.createContext({}),c=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return r?s.createElement(f,n(n({ref:t},p),{},{components:r})):s.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<a;c++)n[c]=r[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(7462),o=(r(7294),r(3905));const a={sidebar_position:13},n="C\xf3digo de Status",i={unversionedId:"overview/status-code",id:"overview/status-code",title:"C\xf3digo de Status",description:"O c\xf3digo de status \xe9 uma forma de representar o resultado de uma requisi\xe7\xe3o. Essas respostas HTTP indicam se uma solicita\xe7\xe3o HTTP espec\xedfica foi conclu\xedda com \xeaxito. As respostas s\xe3o agrupadas em cinco classes:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/overview/status-code.md",sourceDirName:"overview",slug:"/overview/status-code",permalink:"/pt/docs/overview/status-code",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Depend\xeancias",permalink:"/pt/docs/overview/dependencies"},next:{title:"Gerenciamento de Error",permalink:"/pt/docs/overview/error-handling"}},u={},c=[{value:"ExpressoTS c\xf3digo de status",id:"expressots-c\xf3digo-de-status",level:2},{value:"Em uma controladora",id:"em-uma-controladora",level:3},{value:"Em um caso de uso",id:"em-um-caso-de-uso",level:3},{value:"Apoie o projeto",id:"apoie-o-projeto",level:2}],p={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c\xf3digo-de-status"},"C\xf3digo de Status"),(0,o.kt)("p",null,"O c\xf3digo de status \xe9 uma forma de representar o resultado de uma requisi\xe7\xe3o. Essas respostas HTTP indicam se uma solicita\xe7\xe3o HTTP espec\xedfica foi conclu\xedda com \xeaxito. As respostas s\xe3o agrupadas em cinco classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Respostas informativas (100-199)"),(0,o.kt)("li",{parentName:"ul"},"Respostas bem-sucedidas (200-299)"),(0,o.kt)("li",{parentName:"ul"},"Mensagens de redirecionamento (300-399)"),(0,o.kt)("li",{parentName:"ul"},"Respostas de erro do cliente (400-499)"),(0,o.kt)("li",{parentName:"ul"},"Respostas de erro do servidor (500-599)")),(0,o.kt)("p",null,"Voc\xea encontra aqui mais detalhes sobre os c\xf3digos de status ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"MDN Web Docs")),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Os c\xf3digos de status aqui mostrados est\xe3o definidos na ",(0,o.kt)("a",{parentName:"p",href:"https://httpwg.org/specs/rfc9110.html#overview.of.status.codes"},"RFC 9110"))),(0,o.kt)("h2",{id:"expressots-c\xf3digo-de-status"},"ExpressoTS c\xf3digo de status"),(0,o.kt)("p",null,"Em ExpressoTS, temos uma lista de todos os c\xf3digos de status listados na MDN que voc\xea pode usar em sua aplica\xe7\xe3o. Aqui est\xe1 um exemplo de uso:"),(0,o.kt)("h3",{id:"em-uma-controladora"},"Em uma controladora"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { StatusCode } from "@expressots/core";\n\n@controller("/user/create")\nclass CreateUserController extends BaseController {\n    constructor(private createUserUseCase: CreateUserUseCase) {\n        super("create-user-controller");\n    }\n\n    @httpPost("/")\n    execute(\n        @requestBody() data: ICreateUserRequestDTO,\n        @response() res: any,\n    ): ICreateUserResponseDTO {\n        return this.callUseCase(\n            this.createUserUseCase.execute(data),\n            res,\n            StatusCode.Created, // Status code\n        );\n    }\n}\n')),(0,o.kt)("h3",{id:"em-um-caso-de-uso"},"Em um caso de uso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { StatusCode } from "@expressots/core";\n\n@provide(CreateUserUseCase)\nclass CreateUserUseCase {\n    constructor(private userRepository: UserRepository) {}\n\n    execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO | null {\n        try {\n            const { name, email } = data;\n\n            const user: User | null = this.userRepository.create(\n                new User(name, email),\n            );\n\n            if (!user) {\n                Report.Error(\n                    new AppError(\n                        StatusCode.BadRequest, // Status code\n                        "User already exists",\n                        "create-user-usecase",\n                    ),\n                );\n            }\n\n            let response: ICreateUserResponseDTO;\n\n            if (user !== null) {\n                response = {\n                    id: user.Id,\n                    name: user.name,\n                    email: user.email,\n                    status: "success",\n                };\n                return response;\n            }\n\n            return null;\n        } catch (error: any) {\n            throw error;\n        }\n    }\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"apoie-o-projeto"},"Apoie o projeto"),(0,o.kt)("p",null,"ExpressoTS \xe9 um projeto de c\xf3digo aberto licenciado sob o MIT. \xc9 um projeto independente com desenvolvimento cont\xednuo possibilitado gra\xe7as ao seu suporte. Se voc\xea deseja ajudar, por favor considere:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se tornar um ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/expressots"},"Sponsor no GitHub"))),(0,o.kt)("li",{parentName:"ul"},"Siga a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/expressots"},"organiza\xe7\xe3o"))," no GitHub e de um Star \u2b50 no projeto"),(0,o.kt)("li",{parentName:"ul"},"Subscreva no nosso canal na Twitch: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.twitch.tv/richardzampieri"},"Richard Zampieri"))),(0,o.kt)("li",{parentName:"ul"},"Entre no nosso ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/invite/PyPJfGK"},"Discord"))),(0,o.kt)("li",{parentName:"ul"},"Contribua submetendo ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/expressots/expressots/issues/new/choose"},"issues e pull requests"))),(0,o.kt)("li",{parentName:"ul"},"Compartilhe o projeto com seus amigos e colegas")))}d.isMDXComponent=!0}}]);