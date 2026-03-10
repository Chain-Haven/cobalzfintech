"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Contact us
              </h1>
              <p className="text-xl text-[#475569]">
                Have a question or want to learn more? We&apos;d love to hear from you.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Info */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:hello@cobalz.com" className="text-[#475569] hover:text-[#d4af37]">
                    hello@cobalz.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+1-800-COBALZ" className="text-[#475569] hover:text-[#d4af37]">
                    1-800-COBALZ
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Live chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">Available 9am-6pm PT</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input label="First Name" placeholder="John" />
                      <Input label="Last Name" placeholder="Doe" />
                    </div>
                    <Input label="Email" type="email" placeholder="john@example.com" />
                    <Input label="Company" placeholder="Your Company" />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]"
                        placeholder="How can we help?"
                      />
                    </div>
                    <Button className="w-full bg-[#d4af37] hover:bg-[#b8960c] text-white">
                      Send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
