import Float from "./editors/float.vue";
import FloatRange from "./editors/range.vue";
import Color3 from "./editors/color3.vue";
import Color4 from "./editors/color4.vue";
import Unsupported from "./editors/unsupported.vue";
import Vector from "./editors/vector.vue"
import Sampler2D from "./editors/sampler2D.vue";
export default function(attribute) {
    switch (attribute.type) {
        case "float":
            if (typeof attribute.attributes["range"] === "string") {
                return FloatRange;
            } else {
                return Float;
            }
        case "vec3":
            if (attribute.attributes["type"] === "color") {
                return Color3;
            } else {
              return Vector;
            }
        case "vec4":
            if (attribute.attributes["type"] === "color") {
                return Color4;
            } else {
              return Vector;
            }
        case "vec2":
          return Vector;
        case "sampler2D":
          return Sampler2D;
    }
    return Unsupported;
}
