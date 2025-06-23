
import React from 'react';
import { Users, Award, Shield, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UberUns = () => {
  const values = [
    {
      icon: Users,
      title: "Zufriedene Kunden",
      description: "Über 10.000 Privat- und Firmenkunden vertrauen auf unsere Expertise"
    },
    {
      icon: Shield,
      title: "Maßgeschneiderte Versicherungen", 
      description: "Individuelle Lösungen für jeden Bedarf und jede Lebenssituation"
    },
    {
      icon: Award,
      title: "Fachkundige Mitarbeiter",
      description: "Hochqualifizierte Experten mit langjähriger Erfahrung"
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
              Über <span className="text-blue-600">ZMF</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Die ZMF Wirtschaftsberatungsgesellschaft mbH ist seit über 25 Jahren 
              Ihr leistungsstarker Versicherungsmakler.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Unsere Geschichte und Mission
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  Unser Team betreut mehr als 10.000 Privat- und Firmenkunden, welche in unseren Büros, 
                  persönlich vor Ort oder auch telefonisch sowie per E-Mail beraten werden. Unsere 
                  Führungskräfte und Mitarbeiter sind hochqualifiziert und können auf langjährige 
                  Tätigkeiten und Erfahrungen in der Versicherungswirtschaft verweisen.
                </p>
                <p>
                  Als neutraler Versicherungsmakler sind wir keiner Versicherungsgesellschaft verpflichtet, 
                  sodass die persönlichen Wünsche, Interessen und Bedürfnisse unserer Kunden im Vordergrund 
                  jeder Beratung stehen.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                ZMF steht für:
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-slate-700 mb-6 leading-relaxed">
                "Wer seine Sache nicht mag, den mag sein Geschäft auch nicht." – 
                <span className="font-semibold text-blue-600"> Wir lieben unsere Sache!</span>
              </blockquote>
              <cite className="text-slate-500 text-lg">
                William Hazlitt (1778-1830, englischer Schriftsteller, Theaterkritiker und Philosoph)
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Unsere Leistungen im Überblick
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Privatkunden</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li>• Risikoanalyse zur Ermittlung des persönlichen Versicherungsbedarfs</li>
                  <li>• Maßgeschneiderte Lösungen in allen Versicherungsbereichen</li>
                  <li>• Vertrauliche und objektive Beratung</li>
                  <li>• Finanzanalyse zur Ermittlung des Vorsorgebedarfs</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Firmenkunden</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li>• Individuelle Bedarfsermittlungen zur Risikovermeidung</li>
                  <li>• Kompetente Risikoanalysen für umfassende Konzepte</li>
                  <li>• Großes Netzwerk an Produktpartnern</li>
                  <li>• Kompetentes Schadenmanagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UberUns;
