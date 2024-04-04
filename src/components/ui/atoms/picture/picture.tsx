interface PictureProps {
    src: string
    alt: string
}

export const Picture = ({ src, alt }: PictureProps) => {
    return <img src={src} alt={alt} />
}
