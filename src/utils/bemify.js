class Bemifier {
  constructor(block, module) {
    this.block = block;
    this.module = module;

    this.main = this.main.bind(this);
  }

  main(...args) {
    let element;
    let modifiers;
    if (args.length === 1) {
      const arg = args[0];
      if (typeof arg === 'string') {
        element = arg;
      } else if (typeof arg === 'object') {
        modifiers = arg;
      }
    } else if (args.length === 2) {
      [element, modifiers] = args;
    } else if (args.length > 2) {
      throw `Unexpected number of arguments: ${args.length}`;
    }

    const elem = element === undefined ? this.block : `${this.block}__${element}`;
    let styles = this.module[elem];
    if (modifiers === undefined) {
      return styles;
    }

    const self = this;
    Object.keys(modifiers).forEach(function(key) {
      if (Object.prototype.hasOwnProperty.call(modifiers, key) && modifiers[key]) {
        styles += ' ';
        styles += self.module[`${elem}_${key}`];
      }
    });
    return styles;
  }
}

/* Supported formats:
  - b()                     -> 'button'
  - b('elem')               -> 'button__elem'
  - b('elem', {dark: true}) -> 'button__elem_dark'
  - b({dark: true})         -> 'button_dark'
 */
export default function bemify(block, module) {
  const bem = new Bemifier(block, module);
  return bem.main;
}
