import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Section from "../components/Section";
import ContentTextButtonless from "../components/Contentblock";
import ContentImage from "../components/ContentImage";
import SectionNoWrap from "../components/SectionNoWrap";

const Index = () => (
    <Layout pagetype="home">
        <div className={utilStyles.gridwrapper}>
            <SectionNoWrap>
                <ContentImage imageUrl={'/images/IMG_4849.jpg'} linkUrl={'bio'} title={''} />
                <ContentImage imageUrl={'/images/IMG_5076.jpg'} linkUrl={'bio'} title={''} />
                <ContentImage imageUrl={'/images/kamer.jpg'} linkUrl={'bio'} title={''} />
                <ContentImage imageUrl={'/images/IMG_9003.jpg'} linkUrl={'bio'} title={''} />
                <ContentImage imageUrl={'/images/IMG_9004.jpg'} linkUrl={'bio'} title={''} />
            </SectionNoWrap>
        </div>
    </Layout>
)

export default Index
