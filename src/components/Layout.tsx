import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { Home, Stethoscope, Leaf, Menu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('app_scroll_' + location.pathname);
    if (saved && mainRef.current) {
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.scrollTop = parseInt(saved, 10);
        }
      }, 10);
    } else if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  const handleScroll = () => {
    if (mainRef.current) {
      localStorage.setItem('app_scroll_' + location.pathname, mainRef.current.scrollTop.toString());
    }
  };

  const navigation = [
    { name: 'Tổng quan', href: '/', icon: Home },
    { name: 'Danh mục bệnh', href: '/diseases', icon: Stethoscope },
  ];

  return (
    <div className="flex h-screen bg-[#FAF6ED] overflow-hidden font-sans text-parchment-900">
      {/* Mobile overlay */}
      <div 
        className={cn("fixed inset-0 z-20 bg-parchment-950/40 transition-opacity lg:hidden", sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none")} 
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={cn("fixed inset-y-0 left-0 z-30 w-64 bg-[#FCFAF5] border-r border-parchment-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto flex flex-col shadow-sm", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="p-4 border-b border-parchment-100 h-14 flex items-center shrink-0 bg-[#F5EFE0]/40">
          <Leaf className="w-5 h-5 text-herbal-700 mr-2" />
          <h3 className="text-[16px] font-bold text-herbal-850 font-dongy-serif uppercase tracking-widest leading-none mt-0.5">Y Học Tích Hợp</h3>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-3 bg-[#FCFAF5]">
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
                    ? "bg-herbal-100/60 text-herbal-900 font-extrabold border-l-4 border-herbal-600 pl-2" 
                    : "text-parchment-800 font-bold hover:bg-parchment-100/80 hover:text-parchment-950"
                )}
              >
                <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-herbal-700 font-extrabold" : "text-parchment-600")} />
                <span className="font-dongy-body text-[14px]">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-parchment-50">
        <header className="h-14 bg-herbal-800 border-b border-herbal-900 text-[#FFFDF9] flex items-center justify-between px-3 sm:px-5 shrink-0 shadow-sm relative z-10">
          <button 
            className="p-2 -mr-2 text-herbal-100 hover:text-white lg:hidden rounded-md focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Mở menu</span>
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 sm:-ml-4 flex items-center gap-4 lg:ml-0 justify-between sm:justify-start">
            <h1 className="text-[14px] sm:text-[17px] font-bold tracking-widest font-dongy-serif flex items-center gap-2">
              <span className="text-[#FFFDF9] font-extrabold">MEDICONNECT</span> 
              <span className="font-light text-ochre-200 border-l border-herbal-600 pl-2 hidden sm:inline text-[12.5px]">VIỆN Y HỌC CỔ TRUYỀN x HIỆN ĐẠI</span>
              <span className="font-light text-ochre-200 border-l border-herbal-600 pl-2 sm:hidden text-[10px]">YHCT x YHHĐ</span>
            </h1>
            
            {/* Stamp seal accent */}
            <div className="text-[10px] font-dongy-serif font-extrabold uppercase tracking-widest px-2.5 py-0.5 border border-cinnabar-200 bg-cinnabar-50/10 text-cinnabar-100 rounded opacity-90 select-none hidden md:block">
              ĐÔNG Y THƯ PHÁP
            </div>
          </div>
        </header>

        <main 
          ref={mainRef}
          onScroll={handleScroll}
          className="flex-1 relative overflow-y-auto focus:outline-none px-3 lg:px-5 py-4 bg-parchment-50"
        >
          <div className="mx-auto w-full max-w-7xl min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
