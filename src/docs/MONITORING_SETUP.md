# 📊 MONITORING & ANALYTICS SETUP

**Complete guide to monitoring your production website**

---

## 🎯 OVERVIEW

Set up comprehensive monitoring for:
- ✅ Error tracking
- ✅ Performance monitoring
- ✅ Analytics & user behavior
- ✅ Uptime monitoring
- ✅ Core Web Vitals

---

## 1. ERROR TRACKING (Sentry)

### **Setup:**

```bash
npm install @sentry/react @sentry/tracing
```

### **Configuration:**

Create `/utils/sentry.ts`:

```typescript
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

export function initSentry() {
  if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 0.1, // 10% of transactions
      environment: import.meta.env.MODE,
      beforeSend(event) {
        // Filter out non-critical errors
        if (event.level === 'warning') return null;
        return event;
      },
    });
  }
}
```

### **Usage in main.tsx:**

```typescript
import { initSentry } from './utils/sentry';

initSentry();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### **Add to .env:**

```bash
VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

---

## 2. GOOGLE ANALYTICS 4

### **Setup:**

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
  });
</script>
```

### **Or use react-ga4:**

```bash
npm install react-ga4
```

```typescript
// utils/analytics.ts
import ReactGA from 'react-ga4';

export function initGA() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
}

export function trackPageView(path: string) {
  ReactGA.send({ hitType: 'pageview', page: path });
}

export function trackEvent(category: string, action: string, label?: string) {
  ReactGA.event({
    category,
    action,
    label,
  });
}
```

### **Track route changes:**

```typescript
// In App.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return <Routes>...</Routes>;
}
```

---

## 3. CORE WEB VITALS TRACKING

### **Setup:**

```bash
npm install web-vitals
```

### **Create tracker:**

```typescript
// utils/webVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, value, id }: any) {
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    });
  }
  
  // Also log to console in dev
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${name}:`, value);
  }
}

export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}
```

### **Usage in main.tsx:**

```typescript
import { reportWebVitals } from './utils/webVitals';

// After render
reportWebVitals();
```

---

## 4. FACEBOOK PIXEL (Optional)

### **Setup:**

Add to `index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

---

## 5. GOOGLE TAG MANAGER

### **Setup:**

Add to `index.html` after `<head>`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add after `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## 6. UPTIME MONITORING

### **Free Services:**

1. **UptimeRobot** (uptimerobot.com)
   - 50 monitors free
   - 5-minute checks
   - Email/SMS alerts

2. **Better Uptime** (betteruptime.com)
   - Status page
   - Incident management
   - Team notifications

3. **Freshping** (freshping.io)
   - 50 URLs free
   - Global checkpoints
   - Public status page

### **Setup:**
1. Create account
2. Add your domain
3. Set check interval (5 min)
4. Configure alerts

---

## 7. PERFORMANCE MONITORING

### **Lighthouse CI**

Automated Lighthouse checks on every deploy:

```bash
npm install -D @lhci/cli
```

Create `lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: ['http://localhost:4173'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

Add to `package.json`:

```json
{
  "scripts": {
    "lighthouse": "lhci autorun"
  }
}
```

---

## 8. CUSTOM EVENT TRACKING

### **Track important user actions:**

```typescript
// utils/events.ts
export const trackEvent = {
  contactForm: () => {
    if (window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'Contact Form',
      });
    }
  },
  
  blogRead: (title: string) => {
    if (window.gtag) {
      window.gtag('event', 'blog_read', {
        event_category: 'content',
        event_label: title,
      });
    }
  },
  
  serviceView: (service: string) => {
    if (window.gtag) {
      window.gtag('event', 'service_view', {
        event_category: 'services',
        event_label: service,
      });
    }
  },
};
```

### **Usage:**

```tsx
<button onClick={() => {
  trackEvent.contactForm();
  // Submit form
}}>
  Submit
</button>
```

---

## 9. MONITORING DASHBOARD

### **Recommended Stack:**

1. **Google Analytics 4** - User behavior
2. **Sentry** - Error tracking
3. **UptimeRobot** - Uptime monitoring
4. **Vercel Analytics** - Performance (built-in)
5. **Search Console** - SEO metrics

### **Create Custom Dashboard:**

Combine data from multiple sources:

```typescript
// components/AdminDashboard.tsx
export function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    uptime: 99.9,
    errors: 0,
    pageViews: 0,
    avgLoadTime: 0,
  });
  
  return (
    <div className="grid grid-cols-4 gap-6">
      <MetricCard title="Uptime" value={`${metrics.uptime}%`} />
      <MetricCard title="Errors" value={metrics.errors} />
      <MetricCard title="Page Views" value={metrics.pageViews} />
      <MetricCard title="Avg Load Time" value={`${metrics.avgLoadTime}s`} />
    </div>
  );
}
```

---

## 10. BUDGET & ALERTS

### **Set up alerts for:**

- ❌ Downtime (>1 minute)
- ⚠️ High error rate (>5 errors/hour)
- 🐌 Slow page load (>3 seconds)
- 📈 Traffic spikes (>200% normal)
- 💾 High bundle size (>200KB)

### **Notification Channels:**

- Email
- SMS (critical only)
- Slack/Discord webhook
- PagerDuty (for teams)

---

## ✅ MONITORING CHECKLIST

**Error Tracking:**
- [ ] Sentry configured
- [ ] Error alerts set up
- [ ] Source maps uploaded
- [ ] Team notifications

**Analytics:**
- [ ] Google Analytics installed
- [ ] GTM configured (optional)
- [ ] Event tracking implemented
- [ ] Goals defined

**Performance:**
- [ ] Web Vitals tracking
- [ ] Lighthouse CI integrated
- [ ] Performance budget set
- [ ] Alerts configured

**Uptime:**
- [ ] Uptime monitor active
- [ ] Status page created
- [ ] Alerts configured
- [ ] Team notifications

---

## 🎯 RECOMMENDED TOOLS

| Category | Free | Paid |
|----------|------|------|
| **Analytics** | GA4, Plausible | Mixpanel, Amplitude |
| **Errors** | Sentry (5K/mo) | Sentry Pro, Rollbar |
| **Uptime** | UptimeRobot | Pingdom, Better Uptime |
| **Performance** | Lighthouse, WebPageTest | SpeedCurve, Calibre |
| **RUM** | Vercel Analytics | New Relic, Datadog |

---

**Monitor everything. Improve continuously.** 📊
