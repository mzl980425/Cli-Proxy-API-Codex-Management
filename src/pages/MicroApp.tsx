import { useEffect, type ComponentType } from 'react';
import { useLocation } from 'react-router-dom';
import WujieReact from 'wujie-react';

const Wujie = WujieReact as unknown as ComponentType<Record<string, unknown>>;

const MICRO_APP_NAME = 'microApp';
const MICRO_APP_URL = 'https://maomaocpa.onrender.com/management.html';

export default function MicroApp() {
  const location = useLocation();

  useEffect(() => {
    const originalReplaceState = globalThis.history.replaceState.bind(globalThis.history);

    globalThis.history.replaceState = (state: any, title: string, url: string) => {
      try {
        const syncMicroAppUrl = new URL(url, globalThis.location.href).searchParams.get('microApp');
        if (syncMicroAppUrl) {
          const nextMicroAppHash = new URL(syncMicroAppUrl, globalThis.location.href).hash;
          url = nextMicroAppHash;
          console.log('nextMicroAppHash >>> ', nextMicroAppHash);
        }
      } catch {}
      originalReplaceState(state, title, url);
    };

    return () => {
      globalThis.history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <Wujie
      sync
      width="100%"
      height="100%"
      name={MICRO_APP_NAME}
      url={MICRO_APP_URL + '#' + location.pathname}
    />
  );
}
