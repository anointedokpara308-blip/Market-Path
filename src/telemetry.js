import { supabase } from './supabaseClient';

export const trackAction = async (actionType, meta = {}) => {
  try {
    // 1. Keep local storage updating instantly so local UI responses remain snappy
    if (actionType === 'toolkit_download') {
      const current = parseInt(localStorage.getItem('mp_toolkit_downloads') || '0', 10);
      localStorage.setItem('mp_toolkit_downloads', (current + 1).toString());
    } else if (actionType === 'calculator_use') {
      const current = parseInt(localStorage.getItem('mp_calculator_uses') || '0', 10);
      localStorage.setItem('mp_calculator_uses', (current + 1).toString());
    } else if (actionType === 'quiz_complete') {
      const current = parseInt(localStorage.getItem('mp_quiz_completions') || '0', 10);
      localStorage.setItem('mp_quiz_completions', (current + 1).toString());
    } else if (actionType === 'roadmap_visit') {
      const current = parseInt(localStorage.getItem('mp_roadmap_visits') || '1', 10);
      localStorage.setItem('mp_roadmap_visits', (current + 1).toString());
    } else if (actionType === 'broker_click') {
      let map = {};
      try { map = JSON.parse(localStorage.getItem('mp_broker_clicks') || '{}'); } catch (e) { map = {}; }
      const broker = meta.brokerName || 'Exness';
      map[broker] = (map[broker] || 0) + 1;
      localStorage.setItem('mp_broker_clicks', JSON.stringify(map));
    } else if (actionType === 'article_read') {
      let map = {};
      try { map = JSON.parse(localStorage.getItem('mp_article_reads') || '{}'); } catch (e) { map = {}; }
      const title = meta.articleTitle || 'General Guide';
      map[title] = (map[title] || 0) + 1;
      localStorage.setItem('mp_article_reads', JSON.stringify(map));
    }

    // Global visit incrementer
    const totalVisits = parseInt(localStorage.getItem('mp_total_visits') || '1', 10) + 1;
    localStorage.setItem('mp_total_visits', totalVisits.toString());

    // 2. Push event securely to Supabase cloud table for global tracking
    const { error } = await supabase
      .from('telemetry_events')
      .insert([
        { 
          event_type: actionType, 
          meta: meta, 
          ip_address: 'global-node-client' 
        }
      ]);

    if (error) {
      console.warn('Supabase sync warning:', error.message);
    }
  } catch (err) {
    console.error('Failed to dispatch telemetry event:', err);
  }
};