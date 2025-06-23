
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Building, ArrowRight, Heart, Home, Car, Briefcase, Scale, Umbrella } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Versicherungen = () => {
  const privatServices = [
    { icon: Heart, title: "Altersvorsorge", description: "Individuelle Vorsorgelösungen für Ihre Zukunft" },
    { icon: Heart, title: "Gesundheit", description: "Umfassender Versicherungsschutz für Ihre Gesundheit" },
    { icon: Shield, title: "Existenzschutz", description: "Schutz bei unvorhersehbaren Ereignissen" },
    { icon: Scale, title: "Haftpflicht & Rechtschutz", description: "Schutz vor finanziellen Risiken" },
    { icon: Home, title: "Wohnen & Leben", description: "Finanzielle Absicherung für Ihr Zuhause" },
    { icon: Car, title: "Fahrzeuge", description: "Leistungsstarke Kfz-Versicherung" }
  ];

  const businessServices = [
    { icon: Briefcase, title: "Haftpflicht", description: "Berufs- und Firmenhaftpflicht" },
    { icon: Shield, title: "Sachwerte", description: "Schutz für Ihre Unternehmensimmobilien" },
    { icon: Scale, title: "Rechtsschutz", description: "Schutz vor hohen Rechtsstreitkosten" },
    { icon: Car, title: "Fahrzeuge", description: "Kfz-Flottenversicherung mit Sonderkonditionen" },
    { icon: Users, title: "Betriebliche Altersvorsorge", description: "Maßgeschneiderte Versorgungskonzepte" },
    { icon: Heart, title: "Gesundheitsmanagement", description: "Betriebliche Krankenversicherung" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              <span className="text-blue-600">Versicherungen</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Wir sind Ihr Versicherungsmakler mit kompetenter, unabhängiger Beratung. 
              Ihre persönlichen Interessen und Bedürfnisse stehen bei uns im Mittelpunkt.
            </p>
            <p className="text-lg text-slate-500">
              Wir beraten kompetent und unabhängig seit über 25 Jahren. Unsere Beratung ist kostenlos und unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Privatkunden */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Privatkunden</h2>
                <p className="text-slate-600">Individuelle Absicherung für Sie und Ihre Familie</p>
              </div>

              <div className="space-y-6">
                {privatServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link 
                  to="/versicherungen/privatkunden" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Mehr für Privatkunden
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Firmenkunden */}
            <div>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Firmenkunden</h2>
                <p className="text-slate-600">Professioneller Schutz für Ihr Unternehmen</p>
              </div>

              <div className="space-y-6">
                {businessServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link 
                  to="/versicherungen/firmenkunden" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Mehr für Firmenkunden
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Warum ZMF für Ihre Versicherungen?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Für Privatkunden</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• Risikoanalyse zur Ermittlung des persönlichen Versicherungsbedarfs</li>
                  <li>• Maßgeschneiderte Lösungen in allen Versicherungsbereichen</li>
                  <li>• Vertrauliche und objektive, individuell abgestimmte Beratung</li>
                  <li>• Finanzanalyse zur Ermittlung des persönlichen Vorsorgebedarfs</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Für Firmenkunden</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• Individuelle Bedarfsermittlungen zur Vermeidung von Risiken</li>
                  <li>• Kompetente Risikoanalysen für umfassende Versicherungskonzepte</li>
                  <li>• Großes Netzwerk an Produktpartnern für leistungsstarken Schutz</li>
                  <li>• Kompetentes Schadenmanagement und schnelle Schadensbearbeitung</li>
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

export default Versicherungen;
