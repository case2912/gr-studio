import "./regenerator";
import "grimoirejs/register";
import "grimoirejs-math/register";
import "grimoirejs-fundamental/register";
import gr from 'grimoirejs';
import MaterialFactory from 'grimoirejs-fundamental/ref/Material/MaterialFactory';
import Parser from 'grimoirejs-fundamental/ref/Sort/Parser';
import Material from 'grimoirejs-fundamental/ref/Material/Material';
import text from '../index.sort';
import uuid from 'node-uuid';
import ace from 'brace';
import {
    watch
} from 'watchjs';
import 'brace/mode/glsl';
import './theme';

const render = () => {
    const sort = {
        text: text
    }
    const editor = ace.edit('sort-editor');
    editor.getSession().setMode('ace/mode/glsl');
    editor.setTheme('ace/theme/grimoire-sort');
    editor.setOptions({
        fontFamily: "Rounded Mplus 1c",
        fontSize: "13pt"
    });
    editor.getSession().setValue(sort.text);
    setInterval(() => {
        sort.text = editor.getValue();
    }, 3000);
    let lastId = 'initial-material';
    watch(sort, "text", async() => {
        const id = uuid.v4();
        // try {
        const obj = await Parser.parse(sort.text);
        const gl = gr("#main").rootNodes[0].companion.get('gl');
        const material = new Material(gl, obj);
        gr("#main")("render-quad").setAttribute('material', material);
        // } catch (e) {
        //     console.log(1);
        // } finally {}
    });
}
export default render;
