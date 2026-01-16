import { useEffect, useRef, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingDown, RefreshCw, Target } from "lucide-react";

const generateChartData = () => {
  const data = [];
  let leads = 50;
  for (let i = 1; i <= 30; i++) {
    if (i <= 20) {
      leads = Math.max(0, leads - Math.floor(Math.random() * 4 + 1));
    }
    data.push({
      day: i,
      leads: leads,
      isPaused: i > 20,
    });
  }
  return data;
};

const chartData = generateChartData();

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const LeadsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tu bolsa de leads en <span className="text-emerald-600">acción</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualiza cómo funciona el consumo de leads y el ciclo de recarga automática
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-emerald-700">
                <AnimatedCounter end={12} />
              </div>
              <p className="text-emerald-600 text-sm">Leads recibidos</p>
            </div>

            <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              <TrendingDown className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-700">
                <AnimatedCounter end={60} suffix="%" />
              </div>
              <p className="text-gray-600 text-sm">Bolsa consumida</p>
            </div>

            <div className={`bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <RefreshCw className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-amber-700">
                <AnimatedCounter end={30} /> <span className="text-lg font-normal">días</span>
              </div>
              <p className="text-amber-600 text-sm">Ciclo de recarga</p>
            </div>
          </div>

          {/* Chart */}
          <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Consumo de leads durante el mes</h3>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full" />
                  Leads activos
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-gray-300 rounded-full" />
                  Pausa
                </span>
              </div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <ReferenceLine 
                    x={20} 
                    stroke="#F59E0B" 
                    strokeDasharray="5 5"
                    label={{ value: '⏸️ Inicio pausa', fill: '#F59E0B', fontSize: 12, position: 'top' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="leads"
                    stroke="#10B981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorLeads)"
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              💡 La bolsa se comparte entre todas tus propiedades activas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsDashboard;
