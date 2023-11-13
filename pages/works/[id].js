import {getAllBandIds, getBandData} from "../../lib/works";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import ContentImage from "../../components/ContentImage";
import utilStyles from '../../styles/utils.module.css';
import ContentText from "../../components/ContentText";

const Bands = ({id, name, imageUrl}) => (
    <Layout pagetype={name}>
        <div className={utilStyles.gridwrapper}>
            <Section>
                <ContentImage imageUrl={imageUrl} linkUrl={imageUrl}/>
                <ContentText title={name} text={name}/>
            </Section>
        </div>
    </Layout>
)

export default Bands

export async function getStaticPaths() {
    // Return a list of possible value for id
    const id = getAllBandIds()
    return {
        paths: id,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: getBandData(params.id),
    }
}