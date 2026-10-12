import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { contactSchema } from "../../schemas/contactSchema";
import { sendContactMessage } from "../../api/contactApi";

const inputStyle = (hasError) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-gray-300 focus:border-[#727CB6] focus:ring-[#727CB6]/10"
  }`;

// Label + input + error message
function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      {children}

      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      //   company: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await sendContactMessage(values);

      toast.success("Thank you! Your message has been sent.");
      reset();
    } catch (error) {
      const status = error?.response?.status;
      const serverErrors = error?.response?.data?.errors;

      if (status === 422 && serverErrors) {
        // Show server validation errors under the matching field
        Object.entries(serverErrors).forEach(([field, messages]) =>
          setError(field, { type: "server", message: messages?.[0] }),
        );
        toast.error("Please correct the highlighted fields.");
      } else if (status === 429) {
        toast.error("Too many attempts. Please try again in a few minutes.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your Name" error={errors.name}>
          <input
            id="name"
            type="text"
            maxLength={100}
            placeholder="Enter your name"
            aria-invalid={Boolean(errors.name)}
            className={inputStyle(errors.name)}
            {...register("name")}
          />
        </Field>

        <Field id="email" label="Your E-mail" error={errors.email}>
          <input
            id="email"
            type="email"
            maxLength={150}
            placeholder="Enter your email"
            aria-invalid={Boolean(errors.email)}
            className={inputStyle(errors.email)}
            {...register("email")}
          />
        </Field>

        {/* <Field id="company" label="Company (optional)" error={errors.company}>
          <input
            id="company"
            type="text"
            maxLength={150}
            placeholder="Enter company name"
            aria-invalid={Boolean(errors.company)}
            className={inputStyle(errors.company)}
            {...register("company")}
          />
        </Field> */}
        <div className="sm:col-span-2">
          <Field id="subject" label="Subject" error={errors.subject}>
            <input
              id="subject"
              type="text"
              maxLength={150}
              placeholder="Enter subject"
              aria-invalid={Boolean(errors.subject)}
              className={inputStyle(errors.subject)}
              {...register("subject")}
            />
          </Field>
        </div>
      </div>

      <div className="mt-5">
        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            rows={8}
            maxLength={5000}
            placeholder="Write your message..."
            aria-invalid={Boolean(errors.message)}
            className={`${inputStyle(errors.message)} resize-y leading-6`}
            {...register("message")}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from real users, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-gray-500">
          We&apos;ll use your information only to respond to your enquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-[#727CB6] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#727CB6]/20 transition hover:bg-[#505B95] focus:outline-none focus:ring-4 focus:ring-[#727CB6]/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
