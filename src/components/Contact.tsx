import { Sun } from "lucide-react";
import { motion } from "motion/react";

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: "mdi:twitter", url: "https://twitter.com", label: "Twitter" },
  { icon: "mdi:linkedin", url: "https://linkedin.com", label: "LinkedIn" },
  { icon: "mdi:github", url: "https://github.com", label: "GitHub" },
  { icon: "mdi:instagram", url: "https://instagram.com", label: "Instagram" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Contact = (): JSX.Element => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gray-700 dark:text-gray-200"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl shadow-neu-flat dark:shadow-neu-flat-dark hover:shadow-neu-pressed dark:hover:shadow-neu-pressed-dark transition-shadow duration-300"
              aria-label={link.label}
            >
              <Sun className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
