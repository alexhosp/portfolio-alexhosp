'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { sendGTMEvent } from '@next/third-parties/google';

interface Metric {
  event: string;
  name: string;
  delta: number;
  navigationType: string;
  rating: string;
  value: number;
}
const sendToGTM = (metric: Metric) => {
  sendGTMEvent({
    event: metric.name,
    name: metric.name,
    delta: metric.delta,
    navigationType: metric.navigationType,
    rating: metric.rating,
    value: metric.value,
  });
};

export const WebVitals = () => {
  useReportWebVitals((metric: Metric) => {
    console.log(metric);
    sendToGTM(metric);
  });
  return null;
};
