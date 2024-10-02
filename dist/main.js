(()=>{"use strict";var t={365:(t,e,r)=>{r.d(e,{A:()=>a});var n=r(601),o=r.n(n),s=r(314),i=r.n(s)()(o());i.push([t.id,"body {\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  --gray-border-color: #868686;\n  --gray-color: rgb(168, 168, 168);\n}\n\nh1,\nh3 {\n  text-align: center;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.playground {\n  display: flex;\n  gap: 20px;\n}\n\n.player-gameboard,\n.player-2-gameboard {\n  width: 380px;\n  height: 380px;\n  border: 3px solid rgb(27, 27, 27);\n}\n\n.row {\n  display: flex;\n}\n\n.field {\n  width: 38px;\n  height: 38px;\n  box-shadow: inset 0px 0px 1px 1px var(--gray-border-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ship {\n  background: rgb(50, 139, 255);\n}\n\n.water {\n  background: white;\n}\n\n.hit {\n  background: rgb(255, 73, 73);\n}\n\n.miss {\n  background: var(--gray-color);\n}\n\n.collision {\n  background: var(--gray-color);\n}\n\n.player-2-gameboard .field:not(.hit):hover {\n  cursor: pointer;\n  transition: 0.1s;\n  background: var(--gray-color);\n}\n\n.btns {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  justify-content: center;\n  margin-top: 40px;\n}\n\nbutton {\n  padding: 15px;\n  background: rgb(167, 167, 167);\n  border: 0;\n  border-radius: 10px;\n  color: white;\n}\n\nbutton:hover {\n  transition: 0.1s;\n  scale: 1.02;\n  background: rgb(138, 138, 138);\n  cursor: pointer;\n}\n\nbutton:disabled {\n  background: rgb(255, 137, 137);\n}\n\nbutton:disabled:hover {\n  cursor: not-allowed;\n}\n\n.winner {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  font-size: 20px;\n}",""]);const a=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var h=0;h<t.length;h++){var l=[].concat(t[h]);n&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var s={},i=[],a=0;a<t.length;a++){var c=t[a],h=n.base?c[0]+n.base:c[0],l=s[h]||0,d="".concat(h," ").concat(l);s[h]=l+1;var u=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=o(p,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var s=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=r(s[i]);e[a].references--}for(var c=n(t,o),h=0;h<s.length;h++){var l=r(s[h]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=c}}},659:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,r),s.exports}function n(t){return t<10&&t>=0?0:t>=10&&+String(t)[0]}function o(t){return t<10?t:+String(t)[1]}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0;class s{constructor(){this.board=this.generateBoard(),this.ships=[]}placeShip(t){if(this.checkCollisions(t))return!1;for(let e=0;e<t.length;e++)this.board[t.getRow(t.coords[e])][t.getPos(t.coords[e])]=t.id;for(let e=0;e<t.borders.length;e++)this.board[t.getRow(t.borders[e])][t.getPos(t.borders[e])]="x";return this.ships.push(t),!0}checkCollisions(t){for(let e=0;e<t.coords.length;e++){let r=this.board[t.getRow(t.coords[e])][t.getPos(t.coords[e])];if("number"==typeof r||"x"==r)return!0}for(let e=0;e<t.borders.length;e++)if("number"==typeof this.board[t.getRow(t.borders[e])][t.getPos(t.borders[e])])return!0}receiveAttack(t){return"O"!=this.board[n(t)][o(t)]&&(this.ships.forEach((e=>{e.id==this.board[n(t)][o(t)]&&(e.hit(),e.hitCoords.push(t),e.isSunk()&&e.borders.forEach((t=>{this.board[n(t)][o(t)]="O"})))})),this.board[n(t)][o(t)]="O",!0)}generateBoard(){let t=[];for(let e=0;e<10;e++){let e=[];for(let t=0;t<10;t++)e.push("*");t.push(e)}return t}clear(){this.ships=[],this.board=this.generateBoard()}showBoard(t){for(let e of t)console.log(e.join(" "))}}class i{constructor(){}createInitBoard(t,e){let r,n=document.querySelector(".player-gameboard");"computer"==e&&(n=document.querySelector(".player-2-gameboard"),r="c"),"player"==e&&(r="f");for(let t=0;t<10;t++){let e=document.createElement("div");e.classList.add("row"),e.id=`row${t}`;for(let n=0;n<10;n++){let o=document.createElement("div");o.classList.add("field"),o.id=`${r}${t}${n}`,e.appendChild(o)}n.appendChild(e)}}updateBoard(t,e){let r;"computer"==e&&(r="c"),"player"==e&&(r="f"),this.clear(t,e),t.board.forEach((n=>{for(let o=0;o<n.length;o++){let s=document.querySelector(`#${r}${t.board.indexOf(n)}${o}`);"O"==n[o]&&s.classList.add("miss"),"player"==e&&"number"==typeof n[o]&&s.classList.add("ship")}})),t.ships.forEach((t=>{t.hitCoords&&t.hitCoords.forEach((t=>{let e=document.querySelector(`#${r}${n(t)}${o(t)}`);e.classList.add("hit"),e.classList.contains("miss")&&e.classList.remove("miss")}))}))}clear(t,e){let r;"computer"==e&&(r="c"),"player"==e&&(r="f"),t.board.forEach((e=>{for(let n=0;n<e.length;n++){let o=document.querySelector(`#${r}${t.board.indexOf(e)}${n}`);o.classList.contains("ship")&&o.classList.remove("ship"),o.classList.contains("hit")&&o.classList.remove("hit"),o.classList.contains("miss")&&o.classList.remove("miss")}}))}}class a{static instanceCount=0;constructor(t,e,r){this.id=++a.instanceCount,this.align=r,this.length=t,this.hits=0,this.coords=this.getCoords(e,r),this.borders=this.getBorders(this.coords),this.hitCoords=[]}getCoords(t,e){if(1==this.length)return[t];if("horizontal"==e){if(!this._checkLengthHorizontal(t))return!1;let e=[];for(let r=0;r<this.length;r++)e.push(t+r);return e}if("vertical"==e){if(!this._checkLengthVertical(t))return!1;let e=[];e.push(t);for(let r=1;r<this.length;r++)e.push(t+10*r);return e}}changeDirection(){if(this.coords[0]+1==this.coords[1]){if(!this._checkLengthVertical(this.coords[0]))return null;let t=[],e=this.coords[0];this.coords=[],t.push(e);for(let r=1;r<this.length;r++)t.push(e+10*r);this.coords=t,this.align="vertical",this.borders=this.getBorders(this.coords)}else{if(!this._checkLengthHorizontal(this.coords[0]))return null;let t=this.coords[0];this.align="horizontal",this.coords=this.getCoords(t),this.borders=this.getBorders(this.coords)}}getRow(t){return t<10&&t>=0?0:t>=10&&+String(t)[0]}getPos(t){return t<10?t:+String(t)[1]}getBorders(t){let e=[];if(t[0]==t[1]-1||1==t.length){for(let r=0;r<t.length;r++)e.push(t[r]-10),e.push(t[r]+10);return this.getRow(t[0]-1)==this.getRow(t[0])&&e.push(t[0]-1),this.getRow(t[0]-1-10)==this.getRow(t[0]-10)&&0!=this.getRow(t[0]-1-10)&&e.push(t[0]-1-10),this.getRow(t[0]-1+10)==this.getRow(t[0]+10)&&e.push(t[0]-1+10),this.getRow(t[t.length-1]+1)==this.getRow(t[t.length-1])&&e.push(t[t.length-1]+1),this.getRow(t[t.length-1]+1+10)==this.getRow(t[t.length-1]+10)&&e.push(t[t.length-1]+1+10),this.getRow(t[t.length-1]+1-10)==this.getRow(t[t.length-1]-10)&&e.push(t[t.length-1]+1-10),e.filter((t=>t>=0&&t<100))}for(let r=0;r<t.length;r++)this.getRow(t[r]-1)==this.getRow(t[r])&&e.push(t[r]-1),this.getRow(t[r]+1)==this.getRow(t[r])&&e.push(t[r]+1);return this.getRow(t[0]-10-1)==this.getRow(t[0]-10)&&e.push(t[0]-10-1),e.push(t[0]-10),this.getRow(t[0]-10+1)==this.getRow(t[0]-10)&&e.push(t[0]-10+1),this.getRow(t[t.length-1]+10-1)==this.getRow(t[t.length-1]+10)&&e.push(t[t.length-1]+10-1),e.push(t[t.length-1]+10),this.getRow(t[t.length-1]+10+1)==this.getRow(t[t.length-1]+10)&&e.push(t[t.length-1]+10+1),e.filter((t=>t>=0&&t<100))}hit(){this.hits+=1}isSunk(){return this.length==this.hits}_checkLengthHorizontal(t){return"vertical"==this.position?this._checkLengthVertical:t%10==0||1==this.length||!(t+this.length>10*this.getRow(t)+10)}_checkLengthVertical(t){return"horizontal"==this.position?this._checkLengthHorizontal:t%10==0||1==this.length||!(this.getRow(t)+this.length>10)}}function c(t){[5,4,3,3,2,2,1,1,1].forEach((e=>{let r=Math.floor(10*Math.random())<5?"horizontal":"vertical";t.placeShip(new a(e,function(t,e,r){let n,o=!1;for(;!o;)n=Math.floor(100*Math.random()),new a(e,n,r).coords&&t.placeShip(new a(e,n,r))&&n&&(o=!0);return n}(t,e,r),r))}))}class h{constructor(t){this.gameboard=t,this.attackQueue=[]}randomAttack(t){if(0!=this.attackQueue.length&&this.attackQueue)return void t.receiveAttack(this.attackQueue.shift());let e;for(;;)if(e=Math.round(100*Math.random()),"O"!=t.board[n(e)][o(e)]){if("number"==typeof t.board[n(e)][o(e)]){this.attackQueue=this.checkNextAttacks(t,e);break}break}t.receiveAttack(e)}checkNextAttacks(t,e,r={},s=[]){if("number"!=typeof e||e<0||e>=100)return;if(r[e])return;r[e]=!0;const i=t.board[n(e)][o(e)];return"x"!=i&&"O"!=i?("number"==typeof i&&s.push(e),e%10!=9&&this.checkNextAttacks(t,e+1,r,s),e%10!=0&&this.checkNextAttacks(t,e-1,r,s),e-10>=0&&this.checkNextAttacks(t,e-10,r,s),e+10<100&&this.checkNextAttacks(t,e+10,r,s),s):void 0}}var l=r(72),d=r.n(l),u=r(825),p=r.n(u),g=r(659),f=r.n(g),m=r(56),b=r.n(m),v=r(540),y=r.n(v),w=r(113),k=r.n(w),x=r(365),R={};R.styleTagTransform=k(),R.setAttributes=b(),R.insert=f().bind(null,"head"),R.domAPI=p(),R.insertStyleElement=y(),d()(x.A,R),x.A&&x.A.locals&&x.A.locals;let L=new i,S=new class{constructor(){}playRound(t,e,r){let s=new i,a=0,c=0;if("O"!=e.gameboard.board[n(+r.target.id.slice(1))][o(+r.target.id.slice(1))])return e.gameboard.receiveAttack(+r.target.id.slice(1)),s.updateBoard(e.gameboard,"computer"),e.randomAttack(t.gameboard),s.updateBoard(t.gameboard,"player"),e.gameboard.ships.forEach((t=>{t.isSunk()&&c++})),t.gameboard.ships.forEach((t=>{t.isSunk()&&a++})),a!=t.gameboard.ships.length&&(c==e.gameboard.ships.length||void 0)}stopGame(t,e,r){t.clear(),c(t),r.updateBoard(t,"player"),e.clear(),c(e),r.updateBoard(e,"computer"),location.reload()}},E=new s,C=new s,A=new h(E),B=new h(C),M=document.querySelector("#random"),N=document.querySelector("#reset"),O=document.querySelector("#start");M.addEventListener("click",(()=>{E.clear(),c(E),L.updateBoard(E,"player")})),N.addEventListener("click",(()=>{S.stopGame(E,C,L)})),O.addEventListener("click",(()=>{let t=document.querySelector(".player-2-gameboard");function e(){t.childNodes.forEach((t=>{t.childNodes.forEach((t=>{t.removeEventListener("click",r)}))}))}function r(t){let r=document.querySelector(".winner"),n=S.playRound(A,B,t);0==n&&(r.textContent="Computer win! Reset?",e()),1==n&&(r.textContent="Player win! Reset?",e())}t.childNodes.forEach((t=>{t.childNodes.forEach((t=>{t.addEventListener("click",r)}))})),O.disabled=!0,M.disabled=!0,N.disabled=!1})),c(C),c(E),L.createInitBoard(E,"player"),L.createInitBoard(C,"computer"),L.updateBoard(E,"player"),L.updateBoard(C,"computer")})();