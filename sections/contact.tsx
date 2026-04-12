import Heading from '@/components/heading/heading';
import Card from '@/components/ui/card';
import { FaPhoneAlt, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactSection() {
  return (
    <div id="contact" className="pt-24 px-3 lg:px-8 pb-24">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="flex flex-col items-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2 text-center">
            Let&apos;s Connect
          </h2>
          <p className="text-secondary-foreground mb-10 text-center max-w-md">
            Feel free to reach out for opportunities, collaborations, or just to say hi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <ContactItem
              icon={<MdEmail className="w-6 h-6" />}
              label="Email"
              value="chizhang2048@gmail.com"
              href="mailto:chizhang2048@gmail.com"
              hoverColor="#EA4335"
            />
            <ContactItem
              icon={<FaLinkedinIn className="w-5 h-5" />}
              label="LinkedIn"
              value="@chizhang111"
              href="https://www.linkedin.com/in/chizhang111"
              hoverColor="#0A66C2"
            />
            <ContactItem
              icon={<FaPhoneAlt className="w-5 h-5" />}
              label="Phone"
              value="(929) 705-4920"
              href="tel:+19297054920"
              hoverColor="#00d372"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  hoverColor
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  hoverColor: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-secondary-background hover:border-white/20 transition-all duration-300"
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 rounded-full bg-white/5 grid place-items-center text-primary-foreground transition-colors duration-300 group-hover:text-[var(--hover-color)] group-hover:bg-[var(--hover-color)]/10"
      >
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs text-secondary-foreground uppercase tracking-wider mb-1">{label}</p>
        <p className="text-sm font-medium text-primary-foreground transition-colors duration-300 group-hover:text-[var(--hover-color)]">{value}</p>
      </div>
    </a>
  );
}
