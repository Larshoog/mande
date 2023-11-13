import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/legacy/image'

const ContentImage = ({ title, linkUrl, imageUrl }) => (
    <div className={utilStyles.content}>
        <Link href={linkUrl}>
            <Image src={imageUrl} layout="fill" objectFit="contain" />
        </Link>
    </div>
)

export default ContentImage
