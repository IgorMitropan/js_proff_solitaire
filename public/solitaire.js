!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="./public/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o);new a["default"]({element:document.getElementById("container")})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),l=r(u),c=n(3),f=r(c),d=n(7),h=r(d),p=n(9),_=r(p),v=n(4),b=(r(v),function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._el=e.element,n._createFoundations(),n._createPillPlaces(),n._stock=new f["default"]({element:n._el.querySelector('[data-component="stock"]')}),n._stock.createDeck(),n._createPills(),n._el.addEventListener("successDrop",n._changePossibleCard.bind(n)),n}return i(t,e),s(t,[{key:"_createFoundations",value:function(){var e=this._el.querySelectorAll('[data-component="foundation"]');[].forEach.call(e,function(e){new h["default"]({element:e})})}},{key:"_createPillPlaces",value:function(){var e=this._el.querySelectorAll('[data-component="pill"]');[].forEach.call(e,function(e){new _["default"]({element:e})})}},{key:"_createPills",value:function(){for(var e=this._el.querySelectorAll('[data-component="pill"]'),t=0;t<e.length;t++)for(var n=0;t>=n;n++){for(var r=e[t];r.lastElementChild;)r=r.lastElementChild;var o=this._stock.giveCard();r.appendChild(o),n===t&&(o.draggElement.turnUp(),e[t].dropTarget.changePossibleCards())}}},{key:"_changePossibleCard",value:function(e){var t=this._findDropTarget(e.detail.previousParent);t&&(t.changePossibleCards(),t.turnUpCard&&t.turnUpCard()),this._doesPlayerWin()}},{key:"_doesPlayerWin",value:function(){var e=this._el.querySelectorAll('[data-component="foundation"]'),t=[].every.call(e,function(e){return 13===e.children.length});t&&alert("Victory!!!! \nI have very less time to congratulate you better :(( \nBut I promise to do that")}}]),t}(l["default"]));t["default"]=b},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),document.addEventListener("dragstart",e._preventStartOfDefaultBrowserDnD),document.addEventListener("mousedown",this._onMouseDown.bind(this)),document.addEventListener("mousemove",this._onMouseMove.bind(this)),document.addEventListener("mouseup",this._onMouseUp.bind(this))}return r(e,[{key:"_onMouseDown",value:function(t){t.preventDefault(),1==t.which&&(this._dragElement=e._findDraggableElement(t),this._dragElement&&(this._downX=t.pageX,this._downY=t.pageY))}},{key:"_onMouseMove",value:function(e){if(e.preventDefault(),this._dragElement){if(!this._avatar){var t=e.pageX-this._downX,n=e.pageY-this._downY;if(Math.abs(t)<3&&Math.abs(n)<3)return;if(this._avatar=this._dragElement.onDragStart(this._downX,this._downY,e),!this._avatar)return void this._cleanUp()}this._avatar.onDragMove(e),this._dropTarget=this._findDropTarget(this._avatar.hoveredElement)}}},{key:"_onMouseUp",value:function(e){e.preventDefault(),1==e.which&&(this._avatar&&(this._dropTarget?this._dropTarget.onDragEnd(this._avatar,e):this._avatar.onDragCancel()),this._cleanUp())}},{key:"_findDropTarget",value:function(e){for(;e!==document&&!e.dropTarget;)e=e.parentNode;return e.dropTarget?e.dropTarget:null}},{key:"_cleanUp",value:function(){this._dragElement=this._avatar=this._dropTarget=null}}],[{key:"_preventStartOfDefaultBrowserDnD",value:function(e){e.preventDefault()}},{key:"_findDraggableElement",value:function(e){for(var t=e.target;t!=document&&!t.draggElement;)t=t.parentNode;return t.draggElement}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),s=r(i),u=4,l=13,c=function(){function e(t){o(this,e),this._el=t.element,this._stock=this._el.querySelector('[data-selector="stock"]'),this._cardPlace=this._el.querySelector('[data-selector="placeForOpenedCards"]'),this._stock.addEventListener("click",this._openCard.bind(this))}return a(e,[{key:"createDeck",value:function(){this._newDeck=[[],[],[],[]];for(var e=0;l*u>e;e++){var t=this.generateRandomCard();new s["default"]({suit:t.suit,cardNumber:t.cardNumber,parent:this._stock})}}},{key:"giveCard",value:function(){return this._stock.lastElementChild}},{key:"generateRandomCard",value:function(){var e=void 0,t=void 0;do e=Math.round(Math.random()*(u-1)),t=Math.round(Math.random()*(l-1));while(this._newDeck[e][t]);return this._newDeck[e][t]="C",{suit:e,cardNumber:t}}},{key:"_openCard",value:function(){var e=this._stock.lastElementChild;e?(e.draggElement.turnUp(),this._cardPlace.appendChild(e)):this._returnCardsToStock()}},{key:"_returnCardsToStock",value:function(){for(var e=void 0;e=this._cardPlace.lastElementChild;)e.draggElement.turnDown(),this._stock.appendChild(e)}}]),e}();t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),l=r(u),c={cardWidth:90,cardHeight:132,offsetTop:1,offsetLeft:2,offsetBetweenCardsTop:2,offsetBetweenCardsLeft:2.2},f=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._suit=e.suit,n._cardNumber=e.cardNumber,n._el.classList.add("card","downturned"),e.parent.appendChild(n._el),n}return i(t,e),s(t,[{key:"_setBackgroundPosition",value:function(){var e=-c.offsetTop-(c.cardHeight+c.offsetBetweenCardsTop)*this._suit,t=-c.offsetLeft-(c.cardWidth+c.offsetBetweenCardsLeft)*this._cardNumber;this._el.style.backgroundPositionY=e+"px",this._el.style.backgroundPositionX=t+"px"}},{key:"turnDown",value:function(){this._el.style.backgroundPositionY="",this._el.style.backgroundPositionX="",this._el.classList.add("downturned")}},{key:"turnUp",value:function(){this._el.classList.remove("downturned"),this._setBackgroundPosition()}},{key:"card",get:function(){return t.DECK[this._suit][this._cardNumber]}},{key:"suit",get:function(){return this._suit}},{key:"cardNumber",get:function(){return this._cardNumber}}],[{key:"DECK",get:function(){return[["Ace of clubs","2 of clubs","3 of clubs","4 of clubs","5 of clubs","6 of clubs","7 of clubs","8 of clubs","9 of clubs","10 of clubs","Jack of clubs","Queen of clubs","King of clubs"],["Ace of diamonds","2 of diamonds","3 of diamonds","4 of diamonds","5 of diamonds","6 of diamonds","7 of diamonds","8 of diamonds","9 of diamonds","10 of diamonds","Jack of diamonds","Queen of diamonds","King of diamonds"],["Ace of hearts","2 of hearts","3 of hearts","4 of hearts","5 of hearts","6 of hearts","7 of hearts","8 of hearts","9 of hearts","10 of hearts","Jack of hearts","Queen of hearts","King of hearts"],["Ace of spades","2 of spades","3 of spades","4 of spades","5 of spades","6 of spades","7 of spades","8 of spades","9 of spades","10 of spades","Jack of spades","Queen of spades","King of spades"]]}}]),t}(l["default"]);t["default"]=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),s=r(i),u=function(){function e(t){o(this,e),this._el=document.createElement("div"),this._el.draggElement=this}return a(e,[{key:"_makeAvatar",value:function(){return new s["default"](this._el)}},{key:"onDragStart",value:function(e,t,n){var r=this._makeAvatar();return r.initFromEvent(e,t,n)?r:null}}]),e}();t["default"]=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this._el=t,this._old={parent:this._el.parentNode,nextSibling:this._el.nextSibling,position:this._el.position||"",left:this._el.left||"",top:this._el.top||"",zIndex:this._el.zIndex||""}}return r(e,[{key:"initFromEvent",value:function(t,n,r){if(!r.target.classList.contains("card")||r.target.classList.contains("downturned"))return!1;var o=this._el=r.target,a=e.getCoords(this._el);return this._shiftX=t-a.left,this._shiftY=n-a.top,document.body.appendChild(o),o.style.zIndex=9999,o.style.position="absolute",!0}},{key:"getDragInfo",value:function(e){return{elem:this._el,suit:this._el.draggElement.suit,cardNumber:this._el.draggElement.cardNumber,previousParent:this._old.parent}}},{key:"onDragMove",value:function(t){this._el.style.left=t.pageX-this._shiftX+"px",this._el.style.top=t.pageY-this._shiftY+"px",this._currentHoveredElement=e.getElementUnderClientXY(this._el,t.clientX,t.clientY)}},{key:"onDragCancel",value:function(){this._old.parent.insertBefore(this._el,this._old.nextSibling),this._el.style.position=this._old.position,this._el.style.left=this._old.left,this._el.style.top=this._old.top,this._el.style.zIndex=this._old.zIndex}},{key:"onDragEnd",value:function(){}},{key:"hoveredElement",get:function(){return this._currentHoveredElement}}],[{key:"getCoords",value:function(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}}},{key:"getElementUnderClientXY",value:function(e,t,n){e.classList.add("js-hidden");var r=document.elementFromPoint(t,n);return e.classList.remove("js-hidden"),r&&r!==document||(r=document.body),r}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function d(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:d(o,t,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},l=n(8),c=r(l),f=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._possibleCards={suit:[0,1,2,3],cardNumber:[0]},n}return i(t,e),s(t,[{key:"_isAvatarPossible",value:function(e){var t=this._possibleCards.suit.indexOf(e.suit)>-1,n=this._possibleCards.cardNumber.indexOf(e.cardNumber)>-1;return t&&n}},{key:"_takeAvatar",value:function(e){u(Object.getPrototypeOf(t.prototype),"_takeAvatar",this).call(this,e),e.elem.style.zIndex=this._el.children.length,this.changePossibleCards()}},{key:"changePossibleCards",value:function(){var e=this._el.lastElementChild;e?(this._possibleCards.suit=[e.draggElement.suit],this._possibleCards.cardNumber=[e.draggElement.cardNumber+1]):this._possibleCards={suit:[0,1,2,3],cardNumber:[0]}}}]),t}(c["default"]);t["default"]=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this._el=t.element,t.element.dropTarget=this}return r(e,[{key:"onDragEnd",value:function(e,t){var n=e.getDragInfo(t);this._isAvatarPossible(n)?(this._takeAvatar(n),this._generateSuccessDrop(n)):e.onDragCancel(n)}},{key:"_isAvatarPossible",value:function(e){return!0}},{key:"_takeAvatar",value:function(e){this._el.appendChild(e.elem),e.elem.style.position="absolute",e.elem.style.top=0,e.elem.style.left=0}},{key:"_generateSuccessDrop",value:function(e){var t=new CustomEvent("successDrop",{bubbles:!0,cancelable:!0,detail:{suit:e.suit,cardNumber:e.cardNumber,newParent:this._el,previousParent:e.previousParent}});this._el.dispatchEvent(t)}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(8),l=r(u),c=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._possibleCards={suit:[0,1,2,3],cardNumber:[13]},n}return i(t,e),s(t,[{key:"changePossibleCards",value:function(){var e=this._findLastElement();if(e!==this._el){switch(e.draggElement.suit){case 0:case 3:this._possibleCards.suit=[1,2];break;case 1:case 2:this._possibleCards.suit=[0,3]}this._possibleCards.cardNumber=[e.draggElement.cardNumber-1]}else this._possibleCards={suit:[0,1,2,3],cardNumber:[12]}}},{key:"turnUpCard",value:function(e){var t=this._findLastElement();t.classList.contains("downturned")&&t.draggElement.turnUp()}},{key:"_isAvatarPossible",value:function(e){var t=this._possibleCards.suit.indexOf(e.suit)>-1,n=this._possibleCards.cardNumber.indexOf(e.cardNumber)>-1;return t&&n}},{key:"_takeAvatar",value:function(e){var t=this._findLastElement();t.appendChild(e.elem),e.elem.style.position="absolute",e.elem.style.top=0,e.elem.style.left=0,e.elem.style.zIndex=this._el.children.length,this.changePossibleCards()}},{key:"_findLastElement",value:function(){for(var e=this._el;e.lastElementChild;)e=e.lastElementChild;return e}}]),t}(l["default"]);t["default"]=c}]);
//# sourceMappingURL=solitaire.js.map