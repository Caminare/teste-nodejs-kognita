import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';


const IsValidCNPJ = (property: string, validationOptions?: ValidationOptions) => {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidCNPJ',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          let cnpj = value.replace(/[^\d]+/g, '');

          if (cnpj.length !== 14) return false;

          if (/^(\d)\1+$/.test(cnpj)) return false;

          let t = cnpj.length - 2,
            d = cnpj.substring(t),
            d1 = parseInt(d.charAt(0)),
            d2 = parseInt(d.charAt(1)),
            calc = x => {
              let n = cnpj.substring(0, x),
                y = x - 7,
                s = 0,
                r = 0;

              for (let i = x; i >= 1; i--) {
                s += parseInt(n.charAt(x - i)) * y--;
                if (y < 2) y = 9;
              }

              r = 11 - (s % 11);
              return r > 9 ? 0 : r;
            };

          return calc(t) === d1 && calc(t + 1) === d2;
        },
      },
    });
  };
};

export {
  IsValidCNPJ
};
