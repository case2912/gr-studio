import gr from 'grimoirejs';
import MaterialFactory from "grimoirejs-fundamental/ref/Material/MaterialFactory";
import txt from '../index.sort';
import uuid from 'node-uuid';
import ace from 'brace';
import {
    watch
} from 'watchjs';
// require('brace/theme/monokai');
require('./monokai');

var obj = {
    text: txt
}

var editor = ace.edit('javascript-editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setValue(txt);
setInterval(() => {
    obj.text = editor.getValue();
}, 3000);
watch(obj, "text", () => {
    const id = uuid.v4();
    MaterialFactory.addSORTMaterial(id, obj.text);
    gr("#main")("render-quad").setAttribute('material', 'new(' + id + ')');
});