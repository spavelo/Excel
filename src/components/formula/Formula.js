import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click', 'mousemove']
        });
    }

    toHTML() {
        return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        </div>`
    }
    onInput(event) {
        console.log(this.$root)
        console.log('Formula: onInput', event.target.textContent.trim())
    }

    onClick() {
        console.log('mk')
    }

    onMousemove() {
        console.log('mousemove')
    }
}