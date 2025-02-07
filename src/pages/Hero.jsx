import { Calendar, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero() {
    const [guestName, setGuestName] = useState('');

    useEffect(() => {
        // Get guest parameter from URL
        const urlParams = new URLSearchParams(window.location.search);
        const guestParam = urlParams.get('guest');

        if (guestParam) {
            try {
                const decodedName = safeBase64.decode(guestParam);
                setGuestName(decodedName);
            } catch (error) {
                console.error('Error decoding guest name:', error);
                setGuestName('');
            }
        }
    }, []);
    const CountdownTimer = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        function calculateTimeLeft() {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    menit: Math.floor((difference / 1000 / 60) % 60),
                    detik: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        }
        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearInterval(timer);
        }, [targetDate]);
        return (
            <div className="grid grid-cols-4 gap-4 mt-8">
                {Object.keys(timeLeft).map((interval) => (
                    <motion.div
                        key={interval}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center p-3 border bg-white/80 backdrop-blur-sm rounded-xl border-rose-100"
                    >
                        <span className="text-2xl font-bold text-rose-600">
                            {timeLeft[interval]}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{interval}</span>
                    </motion.div>
                ))}
            </div>
        );
    };
    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.random() * 3 + 3} h-${Math.random() * 3 + 3} ${i % 3 === 0 ? 'text-rose-400' :
                                i % 3 === 1 ? 'text-pink-400' :
                                    'text-red-400'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };
    return (
        <>
            <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden text-center " style={{ background: 'linear-gradient(to bottom, #FCE3CF, #D2E8F3)' }}>
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/2 translate-y-1/2 rounded-full bg-pink-100/50 blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 space-y-6"
                >
                    {/* Special Date Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mx-auto"
                    >
                        <span className="px-4 py-1 text-sm border rounded-full bg-rose-50 text-rose-600 border-rose-200">
                            Catat Tanggal Penting Ini
                        </span>
                    </motion.div>

                    {/* Date Display */}
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="italic font-light text-gray-500"
                        >
                            InsyaAllah Kami Akan Menikah
                        </motion.p>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"
                        >
                            {config.couple.groomName} & {config.couple.brideName}
                        </motion.h2>
                    </div>

                    {/* Time and Date Info */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative max-w-md mx-auto"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-white/50 backdrop-blur-md rounded-2xl" />

                        <div className="relative px-8 py-10 border rounded-2xl border-rose-100/50">
                            {/* Top Decorative Line */}
                            <div className="absolute top-0 -translate-x-1/2 -translate-y-px left-1/2">
                                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="space-y-6 text-center">
                                {/* Date and Time */}
                                <div className="space-y-3">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Calendar className="w-4 h-4 text-rose-400" />
                                        <span className="font-medium text-gray-700">
                                            {formatEventDate(config.event.dateTime, "full")}
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Clock className="w-4 h-4 text-rose-400" />
                                        <span className="font-medium text-gray-700">
                                            {config.event.time}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-px bg-rose-200/50" />
                                    <div className="w-2 h-2 rounded-full bg-rose-200" />
                                    <div className="w-12 h-px bg-rose-200/50" />
                                </div>

                                {/* Invitation Text */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                    className="space-y-2"
                                >
                                    <p className="font-serif italic text-gray-500">
                                        Kepada Yth.
                                    </p>
                                    <p className="font-medium text-gray-600">
                                        Bapak/Ibu/Saudara/i
                                    </p>
                                    <p className="text-lg font-semibold text-rose-500">
                                        {guestName ? guestName : "Tamu"}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Bottom Decorative Line */}
                            <div className="absolute bottom-0 -translate-x-1/2 translate-y-px left-1/2">
                                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
                            </div>
                        </div>

                        {/* Background Blur Circles */}
                        <div className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-rose-100/20 blur-xl" />
                        <div className="absolute w-24 h-24 rounded-full -bottom-4 -left-4 bg-rose-100/20 blur-xl" />
                    </motion.div>

                    {/* Countdown Timer */}
                    <CountdownTimer targetDate={config.event.dateTime} />

                    {/* Decorative Elements */}
                    <div className="relative pt-6">
                        <FloatingHearts />
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Heart className="w-12 h-12 mx-auto text-rose-500" fill="currentColor" />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}