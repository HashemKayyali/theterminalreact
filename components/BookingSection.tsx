import React, { useState, ChangeEvent, FormEvent } from 'react';
import { User, Mail, Phone, Gamepad2, Calendar, Clock, Users, List } from 'lucide-react';

const games = [
    { id: 1, name: 'CyberRonin' },
    { id: 2, name: 'Aetheria Chronicles' },
    { id: 3, name: 'Starfall Racers' },
    { id: 4, name: 'Void Echoes' },
    { id: 5, name: 'Grove Guardians' },
    { id: 6, name: 'Iron Empire' },
];

interface FormData {
    name: string;
    email: string;
    phone: string;
    game: string;
    date: string;
    time: string;
    duration: string;
    numPlayers: number;
    playerNames: string[];
}

const BookingSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        game: '',
        date: '',
        time: '',
        duration: '',
        numPlayers: 2,
        playerNames: Array(2).fill(''),
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNumPlayersChange = (e: ChangeEvent<HTMLInputElement>) => {
        let count = parseInt(e.target.value, 10);
        if (isNaN(count)) {
            count = 2;
        } else if (count < 2) {
            count = 2;
        } else if (count > 7) {
            count = 7;
        }
        
        setFormData(prev => {
            const newPlayerNames = Array(count).fill('');
            // Preserve existing names when reducing player count
            for(let i=0; i < Math.min(prev.playerNames.length, count); i++) {
                newPlayerNames[i] = prev.playerNames[i];
            }
            return {
                ...prev,
                numPlayers: count,
                playerNames: newPlayerNames,
            };
        });
    };

    const handlePlayerNameChange = (index: number, value: string) => {
        setFormData(prev => {
            const newPlayerNames = [...prev.playerNames];
            newPlayerNames[index] = value;
            return { ...prev, playerNames: newPlayerNames };
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const durationTextMap: { [key: string]: string } = {
            "0.5": "30 Minutes",
            "1": "1 Hour",
            "1.5": "1.5 Hours",
            "2": "2 Hours"
        };
        const durationText = durationTextMap[formData.duration] || 'Not specified';

        const playerNamesList = formData.playerNames
            .map((name, index) => `${index + 1}. ${name || 'N/A'}`)
            .join('\n');

        const message = `
*New Game Booking Request*

*Your Information:*
Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}

*Booking Details:*
Game: ${formData.game || 'N/A'}
Date: ${formData.date || 'N/A'}
Time: ${formData.time || 'N/A'}
Duration: ${durationText}
Number of Players: ${formData.numPlayers}

*Player Names:*
${playerNamesList}
        `.trim().replace(/^\s+/gm, '');

        const phoneNumber = '962792200372'; // Jordan number without leading 0, with country code
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };


    return (
        <section id="booking" className="py-20 md:py-28 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">Book Your Game Session</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Reserve your spot and get ready for an unforgettable gaming experience.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-lg p-8 shadow-2xl shadow-blue-500/10">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
                        {/* User Information */}
                        <h3 className="md:col-span-2 text-2xl font-bold text-white mb-2 border-b border-gray-700 pb-3 flex items-center">
                            <User className="w-7 h-7 mr-3 text-blue-500"/>
                            Your Information
                        </h3>
                        <div className="relative">
                            <label htmlFor="booking-name" className="sr-only">Your Name</label>
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input type="text" id="booking-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>
                        <div className="relative">
                            <label htmlFor="booking-email" className="sr-only">Your Email</label>
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input type="email" id="booking-email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>
                         <div className="relative md:col-span-2">
                            <label htmlFor="booking-phone" className="sr-only">Your Phone Number</label>
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input type="tel" id="booking-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>

                        {/* Booking Details */}
                        <h3 className="md:col-span-2 text-2xl font-bold text-white mb-2 mt-6 border-b border-gray-700 pb-3 flex items-center">
                            <List className="w-7 h-7 mr-3 text-blue-500"/>
                            Booking Details
                        </h3>
                        <div className="relative">
                            <label htmlFor="game-type" className="sr-only">Game</label>
                            <Gamepad2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <select id="game-type" name="game" value={formData.game} onChange={handleChange} className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                                <option value="">Select a Game</option>
                                {games.map(game => (
                                    <option key={game.id} value={game.name}>{game.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <label htmlFor="booking-date" className="sr-only">Date</label>
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input type="date" id="booking-date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>
                        <div className="relative">
                            <label htmlFor="booking-time" className="sr-only">Time</label>
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input type="time" id="booking-time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>
                        <div className="relative">
                            <label htmlFor="duration" className="sr-only">Duration</label>
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <select id="duration" name="duration" value={formData.duration} onChange={handleChange} className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                                <option value="">Select Duration</option>
                                <option value="0.5">30 Minutes</option>
                                <option value="1">1 Hour</option>
                                <option value="1.5">1.5 Hours</option>
                                <option value="2">2 Hours</option>
                            </select>
                        </div>

                        <div className="relative md:col-span-2">
                             <label htmlFor="num-players" className="sr-only">Number of Players</label>
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input 
                                type="number" 
                                id="num-players" 
                                name="numPlayers" 
                                min="2" 
                                max="7"
                                value={formData.numPlayers}
                                onChange={handleNumPlayersChange}
                                placeholder="Number of Players" 
                                className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                        </div>

                        {/* Player Names */}
                        <div className="md:col-span-2">
                             <h4 className="text-lg font-semibold text-white mb-3">Player Names</h4>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {Array.from({ length: formData.numPlayers }, (_, i) => (
                                    <div className="relative" key={`player-${i}`}>
                                        <label htmlFor={`player-name-${i}`} className="sr-only">{`Player ${i + 1} Name`}</label>
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="text"
                                            id={`player-name-${i}`}
                                            name={`player-name-${i}`}
                                            placeholder={`Player ${i + 1} Name`}
                                            value={formData.playerNames[i]}
                                            onChange={(e) => handlePlayerNameChange(i, e.target.value)}
                                            className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                ))}
                             </div>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
             <style>{`
                input[type="date"]::-webkit-calendar-picker-indicator,
                input[type="time"]::-webkit-calendar-picker-indicator {
                    filter: invert(0.6) brightness(1.5);
                    cursor: pointer;
                }
            `}</style>
        </section>
    );
};

export default BookingSection;