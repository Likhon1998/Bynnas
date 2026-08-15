export default function SectionDivider({ title, subtitle }) {
    return (
        <div className="section-divider" data-divider>
            <span className="section-divider__mark" aria-hidden="true" />
            <p>
                {title}
                <br />
                {subtitle}
            </p>
        </div>
    );
}
