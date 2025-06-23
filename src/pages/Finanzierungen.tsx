
import React from 'react';
import { Home, Wrench, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Finanzierungen = () => {
  const services = [
    {
      icon: Home,
      title: "Immobilien- und Baufinanzierungsdarlehen",
      description: "Unabhängige Suche von Kreditinstituten, Bausparkassen und Versicherungen für Ihre Traumimmobilie."
    },
    {
      icon: Wrench,
      title: "Modernisierungsdarlehen",
      description: "Günstige Konditionen sowie eine zügige, unbürokratische Abwicklung machen dieses Angebot besonders attraktiv."
    }
  ];

  const benefits = [
    "Marktübersicht und Produktvielfalt",
    "Unabhängige Beratung ohne Bankbindung", 
    "Kostenlose Finanzierungsberatung",
    "KfW-Darlehen Integration möglich",
    "Umfassendes Portfolio an Partnern",
    "Zügige, unbürokratische Abwicklung"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              <span className="text-green-600">Finanzierungen</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Ihr unabhängiger Finanzierungsmakler - Wir sind Ihr Partner für Kredit, 
              Finanzierung und Baufinanzierung
            </p>
            <p className="text-lg text-slate-500">
              Mit dem richtigen Partner an Ihrer Seite
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Günstige Finanzierung ohne Bankhopping
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  Sie möchten Ihr Haus oder Ihre Eigentumswohnung günstig finanzieren? 
                  Sie möchten aber nicht zu vielen Kreditinstituten gehen, um zu vergleichen?
                </p>
                <p>
                  Wir haben für Sie die Lösung und ein passendes Konzept. Ihre Finanzierungsmakler 
                  suchen für Sie die niedrigsten Zinsen und das vielfältigste Angebot am deutschen 
                  Markt – und das für Sie <strong>kostenlos</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Unsere Finanzierungsleistungen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Weitere Finanzierungsarten
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                <div>
                  <ul className="space-y-2">
                    <li>• Baufinanzierung</li>
                    <li>• Immobilienfinanzierung</li>
                    <li>• Modernisierungsdarlehen</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Umschuldungen zu zinsgünstigen Konditionen</li>
                    <li>• Autokredit</li>
                    <li>• Hypotheken</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Ihre Vorteile als Finanzierungsmakler
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Unsere Stärken
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    Unser Versprechen
                  </h3>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      Wir suchen für Sie unabhängig die besten und günstigsten Kreditinstitute. 
                      Wir haben ein umfassendes Portfolio zu Partnern aus der Finanzbranche, 
                      um den auf Sie passenden Anbieter zu finden.
                    </p>
                    <p>
                      Auch Bausparkassen ziehen wir für die Vergleiche heran. KfW-Darlehen 
                      können mit in die Finanzierung integriert werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-slate-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ihr Kreditwunsch ist bei uns in besten Händen
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Wir beraten Sie gerne persönlich und erstellen mit Ihnen gemeinsam die beste 
            und kostengünstigste Finanzierungslösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/kontakt" 
              className="group bg-white text-green-600 hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Termin vereinbaren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="text-white/80">
              <p>Auch Online-Beratung möglich</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            "Wer seine Sache nicht mag, den mag sein Geschäft auch nicht." – 
            <span className="font-semibold text-green-600"> Wir lieben unsere Sache!</span>
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

export default Finanzierungen;
