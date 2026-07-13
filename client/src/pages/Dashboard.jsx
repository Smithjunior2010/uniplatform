import { useLang } from '../i18n/LanguageContext';

export default function Dashboard() {
  const { t } = useLang();

  return (
    <div>
      <h1>{t.dashboard.title}</h1>
      <p>{t.dashboard.welcome}</p>
    </div>
  );
}