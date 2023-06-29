import { RuleBehavior } from '../rule-behavior';

export interface Rule<TAttributes = any> {
  /**
   * Priority of the execution
   */
  priority: number;

  /**
   * Name of the application (or module)
   */
  applicationName: string;

  /**
   * Name of the feature (must be unique)
   */
  featureName: string;

  /**
   * Behavior of the rule
   */
  behavior: RuleBehavior;

  /**
   * Environments list
   */
  environments: Array<string>;

  /**
   * Extra attributes/configuration
   */
  attributes: TAttributes | undefined;
}
