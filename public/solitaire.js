!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="./public/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o);new a["default"]({element:document.getElementById("container")})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),c=o(u),f=n(3),d=r(f),h=n(4),p=r(h),_=n(8),v=r(_),b=n(10),y=r(b),m=n(11),g=r(m);c.installMatches(),c.installClosest(),c.installCustomEvent();var w=function(e){function t(e){a(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n._el=e.element,n._createFoundations(),n._createPillPlaces(),n._stock=new p["default"]({element:n._el.querySelector('[data-component="stock"]')}),n._stock.createDeck(),n._createPills(),n._el.addEventListener("successDrop",n._changeAllowableCard.bind(n)),n._el.addEventListener("dblclick",n._sendCardToFoundation.bind(n)),n}return l(t,e),s(t,[{key:"_changeAllowableCard",value:function(e){var t=this._findDropTarget(e.detail.previousPlace);t&&(t.changeAllowableCards(),t.turnUpCard&&t.turnUpCard()),this._allFoundationsAreFulfilled()&&this._showVictoryNotification()}},{key:"_sendCardToFoundation",value:function(e){var t=e.target.closest("[data-draggable]");t&&!t.firstElementChild&&[].forEach.call(this._foundations,function(n){if(t.dragElement){var r=t.dragElement.onDragStart(e.pageX,e.pageY,e);n.dropTarget.onDragEnd(r)}})}},{key:"_createFoundations",value:function(){this._foundations=this._el.querySelectorAll('[data-component="foundation"]'),[].forEach.call(this._foundations,function(e){new v["default"]({element:e})})}},{key:"_createPillPlaces",value:function(){this._pillPlaces=this._el.querySelectorAll('[data-component="pill"]'),[].forEach.call(this._pillPlaces,function(e){new y["default"]({element:e})})}},{key:"_createPills",value:function(){for(var e=0;e<this._pillPlaces.length;e++)for(var t=0;e>=t;t++){for(var n=this._pillPlaces[e];n.lastElementChild;)n=n.lastElementChild;var r=this._stock.giveCard();n.appendChild(r),t===e&&(r.dragElement.turnUp(),this._pillPlaces[e].dropTarget.changeAllowableCards())}}},{key:"_allFoundationsAreFulfilled",value:function(){return[].every.call(this._foundations,function(e){return 13===e.children.length})}},{key:"_showVictoryNotification",value:function(){[].forEach.call(this._foundations,function(e){e.lastElementChild.dragElement=null}),new g["default"]({place:this._el,position:"centerUp",text:"Congratulations! You win!"})}}]),t}(d["default"]);t["default"]=w},function(e,t){"use strict";function n(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)}function r(){Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null})}function o(){try{new CustomEvent("IE has CustomEvent, but doesn't support constructor")}catch(e){window.CustomEvent=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},CustomEvent.prototype=Object.create(window.Event.prototype)}}Object.defineProperty(t,"__esModule",{value:!0}),t.installMatches=n,t.installClosest=r,t.installCustomEvent=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),document.addEventListener("dragstart",e._preventStartOfDefaultBrowserDnD),document.addEventListener("mousedown",this._onMouseDown.bind(this)),document.addEventListener("mousemove",this._onMouseMove.bind(this)),document.addEventListener("mouseup",this._onMouseUp.bind(this))}return r(e,[{key:"_onMouseDown",value:function(t){t.preventDefault(),1==t.which&&(this._dragElement=e._findDraggableElement(t),this._dragElement&&(this._downX=t.pageX,this._downY=t.pageY))}},{key:"_onMouseMove",value:function(e){if(e.preventDefault(),this._dragElement){if(!this._avatar){var t=e.pageX-this._downX,n=e.pageY-this._downY;if(Math.abs(t)<3&&Math.abs(n)<3)return;if(this._avatar=this._dragElement.onDragStart(this._downX,this._downY,e),!this._avatar)return void this._cleanUp()}this._avatar.onDragMove(e),this._dropTarget=this._findDropTarget(this._avatar.hoveredElement)}}},{key:"_onMouseUp",value:function(e){e.preventDefault(),1==e.which&&(this._avatar&&(this._dropTarget?this._dropTarget.onDragEnd(this._avatar,e):this._avatar.onDragCancel()),this._cleanUp())}},{key:"_findDropTarget",value:function(e){for(;e!==document&&!e.dropTarget;)e=e.parentNode;return e.dropTarget?e.dropTarget:null}},{key:"_cleanUp",value:function(){this._dragElement=this._avatar=this._dropTarget=null}}],[{key:"_preventStartOfDefaultBrowserDnD",value:function(e){e.preventDefault()}},{key:"_findDraggableElement",value:function(e){for(var t=e.target;t!=document&&!t.dragElement;)t=t.parentNode;return t.dragElement}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),l=r(i),s=4,u=13,c=function(){function e(t){o(this,e),this._el=t.element,this._stock=this._el.querySelector('[data-selector="stock"]'),this._cardPlace=this._el.querySelector('[data-selector="placeForOpenedCards"]'),this._stock.addEventListener("click",this._openCard.bind(this))}return a(e,[{key:"createDeck",value:function(){this._newDeck=[[],[],[],[]];for(var e=0;u*s>e;e++){var t=this._generateRandomCard();new l["default"]({suit:t.suit,cardNumber:t.cardNumber,parent:this._stock})}}},{key:"giveCard",value:function(){return this._stock.lastElementChild}},{key:"_openCard",value:function(){var e=this._stock.lastElementChild;e?(e.dragElement.turnUp(),this._cardPlace.appendChild(e)):this._returnCardsToStock()}},{key:"_returnCardsToStock",value:function(){for(var e=void 0;e=this._cardPlace.lastElementChild;)e.dragElement.turnDown(),this._stock.appendChild(e)}},{key:"_generateRandomCard",value:function(){var e=void 0,t=void 0;do e=Math.round(Math.random()*(s-1)),t=Math.round(Math.random()*(u-1));while(this._newDeck[e][t]);return this._newDeck[e][t]="C",{suit:e,cardNumber:t}}}]),e}();t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),u=r(s),c={cardWidth:90,cardHeight:132,offsetTop:1,offsetLeft:2,offsetBetweenCardsTop:2,offsetBetweenCardsLeft:2.2},f=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._suit=e.suit,n._cardNumber=e.cardNumber,n._applyStyleForNewCard(),e.parent.appendChild(n._el),n}return i(t,e),l(t,[{key:"turnDown",value:function(){this._el.dataset.draggable="",this._applyStyleForDownturnedCard()}},{key:"turnUp",value:function(){this._el.dataset.draggable=!0,this._applyStyleForUpturnedCard()}},{key:"_applyStyleForNewCard",value:function(){this._el.classList.add("card"),this._el.classList.add("downturned")}},{key:"_applyStyleForDownturnedCard",value:function(){this._el.style.backgroundPosition="",this._el.classList.add("downturned")}},{key:"_applyStyleForUpturnedCard",value:function(){this._el.classList.remove("downturned"),this._setBackgroundPosition()}},{key:"_setBackgroundPosition",value:function(){var e=-c.offsetTop-(c.cardHeight+c.offsetBetweenCardsTop)*this._suit,t=-c.offsetLeft-(c.cardWidth+c.offsetBetweenCardsLeft)*this._cardNumber;this._el.style.backgroundPosition=t+"px "+e+"px"}},{key:"card",get:function(){return t.DECK[this._suit][this._cardNumber]}},{key:"suit",get:function(){return this._suit}},{key:"cardNumber",get:function(){return this._cardNumber}}],[{key:"DECK",get:function(){return[["Ace of clubs","2 of clubs","3 of clubs","4 of clubs","5 of clubs","6 of clubs","7 of clubs","8 of clubs","9 of clubs","10 of clubs","Jack of clubs","Queen of clubs","King of clubs"],["Ace of diamonds","2 of diamonds","3 of diamonds","4 of diamonds","5 of diamonds","6 of diamonds","7 of diamonds","8 of diamonds","9 of diamonds","10 of diamonds","Jack of diamonds","Queen of diamonds","King of diamonds"],["Ace of hearts","2 of hearts","3 of hearts","4 of hearts","5 of hearts","6 of hearts","7 of hearts","8 of hearts","9 of hearts","10 of hearts","Jack of hearts","Queen of hearts","King of hearts"],["Ace of spades","2 of spades","3 of spades","4 of spades","5 of spades","6 of spades","7 of spades","8 of spades","9 of spades","10 of spades","Jack of spades","Queen of spades","King of spades"]]}}]),t}(u["default"]);t["default"]=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(7),l=r(i),s=function(){function e(t){o(this,e),this._el=document.createElement("div"),this._el.dragElement=this}return a(e,[{key:"_makeAvatar",value:function(){return new l["default"](this._el)}},{key:"onDragStart",value:function(e,t,n){var r=this._makeAvatar();return r.initFromEvent(e,t,n)?r:null}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this._el=t,this._old={parent:this._el.parentNode,nextSibling:this._el.nextSibling,position:this._el.position||"",left:this._el.left||"",top:this._el.top||"",zIndex:this._el.zIndex||""}}return r(e,[{key:"onDragMove",value:function(t){this._el.style.left=t.pageX-this._shiftX+"px",this._el.style.top=t.pageY-this._shiftY+"px",this._currentHoveredElement=e.getElementUnderAvatarCenter(this._el)}},{key:"onDragCancel",value:function(){this._old.parent.insertBefore(this._el,this._old.nextSibling),this._el.style.position=this._old.position,this._el.style.left=this._old.left,this._el.style.top=this._old.top,this._el.style.zIndex=this._old.zIndex}},{key:"onDragEnd",value:function(){}},{key:"initFromEvent",value:function(t,n,r){if(!r.target.dataset.draggable)return!1;var o=e.getCoords(this._el);return this._shiftX=t-o.left,this._shiftY=n-o.top,document.body.appendChild(this._el),this._el.style.zIndex=9999,this._el.style.position="absolute",!0}},{key:"getDragInfo",value:function(){return{elem:this._el,suit:this._el.dragElement.suit,cardNumber:this._el.dragElement.cardNumber,previousParent:this._old.parent}}},{key:"hoveredElement",get:function(){return this._currentHoveredElement}}],[{key:"getCoords",value:function(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset}}},{key:"getElementUnderAvatarCenter",value:function(e){var t=e.getBoundingClientRect();e.classList.add("js-hidden");var n=document.elementFromPoint(t.left+t.width/2,t.top+t.height/2);return e.classList.remove("js-hidden"),n&&n!==document||(n=document.body),n}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function d(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:d(o,t,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},u=n(9),c=r(u),f=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._allowableCards={suit:[0,1,2,3],cardNumber:[0]},n}return i(t,e),l(t,[{key:"changeAllowableCards",value:function(){var e=this._el.lastElementChild;e?(this._allowableCards.suit=[e.dragElement.suit],this._allowableCards.cardNumber=[e.dragElement.cardNumber+1]):this._allowableCards={suit:[0,1,2,3],cardNumber:[0]}}},{key:"_isAvatarAllowable",value:function(e){var t=this._allowableCards.suit.indexOf(e.suit)>-1,n=this._allowableCards.cardNumber.indexOf(e.cardNumber)>-1;return t&&n}},{key:"_takeAvatar",value:function(e){s(Object.getPrototypeOf(t.prototype),"_takeAvatar",this).call(this,e),e.elem.style.zIndex=this._el.children.length,this.changeAllowableCards()}}]),t}(c["default"]);t["default"]=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this._el=t.element,t.element.dropTarget=this}return r(e,[{key:"onDragEnd",value:function(e){var t=e.getDragInfo();this._isAvatarAllowable(t)?(this._takeAvatar(t),this._generateSuccessDrop(t)):e.onDragCancel()}},{key:"_isAvatarAllowable",value:function(e){return!0}},{key:"_takeAvatar",value:function(e){this._el.appendChild(e.elem),e.elem.style.position="absolute",e.elem.style.top=0,e.elem.style.left=0}},{key:"_generateSuccessDrop",value:function(e){var t=new CustomEvent("successDrop",{bubbles:!0,cancelable:!0,detail:{newParent:this._el,previousPlace:e.previousParent}});this._el.dispatchEvent(t)}}]),e}();t["default"]=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),u=r(s),c=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._allowableCards={suit:[0,1,2,3],cardNumber:[13]},n}return i(t,e),l(t,[{key:"changeAllowableCards",value:function(){var e=this._findLastElement();if(e!==this._el){switch(e.dragElement.suit){case 0:case 3:this._allowableCards.suit=[1,2];break;case 1:case 2:this._allowableCards.suit=[0,3]}this._allowableCards.cardNumber=[e.dragElement.cardNumber-1]}else this._allowableCards={suit:[0,1,2,3],cardNumber:[12]}}},{key:"turnUpCard",value:function(){var e=this._findLastElement();e.classList.contains("downturned")&&e.dragElement.turnUp()}},{key:"_isAvatarAllowable",value:function(e){var t=this._allowableCards.suit.indexOf(e.suit)>-1,n=this._allowableCards.cardNumber.indexOf(e.cardNumber)>-1;return t&&n}},{key:"_takeAvatar",value:function(e){var t=this._findLastElement();t.appendChild(e.elem),e.elem.style.position="absolute",e.elem.style.top=0,e.elem.style.left=0,e.elem.style.zIndex=this._el.children.length,this.changeAllowableCards()}},{key:"_findLastElement",value:function(){for(var e=this._el;e.lastElementChild;)e=e.lastElementChild;return e}}]),t}(u["default"]);t["default"]=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=10,a=10,i=function(){function e(t){n(this,e),this._el=document.createElement("div"),this._el.className="notification",this._el.innerHTML=t.text;var r=t.place||document.body;r.appendChild(this._el),this.positionAt(t)}return r(e,[{key:"positionAt",value:function(e){var t=void 0,n=void 0,r=void 0;if(t=e.anchor?e.anchor.getBoundingClientRect():this._el.parentNode.getBoundingClientRect(),e.position)switch(e.position){case"center":n=t.top+t.height/2-this._el.offsetHeight/2,r=t.left+t.width/2-this._el.offsetWidth/2;break;case"centerUp":n=t.top+t.height/4-this._el.offsetHeight/2,r=t.left+t.width/2-this._el.offsetWidth/2}else n=t.top+o,r=t.right-this._el.offsetWidth-a;this._el.style.top=n+"px",this._el.style.left=r+"px"}},{key:"show",value:function(){this._el.classList.remove("js-hidden")}},{key:"hide",value:function(){this._el.classList.add("js-hidden")}}]),e}();t["default"]=i}]);
//# sourceMappingURL=solitaire.js.map