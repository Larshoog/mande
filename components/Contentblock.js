import utilStyles from '../styles/utils.module.css'

const ContentTextButtonless = ({ title, text, buttonUrl }) => (
    <div className={utilStyles.content}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
)

export default ContentTextButtonless
