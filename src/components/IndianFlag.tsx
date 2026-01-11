import React from 'react';

export const IndianFlag: React.FC = () => {
    return (
        <div className="fixed top-6 right-6 z-50 hidden md:block">
            <div className="group border border-surface bg-background p-2 rounded shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <div className="w-20 h-14 border-[0.5px] border-secondary/20 flex flex-col shadow-inner">
                    {/* Saffron */}
                    <div className="h-1/3 bg-[#FF9933]"></div>

                    {/* White with Chakra */}
                    <div className="h-1/3 bg-white flex items-center justify-center relative overflow-hidden">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#000080] animate-spin-slow">
                            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                            {/* 24 Spokes */}
                            {[...Array(24)].map((_, i) => (
                                <line
                                    key={i}
                                    x1="12"
                                    y1="12"
                                    x2="12"
                                    y2="1"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    transform={`rotate(${i * 15} 12 12)`}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Green */}
                    <div className="h-1/3 bg-[#138808]"></div>
                </div>
                <div className="text-[10px] text-center mt-2 font-mono text-secondary tracking-[0.2em] group-hover:text-accent transition-colors">
                    IND
                </div>
            </div>
        </div>
    );
};
