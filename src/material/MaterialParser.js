const gl = WebGLRenderingContext;
const typeNumbers = {
    vec2: gl.FLOAT_VEC2,
    vec3: gl.FLOAT_VEC3,
    vec4: gl.FLOAT_VEC4,
    ivec2: gl.INT_VEC2,
    ivec3: gl.INT_VEC3,
    ivec4: gl.INT_VEC4,
    bvec2: gl.BOOL_VEC2,
    bvec3: gl.BOOL_VEC3,
    bvec4: gl.BOOL_VEC4,
    float: gl.FLOAT,
    int: gl.INT,
    bool: gl.BOOL,
    sampler2D: gl.SAMPLER_2D,
    samplerCube: gl.SAMPLER_CUBE,
    mat4: gl.FLOAT_MAT4,
    mat3: gl.FLOAT_MAT3,
    mat2: gl.FLOAT_MAT2
};
export default class MaterialParser {
    static getUniformVariables(material) {
        const uniforms = {};
        MaterialParser.forEachPass(material,(pass) => {
            for (let variableName in pass.uniforms) {
                const variable = pass.uniforms[variableName];
                if (variable.semantic === "USER_VALUE") {
                    uniforms[variableName] = MaterialParser.fromUniformVariable(pass.uniforms[variableName]);
                }
            }
        });
        return uniforms;
    }

    static getMacroVariables(material) {
        const macros = {};
        MaterialParser.forEachPass(material,(pass) => {
            for (let variableName in pass.macros) {
                const variable = pass.macros[variableName];
                macros[variableName] = {
                  name:variableName,
                  type:variable.type
                };
            }
        });
        return macros;
    }

    static fromUniformVariable(variable) {
        return {
            attributes: variable.attributes,
            type: MaterialParser.toTypeString(variable),
            name: variable.name
        };
    }

    static toTypeString(variable) {
        const isArray = !!variable.isArray;
        if (!isArray) {
            return MaterialParser.fromTypeNumber(variable.type);
        } else {
            throw new Error("Array variable is not supported!");
            return `${MaterialParser.fromTypeNumber(variable.type)}[]`;
        }
    }

    static forEachPass(material, func) {
        for (let techniqueKey in material.techniqueRecipes) {
            const technique = material.techniqueRecipes[techniqueKey];
            for (let pass of technique.passes) {
                func(pass, technique);
            }
        }
    }

    static fromTypeNumber(typeNumber) {
        for (let key in typeNumbers) {
            if (typeNumbers[key] === typeNumber) {
                return key;
            }
        }
    }
}
