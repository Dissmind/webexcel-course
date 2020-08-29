import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHTML() {
        return template()
    }
}


function template() {
    return `
        <input type="text" class="input" value="Новая таблица" placeholder="Введите название" />
    
        <div>
            <div class="button"><i class="material-icons">exit_to_app</i></div>
            <div class="button"><i class="material-icons">delete</i></div>
        </div>
    `
}
