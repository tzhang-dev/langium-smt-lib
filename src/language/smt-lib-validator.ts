import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { SmtLibAstType, Person } from './generated/ast.js';
import type { SmtLibServices } from './smt-lib-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: SmtLibServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.SmtLibValidator;
    const checks: ValidationChecks<SmtLibAstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class SmtLibValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
