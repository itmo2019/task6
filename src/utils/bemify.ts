interface BemMods {
  [mod: string]: string | boolean | any
}

class Bemifier {
  static el: string = '__';
  static mod: string = '_';
  static modValue: string = '_';

  private block: string;
  private module: any;

  constructor(block: string, module: any) {
    this.block = block;
    this.module = module;

    this.main = this.main.bind(this);
  }

  static isString = (elemOrMods: string | BemMods): elemOrMods is string =>
    typeof elemOrMods === 'string';

  static isBemMods = (elemOrMods: string | BemMods): elemOrMods is BemMods =>
    typeof elemOrMods !== 'string';

  modToString (element: string, mods: BemMods): string {
    const modifiers = Object.keys(mods)
      .filter(key => mods[key]) // Don't add modifiers with falsy values
      .map(key => {
        const value = mods[key];

        let modifier: string;

        if (value === true) { // Modifier with only name
          modifier = element + Bemifier.mod + key;
        } else { // Modifier with name and value
          modifier =
            element +
            Bemifier.mod +
            key +
            Bemifier.modValue +
            value;
        }

        if (this.module.hasOwnProperty(modifier)) {
          return this.module[modifier];
        } else {
          return '';
          // throw new Error("Unexpected className: " + modifier);
        }
      }).filter(key => mods[key] !== '');
     return modifiers.join(' ');
  }

  main(...args: (string | BemMods)[]) {
    const elements = args
      .filter(Bemifier.isString)
      .reduce((acc, element) => acc + Bemifier.el + element, '');

    const element = this.block + elements;

    // if (!this.module.hasOwnProperty(element)) {
    //   throw new Error("Unexpected className: " + element);
    // }

    const modifiers = args
      .filter(Bemifier.isBemMods)
      .reduce((acc, modifier) => {
        return acc + ' ' + this.modToString(element, modifier);
      }, '');

    let styles = this.module[element];
    if (modifiers) {
      styles = styles + ' ' + modifiers;
    }

    return styles;
  }
}

/* Supported formats:
  - b()                     -> 'button'
  - b('elem')               -> 'button__elem'
  - b('elem', {dark: true}) -> 'button__elem_dark'
  - b({dark: true})         -> 'button_dark'
  - b({dark: 'true'})       -> 'button_dark_true'
 */
export default function bemify(block: string, module: any) {
  const bem: Bemifier = new Bemifier(block, module);
  return bem.main;
}
