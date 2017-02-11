import vuex from "vuex";
import vue from "vue";
vue.use(vuex);
const store = new vuex.Store({
    state: {
        uniforms: {},
        macros:{}
    },
    mutations: {
        setUniforms(state, uniforms) {
            state.uniforms = uniforms;
        },
        setMacros(state,macros){
          state.macros = macros;
        },
        setMaterialAttribute(state, info) {
            const name = info.name;
            const value = info.value;
            if(state.uniforms[name] === void 0 && state.macros[name] === void 0){
              throw new Error("non registered variable");
            }
            if(state.uniforms[name] !== void 0){
              state.uniforms[name].value = value;
            }else{
              state.macros[name].value = value;
            }
            $$("render-quad").setAttribute(name,value);
        }
    }
});

export default store;
