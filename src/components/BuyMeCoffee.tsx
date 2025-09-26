import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Coffee, Heart, QrCode, X, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const BuyMeCoffee = () => {
  const { toast } = useToast();
  const [isQROpen, setIsQROpen] = useState(false);
  const [copiedUPI, setCopiedUPI] = useState(false);

  // UPI ID from the QR code
  const upiId = "adityasaichinmay@okaxis";

  const copyUPIId = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUPI(true);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app.",
    });
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  const coffeeOptions = [
    { emoji: '☕', label: 'Coffee', amount: '₹150', message: 'Thanks for the coffee support!' },
    { emoji: '�', label: 'Custom Amount', amount: 'Any Amount', message: 'Thank you for your generous support!' }
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Coffee size={32} className="text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Buy Me a Coffee</h3>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={24} className="text-red-400 fill-current" />
              </motion.div>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you enjoyed my work or found my projects helpful, consider supporting me!
              Your contribution helps me continue creating awesome open-source projects and learning new technologies.
            </p>
          </motion.div>

          {/* Coffee Options */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {coffeeOptions.map((option, index) => (
              <motion.div
                key={option.label}
                className="p-4 bg-card/50 border border-border/50 rounded-xl hover:border-accent/30 transition-all duration-300 cursor-pointer hover-effect"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setIsQROpen(true)}
              >
                <div className="text-3xl mb-2">
                  {option.label === 'Custom Amount' ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1052/1052866.png"
                      alt="Cash icon"
                      className="w-8 h-8 mx-auto"
                    />
                  ) : (
                    option.emoji
                  )}
                </div>
                <h4 className="font-medium text-foreground mb-1">{option.label}</h4>
                <p className="text-accent font-semibold">{option.amount}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Dialog open={isQROpen} onOpenChange={setIsQROpen}>
              <DialogTrigger asChild>
                <Button className="btn-primary hover-effect group">
                  <Coffee size={18} className="mr-2" />
                  <span>Support My Work</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    <Coffee className="text-accent" size={20} />
                    <span>Support Me</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-xl mx-auto w-fit shadow-lg">
                    <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center relative">
                      <img
                        src="https://images.unsplash.com/photo-1758882996566-0da67e35a029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                        alt="UPI QR Code for Aditya Sai Chinmay"
                        className="w-full h-full object-contain rounded-lg"
                      />
                      {/* Small logo overlay */}
                      <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-sm">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">₹</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-gray-700 font-semibold">Aditya Sai Chinmay</p>
                      <p className="text-gray-500 text-sm">Scan to pay with any UPI app</p>
                    </div>
                  </div>

                  {/* UPI ID */}
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Or use UPI ID:</p>
                    <div className="flex items-center justify-center space-x-2 p-3 bg-card border border-border rounded-lg">
                      <code className="text-accent font-mono">{upiId}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyUPIId}
                        className="p-1 h-auto"
                      >
                        {copiedUPI ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </Button>
                    </div>
                  </div>

                </div>
              </DialogContent>
            </Dialog>

            {/* <Button
              onClick={() => window.open('https://github.com/sponsors/Chinmay8897', '_blank')}
              className="btn-secondary hover-effect"
            >
              <Heart size={18} className="mr-2" />
              GitHub Sponsors
            </Button> */}
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};