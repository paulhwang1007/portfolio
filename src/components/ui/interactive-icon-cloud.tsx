"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"



export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

const CloudCanvas = React.memo(({ iconSlugs }: { iconSlugs: string[] }) => {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    )
  }, [data, theme])

  const cloudProps: Omit<ICloud, "children"> = useMemo(() => ({
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
        position: "relative",
        zIndex: 1,
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "default",
      tooltip: "div",
      tooltipDelay: 0,
      tooltipClass: "icon-cloud-tooltip",
      initial: [0.1, -0.1],
      clickToFront: 500,
      outlineColour: "#0000",
      maxSpeed: 0.02, // Capped max speed
      minSpeed: 0.005, // Constant slow idle speed
      dragControl: true,
      decel: 0.9,
      freezeActive: true,
      freezeDecel: true,
    },
  }), [])

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
})
CloudCanvas.displayName = "CloudCanvas";

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  useEffect(() => {
    // Robust MutationObserver to sync the custom label with the internal tooltip
    const observer = new MutationObserver((mutations) => {
      const tooltip = document.querySelector('.icon-cloud-tooltip') as HTMLElement;
      if (tooltip) {
        // TagCanvas sets display: none when hidden, or opacity.
        // We check inline styles specifically.
        const isHidden = tooltip.style.display === 'none' || tooltip.style.opacity === '0';
        const text = tooltip.innerText.trim();
        
        if (!isHidden && text) {
            setHoveredIcon((prev) => prev === text ? prev : text);
        } else {
            setHoveredIcon((prev) => prev === null ? prev : null);
        }
      }
    });

    observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        attributes: true, 
        attributeFilter: ['style', 'display', 'opacity'] 
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
        <style jsx global>{`
            /* Hide the original library tooltip purely visually */
            .icon-cloud-tooltip {
                opacity: 0 !important;
                pointer-events: none !important;
                z-index: -1000 !important;
                /* Note: We do NOT set display: none here, or the library might think it's hidden and stop updating it */
            }
        `}</style>
        
        <CloudCanvas iconSlugs={iconSlugs} />

        {/* Custom Persistent Label */}
        {/* Custom Persistent Label */}
        <div className="mt-8 flex flex-col items-center gap-2"> {/* Position below cloud */}
             <div className={`
                pointer-events-none px-8 py-3 rounded-full 
                bg-white/5 border border-white/10 text-base font-medium
                text-gray-300 backdrop-blur-md transition-all duration-300
                flex items-center gap-2 shadow-lg
                ${hoveredIcon ? 'scale-110 border-blue-500/30 text-white bg-blue-500/10' : ''}
            `}>
                <span className="transition-all duration-300">
                    {hoveredIcon ? hoveredIcon : "Hover over a Skill"}
                </span>
            </div>
            
            <div className={`
                transition-all duration-500 overflow-hidden
                ${hoveredIcon ? 'h-0 opacity-0' : 'h-6 opacity-100'}
            `}>
                <p className="text-sm text-gray-400/50 font-light tracking-wide flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2h-9.8a3.3 3.3 0 0 1-2.4-1.2l-2-2.7a2 2 0 0 1 .4-2.8h0a2.2 2.2 0 0 1 2.8.4l1.2 1.4"/><path d="m14.6 11.4 2.8-5.7a1.8 1.8 0 0 1 3.3 1.6l-1 5.3"/></svg>
                    Hold & Drag to Rotate Cloud
                </p>
            </div>
        </div>
    </div>
  )
}
