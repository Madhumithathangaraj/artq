import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Instagram,
  Send,
  Sparkles,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const instagramHandle = 'artq____';
  const instagramUrl = 'https://www.instagram.com/artq____?stkn=MTdpNW1rbzEzNDVvZQ==';
  const emailAddress = 'prathapofficial20@gmail.com';
  const phoneNumber = '+91 95141 19569';
  const phoneCallUrl = 'tel:+919514119569';
  const whatsappUrl = 'https://wa.me/919514119569';

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#EAE0D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#DFCFC0] text-[#7E5E48] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9C4127]" />
            <span>Studio Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24201D] tracking-tight mb-4">
            Connect with ARTQ
          </h2>
          <p className="text-base sm:text-lg text-[#5E544C] leading-relaxed font-light">
            Whether inquiring about original acquisitions, artwork provenance, or studio visits,
            reach out directly via email, phone, or Instagram.
          </p>
        </div>

        {/* 3 Prominent Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Instagram Card */}
          <div
            id="contact-instagram-card"
            className="p-8 rounded-3xl bg-[#F5EFEB] border border-[#E2D5C5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8DDD0] text-[#9C4127] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58] block mb-1">
                Official Instagram
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#272320] mb-2">
                @{instagramHandle}
              </h3>
              <p className="text-xs text-[#6B6158] leading-relaxed font-light mb-6">
                Follow recent atelier works in progress, client showcases, and direct message the artist.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#DECFC0]">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#9C4127] hover:bg-[#83351E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Visit Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(instagramHandle, 'instagram')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EAE0D3] hover:bg-[#DFD0C0] text-[#272320] text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedField === 'instagram' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-700" />
                    <span>Copied @{instagramHandle}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#73685E]" />
                    <span>Copy Username</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div
            id="contact-email-card"
            className="p-8 rounded-3xl bg-[#F5EFEB] border border-[#E2D5C5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8DDD0] text-[#9C4127] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58] block mb-1">
                Direct Email
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#272320] mb-2 break-all">
                {emailAddress}
              </h3>
              <p className="text-xs text-[#6B6158] leading-relaxed font-light mb-6">
                Send acquisition inquiries, collaboration proposals, or exhibition requests directly to the artist.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#DECFC0]">
              <a
                href={`mailto:${emailAddress}`}
                className="w-full py-3 px-4 rounded-xl bg-[#272320] hover:bg-[#3D4A3E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Compose Email</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EAE0D3] hover:bg-[#DFD0C0] text-[#272320] text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-700" />
                    <span>Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#73685E]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div
            id="contact-phone-card"
            className="p-8 rounded-3xl bg-[#F5EFEB] border border-[#E2D5C5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8DDD0] text-[#3D4A3E] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58] block mb-1">
                Phone & WhatsApp
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#272320] mb-2 tracking-wide">
                {phoneNumber}
              </h3>
              <p className="text-xs text-[#6B6158] leading-relaxed font-light mb-6">
                Available for phone consultations, WhatsApp quick messaging, and bespoke appointment bookings.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#DECFC0]">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={phoneCallUrl}
                  className="py-3 px-3 rounded-xl bg-[#3D4A3E] hover:bg-[#2F3930] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EAE0D3] hover:bg-[#DFD0C0] text-[#272320] text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-700" />
                    <span>Copied Phone Number</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#73685E]" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Quick Message & Studio Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-[#F5EFEB] border border-[#E2D5C5] rounded-3xl p-8 sm:p-10 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#272320] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#675C53] mb-6 font-light">
              Have a general inquiry or question about ARTQ artworks? Leave a note and we will reply promptly to your email.
            </p>

            {submitted ? (
              <div className="py-8 text-center bg-[#FAF7F2] border border-[#DECFC0] rounded-2xl p-6">
                <CheckCircle2 className="w-10 h-10 text-[#3D4A3E] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#272320] mb-1">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-[#6B6158] max-w-sm mx-auto mb-4">
                  Thank you. We have received your inquiry and will reach out to your provided email address shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-[#272320] text-[#FAF7F2] text-xs uppercase font-semibold tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#433B34] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g., Alistair Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBBC] text-xs text-[#272320] focus:outline-hidden focus:ring-1 focus:ring-[#9C4127]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#433B34] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g., alistair@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBBC] text-xs text-[#272320] focus:outline-hidden focus:ring-1 focus:ring-[#9C4127]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#433B34] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g., Portrait Inquiry, Studio Visit, Artwork Framing"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBBC] text-xs text-[#272320] focus:outline-hidden focus:ring-1 focus:ring-[#9C4127]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#433B34] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBBC] text-xs text-[#272320] focus:outline-hidden focus:ring-1 focus:ring-[#9C4127] leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-[#9C4127] hover:bg-[#83351E] disabled:bg-[#C29686] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Hours & Response Commitment */}
          <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#E2D5C5] rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#E5ECE4] text-[#3D4A3E] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#272320]">
                    Atelier Schedule
                  </h4>
                  <p className="text-xs text-[#82756A]">Direct Artist Availability</p>
                </div>
              </div>

              <div className="space-y-3 text-xs mb-8">
                <div className="flex justify-between py-2 border-b border-[#E8DDD0]">
                  <span className="text-[#6E6359] font-medium">Monday – Friday</span>
                  <span className="font-semibold text-[#272320]">10:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8DDD0]">
                  <span className="text-[#6E6359] font-medium">Saturday</span>
                  <span className="font-semibold text-[#272320]">11:00 AM – 5:00 PM IST</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8DDD0]">
                  <span className="text-[#6E6359] font-medium">Sunday</span>
                  <span className="text-[#8C6D58] font-medium">Studio Quiet Day / By Prior Appt</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#DECFC0] mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9C4127] block mb-1">
                  Guaranteed Response
                </span>
                <p className="text-xs text-[#5D534A] leading-relaxed">
                  Every inquiry to <strong>prathapofficial20@gmail.com</strong> or phone calls are answered directly by the artist or lead atelier within 24 hours.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-[#8C8075] pt-4 border-t border-[#E8DDD0]">
              Personal consultations & private artwork reviews available online via Google Meet or WhatsApp video call.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
