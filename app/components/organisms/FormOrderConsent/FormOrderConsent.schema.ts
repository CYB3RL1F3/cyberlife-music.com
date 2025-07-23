import { boolean, object, optional, refine } from "superstruct";

const refineConsent = refine(optional(boolean()), "consent", (value) => {
    if (!value) return "You must accept the terms and conditions.";
    return true;
});

const refineConfirm = refine(optional(boolean()), "confirm", (value) => {
    if (!value) return "You must confirm your agreement.";
    return true;
});

export const formOrderConsentSchema = object({
    consent: refineConsent,
    confirm: refineConfirm
})