import { useMutation } from "@tanstack/react-query";
import { api, type WaitlistInput } from "@shared/routes";

export function useSubmitWaitlist() {
  return useMutation({
    mutationFn: async (data: WaitlistInput) => {
      const validated = api.waitlist.create.input.parse(data);
      const res = await fetch(api.waitlist.create.path, {
        method: api.waitlist.create.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Validation failed");
        }
        throw new Error("Failed to submit waitlist entry");
      }

      return api.waitlist.create.responses[201].parse(await res.json());
    },
  });
}
