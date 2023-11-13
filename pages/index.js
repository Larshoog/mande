import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentTextButtonless from "../components/Contentblock";
import ContentImage from "../components/ContentImage";

const Index = () => (
    <Layout pagetype="home">
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl={'/images/IMG_9004.jpg'} linkUrl={'bio'} title={'Over Lars'} />
                <ContentImage imageUrl={'/images/IMG_9003.jpg'} linkUrl={'bio'} title={'Over Lars'} />
                <ContentImage imageUrl={'/images/IMG_9003.jpg'} linkUrl={'bio'} title={'Over Lars'} />
                <ContentImage imageUrl={'/images/IMG_9004.jpg'} linkUrl={'bio'} title={'Over Lars'} />
                <ContentImage imageUrl={'/images/IMG_9003.jpg'} linkUrl={'bio'} title={'Over Lars'} />
            </Section>
        </div>
    </Layout>
)

export default Index
