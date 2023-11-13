import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentTextButtonless from "../components/Contentblock";
import ContentImage from "../components/ContentImage";
import collectionInfo from '../lib/data.json'

const Index = () => (
    <Layout pagetype="home">
        <div className={utilStyles.gridwrapper}>
            <Section>
                {collectionInfo.collection1.map((painting) => (
                <ContentImage key={painting.id} imageUrl={painting.imageUrl} linkUrl={'works/' + painting.id} title={painting.name} />
                    ))}
            </Section>
        </div>
    </Layout>
)

export default Index
