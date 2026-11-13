import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span className={styles.livePill}>
        <span className={styles.dot} />
        LIVE DIGITAL GARDEN
      </span>
      <div className={styles.socialPills}>
        <a
          className={styles.socialPill}
          href="https://github.com/m4th3ux"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon />
          GitHub
        </a>
        <a
          className={styles.socialPill}
          href="https://www.linkedin.com/in/matheus-ulhoa/"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

function HeroCard({title, tagline}) {
  return (
    <section className={styles.heroCard}>
      <div className={styles.heroBar}>
        <div className={styles.trafficLights}>
          <span className={styles.tlRed} />
          <span className={styles.tlAmber} />
          <span className={styles.tlGreen} />
          <span className={styles.heroPath}>~/m4th3ux/dev-journal</span>
        </div>
        <span className={styles.bashBadge}>⌥ bash v5.2</span>
      </div>

      <div>
        <div className={styles.heroTitleRow}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <span className={styles.versionBadge}>v3.4</span>
        </div>
        <p className={styles.heroSubtitle}>{tagline}</p>
      </div>

      <div className={styles.heroActions}>
        <Link className={styles.primaryBtn} to="/blog">
          Ler o blog <span>📝</span>
        </Link>
        <Link className={styles.secondaryBtn} to="/docs/intro">
          Ver a documentação <span>📚</span>
        </Link>
      </div>

      <div className={styles.activityLog}>
        <div className={styles.activityMeta}>
          <span className={styles.activityCommit}>
            latest commit: <code>4f28e1c</code>
          </span>
          <span>há 2 dias</span>
        </div>
        <p className={styles.activityMsg}>
          <span className={styles.prompt}>&gt;</span> chore(docs): atualizar
          roadmap de arquitetura &amp; testes
        </p>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  iconBg,
  badgeText,
  badgeColor,
  title,
  description,
  to,
  children,
}) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardTop}>
        <span className={styles.cardIcon} style={{background: iconBg}}>
          {icon}
        </span>
        <span className={styles.cardBadge} style={{color: badgeColor}}>
          <span className={styles.badgeDot} />
          {badgeText}
        </span>
      </div>
      <div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDesc}>{description}</p>
      </div>
      {children}
    </Link>
  );
}

function Pillars() {
  return (
    <>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Pilares de Conhecimento</h2>
        <span className={styles.sectionMeta}>[3 nós ativos]</span>
      </div>

      <div className={styles.cards}>
        <FeatureCard
          icon="📝"
          iconBg="rgba(0, 255, 157, 0.10)"
          badgeText="Artigos & Ensaios"
          badgeColor="var(--color-primary-neon)"
          title="Blog"
          description="Artigos e experiências sobre tecnologia, desenvolvimento e o que estou aprendendo no dia a dia."
          to="/blog">
          <div className={styles.preview}>
            <div className={styles.previewMeta}>
              <span>Destaque recente</span>
              <span>5 min leitura</span>
            </div>
            <span className={styles.previewTitle}>
              Construindo pipelines eficientes com modern tooling
            </span>
            <div className={styles.tagRow}>
              <span className={styles.tag}>#frontend</span>
              <span className={styles.tag}>#architecture</span>
              <span className={styles.tag}>#dx</span>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard
          icon="📚"
          iconBg="rgba(80, 142, 255, 0.15)"
          badgeText="Sempre atualizado"
          badgeColor="var(--color-secondary-fixed)"
          title="Documentação ao vivo"
          description="Anotações e referências que evoluem comigo — um espaço de consulta que mantenho sempre atualizado."
          to="/docs/intro">
          <div className={styles.preview}>
            <div className={styles.tagRow}>
              <span className={styles.tag}>📁 Guia & Sintaxe</span>
              <span className={styles.tag}>🧩 Dev Environment</span>
            </div>
            <span className={styles.previewTitle}>
              Cheatsheets, dotfiles & configs
            </span>
          </div>
        </FeatureCard>

        <FeatureCard
          icon="🧪"
          iconBg="rgba(245, 158, 11, 0.15)"
          badgeText="Protótipos & POCs"
          badgeColor="var(--color-accent-amber)"
          title="Experimentos"
          description="Testes, provas de conceito e aprendizados práticos registrados em primeira mão, sem filtro."
          to="/blog">
          <div className={styles.preview}>
            <div className={styles.previewMeta}>
              <span>playground.ts</span>
              <span>POC_READY</span>
            </div>
            <p className={styles.activityMsg}>
              <span style={{color: 'var(--color-accent-cyan)'}}>const</span>{' '}
              experiment ={' '}
              <span style={{color: 'var(--color-primary-neon)'}}>await</span>{' '}
              lab.run({'{ test: '}
              <span style={{color: 'var(--color-accent-amber)'}}>"web-perf"</span>
              {' }'});
            </p>
          </div>
        </FeatureCard>
      </div>
    </>
  );
}

function Stack() {
  return (
    <section className={styles.stack}>
      <div className={styles.stackHeader}>
        <h2 className={styles.stackTitle}>⌥ Stack do Caderno</h2>
        <span className={styles.stackEngine}>Engine Docusaurus v3</span>
      </div>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricValue}>100%</span>
          <span className={styles.metricLabel}>Open Source</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricValue} style={{color: 'var(--color-primary-neon)'}}>
            &gt; 35
          </span>
          <span className={styles.metricLabel}>Notas Vivas</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricValue} style={{color: 'var(--color-secondary-fixed)'}}>
            MDX
          </span>
          <span className={styles.metricLabel}>Docs & Code</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={styles.wrapper}>
        <div className={styles.glowEmerald} />
        <div className={styles.glowCyan} />

        <StatusBar />
        <HeroCard title={siteConfig.title} tagline={siteConfig.tagline} />
        <Pillars />
        <Stack />
      </div>
    </Layout>
  );
}
