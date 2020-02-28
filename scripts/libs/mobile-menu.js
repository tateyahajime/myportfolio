class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn")
    this.DOM.cover = document.querySelector(".mobile-menu__cover")
    this.DOM.container = document.querySelector("#global-container")
    this.eventType = this._getEventType();
    this._addEvent();
  }
  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
    // this.eventType = window.ontouchstart ? "touchstart" : "click";
    //↑window.ontouchstartというプロパティーがあるかないかを判断してくれる。
    //スマホはontouchstartというプロパティーが最初から登録されているのでその時はtouchstartが適用される
    //PCでみられた時はclickに変わる
  }
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
   }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

