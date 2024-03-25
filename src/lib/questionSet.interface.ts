import { bfiDimension } from "./bfiDimension.enum";
import { likert5Scales, likert5ScalesReverse } from "./likert5Scale";

export interface QuestionSet {
    description: string;
    type: string;
    category: string;
    options: any;
}

export interface OptionSet {
    optionKey: string;
    description: string;
    value: string;
    category: string,
}

export const simulateData: QuestionSet[] = [
    {
        description: '我覺得自己比較內向。',
        type: 'radio',
        category: bfiDimension.extraversion,
        options: likert5ScalesReverse
      },
      {
        description: '我覺得自己一般來說比較信任別人。',
        type: 'radio',
        category: bfiDimension.agreeableness,
        options: likert5Scales
      },
      {
        description: '我覺得自己有點懶惰。',
        type: 'radio',
        category: bfiDimension.conscientiousness,
        options: likert5ScalesReverse
      },
      {
        description: '我覺得自己比較放鬆，處理壓力得宜。',
        type: 'radio',
        category: bfiDimension.neuroticism,
        options: likert5ScalesReverse
      },
      {
        description: '我覺得自己對藝術興趣不大。',
        type: 'radio',
        category: bfiDimension.openness,
        options: likert5ScalesReverse
      },
      {
        description: '我覺得自己比較外向，喜歡社交。',
        type: 'radio',
        category: bfiDimension.extraversion,
        options: likert5Scales
      },
      {
        description: '我覺得自己有時會挑別人的毛病。',
        type: 'radio',
        category: bfiDimension.agreeableness,
        options: likert5ScalesReverse
      },
      {
        description: '我覺得自己做事比較徹底。',
        type: 'radio',
        category: bfiDimension.conscientiousness,
        options: likert5Scales
      },
      {
        description: '我覺得自己比較容易緊張。',
        type: 'radio',
        category: bfiDimension.neuroticism,
        options: likert5Scales
      },
      {
        description: '我覺得自己想像力很豐富。',
        type: 'radio',
        category: bfiDimension.openness,
        options: likert5Scales
      }
]