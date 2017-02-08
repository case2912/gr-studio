import css from './theme.css';
ace.define("ace/theme/grimoire-sort", ["require", "exports", "module", "ace/lib/dom"], function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-grimoire-sort";
    exports.cssText = css;
    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});