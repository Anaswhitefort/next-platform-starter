import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="bg-black text-white card">
            <div className="card-body border border-white rounded-[12px] shadow-[4px_6px_0px_4px_#35cbee]">
                {title && <h3 className="text-white card-title">{title}</h3>}
                {text && <p>{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="transition link text-neutral-900 hover:opacity-80">
                            {linkText}
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
