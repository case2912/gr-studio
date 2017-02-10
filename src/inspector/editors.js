import Float from "./editors/float.vue";
import FloatRange from "./editors/range.vue";
import Color3 from "./editors/color3.vue";
import Color4 from "./editors/color4.vue";
export default function(attribute) {
    switch (attribute.type) {
        case "float":
        if(typeof attribute.attributes["range"] === "string"){
          return FloatRange;
        }else{
          return Float;
        }
        case "vec3":
            if (attribute.attributes["type"] === "color") {
                return Color3;
            } else {

            }
        case "vec4":
            if (attribute.attributes["type"] === "color") {
                return Color4;
            } else {

            }
        default:
            throw new Error("unsupported");
    }
}
