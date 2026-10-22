import { z } from "zod";

export const singleAnswerSchema = z.object({
  question_id: z
    .number()
    .int()
    .positive(),

  selected_option_ids: z
    .array(
      z
        .number()
        .int()
        .positive()
    )
    .length(
      1,
      "Please select one option."
    ),
});

export const multiAnswerSchema = z.object({
  question_id: z
    .number()
    .int()
    .positive(),

  selected_option_ids: z
    .array(
      z
        .number()
        .int()
        .positive()
    )
    .min(
      1,
      "Please select at least one option."
    ),
});