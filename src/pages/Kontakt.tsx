
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["August-Bebel-Platz 14", "02625 Bautzen"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["Rufen Sie uns an", "Persönliche Beratung"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: ["Schreiben Sie uns", "Schnelle Antwort garantiert"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Beratung",
      details: ["Vor Ort, telefonisch", "oder per E-Mail"],
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              <span className="text-blue-600">Kontakt</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Wir freuen uns, Sie kennenzulernen und stehen Ihnen gerne für 
              eine kostenlose und unverbindliche Beratung zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Company Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Nachricht senden
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">
                        E-Mail *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-2">
                        Betreff
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Worum geht es?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Nachricht *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full"
                      placeholder="Teilen Sie uns Ihr Anliegen mit..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  ZMF Wirtschaftsberatungsgesellschaft mbH
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Unsere Adresse</h3>
                      <p className="text-slate-600">August-Bebel-Platz 14</p>
                      <p className="text-slate-600">02625 Bautzen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Beratungsformen</h3>
                      <p className="text-slate-600">• Persönlich in unseren Büros</p>
                      <p className="text-slate-600">• Bei Ihnen vor Ort</p>
                      <p className="text-slate-600">• Telefonische Beratung</p>
                      <p className="text-slate-600">• Online-Beratung</p>
                      <p className="text-slate-600">• E-Mail Korrespondenz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Ihre Vorteile
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• Kostenlose und unverbindliche Erstberatung</li>
                  <li>• Über 25 Jahre Erfahrung in der Branche</li>
                  <li>• Mehr als 10.000 zufriedene Kunden</li>
                  <li>• Unabhängige Beratung ohne Interessenskonflikte</li>
                  <li>• Schnelle und unkomplizierte Bearbeitung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            "Wer seine Sache nicht mag, den mag sein Geschäft auch nicht." – 
            <span className="font-semibold text-blue-600"> Wir lieben unsere Sache!</span>
          </blockquote>
          <cite className="text-slate-500 text-lg">
            William Hazlitt (1778-1830, englischer Schriftsteller, Theaterkritiker und Philosoph)
          </cite>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
