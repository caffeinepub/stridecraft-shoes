import ContactForm from '../components/contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                hello@stridecraft.com
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                123 Craft Street<br />
                San Francisco, CA 94102
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
