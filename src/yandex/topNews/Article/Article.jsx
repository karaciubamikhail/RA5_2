export function Article ({children,header,desk}){
    return(
        <div className="Article">
            {children}
            <h2>{header}</h2>
            <p>{desk}</p>
        </div>
    )
}