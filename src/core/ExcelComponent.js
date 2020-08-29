import {DOMListener} from './DOMListener'


export class ExcelComponent extends DOMListener {
    constructor($root, option = {}) {
        super($root, option.listeners)
        this.name = option.name || 0
    }

    // returns component's template
    toHTML() {
        return ''
    }


    init() {
        this.initDOMListeners()
    }


    destroy() {
        this.removeDOMListeners()
    }
}
