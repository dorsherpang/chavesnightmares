'use client'; // 仅此组件启用客户端渲染

import { useRef } from 'react';
import { FiMaximize } from 'react-icons/fi'; // 使用 react-icons
interface PokepathIframeProps {
    src: string;
    title?: string;
    className?: string;
}

export default function PokepathIframe({
    src,
    title = 'PokéPath TD Game',
    className = 'w-full aspect-video',
}: PokepathIframeProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const goFullScreen = () => {
        if (iframeRef.current) {
            const el: any = iframeRef.current;
            if (el.requestFullscreen) el.requestFullscreen();
            else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen(); // Safari
            else if (el.msRequestFullscreen) el.msRequestFullscreen(); // IE11
        }
    };

    return (
        <div className="relative w-full">
            {/* 全屏按钮 */}
            <button
                onClick={goFullScreen}
                className="absolute bottom-2 right-2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition opacity-70 hover:opacity-100"
            >
                <FiMaximize className="w-5 h-5" />
            </button>

            <iframe
                ref={iframeRef}
                src={src}
                className={className}
                allow="fullscreen; autoplay"
                allowFullScreen
                loading="lazy"
                title={title}
            />
        </div>
    );
}
