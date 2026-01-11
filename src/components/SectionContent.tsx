import React from 'react';

interface SectionContentProps {
    title: string;
    children: React.ReactNode;
}

export const SectionContent: React.FC<SectionContentProps> = ({ title, children }) => {
    return (
        <div>
            <h2 className="text-3xl font-serif mb-6 text-primary border-b border-surface pb-2 inline-block">
                {title}
            </h2>
            <div className="text-secondary leading-relaxed font-sans">
                {children}
            </div>
        </div>
    );
};
