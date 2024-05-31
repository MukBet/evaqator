
export default function HeaderImageItem({ src, alt, style, loading}) {
    return <img src={src} alt={alt} style={style} loading={loading} />;
}