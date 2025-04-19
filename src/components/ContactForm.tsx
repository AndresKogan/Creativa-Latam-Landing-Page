
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const formSchema = z.object({
  service: z.string().min(1, { message: "Please select a service" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, onSuccess }) => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      email: "",
      message: t('email.placeholder'),
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // In a real application, you would send this data to your backend
    console.log("Form data:", data);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      form.reset();

      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email.service.title')}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white text-black border-white">
                    <SelectValue placeholder={t('email.service')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="branding"> <span translate="no">{t('services.branding.title')}</span></SelectItem>
                  <SelectItem value="ecommerce"><span translate="no">{t('services.ecommerce.title')}</span></SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  {...field}
                  className="bg-white text-black border-white placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {language === 'es' ? 'Mensaje' : 'Message'}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[120px] bg-white text-black border-white placeholder:text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-4 shadow-md"
        // disabled={isSubmitting || !form.formState.isValid}
        >
          {isSubmitting ? "Sending..." : t('email.send')}
        </Button>

      </form>
    </Form>
  );
};

export default ContactForm;
