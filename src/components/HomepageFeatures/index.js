import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '📝',
    title: 'Blog',
    description: (
      <>
        Artigos e experiências sobre tecnologia, desenvolvimento e o que estou
        aprendendo no dia a dia.
      </>
    ),
  },
  {
    icon: '📚',
    title: 'Documentação ao vivo',
    description: (
      <>
        Anotações e referências que evoluem comigo — um espaço de consulta que
        mantenho sempre atualizado.
      </>
    ),
  },
  {
    icon: '🧪',
    title: 'Experimentos',
    description: (
      <>
        Testes, provas de conceito e aprendizados práticos registrados em
        primeira mão, sem filtro.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon} role="img">
          {icon}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
