
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">ZMF</div>
                <div className="text-slate-400">Wirtschaftsberatungsgesellschaft mbH</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Seit über 25 Jahren Ihr leistungsstarker Versicherungsmakler mit kompetenter, 
              unabhängiger Beratung für mehr als 10.000 zufriedene Kunden.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>August-Bebel-Platz 14, 02625 Bautzen</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Telefon: Auf Anfrage</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>E-Mail: Auf Anfrage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Navigation</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-slate-300 hover:text-white transition-colors">
                Start
              </Link>
              <Link to="/uber-uns" className="block text-slate-300 hover:text-white transition-colors">
                Über uns
              </Link>
              <Link to="/versicherungen" className="block text-slate-300 hover:text-white transition-colors">
                Versicherungen
              </Link>
              <Link to="/finanzierungen" className="block text-slate-300 hover:text-white transition-colors">
                Finanzierungen
              </Link>
              <Link to="/kontakt" className="block text-slate-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Rechtliches</h3>
            <div className="space-y-3">
              <Link to="/erstinformation" className="block text-slate-300 hover:text-white transition-colors">
                Erstinformation
              </Link>
              <Link to="/impressum" className="block text-slate-300 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block text-slate-300 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link to="/esg-info" className="block text-slate-300 hover:text-white transition-colors">
                ESG-Info
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2025 ZMF Wirtschaftsberatungsgesellschaft mbH · Alle Rechte vorbehalten
            </p>
            <p className="text-slate-400 text-sm">
              Webdesign: Premium Digital Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
