import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
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
      // Step 1: Save to Supabase database
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
        throw new Error('Failed to save message to database');
      }

      console.log('Message saved to database:', dbData);

      // Step 2: Send email via Supabase Edge Function
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      });

      if (emailError) {
        console.warn('Email sending failed:', emailError);
        // Don't throw error here - message is already saved to database
      } else {
        console.log('Email sent successfully:', emailData);
      }

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out! I'll get back to you within 24-48 hours at adityasaichinmay@gmail.com",
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error submitting contact form:', error);

      toast({
        title: "Submission Error ❌",
        description: error.message || "Failed to send message. Please try again or contact me directly at adityasaichinmay@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };  return (
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

            {/* Response Time Note */}
            <motion.div
              className="p-4 bg-accent/10 border border-accent/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start space-x-3">
                <MessageCircle className="text-accent mt-1" size={18} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to all inquiries within 24-48 hours.
                    For urgent projects, feel free to mention it in your message.
                  </p>
                </div>
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
              <div className="space-y-6 mb-6">
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
                    rows={5}
                    className="hover-effect resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full hover-effect group"
                  size="lg"
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};