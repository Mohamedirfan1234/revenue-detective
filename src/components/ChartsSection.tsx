import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart,
} from "recharts";

const activityData = [
  { day: "Mon", users: 1200 }, { day: "Tue", users: 1800 },
  { day: "Wed", users: 2200 }, { day: "Thu", users: 1900 },
  { day: "Fri", users: 2800 }, { day: "Sat", users: 3200 },
  { day: "Sun", users: 2600 },
];

const conversionData = [
  { stage: "Landing", rate: 100 }, { stage: "Signup", rate: 42 },
  { stage: "Cart", rate: 28 }, { stage: "Checkout", rate: 18 },
  { stage: "Purchase", rate: 6.8 },
];

const dropReasons = [
  { name: "Complex Checkout", value: 35, color: "#f43f5e" },
  { name: "Poor CTA", value: 25, color: "#fb923c" },
  { name: "Slow Load", value: 20, color: "#facc15" },
  { name: "Trust Issues", value: 12, color: "#a78bfa" },
  { name: "Other", value: 8, color: "#64748b" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-3 text-xs">
      <p className="text-foreground font-medium mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-muted-foreground">
          {p.name}: <span className="text-foreground tabular-nums">{p.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

const ChartsSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Analytics</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3 mb-4">
            Data that drives decisions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6">User Activity</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#71717a" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#71717a" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Conversion Chart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6">Conversion Rate by Stage</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="stage" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#71717a" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="rate" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Drop Reasons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6">User Drop-off Reasons</h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie data={dropReasons} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" stroke="none">
                    {dropReasons.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dropReasons.map((reason) => (
                  <div key={reason.name} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: reason.color }} />
                    <span className="text-sm text-muted-foreground">{reason.name}</span>
                    <span className="text-sm text-foreground font-medium tabular-nums ml-auto">{reason.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
