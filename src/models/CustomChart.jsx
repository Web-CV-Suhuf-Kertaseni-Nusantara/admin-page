export default function CustomChart({ visitorCount, limit}) {
    const percentage = (visitorCount / limit) * 100;
    const mainPercentage = percentage > 100 ? 100 : percentage;
    const mainHeight = percentage > 100 ? percentage - 100 : 0;
    return(
        <>
            <div className="flex flex-col">
                <div className="bg-white h-full"></div>
                <div className="bg-gray-500 h-full" style={{height: `${mainHeight}`}}></div>
            </div>
        </>
    )
}