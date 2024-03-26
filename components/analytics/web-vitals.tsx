'use client';

import { useReportWebVitals } from 'next/web-vitals';

export const WebVitals = () => {
  // this callback will be invoked whenever a CWV metric is measured
  useReportWebVitals((metric) => {
    console.log(metric);
  });
  return null;
};
