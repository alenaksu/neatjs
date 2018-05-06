import { Innovation } from './utils';
import { NEATConfig } from './types';

export const DefaultConfig: NEATConfig = {
    dropoffAge: 15,
    excessCoefficient: 1.0,
    disjointCoefficient: 1.0,
    weightDifferenceCoefficient: 1,
    compatibilityThreshold: 3.0,
    compatibilityModifier: 0.3,
    compatibilityModifierTarget: 10,
    adjustCompatibilityThreshold: false,
    mutationPower: 2.5,
    reEnableGeneProbability: 0.05,
    mutateConnectionWeightsProbability: 0.9,
    genomeWeightPerturbated: 0.9,
    ageSignificance: 1,
    survivalThreshold: 0.2,
    populationSize: 100,
    mutateOnlyProbability: 0.2,
    mutateAddNodeProbability: 0.03,
    mutateAddConnectionProbability: 0.05,
    mutateToggleEnableProbability: 0,
    interspeciesMateRate: 0.001,
    fitnessThreshold: 0.9,
    addConnectionTries: 20,
    innovation: Innovation(),
    feedForwardOnly: true
};
