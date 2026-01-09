import React from 'react';
import { Link } from 'react-router-dom';
import { Icons, MCC_NAV_LINKS } from '../constants';
import Icon from './Icon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-mccGreen text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="space-y-6">
                    <div className="font-serif text-3xl font-bold flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-mccGold flex items-center justify-center text-mccGold text-xl">M</div>
                        MCC
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Relaxed quality in the heart of Zululand. Where the fairways meet the lagoon and community thrives.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-mccGold hover:border-mccGold transition-all">
                            <Icon path={Icons.Facebook} className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-mccGold hover:border-mccGold transition-all">
                            <Icon path={Icons.Instagram} className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">Navigation</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {MCC_NAV_LINKS.map(link => (
                            <li key={link.id}>
                                <Link to={link.id === 'home' ? '/' : `/${link.id}`} className="hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">Clubhouse</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-start gap-3">
                            <Icon path={Icons.MapPin} className="w-4 h-4 text-mccGold mt-1 shrink-0" />
                            <span>1 Hely Hutchinson Street<br />Mtunzini, 3867</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon path={Icons.Phone} className="w-4 h-4 text-mccGold shrink-0" />
                            <span>035 340 1779</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon path={Icons.Mail} className="w-4 h-4 text-mccGold shrink-0" />
                            <span>manager@mtunzinicc.co.za</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-mccGold uppercase text-[11px] tracking-[0.2em] mb-8">The Experience</h4>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-300 italic leading-relaxed">
                            "We know the drill. You want a cold draught, the kids want to run wild. At MCC, you can actually finish a conversation while the little ones are safe."
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-6 h-0.5 bg-mccGold"></div>
                            <span className="text-[10px] uppercase font-bold text-mccGold">The Parent Promise</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-10 text-center text-[10px] text-gray-500 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Mtunzini Country Club. Built for the community.
            </div>
        </footer>
    );
};

export default Footer;
