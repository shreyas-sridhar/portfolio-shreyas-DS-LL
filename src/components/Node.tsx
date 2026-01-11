import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NodeProps {
    children: React.ReactNode;
    index: number;
    id?: string;
    isLast?: boolean;
}

export const Node: React.FC<NodeProps> = ({ children, index, id, isLast }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);

    return (
        <motion.div
            ref={ref}
            id={id}
            className="relative flex flex-col items-center max-w-2xl mx-auto"
            style={{ opacity, x }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Node Content Container */}
            <div className="z-10 w-full p-8 mb-4 border border-surface bg-background rounded-lg shadow-lg relative border-l-4 border-l-accent transition-all duration-500 hover:border-l-8">
                {/* Node index/address decoration */}
                <div className="absolute -top-3 right-4 bg-background px-2 text-xs font-mono text-secondary border border-surface rounded">
                    0x{index.toString(16).padStart(3, '0').toUpperCase()}
                </div>

                {children}
            </div>

            {/* Pointer (The "Next" Arrow/Line) */}
            {!isLast && (
                <div className="flex flex-col items-center h-24 w-full">
                    <div className="h-full w-px bg-line relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-accent"
                            style={{ height: useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]) }}
                        />
                    </div>
                    <div className="text-line text-lg -mt-1">↓</div>
                </div>
            )}
        </motion.div>
    );
};
