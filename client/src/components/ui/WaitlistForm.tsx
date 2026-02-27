import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useSubmitWaitlist } from "@/hooks/use-waitlist";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Local schema that matches the backend requirements
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.enum(['Investor', 'Logistics Operator', 'Student', 'Other'], {
    errorMap: () => ({ message: "Please select an area of interest" })
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const submitWaitlist = useSubmitWaitlist();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await submitWaitlist.mutateAsync(data);
      setIsSuccess(true);
      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-10 glass rounded-2xl flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              You've successfully joined the Namenayou™ waitlist. We'll be in touch soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 px-6 py-2 rounded-full border border-border hover:bg-muted transition-colors font-medium text-sm"
            >
              Submit Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1.5">
            Primary Interest
          </label>
          <select
            id="interest"
            {...register("interest")}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select your interest...</option>
            <option value="Investor">Investor</option>
            <option value="Logistics Operator">Logistics Operator</option>
            <option value="Student">Student / Learner</option>
            <option value="Other">Other</option>
          </select>
          {errors.interest && (
            <p className="mt-1.5 text-sm text-destructive">{errors.interest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Message (Optional)
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
            placeholder="Tell us a bit more about your interest..."
          />
        </div>

        {submitWaitlist.error && (
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
            {submitWaitlist.error.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || submitWaitlist.isPending}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
        >
          {isSubmitting || submitWaitlist.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Join the Waitlist
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
