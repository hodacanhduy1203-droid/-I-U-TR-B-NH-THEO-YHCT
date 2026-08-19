import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { Home, Stethoscope, Leaf, Menu, Smartphone, Download, X, Layers, Sparkles, Activity } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallBanner(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const prevPathRef = useRef<string>(location.pathname);

  // Save current route to localStorage for persistence across reloads / backgrounding
  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
    if (location.pathname && location.pathname !== '/') {
      try {
        localStorage.setItem('mediconnect_last_route', fullPath);
      } catch (e) {
        // ignore storage errors
      }
    }
  }, [location.pathname, location.search, location.hash]);

  // Handle scroll position restoration & persistence
  useEffect(() => {
    const currentPath = location.pathname;
    const isNewRoute = prevPathRef.current !== currentPath;
    prevPathRef.current = currentPath;

    const mainEl = mainRef.current;
    if (!mainEl) return;

    if (isNewRoute) {
      // If user navigated to a different page, check if we have a saved position or scroll to top
      const savedPos = sessionStorage.getItem(`mediconnect_scroll_${currentPath}`);
      if (savedPos !== null) {
        mainEl.scrollTop = parseInt(savedPos, 10) || 0;
      } else {
        mainEl.scrollTop = 0;
      }
    } else {
      // Returning/re-rendering same page: restore saved position
      const savedPos = sessionStorage.getItem(`mediconnect_scroll_${currentPath}`);
      if (savedPos !== null && mainEl.scrollTop === 0) {
        mainEl.scrollTop = parseInt(savedPos, 10) || 0;
      }
    }
  }, [location.pathname, location.search]);

  // Save scroll position on scroll & when app is backgrounded / hidden
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const saveScroll = () => {
      if (mainEl && location.pathname) {
        try {
          sessionStorage.setItem(`mediconnect_scroll_${location.pathname}`, mainEl.scrollTop.toString());
        } catch (e) {
          // ignore
        }
      }
    };

    let timeoutId: any = null;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(saveScroll, 100);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        saveScroll();
      } else if (document.visibilityState === 'visible' && mainEl) {
        const savedPos = sessionStorage.getItem(`mediconnect_scroll_${location.pathname}`);
        if (savedPos !== null) {
          const targetY = parseInt(savedPos, 10) || 0;
          if (mainEl.scrollTop === 0 && targetY > 0) {
            mainEl.scrollTop = targetY;
          }
        }
      }
    };

    mainEl.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', saveScroll);
    window.addEventListener('beforeunload', saveScroll);

    return () => {
      clearTimeout(timeoutId);
      saveScroll();
      mainEl.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, [location.pathname]);

  const navigation = [
    { name: 'Tạng & Phủ', href: '/tang-phu', icon: Layers },
    { name: 'Danh mục bệnh', href: '/diseases', icon: Stethoscope },
    { name: 'Ngũ du huyệt', href: '/ngu-du-huyet', icon: Sparkles },
    { name: '28 mạch', href: '/28-mach', icon: Activity },
    { name: 'Hệ thống vị thuốc', href: '/vi-thuoc', icon: Leaf },
  ];

  return (
    <div className="fixed inset-0 flex w-full bg-parchment-50 overflow-hidden font-sans text-parchment-900">
      {/* Mobile overlay */}
      <div 
        className={cn("fixed inset-0 z-20 bg-parchment-950/40 transition-opacity lg:hidden", sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none")} 
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={cn("fixed inset-y-0 left-0 z-30 w-64 bg-ochre-50 border-r border-parchment-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto flex flex-col shadow-sm", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="p-4 border-b border-parchment-100 h-14 flex items-center shrink-0 bg-ochre-100/30">
          <Leaf className="w-5 h-5 text-herbal-500 mr-2" />
          <h3 className="text-[16px] font-bold text-herbal-800 font-dongy-serif uppercase tracking-widest leading-none mt-0.5">Y Học Tích Hợp</h3>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-3 bg-ochre-50">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "px-3 py-2.5 mb-1.5 rounded-lg cursor-pointer flex items-center transition-all",
                  isActive 
                    ? "bg-herbal-100 text-herbal-900 font-extrabold border-l-4 border-herbal-500 pl-2" 
                    : "text-parchment-800 font-bold hover:bg-herbal-50 hover:text-herbal-950"
                )}
              >
                <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-herbal-600 font-extrabold" : "text-parchment-500")} />
                <span className="font-dongy-body text-[14px]">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-parchment-50">
        <header className="h-14 bg-parchment-800 border-b-2 border-parchment-900 text-[#FFFDF9] flex items-center justify-between px-3 sm:px-5 shrink-0 shadow-sm relative z-10">
          <button 
            className="p-2 text-parchment-200 hover:text-white lg:hidden rounded-md focus:outline-none flex-shrink-0"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Mở menu</span>
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex items-center gap-2 sm:gap-4 lg:ml-0 overflow-hidden">
            <h1 className="text-[13px] xs:text-[14px] sm:text-[16px] font-bold tracking-widest font-dongy-serif flex items-center gap-1.5 sm:gap-2 truncate">
              <span className="text-[#FFFDF9] font-extrabold whitespace-nowrap">MEDICONNECT</span> 
              <span className="font-medium text-ochre-200 border-l border-parchment-600 pl-1.5 sm:pl-2 hidden md:inline text-[11px] sm:text-[12px] whitespace-nowrap">VIỆN Y HỌC CỔ TRUYỀN x HIỆN ĐẠI</span>
              <span className="font-medium text-ochre-200 border-l border-parchment-600 pl-1.5 sm:pl-2 md:hidden text-[9px] sm:text-[10px] whitespace-nowrap">YHCT x YHHĐ</span>
            </h1>
            
            {/* Stamp seal accent */}
            <div className="text-[9px] sm:text-[10px] font-dongy-serif font-extrabold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 border border-cinnabar-200 bg-cinnabar-50/10 text-cinnabar-100 rounded opacity-90 select-none hidden lg:block shrink-0">
              ĐÔNG Y THƯ PHÁP
            </div>
          </div>
        </header>

        <main 
          ref={mainRef}
          className="flex-1 relative overflow-y-auto overscroll-contain focus:outline-none px-3 lg:px-5 py-4 bg-parchment-50"
        >
          <div className="mx-auto w-full max-w-7xl min-h-full">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Modern Installation Banner for Android */}
      {showInstallBanner && (
        <div className="fixed top-4 left-4 right-4 z-[100] md:max-w-md md:mx-auto">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-herbal-100 rounded-3xl p-4 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-10 duration-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-herbal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-herbal-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-herbal-900">Đông Y Duy Hồ</h3>
                <p className="text-[11px] text-herbal-600 font-medium">Tải ứng dụng về máy Android của bạn</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleInstallClick}
                className="bg-herbal-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-herbal-900/20"
              >
                <Download className="w-3.5 h-3.5" />
                Tải App
              </button>
              <button 
                onClick={() => setShowInstallBanner(false)}
                className="p-2 hover:bg-herbal-50 rounded-full text-herbal-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Copyright Overlay */}
      <div className="fixed bottom-4 right-6 text-[10px] font-bold text-[#1C1204]/40 uppercase tracking-[0.2em] font-sans pointer-events-none z-50 select-none drop-shadow-sm">
        By Duy Hồ
      </div>
    </div>
  );
}
