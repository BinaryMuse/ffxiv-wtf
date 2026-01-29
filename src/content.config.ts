import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared schema for all fight content
const fightSchema = z.object({
  title: z.string(),
  expansion: z.enum(['arr', 'hw', 'sb', 'shb', 'ew', 'dt']),
  difficulty: z.enum(['normal', 'hard', 'extreme', 'savage', 'ultimate']).default('normal'),
  level: z.number().min(1).max(100),
  minIlvl: z.number().optional(),
  bosses: z.array(z.object({
    name: z.string(),
  })),
  // Optional patch info
  patch: z.string().optional(),
});

const dungeons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dungeons' }),
  schema: fightSchema,
});

const trials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trials' }),
  schema: fightSchema,
});

const raids = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/raids' }),
  schema: fightSchema,
});

const allianceraids = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/allianceraids' }),
  schema: fightSchema,
});

export const collections = {
  dungeons,
  trials,
  raids,
  allianceraids,
};
