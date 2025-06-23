
import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Unabhängigkeit",
      description: "Objektive, kundenorientierte Beratung – die Interessen und Wünsche unserer Kunden stehen im Mittelpunkt"
    },
    {
      icon: TrendingUp,
      title: "Erstklassiges Preis-Leistungsverhältnis",
      description: "Mit über 70 Versicherungsgesellschaften bieten wir spezielle Sonderkonditionen und Rabatte"
    },
    {
      icon: Users,
      title: "Beste Beratung und Betreuung",
      description: "Individuelle Versicherungslösungen und eine langfristige, partnerschaftliche Beratung"
    },
    {
      icon: Award,
      title: "Seit über 25 Jahren erfolgreich",
      description: "Mehr als 10.000 Privat- und Firmenkunden vertrauen auf unsere Expertise"
    }
  ];

  const services = [
    { title: "Altersvorsorge", description: "Individuelle Vorsorgelösungen" },
    { title: "Gesundheit", description: "Umfassender Versicherungsschutz" },
    { title: "Existenzschutz", description: "Schutz bei unvorhersehbaren Ereignissen" },
    { title: "Haftpflicht & Rechtschutz", description: "Schutz vor finanziellen Risiken" },
    { title: "Wohnen & Leben", description: "Absicherung für Ihr Zuhause" },
    { title: "Fahrzeuge", description: "Leistungsstarke Kfz-Versicherung" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-800/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                  ZMF
                </span>
                <br />
                <span className="text-3xl md:text-4xl font-normal text-slate-600">
                  Wirtschaftsberatung
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Mit über 25 Jahren Erfahrung an Ihrer Seite
              </p>
              <p className="text-lg text-slate-500 mb-12">
                Ihr Partner für maßgeschneiderte Versicherungen und Finanzierungen
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Link 
                to="/kontakt" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Beratung vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/uber-uns" 
                className="text-slate-600 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 border border-slate-200 hover:border-blue-200"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-slate-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Warum ZMF wählen?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ihr leistungsstarker Versicherungsmakler mit kompetenter, unabhängiger Beratung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-4">25+</div>
              <div className="text-xl opacity-90">Jahre Erfahrung</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-4">10.000+</div>
              <div className="text-xl opacity-90">Zufriedene Kunden</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-bold mb-4">70+</div>
              <div className="text-xl opacity-90">Versicherungspartner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Versicherungsthemen im Überblick
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wir beraten kompetent und unabhängig seit über 25 Jahren. Unsere Beratung ist kostenlos und unverbindlich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/versicherungen" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Alle Versicherungen ansehen
              <ArrowRight className="w-5 h-5" />
            </Link>
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Wir freuen uns, Sie kennenzulernen
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Vereinbaren Sie noch heute einen kostenlosen Beratungstermin
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center gap-3 text-slate-600">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-sm">August-Bebel-Platz 14, 02625 Bautzen</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-600">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-sm">Rufen Sie uns an</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-600">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">E-Mail</div>
                  <div className="text-sm">Schreiben Sie uns</div>
                </div>
              </div>
            </div>

            <Link 
              to="/kontakt" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
