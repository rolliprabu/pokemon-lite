(this["webpackJsonppokemon-lite"]=this["webpackJsonppokemon-lite"]||[]).push([[0],{92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a,c,s,o=n(2),r=n(38),i=n.n(r),l=n(124),j=n(125),d=n(123),m=n(36),b=n(16),O=n(39),h=n(126),x=n(127),u=n(107),p=n(101),g=n(102),f=n(103),v=n(104),k=n(105),N=n(106),C=n(4),y=function(e){var t=Object(b.g)(),n=function(e){t.push({pathname:"/detail",state:{pokemon:e}})};return e.data.map((function(t,a){var c=0;return e.ownPokemon&&(c=e.ownPokemon[t.name]?e.ownPokemon[t.name].length:0),Object(C.jsx)(p.a,{xs:"6",sm:"4",md:"3",lg:"2",children:Object(C.jsxs)(g.a,{className:"Card-Pokemon",children:[Object(C.jsx)(f.a,{top:!0,width:"100%",src:t.image,alt:t.name+".png",onClick:function(){return n(t.name)}}),Object(C.jsxs)(v.a,{onClick:function(){return n(t.name)},children:[Object(C.jsx)(k.a,{tag:"h5",children:t.name}),Object(C.jsxs)(N.a,{children:["You own: ",c]})]}),e.showName&&e.ownPokemon[t.name].map((function(n,a){return Object(C.jsxs)("div",{onClick:function(){return e.releasePokemon(t.name,n)},className:"d-flex justify-content-between mb-1 mx-2 border-bottom",children:[Object(C.jsxs)("div",{children:['- "',n.length>10?n.substring(0,10)+"...":n,'"']}),Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{className:"Card-Menu-Dot",children:"\xa0\u2807"})})]},"mypoke_"+a)})),Object(C.jsx)("div",{className:"mb-3"})]})},"poke_"+a)}))},S=Object(h.a)(a||(a=Object(O.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"]))),P={limit:151,offset:0},w=function(){var e=Object(x.a)(S,{variables:P}),t=e.loading,n=e.error,a=e.data;if(t)return Object(C.jsx)("p",{children:"Loading..."});if(n)return Object(C.jsx)("p",{children:"Error :("});var c=a.pokemons.results,s=JSON.parse(localStorage.getItem("PokemonData"));s=s||!1;for(var o=[],r=0;r<c.length;r++){var i=c[r].name;!!s[i]&&s[i].length>0&&o.push(c[r])}return Object(C.jsx)("div",{className:"Home-Container",children:Object(C.jsx)(u.a,{className:"Home-Card-Row",children:Object(C.jsx)(y,{data:c,ownPokemon:s})})})},D=n(27),I=n(128),M=n(108),_=n(109),$=n(110),J=n(111),F=Object(h.a)(c||(c=Object(O.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"]))),B={limit:151,offset:0},E=function(){var e=JSON.parse(localStorage.getItem("PokemonData"));e=e||!1;var t=Object(o.useState)(!1),n=Object(D.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(["",""]),r=Object(D.a)(s,2),i=r[0],l=r[1],j=Object(o.useState)(e),d=Object(D.a)(j,2),m=d[0],b=d[1],O=function(){return c(!a)},h=Object(x.a)(F,{variables:B}),p=h.loading,g=h.error,f=h.data;if(p)return Object(C.jsx)("p",{children:"Loading..."});if(g)return Object(C.jsx)("p",{children:"Error :("});for(var v=f.pokemons.results,k=[],N=0;N<v.length;N++){var S=v[N].name;!!m[S]&&m[S].length>0&&k.push(v[N])}return Object(C.jsxs)("div",{className:"Home-Container",children:[Object(C.jsx)("h2",{children:"My Pokemon"}),m?Object(C.jsx)(u.a,{className:"Home-Card-Row",children:Object(C.jsx)(y,{data:k,ownPokemon:m,showName:!0,releasePokemon:function(e,t){l([e,t]),O()}})}):Object(C.jsx)("i",{children:"You dont have any pokemon at the moment, go catch some"}),Object(C.jsxs)(I.a,{isOpen:a,toggle:O,backdrop:"static",children:[Object(C.jsx)(M.a,{children:"Release"}),Object(C.jsx)(_.a,{children:Object(C.jsxs)("p",{children:["You are about to release ",Object(C.jsx)("b",{children:i[1]}),", Proceed?"]})}),Object(C.jsxs)($.a,{children:[Object(C.jsx)(J.a,{color:"danger",onClick:function(){var e=i[0],t=i[1],n=JSON.parse(JSON.stringify(m));n[e]=n[e].filter((function(e){return e!==t})),0==n[e].length&&delete n[e],0==Object.keys(n).length?(localStorage.removeItem("PokemonData"),b(!1)):(localStorage.setItem("PokemonData",JSON.stringify(n)),b(n)),O()},children:"Release"}),Object(C.jsx)(J.a,{color:"primary",onClick:O,children:"Cancel"})]})]})]})},L=n(68),R=n(112),T=Object(h.a)(s||(s=Object(O.a)(["\n    query pokemon($name: String!) {\n        pokemon(name: $name) {\n            id\n            name\n            sprites {\n                front_default\n            }\n            moves {\n                move {\n                    name\n                }\n            }\n            types {\n                type {\n                    name\n                }\n            }\n        }\n    }\n"]))),q=function(e){var t={name:e.pokemonName},n=Object(x.a)(T,{variables:t}),a=n.loading,c=n.error,s=n.data;if(a)return Object(C.jsx)("p",{children:"Loading..."});if(c)return Object(C.jsx)("p",{children:"Error :("});var o=s.pokemon;return Object(C.jsxs)(u.a,{className:"Detail-Info",children:[Object(C.jsxs)(p.a,{xs:"12",sm:"4",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:o.sprites.front_default,alt:"poke_img.png"})}),Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(J.a,{color:"success",onClick:function(){return function(t){var n=Math.random()<.5;e.setCaughtPokemon(t),n?e.toggleModalCatch():e.toggleModalFailed()}(o.name)},children:"Catch this pokemon!"})})]}),Object(C.jsx)(p.a,{xs:"12",sm:"8",children:Object(C.jsxs)("div",{className:"Detail-Info-Box",children:[Object(C.jsx)(u.a,{children:Object(C.jsx)("b",{children:o.name})}),Object(C.jsx)(u.a,{className:"mb-2",children:o.types.map((function(e,t){return Object(C.jsx)(p.a,{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{className:"align-middle Detail-Type-Box "+e.type.name,children:e.type.name})},"poke_type_"+t)}))}),Object(C.jsx)(u.a,{children:Object(C.jsx)("div",{className:"Detail-Table-Move",children:Object(C.jsxs)(R.a,{striped:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsx)("tr",{children:Object(C.jsx)("th",{colSpan:"2",children:"Move Set"})})}),Object(C.jsx)("tbody",{children:o.moves.map((function(e,t){if(0==t||t%2==0)return o.moves[t+1]?Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:o.moves[t].move.name}),Object(C.jsx)("td",{children:o.moves[t+1].move.name})]},"poke_move_"+t):Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:"2",children:o.moves[t].move.name})},"poke_move_"+t)}))})]})})})]})})]})},H=function(e){var t=Object(b.h)(),n=Object(o.useState)(!1),a=Object(D.a)(n,2),c=a[0],s=a[1],r=Object(o.useState)(!1),i=Object(D.a)(r,2),l=i[0],j=i[1],d=Object(o.useState)(""),m=Object(D.a)(d,2),O=m[0],h=m[1],x=Object(o.useState)(""),u=Object(D.a)(x,2),p=u[0],g=u[1],f=function(){return s(!c)},v=function(){return j(!l)};return t.state?Object(C.jsxs)("div",{className:"Detail-Container",children:[Object(C.jsx)("h2",{children:"Pokemon Detail"}),Object(C.jsx)(q,{pokemonName:t.state.pokemon,toggleModalCatch:f,toggleModalFailed:v,setCaughtPokemon:h}),Object(C.jsxs)(I.a,{isOpen:c,toggle:f,backdrop:"static",children:[Object(C.jsx)(M.a,{children:"SUCCESS"}),Object(C.jsxs)(_.a,{children:[Object(C.jsxs)("p",{children:["Congratulation, you catch ",Object(C.jsx)("b",{children:O})]}),Object(C.jsx)("p",{children:"Please give it a good name :)"}),Object(C.jsx)("input",{type:"text",value:p,onChange:function(e){return g(e.target.value)}})]}),Object(C.jsxs)($.a,{children:[Object(C.jsx)(J.a,{color:"primary",onClick:function(){var e=localStorage.getItem("PokemonData"),t={},n=!0;e?((t=JSON.parse(e))[O]||(t[O]=[]),Object.values(t).forEach((function(e){e.includes(p)&&(n=!1)})),t[O].push(p)):t=Object(L.a)({},O,[p]),n?(localStorage.setItem("PokemonData",JSON.stringify(t)),g(""),f()):alert("You already have a pokemon named: "+p+"\nPlease give it another name")},children:"Save"})," ",Object(C.jsx)(J.a,{color:"danger",onClick:f,children:"Release"})]})]}),Object(C.jsxs)(I.a,{isOpen:l,toggle:v,backdrop:"static",children:[Object(C.jsx)(M.a,{children:"Failed"}),Object(C.jsxs)(_.a,{children:[Object(C.jsxs)("p",{children:["Failed to catch ",Object(C.jsx)("b",{children:O})]}),Object(C.jsx)("p",{children:"Keep trying, dont give up!"})]}),Object(C.jsx)($.a,{children:Object(C.jsx)(J.a,{color:"primary",onClick:v,children:"Close"})})]})]}):(alert("No pokemon selected"),Object(C.jsx)(b.a,{to:"/"}))},Y=n(113),A=n(114),K=n(115),U=n(116),z=n(117),G=n(118),Q=n(119),V=n.p+"static/media/pokeball.de24102c.png",W=function(e){var t=Object(o.useState)(!1),n=Object(D.a)(t,2),a=n[0],c=n[1],s=function(){return c(!1)};return Object(C.jsx)("div",{children:Object(C.jsxs)(Y.a,{color:"secondary",light:!0,expand:"md",className:"Navbar-container",children:[Object(C.jsxs)(A.a,{href:"/",className:"d-flex flex-row",children:[Object(C.jsx)("img",{src:V,alt:"Pokemon",className:"App-Brand"}),Object(C.jsx)("div",{className:"App-Brand-Text align-middle h-100",children:"Pokemon"})]}),Object(C.jsx)(K.a,{onClick:function(){return c(!a)}}),Object(C.jsx)(U.a,{isOpen:a,navbar:!0,className:"d-sm-inline-flex flex-sm-row-reverse",children:Object(C.jsxs)(z.a,{className:"mr-auto",navbar:!0,children:[Object(C.jsx)(G.a,{children:Object(C.jsx)(Q.a,{tag:m.b,to:"/",onClick:s,className:"Navbar-text",children:"Pokemon List"})}),Object(C.jsx)(G.a,{children:Object(C.jsx)(Q.a,{tag:m.b,to:"/mypokemon",onClick:s,className:"Navbar-text",children:"My Pokemon"})})]})})]})})};n(92);var X=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(W,{}),Object(C.jsx)("div",{className:"Main-Container",children:Object(C.jsxs)(b.d,{children:[Object(C.jsx)(b.b,{path:"/detail",children:Object(C.jsx)(H,{})}),Object(C.jsx)(b.b,{path:"/mypokemon",children:Object(C.jsx)(E,{})}),Object(C.jsx)(b.b,{path:"/",children:Object(C.jsx)(w,{})})]})})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))},ee=(n(93),n(94),new l.a({uri:"https://graphql-pokeapi.graphcdn.app/",cache:new j.a}));i.a.render(Object(C.jsx)(d.a,{client:ee,children:Object(C.jsx)(X,{})}),document.getElementById("root")),Z()}},[[95,1,2]]]);
//# sourceMappingURL=main.bb2615b5.chunk.js.map