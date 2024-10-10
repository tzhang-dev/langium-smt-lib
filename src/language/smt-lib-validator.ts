import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { SmtLibAstType } from './generated/ast.js';
import type { SmtLibServices } from './smt-lib-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: SmtLibServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.SmtLibValidator;
    const checks: ValidationChecks<SmtLibAstType> = {
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class SmtLibValidator {

    checkPersonStartsWithCapital(accept: ValidationAcceptor): void {
    }

}
