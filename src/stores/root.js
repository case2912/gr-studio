import vuex from "vuex";
import vue from "vue";
vue.use(vuex);
const store = new vuex.Store({
    state: {
        uniforms: {}
    },
    mutations: {
        setUniforms(state, uniforms) {
            state.uniforms = uniforms;
        },
        setMaterialAttribute(state, info) {
            const name = info.name;
            const value = info.value;
            if(state.uniforms[name] === void 0){
              throw new Error("non registered variable");
            }
            state.uniforms[name].value = value;
            $$("render-quad").setAttribute(name,value);
        }
    }
});

export default store;
