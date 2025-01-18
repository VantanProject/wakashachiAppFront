export function MilkIcon ( { size = "small" } : { size?: "small" | "large" } ) {
    const sizes = {
        small: 20,
        large: 24,
    };

    const iconsize = sizes[size];

    return(
        <svg 
            viewBox={`0 0 {iconsize} {iconsize}`}
            width={iconsize}
            height={iconsize}
        >
            <image
                width={iconsize}
                height={iconsize}
                xlinkHref="data:image/png;base64,
                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"/>
        </svg>
    );
}