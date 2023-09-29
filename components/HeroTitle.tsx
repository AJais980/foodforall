import Link from 'next/link'
import React from 'react'

const HeroTitle = () => {
    const headingStyle = {
        "display": "inline-block",
        "verticalAlign": "top",
        "textDecoration": "inherit",
        "textWrap": "balance"
    }
    return (
        <>
            <div aria-label="Food For All" className="hero_title">
                <span className="animated-gradient-text_background txt-food">
                    <span className="animated-gradient-text_foreground-1">
                        Food
                    </span>
                </span>
                <span className="animated-gradient-text_background txt-for">
                    <span className="animated-gradient-text_foreground-2">
                        For
                    </span>
                </span>
                <span className="animated-gradient-text_background txt-all">
                    <span className="animated-gradient-text_foreground-3">
                        All
                    </span>
                </span>
            </div>
            <h2 className="header_para">
                <span style={headingStyle}>
                    Join us at Food For All. Our mission: Ending food waste and hunger by connecting surplus food with those in need, one meal at a time.
                </span>
                <br />
                <div className="mt-5 button-wrapper">
                    <Link href="/manage">
                        <button className='top-button'>Donate</button>
                    </Link >
                </div>
            </h2 >
        </>
    )
}

export default HeroTitle