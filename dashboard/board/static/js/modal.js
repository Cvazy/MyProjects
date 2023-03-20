class HystModal {
    constructor(props) {
        let defaultConfig = {
            linkAttributeName: 'data-modal-window',
        }
        this.config = Object.assign(defaultConfig, props);
        this.init();
    }

    static _shadow = false;

    init() {
        this.isOpened = false;
        this.openedWindow = false;
        this.starter = false;
        this._nextWindows = false;
        this._scrollPosition = 0;

        if (!HystModal._shadow) {
            HystModal._shadow = document.createElement('div');
            HystModal._shadow.classList.add('window-shadow');
            document.body.appendChild(HystModal._shadow);
        }

        this.eventsFeeler();
    }

    eventsFeeler() {
        document.addEventListener("click", function (e) {
            const clickedlink = e.target.closest("[" + this.config.linkAttributeName + "]");

            if (clickedlink) {
                e.preventDefault();
                this.starter = clickedlink;
                let targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
                this._nextWindows = document.querySelector(targetSelector);
                this.open();
                return;
            }

            if (e.target.closest('[data-modal-close]')) {
                this.close();
            }
        }.bind(this));

        window.addEventListener("keydown", function (e) {
            if (e.which === 27 && this.isOpened) {
                e.preventDefault();
                this.close();
                return;
            }

            if (e.which === 9 && this.isOpened) {
                this.focusCatcher(e);
            }
        }.bind(this));
    }

    open(selector) {
        this.openedWindow = this._nextWindows;
        this._bodyScrollControl();
        HystModal._shadow.classList.add("window-shadow-show");
        this.openedWindow.classList.add("window-active");
        this.openedWindow.setAttribute('aria-hidden', 'false');
        this.isOpened = true;
    }

    close() {
        if (!this.isOpened) {
            return;
        }

        this.openedWindow.classList.remove("window-active");
        HystModal._shadow.classList.remove("window-shadow-show");
        this.openedWindow.setAttribute('aria-hidden', 'true');
        this._bodyScrollControl();
        this.isOpened = false;
    }

    _bodyScrollControl() {
        let html = document.documentElement;

        if (this.isOpened === true) {
            html.classList.remove("window-opened");
            html.style.marginRight = "";
            window.scrollTo(0, this._scrollPosition);
            html.style.top = "";
            return;
        }

        this._scrollPosition = window.pageYOffset;
        html.style.top = -this._scrollPosition + "px";
        html.classList.add("window-opened");
    }
}

const ModalWindow = new HystModal(
    linkAttributeName = 'data-modal-window'
);