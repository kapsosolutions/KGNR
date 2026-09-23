import React, { useState } from 'react';
import { ATELIER_INFO } from '../data/ornamentsData';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'custom-ornament',
    karat: '22k',
    weight: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Master Rabbani Shaik (KGN.R),\nI submitted an inquiry through your website:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Piece: ${formData.service}\n• Karat: ${formData.karat.toUpperCase()}\n• Est. Weight: ${formData.weight || 'Not specified'}g\n• Notes: ${formData.message}`
    );

    window.open(`https://wa.me/${primaryWhatsApp}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            ATELIER LOCATION &amp; CONSULTATION
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-light text-[#222222] mb-4">
            Connect With Master Goldsmiths
          </h1>
          <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed">
            Whether commissioning a one-of-a-kind temple necklace, scheduling high-volume commercial polishing, or visiting our workshop in Chinna Bazaar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Workshop Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#faf9f8] p-6 sm:p-8 rounded-2xl border border-[#e8e6e3]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-3">
                PHYSICAL ATELIER ADDRESS
              </span>
              <h3 className="font-headline text-2xl font-medium text-[#222222] mb-4">
                KGN.R Workshop, Nellore
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#333333]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#cd9834] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#222222] font-semibold">{ATELIER_INFO.name}</strong>
                    <span>{ATELIER_INFO.address.line1},</span><br />
                    <span>{ATELIER_INFO.address.street},</span><br />
                    <span>{ATELIER_INFO.address.city} - {ATELIER_INFO.address.pincode}, {ATELIER_INFO.address.state}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-5 h-5 text-[#cd9834] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#222222] block">Atelier Working Hours:</span>
                    <span className="text-[#6f6f6d]">Mon – Sat: 10:00 AM – 9:00 PM</span><br />
                    <span className="text-[#6f6f6d]">Sunday: 11:00 AM – 5:00 PM (By Appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-[#f6f5f4] p-6 rounded-2xl border border-[#cd9834]/30 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block">
                DIRECT PHONES &amp; WHATSAPP
              </span>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${ATELIER_INFO.phones[0].clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#e8e6e3] hover:border-[#25D366] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-5 h-5" color="#25D366" />
                    <div>
                      <div className="text-xs text-[#6f6f6d]">Rabbani Shaik (Mobile / WhatsApp)</div>
                      <div className="font-medium text-sm text-[#222222]">{ATELIER_INFO.phones[0].number}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#25D366] font-medium group-hover:translate-x-1 transition-transform">
                    Chat &rarr;
                  </span>
                </a>

                <a
                  href={`https://wa.me/${ATELIER_INFO.phones[1].clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#e8e6e3] hover:border-[#25D366] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-5 h-5" color="#25D366" />
                    <div>
                      <div className="text-xs text-[#6f6f6d]">Workshop Secondary WhatsApp</div>
                      <div className="font-medium text-sm text-[#222222]">{ATELIER_INFO.phones[1].number}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#25D366] font-medium group-hover:translate-x-1 transition-transform">
                    Chat &rarr;
                  </span>
                </a>

                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#e8e6e3]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#cd9834]" />
                    <div>
                      <div className="text-xs text-[#6f6f6d]">Shop Desk Telephone</div>
                      <div className="font-medium text-sm text-[#222222]">{ATELIER_INFO.phones[2].number}</div>
                    </div>
                  </div>
                  <a href={`tel:${ATELIER_INFO.phones[2].clean}`} className="text-xs text-[#cd9834] font-medium">
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#e8e6e3]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#cd9834]" />
                    <div>
                      <div className="text-xs text-[#6f6f6d]">Official Inquiries Email</div>
                      <div className="font-medium text-xs text-[#222222] truncate max-w-[200px]">{ATELIER_INFO.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map View */}
            <div className="rounded-2xl overflow-hidden border border-[#e8e6e3] bg-[#f6f5f4] p-4 text-center">
              <div className="aspect-[16/9] w-full bg-[#e8e6e3] rounded-xl flex items-center justify-center relative overflow-hidden mb-3">
                <iframe
                  title="Nellore Chinna Bazaar Location"
                  src="https://maps.google.com/maps?q=14.4543889,79.9792917&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-xs">
                <span className="text-[#6f6f6d] text-left">
                  Landmark: Korada Street, NRN Complex, Chinna Bazaar
                </span>
                <a
                  href="https://www.google.com/maps/place/14%C2%B027'15.8%22N+79%C2%B058'45.5%22E/@14.4543889,79.9792917,643m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d14.4543889!4d79.9792917?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cd9834] font-medium hover:underline flex-shrink-0"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#cd9834] shadow-none">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-1">
                  BESPOKE COMMISSION &amp; JOBWORK
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
                  Request an Atelier Consultation
                </h3>
                <p className="text-xs text-[#6f6f6d] mt-1 leading-relaxed">
                  Fill in your requirements below. Your request will be instantly prepared for direct review by Master Craftsman Rabbani Shaik.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#faf9f8] border border-[#cd9834] rounded-xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#cd9834] mx-auto" />
                  <h4 className="font-headline text-xl text-[#222222]">Inquiry Transferred to WhatsApp</h4>
                  <p className="text-xs text-[#6f6f6d] max-w-md mx-auto">
                    Your request details have been dispatched. Master Rabbani Shaik will review the weight specifications and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="buick-pill-dark text-xs py-2 px-6 mt-3"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Suresh Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                        Interest / Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222] bg-white"
                      >
                        <option value="Custom Temple Jewellery">Temple Jewellery (Mukhavata, Idol)</option>
                        <option value="Sri Ganesha Ruby Haar">Royal Haar / Heritage Necklace</option>
                        <option value="Balaji Ring & Nakshi Kada">Rings, Bangles &amp; Kadas</option>
                        <option value="Vitreous Meenakari Enamel">Enamel Colours &amp; Peacock Meenakari</option>
                        <option value="Gold & Silver Digital Polish">Gold &amp; Silver Polish Works</option>
                        <option value="Platinum Digital Polish">Platinum Polish &amp; Rhodium Plating</option>
                        <option value="Commercial Jeweller Jobwork">Commercial Jeweller Bulk Jobwork</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                        Target Purity (Karat)
                      </label>
                      <select
                        value={formData.karat}
                        onChange={(e) => setFormData({ ...formData, karat: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222] bg-white"
                      >
                        <option value="22k">22K (916 BIS Hallmark Standard)</option>
                        <option value="24k">24K (999 Fine Bullion)</option>
                        <option value="18k">18K (750 Diamond Jewellery)</option>
                        <option value="platinum">Platinum 950</option>
                        <option value="silver">Fine Silver 999</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                      Approximate Weight in Grams (Optional)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 25, 50, 100"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#333333] font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                      Design Details, Gemstone Preference, or Temple Requirements
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Mention references (e.g. Peacock motif, Ganesha pendant, ruby beads, urgent restoration date)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d6d2] focus:outline-none focus:border-[#cd9834] text-xs text-[#222222]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="buick-pill-dark w-full py-4 text-xs uppercase tracking-wider justify-center flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" color="#25D366" />
                      <span>Dispatch Inquiry to Master Rabbani Shaik</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#6f6f6d] pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#cd9834]" />
                    <span>Your contact details are strictly confidential and shared only with our master goldsmith.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
