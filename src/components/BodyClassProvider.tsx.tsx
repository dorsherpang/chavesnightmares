'use client';

import { useEffect, ReactNode } from 'react';

interface BodyClassProviderProps {
    children: ReactNode;
    className: string;
}

export default function BodyClassProvider({ children, className }: BodyClassProviderProps) {
    useEffect(() => {
        // 保存旧 class，防止其他地方影响
        const prevClass = document.body.className;
        document.body.className = className;

        // 清理副作用
        return () => {
            document.body.className = prevClass;
        };
    }, [className]);

    return <>{children}</>;
}
