import React from 'react';
import { motion } from 'framer-motion';

export const HeadNode: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-16 pt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="font-mono text-accent mb-2">HEAD {'->'}</div>
                <h1 className="text-6xl md:text-8xl font-serif text-primary mb-4 tracking-tight">
                    Shreyas Sridhar
                </h1>
                <p className="text-xl text-secondary font-light max-w-lg mx-auto">
                    Backend Developer | System Integration | Automation
                </p>
            </motion.div>

            {/* Initial connection line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-px bg-line mt-8 relative"
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-line text-lg">↓</div>
            </motion.div>
        </div>
    );
};
