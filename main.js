(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"},t={profilePopupSelector:".popup_content_edit-profile",profileForm:document.querySelector(".form[name = edit-profile-form]"),userNameInput:document.querySelector(".form__input[name = name]"),userAboutInput:document.querySelector(".form__input[name = about]")},n={popupSelector:".popup_content_avatar",form:document.querySelector(".form[name = avatar-form]"),urlInput:document.querySelector(".form__input[name = avatar]")},r={newCardPopupSelector:".popup_content_new-card",newCardForm:document.querySelector(".form[name = add-card-form]")},o=document.querySelector(".profile__avatar-button"),i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e,t){"prepend"===t?this._container.prepend(e):this._container.append(e)}}])&&a(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleOnClick",(function(){var e={caption:o._name,alt:o._name,link:o._image};o._onClick(e)})),s(this,"_handleLikeCard",(function(){o._onLike();o._likeButton.classList.toggle("like__button_active"),o._isLiked=!o._isLiked})),s(this,"_handleRemoveCard",(function(){o._onDelete()})),s(this,"_setEventListeners",(function(){var e=o._element.querySelector(".element__remove-button");o._isOwner?e.addEventListener("click",o._handleRemoveCard):e.remove(),o._likeButton.addEventListener("click",o._handleLikeCard),o._elementImage.addEventListener("click",o._handleOnClick)})),s(this,"_getTemplate",(function(){return document.querySelector(o._cardSelector).content.querySelector(".elements__list-item").cloneNode(!0)})),s(this,"generateCard",(function(){return o._element=o._getTemplate(),o._likeButton=o._element.querySelector(".like__button"),o._elementImage=o._element.querySelector(".element__image"),o._elementImage.src=o._image,o._elementImage.alt=o._name,o._element.querySelector(".element__title").textContent=o._name,o._likeCounter=o._element.querySelector(".like__counter"),o.setLikes(o._likes),o._checkIsLiked(),o._isLiked&&o._likeButton.classList.add("like__button_active"),o._setEventListeners(),o._element})),this._name=t.name,this._image=t.link,this._cardSelector=n,this._onClick=r.viewImage,this._onDelete=r.confirmDelete,this._onLike=r.likeHandler,this._likes=t.likes,this._isLiked=!1,this._isOwner=!1,this._currentUser=null,this._ownerId=t.owner._id}var t,n;return t=e,(n=[{key:"_checkIsLiked",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._currentUser){this._isLiked=!0;break}}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"setCurrentUser",value:function(e){this._currentUser=e,e===this._ownerId&&(this._isOwner=!0)}},{key:"liked",get:function(){return this._isLiked}},{key:"setLikes",value:function(e){this._likeCounter.textContent=e.length}}])&&l(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this._popup=document.querySelector(t),this._openedClass="popup_opened",this._closeButton=this._popup.querySelector(".popup__close"),this._onEsc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._onEsc),this._popup.classList.add(this._openedClass)}},{key:"close",value:function(){document.removeEventListener("keydown",this._onEsc),this._popup.classList.remove(this._openedClass)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",this._handleOverlayClose.bind(this))}}])&&p(t.prototype,n),e}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e.imagePopupSelector))._image=t._popup.querySelector(e.imageSelector),t._caption=t._popup.querySelector(e.captionSelector),t}return t=u,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.alt,this._caption.textContent=e.caption,m(b(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),u}(h);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,t);var n,r,o,i,u=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(i){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(t,n){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=u.call(this,t);var o=e.formSelector;return r._form=r._popup.querySelector(o),r._submitButton=r._popup.querySelector(e.submitButtonSelector),r._submitButtonText=r._submitButton.textContent,r._onSubmit=n,r._inputs={},r}return n=a,(r=[{key:"close",value:function(){w(L(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=!0===e?"Сохранение...":this._submitButtonText}},{key:"_getInputValues",value:function(){var t=this,n=e.inputSelector;return this._form.querySelectorAll(n).forEach((function(e){t._inputs[e.name]=e.value})),this._inputs}},{key:"setEventListeners",value:function(){var e=this;w(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._onSubmit(e._getInputValues())}))}}])&&S(n.prototype,r),a}(h);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.nameSelector),this._about=document.querySelector(t.aboutSelector),this._avatar=document.querySelector(t.avatarSelector)}var t,n;return t=e,(n=[{key:"getId",value:function(){return this._id}},{key:"setUserInfo",value:function(e){this._id=e._id,this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.alt=e.name}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"getAvatar",value:function(){return this._avatar.src}}])&&I(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._inputList.forEach((function(e){i._hideInputError(e)})),i._toggleButtonState()},(r="clearInputErrors")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&j(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_request",value:function(e){return fetch(this._baseUrl+e.path,{method:e.method,headers:this._headers,body:e.body}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status,": ").concat(e.message))}))}},{key:"getUser",value:function(){return this._request({method:"GET",path:"users/me"})}},{key:"getInitialCards",value:function(){return this._request({method:"GET",path:"cards"})}},{key:"updateUser",value:function(e){return this._request({method:"PATCH",path:"users/me",body:JSON.stringify(e)})}},{key:"createCard",value:function(e){return this._request({method:"POST",path:"cards",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._request({method:"DELETE",path:"cards/".concat(e)})}},{key:"likeCard",value:function(e){return this._request({method:"PUT",path:"cards/likes/".concat(e)})}},{key:"unlikeCard",value:function(e){return this._request({method:"DELETE",path:"cards/likes/".concat(e)})}},{key:"changeAvatar",value:function(e){return this._request({method:"PATCH",path:"users/me/avatar",body:JSON.stringify(e)})}}])&&B(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-25/",headers:{authorization:"04f57d96-9414-4d3f-8e70-9d8b878ddf47","Content-Type":"application/json"}});function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"open",value:function(){x(V(u.prototype),"open",this).call(this),this._popup.addEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){x(V(u.prototype),"close",this).call(this),this._popup.removeEventListener("submit",this._handleSubmit)}}])&&A(t.prototype,n),u}(h);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=new q(e,t.profileForm);H.enableValidation();var J=new q(e,n.form);J.enableValidation();var G=new q(e,r.newCardForm);function M(e,t){var n=new f(e,K,{viewImage:function(e){return W.open(e)},confirmDelete:function(){Z.setSubmitAction((function(t){t.preventDefault(),R.deleteCard(e._id).then((function(){n.remove(),Z.close()})).catch((function(e){return console.error(e)}))})),Z.open()},likeHandler:function(){n.liked?R.unlikeCard(e._id).then((function(e){n.setLikes(e.likes)})).catch((function(e){return console.error(e)})):R.likeCard(e._id).then((function(e){n.setLikes(e.likes)})).catch((function(e){return console.error(e)}))}});return n.setCurrentUser(t),n}G.enableValidation();var z,$=new P({nameSelector:".profile__title",aboutSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),K="#card-element";Promise.all([R.getUser(),R.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(o),$.setAvatar(o),(z=new c({items:i,renderer:function(e){var t=M(e,$.getId()).generateCard();z.addItem(t)}},".elements__list")).renderItems()})).catch((function(e){return console.error(e)}));var Q=new O(t.profilePopupSelector,(function(e){Q.renderLoading(!0),R.updateUser(e).then((function(e){$.setUserInfo(e),Q.close(),Q.renderLoading(!1)})).catch((function(e){return console.error(e)}))}));Q.setEventListeners();var W=new k({imagePopupSelector:".popup_content_place-image",imageSelector:".view-fullscreen__image",captionSelector:".view-fullscreen__caption"});W.setEventListeners();var X=new O(n.popupSelector,(function(e){X.renderLoading(!0),R.changeAvatar(e).then((function(e){$.setAvatar(e),X.close(),X.renderLoading(!1)})).catch((function(e){return console.error(e)}))}));X.setEventListeners(),i.addEventListener("click",(function(){var e=$.getUserInfo(),n=e.name,r=e.about,o=t.userAboutInput;t.userNameInput.value=n,o.value=r,H.clearInputErrors(),Q.open()})),o.addEventListener("click",(function(){n.urlInput.value="",J.clearInputErrors(),X.open()}));var Y=new O(r.newCardPopupSelector,(function(e){Y.renderLoading(!0),R.createCard(e).then((function(e){return M(e,$.getId())})).then((function(e){z.addItem(e.generateCard(),"prepend"),Y.close(),Y.renderLoading(!1)})).catch((function(e){return console.error(e)}))}));Y.setEventListeners(),u.addEventListener("click",(function(){G.clearInputErrors(),Y.open()}));var Z=new N(".popup_content_confirmation");Z.setEventListeners()})();