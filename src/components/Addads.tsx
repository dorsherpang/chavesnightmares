'use client';

import Script from 'next/script';
import { useEffect, useState, useRef } from 'react';

export default function Addads() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    // 防止 SSR 阶段渲染
    if (isMobile === null) return null;

    // 防止 React 严格模式 / 路由切换重复加载
    if (loadedRef.current) return null;
    loadedRef.current = true;

    return (
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                margin: '20px 0',
                minHeight: isMobile ? 50 : 90,
                overflow: 'hidden',
            }}
        >
            {isMobile ? (
                <>
                    {/* Mobile 320x50 */}
                    <Script
                        id="adsterra-320-config"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                atOptions = {
                  'key' : 'cf630985d1c8c26ef022208f22d30eb7',
                  'format' : 'iframe',
                  'height' : 50,
                  'width' : 320,
                  'params' : {}
                };
              `,
                        }}
                    />
                    <Script
                        id="adsterra-320-script"
                        src="https://www.highperformanceformat.com/cf630985d1c8c26ef022208f22d30eb7/invoke.js"
                        strategy="afterInteractive"
                    />
                </>
            ) : (
                <>
                    {/* Desktop 728x90 */}
                    <Script
                        id="adsterra-728-config"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                atOptions = {
                  'key' : '94d309e229c0053a423956945d0c89c0',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
                        }}
                    />
                    <Script
                        id="adsterra-728-script"
                        src="https://www.highperformanceformat.com/94d309e229c0053a423956945d0c89c0/invoke.js"
                        strategy="afterInteractive"
                    />
                </>
            )}
        </div>
    );
}
