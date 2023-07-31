import { z } from 'zod';

export const upsertAdminSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1).max(256).trim(),
  email: z.string().email().min(1).max(256).trim(),
  password: z.string().max(256).trim().optional(),
});

export const loginSchema = z.object({
  email: z.string().email().min(1).max(256).trim(),
  password: z.string().max(256).trim(),
});

export const upsertProductSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1).max(256).trim(),
  description: z.string().min(1).max(256).trim(),
  image: z.custom(),
  categoryId: z.coerce
    .number()
    .positive('Required')
    .default('' as unknown as number),
  price: z.coerce
    .number()
    .positive()
    .default('' as unknown as number),
  quantity: z.coerce
    .number()
    .positive()
    .default('' as unknown as number),
});

export const upsertCategorySchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1).max(256).trim(),
  image: z.custom(),
});
