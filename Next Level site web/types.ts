export type Language = 'FR' | 'EN' | 'ES' | 'AR';

export interface Translations {
  navbar: {
    features: string;
    join: string;
    cta: string;
    simulator: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
  stats: {
    clients: string;
    fps: string;
    latency: string;
    satisfaction: string;
  };
  story: {
    title: string;
    log_failure_title: string;
    log_failure_desc: string;
    log_success_title: string;
    log_success_desc: string;
    partner: string;
  };
  manifesto: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      techSpec: string;
    }[];
  };
  features: {
    title: string;
    grid: {
      title: string;
      desc: string;
      stat: string;
    }[];
  };
  discord: {
    status_label: string;
    status_value: string;
    access_label: string;
    cta: string;
    id_label: string;
  };
  footer: {
    copyright: string;
    system: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    select_cpu: string;
    select_gpu: string;
    select_ram: string;
    analyze_btn: string;
    analyzing: string;
    result_title: string;
    before: string;
    after: string;
    gain: string;
    latency_est: string;
  };
}