import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adityasaichinmay@gmail.com',
    href: 'mailto:adityasaichinmay@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India'
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to freelance, part-time, internship, and full-time roles'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Chinmay8897', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-sai-chinmay/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/__._chinmay_.__/', label: 'Instagram' },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if Supabase is configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Contact form is not properly configured. Please contact me directly at adityasaichinmay@gmail.com');
      }

      // Step 1: Try to save to Supabase database
      let databaseSuccess = false;
      try {
        const { data: dbData, error: dbError } = await supabase
          .from('contact_messages')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            }
          ])
          .select();

        if (dbError) {
          console.error('Database error:', dbError);

          // Check if it's a table not found error
          if (dbError.message?.includes('relation "contact_messages" does not exist')) {
            console.warn('Database table not found, continuing without database storage');
          } else {
            console.warn('Database insert failed, continuing without database storage');
          }
        } else {
          console.log('Message saved to database:', dbData);
          databaseSuccess = true;
        }
      } catch (dbErr) {
        console.warn('Database connection failed, continuing without database storage:', dbErr);
      }

      // Step 2: Send email via EmailJS
      let emailSuccess = false;
      try {
        // EmailJS configuration
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QW-r3_dWZ-Bk1Gi8s';

        const emailJSResult = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'adityasaichinmay@gmail.com',
            reply_to: formData.email,
          },
          publicKey
        );

        console.log('Email sent via EmailJS:', emailJSResult);
        emailSuccess = true;
      } catch (emailJSError) {
        console.warn('EmailJS failed, trying Supabase Edge Function:', emailJSError);

        // Fallback to Supabase Edge Function
        try {
          const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
            body: {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            }
          });

          if (emailError) {
            console.warn('Supabase email sending failed:', emailError);
          } else {
            console.log('Email sent via Supabase:', emailData);
            emailSuccess = true;
          }
        } catch (supabaseEmailErr) {
          console.warn('All email services failed:', supabaseEmailErr);
        }
      }

      // Show success message based on email and database status
      let successTitle = "Message Sent! 🚀";
      let successMessage = "";

      if (emailSuccess && databaseSuccess) {
        successMessage = "Perfect! Your message has been sent to my email and saved. I'll get back to you within 24-48 hours.";
      } else if (emailSuccess) {
        successMessage = "Great! Your message has been sent to my email (adityasaichinmay@gmail.com). I'll respond within 24-48 hours.";
      } else if (databaseSuccess) {
        successMessage = "Your message has been saved. I'll check my database regularly, but for faster response, please also email me directly at adityasaichinmay@gmail.com";
      } else {
        successMessage = "Thank you for your message! To ensure I receive it, please send me an email directly at adityasaichinmay@gmail.com";
        successTitle = "Message Submitted 📧";
      }

      toast({
        title: successTitle,
        description: successMessage,
      });

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error submitting contact form:', error);

      // Only show error if it's a configuration issue
      if (error.message?.includes('not properly configured')) {
        toast({
          title: "Configuration Error ❌",
          description: error.message,
          variant: "destructive"
        });
      } else {
        // For other errors, offer to open default email client
        const mailtoLink = `mailto:adityasaichinmay@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

        toast({
          title: "Opening Email Client 📧",
          description: "Email services are unavailable. Opening your default email client...",
        });

        // Open mailto link
        window.location.href = mailtoLink;

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I am always excited to work on new projects and collaborate with amazing people.
                Whether you have a project in mind, need technical consultation, or just
                want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover-effect"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <info.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors animated-underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover-effect"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card border border-border rounded-xl pt-6 px-6 pb-0 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-4">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="hover-effect"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="hover-effect"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    required
                    className="hover-effect"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    rows={4}
                    className="hover-effect resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full hover-effect group"
                    size="default"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        ⏳
                      </motion.div>
                    ) : (
                      <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};